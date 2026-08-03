#!/usr/bin/env node
'use strict';

// 文化庁「国指定文化財等データベース」の国宝（美術工芸品）CSVを読み込み、
// 公開所在地・公開座標を国交省N03行政区域へ結合する。既存の国宝建造物所在地と
// 合算し、「国宝（建造物または所在地公開の美術工芸品）がある」自治体を生成する。
// Usage:
//   node tools/import-national-treasures-from-culture-agency.js KOKUHO.csv N03_ZIP_DIR [OUTPUT.json] [--apply]

const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const args = process.argv.slice(2);
const [csvPath, adminZipDir, outputPath] = args.filter(arg => arg !== '--apply');
const apply = args.includes('--apply');
if(!csvPath || !adminZipDir){
  console.error('Usage: node tools/import-national-treasures-from-culture-agency.js KOKUHO.csv N03_ZIP_DIR [OUTPUT.json] [--apply]');
  process.exit(2);
}

const root = path.resolve(__dirname, '..');
const citiesPath = path.join(root, 'cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));
const realCities = cities.filter(city => city.name !== '東京');
const cityId = city => `${city.pref}::${city.name}`;
const displayName = city => city.name.replace(/（[^）]+）$/, '');

function parseCsv(text){
  const rows = [];
  let row = [], field = '', quoted = false;
  for(let i = 0; i < text.length; i++){
    const ch = text[i];
    if(quoted){
      if(ch === '"' && text[i + 1] === '"'){ field += '"'; i += 1; }
      else if(ch === '"') quoted = false;
      else field += ch;
    }else if(ch === '"') quoted = true;
    else if(ch === ','){ row.push(field); field = ''; }
    else if(ch === '\n'){
      row.push(field.replace(/\r$/, '')); rows.push(row); row = []; field = '';
    }else field += ch;
  }
  if(field || row.length){ row.push(field); rows.push(row); }
  const header = rows.shift();
  return rows.filter(item => item.some(Boolean)).map(item => Object.fromEntries(header.map((key, index) => [key, item[index] || ''])));
}

function bboxOfCoordinates(value, bbox = [Infinity, Infinity, -Infinity, -Infinity]){
  if(typeof value[0] === 'number'){
    bbox[0] = Math.min(bbox[0], value[0]); bbox[1] = Math.min(bbox[1], value[1]);
    bbox[2] = Math.max(bbox[2], value[0]); bbox[3] = Math.max(bbox[3], value[1]);
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
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
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

const csvText = fs.readFileSync(csvPath, 'utf8').replace(/^\uFEFF/, '');
const records = parseCsv(csvText);
if(!records.length || records.some(record => record['種別1'] !== '国宝')) throw new Error('国宝（美術工芸品）CSVとして認識できません');

const evidence = new Map();
function addEvidence(id, item){
  if(!evidence.has(id)) evidence.set(id, []);
  evidence.get(id).push(item);
}

// 建造物は前回の文化庁台帳監査結果を独立した基礎集合として維持する。
for(const city of realCities.filter(city => city.tags.includes('kokuho_building'))){
  addEvidence(cityId(city), { category: '建造物', name: '国宝建造物（文化庁台帳監査済み）' });
}

const pending = [];
for(const record of records){
  const location = record['所在地'].replace(/\s/g, '');
  if(!location) continue;
  const textualMatches = realCities.filter(city => location.includes(displayName(city)));
  if(textualMatches.length === 1){
    addEvidence(cityId(textualMatches[0]), { category: '美術工芸品', name: record['名称'], registerId: record['管理対象ID'] });
    continue;
  }
  const lat = Number(record['緯度']), lon = Number(record['経度']);
  if(Number.isFinite(lat) && Number.isFinite(lon)) pending.push({ record, point: [lon, lat], matched: false });
  else throw new Error(`公開所在地を自治体へ特定できません: ${record['管理対象ID']} ${record['所在地']}`);
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
  for(const item of pending.filter(entry => !entry.matched)){
    const match = features.find(({ feature, bbox }) => bboxContains(bbox, item.point) && pointInGeometry(item.point, feature.geometry));
    if(!match) continue;
    const pref = match.feature.properties.N03_001;
    const name = match.feature.properties.N03_004 === '檮原町' ? '梼原町' : match.feature.properties.N03_004;
    const city = realCities.find(candidate => candidate.pref === pref && displayName(candidate) === name);
    if(!city) throw new Error(`cities.jsonに行政区域がありません: ${pref}::${name}`);
    addEvidence(cityId(city), { category: '美術工芸品', name: item.record['名称'], registerId: item.record['管理対象ID'] });
    item.matched = true;
  }
}
const unmatched = pending.filter(item => !item.matched);
if(unmatched.length) throw new Error(`公開座標を行政区域へ結合できません: ${unmatched.map(item => item.record['管理対象ID']).join(', ')}`);

// 2026年新指定3件は文化庁の指定件数へ反映済みだがDBのCSV更新前。
// 所在自治体はいずれも建造物集合またはCSV公開所在地集合に既に含まれるため、証拠のみ追記する。
const supplemental2026 = [
  { id: '東京都::港区', name: '論語疏巻第六' },
  { id: '奈良県::奈良市', name: '奈良県飛鳥池遺跡出土品（奈良文化財研究所保管）' },
  { id: '京都府::京都市', name: '五百羅漢図（東福寺）' },
];
for(const item of supplemental2026) addEvidence(item.id, { category: '美術工芸品（2026年新指定）', name: item.name });

// 文化庁DBで所在地欄が空でも、所有者所在地を自治体が公式公開している国宝を補完する。
// CSVの空欄を「所在しない」と解釈しないための、一次情報に基づく明示的な所在地証拠。
const supplementalPublishedLocations = [
  {
    id: '大阪府::藤井寺市',
    name: '乾漆千手観音坐像（葛井寺）ほか',
    officialUrl: 'https://www.city.fujiidera.lg.jp/soshiki/kyoikuiinkai/bunkazaihogo/fuziiderasinositeibunnkazai/1387691167298.html',
  },
];
for(const item of supplementalPublishedLocations){
  addEvidence(item.id, {
    category: '美術工芸品（自治体公式所在地）',
    name: item.name,
    officialUrl: item.officialUrl,
  });
}

const municipalities = [...evidence].sort(([a], [b]) => a.localeCompare(b, 'ja')).map(([id, items]) => ({
  id,
  categories: [...new Set(items.map(item => item.category))],
  examples: items.slice(0, 8),
  evidenceCount: items.length,
}));
const expected = new Set(municipalities.map(item => item.id));
const before = new Set(realCities.filter(city => city.tags.includes('national_treasure')).map(cityId));
const added = [...expected].filter(id => !before.has(id)).sort((a, b) => a.localeCompare(b, 'ja'));
const removed = [...before].filter(id => !expected.has(id)).sort((a, b) => a.localeCompare(b, 'ja'));

if(apply){
  for(const city of cities){
    city.tags = city.tags.filter(tag => tag !== 'national_treasure');
    if(expected.has(cityId(city))) city.tags.push('national_treasure');
    city.tags.sort((a, b) => a.localeCompare(b, 'en'));
  }
  fs.writeFileSync(citiesPath, `${JSON.stringify(cities, null, 2)}\n`);
}

const result = {
  source: '文化庁 国指定文化財等データベース 国宝（美術工芸品）CSV／文化財指定等の件数（2026-07-02）',
  officialUrl: 'https://kunishitei.bunka.go.jp/bsys/index',
  officialCountUrl: 'https://www.bunka.go.jp/seisaku/bunkazai/shokai/shitei.html',
  referenceDate: '2026-08-03',
  criterion: '国宝建造物、または文化庁DBで市区町村所在地・座標が公開された国宝美術工芸品が所在する。文化庁DBの所在地欄が空でも、所在地自治体が公式一覧で所在を公開している場合は補完する。公式所在地を確認できない美術工芸品は新規自治体判定に使用しない。',
  officialDesignationCounts: { buildings: 233, fineArtsAndCrafts: 916, total: 1149 },
  csvRecordCount: records.length,
  csvRecordsWithPublishedLocation: records.filter(record => record['所在地'].trim()).length,
  csvRecordsWithoutPublishedLocation: records.filter(record => !record['所在地'].trim()).length,
  supplemental2026,
  supplementalPublishedLocations,
  municipalityCount: municipalities.length,
  changes: { added, removed },
  municipalities,
};
const serialized = `${JSON.stringify(result, null, 2)}\n`;
if(outputPath) fs.writeFileSync(outputPath, serialized);
else process.stdout.write(serialized);
