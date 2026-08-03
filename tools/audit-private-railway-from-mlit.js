#!/usr/bin/env node
'use strict';

// 国土交通省「国土数値情報 鉄道データ(N02)」の駅位置と「行政区域データ(N03)」を
// 空間結合し、民営鉄道(N02_002=4)・第三セクター(N02_002=5)の駅がある自治体を算出する。
// Usage:
//   node tools/audit-private-railway-from-mlit.js STATION.geojson N03_ZIP_DIR [OUTPUT.json]

const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const [stationPath, adminZipDir, outputPath] = process.argv.slice(2);
if(!stationPath || !adminZipDir){
  console.error('Usage: node tools/audit-private-railway-from-mlit.js STATION.geojson N03_ZIP_DIR [OUTPUT.json]');
  process.exit(2);
}

const root = path.resolve(__dirname, '..');
const cities = JSON.parse(fs.readFileSync(path.join(root, 'cities.json'), 'utf8'));
const cityByPlainId = new Map(cities.filter(city => city.name !== '東京').map(city => [
  `${city.pref}::${city.name.replace(/（[^）]+）$/, '')}`,
  city,
]));

function stationPoints(geometry){
  const coordinates = geometry && geometry.coordinates;
  if(!Array.isArray(coordinates) || !coordinates.length) return [];
  const first = coordinates[0];
  const last = coordinates[coordinates.length - 1];
  const middle = [
    coordinates.reduce((sum, point) => sum + point[0], 0) / coordinates.length,
    coordinates.reduce((sum, point) => sum + point[1], 0) / coordinates.length,
  ];
  return [middle, first, last];
}

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
    const xi = ring[i][0], yi = ring[i][1];
    const xj = ring[j][0], yj = ring[j][1];
    const cross = (point[0] - xi) * (yj - yi) - (point[1] - yi) * (xj - xi);
    const onSegment = Math.abs(cross) < 1e-10 &&
      point[0] >= Math.min(xi, xj) - 1e-10 && point[0] <= Math.max(xi, xj) + 1e-10 &&
      point[1] >= Math.min(yi, yj) - 1e-10 && point[1] <= Math.max(yi, yj) + 1e-10;
    if(onSegment) return true;
    const crosses = ((yi > point[1]) !== (yj > point[1])) &&
      (point[0] < (xj - xi) * (point[1] - yi) / ((yj - yi) || Number.EPSILON) + xi);
    if(crosses) inside = !inside;
  }
  return inside;
}

function pointInPolygon(point, rings){
  if(!rings.length || !pointInRing(point, rings[0])) return false;
  return !rings.slice(1).some(ring => pointInRing(point, ring));
}

function pointInGeometry(point, geometry){
  if(geometry.type === 'Polygon') return pointInPolygon(point, geometry.coordinates);
  if(geometry.type === 'MultiPolygon') return geometry.coordinates.some(polygon => pointInPolygon(point, polygon));
  return false;
}

const stationGeojson = JSON.parse(fs.readFileSync(stationPath, 'utf8'));
const targetStations = stationGeojson.features.map(feature => ({
  points: stationPoints(feature.geometry),
  properties: feature.properties,
  matched: false,
}));

const evidence = new Map();
const municipalitiesWithAnyStation = new Set();
// 行政界近傍の駅はN02の短い駅線形とN03境界のずれで隣接自治体へ入る場合がある。
// 駅の公式所在地に基づく例外だけを先に確定し、残りを空間結合する。
const stationLocationExceptions = new Map([
  ['東京モノレール::東京モノレール羽田空港線::大井競馬場前', '東京都::品川区'],
  ['芝山鉄道::芝山鉄道線::芝山千代田', '千葉県::芝山町'],
]);
function addMatchedStation(city, properties){
  const cityId = `${city.pref}::${city.name}`;
  municipalitiesWithAnyStation.add(cityId);
  if(properties.N02_002 !== '4' && properties.N02_002 !== '5') return;
  const records = evidence.get(cityId) || [];
  records.push({
    station: properties.N02_005,
    line: properties.N02_003,
    operator: properties.N02_004,
    operatorType: properties.N02_002 === '4' ? '民営鉄道' : '第三セクター',
  });
  evidence.set(cityId, records);
}
for(const station of targetStations){
  const p = station.properties;
  const exceptionId = stationLocationExceptions.get(`${p.N02_004}::${p.N02_003}::${p.N02_005}`);
  if(!exceptionId) continue;
  const city = cityByPlainId.get(exceptionId);
  if(!city) throw new Error(`駅位置補正先がcities.jsonにありません: ${exceptionId}`);
  addMatchedStation(city, p);
  station.matched = true;
}
const adminZips = fs.readdirSync(adminZipDir).filter(name => name.endsWith('_GML.zip')).sort();
for(const zipName of adminZips){
  const geojsonName = zipName.replace('_GML.zip', '.geojson');
  const raw = execFileSync('unzip', ['-p', path.join(adminZipDir, zipName), geojsonName], {
    encoding: 'utf8',
    maxBuffer: 1024 * 1024 * 1024,
  });
  const admin = JSON.parse(raw);
  const features = admin.features.filter(feature => feature.properties.N03_004 && feature.properties.N03_004 !== '所属未定地')
    .map(feature => ({ feature, bbox: bboxOfCoordinates(feature.geometry.coordinates) }));
  if(!features.length) continue;
  const prefecture = features[0].feature.properties.N03_001;
  const prefStations = targetStations.filter(station => !station.matched && station.points.some(point =>
    features.some(({ bbox }) => bboxContains(bbox, point))
  ));

  for(const station of prefStations){
    let matchedFeature = null;
    for(const point of station.points){
      matchedFeature = features.find(({ feature, bbox }) => bboxContains(bbox, point) && pointInGeometry(point, feature.geometry));
      if(matchedFeature) break;
    }
    if(!matchedFeature) continue;
    const plainId = `${prefecture}::${matchedFeature.feature.properties.N03_004}`;
    const city = cityByPlainId.get(plainId);
    if(!city) throw new Error(`cities.jsonに行政区域がありません: ${plainId}`);
    addMatchedStation(city, station.properties);
    station.matched = true;
  }
}

const stillUnmatched = targetStations.filter(station => !station.matched);
if(stillUnmatched.length){
  console.error(JSON.stringify(stillUnmatched.map(station => station.properties), null, 2));
  throw new Error(`行政区域へ結合できない旅客駅があります: ${stillUnmatched.length}件`);
}

const municipalities = [...evidence].sort(([a], [b]) => a.localeCompare(b, 'ja')).map(([id, records]) => ({
  id,
  evidence: records.sort((a, b) => a.station.localeCompare(b.station, 'ja')),
}));
const result = {
  source: '国土交通省 国土数値情報 鉄道データ N02-25／行政区域データ N03-2025',
  stationReferenceDate: '2025-12-31',
  operatorTypes: ['4: 民営鉄道', '5: 第三セクター'],
  allPassengerStationFeaturesAudited: targetStations.length,
  stationFeaturesAudited: targetStations.filter(station => station.properties.N02_002 === '4' || station.properties.N02_002 === '5').length,
  municipalityCount: municipalities.length,
  municipalitiesWithAnyStation: [...municipalitiesWithAnyStation].sort((a, b) => a.localeCompare(b, 'ja')),
  municipalitiesWithoutAnyStation: cities.filter(city => city.name !== '東京')
    .map(city => `${city.pref}::${city.name}`)
    .filter(id => !municipalitiesWithAnyStation.has(id))
    .sort((a, b) => a.localeCompare(b, 'ja')),
  municipalities,
};
const serialized = `${JSON.stringify(result, null, 2)}\n`;
if(outputPath) fs.writeFileSync(outputPath, serialized);
else process.stdout.write(serialized);
