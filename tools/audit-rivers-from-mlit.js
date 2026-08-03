#!/usr/bin/env node
'use strict';

// 国土交通省「国土数値情報 河川データ(W05)」の河川法上の一級・二級河川区間を
// 「行政区域データ(N03)」へ空間結合し、big_riverタグを再生成する。
// Usage:
//   node tools/audit-rivers-from-mlit.js W05_ZIP_DIR N03_ZIP_DIR [OUTPUT.json] [--apply]

const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { execFileSync } = require('node:child_process');
const shapefile = require('shapefile');

const args = process.argv.slice(2);
const [riverZipDir, adminZipDir, outputPath] = args.filter(arg => arg !== '--apply');
const apply = args.includes('--apply');
const onlyPref = (args.find(arg => arg.startsWith('--pref=')) || '').slice(7);
if(!riverZipDir || !adminZipDir){
  console.error('Usage: node tools/audit-rivers-from-mlit.js W05_ZIP_DIR N03_ZIP_DIR [OUTPUT.json] [--apply]');
  process.exit(2);
}

const root = path.resolve(__dirname, '..');
const citiesPath = path.join(root, 'cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));
const cityByPlainId = new Map(cities.filter(city => city.name !== '東京').map(city => [
  `${city.pref}::${city.name.replace(/（[^）]+）$/, '')}`,
  city,
]));
const TARGET_INTERVAL_TYPES = new Set(['1', '5']);

function bboxOfCoordinates(value, bbox = [Infinity, Infinity, -Infinity, -Infinity]){
  if(typeof value[0] === 'number'){
    bbox[0] = Math.min(bbox[0], value[0]); bbox[1] = Math.min(bbox[1], value[1]);
    bbox[2] = Math.max(bbox[2], value[0]); bbox[3] = Math.max(bbox[3], value[1]);
    return bbox;
  }
  for(const child of value) bboxOfCoordinates(child, bbox);
  return bbox;
}
function bboxOverlaps(a, b){ return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]; }
const GRID_SIZE = 0.25;
function gridKeys(bbox){
  const keys = [];
  for(let x = Math.floor(bbox[0] / GRID_SIZE); x <= Math.floor(bbox[2] / GRID_SIZE); x++){
    for(let y = Math.floor(bbox[1] / GRID_SIZE); y <= Math.floor(bbox[3] / GRID_SIZE); y++) keys.push(`${x}:${y}`);
  }
  return keys;
}
function pointInRing(point, ring){
  let inside = false;
  for(let i = 0, j = ring.length - 1; i < ring.length; j = i++){
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    const cross = (point[0] - xi) * (yj - yi) - (point[1] - yi) * (xj - xi);
    if(Math.abs(cross) < 1e-10 && point[0] >= Math.min(xi, xj) - 1e-10 && point[0] <= Math.max(xi, xj) + 1e-10 &&
      point[1] >= Math.min(yi, yj) - 1e-10 && point[1] <= Math.max(yi, yj) + 1e-10) return true;
    if(((yi > point[1]) !== (yj > point[1])) && point[0] < (xj - xi) * (point[1] - yi) / ((yj - yi) || Number.EPSILON) + xi) inside = !inside;
  }
  return inside;
}
function pointInPolygon(point, rings){ return rings.length && pointInRing(point, rings[0]) && !rings.slice(1).some(ring => pointInRing(point, ring)); }
function orientation(a, b, c){
  const value = (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  return Math.abs(value) < 1e-12 ? 0 : Math.sign(value);
}
function segmentsIntersect(a, b, c, d){
  const o1 = orientation(a, b, c), o2 = orientation(a, b, d), o3 = orientation(c, d, a), o4 = orientation(c, d, b);
  if(o1 !== o2 && o3 !== o4) return true;
  const on = (p, q, r) => q[0] >= Math.min(p[0], r[0]) - 1e-12 && q[0] <= Math.max(p[0], r[0]) + 1e-12 &&
    q[1] >= Math.min(p[1], r[1]) - 1e-12 && q[1] <= Math.max(p[1], r[1]) + 1e-12;
  return (o1 === 0 && on(a, c, b)) || (o2 === 0 && on(a, d, b)) || (o3 === 0 && on(c, a, d)) || (o4 === 0 && on(c, b, d));
}
function lineIntersectsPolygon(line, rings){
  if(line.some(point => pointInPolygon(point, rings))) return true;
  for(let i = 1; i < line.length; i++) for(const ring of rings) for(let j = 1; j < ring.length; j++){
    if(segmentsIntersect(line[i - 1], line[i], ring[j - 1], ring[j])) return true;
  }
  return false;
}
function lineIntersectsGeometry(geometry, polygonGeometry){
  const lines = geometry.type === 'LineString' ? [geometry.coordinates] : geometry.coordinates;
  const polygons = polygonGeometry.type === 'Polygon' ? [polygonGeometry.coordinates] : polygonGeometry.coordinates;
  return lines.some(line => polygons.some(polygon => lineIntersectsPolygon(line, polygon)));
}

async function main(){
  const evidence = new Map();
  let audited = 0;
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'oramachi-river-'));
  let riverZips = fs.readdirSync(riverZipDir).filter(name => /^W05-\d+_\d+_GML\.zip$/.test(name)).sort((a, b) =>
    Number(a.match(/_(\d+)_/)[1]) - Number(b.match(/_(\d+)_/)[1]));
  if(riverZips.length !== 47) throw new Error(`W05都道府県ZIPが47件ではありません: ${riverZips.length}`);
  if(onlyPref) riverZips = riverZips.filter(name => name.includes(`_${onlyPref}_GML.zip`));

  for(const riverZipName of riverZips){
    const prefCode = riverZipName.match(/_(\d+)_/)[1];
    const adminZipName = fs.readdirSync(adminZipDir).find(name => name.includes(`_${prefCode}_GML.zip`));
    if(!adminZipName) throw new Error(`N03行政区域ZIPがありません: ${prefCode}`);
    const adminZipPath = path.join(adminZipDir, adminZipName);
    const adminBase = adminZipName.replace('_GML.zip', '');
    const adminShpName = `${adminBase}.shp`, adminDbfName = `${adminBase}.dbf`;
    execFileSync('unzip', ['-o', '-q', adminZipPath, adminShpName, adminDbfName, '-d', tempDir]);
    const adminSource = await shapefile.open(path.join(tempDir, adminShpName), path.join(tempDir, adminDbfName), { encoding: 'utf-8' });
    const features = [];
    while(true){
      const record = await adminSource.read();
      if(record.done) break;
      const feature = record.value;
      if(feature.properties.N03_004 && feature.properties.N03_004 !== '所属未定地'){
        features.push({ feature, bbox: bboxOfCoordinates(feature.geometry.coordinates) });
      }
    }
    const prefecture = features[0].feature.properties.N03_001;
    const featureGrid = new Map();
    for(const item of features) for(const key of gridKeys(item.bbox)){
      if(!featureGrid.has(key)) featureGrid.set(key, []);
      featureGrid.get(key).push(item);
    }
    const zipPath = path.join(riverZipDir, riverZipName);
    const zipEntries = execFileSync('unzip', ['-Z1', zipPath], { encoding: 'utf8' });
    const shpName = zipEntries.split(/\r?\n/).find(name => /Stream\.shp$/i.test(name));
    const dbfName = zipEntries.split(/\r?\n/).find(name => /Stream\.dbf$/i.test(name));
    execFileSync('unzip', ['-o', '-q', zipPath, shpName, dbfName, '-d', tempDir]);
    const shpPath = path.join(tempDir, shpName);
    const dbfPath = path.join(tempDir, dbfName);
    const source = await shapefile.open(shpPath, dbfPath, { encoding: 'shift_jis' });
    while(true){
      const record = await source.read();
      if(record.done) break;
      if(!TARGET_INTERVAL_TYPES.has(String(record.value.properties.W05_003))) continue;
      audited++;
      const riverBbox = bboxOfCoordinates(record.value.geometry.coordinates);
      const candidates = new Set(gridKeys(riverBbox).flatMap(key => featureGrid.get(key) || []));
      for(const item of candidates){
        if(!bboxOverlaps(riverBbox, item.bbox) || !lineIntersectsGeometry(record.value.geometry, item.feature.geometry)) continue;
        let plainId = `${prefecture}::${item.feature.properties.N03_004}`;
        if(plainId === '高知県::檮原町') plainId = '高知県::梼原町';
        const city = cityByPlainId.get(plainId);
        if(!city) throw new Error(`cities.jsonに行政区域がありません: ${plainId}`);
        const id = `${city.pref}::${city.name}`;
        if(!evidence.has(id)) evidence.set(id, new Set());
        evidence.get(id).add(record.value.properties.W05_004);
      }
    }
    fs.unlinkSync(shpPath);
    fs.unlinkSync(dbfPath);
    fs.unlinkSync(path.join(tempDir, adminShpName));
    fs.unlinkSync(path.join(tempDir, adminDbfName));
  }

  const municipalities = [...evidence].sort(([a], [b]) => a.localeCompare(b, 'ja')).map(([id, names]) => ({
    id, rivers: [...names].filter(name => name && name !== '名称不明').sort((a, b) => a.localeCompare(b, 'ja')),
  }));
  const expected = new Set(municipalities.map(item => item.id));
  const before = new Set(cities.filter(city => city.tags.includes('big_river')).map(city => `${city.pref}::${city.name}`));
  const changes = {
    added: [...expected].filter(id => !before.has(id)).sort((a, b) => a.localeCompare(b, 'ja')),
    removed: [...before].filter(id => !expected.has(id)).sort((a, b) => a.localeCompare(b, 'ja')),
  };
  if(apply){
    for(const city of cities){
      const id = `${city.pref}::${city.name}`;
      city.tags = city.tags.filter(tag => tag !== 'big_river');
      if(expected.has(id)) city.tags.push('big_river');
      city.tags.sort((a, b) => a.localeCompare(b, 'en'));
    }
    fs.writeFileSync(citiesPath, `${JSON.stringify(cities, null, 2)}\n`);
  }
  const result = {
    source: '国土交通省 国土数値情報 河川データ W05（2006～2009年度）／行政区域データ N03-2025',
    criterion: 'W05区間種別=1,5（一級直轄区間。湖沼兼用を含む）',
    prefecturesAudited: riverZips.length,
    riverSegmentsAudited: audited,
    municipalityCount: municipalities.length,
    changes,
    municipalities,
  };
  const serialized = `${JSON.stringify(result, null, 2)}\n`;
  fs.rmSync(tempDir, { recursive: true, force: true });
  if(outputPath) fs.writeFileSync(outputPath, serialized); else process.stdout.write(serialized);
}

main().catch(error => { console.error(error); process.exit(1); });
