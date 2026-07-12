const KEYS = ['pop1m','shinkansen','coastal','designated','festival','castle','snow_festival','worldheritage','snow','basin','airport','capital','noodle','mascot_famous',
  'nihonkai','taiheiyo','setonaikai','famous_mountain','big_river','subway','onsen','sake','fireworks','castle_town','port_town','rice_region',
  'kana_name','kansai_dialect','tohoku_dialect','ryukyu_dialect','is_town_village','is_tokyo_ward',
  'ruins','lakeside','shrine_temple','bakumatsu_port','fruit_famous','sumo_basho','jleague','npb',
  'former_capital','grid_streets','kokuho_building','historical_statue','twelve_castles','sengoku_warlord','tram','famous_garden',
  'volcano_view','car_town','private_railway','monorail','remote_island','mining_heritage','night_view','war_damage',
  'ferris_wheel','theme_park','zoo','aquarium','brand_beef','kintetsu','kanji_one_char',
  'chinatown','sand_dunes','imperial_university','famous_tower','famous_market','exotic_port','dome_stadium','tea_region',
  'gokaido_shukuba','pottery_famous','traditional_craft','horse_racing','literary_figure','kitanotakeshi','musashino_line','ekimei_chigau',
  'prefectural_capital','pop_500k','pop_300k','pop_under_100k','borders_other_pref','formed_after_2000',
  'national_university','expressway_junction','hiragana_name','direction_in_name','old_province_name',
  'public_racing_venue','national_government_park','film_city','shinsengumi','shonan_area','white_mirin_origin',
  'joetsu_region','chuetsu_region','kaetsu_region','joetsu_shinkansen_station','hokuriku_shinkansen_station',
  'hokkaido_shinkansen_station','tohoku_shinkansen_station','tokaido_shinkansen_station','sanyo_shinkansen_station','kyushu_shinkansen_station','nishikyushu_shinkansen_station',
  'yamagata_shinkansen_station','akita_shinkansen_station',
  'is_village','shinano_river','agano_river','uono_river','pop_3digit',
  'borders_yamagata','borders_fukushima','borders_gunma','borders_nagano','borders_toyama',
  'todai_campus','waseda_campus','keio_campus','sophia_campus','meiji_campus','aoyama_campus','rikkyo_campus','chuo_campus','hosei_campus','tus_campus','imperial_palace','diet_building','ginza','tokyo_tower_ward','tocho','tokyo_dome_ward','sensoji','skytree_ward','toyosu_market','haneda_ward','shibuya_crossing','shibamata_taishakuten','kasai_park','broadway_nakano','koenji_area','shimokitazawa','jiyugaoka','shakujii_park','odakyu_line','keio_inokashira_line','tokyu_line','keikyu_line','seibu_line','tobu_line','keisei_line','tsukuba_express','rinkai_line','yurikamome','tokyo_monorail','toden_arakawa','nippori_toneri','tokyo_bay','tama_river','sumida_river','arakawa_river','edogawa_river','meguro_river','shakujii_river','borders_other_pref_tokyo','borders_kanagawa','borders_saitama','borders_chiba','ochanomizu_univ','gakushuin_univ','toyo_univ','komazawa_univ','seijo_univ','kokugakuin_univ','senshu_univ','jr_line','no_jr','yamanote_line','keihintohoku_line','chuo_rapid','chuo_sobu','joban_line','saikyo_line','tokyo_station','ikebukuro_station','ueno_station','shinagawa_station','akihabara_station','shimbashi_station','kitasenju_station','kinshicho_station','ogikubo_station','kamata_station','akabane_station','nippori_station','tsunagari_mayu_police','koiwa_or_kasairinkai_station','tora_san_home','tsubasa_hometown','tv_station_area','sazae_family','hachiko_area','yose_hall','sailor_moon_stage','tokiwa_so','godzilla_head','rakugo_stage','sanma_famous',
  'monzen','bedtown','skijyou','geopark','nuclearpowerplant','monozukuri','chukakushi','tokureishi',
  'douou_area','doutou_area','dohoku_area','sapporo_metro','ishikari_plain','historical_port_hokkaido','industrial_port_hokkaido','hakodate_honsen','ishikari_river',
  'tsugaru_area','sendai_metro','kitakami_basin','shonai_area','hamadori_area','nakadori_area','aizu_area','sanriku_area',
  'north_kanto','tama_area','tokatsu_area','ryomo_area','tone_river_area','tobu_tojo_line','sotetsu_line',
  'hokuriku_three_pref','koshin_area','tokai_area','owari_area','mikawa_area','izu_area','suruga_area','totomi_area','hida_area','mino_area','hokushin_area','toshin_area','chushin_area','nanshin_area',
  'meitetsu_line',
  'keihanshin_area','hokusetsu_area','kawachi_area','senshu_area','hanshin_area','harima_area','tajima_area','tamba_area','kyoto_north','nara_basin','kii_peninsula','nankai_line',
  'glasses_industry','cutlery_industry','towel_industry','musical_instruments','gold_leaf','denim_industry','pearl_farming','shipbuilding','furniture_industry','washi_famous','pharmaceutical_industry','fireworks_industry','stone_industry',
  'soy_sauce_famous','vinegar_famous','miso_famous','gyoza_famous','yakisoba_famous','udon_famous','soba_famous','ramen_famous','castella_famous','kamaboko_famous','lacquerware_famous',
  'ancient_provincial_capital','kokubunji_site','traditional_buildings_district','little_kyoto','giant_buddha','sea_torii','deer_in_city','gassho_zukuri',
  'ferry_available','no_railway_station','shikoku_pilgrimage','olympic_venue','famous_battlefield','kitamaebune_port','famous_fish_catch',
  'kaikyo_machi','gakuto','hula_girl','kannon_zo','koedo','imono_kupola','aeon_laketown','funasshi_famous','takao_mountain','curry_famous','anime_seichi','number_in_name','kigyo_joukamachi','hankyu_line','yayoiken_seichi','hirakata_park','keihan_line','kawachi_ondo','rugby_machi','kougyou_toshi','hyoujun_jigosen','koushien','bikan_chiku','gunkou_machi','seitetsu_kouro','fugu_famous','tire_famous','hamburger_famous','kenkyu_gakuen_toshi','atsui_machi','action_kamen','senbei_famous','tanabata_famous','uirou_famous','southern_seichi','b_kyu_gourmet','beigun_kichi','shinkai_gyo','saboten_machi','combinat_yakei','danjiri_famous','onaji_ookawa','kageki_dan',
  'animal_in_name','ariake_coast','awa_area','big_small_in_name','bingo_area','body_part_in_name','chikugo_area','chikuho_area','chikuzen_area','chugoku_mountain_basin','chuyo_area','color_in_name','dosan_line','four_plus_name','fukuoka_metro','hakubi_line','hard_to_read_name','hiroshima_metro','honshu_bridge','iyo_area','izumo_area','kagoshima_main_line','kawa_in_name','kitakyushu_area','nanyo_area','new_old_in_name','nippo_main_line','nishitetsu_line','northern_kyushu','okinawa_main_island','okinawa_south_central','osumi_area','paper_industry_shikoku','plant_in_name','pref_name_in_city_name','sakishima_islands','same_name_other_pref','sanin_area','sanin_main_line','sanuki_area','sanyo_area','sanyo_main_line','satsuma_area','sea_word_in_name','setouchi_industrial','shima_in_name','southern_kyushu','ta_in_name','toyo_area','yama_in_name','yosan_line'];

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
  hokkaido_shinkansen_station:{text:'北海道新幹線の駅がある?', icon:'🚄'},
  tohoku_shinkansen_station:{text:'東北新幹線の駅がある?', icon:'🚄'},
  tokaido_shinkansen_station:{text:'東海道新幹線の駅がある?', icon:'🚄'},
  sanyo_shinkansen_station:{text:'山陽新幹線の駅がある?', icon:'🚄'},
  kyushu_shinkansen_station:{text:'九州新幹線の駅がある?', icon:'🚄'},
  nishikyushu_shinkansen_station:{text:'西九州新幹線の駅がある?', icon:'🚄'},
  yamagata_shinkansen_station:{text:'山形新幹線の駅がある?', icon:'🚄'},
  akita_shinkansen_station:{text:'秋田新幹線の駅がある?', icon:'🚄'},
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
  rakugo_stage:  {text:'有名な古典落語の舞台として知られる?', icon:'🎙️'},
  sanma_famous:  {text:'さんまで有名?', icon:'🐟'},
  monzen:           {text:'有名な門前町ですか?', icon:'🙏'},
  bedtown:          {text:'ベッドタウンとして知られている?', icon:'🏠'},
  skijyou:          {text:'有名なスキー場がある?', icon:'⛷️'},
  geopark:          {text:'ジオパークに指定されている?', icon:'🌋'},
  nuclearpowerplant:{text:'原子力発電所がある?', icon:'☢️'},
  monozukuri:       {text:'ものづくり(製造業)で知られている?', icon:'🏭'},
  chukakushi:       {text:'中核市ですか?', icon:'🏛️'},
  tokureishi:       {text:'施行時特例市(かつての特例市)ですか?', icon:'📜'},
  kaikyo_machi:        {text:'海峡のマチ?', icon:'🌊'},
  gakuto:              {text:'「楽都」と呼ばれる音楽のまち?', icon:'🎵'},
  hula_girl:           {text:'『フラガール』のふるさと?', icon:'🌺'},
  kannon_zo:           {text:'観音像が有名?', icon:'🗿'},
  koedo:               {text:'「小江戸」と呼ばれるマチ?', icon:'🏮'},
  imono_kupola:        {text:'鋳物産業・キューポラの街として知られる?', icon:'🏭'},
  aeon_laketown:       {text:'イオンレイクタウンがある?', icon:'🛍️'},
  funasshi_famous:     {text:'ふなっしーで全国的に知られた?', icon:'🍐'},
  takao_mountain:      {text:'高尾山がある?', icon:'⛰️'},
  curry_famous:        {text:'カレーで有名なマチ?', icon:'🍛'},
  anime_seichi:        {text:'アニメの聖地?', icon:'📺'},
  number_in_name:      {text:'市名に数字(一、二、三…)が入っている?', icon:'🔢'},
  kigyo_joukamachi:    {text:'企業城下町として知られる?', icon:'🏢'},
  hankyu_line:         {text:'阪急電車が通っている?', icon:'🚃'},
  yayoiken_seichi:     {text:'聖地となったやよい軒がある?', icon:'🍚'},
  hirakata_park:       {text:'ひらかたパークがある?', icon:'🎡'},
  keihan_line:         {text:'京阪電車が通っている?', icon:'🚃'},
  kawachi_ondo:        {text:'河内音頭で知られる?', icon:'🎶'},
  rugby_machi:         {text:'ラグビーのまち?', icon:'🏉'},
  kougyou_toshi:       {text:'工業都市のイメージが強い?', icon:'🏭'},
  hyoujun_jigosen:     {text:'日本標準時子午線が通る?', icon:'🕐'},
  koushien:            {text:'阪神甲子園球場がある?', icon:'⚾'},
  bikan_chiku:         {text:'美観地区で有名?', icon:'🏯'},
  gunkou_machi:        {text:'軍港のまち?', icon:'⚓'},
  seitetsu_kouro:      {text:'製鉄所の高炉がある?', icon:'🏭'},
  fugu_famous:         {text:'ふぐで有名?', icon:'🐡'},
  tire_famous:         {text:'タイヤで有名?', icon:'🛞'},
  hamburger_famous:    {text:'ハンバーガーで有名?', icon:'🍔'},
  kenkyu_gakuen_toshi: {text:'研究学園都市として知られる?', icon:'🔬'},
  atsui_machi:         {text:'「暑い街」として全国ニュースになりやすい?', icon:'🌡️'},
  action_kamen:        {text:'アクション仮面が好きな5歳児が住んでいる?', icon:'🦸'},
  senbei_famous:       {text:'せんべいで有名?', icon:'🍘'},
  tanabata_famous:     {text:'七夕まつりで有名?', icon:'🎋'},
  uirou_famous:        {text:'ういろうで有名?', icon:'🍡'},
  southern_seichi:     {text:'サザンオールスターズの聖地?', icon:'🎤'},
  b_kyu_gourmet:       {text:'有名なB級グルメがある?', icon:'🍜'},
  beigun_kichi:        {text:'米軍基地がある?', icon:'🎖️'},
  shinkai_gyo:         {text:'深海魚で有名?', icon:'🐟'},
  saboten_machi:       {text:'サボテンのまちとして知られる?', icon:'🌵'},
  combinat_yakei:      {text:'コンビナート夜景で有名?', icon:'🌃'},
  danjiri_famous:      {text:'だんじり祭で全国的に有名?', icon:'🎊'},
  onaji_ookawa:        {text:'市名と同じ大きな川が流れている?', icon:'🏞️'},
  kageki_dan:          {text:'有名な歌劇団の本拠地?', icon:'🎭'},
  kitanotakeshi:       {text:'北野武が幼少期を過ごしたマチ?', icon:'🎞️'},
  musashino_line:      {text:'JR武蔵野線が通っている?', icon:'🚃'},
  ekimei_chigau:       {text:'市の中心駅の名前が市名と異なる?', icon:'🚉'},
  prefectural_capital: {text:'都道府県庁の所在地?', icon:'🏛️'},
  pop_500k:            {text:'人口は50万人以上?', icon:'🌆'},
  pop_300k:            {text:'人口は30万人以上?', icon:'🏙️'},
  pop_under_100k:      {text:'人口は10万人未満?', icon:'🏘️'},
  borders_other_pref:  {text:'他の都道府県と境を接している?', icon:'🗺️'},
  formed_after_2000:   {text:'2000年以降の新設合併で誕生した?', icon:'🤝'},
  national_university: {text:'国立大学の本部がある?', icon:'🎓'},
  expressway_junction: {text:'高速道路のジャンクション(JCT)がある?', icon:'🛣️'},
  hiragana_name:       {text:'名前がすべてひらがな?', icon:'🔤'},
  direction_in_name:   {text:'名前に「東・西・南・北」が入っている?', icon:'🧭'},
  old_province_name:   {text:'名前が旧国名に由来する?', icon:'📜'},
  public_racing_venue: {text:'公営競技場(競馬・競輪・ボート・オートレース)がある?', icon:'🚤'},
  national_government_park: {text:'国営公園がある?', icon:'🌳'},
  film_city:           {text:'映画・映像のまちとして知られる?', icon:'🎬'},
  shinsengumi:         {text:'新選組ゆかりのまち?', icon:'⚔️'},
  shonan_area:         {text:'「湘南」と呼ばれる地域にある?', icon:'🏄'},
  white_mirin_origin:  {text:'白みりん発祥の地?', icon:'🍶'},
  douou_area:               {text:'道央地方にありますか?', icon:'🧭'},
  doutou_area:              {text:'道東地方にありますか?', icon:'🧭'},
  dohoku_area:              {text:'道北地方にありますか?', icon:'🧭'},
  sapporo_metro:            {text:'札幌都市圏に含まれますか?', icon:'🏙️'},
  ishikari_plain:           {text:'石狩平野にありますか?', icon:'🌾'},
  historical_port_hokkaido: {text:'北海道を代表する歴史的な港町ですか?', icon:'⚓'},
  industrial_port_hokkaido: {text:'工業港のあるマチですか?', icon:'🏭'},
  hakodate_honsen:          {text:'函館本線が通っていますか?', icon:'🚃'},
  ishikari_river:           {text:'石狩川が流れていますか?', icon:'🏞️'},
  tsugaru_area:       {text:'津軽地方にありますか?', icon:'🧭'},
  sendai_metro:       {text:'仙台都市圏に含まれますか?', icon:'🏙️'},
  kitakami_basin:     {text:'北上川流域のマチですか?', icon:'🏞️'},
  shonai_area:        {text:'庄内地方にありますか?', icon:'🧭'},
  hamadori_area:      {text:'福島県の浜通りにありますか?', icon:'🧭'},
  nakadori_area:      {text:'福島県の中通りにありますか?', icon:'🧭'},
  aizu_area:          {text:'会津地方にありますか?', icon:'🧭'},
  sanriku_area:       {text:'三陸沿岸のマチですか?', icon:'🌊'},
  north_kanto:        {text:'北関東3県のマチですか?', icon:'🧭'},
  tama_area:          {text:'東京の多摩地域にありますか?', icon:'🧭'},
  tokatsu_area:       {text:'千葉県の東葛地域にありますか?', icon:'🧭'},
  ryomo_area:         {text:'群馬県と栃木県にまたがる両毛地域ですか?', icon:'🧭'},
  tone_river_area:    {text:'利根川に接していますか?', icon:'🏞️'},
  tobu_tojo_line:     {text:'東武東上線の駅がありますか?', icon:'🚃'},
  sotetsu_line:       {text:'相鉄線の駅がありますか?', icon:'🚃'},
  hokuriku_three_pref:{text:'北陸3県のマチですか?', icon:'🧭'},
  koshin_area:        {text:'甲信地方にありますか?', icon:'🧭'},
  tokai_area:         {text:'東海地方にありますか?', icon:'🧭'},
  owari_area:         {text:'愛知県の尾張地方ですか?', icon:'🧭'},
  mikawa_area:        {text:'愛知県の三河地方ですか?', icon:'🧭'},
  izu_area:           {text:'伊豆地方にありますか?', icon:'🧭'},
  suruga_area:        {text:'駿河地方にありますか?', icon:'🧭'},
  totomi_area:        {text:'遠江地方にありますか?', icon:'🧭'},
  hida_area:          {text:'岐阜県の飛騨地方ですか?', icon:'🧭'},
  mino_area:          {text:'岐阜県の美濃地方ですか?', icon:'🧭'},
  hokushin_area:      {text:'長野県の北信地方ですか?', icon:'🧭'},
  toshin_area:        {text:'長野県の東信地方ですか?', icon:'🧭'},
  chushin_area:       {text:'長野県の中信地方ですか?', icon:'🧭'},
  nanshin_area:       {text:'長野県の南信地方ですか?', icon:'🧭'},
  meitetsu_line:      {text:'名鉄電車が通っていますか?', icon:'🚃'},
  keihanshin_area:    {text:'京阪神地域にありますか?', icon:'🏙️'},
  hokusetsu_area:     {text:'北摂地域にありますか?', icon:'🧭'},
  kawachi_area:       {text:'河内地域にありますか?', icon:'🧭'},
  senshu_area:        {text:'泉州地域にありますか?', icon:'🧭'},
  hanshin_area:       {text:'阪神間のマチですか?', icon:'🧭'},
  harima_area:        {text:'播磨地方にありますか?', icon:'🧭'},
  tajima_area:        {text:'但馬地方にありますか?', icon:'🧭'},
  tamba_area:         {text:'丹波地方にありますか?', icon:'🧭'},
  kyoto_north:        {text:'京都府北部にありますか?', icon:'🧭'},
  nara_basin:         {text:'奈良盆地にありますか?', icon:'🧭'},
  kii_peninsula:      {text:'紀伊半島にありますか?', icon:'🧭'},
  nankai_line:        {text:'南海電車が通っていますか?', icon:'🚃'},
  glasses_industry:            {text:'メガネ産業で有名?', icon:'🤓'},
  cutlery_industry:            {text:'刃物・包丁で有名?', icon:'🔪'},
  towel_industry:              {text:'タオルで有名?', icon:'🧺'},
  musical_instruments:         {text:'楽器製造で有名?', icon:'🎹'},
  gold_leaf:                   {text:'金箔で有名?', icon:'✨'},
  denim_industry:              {text:'デニム・ジーンズで有名?', icon:'👖'},
  pearl_farming:               {text:'真珠の養殖で有名?', icon:'🦪'},
  shipbuilding:                {text:'造船業で有名?', icon:'🚢'},
  furniture_industry:          {text:'家具の産地として有名?', icon:'🪑'},
  washi_famous:                {text:'和紙の産地として有名?', icon:'📜'},
  pharmaceutical_industry:     {text:'製薬産業で知られる?', icon:'💊'},
  fireworks_industry:          {text:'花火の製造で有名?', icon:'🎆'},
  stone_industry:              {text:'石材・石切りで有名?', icon:'🪨'},
  soy_sauce_famous:            {text:'醤油の生産で有名?', icon:'🍶'},
  vinegar_famous:              {text:'酢の生産で有名?', icon:'🍶'},
  miso_famous:                 {text:'八丁味噌で有名?', icon:'🍲'},
  gyoza_famous:                {text:'餃子で有名?', icon:'🥟'},
  yakisoba_famous:             {text:'焼きそばで有名?', icon:'🍜'},
  udon_famous:                 {text:'うどんで有名?', icon:'🍜'},
  soba_famous:                 {text:'そばで有名?', icon:'🍜'},
  ramen_famous:                {text:'ラーメンで有名?', icon:'🍜'},
  castella_famous:             {text:'カステラで有名?', icon:'🍰'},
  kamaboko_famous:             {text:'かまぼこで有名?', icon:'🍥'},
  lacquerware_famous:          {text:'漆器で有名?', icon:'🥢'},
  ancient_provincial_capital:  {text:'古代の国府が置かれていた?', icon:'🏛️'},
  kokubunji_site:              {text:'国分寺・国分尼寺跡がある?', icon:'🏯'},
  traditional_buildings_district: {text:'重要伝統的建造物群保存地区がある?', icon:'🏘️'},
  little_kyoto:                {text:'「小京都」と呼ばれている?', icon:'⛩️'},
  giant_buddha:                {text:'巨大な大仏・観音像がある?', icon:'🗿'},
  sea_torii:                   {text:'海上や海辺の大鳥居で有名?', icon:'⛩️'},
  deer_in_city:                {text:'鹿が市街地を歩くことで有名?', icon:'🦌'},
  gassho_zukuri:               {text:'合掌造り集落がある?', icon:'🏠'},
  ferry_available:             {text:'定期フェリーがある?', icon:'⛴️'},
  no_railway_station:          {text:'市内に鉄道駅がひとつもない?', icon:'🚉'},
  shikoku_pilgrimage:          {text:'四国八十八ヶ所の札所がある?', icon:'🙏'},
  olympic_venue:               {text:'オリンピック競技が開催された?', icon:'🏅'},
  famous_battlefield:          {text:'有名な古戦場がある?', icon:'⚔️'},
  kitamaebune_port:            {text:'北前船の寄港地として栄えた?', icon:'⛵'},
  famous_fish_catch:           {text:'漁獲される特定の魚介で全国的に有名?', icon:'🐟'},
  animal_in_name: {text:'自治体名に動物を表す漢字が入っている？', icon:'🐾'},
  ariake_coast: {text:'有明海に面していますか?', icon:'🧭'},
  awa_area: {text:'阿波地方にありますか?', icon:'🧭'},
  big_small_in_name: {text:'自治体名に「大」または「小」が入っている？', icon:'🔠'},
  bingo_area: {text:'備後地方にありますか?', icon:'🧭'},
  body_part_in_name: {text:'自治体名に体の一部を表す漢字が入っている？', icon:'👁️'},
  chikugo_area: {text:'筑後地方にありますか?', icon:'🧭'},
  chikuho_area: {text:'筑豊地方にありますか?', icon:'🧭'},
  chikuzen_area: {text:'筑前地方にありますか?', icon:'🧭'},
  chugoku_mountain_basin: {text:'中国山地の盆地にありますか?', icon:'🧭'},
  chuyo_area: {text:'愛媛県の中予地方ですか?', icon:'🧭'},
  color_in_name: {text:'自治体名に色を表す漢字が入っている？', icon:'🎨'},
  dosan_line: {text:'土讃線が通っていますか?', icon:'🚃'},
  four_plus_name: {text:'市の名前が4文字以上？（「市」を除く）', icon:'📏'},
  fukuoka_metro: {text:'福岡都市圏に含まれますか?', icon:'🧭'},
  hakubi_line: {text:'伯備線が通っていますか?', icon:'🚃'},
  hard_to_read_name: {text:'難読地名として知られている？', icon:'❓'},
  hiroshima_metro: {text:'広島都市圏に含まれますか?', icon:'🧭'},
  honshu_bridge: {text:'本州方面と橋で結ばれていますか?', icon:'🧭'},
  iyo_area: {text:'伊予地方にありますか?', icon:'🧭'},
  izumo_area: {text:'出雲地方にありますか?', icon:'🧭'},
  kagoshima_main_line: {text:'鹿児島本線が通っていますか?', icon:'🚃'},
  kawa_in_name: {text:'自治体名に「川」が入っている？', icon:'🏞️'},
  kitakyushu_area: {text:'北九州地域にありますか?', icon:'🧭'},
  nanyo_area: {text:'愛媛県の南予地方ですか?', icon:'🧭'},
  new_old_in_name: {text:'自治体名に「新」または「古」が入っている？', icon:'🆕'},
  nippo_main_line: {text:'日豊本線が通っていますか?', icon:'🚃'},
  nishitetsu_line: {text:'西鉄電車が走っていますか?', icon:'🚃'},
  northern_kyushu: {text:'北部九州にありますか?', icon:'🧭'},
  okinawa_main_island: {text:'沖縄本島にありますか?', icon:'🧭'},
  okinawa_south_central: {text:'沖縄本島の中南部にありますか?', icon:'🧭'},
  osumi_area: {text:'大隅地方にありますか?', icon:'🧭'},
  paper_industry_shikoku: {text:'製紙業で知られるマチですか?', icon:'🏭'},
  plant_in_name: {text:'自治体名に植物を表す漢字が入っている？', icon:'🌿'},
  pref_name_in_city_name: {text:'自治体名に都道府県名が含まれている？', icon:'🗾'},
  sakishima_islands: {text:'宮古・八重山地域にありますか?', icon:'🧭'},
  same_name_other_pref: {text:'同名の市が別の都道府県にもある？', icon:'👯'},
  sanin_area: {text:'山陰地方にありますか?', icon:'🧭'},
  sanin_main_line: {text:'山陰本線が通っていますか?', icon:'🚃'},
  sanuki_area: {text:'讃岐地方にありますか?', icon:'🧭'},
  sanyo_area: {text:'山陽地方にありますか?', icon:'🧭'},
  sanyo_main_line: {text:'山陽本線が通っていますか?', icon:'🚃'},
  satsuma_area: {text:'薩摩地方にありますか?', icon:'🧭'},
  sea_word_in_name: {text:'自治体名に「海・浜・浦」が入っている？', icon:'🌊'},
  setouchi_industrial: {text:'瀬戸内工業地域のマチですか?', icon:'🧭'},
  shima_in_name: {text:'自治体名に「島」が入っている？', icon:'🏝️'},
  southern_kyushu: {text:'南九州にありますか?', icon:'🧭'},
  ta_in_name: {text:'自治体名に「田」が入っている？', icon:'🌾'},
  toyo_area: {text:'愛媛県の東予地方ですか?', icon:'🧭'},
  yama_in_name: {text:'自治体名に「山」が入っている？', icon:'⛰️'},
  yosan_line: {text:'予讃線が通っていますか?', icon:'🚃'}
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
let scorePool = []; // [{city, score}] 形式。はい/いいえで完全に消すのではなく、加点/減点で判断する

// 「路線図」のように、地理的に絶対に両立しない組み合わせをデータから自動学習する。
// (例: 西武線と東急線は、どちらも通っている自治体が1件も無いので「排他」と判定できる)
// 対象は誤学習を防ぐため、地理的に意味のある安全なタグ群だけに絞る。
const EXCLUSIVE_CHECK_GROUPS = [
  ['odakyu_line','keio_inokashira_line','tokyu_line','keikyu_line','seibu_line','tobu_line','keisei_line',
   'tsukuba_express','rinkai_line','toden_arakawa','yurikamome','tokyo_monorail','nippori_toneri'],
  ['joetsu_region','chuetsu_region','kaetsu_region'],
  ['nihonkai','taiheiyo','setonaikai'],
];
let EXCLUSIVE_MAP = {};

function computeExclusiveMap(){
  EXCLUSIVE_MAP = {};
  EXCLUSIVE_CHECK_GROUPS.forEach(group => {
    for(let i = 0; i < group.length; i++){
      for(let j = i + 1; j < group.length; j++){
        const k1 = group[i], k2 = group[j];
        const bothTrue = CITIES.some(c => c.tags[k1] && c.tags[k2]);
        if(!bothTrue){
          (EXCLUSIVE_MAP[k1] = EXCLUSIVE_MAP[k1] || []).push(k2);
          (EXCLUSIVE_MAP[k2] = EXCLUSIVE_MAP[k2] || []).push(k1);
        }
      }
    }
  });
}
let excludedNames = new Set(); // このゲーム内で既に「ちがう」と言われた市区町村名
let guessAttempts = 0; // このゲーム内で何回「もしかして」を出したか
let asked = [];
let questionCount = 0;
let history = []; // 「戻る」ボタン用の履歴(質問を出す直前の状態を保存)
const MAX_Q = 18;         // このくらいで自信があれば早押しする、という目安の質問数
const HARD_MAX_Q = 30;    // それでも決着がつかない場合の絶対的な上限(暴走防止)

// スコア方式のパラメータ
const MATCH_BONUS = 3;      // 回答と一致したときの加点
const MISMATCH_PENALTY = 1; // 回答と不一致だったときの減点(加点より小さくして、1回の勘違いで正解が沈みすぎないようにする)
const PARTIAL_WEIGHT = 0.5; // 「たぶんそう/たぶんいいえ」のときの加減点の強さ(通常の何倍か)
const MIN_Q_BEFORE_EARLY_GUESS = 3; // 最低これだけ質問してから「早押し」判定を始める
const CONFIDENCE_MARGIN = 6;        // 1位と2位のスコア差がこれ以上なら、途中でも答えを出す
const MAX_WRONG_ATTEMPTS = 3;       // 「ちがう」と言われたとき、諦めて訂正フォームを出すまでの最大トライ数

function sortedPool(){
  return scorePool
    .filter(e => !excludedNames.has(e.city.name))
    .sort((a, b) => b.score - a.score);
}

// スコアが1位に近い(=まだ僅差で競っている)自治体を中心に集める。
// 単純に「上位30件」で固定すると、広い母集団向けの質問ばかり選ばれてしまい、
// 僅差の候補同士を区別する狭い質問が後回しになるのを防ぐため。
const RELEVANCE_MARGIN = 8;
function topPoolCities(){
  const sorted = sortedPool();
  if(sorted.length === 0) return [];
  const top1Score = sorted[0].score;
  const relevant = sorted.filter(e => top1Score - e.score <= RELEVANCE_MARGIN);
  const minCount = Math.min(8, sorted.length);
  const list = relevant.length >= minCount ? relevant : sorted.slice(0, minCount);
  return list.slice(0, 40).map(e => e.city);
}

let currentMode = 'all';

const MODES = {
  all: {
    label: '全国版',
    description: '人口5万人以上の市、および新潟県の自治体と東京23区'
  },
  niigata: {
    label: '新潟県版',
    description: '新潟県の市町村だけで当てます'
  },
  tokyo: {
    label: '東京都版',
    description: '東京23区と多摩地区の市だけで当てます'
  },
  hokkaido: { label: '北海道版', region: '北海道' },
  tohoku:   { label: '東北版',   region: '東北' },
  kanto:    { label: '関東版',   region: '関東' },
  chubu:    { label: '中部版',   region: '中部' },
  kinki:    { label: '近畿版',   region: '近畿' },
  chugoku:  { label: '中国版',   region: '中国' },
  shikoku:  { label: '四国版',   region: '四国' },
  kyushu:   { label: '九州・沖縄版', region: '九州・沖縄' }
};

// 都道府県 → 地方区分(地方版モードの絞り込みに使う)
const PREF_REGION = {
  '北海道':'北海道',
  '青森県':'東北','岩手県':'東北','宮城県':'東北','秋田県':'東北','山形県':'東北','福島県':'東北',
  '茨城県':'関東','栃木県':'関東','群馬県':'関東','埼玉県':'関東','千葉県':'関東','東京都':'関東','神奈川県':'関東',
  '新潟県':'中部','富山県':'中部','石川県':'中部','福井県':'中部','山梨県':'中部','長野県':'中部','岐阜県':'中部','静岡県':'中部','愛知県':'中部',
  '三重県':'近畿','滋賀県':'近畿','京都府':'近畿','大阪府':'近畿','兵庫県':'近畿','奈良県':'近畿','和歌山県':'近畿',
  '鳥取県':'中国','島根県':'中国','岡山県':'中国','広島県':'中国','山口県':'中国',
  '徳島県':'四国','香川県':'四国','愛媛県':'四国','高知県':'四国',
  '福岡県':'九州・沖縄','佐賀県':'九州・沖縄','長崎県':'九州・沖縄','熊本県':'九州・沖縄','大分県':'九州・沖縄','宮崎県':'九州・沖縄','鹿児島県':'九州・沖縄','沖縄県':'九州・沖縄'
};
function regionOf(pref){ return PREF_REGION[pref] || 'その他'; }

function getModeCities(mode){
  if(mode === 'niigata'){
    return CITIES.filter(c => c.pref === '新潟県');
  }
  if(mode === 'tokyo'){
    // 「東京」(都全体の集計エントリ)は23区・市町村の個別データと重複するため東京都版では除外する
    return CITIES.filter(c => c.pref === '東京都' && c.name !== '東京');
  }
  if(MODES[mode] && MODES[mode].region){
    // 地方版: その地方の自治体だけに絞る(集計エントリ「東京」は除外)
    return CITIES.filter(c => regionOf(c.pref) === MODES[mode].region && c.name !== '東京');
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
//
// 【出題される範囲のルール】
//  - all(全国版)では、すべての質問が出る(限定質問も含む)。
//  - 県・都の限定質問(niigata / tokyo)は、その版 + 対応する地方版 + 全国版で出る。
//      新潟県限定 → 新潟県版・中部版・全国版
//      東京都限定 → 東京都版・関東版・全国版
//  - 地方限定質問(hokkaido〜kyushu)は、その地方版 + 全国版で出る。
const MODE_ONLY_KEYS = {
  niigata: [
    'joetsu_region','chuetsu_region','uono_river','pop_3digit','borders_gunma','borders_toyama'
  ],
  tokyo: [
    'todai_campus','waseda_campus','keio_campus','sophia_campus','meiji_campus','aoyama_campus','rikkyo_campus','chuo_campus','hosei_campus','tus_campus','diet_building','sensoji','kasai_park','tokyu_line','keikyu_line','rinkai_line','yurikamome','tokyo_monorail','toden_arakawa','nippori_toneri','sumida_river','meguro_river','shakujii_river','borders_other_pref_tokyo','borders_kanagawa','borders_saitama','borders_chiba','ochanomizu_univ','gakushuin_univ','toyo_univ','komazawa_univ','seijo_univ','kokugakuin_univ','senshu_univ','jr_line','no_jr','yamanote_line','keihintohoku_line','chuo_sobu','tokyo_station','ueno_station','shinagawa_station','akihabara_station','shimbashi_station','kinshicho_station','kamata_station','nippori_station','tsunagari_mayu_police','koiwa_or_kasairinkai_station','tora_san_home','tsubasa_hometown','tv_station_area','sazae_family','hachiko_area','yose_hall','sailor_moon_stage','tokiwa_so','godzilla_head','rakugo_stage','sanma_famous'
  ],
  // 地方版別質問:キーをここに足すと、その地方版と全国版だけで出題される。
  hokkaido: ['douou_area','doutou_area','dohoku_area','sapporo_metro','ishikari_plain','historical_port_hokkaido','industrial_port_hokkaido','hakodate_honsen','ishikari_river'],
  tohoku:   ['tsugaru_area','sendai_metro','kitakami_basin','shonai_area','hamadori_area','nakadori_area','aizu_area','sanriku_area'],
  kanto:    ['north_kanto','tama_area','tokatsu_area','ryomo_area','tone_river_area','tobu_tojo_line','sotetsu_line'],
  chubu:    ['hokuriku_three_pref','koshin_area','tokai_area','owari_area','mikawa_area','izu_area','suruga_area','totomi_area','hida_area','mino_area','hokushin_area','toshin_area','chushin_area','nanshin_area','meitetsu_line'],
  kinki:    ['keihanshin_area','hokusetsu_area','kawachi_area','senshu_area','hanshin_area','harima_area','tajima_area','tamba_area','kyoto_north','nara_basin','kii_peninsula','nankai_line'],
  chugoku: ['sanin_area','sanyo_area','izumo_area','bingo_area','hiroshima_metro','chugoku_mountain_basin','setouchi_industrial','sanin_main_line','sanyo_main_line','hakubi_line'],
  shikoku: ['yosan_line','dosan_line','sanuki_area','awa_area','iyo_area','toyo_area','chuyo_area','nanyo_area','honshu_bridge','paper_industry_shikoku'],
  kyushu: ['northern_kyushu','southern_kyushu','ariake_coast','fukuoka_metro','kitakyushu_area','chikugo_area','chikuho_area','chikuzen_area','satsuma_area','osumi_area','okinawa_main_island','okinawa_south_central','sakishima_islands','kagoshima_main_line','nippo_main_line','nishitetsu_line']
};

// 県・都の限定質問を「地方版でも出す」ための対応表。
// niigata の質問は chubu でも、tokyo の質問は kanto でも出題する。
const MODE_ONLY_ALSO_IN_REGION = {
  niigata: 'chubu',
  tokyo:   'kanto'
};

// あるモードで、指定した限定グループの質問を出してよいかを判定する。
function modeAllowsGroup(mode, group){
  if(mode === 'all') return true;      // 全国版はすべて出す
  if(mode === group) return true;       // その版そのもの
  if(MODE_ONLY_ALSO_IN_REGION[group] === mode) return true; // 県限定を対応地方版でも出す
  return false;
}

function activeKeysForMode(mode){
  return KEYS.filter(k => {
    for(const group in MODE_ONLY_KEYS){
      if(MODE_ONLY_KEYS[group].includes(k)){
        return modeAllowsGroup(mode, group);
      }
    }
    return true; // どの限定グループにも属さない質問は全モードで出る
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
// 質問ジャンルの自動バランス調整。
// 各タグに9ジャンル(地理/交通/人口・行政/食/歴史・文化/観光・娯楽/学問/遊び心/その他)を割り当て、
// 「そのゲーム内で既に出たジャンル」ほど次に選ばれにくくする。これにより手動で個別調整しなくても
// 特定ジャンル(鉄道・大学など)ばかり連続しにくくなり、自然にジャンルがバラける。
const TAG_GAME_CATEGORY = {
  "coastal": "地理",
  "nihonkai": "地理",
  "taiheiyo": "地理",
  "setonaikai": "地理",
  "famous_mountain": "地理",
  "big_river": "地理",
  "snow": "地理",
  "basin": "地理",
  "lakeside": "地理",
  "volcano_view": "地理",
  "remote_island": "地理",
  "sand_dunes": "地理",
  "joetsu_region": "地理",
  "chuetsu_region": "地理",
  "kaetsu_region": "地理",
  "shinano_river": "地理",
  "agano_river": "地理",
  "uono_river": "地理",
  "borders_yamagata": "地理",
  "borders_fukushima": "地理",
  "borders_gunma": "地理",
  "borders_nagano": "地理",
  "borders_toyama": "地理",
  "tokyo_bay": "地理",
  "tama_river": "地理",
  "sumida_river": "地理",
  "arakawa_river": "地理",
  "edogawa_river": "地理",
  "meguro_river": "地理",
  "shakujii_river": "地理",
  "borders_other_pref_tokyo": "地理",
  "borders_kanagawa": "地理",
  "borders_saitama": "地理",
  "borders_chiba": "地理",
  "geopark": "地理",
  "shinkansen": "交通",
  "subway": "交通",
  "airport": "交通",
  "tram": "交通",
  "private_railway": "交通",
  "monorail": "交通",
  "kintetsu": "交通",
  "odakyu_line": "交通",
  "keio_inokashira_line": "交通",
  "tokyu_line": "交通",
  "keikyu_line": "交通",
  "seibu_line": "交通",
  "tobu_line": "交通",
  "keisei_line": "交通",
  "tsukuba_express": "交通",
  "rinkai_line": "交通",
  "yurikamome": "交通",
  "tokyo_monorail": "交通",
  "toden_arakawa": "交通",
  "nippori_toneri": "交通",
  "jr_line": "交通",
  "no_jr": "交通",
  "yamanote_line": "交通",
  "keihintohoku_line": "交通",
  "chuo_rapid": "交通",
  "chuo_sobu": "交通",
  "joban_line": "交通",
  "saikyo_line": "交通",
  "joetsu_shinkansen_station": "交通",
  "hokuriku_shinkansen_station": "交通",
  "hokkaido_shinkansen_station": "交通",
  "tohoku_shinkansen_station": "交通",
  "tokaido_shinkansen_station": "交通",
  "sanyo_shinkansen_station": "交通",
  "kyushu_shinkansen_station": "交通",
  "nishikyushu_shinkansen_station": "交通",
  "yamagata_shinkansen_station": "交通",
  "akita_shinkansen_station": "交通",
  "tokyo_station": "交通",
  "ikebukuro_station": "交通",
  "ueno_station": "交通",
  "shinagawa_station": "交通",
  "akihabara_station": "交通",
  "shimbashi_station": "交通",
  "kitasenju_station": "交通",
  "kinshicho_station": "交通",
  "ogikubo_station": "交通",
  "kamata_station": "交通",
  "akabane_station": "交通",
  "nippori_station": "交通",
  "koiwa_or_kasairinkai_station": "交通",
  "pop1m": "人口・行政",
  "designated": "人口・行政",
  "capital": "人口・行政",
  "is_town_village": "人口・行政",
  "is_tokyo_ward": "人口・行政",
  "kana_name": "人口・行政",
  "kansai_dialect": "人口・行政",
  "tohoku_dialect": "人口・行政",
  "ryukyu_dialect": "人口・行政",
  "is_village": "人口・行政",
  "pop_3digit": "人口・行政",
  "bedtown": "人口・行政",
  "nuclearpowerplant": "人口・行政",
  "monozukuri": "人口・行政",
  "noodle": "食",
  "sake": "食",
  "rice_region": "食",
  "fruit_famous": "食",
  "brand_beef": "食",
  "chinatown": "食",
  "tea_region": "食",
  "famous_market": "食",
  "toyosu_market": "食",
  "castle": "歴史・文化",
  "worldheritage": "歴史・文化",
  "ruins": "歴史・文化",
  "shrine_temple": "歴史・文化",
  "bakumatsu_port": "歴史・文化",
  "former_capital": "歴史・文化",
  "grid_streets": "歴史・文化",
  "kokuho_building": "歴史・文化",
  "historical_statue": "歴史・文化",
  "twelve_castles": "歴史・文化",
  "sengoku_warlord": "歴史・文化",
  "war_damage": "歴史・文化",
  "mining_heritage": "歴史・文化",
  "gokaido_shukuba": "歴史・文化",
  "pottery_famous": "歴史・文化",
  "traditional_craft": "歴史・文化",
  "horse_racing": "歴史・文化",
  "literary_figure": "歴史・文化",
  "imperial_palace": "歴史・文化",
  "diet_building": "歴史・文化",
  "sensoji": "歴史・文化",
  "shibamata_taishakuten": "歴史・文化",
  "monzen": "歴史・文化",
  "festival": "観光・娯楽",
  "snow_festival": "観光・娯楽",
  "onsen": "観光・娯楽",
  "fireworks": "観光・娯楽",
  "castle_town": "観光・娯楽",
  "port_town": "観光・娯楽",
  "famous_garden": "観光・娯楽",
  "car_town": "観光・娯楽",
  "night_view": "観光・娯楽",
  "ferris_wheel": "観光・娯楽",
  "theme_park": "観光・娯楽",
  "zoo": "観光・娯楽",
  "aquarium": "観光・娯楽",
  "famous_tower": "観光・娯楽",
  "dome_stadium": "観光・娯楽",
  "mascot_famous": "観光・娯楽",
  "jleague": "観光・娯楽",
  "npb": "観光・娯楽",
  "sumo_basho": "観光・娯楽",
  "tocho": "観光・娯楽",
  "tokyo_tower_ward": "観光・娯楽",
  "tokyo_dome_ward": "観光・娯楽",
  "skytree_ward": "観光・娯楽",
  "haneda_ward": "観光・娯楽",
  "shibuya_crossing": "観光・娯楽",
  "kasai_park": "観光・娯楽",
  "broadway_nakano": "観光・娯楽",
  "koenji_area": "観光・娯楽",
  "shimokitazawa": "観光・娯楽",
  "jiyugaoka": "観光・娯楽",
  "shakujii_park": "観光・娯楽",
  "skijyou": "観光・娯楽",
  "ginza": "観光・娯楽",
  "todai_campus": "学問",
  "waseda_campus": "学問",
  "keio_campus": "学問",
  "sophia_campus": "学問",
  "meiji_campus": "学問",
  "aoyama_campus": "学問",
  "rikkyo_campus": "学問",
  "chuo_campus": "学問",
  "hosei_campus": "学問",
  "tus_campus": "学問",
  "ochanomizu_univ": "学問",
  "gakushuin_univ": "学問",
  "toyo_univ": "学問",
  "komazawa_univ": "学問",
  "seijo_univ": "学問",
  "kokugakuin_univ": "学問",
  "senshu_univ": "学問",
  "imperial_university": "学問",
  "tsunagari_mayu_police": "遊び心",
  "tora_san_home": "遊び心",
  "tsubasa_hometown": "遊び心",
  "tv_station_area": "遊び心",
  "sazae_family": "遊び心",
  "hachiko_area": "遊び心",
  "yose_hall": "遊び心",
  "sailor_moon_stage": "遊び心",
  "tokiwa_so": "遊び心",
  "godzilla_head": "遊び心",
  "rakugo_stage": "遊び心",
  "sanma_famous": "遊び心",
  "kanji_one_char": "その他",
  "exotic_port": "歴史・文化",
  "chukakushi": "人口・行政",
  "tokureishi": "人口・行政",
  "kaikyo_machi": "地理",
  "gakuto": "観光・娯楽",
  "hula_girl": "観光・娯楽",
  "kannon_zo": "歴史・文化",
  "koedo": "歴史・文化",
  "imono_kupola": "人口・行政",
  "aeon_laketown": "観光・娯楽",
  "funasshi_famous": "遊び心",
  "takao_mountain": "地理",
  "curry_famous": "食",
  "anime_seichi": "観光・娯楽",
  "number_in_name": "その他",
  "kigyo_joukamachi": "人口・行政",
  "hankyu_line": "交通",
  "yayoiken_seichi": "遊び心",
  "hirakata_park": "観光・娯楽",
  "keihan_line": "交通",
  "kawachi_ondo": "観光・娯楽",
  "rugby_machi": "観光・娯楽",
  "kougyou_toshi": "人口・行政",
  "hyoujun_jigosen": "地理",
  "koushien": "観光・娯楽",
  "bikan_chiku": "観光・娯楽",
  "gunkou_machi": "歴史・文化",
  "seitetsu_kouro": "人口・行政",
  "fugu_famous": "食",
  "tire_famous": "人口・行政",
  "hamburger_famous": "食",
  "kenkyu_gakuen_toshi": "人口・行政",
  "atsui_machi": "地理",
  "action_kamen": "遊び心",
  "senbei_famous": "食",
  "tanabata_famous": "観光・娯楽",
  "uirou_famous": "食",
  "southern_seichi": "遊び心",
  "b_kyu_gourmet": "食",
  "beigun_kichi": "歴史・文化",
  "shinkai_gyo": "食",
  "saboten_machi": "観光・娯楽",
  "combinat_yakei": "観光・娯楽",
  "danjiri_famous": "観光・娯楽",
  "onaji_ookawa": "地理",
  "kageki_dan": "観光・娯楽",
  "kitanotakeshi": "遊び心",
  "musashino_line": "交通",
  "ekimei_chigau": "交通",
  "prefectural_capital": "人口・行政",
  "pop_500k": "人口・行政",
  "pop_300k": "人口・行政",
  "pop_under_100k": "人口・行政",
  "borders_other_pref": "地理",
  "formed_after_2000": "人口・行政",
  "national_university": "学問",
  "expressway_junction": "交通",
  "hiragana_name": "その他",
  "direction_in_name": "その他",
  "old_province_name": "歴史・文化",
  "public_racing_venue": "観光・娯楽",
  "national_government_park": "観光・娯楽",
  "film_city": "観光・娯楽",
  "shinsengumi": "歴史・文化",
  "shonan_area": "地理",
  "white_mirin_origin": "食",
  "douou_area": "地理",
  "doutou_area": "地理",
  "dohoku_area": "地理",
  "sapporo_metro": "人口・行政",
  "ishikari_plain": "地理",
  "historical_port_hokkaido": "歴史・文化",
  "industrial_port_hokkaido": "地理",
  "hakodate_honsen": "交通",
  "ishikari_river": "地理",
  "tsugaru_area": "地理","sendai_metro": "人口・行政","kitakami_basin": "地理","shonai_area": "地理",
  "hamadori_area": "地理","nakadori_area": "地理","aizu_area": "地理","sanriku_area": "地理",
  "north_kanto": "地理","tama_area": "地理","tokatsu_area": "地理","ryomo_area": "地理",
  "tone_river_area": "地理","tobu_tojo_line": "交通","sotetsu_line": "交通",
  "hokuriku_three_pref": "地理","koshin_area": "地理","tokai_area": "地理","owari_area": "地理",
  "mikawa_area": "地理","izu_area": "地理","suruga_area": "地理","totomi_area": "地理",
  "hida_area": "地理","mino_area": "地理","hokushin_area": "地理","toshin_area": "地理",
  "chushin_area": "地理","nanshin_area": "地理",
  "meitetsu_line": "交通",
  "keihanshin_area": "人口・行政","hokusetsu_area": "地理","kawachi_area": "地理","senshu_area": "地理",
  "hanshin_area": "地理","harima_area": "地理","tajima_area": "地理","tamba_area": "地理",
  "kyoto_north": "地理","nara_basin": "地理","kii_peninsula": "地理","nankai_line": "交通",
  "glasses_industry": "地理","cutlery_industry": "地理","towel_industry": "地理","musical_instruments": "地理",
  "gold_leaf": "地理","denim_industry": "地理","pearl_farming": "地理","shipbuilding": "地理",
  "furniture_industry": "地理","washi_famous": "地理","pharmaceutical_industry": "地理","fireworks_industry": "地理","stone_industry": "地理",
  "soy_sauce_famous": "食","vinegar_famous": "食","miso_famous": "食","gyoza_famous": "食","yakisoba_famous": "食",
  "udon_famous": "食","soba_famous": "食","ramen_famous": "食","castella_famous": "食","kamaboko_famous": "食",
  "lacquerware_famous": "地理","famous_fish_catch": "食",
  "ancient_provincial_capital": "歴史・文化","kokubunji_site": "歴史・文化","traditional_buildings_district": "歴史・文化",
  "little_kyoto": "歴史・文化","giant_buddha": "歴史・文化","sea_torii": "歴史・文化","deer_in_city": "歴史・文化","gassho_zukuri": "歴史・文化",
  "shikoku_pilgrimage": "歴史・文化","olympic_venue": "歴史・文化","famous_battlefield": "歴史・文化","kitamaebune_port": "歴史・文化",
  "ferry_available": "交通","no_railway_station": "交通",
  "animal_in_name": "遊び心",
  "ariake_coast": "地理",
  "awa_area": "地理",
  "big_small_in_name": "遊び心",
  "bingo_area": "地理",
  "body_part_in_name": "遊び心",
  "chikugo_area": "地理",
  "chikuho_area": "地理",
  "chikuzen_area": "地理",
  "chugoku_mountain_basin": "地理",
  "chuyo_area": "地理",
  "color_in_name": "遊び心",
  "dosan_line": "交通",
  "four_plus_name": "遊び心",
  "fukuoka_metro": "地理",
  "hakubi_line": "交通",
  "hard_to_read_name": "遊び心",
  "hiroshima_metro": "地理",
  "honshu_bridge": "地理",
  "iyo_area": "地理",
  "izumo_area": "地理",
  "kagoshima_main_line": "交通",
  "kawa_in_name": "遊び心",
  "kitakyushu_area": "地理",
  "nanyo_area": "地理",
  "new_old_in_name": "遊び心",
  "nippo_main_line": "交通",
  "nishitetsu_line": "交通",
  "northern_kyushu": "地理",
  "okinawa_main_island": "地理",
  "okinawa_south_central": "地理",
  "osumi_area": "地理",
  "paper_industry_shikoku": "歴史・文化",
  "plant_in_name": "遊び心",
  "pref_name_in_city_name": "遊び心",
  "sakishima_islands": "地理",
  "same_name_other_pref": "遊び心",
  "sanin_area": "地理",
  "sanin_main_line": "交通",
  "sanuki_area": "地理",
  "sanyo_area": "地理",
  "sanyo_main_line": "交通",
  "satsuma_area": "地理",
  "sea_word_in_name": "遊び心",
  "setouchi_industrial": "地理",
  "shima_in_name": "遊び心",
  "southern_kyushu": "地理",
  "ta_in_name": "遊び心",
  "toyo_area": "地理",
  "yama_in_name": "遊び心",
  "yosan_line": "交通"
};
function categoryOf(k){ return TAG_GAME_CATEGORY[k] || "その他"; }

// 遊び心系だけは特別扱い: 候補が絞れてきた終盤の「決め手」として使いたいので、
// ジャンルバランスとは別に、序盤は出にくく・終盤(候補少数)は優先させる。
const HIGH_PRIORITY_KEYS = new Set([
  'tsunagari_mayu_police','tora_san_home','tsubasa_hometown','tv_station_area','sazae_family','hachiko_area','yose_hall','sailor_moon_stage','tokiwa_so','godzilla_head','rakugo_stage','sanma_famous','action_kamen','funasshi_famous','southern_seichi','yayoiken_seichi','kitanotakeshi'
]);
const FUN_ACTIVATION_POOL_SIZE = 10; // 候補がこの件数以下に絞れてから遊び心系を優先し始める
const HIGH_PRIORITY_BONUS = 45;
const HIGH_PRIORITY_EARLY_PENALTY = 15; // 序盤はむしろ少し出にくくしておく
const CATEGORY_REPEAT_PENALTY = 9; // 同じジャンルを1回出すたびに、次の選ばれやすさをこれだけ下げる

let askedCategoryCounts = {}; // ゲーム開始時にリセットする(startMode参照)

const DECISIVE_BOOST = 15;      // 「今答えれば一発で決着する」質問への優遇度
const DECISIVE_POOL_SIZE = 12;  // 候補がこの件数以下のときだけ、決め手質問を優遇する(遊び心の発動タイミングに近づける)

function priorityAdjust(k, diff, poolSize, isDecisive){
  if(HIGH_PRIORITY_KEYS.has(k)){
    return poolSize <= FUN_ACTIVATION_POOL_SIZE
      ? Math.max(0, diff - HIGH_PRIORITY_BONUS)
      : diff + HIGH_PRIORITY_EARLY_PENALTY;
  }
  // 候補が絞れてきた場面で「これに はい/いいえ が返ってきたら一発で決着する」質問は、
  // 同じジャンルが連続していても優先的に出す(杉並区のような、固有の目印タグ待ちで長引くケースを防ぐ)
  if(isDecisive && poolSize <= DECISIVE_POOL_SIZE){
    return Math.max(0, diff - DECISIVE_BOOST);
  }
  const cat = categoryOf(k);
  const repeatCount = askedCategoryCounts[cat] || 0;
  // 候補が絞れてきたら、ジャンルの偏りより「早く絞り込むこと」を優先する。
  // (戸田市のように特徴タグは多いのに、ジャンル分散のせいで決め手が後回しになって
  //  質問切れになるケースを防ぐ)
  const penaltyWeight = poolSize <= DECISIVE_POOL_SIZE ? 0.4 : 1;
  return diff + repeatCount * CATEGORY_REPEAT_PENALTY * penaltyWeight;
}

function entropyPick(){
  const topCities = topPoolCities();
  const unused = activeKeysForMode(currentMode).filter(k => !asked.includes(k));
  const candidateQuestions = [];

  for(const k of unused){
    const yes = topCities.filter(c=>c.tags[k]).length;
    const no = topCities.length - yes;
    if(yes===0 || no===0) continue; // 情報量ゼロの質問は除外
    candidateQuestions.push(k);
  }
  if(candidateQuestions.length === 0) return unused[0] || null;

  // 候補が多いときは計算量を抑えるため、まず1手先の診断で上位グループに絞り込む
  const prelim = candidateQuestions.map(k=>{
    const yes = topCities.filter(c=>c.tags[k]).length;
    const no = topCities.length - yes;
    // 「yesが1件だけ」のような質問は、それが今の対象なら一発で決め手になる(飛び級)ので、
    // 候補が絞れてきた場面では積極的に優先する。
    const isDecisive = (yes === 1 || no === 1);
    return { k, diff: priorityAdjust(k, Math.abs(yes - no), topCities.length, isDecisive) };
  }).sort((a,b)=> a.diff - b.diff);
  const shortlist = prelim.slice(0, Math.min(12, prelim.length)).map(s=>s.k);

  const scored = shortlist.map(k=>{
    const yesGroup = topCities.filter(c=>c.tags[k]);
    const noGroup = topCities.filter(c=>!c.tags[k]);
    const usedAfter = [...asked, k];
    const isDecisive = (yesGroup.length === 1 || noGroup.length === 1);
    // 2手目でそれぞれの枝を最も良く絞り込めた場合の「最悪残存数」を見る
    const worstYes = bestSplitDiff(yesGroup, usedAfter);
    const worstNo = bestSplitDiff(noGroup, usedAfter);
    return { k, minimax: priorityAdjust(k, Math.max(worstYes, worstNo), topCities.length, isDecisive) };
  });

  scored.sort((a, b) => a.minimax - b.minimax);
  const best = scored[0].minimax;
  // 僅差の質問はまとめてプールし、ランダムに選ぶ(毎回同じ質問順に固定されないようにする)
  const pool = scored.filter(s => s.minimax <= best + 1).map(s => s.k);

  return shuffle(pool)[0];
}

// おらマチ オリジナルマスコット「おらっち」(角/触角なし・まんまる目・ω口)
const MASCOT_IMAGES = {
  normal: 'mascot-normal.png',
  think:  'mascot-think.png',
  happy:  'mascot-happy.png',
  sad:    'mascot-sad.png'
};
function mascotSVG(mood){
  const src = MASCOT_IMAGES[mood] || MASCOT_IMAGES.normal;
  return `<img class="mascot" src="${src}" alt="おらっち" draggable="false">`;
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
        <span class="mode-desc">日本の全ての市、および新潟県の町村と東京23区から当てます</span>
      </button>

      <button class="mode-btn mode-niigata" onclick="startMode('niigata')">
        <span class="mode-title">新潟県版</span>
        <span class="mode-desc">新潟県の全ての市町村から当てます</span>
        <span class="mode-count">現在 ${niigataCount} 自治体</span>
      </button>

      <button class="mode-btn mode-tokyo" onclick="startMode('tokyo')">
        <span class="mode-title">東京都版</span>
        <span class="mode-desc">東京23区と、全ての多摩地域の市から当てます</span>
        <span class="mode-count">現在 ${tokyoCount} 自治体</span>
      </button>

      <div class="mode-sub-head">地方版であそぶ</div>
      <div class="mode-grid">
        ${['hokkaido','tohoku','kanto','chubu','kinki','chugoku','shikoku','kyushu'].map(m => `
          <button class="mode-btn mode-btn-small" onclick="startMode('${m}')">
            <span class="mode-title">${MODES[m].label}</span>
            <span class="mode-count">${getModeCities(m).length} 自治体</span>
          </button>`).join('')}
      </div>
    </div>
    ${renderStatsBlock()}
  `;

  footEl.textContent = `対応エリア 全国全ての市と東京23区 ・ 新潟県 全市町村`;
}

function startMode(mode){
  currentMode = mode;
  const modeCities = getModeCities(mode);
  scorePool = modeCities.map(city => ({ city, score: 0 }));
  excludedNames = new Set();
  guessAttempts = 0;
  asked = [];
  questionCount = 0;
  history = [];
  forcedNextKey = null;
  askedCategoryCounts = {};

  if(modeCities.length === 0){
    stage.innerHTML = `
      <div class="mascot-wrap"><div class="shake">${mascotSVG('sad')}</div></div>
      <div class="bubble"><span class="icon">🙏</span>このモードのデータがまだありません</div>
      <button class="again" onclick="renderOpening()">モード選択へ戻る</button>
    `;
    return;
  }

  footEl.textContent = `${MODES[mode].label} ・ 対応 ${modeCities.length}自治体`;
  renderQuestion();
}
let forcedNextKey = null; // 「戻る」で復元したときに、同じ質問を出すための指定

function renderQuestion(){
  renderStamps();
  const key = forcedNextKey || entropyPick();
  forcedNextKey = null;

  if(!key || questionCount >= HARD_MAX_Q || sortedPool().length <= 1){
    return renderGuess();
  }

  // このジャンルが実際に出題されたことを記録する前の状態も履歴に残す(戻るボタン用)
  const categorySnapshotBefore = { ...askedCategoryCounts };

  // このジャンルが実際に出題されたことを記録(次以降の選ばれやすさ調整に使う)
  const cat = categoryOf(key);
  askedCategoryCounts[cat] = (askedCategoryCounts[cat] || 0) + 1;

  // このタイミング(まだこの質問を聞く前)の状態と、聞く質問のキーを履歴に保存する
  history.push({
    scorePool: scorePool.map(e => ({ city: e.city, score: e.score })),
    excludedNames: new Set(excludedNames),
    asked: [...asked],
    questionCount: questionCount,
    askedCategoryCounts: categorySnapshotBefore,
    key: key
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
    <div class="count-line">質問 ${questionCount}問目</div>
    <div class="choices">
      <button class="btn btn-yes" onclick="answer('${key}', true)">はい</button>
      <button class="btn btn-no" onclick="answer('${key}', false)">いいえ</button>
      <button class="btn btn-maybe-yes" onclick="answer('${key}', true, PARTIAL_WEIGHT)">たぶんそう・部分的にそう</button>
      <button class="btn btn-maybe-no" onclick="answer('${key}', false, PARTIAL_WEIGHT)">たぶんいいえ・そうでもない</button>
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
  scorePool = prev.scorePool;
  excludedNames = prev.excludedNames;
  asked = prev.asked;
  questionCount = prev.questionCount;
  askedCategoryCounts = prev.askedCategoryCounts || {};
  forcedNextKey = prev.key; // 同じ質問を再表示する
  renderQuestion();
}

function answer(key, val, weight){
  weight = weight == null ? 1 : weight;

  if(val === true && weight >= 1){
    // このタグがtrueなのが、まだ候補に残っている自治体の中でちょうど1つだけなら、
    // 「はい」(確信度100%)と答えた時点でそれが正解だと確定できるので、飛び級で正解画面まで進める。
    // 「たぶんそう」(部分的な回答)のときは確信度が低いので、この飛び級判定はしない。
    const uniqueMatches = scorePool.filter(e => !excludedNames.has(e.city.name) && e.city.tags[key] === true);
    if(uniqueMatches.length === 1){
      questionCount++;
      return correct(true, uniqueMatches[0].city);
    }
  }

  if(val !== null){
    // はい/いいえで完全に候補を消すのではなく、一致したら加点・不一致なら減点する。
    // 「たぶんそう/たぶんいいえ」はweightを0.5にして、加減点の強さを半分にする。
    scorePool.forEach(e => {
      if(e.city.tags[key] === val) e.score += MATCH_BONUS * weight;
      else e.score -= MISMATCH_PENALTY * weight;
    });
  }

  if(val === true && weight >= 1 && EXCLUSIVE_MAP[key]){
    // 「西武線がある?」に確信を持って「はい」と答えたなら、絶対に両立しない「東急線がある?」は
    // 実際には聞かずに「いいえ」だったことにして、次の質問をもっと有効に使う。
    EXCLUSIVE_MAP[key].forEach(otherKey => {
      if(asked.includes(otherKey)) return;
      asked.push(otherKey);
      scorePool.forEach(e => {
        if(e.city.tags[otherKey] === false) e.score += MATCH_BONUS;
        else e.score -= MISMATCH_PENALTY;
      });
    });
  }

  const sorted = sortedPool();
  const top1 = sorted[0];
  const top2 = sorted[1];
  const margin = top1 && top2 ? top1.score - top2.score : Infinity;

  // 自信が持てたら、候補が複数残っていても早めに答えを出す(本家アキネイター方式)
  if(questionCount >= MIN_Q_BEFORE_EARLY_GUESS && margin >= CONFIDENCE_MARGIN){
    return renderGuess();
  }

  renderQuestion();
}

function renderGuess(){
  const sorted = sortedPool();
  const guess = sorted[0] ? sorted[0].city : CITIES[0];
  const isRetry = guessAttempts > 0;
  const bubbleText = isRetry ? 'うーん、もしかしてこっちかも?' : 'もしかして、この街では?';
  stage.innerHTML = `
    <div class="mascot-wrap"><div class="pop">${mascotSVG('normal')}</div></div>
    <div class="bubble"><span class="icon">💭</span>${bubbleText}</div>
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

// 1ゲーム終了ごと(正解 or 諦め)にGoogleスプレッドシートへ結果を送る。
// 「最近当てられたマチ」「プレイ回数」の集計に使われる。個人情報は含まない。
function sendGameResult(result, city){
  if(!CORRECTIONS_ENDPOINT_URL) return;
  try{
    fetch(CORRECTIONS_ENDPOINT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        type: 'result',
        result: result, // 'success' または 'giveup'
        cityName: city ? city.name : '',
        pref: city ? city.pref : '',
        questionCount: questionCount,
        timestamp: new Date().toISOString()
      })
    }).catch(err => {
      console.warn('おらマチ: ゲーム結果の送信に失敗しました', err);
    });
  }catch(e){
    console.warn('おらマチ: ゲーム結果送信処理でエラー', e);
  }
}

// トップページ表示用の統計(最近当てられたマチ・プレイ回数)。
// 未設定/取得失敗時はnullのままにして、表示側で「非表示」にする。
let liveStats = null;

async function fetchLiveStats(){
  if(!CORRECTIONS_ENDPOINT_URL) return;
  try{
    const res = await fetch(CORRECTIONS_ENDPOINT_URL, { method: 'GET' });
    if(!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    liveStats = data;
    if(typeof renderOpening === 'function' && stage && stage.innerHTML.includes('どのモードであそぶ')){
      renderOpening(); // トップページ表示中なら反映のため再描画
    }
  }catch(e){
    console.warn('おらマチ: 統計の取得に失敗しました', e);
  }
}

function renderStatsBlock(){
  if(!liveStats) return '';
  const recent = (liveStats.recentSuccesses || []).slice(0, 10);
  const recentHtml = recent.length
    ? `<div class="recent-line">🎉 最近当てられたマチ: ${recent.join('、')}</div>`
    : '';
  const countHtml = (liveStats.totalPlays != null)
    ? `<div class="count-stats">これまで <b>${liveStats.totalPlays}</b> 回プレイ ・ 今日は <b>${liveStats.todayPlays || 0}</b> 回</div>`
    : '';
  if(!recentHtml && !countHtml) return '';
  return `<div class="stats-block-top">${countHtml}${recentHtml}</div>`;
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

  const guess = (sortedPool()[0] || {}).city || CITIES[0];
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

function correct(isRight, overrideCity){
  const sorted = sortedPool();
  const guess = overrideCity || (sorted[0] ? sorted[0].city : CITIES[0]);

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
      <button class="share-btn" onclick="shareToX((sortedPool()[0]||{}).city || CITIES[0])">
        <svg class="x-icon" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        結果をシェア
      </button>
      <button class="again" onclick="restart()">もう一度あそぶ</button>
    `;
    sendGameResult('success', guess);
    return;
  }

  // 外れた場合: すぐに諦めず、次点の候補で何度か聞き直してから最終的に諦める
  excludedNames.add(guess.name);
  guessAttempts++;
  const remaining = sortedPool();

  if(guessAttempts < MAX_WRONG_ATTEMPTS && remaining.length > 0){
    return renderGuess();
  }

  stage.innerHTML = `
    <div class="mascot-wrap"><div class="shake">${mascotSVG('sad')}</div></div>
    <div class="bubble"><span class="icon">🙏</span>まだまだ修行が足りないようです…</div>
    <div class="fact">現在のデータ範囲(${CITIES.length}市)では絞り込みきれませんでした。データが増えるともっと当たりやすくなります。</div>
    ${renderCorrectionForm()}
    <button class="again" onclick="restart()">もう一度あそぶ</button>
  `;
  sendGameResult('giveup', guess);
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
    computeExclusiveMap(); // 路線図などから「絶対に両立しない」組み合わせを学習する
    footEl.textContent = `対応エリア ${CITIES.length}市 ・ データはcities.jsonから読み込み`;
    renderOpening();
    fetchLiveStats(); // 「最近当てられたマチ」「プレイ回数」を非同期で取得(失敗しても無視)
  }catch(e){
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
