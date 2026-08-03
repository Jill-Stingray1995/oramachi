#!/usr/bin/env node
// おらマチ 自治体データ検証スクリプト
// 使い方: node tools/validate-municipalities.js  (プロジェクトルートで実行)
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

let errors = [], warns = [];
// 同名対策で「（都道府県名）」が付いた表示名(例: 伊達市（福島県）、高山村（長野県）)から、
// 市/町/村の判定に使う基本名を取り出す。
const baseName = n => String(n).replace(/（.+?）$/, '');
const err = m => errors.push(m);
const warn = m => warns.push(m);

// 1. cities.json が有効なJSONか
let cities;
try {
  cities = JSON.parse(fs.readFileSync(path.join(ROOT, 'cities.json'), 'utf8'));
} catch (e) { console.error('NG: cities.jsonが不正なJSONです:', e.message); process.exit(1); }
if (!Array.isArray(cities)) { console.error('NG: cities.jsonは配列である必要があります'); process.exit(1); }

// 2. app.js の構文と KEYS 抽出
const appSrc = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');
try { new Function(appSrc); } catch (e) { err('app.jsに構文エラー: ' + e.message); }
const keysMatch = appSrc.match(/const KEYS = \[([\s\S]*?)\];/);
const KEYS = new Set((keysMatch ? keysMatch[1] : '').match(/'([a-zA-Z0-9_]+)'/g)?.map(s => s.slice(1, -1)) || []);
if (KEYS.size === 0) err('app.jsからKEYSを抽出できませんでした');
// 出題はしないが、公式データの再生成根拠としてcities.jsonに保持する補助タグ。
const AUXILIARY_TAGS = new Set(['kokuho_building']);

// 3. 各レコード検査
const seen = new Set();
const HOKURIKU_TARGETS = {
  '富山県': ['舟橋村','上市町','立山町','入善町','朝日町（富山県）'],
  '石川県': ['川北町','津幡町','内灘町','志賀町','宝達志水町','中能登町','穴水町','能登町'],
  '福井県': ['永平寺町','池田町（福井県）','南越前町','越前町','美浜町（福井県）','高浜町','おおい町','若狭町'],
  '山梨県': ['市川三郷町','早川町','身延町','南部町（山梨県）','富士川町','昭和町','道志村','西桂町',
             '忍野村','山中湖村','鳴沢村','富士河口湖町','小菅村','丹波山村'],
  '沖縄県': ['国頭村','大宜味村','東村','今帰仁村','本部町','恩納村','宜野座村','金武町','伊江村',
             '読谷村','嘉手納町','北谷町','北中城村','中城村','西原町','与那原町','南風原町','渡嘉敷村',
             '座間味村','粟国村','渡名喜村','南大東村','北大東村','伊平屋村','伊是名村','久米島町','八重瀬町',
             '多良間村','竹富町','与那国町'],
  '鹿児島県': ['三島村','十島村','さつま町','長島町','湧水町','大崎町','東串良町','錦江町','南大隅町',
             '肝付町','中種子町','南種子町','屋久島町','大和村','宇検村','瀬戸内町','龍郷町','喜界町',
             '徳之島町','天城町','伊仙町','和泊町','知名町','与論町'],
  '大分県': ['姫島村','日出町','九重町','玖珠町'],
  '宮崎県': ['三股町','高原町','国富町','綾町','高鍋町','新富町','西米良村','木城町','川南町',
             '都農町','門川町','諸塚村','椎葉村','美郷町（宮崎県）','高千穂町','日之影町','五ヶ瀬町'],
  '熊本県': ['美里町（熊本県）','玉東町','南関町','長洲町','和水町','大津町','菊陽町','南小国町','小国町（熊本県）',
             '産山村','高森町（熊本県）','西原村','南阿蘇村','御船町','嘉島町','益城町','甲佐町','山都町',
             '氷川町','芦北町','津奈木町','錦町','多良木町','湯前町','水上村','相良村','五木村','山江村',
             '球磨村','あさぎり町','苓北町'],
  '佐賀県': ['吉野ヶ里町','基山町','上峰町','みやき町','玄海町','有田町','大町町','江北町','白石町','太良町'],
  '長崎県': ['長与町','時津町','東彼杵町','川棚町','波佐見町','小値賀町','佐々町','新上五島町'],
  '福岡県': ['宇美町','篠栗町','志免町','須恵町','新宮町','久山町','粕屋町','芦屋町','水巻町',
             '岡垣町','遠賀町','小竹町','鞍手町','桂川町','筑前町','東峰村','大刀洗町','大木町',
             '広川町（福岡県）','香春町','添田町','糸田町','川崎町（福岡県）','大任町','赤村','福智町','苅田町',
             'みやこ町','吉富町','上毛町','築上町'],
  '高知県': ['東洋町','奈半利町','田野町','安田町','北川村','馬路村','芸西村','本山町','大豊町',
             '土佐町','大川村','いの町','仁淀川町','中土佐町','佐川町','越知町','梼原町','日高村',
             '津野町','四万十町','大月町','三原村','黒潮町'],
  '北海道': ['当別町','新篠津村','松前町（北海道）','福島町','知内町','木古内町','七飯町','鹿部町',
             '森町（北海道）','八雲町','長万部町','江差町','上ノ国町','厚沢部町','乙部町','奥尻町',
             '今金町','せたな町'],
  '愛媛県': ['上島町','久万高原町','松前町（愛媛県）','砥部町','内子町','伊方町','松野町','鬼北町','愛南町'],
  '香川県': ['土庄町','小豆島町','三木町','直島町','宇多津町','綾川町','琴平町','多度津町','まんのう町'],
  '徳島県': ['勝浦町','上勝町','佐那河内村','石井町','神山町','那賀町','牟岐町','美波町','海陽町',
             '松茂町','北島町','藍住町','板野町','上板町','つるぎ町','東みよし町'],
  '山口県': ['周防大島町','和木町','上関町','田布施町','平生町','阿武町'],
  '広島県': ['府中町','海田町','熊野町','坂町','安芸太田町','北広島町','大崎上島町','世羅町','神石高原町'],
  '岡山県': ['和気町','早島町','里庄町','矢掛町','新庄村','鏡野町','勝央町','奈義町','西粟倉村',
             '久米南町','美咲町','吉備中央町'],
  '島根県': ['奥出雲町','飯南町','川本町','美郷町（島根県）','邑南町','津和野町','吉賀町','海士町','西ノ島町',
             '知夫村','隠岐の島町'],
  '鳥取県': ['岩美町','若桜町','智頭町','八頭町','三朝町','湯梨浜町','琴浦町','北栄町','日吉津村',
             '大山町','南部町（鳥取県）','伯耆町','日南町','日野町（鳥取県）','江府町'],
  '和歌山県': ['紀美野町','かつらぎ町','九度山町','高野町','湯浅町','広川町（和歌山県）','有田川町','美浜町（和歌山県）',
             '日高町（和歌山県）','由良町','印南町','みなべ町','日高川町','白浜町','上富田町','すさみ町',
             '那智勝浦町','太地町','古座川町','北山村','串本町'],
  '奈良県': ['山添村','平群町','三郷町','斑鳩町','安堵町','川西町（奈良県）','三宅町','田原本町','曽爾村','御杖村',
             '高取町','明日香村','上牧町','王寺町','広陵町','河合町','吉野町','大淀町','下市町','黒滝村',
             '天川村','野迫川村','十津川村','下北山村','上北山村','川上村（奈良県）','東吉野村'],
  '兵庫県': ['猪名川町','多可町','稲美町','播磨町','市川町','福崎町','神河町','太子町（兵庫県）',
             '上郡町','佐用町','香美町','新温泉町'],
  '大阪府': ['島本町','豊能町','能勢町','忠岡町','熊取町','田尻町','岬町','太子町（大阪府）','河南町','千早赤阪村'],
  '京都府': ['大山崎町','久御山町','井手町','宇治田原町','笠置町','和束町','精華町',
             '南山城村','京丹波町','伊根町','与謝野町'],
  '滋賀県': ['日野町（滋賀県）','竜王町','愛荘町','豊郷町','甲良町','多賀町'],
  '三重県': ['木曽岬町','東員町','菰野町','朝日町（三重県）','川越町','多気町','明和町（三重県）','大台町',
             '玉城町','度会町','大紀町','南伊勢町','紀北町','御浜町','紀宝町'],
  '愛知県': ['東郷町','豊山町','大口町','扶桑町','大治町','蟹江町','飛島村','阿久比町',
             '東浦町','南知多町','美浜町（愛知県）','武豊町','幸田町','設楽町','東栄町','豊根村'],
  '静岡県': ['東伊豆町','河津町','南伊豆町','松崎町','西伊豆町','函南町',
             '清水町（静岡県）','長泉町','小山町','吉田町','川根本町','森町（静岡県）'],
  '岐阜県': ['岐南町','笠松町','養老町','垂井町','関ケ原町','神戸町','輪之内町','安八町',
             '揖斐川町','大野町','池田町（岐阜県）','北方町',
             '坂祝町','富加町','川辺町','七宗町','八百津町','白川町','東白川村','御嵩町','白川村'],
  '長野県': ['小海町','川上村（長野県）','南牧村（長野県）','南相木村','北相木村','佐久穂町','軽井沢町','御代田町',
             '立科町','青木村','長和町',
             '下諏訪町','富士見町','原村','辰野町','箕輪町','飯島町','南箕輪村','中川村','宮田村',
             '松川町','高森町（長野県）','阿南町','阿智村','平谷村','根羽村','下條村','売木村','天龍村',
             '泰阜村','喬木村','豊丘村','大鹿村',
             '上松町','南木曽町','木祖村','王滝村','大桑村','木曽町',
             '麻績村','生坂村','山形村','朝日村','筑北村',
             '池田町（長野県）','松川村','白馬村','小谷村',
             '坂城町','小布施町','高山村（長野県）','山ノ内町','木島平村','野沢温泉村',
             '信濃町','小川村','飯綱町','栄村'],
};
// 統計から実行時に決まる質問(人口・面積・人口密度)。app.jsのSTATS_THRESHOLDSと同じ基準。
const AREA_LARGE = 341.79, AREA_COMPACT = 37.45, DENSITY_HIGH = 1038.51087563, DENSITY_LOW = 35.16336028;
function statsTags(c) {
  const p = c.stats && c.stats.population, a = c.stats && c.stats.area_km2;
  if (typeof p !== 'number' || typeof a !== 'number') return [];
  const dens = p / a, out = [];
  if (p >= 500000) out.push('pop500k');
  if (p >= 300000) out.push('pop300k');
  if (p >= 100000) out.push('pop100k');
  if (p < 50000) out.push('popUnder50k');
  if (c.name !== '東京') {
    if (dens >= DENSITY_HIGH) out.push('densityHigh');
    if (dens <= DENSITY_LOW) out.push('densityLow');
    if (a >= AREA_LARGE) out.push('areaLarge');
    if (a <= AREA_COMPACT) out.push('areaCompact');
  }
  return out;
}
const tagSig = new Map();
for (const c of cities) {
  const id = `${c.pref}::${c.name}`;
  if (seen.has(id)) err(`重複: ${id}`);
  seen.add(id);
  for (const f of ['name','pref','tags','fact','food','dialect','mascot']) {
    if (c[f] == null || (typeof c[f] === 'string' && c[f].trim() === '')) err(`${id}: ${f} が空です`);
  }
  if (!c.stats || typeof c.stats.population !== 'number' || typeof c.stats.area_km2 !== 'number')
    err(`${id}: stats.population / stats.area_km2 が数値ではありません`);
  const tags = Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]);
  for (const t of tags) if (!KEYS.has(t) && !AUXILIARY_TAGS.has(t)) err(`${id}: 存在しないタグ「${t}」`);
  // 町村区分
  const isTV = tags.includes('is_town_village');
  const isV = tags.includes('is_village');
  if ((baseName(c.name).endsWith('町') || baseName(c.name).endsWith('村')) && !isTV) err(`${id}: 町村なのにis_town_villageがありません`);
  if (baseName(c.name).endsWith('村') && !isV) err(`${id}: 村なのにis_villageがありません`);
  if (!baseName(c.name).endsWith('村') && isV) err(`${id}: 村でないのにis_villageが付いています`);
  if (baseName(c.name).endsWith('市') && isTV) err(`${id}: 市なのにis_town_villageが付いています`);
  // 完全一致タグ構成チェック(同一県内)。実際の出題では人口・面積・人口密度の質問も
  // 使われるため、それらの統計タグも含めて「区別できるか」を判定する。
  const sig = c.pref + '|' + [...tags, ...statsTags(c)].sort().join(',');
  if (tagSig.has(sig)) warn(`同一タグ構成: ${tagSig.get(sig)} と ${id}`);
  else tagSig.set(sig, id);
}

// 4. 北陸21町村の存在 + 出典
let srcJson = null;
try { srcJson = JSON.parse(fs.readFileSync(path.join(ROOT, 'research/municipality-sources.json'), 'utf8')); }
catch (e) { err('research/municipality-sources.jsonが読めません: ' + e.message); }
const srcSet = new Set((srcJson?.municipalities || []).map(m => `${m.pref}::${m.name}`));
for (const [pref, towns] of Object.entries(HOKURIKU_TARGETS)) {
  for (const t of towns) {
    const id = `${pref}::${t}`;
    if (!seen.has(id)) err(`北陸21町村が未追加: ${id}`);
    if (!srcSet.has(id)) err(`出典管理ファイルに記載なし: ${id}`);
  }
}

// 4b. 山梨県: 町8・村6であること、4項目がChatGPT提供データと一致すること
const yamanashiTV = cities.filter(c => c.pref === '山梨県' && (baseName(c.name).endsWith('町') || baseName(c.name).endsWith('村')));
const yTown = yamanashiTV.filter(c => baseName(c.name).endsWith('町')).length;
const yVill = yamanashiTV.filter(c => baseName(c.name).endsWith('村')).length;
if (yTown !== 8) err(`山梨県の町が${yTown}件です(8件のはず)`);
if (yVill !== 6) err(`山梨県の村が${yVill}件です(6件のはず)`);
if (cities.filter(c => c.pref === '山梨県' && c.name.endsWith('市')).length !== 13)
  err('山梨県の既存13市が壊れています');
try {
  const gpt = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-yamanashi-source.json'), 'utf8'));
  const YAMANASHI_ALIAS = { '南部町': '南部町（山梨県）' };
  for (const g of gpt) {
    const c = cities.find(x => x.pref === '山梨県' && x.name === (YAMANASHI_ALIAS[g.name] || g.name));
    if (!c) { err(`山梨県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`山梨県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('ChatGPT提供データ原本(staging/chatgpt-yamanashi-source.json)と照合できません: ' + e.message); }

// 4g. 岐阜県(岐阜・西濃)12町: 提供データとの一致
// 同名対策で表示名に県名を付けた自治体は、原本の名前 → 本番の名前 で対応付ける
const GIFU_NAME_ALIAS = { '池田町': '池田町（岐阜県）' };
try {
  const gptG = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-gifu-seino-source.json'), 'utf8'));
  if (gptG.length !== 12) err(`岐阜県の提供データが${gptG.length}件です(12件のはず)`);
  for (const g of gptG) {
    const targetName = GIFU_NAME_ALIAS[g.name] || g.name;
    const c = cities.find(x => x.pref === '岐阜県' && x.name === targetName);
    if (!c) { err(`岐阜県${targetName}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`岐阜県${targetName}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('岐阜県の提供データ原本と照合できません: ' + e.message); }
const gifuTV = cities.filter(c => c.pref === '岐阜県' && !baseName(c.name).endsWith('市')).length;
if (gifuTV !== 21) err(`岐阜県の町村が${gifuTV}件です(21件のはず)`);
// 白川町(加茂郡・美濃)と白川村(大野郡・飛騨)の取り違え防止
{
  const shirakawaMachi = cities.find(c => c.pref === '岐阜県' && c.name === '白川町');
  const shirakawaMura  = cities.find(c => c.pref === '岐阜県' && c.name === '白川村');
  if (!shirakawaMachi || !shirakawaMura) err('岐阜県の白川町・白川村がそろっていません');
  else {
    const mt = Array.isArray(shirakawaMachi.tags) ? shirakawaMachi.tags : Object.keys(shirakawaMachi.tags).filter(k => shirakawaMachi.tags[k]);
    const mr = Array.isArray(shirakawaMura.tags) ? shirakawaMura.tags : Object.keys(shirakawaMura.tags).filter(k => shirakawaMura.tags[k]);
    if (!mt.includes('mino_area')) err('白川町(加茂郡)は美濃地方(mino_area)のはずです');
    if (!mr.includes('hida_area')) err('白川村(大野郡)は飛騨地方(hida_area)のはずです');
    if (!mr.includes('worldheritage')) err('白川村は世界遺産(白川郷)を持つはずです');
    if (mt.includes('worldheritage')) err('白川町に世界遺産タグが付いています(白川村と取り違えの可能性)');
  }
}
if (cities.filter(c => c.pref === '岐阜県' && baseName(c.name).endsWith('市')).length !== 21)
  err('岐阜県の既存21市が壊れています');

// 5g. 北海道第1弾18町村(石狩・渡島・檜山): 提供データとの一致、既存市の維持、松前町/森町の同名対策、北方領土除外
{
  const hokTown = cities.filter(c => c.pref === '北海道' && baseName(c.name).endsWith('町')).length;
  const hokVill = cities.filter(c => c.pref === '北海道' && baseName(c.name).endsWith('村')).length;
  if (hokTown !== 129) err(`北海道の町が${hokTown}件です(第1-5弾で129町のはず)`);
  if (hokVill !== 15) err(`北海道の村が${hokVill}件です(第1-5弾で15村のはず)`);
  // 新篠津村のis_village
  const shino = cities.find(c => c.pref === '北海道' && c.name === '新篠津村');
  if (shino) {
    const tg = Array.isArray(shino.tags) ? shino.tags : Object.keys(shino.tags).filter(k => shino.tags[k]);
    if (!tg.includes('is_village')) err('北海道新篠津村に is_village が付いていません');
  } else err('北海道新篠津村が見つかりません');
  // 奥尻町のremote_island
  const okushiri = cities.find(c => c.pref === '北海道' && c.name === '奥尻町');
  if (okushiri) {
    const tg = Array.isArray(okushiri.tags) ? okushiri.tags : Object.keys(okushiri.tags).filter(k => okushiri.tags[k]);
    if (!tg.includes('remote_island')) err('北海道奥尻町に remote_island が付いていません');
  }
  // 松前町・森町が県名付き
  const bareMatsumae = cities.filter(c => baseName(c.name) === '松前町' && c.name === '松前町');
  if (bareMatsumae.length) err(`松前町が県名なしで残っています: ${bareMatsumae.map(c => c.pref).join('・')}`);
  const bareMori = cities.filter(c => baseName(c.name) === '森町' && c.name === '森町');
  if (bareMori.length) err(`森町が県名なしで残っています: ${bareMori.map(c => c.pref).join('・')}`);
  // 北方領土6村は登録されていないこと
  const hoppou = ['色丹村', '泊村', '留夜別村', '留別村', '紗那村', '蘂取村'];
  for (const n of hoppou) {
    // 泊村は後志(古宇郡)泊村が登録対象。北方領土は国後郡泊村なので、泊村の存在自体はNGにしない
    if (n === '泊村') continue;
    if (cities.find(c => c.pref === '北海道' && baseName(c.name) === n))
      err(`北方領土の${n}が登録されています(登録対象外)`);
  }
}
try {
  const gptHok = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-hokkaido-b01-source.json'), 'utf8'));
  if (gptHok.length !== 18) err(`北海道第1弾の提供データが${gptHok.length}件です(18件のはず)`);
  const HOK_ALIAS = { '松前町': '松前町（北海道）', '森町': '森町（北海道）' };
  for (const g of gptHok) {
    const c = cities.find(x => x.pref === '北海道' && x.name === (HOK_ALIAS[g.name] || g.name));
    if (!c) { err(`北海道${g.name}が本番データにありません`); continue; }
    for (const f of ['fact', 'food', 'dialect', 'mascot']) if (c[f] !== g[f]) err(`北海道${g.name}: ${f}が提供データと一致しません`);
  }
} catch (e) { warn('北海道第1弾の提供データ原本と照合できません: ' + e.message); }

// 5g-2. 北海道第2弾33町村(後志・空知): 提供データとの一致、泊村=古宇郡の一意性
{
  const b02towns = ['寿都町','黒松内町','蘭越町','ニセコ町','喜茂別町','京極町','倶知安町','共和町',
    '岩内町','積丹町','古平町','仁木町','余市町','南幌町','奈井江町','上砂川町','由仁町','長沼町',
    '栗山町','月形町','浦臼町','新十津川町','妹背牛町','秩父別町','雨竜町','北竜町','沼田町'];
  const b02villages = ['島牧村','真狩村','留寿都村','泊村','神恵内村','赤井川村'];
  for (const n of b02towns.concat(b02villages)) {
    if (!cities.find(c => c.pref === '北海道' && c.name === n)) err(`北海道第2弾の${n}が本番データにありません`);
  }
  for (const n of b02villages) {
    const c = cities.find(x => x.pref === '北海道' && x.name === n);
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (tg && !tg.includes('is_village')) err(`北海道${n}に is_village が付いていません`);
  }
  // 泊村は北海道に1件のみ(古宇郡泊村)。北方領土の国後郡泊村は未登録
  const tomari = cities.filter(c => c.pref === '北海道' && baseName(c.name) === '泊村');
  if (tomari.length !== 1) err(`北海道の泊村が${tomari.length}件です(古宇郡泊村の1件のみのはず)`);
}
try {
  const gptHok2 = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-hokkaido-b02-source.json'), 'utf8'));
  if (gptHok2.length !== 33) err(`北海道第2弾の提供データが${gptHok2.length}件です(33件のはず)`);
  for (const g of gptHok2) {
    const c = cities.find(x => x.pref === '北海道' && x.name === g.name);
    if (!c) { err(`北海道${g.name}が本番データにありません`); continue; }
    for (const f of ['fact', 'food', 'dialect', 'mascot']) if (c[f] !== g[f]) err(`北海道${g.name}: ${f}が提供データと一致しません`);
  }
} catch (e) { warn('北海道第2弾の提供データ原本と照合できません: ' + e.message); }

// 5g-3. 北海道第3弾35町村(上川・留萌・宗谷): 提供データとの一致、村4件のis_village
{
  const b03all = ['鷹栖町','東神楽町','当麻町','比布町','愛別町','上川町','東川町','美瑛町','上富良野町',
    '和寒町','剣淵町','下川町','美深町','音威子府村','中川町','幌加内町','中富良野町','南富良野町','占冠村',
    '増毛町','小平町','苫前町','羽幌町','初山別村','遠別町','天塩町',
    '猿払村','浜頓別町','中頓別町','枝幸町','豊富町','礼文町','利尻町','利尻富士町','幌延町'];
  const b03villages = ['音威子府村','占冠村','初山別村','猿払村'];
  for (const n of b03all) {
    if (!cities.find(c => c.pref === '北海道' && c.name === n)) err(`北海道第3弾の${n}が本番データにありません`);
  }
  for (const n of b03villages) {
    const c = cities.find(x => x.pref === '北海道' && x.name === n);
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (tg && !tg.includes('is_village')) err(`北海道${n}に is_village が付いていません`);
  }
  // 北海道の追加済み町村数(第1-3弾)が86であること
  const hokTV = cities.filter(c => c.pref === '北海道' && (baseName(c.name).endsWith('町') || baseName(c.name).endsWith('村'))).length;
  if (hokTV !== 144) err(`北海道の追加済み町村が${hokTV}件です(第1-5弾で144件のはず)`);
}
try {
  const gptHok3 = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-hokkaido-b03-source.json'), 'utf8'));
  if (gptHok3.length !== 35) err(`北海道第3弾の提供データが${gptHok3.length}件です(35件のはず)`);
  for (const g of gptHok3) {
    const c = cities.find(x => x.pref === '北海道' && x.name === g.name);
    if (!c) { err(`北海道${g.name}が本番データにありません`); continue; }
    for (const f of ['fact', 'food', 'dialect', 'mascot']) if (c[f] !== g[f]) err(`北海道${g.name}: ${f}が提供データと一致しません`);
  }
} catch (e) { warn('北海道第3弾の提供データ原本と照合できません: ' + e.message); }

// 5g-4. 北海道第4弾29町村(オホーツク・胆振・日高): 提供データとの一致、日高町の同名対策
{
  const b04all = ['大空町','美幌町','津別町','斜里町','清里町','小清水町','訓子府町','置戸町','佐呂間町',
    '遠軽町','湧別町','滝上町','興部町','西興部村','雄武町',
    '豊浦町','洞爺湖町','壮瞥町','白老町','厚真町','安平町','むかわ町',
    '日高町（北海道）','平取町','新冠町','浦河町','様似町','えりも町','新ひだか町'];
  const b04villages = ['西興部村'];
  for (const n of b04all) {
    if (!cities.find(c => c.pref === '北海道' && c.name === n)) err(`北海道第4弾の${n}が本番データにありません`);
  }
  for (const n of b04villages) {
    const c = cities.find(x => x.pref === '北海道' && x.name === n);
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (tg && !tg.includes('is_village')) err(`北海道${n}に is_village が付いていません`);
  }
  // 日高町(北海道・和歌山)がすべて県名付きか
  const bareHidaka = cities.filter(c => baseName(c.name) === '日高町' && c.name === '日高町');
  if (bareHidaka.length) err(`日高町が県名なしで残っています: ${bareHidaka.map(c => c.pref).join('・')}`);
}
try {
  const gptHok4 = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-hokkaido-b04-source.json'), 'utf8'));
  if (gptHok4.length !== 29) err(`北海道第4弾の提供データが${gptHok4.length}件です(29件のはず)`);
  const HOK4_ALIAS = { '日高町': '日高町（北海道）' };
  for (const g of gptHok4) {
    const c = cities.find(x => x.pref === '北海道' && x.name === (HOK4_ALIAS[g.name] || g.name));
    if (!c) { err(`北海道${g.name}が本番データにありません`); continue; }
    for (const f of ['fact', 'food', 'dialect', 'mascot']) if (c[f] !== g[f]) err(`北海道${g.name}: ${f}が提供データと一致しません`);
  }
} catch (e) { warn('北海道第4弾の提供データ原本と照合できません: ' + e.message); }

// 5g-5. 北海道第5弾29町村(十勝・釧路・根室=北海道コンプリート): 提供データとの一致、清水町/池田町の同名対策
{
  const b05all = ['音更町','士幌町','上士幌町','鹿追町','新得町','清水町（北海道）','芽室町','中札内村',
    '更別村','大樹町','広尾町','幕別町','池田町（北海道）','豊頃町','本別町','足寄町','陸別町','浦幌町',
    '釧路町','厚岸町','浜中町','標茶町','弟子屈町','鶴居村','白糠町',
    '別海町','中標津町','標津町','羅臼町'];
  const b05villages = ['中札内村','更別村','鶴居村'];
  for (const n of b05all) {
    if (!cities.find(c => c.pref === '北海道' && c.name === n)) err(`北海道第5弾の${n}が本番データにありません`);
  }
  for (const n of b05villages) {
    const c = cities.find(x => x.pref === '北海道' && x.name === n);
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (tg && !tg.includes('is_village')) err(`北海道${n}に is_village が付いていません`);
  }
  // 清水町(北海道・静岡)・池田町(北海道・福井・長野・岐阜)がすべて県名付きか
  const bareShimizu = cities.filter(c => baseName(c.name) === '清水町' && c.name === '清水町');
  if (bareShimizu.length) err(`清水町が県名なしで残っています: ${bareShimizu.map(c => c.pref).join('・')}`);
  const bareIkeda = cities.filter(c => baseName(c.name) === '池田町' && c.name === '池田町');
  if (bareIkeda.length) err(`池田町が県名なしで残っています: ${bareIkeda.map(c => c.pref).join('・')}`);
  // 北海道が179市区町村(全域コンプリート)
  if (cities.filter(c => c.pref === '北海道').length !== 179) err(`北海道が${cities.filter(c => c.pref === '北海道').length}件です(179市区町村のはず)`);
}
try {
  const gptHok5 = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-hokkaido-b05-source.json'), 'utf8'));
  if (gptHok5.length !== 29) err(`北海道第5弾の提供データが${gptHok5.length}件です(29件のはず)`);
  const HOK5_ALIAS = { '清水町': '清水町（北海道）', '池田町': '池田町（北海道）' };
  for (const g of gptHok5) {
    const c = cities.find(x => x.pref === '北海道' && x.name === (HOK5_ALIAS[g.name] || g.name));
    if (!c) { err(`北海道${g.name}が本番データにありません`); continue; }
    for (const f of ['fact', 'food', 'dialect', 'mascot']) if (c[f] !== g[f]) err(`北海道${g.name}: ${f}が提供データと一致しません`);
  }
} catch (e) { warn('北海道第5弾の提供データ原本と照合できません: ' + e.message); }

// 6a. 青森県30町村(東北地方の最初・全町村コンプリート): 提供データとの一致、既存10市の維持、南部町の同名対策
{
  const aoTowns = ['平内町','今別町','外ヶ浜町','鰺ヶ沢町','深浦町','藤崎町','大鰐町','板柳町','鶴田町',
    '中泊町','野辺地町','七戸町','六戸町','横浜町','東北町','おいらせ町','大間町','三戸町','五戸町',
    '田子町','南部町（青森県）','階上町'];
  const aoVillages = ['蓬田村','西目屋村','田舎館村','六ヶ所村','東通村','風間浦村','佐井村','新郷村'];
  for (const n of aoTowns.concat(aoVillages)) {
    if (!cities.find(c => c.pref === '青森県' && c.name === n)) err(`青森県の${n}が本番データにありません`);
  }
  for (const n of aoVillages) {
    const c = cities.find(x => x.pref === '青森県' && x.name === n);
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (tg && !tg.includes('is_village')) err(`青森県${n}に is_village が付いていません`);
  }
  // 青森県の追加済み町村数が30(22町8村)、既存市10
  const aoTV = cities.filter(c => c.pref === '青森県' && (baseName(c.name).endsWith('町') || baseName(c.name).endsWith('村'))).length;
  if (aoTV !== 30) err(`青森県の町村が${aoTV}件です(30件のはず)`);
  const aoTownCount = cities.filter(c => c.pref === '青森県' && baseName(c.name).endsWith('町')).length;
  const aoVillCount = cities.filter(c => c.pref === '青森県' && baseName(c.name).endsWith('村')).length;
  if (aoTownCount !== 22) err(`青森県の町が${aoTownCount}件です(22町のはず)`);
  if (aoVillCount !== 8) err(`青森県の村が${aoVillCount}件です(8村のはず)`);
  const aoCity = cities.filter(c => c.pref === '青森県' && baseName(c.name).endsWith('市')).length;
  if (aoCity !== 10) err(`青森県の市が${aoCity}件です(既存10市のはず)`);
  // 南部町(青森・山梨・鳥取)がすべて県名付きか
  const bareNanbu = cities.filter(c => baseName(c.name) === '南部町' && c.name === '南部町');
  if (bareNanbu.length) err(`南部町が県名なしで残っています: ${bareNanbu.map(c => c.pref).join('・')}`);
}
try {
  const gptAo = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-aomori-source.json'), 'utf8'));
  if (gptAo.length !== 30) err(`青森県の提供データが${gptAo.length}件です(30件のはず)`);
  const AOMORI_ALIAS = { '南部町': '南部町（青森県）' };
  for (const g of gptAo) {
    const c = cities.find(x => x.pref === '青森県' && x.name === (AOMORI_ALIAS[g.name] || g.name));
    if (!c) { err(`青森県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact', 'food', 'dialect', 'mascot']) if (c[f] !== g[f]) err(`青森県${g.name}: ${f}が提供データと一致しません`);
  }
} catch (e) { warn('青森県の提供データ原本と照合できません: ' + e.message); }

// 6b. 岩手県19町村(全町村コンプリート): 提供データとの一致、既存14市の維持
{
  const iwTowns = ['雫石町','葛巻町','岩手町','紫波町','矢巾町','西和賀町','金ケ崎町','平泉町','住田町',
    '大槌町','山田町','岩泉町','軽米町','洋野町','一戸町'];
  const iwVillages = ['田野畑村','普代村','野田村','九戸村'];
  for (const n of iwTowns.concat(iwVillages)) {
    if (!cities.find(c => c.pref === '岩手県' && c.name === n)) err(`岩手県の${n}が本番データにありません`);
  }
  for (const n of iwVillages) {
    const c = cities.find(x => x.pref === '岩手県' && x.name === n);
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (tg && !tg.includes('is_village')) err(`岩手県${n}に is_village が付いていません`);
  }
  const iwTV = cities.filter(c => c.pref === '岩手県' && (baseName(c.name).endsWith('町') || baseName(c.name).endsWith('村'))).length;
  if (iwTV !== 19) err(`岩手県の町村が${iwTV}件です(19件のはず)`);
  const iwCity = cities.filter(c => c.pref === '岩手県' && baseName(c.name).endsWith('市')).length;
  if (iwCity !== 14) err(`岩手県の市が${iwCity}件です(既存14市のはず)`);
}
try {
  const gptIw = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-iwate-miyagi-source.json'), 'utf8')).filter(g =>
    ['雫石町','葛巻町','岩手町','紫波町','矢巾町','西和賀町','金ケ崎町','平泉町','住田町','大槌町','山田町','岩泉町','田野畑村','普代村','軽米町','野田村','九戸村','洋野町','一戸町'].includes(g.name));
  if (gptIw.length !== 19) err(`岩手県の提供データが${gptIw.length}件です(19件のはず)`);
  for (const g of gptIw) {
    const c = cities.find(x => x.pref === '岩手県' && x.name === g.name);
    if (!c) { err(`岩手県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact', 'food', 'dialect', 'mascot']) if (c[f] !== g[f]) err(`岩手県${g.name}: ${f}が提供データと一致しません`);
  }
} catch (e) { warn('岩手県の提供データ原本と照合できません: ' + e.message); }

// 6c. 宮城県21町村(全町村コンプリート): 提供データとの一致、美里町・川崎町の同名対策
{
  const miTowns = ['松島町','七ヶ浜町','利府町','大和町','大郷町','色麻町','加美町','涌谷町','美里町（宮城県）','南三陸町',
    '蔵王町','七ヶ宿町','大河原町','村田町','柴田町','川崎町（宮城県）','丸森町','亘理町','山元町','女川町'];
  const miVillages = ['大衡村'];
  for (const n of miTowns.concat(miVillages)) {
    if (!cities.find(c => c.pref === '宮城県' && c.name === n)) err(`宮城県の${n}が本番データにありません`);
  }
  for (const n of miVillages) {
    const c = cities.find(x => x.pref === '宮城県' && x.name === n);
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (tg && !tg.includes('is_village')) err(`宮城県${n}に is_village が付いていません`);
  }
  const miTV = cities.filter(c => c.pref === '宮城県' && (baseName(c.name).endsWith('町') || baseName(c.name).endsWith('村'))).length;
  if (miTV !== 21) err(`宮城県の町村が${miTV}件です(21件でコンプリートのはず)`);
  // 美里町(宮城・熊本)がすべて県名付きか
  const bareMisato = cities.filter(c => baseName(c.name) === '美里町' && c.name === '美里町');
  if (bareMisato.length) err(`美里町が県名なしで残っています: ${bareMisato.map(c => c.pref).join('・')}`);
}
try {
  const gptMi = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-iwate-miyagi-source.json'), 'utf8')).filter(g =>
    ['松島町','七ヶ浜町','利府町','大和町','大郷町','大衡村','色麻町','加美町','涌谷町','美里町','南三陸町'].includes(g.name));
  if (gptMi.length !== 11) err(`宮城県の提供データが${gptMi.length}件です(11件のはず)`);
  const MIYAGI_ALIAS = { '美里町': '美里町（宮城県）' };
  for (const g of gptMi) {
    const c = cities.find(x => x.pref === '宮城県' && x.name === (MIYAGI_ALIAS[g.name] || g.name));
    if (!c) { err(`宮城県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact', 'food', 'dialect', 'mascot']) if (c[f] !== g[f]) err(`宮城県${g.name}: ${f}が提供データと一致しません`);
  }
} catch (e) { warn('宮城県の提供データ原本と照合できません: ' + e.message); }


// 6c-2. 宮城県第2弾10町(残り・宮城コンプリート)+山形県22町村
{
  const mi2 = ['蔵王町','七ヶ宿町','大河原町','村田町','柴田町','川崎町（宮城県）','丸森町','亘理町','山元町','女川町'];
  for (const n of mi2) {
    if (!cities.find(c => c.pref === '宮城県' && c.name === n)) err(`宮城県第2弾の${n}が本番データにありません`);
  }
  const yaTowns = ['山辺町','中山町','河北町','西川町','朝日町（山形県）','大江町','大石田町','金山町（山形県）','最上町',
    '舟形町','真室川町','高畠町','川西町（山形県）','小国町（山形県）','白鷹町','飯豊町','三川町','庄内町','遊佐町'];
  const yaVillages = ['大蔵村','鮭川村','戸沢村'];
  for (const n of yaTowns.concat(yaVillages)) {
    if (!cities.find(c => c.pref === '山形県' && c.name === n)) err(`山形県の${n}が本番データにありません`);
  }
  for (const n of yaVillages) {
    const c = cities.find(x => x.pref === '山形県' && x.name === n);
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (tg && !tg.includes('is_village')) err(`山形県${n}に is_village が付いていません`);
  }
  const yaTV = cities.filter(c => c.pref === '山形県' && (baseName(c.name).endsWith('町') || baseName(c.name).endsWith('村'))).length;
  if (yaTV !== 22) err(`山形県の町村が${yaTV}件です(22件でコンプリートのはず)`);
  const yaCity = cities.filter(c => c.pref === '山形県' && baseName(c.name).endsWith('市')).length;
  if (yaCity !== 13) err(`山形県の市が${yaCity}件です(既存13市のはず)`);
  // 同名(朝日町・小国町・川西町・川崎町)がすべて県名付きか
  for (const bn of ['朝日町', '小国町', '川西町', '川崎町']) {
    const bare = cities.filter(c => baseName(c.name) === bn && c.name === bn);
    if (bare.length) err(`${bn}が県名なしで残っています: ${bare.map(c => c.pref).join('・')}`);
  }
}
try {
  const gptMY = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-miyagi2-yamagata-source.json'), 'utf8'));
  if (gptMY.length !== 32) err(`宮城2+山形の提供データが${gptMY.length}件です(32件のはず)`);
  const MY_ALIAS = { '川崎町': '川崎町（宮城県）', '朝日町': '朝日町（山形県）', '小国町': '小国町（山形県）', '川西町': '川西町（山形県）', '金山町': '金山町（山形県）' };
  const miSet = new Set(['蔵王町','七ヶ宿町','大河原町','村田町','柴田町','川崎町','丸森町','亘理町','山元町','女川町']);
  for (const g of gptMY) {
    const pref = miSet.has(g.name) ? '宮城県' : '山形県';
    const c = cities.find(x => x.pref === pref && x.name === (MY_ALIAS[g.name] || g.name));
    if (!c) { err(`${pref}${g.name}が本番データにありません`); continue; }
    for (const f of ['fact', 'food', 'dialect', 'mascot']) if (c[f] !== g[f]) err(`${pref}${g.name}: ${f}が提供データと一致しません`);
  }
} catch (e) { warn('宮城2+山形の提供データ原本と照合できません: ' + e.message); }

// 6d. 福島県46町村(全町村コンプリート): 提供データとの一致、金山町の同名対策
{
  const fkTowns = ['桑折町','国見町','川俣町','鏡石町','下郷町','只見町','南会津町','西会津町','磐梯町','猪苗代町',
    '会津坂下町','柳津町','三島町','金山町（福島県）','会津美里町','矢吹町','棚倉町','矢祭町','塙町'];
  const fkVillages = ['大玉村','天栄村','檜枝岐村','北塩原村','湯川村','昭和村（福島県）','西郷村','泉崎村','中島村','鮫川村'];
  for (const n of fkTowns.concat(fkVillages)) {
    if (!cities.find(c => c.pref === '福島県' && c.name === n)) err(`福島県の${n}が本番データにありません`);
  }
  for (const n of fkVillages) {
    const c = cities.find(x => x.pref === '福島県' && x.name === n);
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (tg && !tg.includes('is_village')) err(`福島県${n}に is_village が付いていません`);
  }
  const fkTV = cities.filter(c => c.pref === '福島県' && (baseName(c.name).endsWith('町') || baseName(c.name).endsWith('村'))).length;
  if (fkTV !== 46) err(`福島県の町村が${fkTV}件です(46件でコンプリートのはず)`);
  const fkCity = cities.filter(c => c.pref === '福島県' && baseName(c.name).endsWith('市')).length;
  if (fkCity !== 13) err(`福島県の市が${fkCity}件です(既存13市のはず)`);
  // 金山町(福島・山形)がすべて県名付きか
  const bareKane = cities.filter(c => baseName(c.name) === '金山町' && c.name === '金山町');
  if (bareKane.length) err(`金山町が県名なしで残っています: ${bareKane.map(c => c.pref).join('・')}`);
}
try {
  const gptFk = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-fukushima-source.json'), 'utf8'));
  if (gptFk.length !== 29) err(`福島県の提供データが${gptFk.length}件です(29件のはず)`);
  const FK_ALIAS = { '金山町': '金山町（福島県）', '昭和村': '昭和村（福島県）' };
  for (const g of gptFk) {
    const c = cities.find(x => x.pref === '福島県' && x.name === (FK_ALIAS[g.name] || g.name));
    if (!c) { err(`福島県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact', 'food', 'dialect', 'mascot']) if (c[f] !== g[f]) err(`福島県${g.name}: ${f}が提供データと一致しません`);
  }
} catch (e) { warn('福島県の提供データ原本と照合できません: ' + e.message); }

// 6d-2. 福島県第2弾17町村(残り・福島コンプリート)+茨城県12町村(コンプリート)
{
  const fk2Towns = ['石川町','浅川町','古殿町','三春町','小野町','広野町','楢葉町','富岡町','大熊町','双葉町','浪江町','新地町'];
  const fk2Villages = ['玉川村','平田村','川内村','葛尾村','飯舘村'];
  for (const n of fk2Towns.concat(fk2Villages)) {
    if (!cities.find(c => c.pref === '福島県' && c.name === n)) err(`福島県第2弾の${n}が本番データにありません`);
  }
  for (const n of fk2Villages) {
    const c = cities.find(x => x.pref === '福島県' && x.name === n);
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (tg && !tg.includes('is_village')) err(`福島県${n}に is_village が付いていません`);
  }
  const ibTowns = ['茨城町','大洗町','城里町','大子町','阿見町','河内町','八千代町','五霞町','境町','利根町'];
  const ibVillages = ['東海村','美浦村'];
  for (const n of ibTowns.concat(ibVillages)) {
    if (!cities.find(c => c.pref === '茨城県' && c.name === n)) err(`茨城県の${n}が本番データにありません`);
  }
  for (const n of ibVillages) {
    const c = cities.find(x => x.pref === '茨城県' && x.name === n);
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (tg && !tg.includes('is_village')) err(`茨城県${n}に is_village が付いていません`);
  }
  const ibTV = cities.filter(c => c.pref === '茨城県' && (baseName(c.name).endsWith('町') || baseName(c.name).endsWith('村'))).length;
  if (ibTV !== 12) err(`茨城県の町村が${ibTV}件です(12件でコンプリートのはず)`);
  const ibCity = cities.filter(c => c.pref === '茨城県' && baseName(c.name).endsWith('市')).length;
  if (ibCity !== 32) err(`茨城県の市が${ibCity}件です(既存32市のはず)`);
}
try {
  const gptFI = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-fukushima2-ibaraki-source.json'), 'utf8'));
  if (gptFI.length !== 29) err(`福島2+茨城の提供データが${gptFI.length}件です(29件のはず)`);
  const fkSet = new Set(['石川町','玉川村','平田村','浅川町','古殿町','三春町','小野町','広野町','楢葉町','富岡町','川内村','大熊町','双葉町','浪江町','葛尾村','新地町','飯舘村']);
  for (const g of gptFI) {
    const pref = fkSet.has(g.name) ? '福島県' : '茨城県';
    const c = cities.find(x => x.pref === pref && x.name === g.name);
    if (!c) { err(`${pref}${g.name}が本番データにありません`); continue; }
    for (const f of ['fact', 'food', 'dialect', 'mascot']) if (c[f] !== g[f]) err(`${pref}${g.name}: ${f}が提供データと一致しません`);
  }
} catch (e) { warn('福島2+茨城の提供データ原本と照合できません: ' + e.message); }

// 6e. 秋田県12町村(全町村コンプリート): 提供データとの一致、既存13市の維持、美郷町の同名対策
{
  const akTowns = ['小坂町','藤里町','三種町','八峰町','五城目町','八郎潟町','井川町','美郷町（秋田県）','羽後町'];
  const akVillages = ['上小阿仁村','大潟村','東成瀬村'];
  for (const n of akTowns.concat(akVillages)) {
    if (!cities.find(c => c.pref === '秋田県' && c.name === n)) err(`秋田県の${n}が本番データにありません`);
  }
  for (const n of akVillages) {
    const c = cities.find(x => x.pref === '秋田県' && x.name === n);
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (tg && !tg.includes('is_village')) err(`秋田県${n}に is_village が付いていません`);
  }
  const akTV = cities.filter(c => c.pref === '秋田県' && (baseName(c.name).endsWith('町') || baseName(c.name).endsWith('村'))).length;
  if (akTV !== 12) err(`秋田県の町村が${akTV}件です(12件でコンプリートのはず)`);
  if (cities.filter(c => c.pref === '秋田県' && baseName(c.name).endsWith('市')).length !== 13) err('秋田県の既存13市が壊れています');
}
// 6f. 栃木県11町(全町村コンプリート): 提供データとの一致、既存14市の維持
{
  const tcTowns = ['上三川町','益子町','茂木町','市貝町','芳賀町','壬生町','野木町','塩谷町','高根沢町','那須町','那珂川町'];
  for (const n of tcTowns) {
    if (!cities.find(c => c.pref === '栃木県' && c.name === n)) err(`栃木県の${n}が本番データにありません`);
  }
  const tcTV = cities.filter(c => c.pref === '栃木県' && (baseName(c.name).endsWith('町') || baseName(c.name).endsWith('村'))).length;
  if (tcTV !== 11) err(`栃木県の町村が${tcTV}件です(11件でコンプリートのはず)`);
  if (cities.filter(c => c.pref === '栃木県' && baseName(c.name).endsWith('市')).length !== 14) err('栃木県の既存14市が壊れています');
}
// 6g. 群馬県23町村(全町村コンプリート): 提供データとの一致、南牧村・明和町・昭和村・高山村の同名対策
{
  const gnTowns = ['吉岡町','神流町','下仁田町','甘楽町',
    '中之条町','長野原町','草津町','東吾妻町','みなかみ町','玉村町','板倉町','明和町（群馬県）','千代田町','大泉町','邑楽町'];
  const gnVillages = ['榛東村','上野村','南牧村（群馬県）',
    '嬬恋村','高山村（群馬県）','片品村','川場村','昭和村（群馬県）'];
  for (const n of gnTowns.concat(gnVillages)) {
    if (!cities.find(c => c.pref === '群馬県' && c.name === n)) err(`群馬県の${n}が本番データにありません`);
  }
  for (const n of gnVillages) {
    const c = cities.find(x => x.pref === '群馬県' && x.name === n);
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (tg && !tg.includes('is_village')) err(`群馬県${n}に is_village が付いていません`);
  }
  const gnTV = cities.filter(c => c.pref === '群馬県' && (baseName(c.name).endsWith('町') || baseName(c.name).endsWith('村'))).length;
  if (gnTV !== 23) err(`群馬県の町村が${gnTV}件です(23件でコンプリートのはず)`);
  if (cities.filter(c => c.pref === '群馬県' && baseName(c.name).endsWith('市')).length !== 12) err('群馬県の既存12市が壊れています');
  // 美郷町・南牧村・明和町・昭和村・高山村がすべて県名付きか
  for (const bn of ['美郷町', '南牧村', '明和町', '昭和村', '高山村']) {
    const bare = cities.filter(c => baseName(c.name) === bn && c.name === bn);
    if (bare.length) err(`${bn}が県名なしで残っています: ${bare.map(c => c.pref).join('・')}`);
  }
}
try {
  const gptATG = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-akita-tochigi-gunma-source.json'), 'utf8'));
  if (gptATG.length !== 30) err(`秋田+栃木+群馬の提供データが${gptATG.length}件です(30件のはず)`);
  const ATG_ALIAS = { '美郷町': '美郷町（秋田県）', '南牧村': '南牧村（群馬県）' };
  const akSet = new Set(['小坂町','上小阿仁村','藤里町','三種町','八峰町','五城目町','八郎潟町','井川町','大潟村','美郷町','羽後町','東成瀬村']);
  const tcSet = new Set(['上三川町','益子町','茂木町','市貝町','芳賀町','壬生町','野木町','塩谷町','高根沢町','那須町','那珂川町']);
  for (const g of gptATG) {
    const pref = akSet.has(g.name) ? '秋田県' : (tcSet.has(g.name) ? '栃木県' : '群馬県');
    const c = cities.find(x => x.pref === pref && x.name === (ATG_ALIAS[g.name] || g.name));
    if (!c) { err(`${pref}${g.name}が本番データにありません`); continue; }
    for (const f of ['fact', 'food', 'dialect', 'mascot']) if (c[f] !== g[f]) err(`${pref}${g.name}: ${f}が提供データと一致しません`);
  }
} catch (e) { warn('秋田+栃木+群馬の提供データ原本と照合できません: ' + e.message); }

// 6h. 埼玉県23町村(全町村コンプリート): 提供データとの一致、美里町の同名対策
{
  const stTowns = ['伊奈町','三芳町','毛呂山町','越生町','滑川町','嵐山町','小川町','川島町','吉見町','鳩山町','ときがわ町','横瀬町','皆野町','長瀞町',
    '小鹿野町','美里町（埼玉県）','神川町','上里町','寄居町','宮代町','杉戸町','松伏町'];
  for (const n of stTowns) {
    if (!cities.find(c => c.pref === '埼玉県' && c.name === n)) err(`埼玉県の${n}が本番データにありません`);
  }
  { const c = cities.find(x => x.pref === '埼玉県' && x.name === '東秩父村');
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (!c) err('埼玉県の東秩父村が本番データにありません');
    else if (!tg.includes('is_village')) err('埼玉県東秩父村に is_village が付いていません'); }
  const stTV = cities.filter(c => c.pref === '埼玉県' && (baseName(c.name).endsWith('町') || baseName(c.name).endsWith('村'))).length;
  if (stTV !== 23) err(`埼玉県の町村が${stTV}件です(23件でコンプリートのはず)`);
  if (cities.filter(c => c.pref === '埼玉県' && baseName(c.name).endsWith('市')).length !== 40) err('埼玉県の既存40市が壊れています');
  if (cities.filter(c => c.pref === '埼玉県' && baseName(c.name).endsWith('村')).length !== 1) err('埼玉県の村が1(東秩父村)でありません');
}
try {
  const gptGS = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-gunma2-saitama-source.json'), 'utf8'));
  if (gptGS.length !== 30) err(`群馬2+埼玉の提供データが${gptGS.length}件です(30件のはず)`);
  const GS_ALIAS = { '明和町': '明和町（群馬県）', '昭和村': '昭和村（群馬県）', '高山村': '高山村（群馬県）' };
  const gnSet = new Set(['中之条町','長野原町','嬬恋村','草津町','高山村','東吾妻町','片品村','川場村','昭和村','みなかみ町','玉村町','板倉町','明和町','千代田町','大泉町','邑楽町']);
  for (const g of gptGS) {
    const pref = gnSet.has(g.name) ? '群馬県' : '埼玉県';
    const c = cities.find(x => x.pref === pref && x.name === (GS_ALIAS[g.name] || g.name));
    if (!c) { err(`${pref}${g.name}が本番データにありません`); continue; }
    for (const f of ['fact', 'food', 'dialect', 'mascot']) if (c[f] !== g[f]) err(`${pref}${g.name}: ${f}が提供データと一致しません`);
  }
} catch (e) { warn('群馬2+埼玉の提供データ原本と照合できません: ' + e.message); }

// 6i. 千葉県17町村(全町村コンプリート): 提供データとの一致、既存37市の維持
{
  const cbTowns = ['酒々井町','栄町','神崎町','多古町','東庄町','九十九里町','芝山町','横芝光町','一宮町','睦沢町','白子町','長柄町','長南町','大多喜町','御宿町','鋸南町'];
  const cbVillages = ['長生村'];
  for (const n of cbTowns.concat(cbVillages)) {
    if (!cities.find(c => c.pref === '千葉県' && c.name === n)) err(`千葉県の${n}が本番データにありません`);
  }
  for (const n of cbVillages) {
    const c = cities.find(x => x.pref === '千葉県' && x.name === n);
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (tg && !tg.includes('is_village')) err(`千葉県${n}に is_village が付いていません`);
  }
  const cbTV = cities.filter(c => c.pref === '千葉県' && (baseName(c.name).endsWith('町') || baseName(c.name).endsWith('村'))).length;
  if (cbTV !== 17) err(`千葉県の町村が${cbTV}件です(17件でコンプリートのはず)`);
  if (cities.filter(c => c.pref === '千葉県' && baseName(c.name).endsWith('市')).length !== 37) err('千葉県の既存37市が壊れています');
  // 美里町(宮城・熊本・埼玉)がすべて県名付きか
  { const bare = cities.filter(c => baseName(c.name) === '美里町' && c.name === '美里町');
    if (bare.length) err(`美里町が県名なしで残っています: ${bare.map(c => c.pref).join('・')}`); }
}
try {
  const gptSC = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-saitama2-chiba-source.json'), 'utf8'));
  if (gptSC.length !== 26) err(`埼玉2+千葉の提供データが${gptSC.length}件です(26件のはず)`);
  const SC_ALIAS = { '美里町': '美里町（埼玉県）' };
  const stSet = new Set(['小鹿野町','東秩父村','美里町','神川町','上里町','寄居町','宮代町','杉戸町','松伏町']);
  for (const g of gptSC) {
    const pref = stSet.has(g.name) ? '埼玉県' : '千葉県';
    const c = cities.find(x => x.pref === pref && x.name === (SC_ALIAS[g.name] || g.name));
    if (!c) { err(`${pref}${g.name}が本番データにありません`); continue; }
    for (const f of ['fact', 'food', 'dialect', 'mascot']) if (c[f] !== g[f]) err(`${pref}${g.name}: ${f}が提供データと一致しません`);
  }
} catch (e) { warn('埼玉2+千葉の提供データ原本と照合できません: ' + e.message); }

// 6j. 東京都13町村(全町村コンプリート・島しょ部含む): 提供データとの一致、既存市区の維持
{
  const tkTowns = ['瑞穂町','日の出町','奥多摩町','大島町','八丈町'];
  const tkVillages = ['檜原村','利島村','新島村','神津島村','三宅村','御蔵島村','青ヶ島村','小笠原村'];
  for (const n of tkTowns.concat(tkVillages)) {
    if (!cities.find(c => c.pref === '東京都' && c.name === n)) err(`東京都の${n}が本番データにありません`);
  }
  for (const n of tkVillages) {
    const c = cities.find(x => x.pref === '東京都' && x.name === n);
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (tg && !tg.includes('is_village')) err(`東京都${n}に is_village が付いていません`);
  }
  const tkTV = cities.filter(c => c.pref === '東京都' && (baseName(c.name).endsWith('町') || baseName(c.name).endsWith('村'))).length;
  if (tkTV !== 13) err(`東京都の町村が${tkTV}件です(13件でコンプリートのはず)`);
  // 島しょ部の村はすべて remote_island を持つ
  for (const n of ['利島村','新島村','神津島村','三宅村','御蔵島村','青ヶ島村','小笠原村','大島町','八丈町']) {
    const c = cities.find(x => x.pref === '東京都' && x.name === n);
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (tg && !tg.includes('remote_island')) err(`東京都${n}(島しょ部)に remote_island が付いていません`);
  }
  if (cities.filter(c => c.pref === '東京都' && baseName(c.name).endsWith('区')).length !== 23) err('東京都の特別区23が壊れています');
  if (cities.filter(c => c.pref === '東京都' && baseName(c.name).endsWith('市')).length !== 26) err('東京都の既存26市が壊れています');
}
// 6k. 神奈川県14町村(全町村コンプリート): 提供データとの一致、既存19市の維持
{
  const knTowns = ['葉山町','寒川町','大磯町','二宮町','中井町','大井町','松田町','山北町','開成町','箱根町','真鶴町','湯河原町','愛川町'];
  const knVillages = ['清川村'];
  for (const n of knTowns.concat(knVillages)) {
    if (!cities.find(c => c.pref === '神奈川県' && c.name === n)) err(`神奈川県の${n}が本番データにありません`);
  }
  for (const n of knVillages) {
    const c = cities.find(x => x.pref === '神奈川県' && x.name === n);
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (tg && !tg.includes('is_village')) err(`神奈川県${n}に is_village が付いていません`);
  }
  const knTV = cities.filter(c => c.pref === '神奈川県' && (baseName(c.name).endsWith('町') || baseName(c.name).endsWith('村'))).length;
  if (knTV !== 14) err(`神奈川県の町村が${knTV}件です(14件でコンプリートのはず)`);
  if (cities.filter(c => c.pref === '神奈川県' && baseName(c.name).endsWith('市')).length !== 19) err('神奈川県の既存19市が壊れています');
}
try {
  const gptTK = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-tokyo-kanagawa-source.json'), 'utf8'));
  if (gptTK.length !== 27) err(`東京+神奈川の提供データが${gptTK.length}件です(27件のはず)`);
  const tkSet = new Set(['瑞穂町','日の出町','檜原村','奥多摩町','大島町','利島村','新島村','神津島村','三宅村','御蔵島村','八丈町','青ヶ島村','小笠原村']);
  for (const g of gptTK) {
    const pref = tkSet.has(g.name) ? '東京都' : '神奈川県';
    const c = cities.find(x => x.pref === pref && x.name === g.name);
    if (!c) { err(`${pref}${g.name}が本番データにありません`); continue; }
    for (const f of ['fact', 'food', 'dialect', 'mascot']) if (c[f] !== g[f]) err(`${pref}${g.name}: ${f}が提供データと一致しません`);
  }
} catch (e) { warn('東京+神奈川の提供データ原本と照合できません: ' + e.message); }
// 6l. 全国47都道府県コンプリート達成の確認
{
  const prefsWithTV = new Set();
  for (const c of cities) {
    if (baseName(c.name).endsWith('町') || baseName(c.name).endsWith('村')) prefsWithTV.add(c.pref);
  }
  const allPrefs = ['北海道','青森県','岩手県','宮城県','秋田県','山形県','福島県','茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県','新潟県','富山県','石川県','福井県','山梨県','長野県','岐阜県','静岡県','愛知県','三重県','滋賀県','京都府','大阪府','兵庫県','奈良県','和歌山県','鳥取県','島根県','岡山県','広島県','山口県','徳島県','香川県','愛媛県','高知県','福岡県','佐賀県','長崎県','熊本県','大分県','宮崎県','鹿児島県','沖縄県'];
  for (const p of allPrefs) {
    if (!prefsWithTV.has(p)) err(`${p}に町村が1件もありません(全国コンプリートのはず)`);
  }
  if (prefsWithTV.size !== 47) err(`町村収録済み都道府県が${prefsWithTV.size}/47です(47でコンプリートのはず)`);
}

// 6m. 全国コンプリート版の最終検証(仕上げ)
//   cities.json のレコード数・ゲーム用集約レコード・実自治体数・都道府県数・
//   町村/村の件数・実自治体IDの重複・4項目とstatsの欠損・北方領土除外・母数除外を確認する。
{
  // (1) cities.json が 1,742 レコード
  if (cities.length !== 1742) err(`cities.json が ${cities.length} レコードです(1,742 のはず)`);

  // (2) ゲーム用「東京23区部」集約レコードがちょうど1件だけ存在
  const aggregates = cities.filter(c => c.name === '東京');
  if (aggregates.length !== 1) err(`ゲーム用「東京」集約レコードが ${aggregates.length} 件です(ちょうど1件のはず)`);
  const aggregate = aggregates[0];
  if (aggregate && aggregate.pref !== '東京都') err(`集約レコード「東京」の pref が「${aggregate && aggregate.pref}」です(東京都のはず)`);

  // (3) 集約レコードを除いた実自治体が 1,741 件
  const realCities = cities.filter(c => c.name !== '東京');
  if (realCities.length !== 1741) err(`実自治体が ${realCities.length} 件です(1,741 のはず)`);

  // 内訳(792市・東京23特別区・743町・183村)
  const shi = realCities.filter(c => baseName(c.name).endsWith('市')).length;
  const ku = realCities.filter(c => baseName(c.name).endsWith('区')).length;
  const machi = realCities.filter(c => baseName(c.name).endsWith('町')).length;
  const mura = realCities.filter(c => baseName(c.name).endsWith('村')).length;
  if (shi !== 792) err(`市が ${shi} 件です(792 のはず)`);
  if (ku !== 23) err(`特別区が ${ku} 件です(23 のはず)`);
  if (machi !== 743) err(`町が ${machi} 件です(743 のはず)`);
  if (mura !== 183) err(`村が ${mura} 件です(183 のはず)`);
  if (shi + ku + machi + mura !== 1741) err(`市区町村の内訳合計が ${shi + ku + machi + mura} 件です(1,741 のはず)`);

  // (4) 都道府県が 47
  const prefSet = new Set(realCities.map(c => c.pref));
  if (prefSet.size !== 47) err(`都道府県が ${prefSet.size} です(47 のはず)`);

  // (5) is_town_village が 926 件、is_village が 183 件
  const tagsOf = c => (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
  const itv = cities.filter(c => tagsOf(c).includes('is_town_village')).length;
  const iv = cities.filter(c => tagsOf(c).includes('is_village')).length;
  if (itv !== 926) err(`is_town_village が ${itv} 件です(926 のはず)`);
  if (iv !== 183) err(`is_village が ${iv} 件です(183 のはず)`);

  // (6) 実自治体の市区町村ID(都道府県::名前)の重複が 0 件(集約レコード含む全体でも一意)
  const idSet = new Set();
  let dup = 0;
  for (const c of cities) {
    const id = `${c.pref}::${c.name}`;
    if (idSet.has(id)) dup++;
    idSet.add(id);
  }
  if (dup !== 0) err(`市区町村IDの重複が ${dup} 件あります(0 のはず)`);

  // (7) fact/food/dialect/mascot/stats の欠損が 0 件
  let missing = 0;
  for (const c of cities) {
    for (const f of ['fact', 'food', 'dialect', 'mascot']) {
      if (c[f] == null || String(c[f]).trim() === '') missing++;
    }
    if (!c.stats || typeof c.stats.population !== 'number' || typeof c.stats.area_km2 !== 'number') missing++;
  }
  if (missing !== 0) err(`fact/food/dialect/mascot/stats の欠損が ${missing} 件あります(0 のはず)`);

  // (8) 北方領土の6村が登録されていない
  const hoppou = ['色丹村', '泊村', '留夜別村', '留別村', '紗那村', '蘂取村'];
  //   ※後志の「古宇郡泊村」は北方領土ではない(登録済み)。北方領土の泊村は「国後郡泊村」。
  //     baseName一致だけで判定すると古宇郡泊村を誤検出するため、泊村は北海道の村として2件以上ないことで確認する。
  for (const n of hoppou) {
    if (n === '泊村') {
      const tomari = cities.filter(c => c.pref === '北海道' && baseName(c.name) === '泊村');
      if (tomari.length > 1) err(`北方領土の国後郡泊村が登録されている可能性があります(泊村が ${tomari.length} 件)`);
    } else if (cities.find(c => baseName(c.name) === n)) {
      err(`北方領土の ${n} が登録されています(対象外のはず)`);
    }
  }

  // (9) 全国制覇帳の母数・都道府県別件数・全国件数で集約レコードを除外していること(app.js側の実装確認)
  try {
    const appSrc = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');
    if (!appSrc.includes("!== '東京'") && !appSrc.includes('!== "東京"')) {
      warn("app.js に集約レコード「東京」を除外する処理(c.name !== '東京')が見当たりません");
    }
  } catch (e) { warn('app.js を読み込めません: ' + e.message); }

  console.log('[コンプリート検証] cities.json 1,742レコード / 実自治体 1,741件(集約「東京」1件を除く) / 792市・23特別区・743町・183村 / 47都道府県 / is_town_village 926・is_village 183 / ID重複0・欠損0・北方領土6村除外 を確認しました。');
}

// 5f. 沖縄県11町19村(九州・沖縄コンプリート): 提供データとの一致、既存11市の維持、離島多数
{
  const okTown = cities.filter(c => c.pref === '沖縄県' && baseName(c.name).endsWith('町')).length;
  const okVill = cities.filter(c => c.pref === '沖縄県' && baseName(c.name).endsWith('村')).length;
  if (okTown !== 11) err(`沖縄県の町が${okTown}件です(11件のはず)`);
  if (okVill !== 19) err(`沖縄県の村が${okVill}件です(19件のはず)`);
  if (cities.filter(c => c.pref === '沖縄県' && baseName(c.name).endsWith('市')).length !== 11)
    err('沖縄県の既存11市が壊れています');
  const okVillages = ['国頭村','大宜味村','東村','今帰仁村','恩納村','宜野座村','伊江村','読谷村',
                      '北中城村','中城村','渡嘉敷村','座間味村','粟国村','渡名喜村','南大東村',
                      '北大東村','伊平屋村','伊是名村','多良間村'];
  for (const n of okVillages) {
    const c = cities.find(x => x.pref === '沖縄県' && x.name === n);
    if (!c) { err(`沖縄県${n}が見つかりません`); continue; }
    const tg = Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]);
    if (!tg.includes('is_village')) err(`沖縄県${n}に is_village が付いていません`);
  }
  // 与那国町=日本最西端タグ
  const yonaguni = cities.find(x => x.pref === '沖縄県' && x.name === '与那国町');
  if (yonaguni) {
    const tg = Array.isArray(yonaguni.tags) ? yonaguni.tags : Object.keys(yonaguni.tags).filter(k => yonaguni.tags[k]);
    if (!tg.includes('japan_westernmost')) err('与那国町に japan_westernmost が付いていません');
  }
}
try {
  const gptOk = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-okinawa-source.json'), 'utf8'));
  if (gptOk.length !== 30) err(`沖縄県の提供データが${gptOk.length}件です(30件のはず)`);
  for (const g of gptOk) {
    const c = cities.find(x => x.pref === '沖縄県' && x.name === g.name);
    if (!c) { err(`沖縄県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`沖縄県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('沖縄県の提供データ原本と照合できません: ' + e.message); }

// 5e. 鹿児島県20町4村(九州コンプリート): 提供データとの一致、既存19市の維持、離島多数
{
  const kgTown = cities.filter(c => c.pref === '鹿児島県' && baseName(c.name).endsWith('町')).length;
  const kgVill = cities.filter(c => c.pref === '鹿児島県' && baseName(c.name).endsWith('村')).length;
  if (kgTown !== 20) err(`鹿児島県の町が${kgTown}件です(20件のはず)`);
  if (kgVill !== 4) err(`鹿児島県の村が${kgVill}件です(三島村・十島村・大和村・宇検村の4件のはず)`);
  if (cities.filter(c => c.pref === '鹿児島県' && baseName(c.name).endsWith('市')).length !== 19)
    err('鹿児島県の既存19市が壊れています');
  for (const n of ['三島村', '十島村', '大和村', '宇検村']) {
    const c = cities.find(x => x.pref === '鹿児島県' && x.name === n);
    if (!c) { err(`鹿児島県${n}が見つかりません`); continue; }
    const tg = Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]);
    if (!tg.includes('is_village')) err(`鹿児島県${n}に is_village が付いていません`);
  }
  // 奄美群島・種子島・屋久島は薩摩でも大隅でもない(地域タグなし)を確認
  for (const n of ['屋久島町', '龍郷町', '喜界町', '与論町']) {
    const c = cities.find(x => x.pref === '鹿児島県' && x.name === n);
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (tg && (tg.includes('satsuma_area') || tg.includes('osumi_area')))
      err(`鹿児島県${n}に薩摩/大隅タグが付いています(離島は地域タグなし)`);
  }
}
try {
  const raw = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-kagoshima-source.json'), 'utf8'));
  const gptKg = raw['鹿児島県'];
  if (gptKg.length !== 24) err(`鹿児島県の提供データが${gptKg.length}件です(24件のはず)`);
  for (const g of gptKg) {
    const c = cities.find(x => x.pref === '鹿児島県' && x.name === g.name);
    if (!c) { err(`鹿児島県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`鹿児島県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('鹿児島県の提供データ原本と照合できません: ' + e.message); }

// 5d. 大分県3町1村・宮崎県14町3村: 提供データとの一致、既存市の維持、美郷町の同名対策
{
  const otTown = cities.filter(c => c.pref === '大分県' && baseName(c.name).endsWith('町')).length;
  const otVill = cities.filter(c => c.pref === '大分県' && baseName(c.name).endsWith('村')).length;
  if (otTown !== 3) err(`大分県の町が${otTown}件です(3件のはず)`);
  if (otVill !== 1) err(`大分県の村が${otVill}件です(姫島村の1件のはず)`);
  if (cities.filter(c => c.pref === '大分県' && baseName(c.name).endsWith('市')).length !== 14)
    err('大分県の既存14市が壊れています');
  const myTown = cities.filter(c => c.pref === '宮崎県' && baseName(c.name).endsWith('町')).length;
  const myVill = cities.filter(c => c.pref === '宮崎県' && baseName(c.name).endsWith('村')).length;
  if (myTown !== 14) err(`宮崎県の町が${myTown}件です(14件のはず)`);
  if (myVill !== 3) err(`宮崎県の村が${myVill}件です(西米良村・諸塚村・椎葉村の3件のはず)`);
  if (cities.filter(c => c.pref === '宮崎県' && baseName(c.name).endsWith('市')).length !== 9)
    err('宮崎県の既存9市が壊れています');
  for (const n of ['姫島村']) {
    const c = cities.find(x => x.pref === '大分県' && x.name === n);
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (!tg || !tg.includes('is_village')) err(`大分県${n}に is_village が付いていません`);
  }
  for (const n of ['西米良村', '諸塚村', '椎葉村']) {
    const c = cities.find(x => x.pref === '宮崎県' && x.name === n);
    const tg = c && (Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]));
    if (!tg || !tg.includes('is_village')) err(`宮崎県${n}に is_village が付いていません`);
  }
  const bareMisato = cities.filter(c => baseName(c.name) === '美郷町' && c.name === '美郷町');
  if (bareMisato.length) err(`美郷町が県名なしで残っています: ${bareMisato.map(c => c.pref).join('・')}`);
}
try {
  const raw = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-oita-miyazaki-source.json'), 'utf8'));
  const gptOita = raw['大分県'], gptMiya = raw['宮崎県'];
  if (gptOita.length !== 4) err(`大分県の提供データが${gptOita.length}件です(4件のはず)`);
  if (gptMiya.length !== 17) err(`宮崎県の提供データが${gptMiya.length}件です(17件のはず)`);
  const MIYA_ALIAS = { '美郷町': '美郷町（宮崎県）' };
  for (const g of gptOita) {
    const c = cities.find(x => x.pref === '大分県' && x.name === g.name);
    if (!c) { err(`大分県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact', 'food', 'dialect', 'mascot']) if (c[f] !== g[f]) err(`大分県${g.name}: ${f}が提供データと一致しません`);
  }
  for (const g of gptMiya) {
    const c = cities.find(x => x.pref === '宮崎県' && x.name === (MIYA_ALIAS[g.name] || g.name));
    if (!c) { err(`宮崎県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact', 'food', 'dialect', 'mascot']) if (c[f] !== g[f]) err(`宮崎県${g.name}: ${f}が提供データと一致しません`);
  }
} catch (e) { warn('大分・宮崎の提供データ原本と照合できません: ' + e.message); }

// 5c. 熊本県23町8村: 提供データとの一致、既存市の維持、高森町の同名対策、8村のis_village
{
  const kmTown = cities.filter(c => c.pref === '熊本県' && baseName(c.name).endsWith('町')).length;
  const kmVill = cities.filter(c => c.pref === '熊本県' && baseName(c.name).endsWith('村')).length;
  if (kmTown !== 23) err(`熊本県の町が${kmTown}件です(23件のはず)`);
  if (kmVill !== 8) err(`熊本県の村が${kmVill}件です(8件のはず)`);
  const kmVillages = ['産山村','西原村','南阿蘇村','水上村','相良村','五木村','山江村','球磨村'];
  for (const n of kmVillages) {
    const c = cities.find(x => x.pref === '熊本県' && x.name === n);
    if (!c) { err(`熊本県${n}が見つかりません`); continue; }
    const tg = Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]);
    if (!tg.includes('is_village')) err(`熊本県${n}に is_village が付いていません`);
  }
  // 高森町(長野・熊本)がすべて県名付きか
  const bareTakamori = cities.filter(c => baseName(c.name) === '高森町' && c.name === '高森町');
  if (bareTakamori.length) err(`高森町が県名なしで残っています: ${bareTakamori.map(c => c.pref).join('・')}`);
}
try {
  const gptKuma = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-kumamoto-source.json'), 'utf8'));
  if (gptKuma.length !== 31) err(`熊本県の提供データが${gptKuma.length}件です(31件のはず)`);
  const KUMA_ALIAS = { '高森町': '高森町（熊本県）', '美里町': '美里町（熊本県）', '小国町': '小国町（熊本県）' };
  for (const g of gptKuma) {
    const c = cities.find(x => x.pref === '熊本県' && x.name === (KUMA_ALIAS[g.name] || g.name));
    if (!c) { err(`熊本県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`熊本県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('熊本県の提供データ原本と照合できません: ' + e.message); }

// 5b. 佐賀県10町・長崎県8町: 村なし、提供データとの一致、既存市の維持(九州)
{
  const sgTown = cities.filter(c => c.pref === '佐賀県' && baseName(c.name).endsWith('町')).length;
  const sgVill = cities.filter(c => c.pref === '佐賀県' && baseName(c.name).endsWith('村')).length;
  if (sgTown !== 10) err(`佐賀県の町が${sgTown}件です(10件のはず)`);
  if (sgVill !== 0) err(`佐賀県に村が${sgVill}件あります(佐賀県に対象の村はありません)`);
  if (cities.filter(c => c.pref === '佐賀県' && baseName(c.name).endsWith('市')).length !== 10)
    err('佐賀県の既存10市が壊れています');
  const ngTown = cities.filter(c => c.pref === '長崎県' && baseName(c.name).endsWith('町')).length;
  const ngVill = cities.filter(c => c.pref === '長崎県' && baseName(c.name).endsWith('村')).length;
  if (ngTown !== 8) err(`長崎県の町が${ngTown}件です(8件のはず)`);
  if (ngVill !== 0) err(`長崎県に村が${ngVill}件あります(長崎県に対象の村はありません)`);
  if (cities.filter(c => c.pref === '長崎県' && baseName(c.name).endsWith('市')).length !== 13)
    err('長崎県の既存13市が壊れています');
}
try {
  const gptSN = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-saga-nagasaki-source.json'), 'utf8'));
  if (gptSN.length !== 18) err(`佐賀・長崎の提供データが${gptSN.length}件です(18件のはず)`);
  for (const g of gptSN) {
    const c = cities.find(x => (x.pref === '佐賀県' || x.pref === '長崎県') && x.name === g.name);
    if (!c) { err(`${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('佐賀・長崎の提供データ原本と照合できません: ' + e.message); }

// 5a. 福岡県31町村: 町29・村2、提供データとの一致、既存29市の維持、広川町の同名対策(九州着手)
{
  const fkTown = cities.filter(c => c.pref === '福岡県' && baseName(c.name).endsWith('町')).length;
  const fkVill = cities.filter(c => c.pref === '福岡県' && baseName(c.name).endsWith('村')).length;
  if (fkTown !== 29) err(`福岡県の町が${fkTown}件です(29件のはず)`);
  if (fkVill !== 2) err(`福岡県の村が${fkVill}件です(東峰村・赤村の2件のはず)`);
  if (cities.filter(c => c.pref === '福岡県' && baseName(c.name).endsWith('市')).length !== 29)
    err('福岡県の既存29市が壊れています');
  for (const n of ['東峰村', '赤村']) {
    const c = cities.find(x => x.pref === '福岡県' && x.name === n);
    if (!c) { err(`福岡県${n}が見つかりません`); continue; }
    const tg = Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]);
    if (!tg.includes('is_village')) err(`福岡県${n}に is_village が付いていません`);
  }
  // 広川町(和歌山・福岡)がすべて県名付きか
  const bareHirokawa = cities.filter(c => baseName(c.name) === '広川町' && c.name === '広川町');
  if (bareHirokawa.length) err(`広川町が県名なしで残っています: ${bareHirokawa.map(c => c.pref).join('・')}`);
}
try {
  const gptFukuoka = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-fukuoka-source.json'), 'utf8'));
  if (gptFukuoka.length !== 31) err(`福岡県の提供データが${gptFukuoka.length}件です(31件のはず)`);
  const FUKUOKA_ALIAS = { '広川町': '広川町（福岡県）', '川崎町': '川崎町（福岡県）' };
  for (const g of gptFukuoka) {
    const c = cities.find(x => x.pref === '福岡県' && x.name === (FUKUOKA_ALIAS[g.name] || g.name));
    if (!c) { err(`福岡県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`福岡県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('福岡県の提供データ原本と照合できません: ' + e.message); }

// 4z. 高知県23町村: 町17・村6、提供データとの一致、既存11市の維持、四国地方(四国コンプリート)
{
  const koTown = cities.filter(c => c.pref === '高知県' && baseName(c.name).endsWith('町')).length;
  const koVill = cities.filter(c => c.pref === '高知県' && baseName(c.name).endsWith('村')).length;
  if (koTown !== 17) err(`高知県の町が${koTown}件です(17件のはず)`);
  if (koVill !== 6) err(`高知県の村が${koVill}件です(6件のはず)`);
  if (cities.filter(c => c.pref === '高知県' && baseName(c.name).endsWith('市')).length !== 11)
    err('高知県の既存11市が壊れています');
  // 6村(北川村・馬路村・芸西村・大川村・日高村・三原村)が is_village を持つか
  for (const n of ['北川村', '馬路村', '芸西村', '大川村', '日高村', '三原村']) {
    const c = cities.find(x => x.pref === '高知県' && x.name === n);
    if (!c) { err(`高知県${n}が見つかりません`); continue; }
    const tg = Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]);
    if (!tg.includes('is_village')) err(`高知県${n}に is_village が付いていません`);
  }
}
try {
  const gptKochi = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-kochi-source.json'), 'utf8'));
  if (gptKochi.length !== 23) err(`高知県の提供データが${gptKochi.length}件です(23件のはず)`);
  for (const g of gptKochi) {
    const c = cities.find(x => x.pref === '高知県' && x.name === g.name);
    if (!c) { err(`高知県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`高知県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('高知県の提供データ原本と照合できません: ' + e.message); }

// 4y. 愛媛県9町: 町9・村0、提供データとの一致、既存11市の維持、四国地方
{
  const ehTown = cities.filter(c => c.pref === '愛媛県' && baseName(c.name).endsWith('町')).length;
  const ehVill = cities.filter(c => c.pref === '愛媛県' && baseName(c.name).endsWith('村')).length;
  if (ehTown !== 9) err(`愛媛県の町が${ehTown}件です(9件のはず)`);
  if (ehVill !== 0) err(`愛媛県に村が${ehVill}件あります(愛媛県に対象の村はありません)`);
  if (cities.filter(c => c.pref === '愛媛県' && baseName(c.name).endsWith('市')).length !== 11)
    err('愛媛県の既存11市が壊れています');
}
try {
  const gptEhime = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-ehime-source.json'), 'utf8'));
  if (gptEhime.length !== 9) err(`愛媛県の提供データが${gptEhime.length}件です(9件のはず)`);
  const EHIME_ALIAS = { '松前町': '松前町（愛媛県）' };
  for (const g of gptEhime) {
    const c = cities.find(x => x.pref === '愛媛県' && x.name === (EHIME_ALIAS[g.name] || g.name));
    if (!c) { err(`愛媛県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`愛媛県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('愛媛県の提供データ原本と照合できません: ' + e.message); }

// 4x. 香川県9町: 町9・村0、提供データとの一致、既存8市の維持、四国地方
{
  const kaTown = cities.filter(c => c.pref === '香川県' && baseName(c.name).endsWith('町')).length;
  const kaVill = cities.filter(c => c.pref === '香川県' && baseName(c.name).endsWith('村')).length;
  if (kaTown !== 9) err(`香川県の町が${kaTown}件です(9件のはず)`);
  if (kaVill !== 0) err(`香川県に村が${kaVill}件あります(香川県に対象の村はありません)`);
  if (cities.filter(c => c.pref === '香川県' && baseName(c.name).endsWith('市')).length !== 8)
    err('香川県の既存8市が壊れています');
}
try {
  const gptKagawa = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-kagawa-source.json'), 'utf8'));
  if (gptKagawa.length !== 9) err(`香川県の提供データが${gptKagawa.length}件です(9件のはず)`);
  for (const g of gptKagawa) {
    const c = cities.find(x => x.pref === '香川県' && x.name === g.name);
    if (!c) { err(`香川県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`香川県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('香川県の提供データ原本と照合できません: ' + e.message); }

// 4w. 徳島県16町村: 町15・村1、提供データとの一致、既存8市の維持、四国地方
{
  const toTown = cities.filter(c => c.pref === '徳島県' && baseName(c.name).endsWith('町')).length;
  const toVill = cities.filter(c => c.pref === '徳島県' && baseName(c.name).endsWith('村')).length;
  if (toTown !== 15) err(`徳島県の町が${toTown}件です(15件のはず)`);
  if (toVill !== 1) err(`徳島県の村が${toVill}件です(佐那河内村のみ1件のはず)`);
  if (cities.filter(c => c.pref === '徳島県' && baseName(c.name).endsWith('市')).length !== 8)
    err('徳島県の既存8市が壊れています');
  const sana = cities.find(c => c.pref === '徳島県' && c.name === '佐那河内村');
  if (!sana) err('佐那河内村が見つかりません');
  else {
    const tg = Array.isArray(sana.tags) ? sana.tags : Object.keys(sana.tags).filter(k => sana.tags[k]);
    if (!tg.includes('is_village')) err('佐那河内村に is_village が付いていません');
  }
}
try {
  const gptTokushima = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-tokushima-source.json'), 'utf8'));
  if (gptTokushima.length !== 16) err(`徳島県の提供データが${gptTokushima.length}件です(16件のはず)`);
  for (const g of gptTokushima) {
    const c = cities.find(x => x.pref === '徳島県' && x.name === g.name);
    if (!c) { err(`徳島県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`徳島県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('徳島県の提供データ原本と照合できません: ' + e.message); }

// 4v. 山口県6町: 町6・村0、提供データとの一致、既存13市の維持
{
  const yaTown = cities.filter(c => c.pref === '山口県' && baseName(c.name).endsWith('町')).length;
  const yaVill = cities.filter(c => c.pref === '山口県' && baseName(c.name).endsWith('村')).length;
  if (yaTown !== 6) err(`山口県の町が${yaTown}件です(6件のはず)`);
  if (yaVill !== 0) err(`山口県に村が${yaVill}件あります(山口県に対象の村はありません)`);
  if (cities.filter(c => c.pref === '山口県' && baseName(c.name).endsWith('市')).length !== 13)
    err('山口県の既存13市が壊れています');
}
try {
  const gptYamaguchi = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-yamaguchi-source.json'), 'utf8'));
  if (gptYamaguchi.length !== 6) err(`山口県の提供データが${gptYamaguchi.length}件です(6件のはず)`);
  for (const g of gptYamaguchi) {
    const c = cities.find(x => x.pref === '山口県' && x.name === g.name);
    if (!c) { err(`山口県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`山口県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('山口県の提供データ原本と照合できません: ' + e.message); }

// 4u. 広島県9町: 町9・村0、提供データとの一致、既存14市の維持、府中町(町)と府中市の区別
{
  const hiTown = cities.filter(c => c.pref === '広島県' && baseName(c.name).endsWith('町')).length;
  const hiVill = cities.filter(c => c.pref === '広島県' && baseName(c.name).endsWith('村')).length;
  if (hiTown !== 9) err(`広島県の町が${hiTown}件です(9件のはず)`);
  if (hiVill !== 0) err(`広島県に村が${hiVill}件あります(広島県に対象の村はありません)`);
  if (cities.filter(c => c.pref === '広島県' && baseName(c.name).endsWith('市')).length !== 14)
    err('広島県の既存14市が壊れています');
  // 府中町(安芸郡の町)と府中市（広島県）が別レコードで両立しているか
  const fuchuMachi = cities.find(c => c.pref === '広島県' && c.name === '府中町');
  const fuchuShi = cities.find(c => c.pref === '広島県' && c.name === '府中市（広島県）');
  if (!fuchuMachi) err('広島県府中町(安芸郡)が見つかりません');
  if (!fuchuShi) err('広島県府中市（広島県）が壊れています');
}
try {
  const gptHiroshima = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-hiroshima-source.json'), 'utf8'));
  if (gptHiroshima.length !== 9) err(`広島県の提供データが${gptHiroshima.length}件です(9件のはず)`);
  for (const g of gptHiroshima) {
    const c = cities.find(x => x.pref === '広島県' && x.name === g.name);
    if (!c) { err(`広島県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`広島県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('広島県の提供データ原本と照合できません: ' + e.message); }

// 4t. 岡山県12町村: 町10・村2、提供データとの一致、既存15市の維持
{
  const okTown = cities.filter(c => c.pref === '岡山県' && baseName(c.name).endsWith('町')).length;
  const okVill = cities.filter(c => c.pref === '岡山県' && baseName(c.name).endsWith('村')).length;
  if (okTown !== 10) err(`岡山県の町が${okTown}件です(10件のはず)`);
  if (okVill !== 2) err(`岡山県の村が${okVill}件です(新庄村・西粟倉村の2件のはず)`);
  if (cities.filter(c => c.pref === '岡山県' && baseName(c.name).endsWith('市')).length !== 15)
    err('岡山県の既存15市が壊れています');
  // 村2件(新庄村・西粟倉村)が is_village を持つか
  for (const n of ['新庄村', '西粟倉村']) {
    const c = cities.find(x => x.pref === '岡山県' && x.name === n);
    if (!c) { err(`岡山県${n}が見つかりません`); continue; }
    const tg = Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]);
    if (!tg.includes('is_village')) err(`岡山県${n}に is_village が付いていません`);
  }
}
try {
  const gptOkayama = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-okayama-source.json'), 'utf8'));
  if (gptOkayama.length !== 12) err(`岡山県の提供データが${gptOkayama.length}件です(12件のはず)`);
  for (const g of gptOkayama) {
    const c = cities.find(x => x.pref === '岡山県' && x.name === g.name);
    if (!c) { err(`岡山県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`岡山県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('岡山県の提供データ原本と照合できません: ' + e.message); }

// 4s. 島根県11町村: 町10・村1、提供データとの一致、既存8市の維持、隠岐諸島の離島判定
{
  const shTown = cities.filter(c => c.pref === '島根県' && baseName(c.name).endsWith('町')).length;
  const shVill = cities.filter(c => c.pref === '島根県' && baseName(c.name).endsWith('村')).length;
  if (shTown !== 10) err(`島根県の町が${shTown}件です(10件のはず)`);
  if (shVill !== 1) err(`島根県の村が${shVill}件です(知夫村のみ1件のはず)`);
  if (cities.filter(c => c.pref === '島根県' && baseName(c.name).endsWith('市')).length !== 8)
    err('島根県の既存8市が壊れています');
  const chibu = cities.find(c => c.pref === '島根県' && c.name === '知夫村');
  if (!chibu) err('知夫村が見つかりません');
  else {
    const tg = Array.isArray(chibu.tags) ? chibu.tags : Object.keys(chibu.tags).filter(k => chibu.tags[k]);
    if (!tg.includes('is_village')) err('知夫村に is_village が付いていません');
  }
  // 隠岐諸島4町村(海士町・西ノ島町・知夫村・隠岐の島町)が remote_island を持つか
  for (const n of ['海士町', '西ノ島町', '知夫村', '隠岐の島町']) {
    const c = cities.find(x => x.pref === '島根県' && x.name === n);
    if (!c) { err(`島根県${n}が見つかりません`); continue; }
    const tg = Array.isArray(c.tags) ? c.tags : Object.keys(c.tags).filter(k => c.tags[k]);
    if (!tg.includes('remote_island')) err(`島根県${n}に remote_island が付いていません`);
  }
}
try {
  const gptShimane = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-shimane-source.json'), 'utf8'));
  if (gptShimane.length !== 11) err(`島根県の提供データが${gptShimane.length}件です(11件のはず)`);
  const SHIMANE_ALIAS = { '美郷町': '美郷町（島根県）' };
  for (const g of gptShimane) {
    const c = cities.find(x => x.pref === '島根県' && x.name === (SHIMANE_ALIAS[g.name] || g.name));
    if (!c) { err(`島根県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`島根県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('島根県の提供データ原本と照合できません: ' + e.message); }

// 4r. 鳥取県15町村: 町14・村1、提供データとの一致、既存4市の維持、南部町・日野町の同名対策
{
  const toTown = cities.filter(c => c.pref === '鳥取県' && baseName(c.name).endsWith('町')).length;
  const toVill = cities.filter(c => c.pref === '鳥取県' && baseName(c.name).endsWith('村')).length;
  if (toTown !== 14) err(`鳥取県の町が${toTown}件です(14件のはず)`);
  if (toVill !== 1) err(`鳥取県の村が${toVill}件です(日吉津村のみ1件のはず)`);
  if (cities.filter(c => c.pref === '鳥取県' && baseName(c.name).endsWith('市')).length !== 4)
    err('鳥取県の既存4市が壊れています');
  const hiezu = cities.find(c => c.pref === '鳥取県' && c.name === '日吉津村');
  if (!hiezu) err('日吉津村が見つかりません');
  else {
    const tg = Array.isArray(hiezu.tags) ? hiezu.tags : Object.keys(hiezu.tags).filter(k => hiezu.tags[k]);
    if (!tg.includes('is_village')) err('日吉津村に is_village が付いていません');
  }
  // 南部町(山梨・鳥取)・日野町(滋賀・鳥取)がすべて県名付きか
  for (const bn of ['南部町', '日野町']) {
    const bare = cities.filter(c => baseName(c.name) === bn && c.name === bn);
    if (bare.length) err(`${bn}が県名なしで残っています: ${bare.map(c => c.pref).join('・')}`);
  }
}
try {
  const gptTottori = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-tottori-source.json'), 'utf8'));
  if (gptTottori.length !== 15) err(`鳥取県の提供データが${gptTottori.length}件です(15件のはず)`);
  const TOTTORI_ALIAS = { '南部町': '南部町（鳥取県）', '日野町': '日野町（鳥取県）' };
  for (const g of gptTottori) {
    const c = cities.find(x => x.pref === '鳥取県' && x.name === (TOTTORI_ALIAS[g.name] || g.name));
    if (!c) { err(`鳥取県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`鳥取県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('鳥取県の提供データ原本と照合できません: ' + e.message); }

// 4q. 和歌山県21町村: 町20・村1、提供データとの一致、既存9市の維持、美浜町の同名対策
{
  const waTown = cities.filter(c => c.pref === '和歌山県' && baseName(c.name).endsWith('町')).length;
  const waVill = cities.filter(c => c.pref === '和歌山県' && baseName(c.name).endsWith('村')).length;
  if (waTown !== 20) err(`和歌山県の町が${waTown}件です(20件のはず)`);
  if (waVill !== 1) err(`和歌山県の村が${waVill}件です(北山村のみ1件のはず)`);
  if (cities.filter(c => c.pref === '和歌山県' && baseName(c.name).endsWith('市')).length !== 9)
    err('和歌山県の既存9市が壊れています');
  // 北山村が is_village を持つか
  const kitayama = cities.find(c => c.pref === '和歌山県' && c.name === '北山村');
  if (!kitayama) err('北山村が見つかりません');
  else {
    const tg = Array.isArray(kitayama.tags) ? kitayama.tags : Object.keys(kitayama.tags).filter(k => kitayama.tags[k]);
    if (!tg.includes('is_village')) err('北山村に is_village が付いていません');
  }
  // 美浜町(福井・愛知・和歌山)がすべて県名付きか
  const mihama = cities.filter(c => baseName(c.name) === '美浜町');
  const bareMihama = mihama.filter(c => c.name === '美浜町');
  if (bareMihama.length) err(`美浜町が県名なしで残っています: ${bareMihama.map(c => c.pref).join('・')}`);
}
try {
  const gptWaka = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-wakayama-source.json'), 'utf8'));
  if (gptWaka.length !== 21) err(`和歌山県の提供データが${gptWaka.length}件です(21件のはず)`);
  const WAKAYAMA_ALIAS = { '美浜町': '美浜町（和歌山県）', '広川町': '広川町（和歌山県）', '日高町': '日高町（和歌山県）' };
  for (const g of gptWaka) {
    const c = cities.find(x => x.pref === '和歌山県' && x.name === (WAKAYAMA_ALIAS[g.name] || g.name));
    if (!c) { err(`和歌山県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`和歌山県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('和歌山県の提供データ原本と照合できません: ' + e.message); }

// 4p. 奈良県27町村: 町15・村12、提供データとの一致、既存12市の維持、川上村の同名対策
{
  const naTown = cities.filter(c => c.pref === '奈良県' && baseName(c.name).endsWith('町')).length;
  const naVill = cities.filter(c => c.pref === '奈良県' && baseName(c.name).endsWith('村')).length;
  if (naTown !== 15) err(`奈良県の町が${naTown}件です(15件のはず)`);
  if (naVill !== 12) err(`奈良県の村が${naVill}件です(12件のはず)`);
  if (cities.filter(c => c.pref === '奈良県' && baseName(c.name).endsWith('市')).length !== 12)
    err('奈良県の既存12市が壊れています');
  // 川上村(長野・奈良)がどちらも県名付きで区別されているか
  const kawakami = cities.filter(c => baseName(c.name) === '川上村');
  const bareKawakami = kawakami.filter(c => c.name === '川上村');
  if (bareKawakami.length) err(`川上村が県名なしで残っています: ${bareKawakami.map(c => c.pref).join('・')}`);
  // 村12件すべてに is_village があるか
  const naVillages = cities.filter(c => c.pref === '奈良県' && baseName(c.name).endsWith('村'));
  for (const v of naVillages) {
    const tg = Array.isArray(v.tags) ? v.tags : Object.keys(v.tags).filter(k => v.tags[k]);
    if (!tg.includes('is_village')) err(`奈良県${v.name}に is_village が付いていません`);
  }
}
try {
  const gptNara = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-nara-source.json'), 'utf8'));
  if (gptNara.length !== 27) err(`奈良県の提供データが${gptNara.length}件です(27件のはず)`);
  const NARA_ALIAS = { '川上村': '川上村（奈良県）', '川西町': '川西町（奈良県）' };
  for (const g of gptNara) {
    const c = cities.find(x => x.pref === '奈良県' && x.name === (NARA_ALIAS[g.name] || g.name));
    if (!c) { err(`奈良県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`奈良県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('奈良県の提供データ原本と照合できません: ' + e.message); }

// 4o. 兵庫県12町: 町12・村0、提供データとの一致、既存29市の維持、太子町の同名対策
{
  const hyTown = cities.filter(c => c.pref === '兵庫県' && baseName(c.name).endsWith('町')).length;
  const hyVill = cities.filter(c => c.pref === '兵庫県' && baseName(c.name).endsWith('村')).length;
  if (hyTown !== 12) err(`兵庫県の町が${hyTown}件です(12件のはず)`);
  if (hyVill !== 0) err(`兵庫県に村が${hyVill}件あります(兵庫県に対象の村はありません)`);
  if (cities.filter(c => c.pref === '兵庫県' && baseName(c.name).endsWith('市')).length !== 29)
    err('兵庫県の既存29市が壊れています');
  // 太子町(大阪・兵庫)がどちらも県名付きで区別されているか
  const taishi = cities.filter(c => baseName(c.name) === '太子町');
  const bareTaishi = taishi.filter(c => c.name === '太子町');
  if (bareTaishi.length) err(`太子町が県名なしで残っています: ${bareTaishi.map(c => c.pref).join('・')}`);
}
try {
  const gptHyogo = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-hyogo-source.json'), 'utf8'));
  if (gptHyogo.length !== 12) err(`兵庫県の提供データが${gptHyogo.length}件です(12件のはず)`);
  const HYOGO_ALIAS = { '太子町': '太子町（兵庫県）' };
  for (const g of gptHyogo) {
    const c = cities.find(x => x.pref === '兵庫県' && x.name === (HYOGO_ALIAS[g.name] || g.name));
    if (!c) { err(`兵庫県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`兵庫県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('兵庫県の提供データ原本と照合できません: ' + e.message); }

// 4n. 大阪府10町村: 町9・村1、提供データとの一致、既存33市の維持
{
  const ooTown = cities.filter(c => c.pref === '大阪府' && baseName(c.name).endsWith('町')).length;
  const ooVill = cities.filter(c => c.pref === '大阪府' && baseName(c.name).endsWith('村')).length;
  if (ooTown !== 9) err(`大阪府の町が${ooTown}件です(9件のはず)`);
  if (ooVill !== 1) err(`大阪府の村が${ooVill}件です(千早赤阪村のみ1件のはず)`);
  if (cities.filter(c => c.pref === '大阪府' && baseName(c.name).endsWith('市')).length !== 33)
    err('大阪府の既存33市が壊れています');
  const chihaya = cities.find(c => c.pref === '大阪府' && c.name === '千早赤阪村');
  if (!chihaya) err('千早赤阪村が見つかりません');
  else {
    const tg = Array.isArray(chihaya.tags) ? chihaya.tags : Object.keys(chihaya.tags).filter(k => chihaya.tags[k]);
    if (!tg.includes('is_village')) err('千早赤阪村に is_village が付いていません');
  }
}
try {
  const gptOsaka = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-osaka-source.json'), 'utf8'));
  if (gptOsaka.length !== 10) err(`大阪府の提供データが${gptOsaka.length}件です(10件のはず)`);
  const OSAKA_ALIAS = { '太子町': '太子町（大阪府）' };
  for (const g of gptOsaka) {
    const c = cities.find(x => x.pref === '大阪府' && x.name === (OSAKA_ALIAS[g.name] || g.name));
    if (!c) { err(`大阪府${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`大阪府${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('大阪府の提供データ原本と照合できません: ' + e.message); }

// 4m. 京都府11町村: 町10・村1、提供データとの一致、既存15市の維持
{
  const kyTown = cities.filter(c => c.pref === '京都府' && baseName(c.name).endsWith('町')).length;
  const kyVill = cities.filter(c => c.pref === '京都府' && baseName(c.name).endsWith('村')).length;
  if (kyTown !== 10) err(`京都府の町が${kyTown}件です(10件のはず)`);
  if (kyVill !== 1) err(`京都府の村が${kyVill}件です(南山城村のみ1件のはず)`);
  if (cities.filter(c => c.pref === '京都府' && baseName(c.name).endsWith('市')).length !== 15)
    err('京都府の既存15市が壊れています');
  // 南山城村が唯一の村で is_village を持つか
  const nan = cities.find(c => c.pref === '京都府' && c.name === '南山城村');
  if (!nan) err('南山城村が見つかりません');
  else {
    const tg = Array.isArray(nan.tags) ? nan.tags : Object.keys(nan.tags).filter(k => nan.tags[k]);
    if (!tg.includes('is_village')) err('南山城村に is_village が付いていません');
  }
}
try {
  const gptKyoto = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-kyoto-source.json'), 'utf8'));
  if (gptKyoto.length !== 11) err(`京都府の提供データが${gptKyoto.length}件です(11件のはず)`);
  for (const g of gptKyoto) {
    const c = cities.find(x => x.pref === '京都府' && x.name === g.name);
    if (!c) { err(`京都府${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`京都府${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('京都府の提供データ原本と照合できません: ' + e.message); }

// 4l. 滋賀県6町: 町6・村0、提供データとの一致、既存13市の維持
{
  const sgTown = cities.filter(c => c.pref === '滋賀県' && baseName(c.name).endsWith('町')).length;
  const sgVill = cities.filter(c => c.pref === '滋賀県' && baseName(c.name).endsWith('村')).length;
  if (sgTown !== 6) err(`滋賀県の町が${sgTown}件です(6件のはず)`);
  if (sgVill !== 0) err(`滋賀県に村が${sgVill}件あります(滋賀県に村はありません)`);
  if (cities.filter(c => c.pref === '滋賀県' && baseName(c.name).endsWith('市')).length !== 13)
    err('滋賀県の既存13市が壊れています');
}
try {
  const gptShiga = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-shiga-source.json'), 'utf8'));
  if (gptShiga.length !== 6) err(`滋賀県の提供データが${gptShiga.length}件です(6件のはず)`);
  const SHIGA_ALIAS = { '日野町': '日野町（滋賀県）' };
  for (const g of gptShiga) {
    const c = cities.find(x => x.pref === '滋賀県' && x.name === (SHIGA_ALIAS[g.name] || g.name));
    if (!c) { err(`滋賀県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`滋賀県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('滋賀県の提供データ原本と照合できません: ' + e.message); }

// 4k. 三重県15町: 町15・村0、提供データとの一致、既存14市の維持、朝日町の同名対策
{
  const mieTown = cities.filter(c => c.pref === '三重県' && baseName(c.name).endsWith('町')).length;
  const mieVill = cities.filter(c => c.pref === '三重県' && baseName(c.name).endsWith('村')).length;
  if (mieTown !== 15) err(`三重県の町が${mieTown}件です(15件のはず)`);
  if (mieVill !== 0) err(`三重県に村が${mieVill}件あります(三重県に村はありません)`);
  if (cities.filter(c => c.pref === '三重県' && baseName(c.name).endsWith('市')).length !== 14)
    err('三重県の既存14市が壊れています');
  // 朝日町(富山・三重)がどちらも県名付きで区別されているか
  const asahi = cities.filter(c => baseName(c.name) === '朝日町');
  const bareAsahi = asahi.filter(c => c.name === '朝日町');
  if (bareAsahi.length) err(`朝日町が県名なしで残っています: ${bareAsahi.map(c => c.pref).join('・')}`);
}
try {
  const gptM = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-mie-source.json'), 'utf8'));
  if (gptM.length !== 15) err(`三重県の提供データが${gptM.length}件です(15件のはず)`);
  const MIE_ALIAS = { '朝日町': '朝日町（三重県）', '明和町': '明和町（三重県）' };
  for (const g of gptM) {
    const c = cities.find(x => x.pref === '三重県' && x.name === (MIE_ALIAS[g.name] || g.name));
    if (!c) { err(`三重県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`三重県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('三重県の提供データ原本と照合できません: ' + e.message); }

// 4j. 愛知県16町村: 町14・村2、提供データとの一致、既存38市の維持
{
  const aiTown = cities.filter(c => c.pref === '愛知県' && baseName(c.name).endsWith('町')).length;
  const aiVill = cities.filter(c => c.pref === '愛知県' && baseName(c.name).endsWith('村')).length;
  if (aiTown !== 14) err(`愛知県の町が${aiTown}件です(14件のはず)`);
  if (aiVill !== 2) err(`愛知県の村が${aiVill}件です(2件のはず)`);
  if (cities.filter(c => c.pref === '愛知県' && baseName(c.name).endsWith('市')).length !== 38)
    err('愛知県の既存38市が壊れています');
}
try {
  const gptA = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-aichi-source.json'), 'utf8'));
  if (gptA.length !== 16) err(`愛知県の提供データが${gptA.length}件です(16件のはず)`);
  const AICHI_ALIAS = { '美浜町': '美浜町（愛知県）' };
  for (const g of gptA) {
    const c = cities.find(x => x.pref === '愛知県' && x.name === (AICHI_ALIAS[g.name] || g.name));
    if (!c) { err(`愛知県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`愛知県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('愛知県の提供データ原本と照合できません: ' + e.message); }

// 4i. 静岡県12町: 件数(村は0)、提供データとの一致、既存23市の維持
{
  const szTown = cities.filter(c => c.pref === '静岡県' && baseName(c.name).endsWith('町')).length;
  const szVill = cities.filter(c => c.pref === '静岡県' && baseName(c.name).endsWith('村')).length;
  if (szTown !== 12) err(`静岡県の町が${szTown}件です(12件のはず)`);
  if (szVill !== 0) err(`静岡県に村が${szVill}件あります(静岡県に村はありません)`);
  if (cities.filter(c => c.pref === '静岡県' && baseName(c.name).endsWith('市')).length !== 23)
    err('静岡県の既存23市が壊れています');
  // 駿東郡清水町(静岡県)を、静岡市清水区や北海道清水町と取り違えていないか。同名対策で「清水町（静岡県）」に改名済み
  const shimizu = cities.filter(c => c.pref === '静岡県' && baseName(c.name) === '清水町');
  if (shimizu.length !== 1 || shimizu[0].name !== '清水町（静岡県）') err('清水町（静岡県）の登録が想定と異なります');
  else {
    const tg = Array.isArray(shimizu[0].tags) ? shimizu[0].tags : Object.keys(shimizu[0].tags).filter(k => shimizu[0].tags[k]);
    if (!tg.includes('suruga_area')) err('清水町(駿東郡)は駿河地方(suruga_area)のはずです');
    if (shimizu[0].stats.area_km2 !== 8.81) err('清水町(駿東郡)の面積が想定と異なります(静岡市清水区との取り違えの可能性)');
  }
}
try {
  const gptS = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-shizuoka-source.json'), 'utf8'));
  if (gptS.length !== 12) err(`静岡県の提供データが${gptS.length}件です(12件のはず)`);
  const SHIZUOKA_ALIAS = { '森町': '森町（静岡県）', '清水町': '清水町（静岡県）' };
  for (const g of gptS) {
    const c = cities.find(x => x.pref === '静岡県' && x.name === (SHIZUOKA_ALIAS[g.name] || g.name));
    if (!c) { err(`静岡県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`静岡県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('静岡県の提供データ原本と照合できません: ' + e.message); }

// 4g-2. 岐阜県(中濃・飛騨)9町村: 提供データとの一致
try {
  const gptG2 = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-gifu-chuno-hida-source.json'), 'utf8'));
  if (gptG2.length !== 9) err(`岐阜県中濃・飛騨の提供データが${gptG2.length}件です(9件のはず)`);
  for (const g of gptG2) {
    const c = cities.find(x => x.pref === '岐阜県' && x.name === g.name);
    if (!c) { err(`岐阜県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`岐阜県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('岐阜県中濃・飛騨の提供データ原本と照合できません: ' + e.message); }

// 4f. 長野県北信10町村: 提供データとの一致
// 同名対策で表示名を変えた自治体は、提供データ原本の名前 → 本番データの名前 で対応付ける
// (提供データ原本のファイルは正本として一切書き換えない)
const DISPLAY_NAME_ALIAS = { '高山村': '高山村（長野県）' };
try {
  const gptH = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-nagano-hokushin-source.json'), 'utf8'));
  if (gptH.length !== 10) err(`長野県北信の提供データが${gptH.length}件です(10件のはず)`);
  for (const g of gptH) {
    const targetName = DISPLAY_NAME_ALIAS[g.name] || g.name;
    const c = cities.find(x => x.pref === '長野県' && x.name === targetName);
    if (!c) { err(`長野県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`長野県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('長野県北信の提供データ原本と照合できません: ' + e.message); }

// 4e. 長野県中信15町村: 提供データとの一致
const CHUSHIN_NAME_ALIAS = { '池田町': '池田町（長野県）' };
try {
  const gptC = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-nagano-chushin-source.json'), 'utf8'));
  if (gptC.length !== 15) err(`長野県中信の提供データが${gptC.length}件です(15件のはず)`);
  for (const g of gptC) {
    const c = cities.find(x => x.pref === '長野県' && x.name === (CHUSHIN_NAME_ALIAS[g.name] || g.name));
    if (!c) { err(`長野県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`長野県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('長野県中信の提供データ原本と照合できません: ' + e.message); }

// 4d. 長野県南信22町村: 提供データとの一致
try {
  const gptS = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-nagano-nanshin-source.json'), 'utf8'));
  if (gptS.length !== 22) err(`長野県南信の提供データが${gptS.length}件です(22件のはず)`);
  const NAGANO_NANSHIN_ALIAS = { '高森町': '高森町（長野県）' };
  for (const g of gptS) {
    const c = cities.find(x => x.pref === '長野県' && x.name === (NAGANO_NANSHIN_ALIAS[g.name] || g.name));
    if (!c) { err(`長野県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`長野県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('長野県南信の提供データ原本と照合できません: ' + e.message); }

// 4c. 長野県東信11町村: 件数と4項目の提供データ一致、既存19市の維持
const naganoTV = cities.filter(c => c.pref === '長野県' && (baseName(c.name).endsWith('町') || baseName(c.name).endsWith('村')));
if (naganoTV.length !== 58) err(`長野県の町村が${naganoTV.length}件です(東信11+南信22+中信15+北信10=58件のはず)`);
if (cities.filter(c => c.pref === '長野県' && baseName(c.name).endsWith('市')).length !== 19)
  err('長野県の既存19市が壊れています');
try {
  const gptN = JSON.parse(fs.readFileSync(path.join(ROOT, 'staging/chatgpt-nagano-toshin-source.json'), 'utf8'));
  if (gptN.length !== 11) err(`長野県の提供データが${gptN.length}件です(11件のはず)`);
  const NAGANO_TOSHIN_ALIAS = { '川上村': '川上村（長野県）', '南牧村': '南牧村（長野県）' };
  for (const g of gptN) {
    const c = cities.find(x => x.pref === '長野県' && x.name === (NAGANO_TOSHIN_ALIAS[g.name] || g.name));
    if (!c) { err(`長野県${g.name}が本番データにありません`); continue; }
    for (const f of ['fact','food','dialect','mascot']) {
      if (c[f] !== g[f]) err(`長野県${g.name}: ${f}が提供データと一致しません`);
    }
  }
} catch (e) { warn('長野県の提供データ原本と照合できません: ' + e.message); }

// 4h. 同名対策: 基本名(「（都道府県名）」を除いた名前)が重複する自治体は、
//      すべて「（都道府県名）」付きで区別されていること
{
  const byBase = new Map();
  for (const c of cities) {
    const b = baseName(c.name);
    if (!byBase.has(b)) byBase.set(b, []);
    byBase.get(b).push(c);
  }
  for (const [b, list] of byBase) {
    if (list.length < 2) continue;
    const bare = list.filter(c => c.name === b);
    if (bare.length) err(`同名の「${b}」が${list.length}件あるのに、${bare.map(c => c.pref).join('・')}が県名なしです`);
  }
}

// 5. 新潟県の既存10町村が壊れていないか
const NIIGATA_TV = ['阿賀町','粟島浦村','出雲崎町','刈羽村','聖籠町','関川村','田上町','津南町','弥彦村','湯沢町'];
for (const t of NIIGATA_TV) if (!seen.has(`新潟県::${t}`)) err(`新潟県の既存町村が消えています: ${t}`);

// 6. 東京23区・市の基本チェック
const wards = cities.filter(c => c.pref === '東京都' && c.name.endsWith('区'));
if (wards.length !== 23) err(`東京23区が${wards.length}件です(23件のはず)`);
const cityCount = cities.filter(c => baseName(c.name).endsWith('市')).length;
if (cityCount < 700) err(`市の件数が異常に少ない: ${cityCount}`);

// 結果
console.log(`自治体総数: ${cities.length}`);
console.log(`エラー: ${errors.length}件 / 警告: ${warns.length}件`);
errors.forEach(m => console.log('  [ERROR]', m));
warns.slice(0, 20).forEach(m => console.log('  [WARN]', m));
if (warns.length > 20) console.log(`  ...ほか警告${warns.length - 20}件`);
process.exit(errors.length ? 1 : 0);
