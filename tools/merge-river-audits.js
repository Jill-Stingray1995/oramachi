#!/usr/bin/env node
'use strict';

// audit-rivers-from-mlit.js --pref=NN の47成果を統合し、big_riverを適用する。
// Usage: node tools/merge-river-audits.js PARTIAL_DIR OUTPUT.json [--apply]

const fs = require('node:fs');
const path = require('node:path');
const [partialDir, outputPath] = process.argv.slice(2).filter(arg => arg !== '--apply');
const apply = process.argv.includes('--apply');
if(!partialDir || !outputPath) process.exit(2);
const root = path.resolve(__dirname, '..');
const citiesPath = path.join(root, 'cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));
const evidence = new Map();
let riverSegmentsAudited = 0;
for(let code = 1; code <= 47; code++){
  const name = `oramachi-river-${String(code).padStart(2, '0')}.json`;
  const file = path.join(partialDir, name);
  if(!fs.existsSync(file)) throw new Error(`都道府県別河川監査がありません: ${name}`);
  const audit = JSON.parse(fs.readFileSync(file, 'utf8'));
  if(audit.prefecturesAudited !== 1) throw new Error(`${name}: 1都道府県の監査ではありません`);
  riverSegmentsAudited += audit.riverSegmentsAudited;
  for(const item of audit.municipalities){
    if(!evidence.has(item.id)) evidence.set(item.id, new Set());
    for(const river of item.rivers) evidence.get(item.id).add(river);
  }
}
const municipalities = [...evidence].sort(([a], [b]) => a.localeCompare(b, 'ja')).map(([id, rivers]) => ({
  id, rivers: [...rivers].sort((a, b) => a.localeCompare(b, 'ja')),
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
  prefecturesAudited: 47,
  riverSegmentsAudited,
  municipalityCount: municipalities.length,
  changes,
  municipalities,
};
fs.writeFileSync(outputPath, `${JSON.stringify(result, null, 2)}\n`);
console.log(JSON.stringify({ riverSegmentsAudited, municipalityCount: municipalities.length, changes: {
  added: changes.added.length, removed: changes.removed.length,
} }, null, 2));
