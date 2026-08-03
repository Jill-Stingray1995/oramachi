#!/usr/bin/env node
'use strict';

// 国土交通省「国土数値情報 行政区域データ(N03)」の市区町村台帳と
// cities.jsonの通常自治体1,741件を照合する。
// Usage: node tools/audit-municipality-register-from-mlit.js N03_ZIP_DIR [OUTPUT.json]

const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const [adminZipDir, outputPath] = process.argv.slice(2);
if(!adminZipDir){
  console.error('Usage: node tools/audit-municipality-register-from-mlit.js N03_ZIP_DIR [OUTPUT.json]');
  process.exit(2);
}
const root = path.resolve(__dirname, '..');
const cities = JSON.parse(fs.readFileSync(path.join(root, 'cities.json'), 'utf8')).filter(city => city.name !== '東京');
const normalize = name => name.replace(/（[^）]+）$/, '');
const expected = new Set(cities.map(city => `${city.pref}::${normalize(city.name)}`));
const official = new Set();
const excludedNorthernTerritories = new Set(['01695', '01696', '01697', '01698', '01699', '01700']);
const officialNameAliases = new Map([['高知県::檮原町', '高知県::梼原町']]);
let polygonFeatures = 0;
for(const zipName of fs.readdirSync(adminZipDir).filter(name => name.endsWith('_GML.zip')).sort()){
  const geojsonName = zipName.replace('_GML.zip', '.geojson');
  const admin = JSON.parse(execFileSync('unzip', ['-p', path.join(adminZipDir, zipName), geojsonName], {
    encoding: 'utf8', maxBuffer: 1024 * 1024 * 1024,
  }));
  for(const feature of admin.features){
    const pref = feature.properties.N03_001;
    const name = feature.properties.N03_004;
    if(!name || name === '所属未定地') continue;
    polygonFeatures++;
    if(pref === '北海道' && excludedNorthernTerritories.has(feature.properties.N03_007)) continue;
    const rawId = `${pref}::${name}`;
    official.add(officialNameAliases.get(rawId) || rawId);
  }
}
const missingInApp = [...official].filter(id => !expected.has(id)).sort((a, b) => a.localeCompare(b, 'ja'));
const extraInApp = [...expected].filter(id => !official.has(id)).sort((a, b) => a.localeCompare(b, 'ja'));
const result = {
  source: '国土交通省 国土数値情報 行政区域データ N03-2025',
  referenceDate: '2025-01-01',
  scope: '標準自治体1,741件（北方領土6村を除外。檮原町は自治体正式表記「梼原町」へ正規化）',
  prefecturesAudited: 47,
  polygonFeaturesAudited: polygonFeatures,
  officialMunicipalityCount: official.size,
  appMunicipalityCount: expected.size,
  missingInApp,
  extraInApp,
  exactMatch: missingInApp.length === 0 && extraInApp.length === 0,
};
const serialized = `${JSON.stringify(result, null, 2)}\n`;
if(outputPath) fs.writeFileSync(outputPath, serialized); else process.stdout.write(serialized);
if(!result.exactMatch) process.exitCode = 1;
