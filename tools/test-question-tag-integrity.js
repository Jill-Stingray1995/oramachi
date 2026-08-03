#!/usr/bin/env node
'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const cities = JSON.parse(fs.readFileSync(path.join(root, 'cities.json'), 'utf8'));
const privateRailwayReference = JSON.parse(fs.readFileSync(
  path.join(root, 'research', 'private-railway-municipalities-2025.json'),
  'utf8',
));
const officialStatistics = JSON.parse(fs.readFileSync(path.join(root, 'research', 'official-statistics-2025.json'), 'utf8'));
const municipalityRegister = JSON.parse(fs.readFileSync(path.join(root, 'research', 'municipality-register-2025.json'), 'utf8'));
const highwayJunctionReference = JSON.parse(fs.readFileSync(path.join(root, 'research', 'highway-junction-municipalities-2022.json'), 'utf8'));
const riverReference = JSON.parse(fs.readFileSync(path.join(root, 'research', 'river-municipalities-mlit.json'), 'utf8'));
const nationalTreasureReference = JSON.parse(fs.readFileSync(path.join(root, 'research', 'national-treasure-municipalities-2026.json'), 'utf8'));
const officialRegisterTags = JSON.parse(fs.readFileSync(path.join(root, 'research', 'official-register-tags-2026-08-03.json'), 'utf8'));
const realCities = cities.filter((city) => city.name !== '東京');

function id(city) { return `${city.pref}::${city.name}`; }
function has(city, key) { return city.tags.includes(key); }
function displayName(name) { return name.replace(/（[^）]+）$/, ''); }
function nameCore(name) { return displayName(name).replace(/[市区町村]$/, ''); }

// 国交省N03の行政区域台帳と標準自治体1,741件が完全一致すること。
assert.equal(municipalityRegister.exactMatch, true, '行政区域台帳の照合結果が完全一致ではありません');
assert.equal(municipalityRegister.officialMunicipalityCount, 1741, '公式自治体数が1,741ではありません');
assert.equal(realCities.length, municipalityRegister.appMunicipalityCount, 'アプリ自治体数がN03監査結果と不一致です');

// 2025年国勢調査人口速報・国土地理院面積調から再計算した分位点をコードへ固定する。
assert.equal(officialStatistics.municipalityCount, 1741, '統計監査の自治体数が1,741ではありません');
const thresholdExpectations = {
  AREA_LARGE_THRESHOLD: officialStatistics.thresholds.areaLarge,
  AREA_COMPACT_THRESHOLD: officialStatistics.thresholds.areaCompact,
  DENSITY_HIGH_THRESHOLD: officialStatistics.thresholds.densityHigh,
  DENSITY_LOW_THRESHOLD: officialStatistics.thresholds.densityLow,
};
for(const [constant, expected] of Object.entries(thresholdExpectations)){
  const match = source.match(new RegExp(`const ${constant} = ([0-9.]+);`));
  assert(match, `${constant}を読み取れません`);
  assert.equal(Number(match[1]), expected, `${constant}が公式統計の再計算値と不一致です`);
}
const officialStatsById = new Map(officialStatistics.records.map(record => [record.id, record]));
for(const city of realCities){
  const official = officialStatsById.get(id(city));
  assert(official, `${id(city)}: 2025年国勢調査人口速報にありません`);
  assert.equal(city.stats.population, official.population, `${id(city)}: 人口が2025年国勢調査人口速報と不一致です`);
  assert.equal(city.stats.area_km2, official.area_km2, `${id(city)}: 面積が2025年国土地理院面積調と不一致です`);
}

// 国交省N06のJCT全地点と行政区域の空間結合結果に完全一致すること。
assert.equal(highwayJunctionReference.junctionFeaturesAudited, 251, 'N06のJCT監査地点数が変わっています');
assert.equal(highwayJunctionReference.municipalityCount, 160, 'JCT所在自治体数が変わっています');
assert.deepEqual(
  realCities.filter(city => has(city, 'expressway_junction')).map(id).sort(),
  highwayJunctionReference.municipalities.map(item => item.id).sort(),
  'expressway_junctionが国交省N06との完全一致を失っています',
);

// 国交省W05の全国47都道府県・一級直轄区間との空間結合結果に完全一致すること。
assert.equal(riverReference.prefecturesAudited, 47, 'W05の監査都道府県数が47ではありません');
assert.equal(riverReference.riverSegmentsAudited, 11507, 'W05の一級直轄区間数が変わっています');
assert.equal(riverReference.municipalityCount, 756, '国管理の一級河川所在自治体数が変わっています');
assert.deepEqual(
  realCities.filter(city => has(city, 'big_river')).map(id).sort(),
  riverReference.municipalities.map(item => item.id).sort(),
  'big_riverが国交省W05の一級直轄区間との完全一致を失っています',
);

// 文化庁・環境省・文科省の一覧型公式台帳タグを自治体集合ごと固定する。
for(const [tag, reference] of Object.entries(officialRegisterTags.tags)){
  assert.deepEqual(
    realCities.filter(city => has(city, tag)).map(id).sort(),
    [...reference.municipalities].sort(),
    `${tag}が公式台帳スナップショットとの完全一致を失っています`,
  );
}

// 国宝は建造物だけでなく、所在地が公開されている美術工芸品も含む。
assert.equal(nationalTreasureReference.officialDesignationCounts.total, 1149, '文化庁の国宝指定総数が変わっています');
assert.equal(nationalTreasureReference.officialDesignationCounts.fineArtsAndCrafts, 916, '国宝美術工芸品の指定件数が変わっています');
assert.equal(nationalTreasureReference.municipalityCount, 132, '国宝所在自治体数が変わっています');
assert.deepEqual(
  realCities.filter(city => has(city, 'national_treasure')).map(id).sort(),
  nationalTreasureReference.municipalities.map(item => item.id).sort(),
  'national_treasureが文化庁公式データとの完全一致を失っています',
);

// 構造: 重複タグや基本的な包含矛盾を許さない。
for (const city of cities) {
  assert.equal(new Set(city.tags).size, city.tags.length, `${id(city)}: タグが重複しています`);
  assert.equal(has(city, 'is_village') && !has(city, 'is_town_village'), false, `${id(city)}: 村タグの包含矛盾`);
}

// 「私鉄・第三セクター」は国交省N02の民営鉄道・第三セクター駅が自治体内にある場合だけtrue。
const obu = cities.find((city) => city.pref === '愛知県' && city.name === '大府市');
assert(obu, '愛知県::大府市がありません');
assert.equal(has(obu, 'private_railway'), false, '愛知県::大府市はJR線のみなので私鉄・第三セクター=falseです');
assert.equal(privateRailwayReference.stationFeaturesAudited, 4916, '国交省の民営・第三セクター駅監査件数が変わっています');
assert.equal(privateRailwayReference.municipalityCount, 582, '私鉄・第三セクター駅所在自治体数が変わっています');
const expectedPrivateRailway = privateRailwayReference.municipalities.map(item => item.id).sort();
const actualPrivateRailway = realCities.filter(city => has(city, 'private_railway')).map(id).sort();
assert.deepEqual(actualPrivateRailway, expectedPrivateRailway, 'private_railwayが国交省全駅データとの完全一致を失っています');
assert.equal(privateRailwayReference.allPassengerStationFeaturesAudited, 10234, '国交省の全旅客駅監査件数が変わっています');
assert.equal(privateRailwayReference.municipalitiesWithAnyStation.length, 1257, '旅客駅所在自治体数が変わっています');
assert.equal(privateRailwayReference.municipalitiesWithoutAnyStation.length, 484, '鉄道駅なし自治体数が変わっています');
const actualNoStation = realCities.filter(city => has(city, 'no_railway_station')).map(id).sort();
assert.deepEqual(
  actualNoStation,
  [...privateRailwayReference.municipalitiesWithoutAnyStation].sort(),
  'no_railway_stationが国交省の全旅客駅データとの完全一致を失っています',
);

// 実行時の個別路線→private_railway自動補完が、基準外自治体を誤ってtrueにしないことも確認する。
const privateLineKeysMatch = source.match(/const PRIVATE_RAILWAY_LINE_KEYS = (\[[\s\S]*?\n\]);/);
assert(privateLineKeysMatch, 'PRIVATE_RAILWAY_LINE_KEYSを読み取れません');
const privateLineKeys = vm.runInNewContext(privateLineKeysMatch[1]);
const expectedPrivateSet = new Set(expectedPrivateRailway);
for(const city of realCities){
  if(privateLineKeys.some(key => has(city, key))){
    assert(expectedPrivateSet.has(id(city)), `${id(city)}: 個別私鉄路線タグが国交省基準と矛盾します`);
  }
}

// 市場タグは、豊洲市場・輪島朝市・日本三大朝市と同程度に全国的に知られるものへ限定する。
// 単なる卸売市場、地域向け定期市、商店街は含めない。
const expectedFamousMarkets = [
  '北海道::札幌市', '北海道::函館市', '北海道::釧路市', '青森県::八戸市',
  '茨城県::ひたちなか市', '千葉県::勝浦市', '東京都::中央区', '東京都::江東区',
  '石川県::金沢市', '石川県::輪島市', '岐阜県::高山市', '京都府::京都市',
  '大阪府::大阪市', '山口県::下関市', '高知県::高知市', '佐賀県::唐津市',
  '沖縄県::那覇市',
].sort();
const actualFamousMarkets = realCities.filter((city) => has(city, 'famous_market')).map(id).sort();
assert.deepEqual(actualFamousMarkets, expectedFamousMarkets, '全国的に有名な市場・朝市タグの対象が基準外です');

const tagUseCounts = new Map();
for (const city of cities) {
  for (const key of city.tags) tagUseCounts.set(key, (tagUseCounts.get(key) || 0) + 1);
}
const singletonTagCount = [...tagUseCounts.values()].filter((count) => count === 1).length;
assert.equal(tagUseCounts.size, 1144, '使用中の質問タグ総数が変わっています');
assert.equal(singletonTagCount, 726, '固有質問タグの総数が変わっています');

// 出題キーだけ定義され、対象自治体が0件のまま放置される欠落を検出する。
// 都道府県・8地方質問と実行時に計算する方言2種だけはcities.jsonへ永続化しない。
const keysStart = source.indexOf('const KEYS = [');
const keysArrayStart = source.indexOf('[', keysStart);
const keysArrayEnd = source.indexOf('];', keysArrayStart) + 1;
const allQuestionKeys = vm.runInNewContext(source.slice(keysArrayStart, keysArrayEnd));
const unusedQuestionKeys = allQuestionKeys.filter((key) => !tagUseCounts.has(key)).sort();
const expectedRuntimeOnlyKeys = allQuestionKeys.filter((key) =>
  (key.startsWith('pref_') && key !== 'pref_name_in_city_name') || key.startsWith('region_') ||
  key === 'kansai_dialect' || key === 'ryukyu_dialect'
).sort();
assert.equal(expectedRuntimeOnlyKeys.length, 57, '実行時計算タグの定義数が変わっています');
assert.deepEqual(unusedQuestionKeys, expectedRuntimeOnlyKeys, '対象自治体0件の質問タグがあります');

const stationSpecificKeys = [
  'aikan_railway', 'akita_shinkansen_station', 'chuo_rapid', 'chuo_sobu',
  'echizen_railway', 'hankyu_line', 'hokuriku_shinkansen_station', 'joetsu_shinkansen_station',
  'keihan_line', 'keihintohoku_line', 'keikyu_line', 'keio_inokashira_line', 'keisei_line',
  'kintetsu', 'kyushu_shinkansen_station', 'meitetsu_line', 'monorail', 'nagaragawa_railway',
  'nankai_line', 'nishikyushu_shinkansen_station', 'nishitetsu_line', 'odakyu_line',
  'private_railway', 'saikyo_line', 'seibu_line', 'shinano_railway', 'sotetsu_line',
  'subway', 'takasaki_line_station', 'tobu_main_station', 'tobu_tojo_station', 'toden_arakawa',
  'tohoku_shinkansen_station', 'tokaido_shinkansen_station', 'tokyu_line', 'tram',
  'tsukuba_express', 'utsunomiya_station', 'yamagata_shinkansen_station', 'yamanote_line',
];
for (const city of realCities) {
  if (!has(city, 'no_railway_station')) continue;
  const contradiction = stationSpecificKeys.find((key) => has(city, key));
  assert.equal(contradiction, undefined, `${id(city)}: 駅なしと${contradiction}が同時にtrueです`);
}

const shinkansenSpecificKeys = [
  'hokkaido_shinkansen_station', 'tohoku_shinkansen_station', 'joetsu_shinkansen_station',
  'hokuriku_shinkansen_station', 'tokaido_shinkansen_station', 'sanyo_shinkansen_station',
  'kyushu_shinkansen_station', 'nishikyushu_shinkansen_station',
  'yamagata_shinkansen_station', 'akita_shinkansen_station',
];
for (const city of realCities) {
  const specific = shinkansenSpecificKeys.some((key) => has(city, key));
  assert.equal(has(city, 'shinkansen'), specific, `${id(city)}: 新幹線タグの包含関係が不一致です`);
}

// 自治体名から一意に決まるタグは、全1,741自治体で再計算する。
const nameRules = {
  big_small_in_name: (name) => /[大小]/.test(name),
  four_plus_name: (name) => [...name].length >= 4,
  hiragana_long: (name) => [...name].length >= 4,
  kawa_in_name: (name) => /川/.test(name),
  name_has_betsu: (name) => /別/.test(name),
  new_old_in_name: (name) => /[新古]/.test(name),
  sea_word_in_name: (name) => /[海浜浦]/.test(name),
  shima_in_name: (name) => /島/.test(name),
  ta_in_name: (name) => /田/.test(name),
  yama_in_name: (name) => /山/.test(name),
  hiragana_name: (name) => /^[ぁ-ゖー]+$/.test(name),
  kanji_one_char: (name) => /^[一-龯]$/.test(name),
  number_in_name: (name) => /[一二三四五六七八九十百千万]/.test(name),
  direction_in_name: (name) => /[東西南北]/.test(name),
};
for (const city of realCities) {
  const core = nameCore(city.name);
  for (const [key, rule] of Object.entries(nameRules)) {
    assert.equal(has(city, key), rule(core), `${id(city)}: ${key}の名称判定が不一致です`);
  }
  const prefCore = city.pref.replace(/[都道府県]$/, '');
  assert.equal(
    has(city, 'pref_name_in_city_name'),
    core.includes(prefCore),
    `${id(city)}: pref_name_in_city_nameの名称判定が不一致です`,
  );
}
const sameNameGroups = new Map();
for (const city of realCities) {
  const name = displayName(city.name);
  if (!sameNameGroups.has(name)) sameNameGroups.set(name, []);
  sameNameGroups.get(name).push(city);
}
for (const city of realCities) {
  const expected = sameNameGroups.get(displayName(city.name)).some((other) => other.pref !== city.pref);
  assert.equal(has(city, 'same_name_other_pref'), expected, `${id(city)}: same_name_other_prefが不一致です`);
}

// 地方タグは対象都道府県外へ漏らさず、県内区分は重複させない。
const areaPrefScopes = {
  douou_area: ['北海道'], doutou_area: ['北海道'], dohoku_area: ['北海道'],
  tsugaru_area: ['青森県'], shonai_area: ['山形県'],
  hamadori_area: ['福島県'], nakadori_area: ['福島県'], aizu_area: ['福島県'],
  sanriku_area: ['青森県', '岩手県', '宮城県'], north_kanto: ['茨城県', '栃木県', '群馬県'],
  tama_area: ['東京都'], tokatsu_area: ['千葉県'], ryomo_area: ['栃木県', '群馬県'],
  hokuriku_three_pref: ['富山県', '石川県', '福井県'], koshin_area: ['山梨県', '長野県'],
  tokai_area: ['岐阜県', '静岡県', '愛知県', '三重県'], owari_area: ['愛知県'], mikawa_area: ['愛知県'],
  izu_area: ['静岡県'], suruga_area: ['静岡県'], totomi_area: ['静岡県'],
  hida_area: ['岐阜県'], mino_area: ['岐阜県'],
  hokushin_area: ['長野県'], toshin_area: ['長野県'], chushin_area: ['長野県'], nanshin_area: ['長野県'],
  hokusetsu_area: ['大阪府'], kawachi_area: ['大阪府'], senshu_area: ['大阪府'],
  hanshin_area: ['大阪府', '兵庫県'], harima_area: ['兵庫県'], tajima_area: ['兵庫県'], tamba_area: ['兵庫県', '京都府'],
  bingo_area: ['広島県'], chikuzen_area: ['福岡県'], chikugo_area: ['福岡県'], chikuho_area: ['福岡県'],
  toyo_area: ['愛媛県'], chuyo_area: ['愛媛県'], nanyo_area: ['愛媛県'],
  satsuma_area: ['鹿児島県'], osumi_area: ['鹿児島県'], sakishima_islands: ['沖縄県'],
  joetsu_region: ['新潟県'], chuetsu_region: ['新潟県'], kaetsu_region: ['新潟県'],
};
for (const city of realCities) {
  for (const [key, prefs] of Object.entries(areaPrefScopes)) {
    if (has(city, key)) assert(prefs.includes(city.pref), `${id(city)}: ${key}が対象都道府県外です`);
  }
}
const exclusiveAreaGroups = [
  ['joetsu_region', 'chuetsu_region', 'kaetsu_region'],
  ['hamadori_area', 'nakadori_area', 'aizu_area'], ['owari_area', 'mikawa_area'],
  ['izu_area', 'suruga_area', 'totomi_area'], ['hida_area', 'mino_area'],
  ['hokushin_area', 'toshin_area', 'chushin_area', 'nanshin_area'],
  ['harima_area', 'tajima_area', 'tamba_area'], ['chikuzen_area', 'chikugo_area', 'chikuho_area'],
  ['toyo_area', 'chuyo_area', 'nanyo_area'], ['satsuma_area', 'osumi_area'],
];
for (const city of realCities) {
  for (const group of exclusiveAreaGroups) {
    assert(group.filter((key) => has(city, key)).length <= 1, `${id(city)}: 県内地方タグが重複しています`);
  }
}

// ユーザー報告と今回見つかった回帰防止ケース。
const byId = new Map(cities.map((city) => [id(city), city]));
assert(has(byId.get('埼玉県::志木市'), 'arakawa_river'), '志木市は荒川に接しています');
assert(has(byId.get('山形県::三川町'), 'no_railway_station'), '三川町には鉄道駅がありません');
assert(!has(byId.get('千葉県::芝山町'), 'no_railway_station'), '芝山町には芝山千代田駅があります');
assert(!has(byId.get('奈良県::大和郡山市'), 'tohoku_shinkansen_station'), '大和郡山市に東北新幹線駅はありません');

// 一覧型の客観タグは、2026-08-03再監査で一次情報から確定した自治体集合を指紋化する。
// 件数だけでなくID集合全体を固定するため、別自治体との入れ替わりも検出できる。
const authorityFingerprints = {
  national_university: [74, 'd031311b1f8933dc53d247eb176d012778f888c696a6ae69f34a535500e75249'],
  nuclearpowerplant: [21, '7d3b79fc9a40b7b842e09aa7fa9c3de630bef03a3135262b36f5f736dda0a809'],
  airport: [101, '16e461ccce412d1b27ce209fd71988a06f3b45a8616fbbb63eeae06bab6de07a'],
  geopark: [154, 'ad50fdb1ffb58b5c7f4198cfc1e022b0adc9db8d2f842f31a56147c8bfac2d5a'],
  npb: [13, '6415d4ce8fae3414250d630a9250ea2c17574ae1ea7b8ddb5503115cec2f0f3c'],
  dome_stadium: [7, '752cab45d2026aaca39166600b2e29de21b9f8c202791f104fffd4c6b975ccb6'],
  sumo_basho: [5, 'ba48e05b84bea5f42bf2868c6ebd7381b6190907b3cf7838a49ee2681f990f36'],
  national_government_park: [48, 'b94628d67316834b966f59bd160990e11262c61e647222dcf33823f29b824f42'],
  traditional_buildings_district: [107, '4bf2bf9781ed9f8a7a443d52077ec90f8e70e6e2fc402036093918e36b5755e5'],
  ramsar: [88, '3ecf3f7bb22fd656149432c3a0b304e190424a72b3d5111f02564763311fa3a5'],
  public_racing_venue: [90, 'a7f39b86e1de3ee82adcd5942ea7a0b9c8e57d09e57db1afc2b482a18bdc5237'],
  horse_racing: [25, 'dca63c24a6e6052bf66d9b0c8bd9d83406b88fe33c4943054483f081039a33b6'],
  imperial_university: [8, '490768af250289e154b5b87c7b8ec23c9c0c37d29e51d4eb7dfc8bbe9ee2190a'],
  todai_campus: [3, '00b543a9d77372130db44f33266df601672de5fd34fa6d7ce81a41ba6f3d98dc'],
  tus_campus: [4, '695b4724dd08e8ebd4d895408f1f6c07f9c98681471aca738dada79251f0a5f2'],
  chuo_campus: [4, 'eb6be9fcc938a358aa5e492ed883f69d52d9118a3cb64de1b4db69b870ceb9b7'],
  japan_northernmost: [1, 'f303ffe8e088a235e2d9e72e5205d47f6f2280ac27c4ea1c9921fdda655d38cd'],
  waterfall_hyakusen: [97, '38142f81ba2e34e7b686a415eb6336e67702d975bb0823f851752b9829330cc0'],
  tanada_hyakusen: [108, '0791a254e9109426ebde4b0f1893a62243afa3c07cacc039f923da0b37ece4cf'],
  meisui_hyakusen: [187, 'f16a618fd539d60b5429bd09b0a9ae27e2acadf73c39eb24c4bb8676667d8931'],
  jleague: [57, 'a7625b88fb3657ffce00ea1fa26ede9b3299a2d354d3a18329d6d1f23aa77c71'],
  worldheritage: [119, 'd9f0aab2eb23783222a3b8b96828580d16dca71e8fb12c366bf4ccb679defac7'],
  kokuho_building: [76, '64b03a37e35e3553073b0b586f25987a132b4b82deb58841f93072eec9ee2c83'],
};
for (const [key, [expectedCount, expectedHash]] of Object.entries(authorityFingerprints)) {
  const ids = cities.filter((city) => has(city, key)).map(id).sort();
  const actualHash = crypto.createHash('sha256').update(ids.join('\n')).digest('hex');
  assert.equal(ids.length, expectedCount, `${key}: 一次情報照合集合の件数が変わっています`);
  assert.equal(actualHash, expectedHash, `${key}: 一次情報照合集合の自治体が入れ替わっています`);
}
assert(has(byId.get('石川県::能美市'), 'national_university'), '能美市には北陸先端科学技術大学院大学の本部があります');
assert(!has(byId.get('山梨県::都留市'), 'national_university'), '都留文科大学は国立大学ではありません');
assert(has(byId.get('宮城県::女川町'), 'nuclearpowerplant'), '女川町には女川原子力発電所があります');
assert(!has(byId.get('青森県::六ヶ所村'), 'nuclearpowerplant'), '六ヶ所村の再処理施設を原子力発電所扱いしてはいけません');
assert(has(byId.get('鹿児島県::屋久島町'), 'airport'), '屋久島町には定期旅客便のある屋久島空港があります');
assert(has(byId.get('熊本県::南小国町'), 'geopark'), '南小国町は阿蘇ジオパークの構成自治体です');
assert(has(byId.get('東京都::文京区'), 'npb'), '文京区には東京ドームがあります');
assert(has(byId.get('宮城県::川崎町（宮城県）'), 'national_government_park'), '川崎町には国営みちのく杜の湖畔公園があります');
assert(!has(byId.get('栃木県::日光市'), 'national_government_park'), '日光市の国立公園を国営公園扱いしてはいけません');
assert(has(byId.get('長野県::須坂市'), 'traditional_buildings_district'), '須坂市須坂は重要伝統的建造物群保存地区です');
assert(!has(byId.get('埼玉県::小川町'), 'traditional_buildings_district'), '小川町は国選定の重要伝統的建造物群保存地区ではありません');
assert(has(byId.get('滋賀県::野洲市'), 'ramsar'), '野洲市はラムサール条約湿地の琵琶湖所在地です');
assert(!has(byId.get('北海道::斜里町'), 'ramsar'), '斜里町はラムサール条約湿地の公式所在地ではありません');
assert(has(byId.get('群馬県::みどり市'), 'public_racing_venue'), 'ボートレース桐生の所在地はみどり市です');
assert(!has(byId.get('群馬県::桐生市'), 'public_racing_venue'), 'ボートレース桐生を桐生市所在と誤認してはいけません');
assert(has(byId.get('愛知県::豊明市'), 'public_racing_venue'), '中京競馬場の所在地は豊明市です');
assert(!has(byId.get('愛知県::豊田市'), 'public_racing_venue'), '中京競馬場を豊田市所在と誤認してはいけません');
assert(has(byId.get('北海道::日高町（北海道）'), 'horse_racing'), '日高町には門別競馬場があります');
assert(!has(byId.get('北海道::安平町'), 'horse_racing'), '馬産地を競馬場所在地として扱ってはいけません');
assert(has(byId.get('大阪府::吹田市'), 'imperial_university'), '大阪大学の本部所在地は吹田市です');
assert(!has(byId.get('大阪府::大阪市'), 'imperial_university'), '大阪市を大阪大学の本部所在地として扱ってはいけません');
assert(has(byId.get('千葉県::柏市'), 'todai_campus'), '柏市には東京大学柏キャンパスがあります');
assert(has(byId.get('東京都::新宿区'), 'tus_campus'), '新宿区には東京理科大学神楽坂キャンパスがあります');
assert(has(byId.get('東京都::葛飾区'), 'tus_campus'), '葛飾区には東京理科大学葛飾キャンパスがあります');
assert(has(byId.get('千葉県::野田市'), 'tus_campus'), '野田市には東京理科大学野田キャンパスがあります');
assert(has(byId.get('北海道::長万部町'), 'tus_campus'), '長万部町には東京理科大学北海道・長万部キャンパスがあります');
assert(has(byId.get('東京都::新宿区'), 'chuo_campus'), '新宿区には中央大学市ヶ谷田町キャンパスがあります');
assert(has(byId.get('北海道::稚内市'), 'japan_northernmost'), '日本最北端の地は稚内市にあります');
assert(has(byId.get('福島県::檜枝岐村'), 'waterfall_hyakusen'), '檜枝岐村には三条の滝があります');
assert(has(byId.get('千葉県::鴨川市'), 'tanada_hyakusen'), '鴨川市には大山千枚田があります');
assert(has(byId.get('茨城県::那珂市'), 'jleague'), '水戸ホーリーホックの現メインスタジアムは那珂市です');
assert(!has(byId.get('茨城県::水戸市'), 'jleague'), 'クラブ名だけで水戸市をホームスタジアム所在地にしてはいけません');
assert(has(byId.get('三重県::大紀町'), 'worldheritage'), '大紀町には紀伊山地の世界遺産構成資産があります');
assert(!has(byId.get('秋田県::八峰町'), 'worldheritage'), '八峰町は白神山地世界遺産区域の所在地ではありません');
assert(has(byId.get('奈良県::斑鳩町'), 'kokuho_building'), '斑鳩町には国宝建造物があります');
assert(!has(byId.get('青森県::青森市'), 'kokuho_building'), '青森市に国宝建造物はありません');
assert(has(byId.get('北海道::遠軽町'), 'national_treasure'), '遠軽町には国宝の北海道白滝遺跡群出土品があります');
assert(has(byId.get('東京都::港区'), 'national_treasure'), '港区には国宝美術工芸品の公開所在地があります');
assert(source.includes("national_treasure: {text:'国宝に指定された建造物や美術工芸品がある？'"), '国宝質問が建造物限定へ戻っています');
assert(source.includes("imperial_university:  {text:'旧帝国大学を前身とする国立大学の本部がある？'"), '旧帝大タグの本部所在地基準を曖昧にしてはいけません');

// 8地方質問の選定関数を単体テストし、最大1回・3問後・最大勢力25%以上を固定する。
const functionStart = source.indexOf('function broadRegionQuestionEligible(');
const functionEnd = source.indexOf('function earlyRegionBoostFor(', functionStart);
assert(functionStart >= 0 && functionEnd > functionStart, '地方質問制御関数が見つかりません');
assert(
  source.includes('unused = unused.filter(k => broadRegionQuestionEligible('),
  '地方質問制御関数をentropyPickの候補除外へ適用してください',
);
assert(
  source.includes('!REGION_QUESTION_KEYS.has(k) && !WIDE_AREA_BOOST_KEYS.has(k)'),
  '地方・広域質問のハード間隔制限を維持してください',
);
const regionKeys = new Set(['region_tohoku', 'region_kanto', 'region_kyushu']);
const wideKeys = new Set(['north_kanto']);
const sandbox = {
  REGION_QUESTION_KEYS: regionKeys,
  WIDE_AREA_BOOST_KEYS: wideKeys,
  BROAD_REGION_MAX_PER_GAME: 1,
  BROAD_REGION_MIN_QUESTIONS: 3,
  BROAD_REGION_MIN_YES_RATIO: 0.25,
  AREA_BOOST_GAP: 4,
  result: null,
};
vm.createContext(sandbox);
vm.runInContext(source.slice(functionStart, functionEnd), sandbox);
const eligible = sandbox.broadRegionQuestionEligible;
const sample = [
  { tags: { region_kanto: true } }, { tags: { region_kanto: true } },
  { tags: { region_tohoku: true } }, { tags: { region_kyushu: true } },
];
assert.equal(eligible('region_kanto', sample, [], 2), false, '3問未満で地方質問を出してはいけません');
assert.equal(eligible('region_kanto', sample, [], 3), true, '最大勢力の地方質問は条件成立時に1回使えます');
assert.equal(eligible('region_tohoku', sample, [], 3), false, '最大勢力でない地方を手当たり次第に聞いてはいけません');
assert.equal(eligible('region_kanto', sample, ['region_tohoku'], 5), false, '地方質問は1ゲーム最大1回です');
assert.equal(eligible('region_kanto', sample, ['x', 'north_kanto'], 5), false, '地名質問を4問以内に連続させてはいけません');

console.log(`質問タグ整合性: ${cities.length}レコード / 全${tagUseCounts.size}タグ（固有${singletonTagCount}種） / 名称14種 / 地方${Object.keys(areaPrefScopes).length}種 / 鉄道包含を確認しました。`);
