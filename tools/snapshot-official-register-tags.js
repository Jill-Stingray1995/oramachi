#!/usr/bin/env node
'use strict';

// 公式台帳を照合して確定した一覧型タグの自治体集合を監査スナップショット化する。
// 元台帳更新時は公式一覧を再照合してcities.jsonを更新後、本ツールを実行する。

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const cities = JSON.parse(fs.readFileSync(path.join(root, 'cities.json'), 'utf8')).filter(city => city.name !== '東京');
const definitions = {
  worldheritage: {
    authority: '文化庁', officialUrl: 'https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/',
    reference: '日本の世界遺産26件（構成資産の所在自治体）',
  },
  traditional_buildings_district: {
    authority: '文化庁', officialUrl: 'https://www.bunka.go.jp/seisaku/bunkazai/shokai/hozonchiku/judenken_ichiran.html',
    reference: '重要伝統的建造物群保存地区130地区（2026年の松江市美保関を含む）',
  },
  kokuho_building: {
    authority: '文化庁', officialUrl: 'https://kunishitei.bunka.go.jp/',
    reference: '国指定文化財等データベース・国宝（建造物）233件',
  },
  national_treasure: {
    authority: '文化庁', officialUrl: 'https://kunishitei.bunka.go.jp/bsys/index',
    reference: '国宝（建造物233件・美術工芸品916件）のうち、市区町村所在地を公式に確認できるもの',
  },
  national_park: {
    authority: '環境省', officialUrl: 'https://www.env.go.jp/park/parks/',
    reference: '国立公園35か所（日高山脈襟裳十勝国立公園を含む）',
  },
  national_university: {
    authority: '文部科学省', officialUrl: 'https://www.mext.go.jp/b_menu/link/daigaku1.htm',
    reference: '国立大学85校の本部所在地',
  },
  imperial_university: {
    authority: '文部科学省', officialUrl: 'https://www.mext.go.jp/',
    reference: '旧帝国大学7大学の現大学本部所在地（東京は23区集計を併記）',
  },
};
const result = { referenceDate: '2026-08-03', tags: {} };
for(const [tag, meta] of Object.entries(definitions)){
  const municipalities = cities.filter(city => city.tags.includes(tag)).map(city => `${city.pref}::${city.name}`)
    .sort((a, b) => a.localeCompare(b, 'ja'));
  result.tags[tag] = {
    ...meta,
    municipalityCount: municipalities.length,
    sha256: crypto.createHash('sha256').update(municipalities.join('\n')).digest('hex'),
    municipalities,
  };
}
const output = process.argv[2] || path.join(root, 'research', 'official-register-tags-2026-08-03.json');
fs.writeFileSync(output, `${JSON.stringify(result, null, 2)}\n`);
console.log(Object.fromEntries(Object.entries(result.tags).map(([tag, item]) => [tag, item.municipalityCount])));
