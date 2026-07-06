const KEYS = ['pop1m','shinkansen','coastal','designated','festival','castle','snow_festival','worldheritage','snow','basin','airport','capital','noodle','mascot_famous',
  'nihonkai','taiheiyo','setonaikai','famous_mountain','big_river','subway','onsen','sake','fireworks','castle_town','port_town','rice_region',
  'kana_name','kansai_dialect','tohoku_dialect','ryukyu_dialect','is_town_village','is_tokyo_ward',
  'ruins','lakeside','shrine_temple','bakumatsu_port','fruit_famous','sumo_basho','jleague','npb',
  'former_capital','grid_streets','kokuho_building','historical_statue','twelve_castles','sengoku_warlord','tram','famous_garden',
  'volcano_view','car_town','private_railway','monorail','remote_island','mining_heritage','night_view','war_damage',
  'ferris_wheel','theme_park','zoo','aquarium','brand_beef','kintetsu','kanji_one_char',
  'chinatown','sand_dunes','imperial_university','famous_tower','famous_market','exotic_port','dome_stadium','tea_region',
  'gokaido_shukuba','pottery_famous','traditional_craft','horse_racing','literary_figure',
  'joetsu_region','chuetsu_region','kaetsu_region','joetsu_shinkansen_station','hokuriku_shinkansen_station',
  'is_village','shinano_river','agano_river','uono_river','pop_3digit',
  'borders_yamagata','borders_fukushima','borders_gunma','borders_nagano','borders_toyama',
  'todai_campus','waseda_campus','keio_campus','sophia_campus','meiji_campus','aoyama_campus','rikkyo_campus','chuo_campus','hosei_campus','tus_campus','imperial_palace','diet_building','ginza','tokyo_tower_ward','tocho','tokyo_dome_ward','sensoji','skytree_ward','toyosu_market','haneda_ward','shibuya_crossing','shibamata_taishakuten','kasai_park','broadway_nakano','koenji_area','shimokitazawa','jiyugaoka','shakujii_park','odakyu_line','keio_inokashira_line','tokyu_line','keikyu_line','seibu_line','tobu_line','keisei_line','tsukuba_express','rinkai_line','yurikamome','tokyo_monorail','toden_arakawa','nippori_toneri','tokyo_bay','tama_river','sumida_river','arakawa_river','edogawa_river','meguro_river','shakujii_river','borders_other_pref_tokyo','borders_kanagawa','borders_saitama','borders_chiba','ochanomizu_univ','gakushuin_univ','toyo_univ','komazawa_univ','seijo_univ','kokugakuin_univ','senshu_univ','jr_line','no_jr','yamanote_line','keihintohoku_line','chuo_rapid','chuo_sobu','joban_line','saikyo_line','tokyo_station','ikebukuro_station','ueno_station','shinagawa_station','akihabara_station','shimbashi_station','kitasenju_station','kinshicho_station','ogikubo_station','kamata_station','akabane_station','nippori_station','tsunagari_mayu_police','koiwa_or_kasairinkai_station','tora_san_home','tsubasa_hometown','tv_station_area','sazae_family','hachiko_area','yose_hall','sailor_moon_stage','tokiwa_so','godzilla_head',
  'monzen','bedtown','skijyou','geopark','nuclearpowerplant','monozukuri'];

const QUESTIONS = {
  pop1m:         {text:'人口は100万人以上?', icon:'👥'},
  shinkansen:    {text:'新幹線の駅がある?', icon:'🚄'},
  coastal:       {text:'海に面している?', icon:'🌊'},
  designated:    {text:'政令指定都市?', icon:'🏙️'},
  festival:      {text:'全国的に有名なお祭りがある?', icon:'🎆'},
  castle:        {text:'有名なお城がある?', icon:'🏯'},
  worldheritage: {text:'近くに世界遺産がある?', icon:'⛩️'},
  snow:          {text:'雪がたくさん降る地域?', icon:'❄️'},
  snow_festival: {text:'雪まつり・雪を使ったイベントで知られる?', icon:'❄️'},
  basin: {text:'盆地にある?', icon:'🏔️'},
  airport:       {text:'市内(近く)に空港がある?', icon:'✈️'},
  capital:       {text:'日本の首都?', icon:'🗼'},
  noodle:        {text:'名物グルメは麺料理?', icon:'🍜'},
  mascot_famous: {text:'全国区で有名なご当地キャラがいる?', icon:'🧸'},
  nihonkai:      {text:'日本海側にある?', icon:'🌅'},
  taiheiyo:      {text:'太平洋側にある?', icon:'🌊'},
  setonaikai:    {text:'瀬戸内海に面している?', icon:'⛵'},
  famous_mountain:{text:'有名な山がある?', icon:'⛰️'},
  big_river:     {text:'大きな川が流れている?', icon:'🏞️'},
  subway:        {text:'地下鉄が走っている?', icon:'🚇'},
  onsen:         {text:'温泉地として知られている?', icon:'♨️'},
  sake:          {text:'酒蔵・日本酒で知られている?', icon:'🍶'},
  fireworks:     {text:'花火大会で有名である?', icon:'🎇'},
  castle_town:   {text:'城下町だった?', icon:'🏯'},
  port_town:     {text:'港町として栄えた?', icon:'⚓'},
  rice_region:   {text:'米どころとして知られている?', icon:'🌾'},
  kana_name:     {text:'自治体名にひらがな・カタカナを含む?', icon:'🔤'},
  kansai_dialect:{text:'関西弁圏に含まれる?', icon:'🗣️'},
  tohoku_dialect:{text:'東北方言圏に含まれる?', icon:'🗣️'},
  ryukyu_dialect:{text:'琉球諸語・沖縄方言の地域?', icon:'🗣️'},
  is_town_village:{text:'市ではなく町または村である?', icon:'🏘️'},
  is_tokyo_ward: {text:'東京23区のどれかである?', icon:'🗼'},
  ruins:          {text:'遺跡・古墳で有名?', icon:'🏛️'},
  lakeside:       {text:'湖畔のマチですか?', icon:'🚣'},
  shrine_temple:  {text:'寺社仏閣が有名?', icon:'🛕'},
  bakumatsu_port: {text:'幕末の開港五港のひとつ?', icon:'🚢'},
  fruit_famous:   {text:'くだものが有名?', icon:'🍎'},
  sumo_basho:     {text:'大相撲の本場所が開催される?', icon:'🤼'},
  jleague:        {text:'Jリーグチームの本拠地がある?', icon:'⚽'},
  npb:            {text:'プロ野球チーム(NPB)の本拠地がある?', icon:'⚾'},
  former_capital:   {text:'過去に「都」が置かれたことがある?', icon:'👑'},
  grid_streets:     {text:'街の中心部は碁盤の目のよう?', icon:'🔲'},
  kokuho_building:  {text:'国宝がある、建っている?', icon:'📜'},
  historical_statue:{text:'歴史上の有名人物の銅像がありますか?', icon:'🗿'},
  twelve_castles:   {text:'現存十二天守の城はありますか?', icon:'🏰'},
  sengoku_warlord:  {text:'有名な戦国武将ゆかりの地ですか?', icon:'⚔️'},
  tram:             {text:'路面電車が走っていますか?', icon:'🚋'},
  famous_garden:    {text:'有名な庭園がありますか?', icon:'🌳'},
  volcano_view:     {text:'市街地から有名な火山が見えますか?', icon:'🌋'},
  car_town:         {text:'自動車に関係があるマチ?', icon:'🚗'},
  private_railway:  {text:'私鉄が走っている?', icon:'🚈'},
  monorail:         {text:'モノレールが走っている?', icon:'🚝'},
  remote_island:    {text:'もしかして離島に存在する?', icon:'🌴'},
  mining_heritage:  {text:'有名な鉱山・炭鉱跡がありますか?', icon:'⛏️'},
  night_view:       {text:'夜景が有名なマチですか?', icon:'🌃'},
  war_damage:       {text:'戦時中に非常に多くの被害を受けましたか?', icon:'🕯️'},
  ferris_wheel:     {text:'観覧車はありますか?', icon:'🎡'},
  theme_park:       {text:'テーマパークはありますか?', icon:'🎢'},
  zoo:              {text:'動物園はありますか?', icon:'🦁'},
  aquarium:         {text:'水族館はありますか?', icon:'🐠'},
  brand_beef:       {text:'有名なブランド牛肉はありますか?', icon:'🥩'},
  kintetsu:         {text:'近鉄が通っていますか?', icon:'🚃'},
  kanji_one_char:   {text:'マチの名前が漢字一文字ですか?', icon:'📛'},
  chinatown:            {text:'有名な中華街がありますか?', icon:'🏮'},
  sand_dunes:           {text:'有名な砂丘がありますか?', icon:'🏜️'},
  imperial_university:  {text:'旧帝国大学がありますか?', icon:'🎓'},
  famous_tower:         {text:'有名なタワーがありますか?', icon:'🗼'},
  famous_market:        {text:'有名な市場・朝市がありますか?', icon:'🐟'},
  exotic_port:          {text:'異国情緒の港町ですか?', icon:'🛳️'},
  dome_stadium:         {text:'ドーム球場がありますか?', icon:'🏟️'},
  tea_region:           {text:'茶どころとして有名ですか?', icon:'🍵'},
  gokaido_shukuba:      {text:'江戸の五街道の宿場町として知られている?', icon:'🚶'},
  pottery_famous:       {text:'焼き物・陶磁器で知られている?', icon:'🏺'},
  traditional_craft:    {text:'有名な伝統工芸で知られている?', icon:'🎨'},
  horse_racing:         {text:'競馬場がある?', icon:'🐎'},
  literary_figure:      {text:'有名な作家・文学者ゆかりの街?', icon:'✒️'},
  joetsu_region:              {text:'上越地方?', icon:'🗾'},
  chuetsu_region:              {text:'中越地方?', icon:'🗾'},
  kaetsu_region:               {text:'下越地方?', icon:'🗾'},
  joetsu_shinkansen_station:  {text:'上越新幹線の駅がある?', icon:'🚄'},
  hokuriku_shinkansen_station:{text:'北陸新幹線の駅がある?', icon:'🚄'},
  is_village:                  {text:'村?', icon:'🏘️'},
  shinano_river:               {text:'信濃川が流れる?', icon:'🏞️'},
  agano_river:                 {text:'阿賀野川が流れる?', icon:'🏞️'},
  uono_river:                  {text:'魚野川が流れる?', icon:'🏞️'},
  pop_3digit:                  {text:'人口が3ケタ?', icon:'👤'},
  borders_yamagata:            {text:'山形県と接している?', icon:'🗺️'},
  borders_fukushima:           {text:'福島県と接している?', icon:'🗺️'},
  borders_gunma:               {text:'群馬県と接している?', icon:'🗺️'},
  borders_nagano:              {text:'長野県と接している?', icon:'🗺️'},
  borders_toyama:              {text:'富山県と接している?', icon:'🗺️'},
  todai_campus: {text:'東京大学の有名キャンパスがある?', icon:'🎓'},
  waseda_campus: {text:'早稲田大学の主要キャンパスがある?', icon:'🎓'},
  keio_campus: {text:'慶應義塾大学の主要キャンパスがある?', icon:'🎓'},
  sophia_campus: {text:'上智大学の主要キャンパスがある?', icon:'🎓'},
  meiji_campus: {text:'明治大学のキャンパスがある?', icon:'🎓'},
  aoyama_campus: {text:'青山学院大学の主要キャンパスがある?', icon:'🎓'},
  rikkyo_campus: {text:'立教大学の主要キャンパスがある?', icon:'🎓'},
  chuo_campus: {text:'中央大学の主要キャンパスがある?', icon:'🎓'},
  hosei_campus: {text:'法政大学の主要キャンパスがある?', icon:'🎓'},
  tus_campus: {text:'東京理科大学の主要キャンパスがある?', icon:'🎓'},
  imperial_palace: {text:'皇居がある?', icon:'🏯'},
  diet_building: {text:'国会議事堂がある?', icon:'🏛️'},
  ginza: {text:'銀座がある?', icon:'💎'},
  tokyo_tower_ward: {text:'東京タワーがある?', icon:'🗼'},
  tocho: {text:'東京都庁がある?', icon:'🏢'},
  tokyo_dome_ward: {text:'東京ドームがある?', icon:'⚾'},
  sensoji: {text:'浅草寺がある?', icon:'⛩️'},
  skytree_ward: {text:'東京スカイツリーがある?', icon:'🗼'},
  toyosu_market: {text:'豊洲市場がある?', icon:'🐟'},
  haneda_ward: {text:'羽田空港がある?', icon:'✈️'},
  shibuya_crossing: {text:'渋谷スクランブル交差点がある?', icon:'🚦'},
  shibamata_taishakuten: {text:'柴又帝釈天がある?', icon:'⛩️'},
  kasai_park: {text:'葛西臨海公園がある?', icon:'🎡'},
  broadway_nakano: {text:'ブロードウェイがある?', icon:'🏬'},
  koenji_area: {text:'高円寺・阿佐ヶ谷・荻窪のどれかがある?', icon:'🎸'},
  shimokitazawa: {text:'下北沢がある?', icon:'🎭'},
  jiyugaoka: {text:'自由が丘がある?', icon:'🍰'},
  shakujii_park: {text:'石神井公園がある?', icon:'🌳'},
  odakyu_line: {text:'小田急線の駅がある?', icon:'🚃'},
  keio_inokashira_line: {text:'京王線または井の頭線の駅がある?', icon:'🚃'},
  tokyu_line: {text:'東急線の駅がある?', icon:'🚃'},
  keikyu_line: {text:'京急線の駅がある?', icon:'🚃'},
  seibu_line: {text:'西武線の駅がある?', icon:'🚃'},
  tobu_line: {text:'東武線の駅がある?', icon:'🚃'},
  keisei_line: {text:'京成線の駅がある?', icon:'🚃'},
  tsukuba_express: {text:'つくばエクスプレスの駅がある?', icon:'🚄'},
  rinkai_line: {text:'りんかい線の駅がある?', icon:'🚃'},
  yurikamome: {text:'ゆりかもめの駅がある?', icon:'🚝'},
  tokyo_monorail: {text:'東京モノレールの駅がある?', icon:'🚝'},
  toden_arakawa: {text:'都電荒川線の駅・停留場がある?', icon:'🚋'},
  nippori_toneri: {text:'日暮里・舎人ライナーの駅がある?', icon:'🚝'},
  tokyo_bay: {text:'東京湾に面している?', icon:'🌊'},
  tama_river: {text:'多摩川に接している?', icon:'🏞️'},
  sumida_river: {text:'隅田川に接している?', icon:'🏞️'},
  arakawa_river: {text:'荒川に接している?', icon:'🏞️'},
  edogawa_river: {text:'江戸川に接している?', icon:'🏞️'},
  meguro_river: {text:'目黒川が流れている?', icon:'🏞️'},
  shakujii_river: {text:'石神井川が流れている?', icon:'🏞️'},
  borders_other_pref_tokyo: {text:'他県と接している?', icon:'🗺️'},
  borders_kanagawa: {text:'神奈川県と接している?', icon:'🗺️'},
  borders_saitama: {text:'埼玉県と接している?', icon:'🗺️'},
  borders_chiba: {text:'千葉県と接している?', icon:'🗺️'},
  ochanomizu_univ: {text:'お茶の水女子大学がある?', icon:'🎓'},
  gakushuin_univ: {text:'学習院大学がある?', icon:'🎓'},
  toyo_univ: {text:'東洋大学の主要キャンパスがある?', icon:'🎓'},
  komazawa_univ: {text:'駒澤大学がある?', icon:'🎓'},
  seijo_univ: {text:'成城大学がある?', icon:'🎓'},
  kokugakuin_univ: {text:'國學院大學の主要キャンパスがある?', icon:'🎓'},
  senshu_univ: {text:'専修大学の都心キャンパスがある?', icon:'🎓'},
  jr_line: {text:'JRの駅がある?', icon:'🚉'},
  no_jr: {text:'JRの駅がない?', icon:'🚫'},
  yamanote_line: {text:'山手線の駅がある?', icon:'🚃'},
  keihintohoku_line: {text:'京浜東北線の駅がある?', icon:'🚃'},
  chuo_rapid: {text:'中央線快速の駅がある?', icon:'🚃'},
  chuo_sobu: {text:'中央・総武線各駅停車の駅がある?', icon:'🚃'},
  joban_line: {text:'常磐線系統の駅がある?', icon:'🚃'},
  saikyo_line: {text:'埼京線の駅がある?', icon:'🚃'},
  tokyo_station: {text:'東京駅がある?', icon:'🚉'},
  ikebukuro_station: {text:'池袋駅がある?', icon:'🚉'},
  ueno_station: {text:'上野駅がある?', icon:'🚉'},
  shinagawa_station: {text:'品川駅がある?', icon:'🚉'},
  akihabara_station: {text:'秋葉原駅がある?', icon:'🚉'},
  shimbashi_station: {text:'新橋駅がある?', icon:'🚉'},
  kitasenju_station: {text:'北千住駅がある?', icon:'🚉'},
  kinshicho_station: {text:'錦糸町駅がある?', icon:'🚉'},
  ogikubo_station: {text:'荻窪駅がある?', icon:'🚉'},
  kamata_station: {text:'蒲田駅がある?', icon:'🚉'},
  akabane_station: {text:'赤羽駅がある?', icon:'🚉'},
  nippori_station: {text:'日暮里駅がある?', icon:'🚉'},
  tsunagari_mayu_police: {text:'眉毛が繋がったおまわりさんがいる?', icon:'👮'},
  koiwa_or_kasairinkai_station: {text:'小岩駅・葛西臨海公園駅のどちらかがある?', icon:'🚉'},
  tora_san_home: {text:'フーテンの寅さんの実家がある?', icon:'🎬'},
  tsubasa_hometown: {text:'サッカー少年・大空翼くんゆかりのマチ?', icon:'⚽'},
  tv_station_area: {text:'テレビ局が立地する?', icon:'📺'},
  sazae_family: {text:'国民的4コマ漫画の一家が住んでいる?', icon:'🏠'},
  hachiko_area: {text:'駅前で主人を待ち続けた犬が有名?', icon:'🐕'},
  yose_hall: {text:'落語の定席寄席がある?', icon:'🎤'},
  sailor_moon_stage: {text:'月にかわっておしおきする戦士の舞台?', icon:'🌙'},
  tokiwa_so: {text:'漫画家たちの伝説的アパートがある?', icon:'✏️'},
  godzilla_head: {text:'巨大な怪獣の頭がビルから出ている?', icon:'🦖'},
  monzen:           {text:'有名な門前町ですか?', icon:'🙏'},
  bedtown:          {text:'ベッドタウンとして知られている?', icon:'🏠'},
  skijyou:          {text:'有名なスキー場がある?', icon:'⛷️'},
  geopark:          {text:'ジオパークに指定されている?', icon:'🌋'},
  nuclearpowerplant:{text:'原子力発電所がある?', icon:'☢️'},
  monozukuri:       {text:'ものづくり(製造業)で知られている?', icon:'🏭'},
};

function enrichComputedTags(city){
  const t = city.tags;
  // 自治体名にひらがな・カタカナが含まれるか(簡易判定)
  t.kana_name = /[\u3040-\u30FF]/.test(city.name);
  const kansaiPrefs = ['大阪府','京都府','兵庫県','奈良県','滋賀県','和歌山県'];
  const tohokuPrefs = ['青森県','岩手県','宮城県','秋田県','山形県','福島県'];
  const ryukyuPrefs = ['沖縄県'];
  t.kansai_dialect = kansaiPrefs.includes(city.pref);
  t.tohoku_dialect = tohokuPrefs.includes(city.pref);
  t.ryukyu_dialect = ryukyuPrefs.includes(city.pref);
  t.is_town_village = t.is_town_village ?? false;
  t.is_tokyo_ward = t.is_tokyo_ward ?? false;
  return city;
}

// stats(実数値の人口・面積)が入っている市について、人口/面積/人口密度の
// しきい値質問を動的に計算する。e-Statスクリプトでデータを追加していくと
// 該当する市が増え、後述のactivateStatsQuestions()が全市そろった時点で
// 自動的に質問として有効化する。
const STATS_THRESHOLDS = {
  pop500k:    c => c.stats?.population != null ? c.stats.population >= 500000 : undefined,
  pop200k:    c => c.stats?.population != null ? c.stats.population >= 200000 : undefined,
  pop100k:    c => c.stats?.population != null ? c.stats.population >= 100000 : undefined,
  popUnder50k:  c => c.stats?.population != null ? c.stats.population < 50000 : undefined,
  popUnder10k:  c => c.stats?.population != null ? c.stats.population < 10000 : undefined,
  densityHigh:  c => (c.stats?.population != null && c.stats?.area_km2) ? (c.stats.population / c.stats.area_km2) >= 1000 : undefined,
  areaLarge:    c => c.stats?.area_km2 != null ? c.stats.area_km2 >= 400 : undefined,
  areaSmall:    c => c.stats?.area_km2 != null ? c.stats.area_km2 < 100 : undefined,
};
const STATS_QUESTIONS = {
  pop500k:     {text:'人口は50万人以上?', icon:'👥'},
  pop200k:     {text:'人口は20万人以上?', icon:'👥'},
  pop100k:     {text:'人口は10万人以上?', icon:'👥'},
  popUnder50k: {text:'人口は5万人未満?', icon:'👤'},
  popUnder10k: {text:'人口は1万人未満?', icon:'👤'},
  densityHigh: {text:'人口密度が高い自治体?', icon:'🏢'},
  areaLarge:   {text:'面積がかなり広い自治体?', icon:'🗺️'},
  areaSmall:   {text:'面積がかなり小さい自治体?', icon:'🗺️'},
};

function enrichStatsTags(city){
  for(const key in STATS_THRESHOLDS){
    const v = STATS_THRESHOLDS[key](city);
    if(v !== undefined) city.tags[key] = v;
  }
  return city;
}

// 全市に同じstatsタグが揃って初めて、その質問を出題プールに追加する
// (一部の市にしかデータが無い状態で出すと判定が偏ってしまうため)
function activateStatsQuestions(){
  for(const key in STATS_QUESTIONS){
    const allHave = CITIES.every(c => typeof c.tags[key] === 'boolean');
    if(allHave && !KEYS.includes(key)){
      KEYS.push(key);
      QUESTIONS[key] = STATS_QUESTIONS[key];
    }
  }
}

let CITIES = [];
let candidates = [];
let asked = [];
let questionCount = 0;
let history = []; // 「戻る」ボタン用の履歴(質問を出す直前の状態を保存)
const MAX_Q = 18;

let currentMode = 'all';

const MODES = {
  all: {
    label: '全国版',
    description: '全国の対応自治体から当てます'
  },
  niigata: {
    label: '新潟県版',
    description: '新潟県の市町村だけで当てます'
  },
  tokyo: {
    label: '東京都版',
    description: '東京23区・市町村だけで当てます'
  }
};

function getModeCities(mode){
  if(mode === 'niigata'){
    return CITIES.filter(c => c.pref === '新潟県');
  }
  if(mode === 'tokyo'){
    // 「東京」(都全体の集計エントリ)は23区・市町村の個別データと重複するため東京都版では除外する
    return CITIES.filter(c => c.pref === '東京都' && c.name !== '東京');
  }
  return [...CITIES];
}
const stage = document.getElementById('stage');
const stampsEl = document.getElementById('stamps');
const footEl = document.getElementById('foot');

function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function renderStamps(){
  stampsEl.innerHTML = '';
  for(let i=0;i<MAX_Q;i++){
    const s = document.createElement('div');
    s.className = 'stamp' + (i < questionCount ? ' filled' : '');
    s.textContent = '⛩';
    stampsEl.appendChild(s);
  }
}

// モード限定タグ:ここに書いたキーは、指定したモードのときだけ出題される。
// 例えば新潟県版だけで聞きたい質問があれば、'niigata'の配列にキーを追加する。
const MODE_ONLY_KEYS = {
  niigata: [
    'joetsu_region','chuetsu_region','kaetsu_region',
    'joetsu_shinkansen_station','hokuriku_shinkansen_station',
    'is_village','shinano_river','agano_river','uono_river','pop_3digit',
    'borders_yamagata','borders_fukushima','borders_gunma','borders_nagano','borders_toyama'
  ],
  tokyo: [
    'todai_campus',
    'waseda_campus',
    'keio_campus',
    'sophia_campus',
    'meiji_campus',
    'aoyama_campus',
    'rikkyo_campus',
    'chuo_campus',
    'hosei_campus',
    'tus_campus',
    'imperial_palace',
    'diet_building',
    'ginza',
    'tokyo_tower_ward',
    'tocho',
    'tokyo_dome_ward',
    'sensoji',
    'skytree_ward',
    'toyosu_market',
    'haneda_ward',
    'shibuya_crossing',
    'shibamata_taishakuten',
    'kasai_park',
    'broadway_nakano',
    'koenji_area',
    'shimokitazawa',
    'jiyugaoka',
    'shakujii_park',
    'odakyu_line',
    'keio_inokashira_line',
    'tokyu_line',
    'keikyu_line',
    'seibu_line',
    'tobu_line',
    'keisei_line',
    'tsukuba_express',
    'rinkai_line',
    'yurikamome',
    'tokyo_monorail',
    'toden_arakawa',
    'nippori_toneri',
    'tokyo_bay',
    'tama_river',
    'sumida_river',
    'arakawa_river',
    'edogawa_river',
    'meguro_river',
    'shakujii_river',
    'borders_other_pref_tokyo',
    'borders_kanagawa',
    'borders_saitama',
    'borders_chiba',
    'ochanomizu_univ',
    'gakushuin_univ',
    'toyo_univ',
    'komazawa_univ',
    'seijo_univ',
    'kokugakuin_univ',
    'senshu_univ',
    'jr_line',
    'no_jr',
    'yamanote_line',
    'keihintohoku_line',
    'chuo_rapid',
    'chuo_sobu',
    'joban_line',
    'saikyo_line',
    'tokyo_station',
    'ikebukuro_station',
    'ueno_station',
    'shinagawa_station',
    'akihabara_station',
    'shimbashi_station',
    'kitasenju_station',
    'kinshicho_station',
    'ogikubo_station',
    'kamata_station',
    'akabane_station',
    'nippori_station',
    'tsunagari_mayu_police',
    'koiwa_or_kasairinkai_station',
    'tora_san_home',
    'tsubasa_hometown',
    'tv_station_area',
    'sazae_family',
    'hachiko_area',
    'yose_hall',
    'sailor_moon_stage',
    'tokiwa_so',
    'godzilla_head'
  ]
};

function activeKeysForMode(mode){
  return KEYS.filter(k => {
    for(const m in MODE_ONLY_KEYS){
      if(MODE_ONLY_KEYS[m].includes(k)) return mode === m;
    }
    return true;
  });
}

// 1手先の質問だけで残り候補を評価する(2手先読みの内側で使う軽量版)
function bestSplitDiff(pool, excludeKeys){
  let best = Infinity;
  const keysForThisMode = activeKeysForMode(currentMode);
  for(const k of keysForThisMode){
    if(excludeKeys.includes(k)) continue;
    const yes = pool.filter(c=>c.tags[k]).length;
    const no = pool.length - yes;
    if(yes===0 || no===0) continue;
    const worst = Math.max(yes, no); // この質問をした後、最悪どちらの枝に残るか
    if(worst < best) best = worst;
  }
  return best === Infinity ? pool.length : best; // 効く質問が無ければ絞り込めない
}

// 2手先まで見て、最悪の場合に残る候補数が一番少ない質問を選ぶ(ミニマックス方式の先読み)。
// 「はい/いいえの件数差が最小」という1手先の指標だけでは、実は数学的にシャノンエントロピー
// による並び順と同じになってしまうため、本当に精度を上げるには先読みが必要になる。
function entropyPick(){
  const unused = activeKeysForMode(currentMode).filter(k => !asked.includes(k));
  const candidateQuestions = [];

  for(const k of unused){
    const yes = candidates.filter(c=>c.tags[k]).length;
    const no = candidates.length - yes;
    if(yes===0 || no===0) continue; // 情報量ゼロの質問は除外
    candidateQuestions.push(k);
  }
  if(candidateQuestions.length === 0) return unused[0] || null;

  // 候補が多いときは計算量を抑えるため、まず1手先の診断で上位グループに絞り込む
  const prelim = candidateQuestions.map(k=>{
    const yes = candidates.filter(c=>c.tags[k]).length;
    const no = candidates.length - yes;
    return { k, diff: Math.abs(yes - no) };
  }).sort((a,b)=> a.diff - b.diff);
  const shortlist = prelim.slice(0, Math.min(12, prelim.length)).map(s=>s.k);

  const scored = shortlist.map(k=>{
    const yesGroup = candidates.filter(c=>c.tags[k]);
    const noGroup = candidates.filter(c=>!c.tags[k]);
    const usedAfter = [...asked, k];
    // 2手目でそれぞれの枝を最も良く絞り込めた場合の「最悪残存数」を見る
    const worstYes = bestSplitDiff(yesGroup, usedAfter);
    const worstNo = bestSplitDiff(noGroup, usedAfter);
    return { k, minimax: Math.max(worstYes, worstNo) };
  });

  scored.sort((a, b) => a.minimax - b.minimax);
  const best = scored[0].minimax;
  // 僅差の質問はまとめてプールし、ランダムに選ぶ(毎回同じ質問順に固定されないようにする)
  const pool = scored.filter(s => s.minimax <= best + 1).map(s => s.k);

  return shuffle(pool)[0];
}

// おらマチ オリジナルマスコット「おらっち」(角/触角なし・まんまる目・ω口)
function mascotSVG(mood){
  const eyes = {
    normal: `<circle class="blink" cx="46" cy="62" r="4.5" fill="#2A2620"/><circle class="blink" cx="82" cy="62" r="4.5" fill="#2A2620"/><circle cx="44.3" cy="60.2" r="1.3" fill="#fff"/><circle cx="80.3" cy="60.2" r="1.3" fill="#fff"/>`,
    think:  `<ellipse cx="46" cy="62" rx="4" ry="3" fill="#2A2620"/><ellipse cx="82" cy="62" rx="4" ry="3" fill="#2A2620"/><circle cx="44.7" cy="60.7" r="1.1" fill="#fff"/><circle cx="80.7" cy="60.7" r="1.1" fill="#fff"/>`,
    happy:  `<path d="M40 62 Q46 57 52 62" stroke="#2A2620" stroke-width="2.6" fill="none" stroke-linecap="round"/><circle cx="82" cy="61" r="4.8" fill="#2A2620"/><circle cx="80.3" cy="59" r="1.4" fill="#fff"/>`,
    sad:    `<path d="M54 47 Q46 49 36 54" stroke="#2A2620" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M74 47 Q82 49 92 54" stroke="#2A2620" stroke-width="2.2" fill="none" stroke-linecap="round"/><circle cx="46" cy="64" r="4.3" fill="#2A2620"/><circle cx="82" cy="64" r="4.3" fill="#2A2620"/><circle cx="44.7" cy="62.5" r="1.15" fill="#fff"/><circle cx="80.7" cy="62.5" r="1.15" fill="#fff"/>`
  };
  // ω(オメガ)型の口・やや上寄りに配置(moodごとに大きさだけ変える)
  const mouth = {
    normal: `<path d="M56 73 Q63 79 70 73" stroke="#2A2620" stroke-width="2.8" fill="none" stroke-linecap="round"/>`,
    think:  `<path d="M58 74 Q61 71 64 74 Q67 71 70 74" stroke="#2A2620" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    happy:  `<path d="M50 71 Q64 77 78 71" stroke="#FF6F91" stroke-width="3.6" fill="none" stroke-linecap="round"/>`,
    sad:    `<path d="M54 79 Q58 83 64 79 Q70 83 74 79" stroke="#2A2620" stroke-width="2.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
  };
  return `
  <svg class="mascot" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="64" cy="116" rx="30" ry="6" fill="#263A5C" opacity="0.12"/>
    <!-- tail -->
    <ellipse cx="96" cy="86" rx="14" ry="9" fill="#F4C979" transform="rotate(28 96 86)"/>
    <!-- body -->
    <ellipse cx="64" cy="88" rx="36" ry="28" fill="#F4C979"/>
    <ellipse cx="64" cy="94" rx="21" ry="16" fill="#FFF6E0"/>
    <!-- head -->
    <circle cx="64" cy="54" r="36" fill="#F4C979"/>
    <!-- round ears (no antennae) -->
    <circle cx="30" cy="38" r="11" fill="#F4C979"/>
    <circle cx="98" cy="38" r="11" fill="#F4C979"/>
    <circle cx="30" cy="38" r="5.4" fill="#C1432E" opacity="0.45"/>
    <circle cx="98" cy="38" r="5.4" fill="#C1432E" opacity="0.45"/>
    <!-- cheeks -->
    <circle cx="34" cy="66" r="7" fill="#C1432E" opacity="0.3"/>
    <circle cx="94" cy="66" r="7" fill="#C1432E" opacity="0.3"/>
    <!-- whisker marks -->
    <path d="M16 60 L32 62" stroke="#C98A2E" stroke-width="2" stroke-linecap="round" opacity="0.55"/>
    <path d="M16 68 L32 68" stroke="#C98A2E" stroke-width="2" stroke-linecap="round" opacity="0.55"/>
    <path d="M112 60 L96 62" stroke="#C98A2E" stroke-width="2" stroke-linecap="round" opacity="0.55"/>
    <path d="M112 68 L96 68" stroke="#C98A2E" stroke-width="2" stroke-linecap="round" opacity="0.55"/>
    <!-- face -->
    <g>${eyes[mood]}</g>
    <g>${mouth[mood]}</g>
    <!-- nose (口と重ならないよう少し上に配置) -->
    <ellipse cx="64" cy="68" rx="2.4" ry="1.8" fill="#2A2620"/>
    <!-- map-pin badge on chest -->
    <path d="M64 90 C60 90 57 93 57 97 C57 102 64 108 64 108 C64 108 71 102 71 97 C71 93 68 90 64 90 Z" fill="#263A5C"/>
    <circle cx="64" cy="96.5" r="2.6" fill="#F4C979"/>
  </svg>`;
}

function renderOpening(){
  stampsEl.innerHTML = '';

  const niigataCount = CITIES.filter(c => c.pref === '新潟県').length;
  const tokyoCount = CITIES.filter(c => c.pref === '東京都' && c.name !== '東京').length;

  stage.innerHTML = `
    <div class="mascot-wrap"><div class="bob pop">${mascotSVG('normal')}</div></div>
    <div class="bubble"><span class="icon">🗾</span>どのモードであそぶ？</div>

    <div class="mode-select">
      <button class="mode-btn" onclick="startMode('all')">
        <span class="mode-title">全国版</span>
        <span class="mode-desc">対応中の全国自治体から当てます</span>
      </button>

      <button class="mode-btn mode-niigata" onclick="startMode('niigata')">
        <span class="mode-title">新潟県版</span>
        <span class="mode-desc">新潟県の市町村だけで当てます</span>
        <span class="mode-count">現在 ${niigataCount} 自治体</span>
      </button>

      <button class="mode-btn mode-tokyo" onclick="startMode('tokyo')">
        <span class="mode-title">東京都版</span>
        <span class="mode-desc">東京23区・市町村だけで当てます</span>
        <span class="mode-count">現在 ${tokyoCount} 自治体</span>
      </button>
    </div>
  `;

  footEl.textContent = `対応エリア ${CITIES.length}自治体 ・ 新潟県 ${niigataCount}自治体 ・ 東京都 ${tokyoCount}自治体`;
}

function startMode(mode){
  currentMode = mode;
  candidates = getModeCities(mode);
  asked = [];
  questionCount = 0;
  history = [];

  if(candidates.length === 0){
    stage.innerHTML = `
      <div class="mascot-wrap"><div class="shake">${mascotSVG('sad')}</div></div>
      <div class="bubble"><span class="icon">🙏</span>このモードのデータがまだありません</div>
      <button class="again" onclick="renderOpening()">モード選択へ戻る</button>
    `;
    return;
  }

  footEl.textContent = `${MODES[mode].label} ・ 対応 ${candidates.length}自治体`;
  renderQuestion();
}
function renderQuestion(){
  renderStamps();
  const key = entropyPick();

  if(!key || questionCount >= MAX_Q || candidates.length <= 1){
    return renderGuess();
  }

  // このタイミング(まだこの質問を聞く前)の状態を履歴に保存する
  history.push({
    candidates: [...candidates],
    asked: [...asked],
    questionCount: questionCount
  });

  asked.push(key);
  questionCount++;
  const q = QUESTIONS[key];

  const backBtn = history.length > 1
    ? `<button class="btn-back" onclick="goBack()">← 前の質問に戻る</button>`
    : '';

  stage.innerHTML = `
    <div class="mascot-wrap"><div class="bob pop">${mascotSVG('think')}</div></div>
    <div class="bubble"><span class="icon">${q.icon}</span>${q.text}</div>
    <div class="count-line">残り候補 <b>${candidates.length}</b> 自治体 ・ 質問 ${questionCount}問目</div>
    <div class="choices">
      <button class="btn btn-yes" onclick="answer('${key}', true)">はい</button>
      <button class="btn btn-no" onclick="answer('${key}', false)">いいえ</button>
      <button class="btn btn-unknown" onclick="answer('${key}', null)">わからない・スキップ</button>
    </div>
    ${backBtn}
  `;
}

function goBack(){
  if(history.length === 0) return;
  history.pop(); // 今表示していた質問の分を捨てる
  const prev = history.pop(); // その前(=戻りたい状態)を取り出す
  if(!prev) return;
  candidates = prev.candidates;
  asked = prev.asked;
  questionCount = prev.questionCount;
  renderQuestion();
}

function answer(key, val){
  if(val !== null){
    const narrowed = candidates.filter(c => c.tags[key] === val);
    if(narrowed.length > 0) candidates = narrowed;
  }
  renderQuestion();
}

function renderGuess(){
  const guess = candidates[0] || CITIES[0];
  stage.innerHTML = `
    <div class="mascot-wrap"><div class="pop">${mascotSVG('normal')}</div></div>
    <div class="bubble"><span class="icon">💭</span>もしかして、この街では?</div>
    <div class="result-name">${guess.name}</div>
    <div class="result-pref">${guess.pref}</div>
    <div class="choices">
      <button class="btn btn-yes" onclick="correct(true)">当たり!</button>
      <button class="btn btn-no" onclick="correct(false)">ちがう</button>
    </div>
  `;
}

// 診断カード用: 既存のtagsだけから「雪国度」「都市規模」「ご当地色」を1〜5段階で算出
// (cities.jsonに新しいフィールドを追加せず、既存タグの組み合わせだけで計算する)
function calcStars(city){
  const t = city.tags;
  const cap = n => Math.max(1, Math.min(5, n));

  // 雪国度: snowタグを最重視。日本海側だけでは上げすぎない
  let snow = 1;
  if (t.snow) snow += 3;
  if (t.snow_festival) snow += 1;
  if (!t.snow && t.nihonkai) snow += 1; // 日本海側のみの場合はわずかな加点にとどめる
  snow = cap(snow);

  // 都市規模(旧:都会度): 人口100万人・政令市・地下鉄・新幹線・プロスポーツで判断
  let urban = 1;
  if (t.pop1m) urban += 2;
  if (t.designated) urban += 1;
  if (t.subway) urban += 1;
  if (t.shinkansen) urban += 1;
  if (t.jleague || t.npb) urban += 1;
  urban = cap(urban);

  // ご当地色(旧:ローカル色): 祭り・城・世界遺産・温泉・酒・米・麺・花火・港町で判断
  const localCount = [t.festival, t.castle, t.worldheritage, t.onsen, t.sake, t.rice_region, t.noodle, t.fireworks, t.port_town]
    .filter(Boolean).length;
  let local = cap(1 + Math.floor(localCount / 2));

  // 個別の星評価上書き(cities.jsonのstarOverridesに数値があれば、自動計算より優先する)
  const ov = city.starOverrides || {};
  if (ov.snow != null) snow = ov.snow;
  if (ov.urban != null) urban = ov.urban;
  if (ov.local != null) local = ov.local;

  return { snow, urban, local };
}

function starString(n){
  return '★'.repeat(n) + '☆'.repeat(5 - n);
}

function buildShareText(city){
  return `おらマチに${questionCount}問で【${city.name}】を当てられた！地元、けっこうバレる。 #おらマチ`;
}

function shareToX(city){
  const text = buildShareText(city);
  const pageUrl = location.href.split('#')[0];
  const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(pageUrl)}`;
  window.open(intent, '_blank', 'noopener,noreferrer');
}

// 「ちがう」を押した後の訂正フォーム用データ・関数
const PREFECTURES = [
  '北海道','青森県','岩手県','宮城県','秋田県','山形県','福島県','茨城県','栃木県','群馬県',
  '埼玉県','千葉県','東京都','神奈川県','新潟県','富山県','石川県','福井県','山梨県','長野県',
  '岐阜県','静岡県','愛知県','三重県','滋賀県','京都府','大阪府','兵庫県','奈良県','和歌山県',
  '鳥取県','島根県','岡山県','広島県','山口県','徳島県','香川県','愛媛県','高知県','福岡県',
  '佐賀県','長崎県','熊本県','大分県','宮崎県','鹿児島県','沖縄県'
];
const CORRECTIONS_STORAGE_KEY = 'oramachi_corrections';

// Googleスプレッドシートに訂正データを送るためのエンドポイント。
// apps-script-corrections.gs をデプロイして得られるURLをここに貼ってください。
// 空文字のままなら、送信処理はスキップされ、localStorageへの保存のみ行われます。
const CORRECTIONS_ENDPOINT_URL = 'https://script.google.com/macros/s/AKfycby129enXYZnzrRa0fLvPFWpWDaLKO-m6wxlnbLSIJjIH5MLMbqjOwHUaiewIrZ3QuBl/exec';

function sendCorrectionToSheet(entry){
  if(!CORRECTIONS_ENDPOINT_URL) return; // 未設定なら何もしない(エラーにはしない)
  try{
    // Google Apps ScriptのWebアプリはCORSのプリフライトに対応していないため、
    // Content-Typeをtext/plainにして「単純リクエスト」として送る(プリフライトを発生させない)。
    // レスポンスは読めない(no-cors)が、送信自体はサーバー側に届く。
    fetch(CORRECTIONS_ENDPOINT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(entry)
    }).catch(err => {
      console.warn('おらマチ: スプレッドシートへの送信に失敗しました(オフライン等の可能性)', err);
    });
  }catch(e){
    console.warn('おらマチ: スプレッドシート送信処理でエラー', e);
  }
}

function renderCorrectionForm(){
  const prefOptions = PREFECTURES.map(p => `<option value="${p}">${p}</option>`).join('');
  return `
    <div class="correction-form" id="correctionForm">
      <div class="correction-label">ほんとうのマチを教えてください</div>
      <select id="correctionPref" class="correction-select">
        <option value="">都道府県を選ぶ</option>
        ${prefOptions}
      </select>
      <input id="correctionCity" class="correction-input" type="text" placeholder="市区町村名(例: 札幌市)" maxlength="30">
      <div class="correction-error" id="correctionError"></div>
      <button class="btn-teach" onclick="submitCorrection()">おらっちに教える</button>
    </div>
  `;
}

function submitCorrection(){
  const prefEl = document.getElementById('correctionPref');
  const cityEl = document.getElementById('correctionCity');
  const errEl = document.getElementById('correctionError');
  const pref = prefEl ? prefEl.value : '';
  const city = cityEl ? cityEl.value.trim() : '';

  if(!pref || !city){
    if(errEl) errEl.textContent = '都道府県と市区町村名の両方を入力してください';
    return;
  }

  const guess = candidates[0] || CITIES[0];
  const entry = {
    guessedName: guess ? guess.name : null,
    guessedPref: guess ? guess.pref : null,
    correctPref: pref,
    correctCity: city,
    questionCount,
    timestamp: new Date().toISOString()
  };

  try{
    const existing = JSON.parse(localStorage.getItem(CORRECTIONS_STORAGE_KEY) || '[]');
    existing.push(entry);
    localStorage.setItem(CORRECTIONS_STORAGE_KEY, JSON.stringify(existing));
  }catch(e){
    // localStorageが使えない環境でもゲーム自体は継続できるようにしておく
    console.warn('おらマチ: localStorageへの保存に失敗しました', e);
  }

  sendCorrectionToSheet(entry);

  renderThanks();
}

function renderThanks(){
  stage.innerHTML = `
    <div class="mascot-wrap"><div class="pop">${mascotSVG('happy')}</div></div>
    <div class="bubble"><span class="icon">🙏</span>ありがとう！おらっちが修行します</div>
    <button class="again" onclick="restart()">もう一度あそぶ</button>
  `;
}

function correct(isRight){
  const guess = candidates[0] || CITIES[0];
  if(isRight){
    const stars = calcStars(guess);
    stage.innerHTML = `
      <div class="share-card" id="shareCard">
        <div class="share-card-head">
          <span class="share-eyebrow">おらマチ診断</span>
          <div class="share-mascot pop">${mascotSVG('happy')}</div>
        </div>
        <div class="hanko">あたり</div>
        <div class="result-name">${guess.name}</div>
        <div class="result-pref">${guess.pref}</div>
        <div class="result-line">おらっちが <b>${questionCount}問</b> で当てました!</div>
        <div class="fact">${guess.fact}</div>
        <div class="stars-block">
          <div class="star-row"><span class="star-label">雪国度</span><span class="star-value">${starString(stars.snow)}</span></div>
          <div class="star-row"><span class="star-label">都市規模</span><span class="star-value">${starString(stars.urban)}</span></div>
          <div class="star-row"><span class="star-label">ご当地色</span><span class="star-value">${starString(stars.local)}</span></div>
        </div>
        <div class="info-grid">
          <div class="info-chip"><div class="label">名物グルメ</div><div class="value">${guess.food}</div></div>
          <div class="info-chip"><div class="label">方言</div><div class="value">${guess.dialect}</div></div>
          <div class="info-chip"><div class="label">ご当地キャラ</div><div class="value">${guess.mascot}</div></div>
        </div>
      </div>
      <button class="share-btn" onclick="shareToX(candidates[0] || CITIES[0])">
        <svg class="x-icon" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        結果をシェア
      </button>
      <button class="again" onclick="restart()">もう一度あそぶ</button>
    `;
  } else {
    stage.innerHTML = `
      <div class="mascot-wrap"><div class="shake">${mascotSVG('sad')}</div></div>
      <div class="bubble"><span class="icon">🙏</span>まだまだ修行が足りないようです…</div>
      <div class="fact">現在のデータ範囲(${CITIES.length}市)では絞り込みきれませんでした。データが増えるともっと当たりやすくなります。</div>
      ${renderCorrectionForm()}
      <button class="again" onclick="restart()">もう一度あそぶ</button>
    `;
  }
}

function restart(){
  startMode(currentMode);
}
async function boot(){
  try{
    const res = await fetch('./cities.json', {cache:'no-store'});
    if(!res.ok) throw new Error('HTTP ' + res.status);
    CITIES = await res.json();
    if(!Array.isArray(CITIES) || CITIES.length === 0) throw new Error('empty data');
    CITIES.forEach(enrichComputedTags);
    CITIES.forEach(enrichStatsTags);
    activateStatsQuestions();
    footEl.textContent = `対応エリア ${CITIES.length}市 ・ データはcities.jsonから読み込み`;
    renderOpening();  }catch(e){
    stage.innerHTML = `
      <div class="mascot-wrap">${mascotSVG('sad')}</div>
      <div class="error-text">
        cities.json を読み込めませんでした。<br>
        index.html と cities.json を同じフォルダに置き、簡易サーバー経由で開いてください。<br><br>
        例: このフォルダで <code>python3 -m http.server</code> を実行し、<br>
        ブラウザで <code>http://localhost:8000</code> を開く<br><br>
        (file:// で直接開くとブラウザの制限でJSONを読み込めません)
      </div>`;
    footEl.textContent = 'データ読み込みエラー';
  }
}

boot();

/* ---------- アプリ追加(PWAインストール)ボタン ---------- */
(function setupInstallButton(){
  const installBtn = document.getElementById('installBtn');
  const installTip = document.getElementById('installTip');
  const installTipClose = document.getElementById('installTipClose');
  if(!installBtn) return;

  // すでにホーム画面から起動している(スタンドアロン表示)場合はボタンを出さない
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if(isStandalone) return;

  const isIOS = /iphone|ipad|ipod/i.test(window.navigator.userAgent);
  let deferredPrompt = null;

  // Android/Chrome系: ブラウザ標準のインストール可否イベントを待つ
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'flex';
  });

  // iOSはbeforeinstallpromptが無いため、常にボタンを表示して手順を案内する
  if(isIOS){
    installBtn.style.display = 'flex';
  }

  installBtn.addEventListener('click', async () => {
    if(deferredPrompt){
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      installBtn.style.display = 'none';
    } else if(isIOS){
      if(installTip) installTip.style.display = 'block';
    }
  });

  if(installTipClose){
    installTipClose.addEventListener('click', () => {
      installTip.style.display = 'none';
    });
  }

  window.addEventListener('appinstalled', () => {
    installBtn.style.display = 'none';
  });
})();
