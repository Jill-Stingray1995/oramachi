#!/usr/bin/env node
'use strict';

// 国土交通省「国土数値情報 高速道路時系列データ(N06)」の接合部のうち
// 接合部区分=3(JCT)を「行政区域データ(N03)」へ空間結合する。
// Usage:
//   node tools/audit-highway-junctions-from-mlit.js JOINT.geojson N03_ZIP_DIR [OUTPUT.json] [--apply]

const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const args = process.argv.slice(2);
const [jointPath, adminZipDir, outputPath] = args.filter(arg => arg !== '--apply');
const apply = args.includes('--apply');
if(!jointPath || !adminZipDir){
  console.error('Usage: node tools/audit-highway-junctions-from-mlit.js JOINT.geojson N03_ZIP_DIR [OUTPUT.json] [--apply]');
  process.exit(2);
}

const root = path.resolve(__dirname, '..');
const citiesPath = path.join(root, 'cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));
const cityByPlainId = new Map(cities.filter(city => city.name !== '東京').map(city => [
  `${city.pref}::${city.name.replace(/（[^）]+）$/, '')}`,
  city,
]));

function bboxOfCoordinates(value, bbox = [Infinity, Infinity, -Infinity, -Infinity]){
  if(typeof value[0] === 'number'){
    bbox[0] = Math.min(bbox[0], value[0]);
    bbox[1] = Math.min(bbox[1], value[1]);
    bbox[2] = Math.max(bbox[2], value[0]);
    bbox[3] = Math.max(bbox[3], value[1]);
    return bbox;
  }
  for(const child of value) bboxOfCoordinates(child, bbox);
  return bbox;
}

function bboxContains(bbox, point){
  return point[0] >= bbox[0] && point[0] <= bbox[2] && point[1] >= bbox[1] && point[1] <= bbox[3];
}

function pointInRing(point, ring){
  let inside = false;
  for(let i = 0, j = ring.length - 1; i < ring.length; j = i++){
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    const cross = (point[0] - xi) * (yj - yi) - (point[1] - yi) * (xj - xi);
    if(Math.abs(cross) < 1e-10 && point[0] >= Math.min(xi, xj) - 1e-10 &&
      point[0] <= Math.max(xi, xj) + 1e-10 && point[1] >= Math.min(yi, yj) - 1e-10 &&
      point[1] <= Math.max(yi, yj) + 1e-10) return true;
    if(((yi > point[1]) !== (yj > point[1])) &&
      point[0] < (xj - xi) * (point[1] - yi) / ((yj - yi) || Number.EPSILON) + xi) inside = !inside;
  }
  return inside;
}

function pointInGeometry(point, geometry){
  const inPolygon = rings => rings.length && pointInRing(point, rings[0]) &&
    !rings.slice(1).some(ring => pointInRing(point, ring));
  if(geometry.type === 'Polygon') return inPolygon(geometry.coordinates);
  if(geometry.type === 'MultiPolygon') return geometry.coordinates.some(inPolygon);
  return false;
}

const jointGeojson = JSON.parse(fs.readFileSync(jointPath, 'utf8'));
const junctions = jointGeojson.features.filter(feature => String(feature.properties.N06_019) === '3')
  .map(feature => ({ point: feature.geometry.coordinates, properties: feature.properties, matched: false }));
const evidence = new Map();
// N06とN03の作成年差により境界外へ数十mずれる既知点は、国交省の施設名・所在地で補正する。
const locationExceptions = new Map([
  ['仁保JCT', '山口県::山口市'],
]);
for(const junction of junctions){
  const exceptionId = locationExceptions.get(junction.properties.N06_018);
  if(!exceptionId) continue;
  const city = cityByPlainId.get(exceptionId);
  if(!city) throw new Error(`JCT位置補正先がcities.jsonにありません: ${exceptionId}`);
  const id = `${city.pref}::${city.name}`;
  if(!evidence.has(id)) evidence.set(id, []);
  evidence.get(id).push(junction.properties.N06_018);
  junction.matched = true;
}
const adminZips = fs.readdirSync(adminZipDir).filter(name => name.endsWith('_GML.zip')).sort();

for(const zipName of adminZips){
  const geojsonName = zipName.replace('_GML.zip', '.geojson');
  const raw = execFileSync('unzip', ['-p', path.join(adminZipDir, zipName), geojsonName], {
    encoding: 'utf8', maxBuffer: 1024 * 1024 * 1024,
  });
  const features = JSON.parse(raw).features
    .filter(feature => feature.properties.N03_004 && feature.properties.N03_004 !== '所属未定地')
    .map(feature => ({ feature, bbox: bboxOfCoordinates(feature.geometry.coordinates) }));
  if(!features.length) continue;
  const prefecture = features[0].feature.properties.N03_001;
  for(const junction of junctions.filter(item => !item.matched && features.some(({ bbox }) => bboxContains(bbox, item.point)))){
    const match = features.find(({ feature, bbox }) => bboxContains(bbox, junction.point) && pointInGeometry(junction.point, feature.geometry));
    if(!match) continue;
    const plainId = `${prefecture}::${match.feature.properties.N03_004}`;
    const city = cityByPlainId.get(plainId);
    if(!city) throw new Error(`cities.jsonに行政区域がありません: ${plainId}`);
    const id = `${city.pref}::${city.name}`;
    if(!evidence.has(id)) evidence.set(id, []);
    evidence.get(id).push(junction.properties.N06_018);
    junction.matched = true;
  }
}

const unmatched = junctions.filter(item => !item.matched);
if(unmatched.length) throw new Error(`行政区域へ結合できないJCTがあります: ${unmatched.map(item => item.properties.N06_018).join('、')}`);

const municipalities = [...evidence].sort(([a], [b]) => a.localeCompare(b, 'ja')).map(([id, names]) => ({
  id,
  junctions: [...new Set(names)].sort((a, b) => a.localeCompare(b, 'ja')),
}));
const expected = new Set(municipalities.map(item => item.id));
const before = new Set(cities.filter(city => city.tags.includes('expressway_junction')).map(city => `${city.pref}::${city.name}`));
const added = [...expected].filter(id => !before.has(id)).sort((a, b) => a.localeCompare(b, 'ja'));
const removed = [...before].filter(id => !expected.has(id)).sort((a, b) => a.localeCompare(b, 'ja'));

if(apply){
  for(const city of cities){
    const id = `${city.pref}::${city.name}`;
    city.tags = city.tags.filter(tag => tag !== 'expressway_junction');
    if(expected.has(id)) city.tags.push('expressway_junction');
    city.tags.sort((a, b) => a.localeCompare(b, 'en'));
  }
  fs.writeFileSync(citiesPath, `${JSON.stringify(cities, null, 2)}\n`);
}

const result = {
  source: '国土交通省 国土数値情報 高速道路時系列データ N06-22／行政区域データ N03-2025',
  highwayReferenceYear: 2022,
  adminReferenceDate: '2025-01-01',
  criterion: 'N06接合部区分=3（JCT）の公式座標が行政区域内にある',
  junctionFeaturesAudited: junctions.length,
  municipalityCount: municipalities.length,
  changes: { added, removed },
  municipalities,
};
const serialized = `${JSON.stringify(result, null, 2)}\n`;
if(outputPath) fs.writeFileSync(outputPath, serialized);
else process.stdout.write(serialized);
