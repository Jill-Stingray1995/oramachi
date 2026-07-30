const KEYS = ['hitachi_seaside_park','tsuchiura_hanabi','koga_kubo','toride_geidai','shimodate_gion','kamisu_gallery','tsukumai','ushiku_daibutsu','kashima_jingu','kokuo_jinja','warp_station_edo','ryujin_ohashi','ayumizaki_park','melon_hokota','ibaraki_airport','makabe_district','edosaki_kabocha','nishishioko_butai','itako_ayame','oyama_hyojo','uzumagawa_kura','ashikaga_gakko','shiobara_onsen','nikko_toshogu','kyuroku_kan','yamaage_matsuri','kanto_shinetsu_tsunagu','tajima_yahei','kiryu_nokogiri','tsutsujigaoka_bunbuku','ikaho_onsen','usui_meganebashi','tomihiro_museum','fukiware_no_taki','railway_museum','toki_no_kane','koku_kinen_park','misato_junction','toda_boat','shibusawa_eiichi','konosu_hina','first_outlet','jumbo_koinobori','higashimatsuyama_yakitori','seitenkyu','riken_hq','hanawa_hokiichi','sunaori_amagoi','sakitama_zerifry','gongendo_sakura','hitachidai_stadium','suguyaru_ka','nakayama_hokekyoji','kominato_railway','yatsu_higata','tokyo_disney','rekihaku','kikkoman_hq','abiko_ekisoba','nomizo_no_taki','tokyo_german_village','inubosaki','sawara_district','shirasato_kaigan','sunosaki_lighthouse','mother_farm_nokogiri','boshu_biwa','ohara_hadaka','kamogawa_seaworld','katsuura_tantanmen','oi_keibajo','tokyo_daibutsu','showa_kinen_park','kichijoji_harmonica','takahata_hijikata','shimura_ken','tama_rokuto','ghibli_museum','sanrio_puroland','mitakesan','edo_tokyo_tatemono','kurume_twin','akishima_kujira','tamako_yamato','yomiuri_land','second_smallest_city','hitotsubashi_univ','jaxa_isas','shirokoro_horumon','izumi_no_mori_awaodori','enoshima','omote_tanzawa','ebina_sa','oyama_afuri','jogashima_maguro','daiyuzan_kintaro','okutadami_dam','hokuetsu_kyoto','knit_gosen','kurokawa_yuden','niigata_smallest','kitsune_yomeiri','ryokan_birthplace','sakyu_momo','taishitamonja','gomadoyama_ajisai','ryugakubo','yahiko_jinja','fuji_rock','tama_monorail_extension',
  'banei_keiba','ebetsu_renga','kitami_hakka','shikotsuko_futoko','hamanasu_no_oka','northernmost_city','whaling','enclave_municipality','honshu_northernmost','honshu_easternmost','honshu_westernmost','honshu_southernmost','japan_northernmost','japan_southernmost','japan_easternmost','japan_westernmost','shio_kazunoko','canadian_world','garinko_go','nosappu_misaki','hirosaki_tenshu','hasshoku_center','misawa_flight','ishiwari_zakura','mutsu_kokufu','kanto_matsuri','kamo_kurage','uesugi_jinja','jionji','shinjo_matsuri','saito_mokichi','hanamiyama','nanko_park',
  'nakoku_no_oka','miike_tanko','sakurai_futamigaura','ushikubi_sueki','munakata_hetsugu','goshogatani_kogoishi','funabaru_kofun','hikari_no_michi','tanabata_jinja','nogata_meteorite','yanagawa_kudari','yame_gyokuro','sakuta_no_unade','tagawa_sekitan','hishino_suisha','oda_hiroki_museum','kiyomizudera_teien','toyota_kyushu','chikugo_yoshii','karatsu_kunchi','tosu_junction','okawachiyama','takeo_onsen_romon','ogi_yokan','kunenan','yutoku_inari','ureshino_bihada','isahaya_meganebashi','nagasaki_airport_omura','koi_no_oyogu_machi','hara_castle','unzen_jigoku','fukuejima_onidake','ajifry_seichi','tsushima_border','mugi_shochu_iki','nanatsugama_shonyudo','hirado_oranda','igusa_yatsushiro','sakitsu_shuraku','takaba_countrypark','hiryu_no_kane','misumi_nishiko','mandako_greenland','aoi_aso_jinja','kusasenrigahama','takasakiyama_saru','fukuzawa_karaage','bungo_futamigaura','usa_jingu','usuki_magaibutsu','harajiri_no_taki','kinrinko_yufuin','oka_castle','showa_no_machi','sandwich_jokamachi','futagoji','tsukumi_sakura_maguro','sekinoo_taki','nobeoka_ishigaki','umagase_cross','saitobaru_kofun','toimisaki_uma','ebino_kogen','shirokuma_tenmonkan','shiobitashi_onsen','kokuritsu_taiiku_univ','kamou_no_okusu','tsuru_ettochi','kinsakubaru_keihan','satsumayaki_miyama','bonotsu_ganjin','mizonokuchi_doketsu','chiran_bukeyashiki','daguri_misaki','makurazaki_station','bontan_shika','teppokan','satsuma_ryugakusei','koza_eisa','kaichu_doro_katsuren','okinawa_convention','heiwa_kinen_himeyuri','senagajima_umikaji','kabira_bay','irabu_ohashi','sefa_utaki',
  'kaike_onsen','kurayoshi_shirakabe','sesshu_teien','iwami_ginzan','gonokawa_kako','nihon_sanmeien','horumon_udon','kinojo','bitchu_matsuyama','saijo_sake','mihara_tako','kiri_no_umi','hiroshima_westmost','anno_hideaki','tokuyama_combinat','kintaikyo','cement_glass','led_valley','naruto_uzushio','kincho_tanuki','awa_dochu','mima_udatsu','iya_kazurabashi','marugame_uchiwa','chichibugahama','zenigata_sunae','setoohashi_shikoku','kukai_birthplace','tebukuro_industry','uchinuki','garyu_sanso','kezuribushi','yawatahama_champon','seiyo_geopark','botchan_theater','kochi_ryoma_airport','chinkabashi','noichi_zoo','muroto_geopark','nabeyaki_ramen','daruma_yuhi','ashizuri_misaki','tosabushi','yanase_museum',
  'nagashima_nabana','suzuka_circuit','magose_hinoki','sekijuku','toba_aquarium','onigajo_hananoiwaya','fujiwaradake_bairin','parque_ago','iga_ninja_basho','kurokabe_chikubu','hachimanbori','biwako_ohashi_sagawa','jra_training','konan_sanzan','metasequoia_shirahige','gokasho_eigenji','maizuru_akarenga','byodoin_uji','iwashimizu_nagarebashi','toyonaka_kyujo','cupnoodle_museum','taiyo_no_to','mofu_izumiotsu','imashirozuka_haniwa','mizuma_nishikinohama','moriguchi_daikon','hikari_no_kyokai','kansai_airport_city','pl_tower','naritasan_osaka','kanshinji_kongoji','nunose_takenouchi','nozaki_mairi','ikegami_sone','minoh_katsuoji','kashiwara_budo','ojin_ryo_wine','panasonic_hq','torikai_depot','takashinohama','fujiidera_kannon','sennan_rosegarden','shijonawate_masatsura','hoshi_no_buranko','sayamaike','pichipichi_beach','sumoto_castle_onsen','ashiya_yodoko','itami_sake_airport','katsumeshi_kakurinji','tada_jinja','sanda_hitohaku','kasai_globe_clock','izanagi_yumebutai','tojoko_omocha','tatsuno_shoyu_somen','takada_sakura_jinaimachi','kingyo_yamatokoriyama','tenri_shukyo_toshi','kashihara_jingu','miwa_somen','gojo_kaki_shinmachi','katsuragi_kodo','ikoma_cablecar','dontsurubo','taimadera_sumo','uda_seiyaku','kuroe_shikki','koyasan_gateway_pile','arida_mikan','shortest_private_line','kumano_hongu_benkei','kumano_hayatama_gotobiki','kokawadera_momo',
  'fujiko_f_birthplace','shinkiro_maibotsurin','fujiko_a_buri','hotaruika_museum','tulip_fair','merhen_kenchiku','gokayama_gassho','kaiwomaru_bridge','wakura_notojima','komatsu_origin','senmaida_shikki','rokugozaki','kaga_onsenkyo','ufo_museum','shirayama_tedori','matsui_museum','kehi_jindo','miketsukuni_saba','echizen_ono_castle','awara_onsen','fujiq_highland','fuefuki_fruit_park','shinpu_shichirigan','katakana_city_name','kiyosato_hakushu','shingen_zutsumi','isawa_onsen','katsunuma_budo','name_same_as_route','kamikochi','sanada_bessho','okaya_silk','ningyogeki_tenryukyo','suzaka_garyu','kaikoen_toson','takato_sakura','sauce_katsudon','shinpei_ipponki','alpen_route_nagano','kamakura_nanohana','naraijuku_wine','farthest_from_sea','obasute_togura','unnojuku_yunomaru','wasabi_farm','nagaragawa_ukai','okuno_hosomichi_musubi','hida_furuimachi','mosaic_tile_museum','magome_kurikinton','udatsu_mino','kaseki_museum','iwamura_akechi','otajuku_satoyama','toki_outlet','aerospace_museum','rose_garden_akechi','fuyu_kaki_origin','setogawa_shirakabe','usuzumi_zakura','gujo_odori','nihon_sanmeisen','kisosansen_wajyu','atami_moa','genbegawa_rakujuen','sengen_taisha','omuroyama_jogasaki','horaibashi_sl','gakunan_tagonoura','yaizu_katsuo','kakegawa_castle','soccer_town_fujieda','gotemba_outlet','ecopa_hattasan','shimoda_port','fuji_safari','arai_sekisho','shuzenji_toi','hamaoka_lighthouse','senkagawa_fukamushi','nirayama_hansharo','sagara_oil_airport','masumida_keori','toyokawa_inari','tsushima_tenno','kokonoe_mirin','toyota_origin_kariya','toyota_hq','nihon_denmark','matcha_sakushima','takeshima_resort','centrair_manekineko','mandaraji_fuji','komaki_castle','konomiya_hadaka','nagashino_horaiji','juraku_daibutsu','aichi_kenko_mori','shinmaiko_okada','kakitsubata_chiryu','owariasahi_tower','okehazama','aichi_bokujo','irago_longbeach','sendohira_renkon','kiyosu_castle','showa_nichijo','kingyo_yatomi','miyoshi_canoe','shippoyaki','ghibli_linimo',
  'shinkansen','coastal','designated','festival','snow_festival','worldheritage','snow','basin','airport','noodle','mascot_famous',
  'nihonkai','taiheiyo','setonaikai','famous_mountain','big_river','big_bay','hot_40c','active_volcano','uchibo','sotobo','noto_area','subway','onsen','sake','famous_hanabi','castle_town','port_town','rice_region',
  'kana_name','kansai_dialect','ryukyu_dialect','is_town_village','is_tokyo_ward',
  'ruins','lakeside','shrine_temple','bakumatsu_port','sumo_basho','jleague','npb',
  'former_capital','grid_streets','kokuho_building','twelve_castles','sengoku_warlord','tram','famous_garden',
  'car_town','private_railway','monorail','remote_island','mining_heritage','night_view','war_damage',
  'ferris_wheel','theme_park','zoo','aquarium','brand_beef','kintetsu','kanji_one_char',
  'chinatown','sand_dunes','imperial_university','famous_tower','famous_market','exotic_port','dome_stadium','tea_region',
  'gokaido_shukuba','pottery_famous','traditional_craft','horse_racing','famous_horse_breeding','literary_figure','kitanotakeshi','musashino_line','ekimei_chigau',
  'prefectural_capital','borders_other_pref','formed_after_2000',
  'national_university','expressway_junction','hiragana_name','hiragana_long','direction_in_name','old_province_name',
  'public_racing_venue','national_government_park','film_city','shinsengumi','shonan_area','white_mirin_origin',
  'joetsu_region','chuetsu_region','kaetsu_region','joetsu_shinkansen_station','hokuriku_shinkansen_station',
  'hokkaido_shinkansen_station','tohoku_shinkansen_station','tokaido_shinkansen_station','sanyo_shinkansen_station','kyushu_shinkansen_station','nishikyushu_shinkansen_station',
  'yamagata_shinkansen_station','akita_shinkansen_station',
  'is_village','shinano_river','agano_river','uono_river',
  'borders_yamagata','borders_fukushima','borders_gunma','borders_nagano','borders_toyama',
  'todai_campus','waseda_campus','keio_campus','meiji_campus','rikkyo_campus','chuo_campus','tus_campus','imperial_palace','ginza','tokyo_tower_ward','tokyo_dome_ward','sensoji','skytree_ward','toyosu_market','haneda_ward','shibamata_taishakuten','kasai_park','broadway_nakano','koenji_area','jiyugaoka','shakujii_park','odakyu_line','keio_inokashira_line','tokyu_line','keikyu_line','seibu_line','tobu_main_station','tobu_tojo_station','utsunomiya_station','takasaki_line_station','keisei_line','tsukuba_express','rinkai_line','yurikamome','toden_arakawa','nippori_toneri','tokyo_bay','tama_river','sumida_river','arakawa_river','edogawa_river','meguro_river','shakujii_river','borders_kanagawa','borders_saitama','borders_chiba','yamanote_line','keihintohoku_line','chuo_rapid','chuo_sobu','joban_line','saikyo_line','ueno_station','akabane_station','nippori_station','tsunagari_mayu_police','tv_station_area','sazae_family','hachiko_area','yose_hall','sailor_moon_stage','godzilla_head','rakugo_stage','sanma_famous',
  'monzen','bedtown','silk_heritage','silk_textile','moka_sl_line','kururi_line','watarase_line','oito_line','shinano_railway','echizen_railway','nagaragawa_railway','yoro_railway','sunzu_line','aikan_railway','kurobe_torokko','dinosaur_museum','echizen_washi_hamono','tojinbo','jomon_venus','rokkoyo','mino_ware','hamono_famous','skijyou','geopark','nuclearpowerplant','monozukuri','chukakushi','tokureishi',
  'douou_area','doutou_area','dohoku_area','sapporo_metro','ishikari_plain','historical_port_hokkaido','industrial_port_hokkaido','hakodate_honsen','ishikari_river',
  'tsugaru_area','sendai_metro','kitakami_basin','shonai_area','hamadori_area','nakadori_area','aizu_area','sanriku_area',
  'north_kanto','tama_area','tokatsu_area','ryomo_area','tone_river_area','sotetsu_line',
  'hokuriku_three_pref','koshin_area','tokai_area','owari_area','mikawa_area','izu_area','suruga_area','totomi_area','hida_area','mino_area','hokushin_area','toshin_area','chushin_area','nanshin_area',
  'meitetsu_line',
  'keihanshin_area','hokusetsu_area','kawachi_area','senshu_area','hanshin_area','harima_area','tajima_area','tamba_area','kyoto_north','nara_basin','kii_peninsula','nankai_line',
  'glasses_industry','towel_industry','musical_instruments','gold_leaf','denim_industry','pearl_farming','shipbuilding','furniture_industry','washi_famous','pharmaceutical_industry','fireworks_industry','stone_industry',
  'soy_sauce_famous','vinegar_famous','miso_famous','gyoza_famous','yakisoba_famous','udon_famous','soba_famous','ramen_famous','castella_famous','kamaboko_famous','lacquerware_famous',
  'ancient_provincial_capital','kokubunji_site','traditional_buildings_district','little_kyoto','giant_buddha','sea_torii','deer_in_city','gassho_zukuri',
  'ferry_available','no_railway_station','shikoku_pilgrimage','olympic_venue','famous_battlefield','kitamaebune_port','famous_fish_catch',
  'kaikyo_machi','gakuto','hula_girl','kannon_zo','koedo','imono_kupola','aeon_laketown','sogo_dept','isetan_dept','mitsukoshi_dept','daimaru_dept','matsuzakaya_dept','funasshi_famous','takao_mountain','curry_famous','anime_seichi','number_in_name','kigyo_joukamachi','hankyu_line','yayoiken_seichi','hirakata_park','keihan_line','kawachi_ondo','rugby_machi','kougyou_toshi','hyoujun_jigosen','koushien','bikan_chiku','gunkou_machi','seitetsu_kouro','fugu_famous','tire_famous','hamburger_famous','kenkyu_gakuen_toshi','action_kamen','senbei_famous','tanabata_famous','uirou_famous','southern_seichi','b_kyu_gourmet','beigun_kichi','shinkai_gyo','saboten_machi','combinat_yakei','danjiri_famous','onaji_ookawa','kageki_dan',
  'animal_in_name','ariake_coast','big_small_in_name','bingo_area','body_part_in_name','chikugo_area','chikuho_area','chikuzen_area','chugoku_mountain_basin','chuyo_area','color_in_name','dosan_line','four_plus_name','fukuoka_metro','hakubi_line','hard_to_read_name','hiroshima_metro','honshu_bridge','izumo_area','kagoshima_main_line','kawa_in_name','kitakyushu_area','nanyo_area','new_old_in_name','nippo_main_line','nishitetsu_line','northern_kyushu','okinawa_main_island','okinawa_south_central','osumi_area','paper_industry_shikoku','plant_in_name','pref_name_in_city_name','sakishima_islands','same_name_other_pref','sanin_area','sanin_main_line','sanyo_area','sanyo_main_line','satsuma_area','sea_word_in_name','setouchi_industrial','shima_in_name','southern_kyushu','ta_in_name','toyo_area','yama_in_name','yosan_line',
  'ic_doo','ic_sasson','ic_shiribeshi','ic_doto',
  'ic_tohoku','ic_hachinohe','ic_aomori','ic_kamaishi','ic_akita','ic_yamagata','ic_tohoku_chuo','ic_nihonkai_tohoku','ic_banetsu','ic_joban',
  'ic_kanetsu','ic_joshinetsu','ic_hokukanto','ic_higashikanto','ic_tokyo_gaikan','ic_tateyama','ic_shin_kuko',
  'ic_chuo','ic_nagano','ic_hokuriku','ic_tokai_hokuriku','ic_tomei','ic_shin_tomei',
  'ic_meishin','ic_shin_meishin','ic_tomeihan','ic_isewangan','ic_ise','ic_kisei','ic_meinikan',
  'ic_kinki','ic_hanwa','ic_nishimeihan','ic_maizuru_wakasa','ic_kansai_kuko',
  'ic_chugoku','ic_sanyo','ic_tottori','ic_yonago','ic_okayama','ic_hamada','ic_matsue','ic_onomichi','ic_hiroshima','ic_harima',
  'ic_takamatsu','ic_tokushima','ic_matsuyama','ic_kochi',
  'ic_kyushu','ic_higashi_kyushu','ic_nagasaki','ic_oita','ic_miyazaki','ic_okinawa',
  'koshien_champion','sumo_yokozuna_ozeki','famous_cape',
  'yamata_no_orochi','hibagon','mori_motonari','hiruzen_highland','miyamoto_musashi_station','akiyoshidai','mizuki_shigeru_road','yasugi_bushi','gonokawa','donticchi_fish','shokasonjuku','motonosumi_shrine','bizen_ware','osafune_sword_museum','naoshima_gateway','horseshoe_crab_museum','astronomy_city','sunameri','naval_academy','goldfish_lantern','ito_hirobumi_birthplace','train_factory','stork','hyonosen','takeda_castle','tamba_dinosaur','black_soybeans','japan_navel','miki_hardware','balloon_city','saga_balloon_festa','sake_birthplace','peron_festival','ako_ronin','awaji_puppet_theater','nijigen_no_mori','akechi_mitsuhide_castle','gunze_birthplace','nihon_sankei','singing_sand','miyama_thatched_village','hozugawa_boat_ride','doushisha','nagaoka_tenmangu','joruriji','jrosyu_ume','ritsumeikan','pm_birthplace',
  'name_has_betsu','hokkaido_greenland','famous_prison','yakitori_famous_bibai','coal_mine_shaft','drift_ice','suffolk_sheep','ammonite_fossil','matsuo_jingisukan','sweet_road','least_populous_city','urokodango','bear_park','fighters_farm',
  
  'bijin_town','yoshi_ikuzo','oirase','osorezan','shakoki_dogu','seibien','jodogahama','goishi_coast','miyazawa_kenji','tensho_chi','amber_kuji','tono_monogatari','geibikei','ipponmatsu','ohtani_shohei','zashiki_warashi','appi_kogen','ishinomori','chagu_chagu','shiogama_shrine','fukahire','shiroishi_umen','sendai_airport','jaxa_kakuda','takekoma_shrine','meiji_mura','kano_eiko','blue_impulse','naruko_onsen','town_to_city_2016',
  'basketball_town','kamakura_yokote','akita_inu_hachiko','namahage','inaniwa_udon','oyu_stone_circle','yuri_kogen_railway','blumen_akita','odate_noshiro_airport','tdk_town','kakunodate_tazawako','sankyo_soko','higashizawa_rose','ayame_park','hanagasa_tendo','ginzan_onsen','kumano_taisha','tsuburaya_eiji','matsukawaura','kiku_ningyo_nihonmatsu','abukumado','kacchu_keiba','anpogaki','william_park','natural_gas_town',
  'region_hokkaido','region_tohoku','region_kanto','region_chubu','region_kinki','region_chugoku','region_shikoku','region_kyushu',
  'pref_hokkaido','pref_aomori','pref_iwate','pref_miyagi','pref_akita','pref_yamagata','pref_fukushima','pref_ibaraki','pref_tochigi','pref_gunma','pref_saitama','pref_chiba','pref_tokyo','pref_kanagawa','pref_niigata','pref_toyama','pref_ishikawa','pref_fukui','pref_yamanashi','pref_nagano','pref_gifu','pref_shizuoka','pref_aichi','pref_mie','pref_shiga','pref_kyoto','pref_osaka','pref_hyogo','pref_nara','pref_wakayama','pref_tottori','pref_shimane','pref_okayama','pref_hiroshima','pref_yamaguchi','pref_tokushima','pref_kagawa','pref_ehime','pref_kochi','pref_fukuoka','pref_saga','pref_nagasaki','pref_kumamoto','pref_oita','pref_miyazaki','pref_kagoshima','pref_okinawa',
  'kitasubaru','kita_no_kuni','kita_no_shonan','shizumine','shimotsuma_movie','hitachi_kokufu','toyoda_castle','moriya_junction','namegata_farm','hananuki','happogahara','kanuma_tsuchi','nasu_yoichi','jichi_medical','bihada_onsen','moomin_park','ageo_sodou','iroha_toi','okegawa_benibana','ishito_zakura','kinchakuda','heirinji','lucky_star','johnson_town','saika_matsuri','mizuko_kaizuka','smallest_city','yashio_hanamomo','yoshikawa_namazu','shiraoka_nashi','kurohama_kaizuka','hanyu_yurugp','inzai_datacenter','kamagaya_farm','iioka_cape','tomisato_suika','sanbu_sugi','keisei_rose','aqualine_gate','yotsukaido_name','onari_kaido','yachimata_peanuts','nashibou','soza_ueki','blueberry_origin','kishozeisei_center','summerland','hamura_zeki','baseside_street','zama_himawari','zushi_marina','ayase_no_station','nono_odoriji','linear_center','shakou_elevator','saruhashi','enbaragawa','sanshu_kawara','nonbori_arai','akame_taki','oiwayama_dotaku','tokaido_nakasendo','koka_ninja','take_no_michi','aioi_matsu','banshu_soroban_ono','katsuragi_tsutsuji','matabei_zakura','kishu_herazao','negoroji','kokusan_denim','konrei_kagu','nora_dokei','onga_pump','koinoki','hiyoko','kubote_san','taku_seibyo','minamata_museum','kikuchi_keikoku','mikoshiki_coast','amakusa_bridges','ikoma_kogen','senbon_icho','sogi_no_taki','orion_beer','inami_kaeru_bridge','tsuruta_steuben','jupialand_shibazakura','licca_castle','iitate_madeikan','ogata_reclamation','ora_mirai_tower','kamisato_sa','mikurajima_dolphin','aogashima_double_caldera','oi_biotopia','nanko_ume','ebikani_aquarium','misato_blueberry','circuit','dam_lake','meisui_hyakusen','least_populous_village','tanada_hyakusen','karst','ramsar','national_park','waterfall_hyakusen','castle_hyakumeijo','winery','pottery_ware','funaoka_sakura','omocha_no_machi','tanagura_kamegajo','neba_sugi'];

const QUESTIONS = {
  hitachi_seaside_park: {text:'ネモフィラで有名な国営ひたち海浜公園がある？', icon:'💐'},
  tsuchiura_hanabi: {text:'日本三大花火大会の一つに数えられる全国花火競技大会が開かれる？', icon:'🎆'},
  koga_kubo: {text:'室町時代に鎌倉公方の流れをくむ公方が拠点を置いた？', icon:'🏯'},
  toride_geidai: {text:'利根川沿いにあり、競輪場と東京藝術大学のキャンパスがある？', icon:'🎨'},
  shimodate_gion: {text:'日本最大級の大神輿が出る下館祇園まつりがある？', icon:'🏮'},
  kamisu_gallery: {text:'海岸沿いの長い防波堤に壁画が並ぶ「1000人画廊」がある？', icon:'🎨'},
  tsukumai: {text:'高さ約14メートルの柱上で曲芸を行う伝統行事「撞舞」がある？', icon:'🎪'},
  ushiku_daibutsu: {text:'世界最大の青銅製大仏がある？', icon:'🗿'},
  kashima_jingu: {text:'東国三社の一つ、鹿島神宮がある？', icon:'⛩️'},
  kokuo_jinja: {text:'平将門を祭る國王神社がある？', icon:'⛩️'},
  warp_station_edo: {text:'時代劇の野外撮影施設「ワープステーション江戸」がある？', icon:'🎬'},
  ryujin_ohashi: {text:'歩行者専用として国内最大級の竜神大吊橋がある？', icon:'🌉'},
  ayumizaki_park: {text:'霞ヶ浦を一望できる歩崎公園がある？', icon:'🏞️'},
  melon_hokota: {text:'メロンの産地として全国的に知られる？', icon:'🍈', subjective:true},
  ibaraki_airport: {text:'茨城空港がある？', icon:'✈️'},
  makabe_district: {text:'真壁地区に重要伝統的建造物群保存地区がある？', icon:'🏘️'},
  edosaki_kabocha: {text:'地理的表示保護制度に登録された江戸崎かぼちゃの産地？', icon:'🎃'},
  nishishioko_butai: {text:'組み立て式の農村歌舞伎舞台「西塩子の回り舞台」がある？', icon:'🎭'},
  itako_ayame: {text:'あやめまつりで「嫁入り舟」が運航される？', icon:'💐'},
  oyama_hyojo: {text:'関ヶ原の戦いの直前に徳川家康が軍議を開いた地？', icon:'🏯'},
  uzumagawa_kura: {text:'蔵造りの町並みが残り、巴波川で遊覧船が運航する？', icon:'🛶'},
  ashikaga_gakko: {text:'日本最古の学校とされる史跡がある？', icon:'🎓'},
  shiobara_onsen: {text:'塩原温泉郷がある？', icon:'♨️'},
  nikko_toshogu: {text:'世界遺産の東照宮がある？', icon:'⛩️'},
  kyuroku_kan: {text:'蒸気機関車を展示する「SLキューロク館」がある？', icon:'🚂'},
  yamaage_matsuri: {text:'ユネスコ無形文化遺産の山あげ祭が行われる？', icon:'🎭'},
  kanto_shinetsu_tsunagu: {text:'上毛かるたに「関東と信越つなぐ○○市」と謳われる？', icon:'🛣️'},
  tajima_yahei: {text:'世界遺産の田島弥平旧宅がある？', icon:'🏠'},
  kiryu_nokogiri: {text:'織物工場のノコギリ屋根が多く残り、「球都」と呼ばれる？', icon:'🏭', subjective:true},
  tsutsujigaoka_bunbuku: {text:'つつじが岡公園と分福茶釜の伝説で知られる？', icon:'🌺', subjective:true},
  ikaho_onsen: {text:'石段街で有名な伊香保温泉がある？', icon:'♨️'},
  usui_meganebashi: {text:'碓氷峠の「めがね橋」がある？', icon:'🌉'},
  tomihiro_museum: {text:'星野富弘の作品を展示する富弘美術館がある？', icon:'🖼️'},
  fukiware_no_taki: {text:'「東洋のナイアガラ」とも呼ばれる吹割の滝がある？', icon:'💦'},
  railway_museum: {text:'国内最大級の鉄道博物館がある？', icon:'🚄'},
  toki_no_kane: {text:'蔵造りの町並みと「時の鐘」がある？', icon:'🔔'},
  koku_kinen_park: {text:'日本初の飛行場跡を整備した航空記念公園がある？', icon:'✈️'},
  misato_junction: {text:'東京外環道・常磐道・首都高速が接続するジャンクションがある？', icon:'🛣️'},
  toda_boat: {text:'1964年東京五輪のボート競技会場がある？', icon:'🚣'},
  shibusawa_eiichi: {text:'渋沢栄一の生誕地？', icon:'💴'},
  konosu_hina: {text:'日本一高いピラミッドひな壇で知られる？', icon:'🎎', subjective:true},
  first_outlet: {text:'日本初のアウトレットモールが開業した地？', icon:'🛍️'},
  jumbo_koinobori: {text:'全長100メートルのジャンボこいのぼりを揚げる？', icon:'🎏'},
  higashimatsuyama_yakitori: {text:'豚のカシラ肉をみそだれで食べる「やきとり」で有名？', icon:'🍢', subjective:true},
  seitenkyu: {text:'日本最大級の道教寺院「聖天宮」がある？', icon:'⛩️'},
  riken_hq: {text:'理化学研究所の本部がある？', icon:'🔬'},
  hanawa_hokiichi: {text:'盲目の国学者・塙保己一の生誕地？', icon:'📚'},
  sunaori_amagoi: {text:'巨大な龍蛇を作る伝統行事「脚折雨乞」がある？', icon:'🐉'},
  sakitama_zerifry: {text:'さきたま古墳群とゼリーフライで有名？', icon:'🏺', subjective:true},
  gongendo_sakura: {text:'桜と菜の花で有名な権現堂桜堤がある？', icon:'🌸'},
  hitachidai_stadium: {text:'日立台のサッカー専用スタジアムがある？', icon:'⚽'},
  suguyaru_ka: {text:'全国初の「すぐやる課」が設置された？', icon:'🏢'},
  nakayama_hokekyoji: {text:'日蓮宗の大本山・中山法華経寺がある？', icon:'⛩️'},
  kominato_railway: {text:'小湊鐵道の本社と起点駅がある？', icon:'🚃'},
  yatsu_higata: {text:'ラムサール条約登録湿地の谷津干潟がある？', icon:'🦆'},
  tokyo_disney: {text:'東京ディズニーリゾートがある？', icon:'🎡'},
  rekihaku: {text:'国立歴史民俗博物館がある？', icon:'🏛️'},
  kikkoman_hq: {text:'キッコーマンの本社がある？', icon:'🏭'},
  abiko_ekisoba: {text:'大きな唐揚げが乗った駅そばで有名？', icon:'🍜', subjective:true},
  nomizo_no_taki: {text:'「濃溝の滝」と呼ばれる亀岩の洞窟がある？', icon:'💦'},
  tokyo_german_village: {text:'名前に「東京」が付くドイツ風テーマパークがある？', icon:'🎡'},
  inubosaki: {text:'関東最東端の犬吠埼がある？', icon:'🗺️'},
  sawara_district: {text:'佐原地区に江戸情緒を残す重伝建がある？', icon:'🏘️'},
  shirasato_kaigan: {text:'九十九里浜の白里海岸がある？', icon:'🏖️'},
  sunosaki_lighthouse: {text:'洲埼灯台がある？', icon:'💡'},
  mother_farm_nokogiri: {text:'マザー牧場と鋸山がある？', icon:'🐄'},
  boshu_biwa: {text:'房州ビワの名産地？', icon:'🍑'},
  ohara_hadaka: {text:'大原はだか祭りが行われる？', icon:'🏮'},
  kamogawa_seaworld: {text:'シャチのショーで有名なシーワールドがある？', icon:'🐋'},
  katsuura_tantanmen: {text:'夏でも比較的冷涼で、ご当地タンタンメンで知られる？', icon:'🍜', subjective:true},
  oi_keibajo: {text:'大井競馬場がある？', icon:'🐎'},
  tokyo_daibutsu: {text:'高さ13メートルの「東京大仏」がある？', icon:'🗿'},
  showa_kinen_park: {text:'国営昭和記念公園がある？', icon:'🌳'},
  kichijoji_harmonica: {text:'吉祥寺駅とハモニカ横丁がある？', icon:'🏘️'},
  takahata_hijikata: {text:'高幡不動尊と土方歳三の生誕地がある？', icon:'⛩️'},
  shimura_ken: {text:'志村けんのふるさと？', icon:'😄'},
  tama_rokuto: {text:'多摩六都科学館がある？', icon:'🔭'},
  ghibli_museum: {text:'三鷹の森ジブリ美術館がある？', icon:'🎬'},
  sanrio_puroland: {text:'サンリオピューロランドがある？', icon:'🎀'},
  mitakesan: {text:'御岳山と御岳渓谷がある？', icon:'🏔️'},
  edo_tokyo_tatemono: {text:'江戸東京たてもの園がある？', icon:'🏛️'},
  kurume_twin: {text:'福岡県にもそっくりな名前の市がある？', icon:'🔤'},
  akishima_kujira: {text:'約200万年前のクジラ化石が発見された？', icon:'🐋'},
  tamako_yamato: {text:'多摩湖の大部分があり、市名に旧国名が含まれる？', icon:'🏞️'},
  yomiuri_land: {text:'よみうりランドがある？', icon:'🎢'},
  second_smallest_city: {text:'全国の市で面積が2番目に小さい？', icon:'📏'},
  hitotsubashi_univ: {text:'一橋大学ある文教都市？', icon:'🎓'},
  jaxa_isas: {text:'JAXA宇宙科学研究所がある？', icon:'🚀'},
  shirokoro_horumon: {text:'豚ホルモンを使う「シロコロホルモン」で有名？', icon:'🍢', subjective:true},
  izumi_no_mori_awaodori: {text:'泉の森があり、夏に阿波おどりが開かれる？', icon:'💃'},
  enoshima: {text:'江の島がある？', icon:'🏝️'},
  omote_tanzawa: {text:'表丹沢登山の玄関口で、名水百選の湧水群がある？', icon:'🏔️'},
  ebina_sa: {text:'東名高速の巨大サービスエリアがある？', icon:'🛣️'},
  oyama_afuri: {text:'大山阿夫利神社がある？', icon:'⛩️'},
  jogashima_maguro: {text:'城ヶ島と三崎まぐろで知られる？', icon:'🐟', subjective:true},
  daiyuzan_kintaro: {text:'大雄山と金太郎伝説で知られる？', icon:'🏔️', subjective:true},
  okutadami_dam: {text:'奥只見ダムがある？', icon:'🏞️'},
  hokuetsu_kyoto: {text:'「北越の小京都」と呼ばれる？', icon:'🏘️', subjective:true},
  knit_gosen: {text:'ニットの生産高が日本一？', icon:'🧶'},
  kurokawa_yuden: {text:'日本最古の油田とされる黒川油田がある？', icon:'🛢️'},
  niigata_smallest: {text:'新潟県で面積が最も小さい市？', icon:'📏'},
  kitsune_yomeiri: {text:'「狐の嫁入り行列」が行われる？', icon:'🦊'},
  ryokan_birthplace: {text:'良寛の生誕地？', icon:'📚'},
  sakyu_momo: {text:'「幻の桃」と呼ばれる砂丘桃の産地？', icon:'🍑', subjective:true},
  taishitamonja: {text:'大したもん蛇まつりが行われる？', icon:'🐉'},
  gomadoyama_ajisai: {text:'護摩堂山の山頂に約3万株のあじさい園がある？', icon:'💐'},
  ryugakubo: {text:'名水百選の龍ヶ窪がある？', icon:'💧'},
  yahiko_jinja: {text:'越後一宮の彌彦神社がある？', icon:'⛩️'},
  fuji_rock: {text:'フジロックフェスティバルが開催される？', icon:'🎸'},
  tama_monorail_extension: {text:'多摩モノレールの延伸で、市内に初めて鉄道駅ができる予定？', icon:'🚝'},
  banei_keiba: {text:'世界で唯一のばんえい競馬が開催されている？', icon:'🐴'},
  ebetsu_renga: {text:'北海道遺産に選ばれた、れんがの産地？', icon:'🧱'},
  kitami_hakka: {text:'戦前、世界のハッカ流通量の約7割を占めていた？', icon:'🌿'},
  shikotsuko_futoko: {text:'日本最北の不凍湖がある？', icon:'🏞️'},
  hamanasu_no_oka: {text:'約180種の植物が自生する「はまなすの丘公園」がある？', icon:'🌸'},
  northernmost_city: {text:'日本最北端の市？', icon:'🗺️'},
  whaling: {text:'捕鯨で有名？', icon:'🐋'},
  enclave_municipality: {text:'飛び地がある？', icon:'🧩'},
  honshu_northernmost: {text:'本州最北端の地がある？', icon:'⬆️'},
  honshu_easternmost: {text:'本州最東端の地がある？', icon:'➡️'},
  honshu_westernmost: {text:'本州最西端の地がある？', icon:'⬅️'},
  honshu_southernmost: {text:'本州最南端の地がある？', icon:'⬇️'},
  japan_northernmost: {text:'日本最北端の地がある？', icon:'🔝'},
  japan_southernmost: {text:'日本最南端の地がある？', icon:'🔽'},
  japan_easternmost: {text:'日本最東端の地がある？', icon:'▶️'},
  japan_westernmost: {text:'日本最西端の地がある？', icon:'◀️'},
  shio_kazunoko: {text:'塩数の子の加工生産量が日本一？', icon:'🐟'},
  canadian_world: {text:'「赤毛のアン」をテーマにしたカナディアンワールドがある？', icon:'🎡'},
  garinko_go: {text:'世界初の流氷観光砕氷船「ガリンコ号」が運航する？', icon:'🚢'},
  nosappu_misaki: {text:'日本本土最東端の納沙布岬がある？', icon:'🗺️'},
  hirosaki_tenshu: {text:'東北地方で唯一、江戸時代から残る天守がある？', icon:'🏯'},
  hasshoku_center: {text:'巨大な食品市場「八食センター」がある？', icon:'🐟'},
  misawa_flight: {text:'世界初の太平洋無着陸横断飛行の出発地？', icon:'✈️'},
  ishiwari_zakura: {text:'大きな花崗岩を割って育つ「石割桜」がある？', icon:'🌸'},
  mutsu_kokufu: {text:'奈良・平安時代に陸奥国府と鎮守府が置かれた？', icon:'🏯'},
  kanto_matsuri: {text:'竿燈まつりが開催される？', icon:'🏮'},
  kamo_kurage: {text:'クラゲの展示で有名な加茂水族館がある？', icon:'🎐'},
  uesugi_jinja: {text:'上杉謙信を祭る上杉神社がある？', icon:'⛩️'},
  jionji: {text:'東北を代表する古刹・慈恩寺がある？', icon:'⛩️'},
  shinjo_matsuri: {text:'毎年8月24～26日に、20台の豪華な山車が巡る祭りがある？', icon:'🎏'},
  saito_mokichi: {text:'歌人・斎藤茂吉が生まれたマチ？', icon:'📚'},
  hanamiyama: {text:'花見山公園がある？', icon:'🌸'},
  nanko_park: {text:'松平定信が「士民共楽」の理念で築いた南湖公園がある？', icon:'🌳'},
  nakoku_no_oka: {text:'須玖岡本遺跡を中心とする「奴国の丘歴史公園」がある？', icon:'🏺'},
  miike_tanko: {text:'世界遺産の三池炭鉱・宮原坑と三池港がある？', icon:'⛏️'},
  sakurai_futamigaura: {text:'海中の夫婦岩と白い鳥居で知られる桜井二見ヶ浦がある？', icon:'⛩️', subjective:true},
  ushikubi_sueki: {text:'九州最大の須恵器窯跡群「牛頸須恵器窯跡」がある？', icon:'🏺'},
  munakata_hetsugu: {text:'沖ノ島を御神体とする三宮のうち、辺津宮がある？', icon:'⛩️'},
  goshogatani_kogoishi: {text:'古代山城の御所ヶ谷神籠石がある？', icon:'🏯'},
  funabaru_kofun: {text:'豪華な馬具が古墳とは別の埋納坑から見つかった船原古墳がある？', icon:'🏺'},
  hikari_no_michi: {text:'宮地嶽神社の参道に夕日が重なる「光の道」で知られる？', icon:'🌇', subjective:true},
  tanabata_jinja: {text:'織姫を祭る「七夕神社（媛社神社）」がある？', icon:'🎋'},
  nogata_meteorite: {text:'須賀神社に、世界最古級の落下記録を持つ隕石が伝わる？', icon:'☄️'},
  yanagawa_kudari: {text:'掘割の川下りと北原白秋の生家で知られる？', icon:'🛶', subjective:true},
  yame_gyokuro: {text:'福島地区に白壁の町並みが残り、玉露の産地として知られる？', icon:'🍵', subjective:true},
  sakuta_no_unade: {text:'日本書紀にも記された古代の用水路「裂田の溝」がある？', icon:'💧'},
  tagawa_sekitan: {text:'石炭記念公園に二本煙突と竪坑櫓が残る？', icon:'⛏️'},
  hishino_suisha: {text:'菱野の三連水車と秋月の城下町がある？', icon:'💧'},
  oda_hiroki_museum: {text:'洋画家・織田廣喜の作品を集めた美術館がある？', icon:'🖼️'},
  kiyomizudera_teien: {text:'雪舟作と伝わる清水寺本坊庭園がある？', icon:'🌳'},
  toyota_kyushu: {text:'トヨタ自動車九州の本社と宮田工場がある？', icon:'🚗'},
  chikugo_yoshii: {text:'筑後吉井の白壁の町並みと果樹園で知られる？', icon:'🏘️', subjective:true},
  karatsu_kunchi: {text:'ユネスコ無形文化遺産の祭りで、多くの曳山が巡行する？', icon:'🎏'},
  tosu_junction: {text:'九州道・長崎道・大分道が集まるジャンクションがある？', icon:'🛣️'},
  okawachiyama: {text:'鍋島藩窯が置かれた「秘窯の里・大川内山」がある？', icon:'🏺'},
  takeo_onsen_romon: {text:'辰野金吾が設計した朱塗りの楼門がある温泉地？', icon:'♨️'},
  ogi_yokan: {text:'表面に砂糖の結晶ができる切り羊羹と清水の滝で知られる？', icon:'🍡', subjective:true},
  kunenan: {text:'紅葉の名所として知られる国の名勝「九年庵」がある？', icon:'🍁'},
  yutoku_inari: {text:'日本三大稲荷の一つに数えられる祐徳稲荷神社がある？', icon:'⛩️'},
  ureshino_bihada: {text:'日本三大美肌の湯の一つと温泉湯どうふで知られる？', icon:'♨️', subjective:true},
  isahaya_meganebashi: {text:'洪水後に公園へ移設された石造二連アーチの眼鏡橋がある？', icon:'🌉'},
  nagasaki_airport_omura: {text:'箕島を造成して造られた長崎空港がある？', icon:'✈️'},
  koi_no_oyogu_machi: {text:'武家屋敷の水路と「鯉の泳ぐまち」で知られる？', icon:'🐟', subjective:true},
  hara_castle: {text:'キリシタン勢力が籠城した世界遺産・原城跡がある？', icon:'🏯'},
  unzen_jigoku: {text:'普賢岳の麓に地獄景観が広がる温泉地がある？', icon:'♨️'},
  fukuejima_onidake: {text:'福江島の鬼岳と堂崎天主堂がある？', icon:'⛪'},
  ajifry_seichi: {text:'「アジフライの聖地」を掲げる港町？', icon:'🐟'},
  tsushima_border: {text:'日本と韓国の国境の島？', icon:'🗺️'},
  mugi_shochu_iki: {text:'麦焼酎発祥の地とされ、原の辻遺跡がある？', icon:'🍶'},
  nanatsugama_shonyudo: {text:'国の天然記念物に指定された七ツ釜鍾乳洞がある？', icon:'🕳️'},
  hirado_oranda: {text:'江戸時代のオランダ商館が復元されている？', icon:'🏛️'},
  igusa_yatsushiro: {text:'い草の産地で、地元の人は市名を「やっちろ」と言う？', icon:'🌾'},
  sakitsu_shuraku: {text:'世界遺産の﨑津集落がある？', icon:'⛪'},
  takaba_countrypark: {text:'竹迫城跡公園と県農業公園カントリーパークがある？', icon:'🌳'},
  hiryu_no_kane: {text:'蓮華院誕生寺奥之院に大梵鐘「飛龍の鐘」がある？', icon:'🔔'},
  misumi_nishiko: {text:'明治期の港湾施設が残る世界遺産・三角西港がある？', icon:'⚓'},
  mandako_greenland: {text:'世界遺産の万田坑と大型遊園地グリーンランドがある？', icon:'⛏️'},
  aoi_aso_jinja: {text:'茅葺き楼門を持つ国宝・青井阿蘇神社がある？', icon:'⛩️'},
  kusasenrigahama: {text:'草千里ヶ浜と中岳火口がある？', icon:'🌋'},
  takasakiyama_saru: {text:'高崎山のサルが有名？', icon:'🐒', subjective:true},
  fukuzawa_karaage: {text:'福澤諭吉が生まれ、からあげの聖地として知られる？', icon:'🍗', subjective:true},
  bungo_futamigaura: {text:'豊後二見ヶ浦に巨大なしめ縄が張られている？', icon:'⛩️'},
  usa_jingu: {text:'全国の八幡社の総本宮とされる神宮がある？', icon:'⛩️'},
  usuki_magaibutsu: {text:'国内を代表する国宝の磨崖仏群がある？', icon:'🗿'},
  harajiri_no_taki: {text:'「東洋のナイアガラ」とも呼ばれる原尻の滝がある？', icon:'💦'},
  kinrinko_yufuin: {text:'金鱗湖と湯の坪街道がある温泉地？', icon:'♨️'},
  oka_castle: {text:'「荒城の月」のモデルとされる岡城跡がある？', icon:'🏯'},
  showa_no_machi: {text:'昭和30年代の商店街を再生した「昭和の町」がある？', icon:'🏘️'},
  sandwich_jokamachi: {text:'二つの武家屋敷地区に商人の町が挟まれた「サンドイッチ型城下町」？', icon:'🏯'},
  futagoji: {text:'六郷満山文化を代表する両子寺がある？', icon:'⛩️'},
  tsukumi_sakura_maguro: {text:'四浦半島の河津桜と保戸島のマグロ漁業で知られる？', icon:'🌸', subjective:true},
  sekinoo_taki: {text:'関之尾滝と世界最大級の甌穴群がある？', icon:'💦'},
  nobeoka_ishigaki: {text:'城跡に「千人殺し」と呼ばれる高石垣が残る？', icon:'🏯', subjective:true},
  umagase_cross: {text:'柱状節理の断崖・馬ヶ背と「クルスの海」がある？', icon:'🪨'},
  saitobaru_kofun: {text:'300基以上の古墳が集まる日本最大級の古墳群がある？', icon:'🏺'},
  toimisaki_uma: {text:'都井岬に野生の御崎馬が生息する？', icon:'🐎'},
  ebino_kogen: {text:'霧島連山の韓国岳や不動池を望む高原がある？', icon:'🏔️'},
  shirokuma_tenmonkan: {text:'天文館の「しろくま」で有名？', icon:'🍧', subjective:true},
  shiobitashi_onsen: {text:'坂本龍馬夫妻が新婚旅行で訪れた塩浸温泉がある？', icon:'♨️'},
  kokuritsu_taiiku_univ: {text:'日本唯一の国立体育大学がある？', icon:'🎓'},
  kamou_no_okusu: {text:'日本一の巨樹とされる蒲生の大クスがある？', icon:'🌳'},
  tsuru_ettochi: {text:'国内最大級のツルの越冬地がある？', icon:'🦢'},
  kinsakubaru_keihan: {text:'金作原原生林があり、郷土料理の鶏飯で知られる？', icon:'🌴', subjective:true},
  satsumayaki_miyama: {text:'薩摩焼の里・美山と妙円寺詣りで知られる？', icon:'🏺', subjective:true},
  bonotsu_ganjin: {text:'坊津の港町と、鑑真が上陸したと伝わる秋目浦がある？', icon:'⚓'},
  mizonokuchi_doketsu: {text:'巨大な岩壁を貫く天然洞穴「溝ノ口洞穴」がある？', icon:'🕳️'},
  chiran_bukeyashiki: {text:'知覧の武家屋敷庭園群と特攻平和会館がある？', icon:'🏘️'},
  daguri_misaki: {text:'海を望むダグリ岬遊園地がある？', icon:'🎡'},
  makurazaki_station: {text:'JR日本最南端の始発・終着駅があり、かつお節で知られる？', icon:'🚉', subjective:true},
  bontan_shika: {text:'ボンタンの産地で、沖合の無人島に野生のシカがいる？', icon:'🍊'},
  teppokan: {text:'種子島の歴史と火縄銃を紹介する「鉄砲館」がある？', icon:'🏛️'},
  satsuma_ryugakusei: {text:'薩摩藩英国留学生記念館がある？', icon:'🏛️'},
  koza_eisa: {text:'全島エイサーまつりと「コザ」の音楽文化で知られる？', icon:'🥁', subjective:true},
  kaichu_doro_katsuren: {text:'海中道路と世界遺産の勝連城跡がある？', icon:'🌉'},
  okinawa_convention: {text:'沖縄コンベンションセンターとトロピカルビーチがある？', icon:'🏖️'},
  heiwa_kinen_himeyuri: {text:'平和祈念公園とひめゆりの塔がある？', icon:'🕊️'},
  senagajima_umikaji: {text:'瀬長島ウミカジテラスと旧海軍司令部壕がある？', icon:'🏖️'},
  kabira_bay: {text:'エメラルドグリーンの海で有名な川平湾がある？', icon:'🏝️'},
  irabu_ohashi: {text:'海の上を渡る長大な伊良部大橋がある？', icon:'🌉'},
  sefa_utaki: {text:'世界遺産の斎場御嶽とニライカナイ橋がある？', icon:'⛩️'},
  kaike_onsen: {text:'山陰を代表する皆生温泉がある？', icon:'♨️'},
  kurayoshi_shirakabe: {text:'白壁土蔵群と赤瓦の町並みがある？', icon:'🏘️'},
  sesshu_teien: {text:'雪舟が築いたと伝わる庭園が複数ある？', icon:'🌳'},
  iwami_ginzan: {text:'石見銀山遺跡がある？', icon:'⛏️'},
  gonokawa_kako: {text:'中国地方最大の河川・江の川の河口がある？', icon:'🌊'},
  nihon_sanmeien: {text:'日本三名園の一つがある？', icon:'🌳'},
  horumon_udon: {text:'ホルモンうどんで知られる？', icon:'🍜', subjective:true},
  kinojo: {text:'古代山城の鬼ノ城がある？', icon:'🏯'},
  bitchu_matsuyama: {text:'現存天守の備中松山城がある？', icon:'🏯'},
  saijo_sake: {text:'日本有数の酒どころ「西条」がある？', icon:'🍶'},
  mihara_tako: {text:'タコ料理と海に浮かぶ城跡で知られる？', icon:'🐙', subjective:true},
  kiri_no_umi: {text:'秋から冬の「霧の海」で知られる？', icon:'🌫️', subjective:true},
  hiroshima_westmost: {text:'広島県で最も西に位置する市？', icon:'🗺️'},
  anno_hideaki: {text:'『エヴァンゲリオン』の庵野秀明が生まれたマチ？', icon:'🤖'},
  tokuyama_combinat: {text:'徳山の工場夜景やコンビナートで知られる？', icon:'🏭', subjective:true},
  kintaikyo: {text:'五連の木造アーチ橋「錦帯橋」がある？', icon:'🌉'},
  cement_glass: {text:'セメント産業とガラス文化で知られる？', icon:'🏭', subjective:true},
  led_valley: {text:'LED関連企業の集積で知られる「光のまち」？', icon:'💡', subjective:true},
  naruto_uzushio: {text:'世界最大級の渦潮を間近で見られる？', icon:'🌀'},
  kincho_tanuki: {text:'金長たぬきの伝説で知られる？', icon:'🦝', subjective:true},
  awa_dochu: {text:'国の天然記念物「阿波の土柱」がある？', icon:'🪨'},
  mima_udatsu: {text:'「うだつの町並み」が残っている？', icon:'🏘️'},
  iya_kazurabashi: {text:'祖谷のかずら橋や大歩危・小歩危がある？', icon:'🌉'},
  marugame_uchiwa: {text:'現存天守の城とうちわで有名？', icon:'🏯', subjective:true},
  chichibugahama: {text:'水面に空が映る父母ヶ浜がある？', icon:'🏖️'},
  zenigata_sunae: {text:'巨大な寛永通宝の砂絵がある？', icon:'🪙'},
  setoohashi_shikoku: {text:'瀬戸大橋の四国側の玄関口？', icon:'🌉'},
  kukai_birthplace: {text:'弘法大師・空海の生誕地とされる？', icon:'⛩️'},
  tebukuro_industry: {text:'手袋の生産量が日本一として知られる？', icon:'🧤', subjective:true},
  uchinuki: {text:'名水「うちぬき」が市内各地から湧き出る？', icon:'💧'},
  garyu_sanso: {text:'臥龍山荘や肱川の鵜飼で知られる？', icon:'🏯', subjective:true},
  kezuribushi: {text:'削り節の生産が盛んな港町？', icon:'🐟', subjective:true},
  yawatahama_champon: {text:'ご当地麺「○○○（市名）ちゃんぽん」で知られる？', icon:'🍜', subjective:true},
  seiyo_geopark: {text:'四国○○（市名）ジオパークの中心となる市？', icon:'🗺️'},
  botchan_theater: {text:'常設劇場「坊っちゃん劇場」がある？', icon:'🎭'},
  kochi_ryoma_airport: {text:'高知県の空の玄関、高知龍馬空港がある？', icon:'✈️'},
  chinkabashi: {text:'四万十川に架かる多くの沈下橋で知られる？', icon:'🌉', subjective:true},
  noichi_zoo: {text:'高知県立のいち動物公園がある？', icon:'🦁'},
  muroto_geopark: {text:'世界ジオパークに認定された岬がある？', icon:'🗺️'},
  nabeyaki_ramen: {text:'鍋焼きラーメンをご当地グルメとする？', icon:'🍜'},
  daruma_yuhi: {text:'冬の海に沈む「だるま夕日」で知られる？', icon:'🌇', subjective:true},
  ashizuri_misaki: {text:'四国最南端の足摺岬がある？', icon:'🗺️'},
  tosabushi: {text:'一本釣りの鰹節「土佐節」で知られる？', icon:'🐟', subjective:true},
  yanase_museum: {text:'やなせたかし記念館がある？', icon:'🏛️'},
  nagashima_nabana: {text:'国内最大級の遊園地となばなの里がある？', icon:'🎢'},
  suzuka_circuit: {text:'F1日本グランプリが開かれる国際サーキットがある？', icon:'🏎️'},
  magose_hinoki: {text:'熊野古道の馬越峠と、ヒノキの産地で知られる？', icon:'🌲', subjective:true},
  sekijuku: {text:'東海道五十三次の宿場町・関宿が残る？', icon:'🏘️'},
  toba_aquarium: {text:'国内有数の飼育種類数を誇る水族館と真珠島がある？', icon:'🐠'},
  onigajo_hananoiwaya: {text:'鬼ヶ城・花の窟・七里御浜がある？', icon:'🪨'},
  fujiwaradake_bairin: {text:'藤原岳と、梅林で知られる農業公園がある？', icon:'🌸'},
  parque_ago: {text:'パルケエスパーニャと英虞湾がある？', icon:'🎡'},
  iga_ninja_basho: {text:'忍者博物館と松尾芭蕉の生家がある？', icon:'🥷'},
  kurokabe_chikubu: {text:'黒壁スクエアと竹生島がある？', icon:'🏘️'},
  hachimanbori: {text:'八幡堀と水郷、近江商人の町並みがある？', icon:'🛶'},
  biwako_ohashi_sagawa: {text:'琵琶湖大橋の東詰と佐川美術館がある？', icon:'🌉'},
  jra_training: {text:'JRAの競走馬トレーニングセンターがある？', icon:'🐎'},
  konan_sanzan: {text:'国宝建築を持つ「湖南三山」がある？', icon:'⛩️'},
  metasequoia_shirahige: {text:'メタセコイア並木と湖中の大鳥居がある神社で知られる？', icon:'🌳', subjective:true},
  gokasho_eigenji: {text:'五個荘の近江商人屋敷と永源寺がある？', icon:'🏘️'},
  maizuru_akarenga: {text:'海上自衛隊の基地と赤れんが倉庫群がある？', icon:'⚓'},
  byodoin_uji: {text:'平等院鳳凰堂と高級茶の産地で知られる？', icon:'⛩️', subjective:true},
  iwashimizu_nagarebashi: {text:'石清水八幡宮と、増水時に流れるよう造られた木橋がある？', icon:'⛩️'},
  toyonaka_kyujo: {text:'甲子園の前身大会が最初に開かれた球場跡がある？', icon:'⚾'},
  cupnoodle_museum: {text:'カップヌードルミュージアムがある？', icon:'🍜'},
  taiyo_no_to: {text:'太陽の塔と万博記念公園がある？', icon:'🗿'},
  mofu_izumiotsu: {text:'国産毛布の一大産地？', icon:'🧣'},
  imashirozuka_haniwa: {text:'大王の古墳と大規模な埴輪工場跡がある？', icon:'🏺'},
  mizuma_nishikinohama: {text:'水間観音と二色の浜がある？', icon:'⛩️'},
  moriguchi_daikon: {text:'世界最長級の細長い大根の名の由来となった京街道の宿場町？', icon:'🥬'},
  hikari_no_kyokai: {text:'安藤忠雄設計の「光の教会」と隠れキリシタンの里がある？', icon:'⛪'},
  kansai_airport_city: {text:'関西国際空港と大型アウトレットがある？', icon:'✈️'},
  pl_tower: {text:'PL教団が作った巨大な白い塔がある？', icon:'🗼'},
  naritasan_osaka: {text:'成田山の大阪別院がある？', icon:'⛩️'},
  kanshinji_kongoji: {text:'高野街道と国宝を持つ観心寺・金剛寺がある？', icon:'⛩️'},
  nunose_takenouchi: {text:'布忍神社の恋みくじと、日本遺産の竹内街道がある？', icon:'⛩️'},
  nozaki_mairi: {text:'野崎まいりと飯盛城跡がある？', icon:'⛩️'},
  ikegami_sone: {text:'大規模な弥生時代の環濠集落跡がある？', icon:'🏺'},
  minoh_katsuoji: {text:'大滝と「勝運の寺」として知られる寺院がある？', icon:'🍁'},
  kashiwara_budo: {text:'ブドウ栽培と亀の瀬地すべり地帯で知られる？', icon:'🍇', subjective:true},
  ojin_ryo_wine: {text:'世界遺産の古墳群にある巨大な応神天皇陵とワインで知られる？', icon:'🍷', subjective:true},
  panasonic_hq: {text:'パナソニックの本社がある？', icon:'🏭'},
  torikai_depot: {text:'東海道新幹線の鳥飼車両基地がある？', icon:'🚄'},
  takashinohama: {text:'南海高師浜線の終点と臨海工業地帯の工場夜景がある？', icon:'🏭'},
  fujiidera_kannon: {text:'西国三十三所第5番札所と、国宝の千手観音像がある？', icon:'⛩️'},
  sennan_rosegarden: {text:'海辺の大型公園と英国式ローズガーデンがある？', icon:'🌹'},
  shijonawate_masatsura: {text:'楠木正行の終焉の地とされ、室池園地がある？', icon:'🏯'},
  hoshi_no_buranko: {text:'七夕伝説と、巨大なつり橋「星のブランコ」がある？', icon:'🌉'},
  sayamaike: {text:'日本最古級のため池と、安藤忠雄設計の博物館がある？', icon:'💧'},
  pichipichi_beach: {text:'「ぴちぴちビーチ」と和泉砂岩の石工文化で知られる？', icon:'🏖️'},
  sumoto_castle_onsen: {text:'淡路島中央部に城跡と温泉街がある？', icon:'🏯'},
  ashiya_yodoko: {text:'高級住宅地として知られ、ヨドコウ迎賓館がある？', icon:'🏡', subjective:true},
  itami_sake_airport: {text:'清酒発祥地の一つとされ、大阪国際空港の一部がある？', icon:'🍶'},
  katsumeshi_kakurinji: {text:'郷土料理「かつめし」と国宝建築を持つ寺院がある？', icon:'🍚'},
  tada_jinja: {text:'清和源氏ゆかりの多田神社と妙見山がある？', icon:'⛩️'},
  sanda_hitohaku: {text:'県立の「人と自然の博物館」とブランド牛で知られる？', icon:'🐄', subjective:true},
  kasai_globe_clock: {text:'旧軍飛行場跡と世界最大級の地球儀時計がある？', icon:'🌐'},
  izanagi_yumebutai: {text:'国生み神話の神社と淡路夢舞台がある？', icon:'⛩️'},
  tojoko_omocha: {text:'東条湖のおもちゃ王国と県立播磨中央公園がある？', icon:'🎠'},
  tatsuno_shoyu_somen: {text:'しょうゆ醸造と手延べそうめんの産地で知られる？', icon:'🍜', subjective:true},
  takada_sakura_jinaimachi: {text:'川沿いに約千本の桜が続き、古い寺内町が残る？', icon:'🌸'},
  kingyo_yamatokoriyama: {text:'金魚養殖で知られる？', icon:'🐠', subjective:true},
  tenri_shukyo_toshi: {text:'宗教都市として発展し、巨大な本部神殿がある？', icon:'⛩️'},
  kashihara_jingu: {text:'神武天皇を祭る神宮と藤原宮跡がある？', icon:'⛩️'},
  miwa_somen: {text:'三輪そうめんで知られる？', icon:'🍜', subjective:true},
  gojo_kaki_shinmachi: {text:'柿の産地で、江戸時代の町並みが残る新町通りがある？', icon:'🍊'},
  katsuragi_kodo: {text:'葛城古道と高鴨神社、古い町家が残る？', icon:'⛩️'},
  ikoma_cablecar: {text:'日本最古の営業用ケーブルカーと山上遊園地がある？', icon:'🚡'},
  dontsurubo: {text:'奇岩「屯鶴峯」と二上山の北麓に位置する？', icon:'🪨'},
  taimadera_sumo: {text:'當麻寺と、相撲の始祖を紹介する資料館がある？', icon:'⛩️'},
  uda_seiyaku: {text:'多くの製薬会社の創業者を輩出した？', icon:'💊'},
  kuroe_shikki: {text:'黒江の町並みと紀州漆器で知られる？', icon:'🥢', subjective:true},
  koyasan_gateway_pile: {text:'高野山への鉄道・道路の玄関口で、パイル織物の産地？', icon:'🧶'},
  arida_mikan: {text:'全国有数のミカン産地で、山腹にかんきつ畑が広がる？', icon:'🍊'},
  shortest_private_line: {text:'全長3キロ未満の短い私鉄路線が走る？', icon:'🚃'},
  kumano_hongu_benkei: {text:'熊野本宮大社と弁慶ゆかりの地がある？', icon:'⛩️'},
  kumano_hayatama_gotobiki: {text:'熊野速玉大社と、巨岩を御神体とする神社がある？', icon:'⛩️'},
  kokawadera_momo: {text:'西国三十三所第3番札所と桃の産地で知られる？', icon:'🍑', subjective:true},
  fujiko_f_birthplace: {text:'藤子・F・不二雄先生の出身地？', icon:'📚'},
  shinkiro_maibotsurin: {text:'蜃気楼と埋没林の博物館がある？', icon:'🏛️'},
  fujiko_a_buri: {text:'藤子不二雄A先生の出身地で寒ブリが名物？', icon:'🐟'},
  hotaruika_museum: {text:'ホタルイカ専門の体験型博物館がある？', icon:'🦑'},
  tulip_fair: {text:'国内最大級のチューリップフェアが開かれる？', icon:'🌷'},
  merhen_kenchiku: {text:'西洋風の「メルヘン建築」が多い？', icon:'🏰', subjective:true},
  gokayama_gassho: {text:'五箇山の合掌造り集落がある？', icon:'🏠'},
  kaiwomaru_bridge: {text:'帆船海王丸と巨大な斜張橋がある？', icon:'⛵'},
  wakura_notojima: {text:'和倉温泉と能登島がある？', icon:'♨️'},
  komatsu_origin: {text:'世界的建設機械メーカーの発祥地？', icon:'🏭'},
  senmaida_shikki: {text:'白米千枚田と漆器産業で知られる？', icon:'🌾', subjective:true},
  rokugozaki: {text:'能登半島の先端に禄剛崎がある？', icon:'🗺️'},
  kaga_onsenkyo: {text:'山代・山中・片山津の三温泉がある？', icon:'♨️'},
  ufo_museum: {text:'UFOをテーマにした宇宙科学博物館がある？', icon:'🛸'},
  shirayama_tedori: {text:'加賀国一宮と手取峡谷がある？', icon:'⛩️'},
  matsui_museum: {text:'松井秀喜の野球博物館がある？', icon:'⚾'},
  kehi_jindo: {text:'気比神宮と「人道の港」の資料館がある？', icon:'⛩️'},
  miketsukuni_saba: {text:'御食国と鯖街道の起点として知られる？', icon:'🐟', subjective:true},
  echizen_ono_castle: {text:'雲海に浮かぶ山城と湧水で知られる？', icon:'🏯', subjective:true},
  awara_onsen: {text:'北陸有数の芦原温泉がある？', icon:'♨️'},
  fujiq_highland: {text:'富士急ハイランドがある？', icon:'🎢'},
  fuefuki_fruit_park: {text:'笛吹川フルーツ公園と西沢渓谷がある？', icon:'🍇'},
  shinpu_shichirigan: {text:'新府城跡と七里岩の台地がある？', icon:'🏯'},
  katakana_city_name: {text:'全国で唯一市名にカタカナが入る？', icon:'🔤'},
  kiyosato_hakushu: {text:'清里高原と白州の蒸溜所がある？', icon:'🥃'},
  shingen_zutsumi: {text:'信玄堤と赤坂台総合公園がある？', icon:'🏞️'},
  isawa_onsen: {text:'石和温泉と桃源郷がある？', icon:'♨️'},
  katsunuma_budo: {text:'勝沼のぶどう畑と大菩薩嶺がある？', icon:'🍇'},
  name_same_as_route: {text:'市名と同じ名前の高速道路（○○道）や鉄道路線（○○線）がある？', icon:'🛣️'},
  kamikochi: {text:'上高地がある？', icon:'🏔️'},
  sanada_bessho: {text:'真田氏の城下町で別所温泉がある？', icon:'🏯'},
  okaya_silk: {text:'諏訪湖西岸の製糸業の町で蚕糸博物館がある？', icon:'🧵'},
  ningyogeki_tenryukyo: {text:'人形劇フェスタと天龍峡で知られる？', icon:'🎭', subjective:true},
  suzaka_garyu: {text:'蔵の町並みと臥竜公園がある？', icon:'🏞️'},
  kaikoen_toson: {text:'懐古園と島崎藤村ゆかりの町？', icon:'🏯'},
  takato_sakura: {text:'高遠城址公園の桜で知られる？', icon:'🌸', subjective:true},
  sauce_katsudon: {text:'ソースカツ丼で有名？', icon:'🍚', subjective:true},
  shinpei_ipponki: {text:'中山晋平記念館と一本木公園がある？', icon:'🎵'},
  alpen_route_nagano: {text:'立山黒部アルペンルートの長野側玄関口？', icon:'🚡'},
  kamakura_nanohana: {text:'かまくらの里と菜の花公園がある？', icon:'❄️'},
  naraijuku_wine: {text:'奈良井宿と国産ワインで知られる？', icon:'🍷', subjective:true},
  farthest_from_sea: {text:'日本で海から最も遠い地点がある？', icon:'🗺️'},
  obasute_togura: {text:'姨捨の棚田と戸倉上山田温泉がある？', icon:'🌾'},
  unnojuku_yunomaru: {text:'海野宿と湯の丸高原がある？', icon:'🏘️'},
  wasabi_farm: {text:'国内最大級のわさび農場がある？', icon:'🌿'},
  nagaragawa_ukai: {text:'長良川の鵜飼で有名？', icon:'🐦', subjective:true},
  okuno_hosomichi_musubi: {text:'奥の細道むすびの地で「水の都」と呼ばれる？', icon:'💧', subjective:true},
  hida_furuimachi: {text:'飛騨の古い町並みと日本三大美祭がある？', icon:'🏘️'},
  mosaic_tile_museum: {text:'モザイクタイルミュージアムと永保寺がある？', icon:'🏛️'},
  magome_kurikinton: {text:'馬籠宿と栗きんとんで知られる？', icon:'🌰', subjective:true},
  udatsu_mino: {text:'うだつの上がる町並みと手すき和紙で知られる？', icon:'🏘️', subjective:true},
  kaseki_museum: {text:'化石博物館と陶磁器産業で知られる？', icon:'🦴', subjective:true},
  iwamura_akechi: {text:'岩村城下町と明知鉄道がある？', icon:'🏯'},
  otajuku_satoyama: {text:'中山道太田宿と里山体験型公園がある？', icon:'🏘️'},
  toki_outlet: {text:'陶磁器生産と大型アウトレットで知られる？', icon:'🏺', subjective:true},
  aerospace_museum: {text:'国内最大級の航空宇宙博物館がある？', icon:'✈️'},
  rose_garden_akechi: {text:'世界最大級のバラ園と明智城跡がある？', icon:'🌹'},
  fuyu_kaki_origin: {text:'富有柿発祥の地とされる？', icon:'🍊'},
  setogawa_shirakabe: {text:'瀬戸川と白壁土蔵街がある？', icon:'🏘️'},
  usuzumi_zakura: {text:'樹齢1500年以上とされる淡墨桜がある？', icon:'🌸'},
  gujo_odori: {text:'徹夜で踊るおどりで有名？', icon:'💃', subjective:true},
  nihon_sanmeisen: {text:'日本三名泉の一つがある？', icon:'♨️'},
  kisosansen_wajyu: {text:'木曽三川が集まる輪中地帯と国営公園がある？', icon:'🏞️'},
  atami_moa: {text:'海上花火大会とMOA美術館で知られる？', icon:'🎆', subjective:true},
  genbegawa_rakujuen: {text:'源兵衛川と楽寿園がある？', icon:'💧'},
  sengen_taisha: {text:'浅間大社の総本宮と白糸の滝がある？', icon:'⛩️'},
  omuroyama_jogasaki: {text:'大室山と城ヶ崎海岸がある？', icon:'🌋'},
  horaibashi_sl: {text:'世界最長級の木造歩道橋とSL列車で知られる？', icon:'🌉', subjective:true},
  gakunan_tagonoura: {text:'岳南電車と田子の浦港がある？', icon:'🚃'},
  yaizu_katsuo: {text:'遠洋漁業の港とカツオ・マグロで知られる？', icon:'🐟', subjective:true},
  kakegawa_castle: {text:'木造復元天守と花鳥園がある？', icon:'🏯'},
  soccer_town_fujieda: {text:'サッカーの町で東海道の宿場が二つある？', icon:'⚽'},
  gotemba_outlet: {text:'国内最大級のアウトレットと富士山麓の演習場がある？', icon:'🛍️'},
  ecopa_hattasan: {text:'エコパスタジアムと法多山がある？', icon:'🏟️'},
  shimoda_port: {text:'ペリー来航によって開港した港がある？', icon:'⚓'},
  fuji_safari: {text:'富士サファリパークがある？', icon:'🦁'},
  arai_sekisho: {text:'新居関所と豊田佐吉記念館がある？', icon:'🏯'},
  shuzenji_toi: {text:'修善寺温泉と土肥金山がある？', icon:'♨️'},
  hamaoka_lighthouse: {text:'浜岡原子力発電所と白亜の灯台がある？', icon:'💡'},
  senkagawa_fukamushi: {text:'千框棚田と深蒸し茶で知られる？', icon:'🍵', subjective:true},
  nirayama_hansharo: {text:'世界遺産の韮山反射炉がある？', icon:'🏛️'},
  sagara_oil_airport: {text:'相良油田と県の空の玄関がある？', icon:'🛢️'},
  masumida_keori: {text:'真清田神社と国内有数の毛織物産地？', icon:'⛩️'},
  toyokawa_inari: {text:'寺院なのに稲荷と呼ばれる名刹がある？', icon:'⛩️'},
  tsushima_tenno: {text:'天王信仰の総本社と車楽舟の祭りがある？', icon:'⛩️'},
  kokonoe_mirin: {text:'九重味淋の本社と明石公園がある？', icon:'🏭'},
  toyota_origin_kariya: {text:'トヨタグループ発祥の地で大型PAがある？', icon:'🏭'},
  toyota_hq: {text:'世界最大級の自動車会社の本社がある？', icon:'🚗'},
  nihon_denmark: {text:'「日本デンマーク」と呼ばれ七夕祭りが有名？', icon:'🌾', subjective:true},
  matcha_sakushima: {text:'抹茶の産地で佐久島を市域に含む？', icon:'🍵'},
  takeshima_resort: {text:'竹島と大型海洋リゾートがある？', icon:'🏝️'},
  centrair_manekineko: {text:'中部国際空港と巨大な招き猫がある？', icon:'✈️'},
  mandaraji_fuji: {text:'曼陀羅寺の藤まつりで知られる？', icon:'🌸', subjective:true},
  komaki_castle: {text:'織田信長が初めて築いた城山がある？', icon:'🏯'},
  konomiya_hadaka: {text:'国府宮のはだか祭と植木・苗木で知られる？', icon:'⛩️', subjective:true},
  nagashino_horaiji: {text:'長篠城跡と鳳来寺山がある？', icon:'🏯'},
  juraku_daibutsu: {text:'大規模製鉄所と聚楽園大仏がある？', icon:'🗿'},
  aichi_kenko_mori: {text:'あいち健康の森と大倉公園がある？', icon:'🌳'},
  shinmaiko_okada: {text:'新舞子マリンパークと岡田の古い町並みがある？', icon:'🏖️'},
  kakitsubata_chiryu: {text:'無量寿寺のかきつばたと東海道の宿場で知られる？', icon:'🌸', subjective:true},
  owariasahi_tower: {text:'県森林公園と展望タワーがある？', icon:'🌳'},
  okehazama: {text:'桶狭間古戦場伝説地と中京競馬場がある？', icon:'🏯'},
  aichi_bokujo: {text:'愛知牧場と岩崎城跡がある？', icon:'🐄'},
  irago_longbeach: {text:'伊良湖岬と太平洋ロングビーチがある？', icon:'🏄'},
  sendohira_renkon: {text:'船頭平閘門とレンコン産地で知られる？', icon:'🌿', subjective:true},
  kiyosu_castle: {text:'清洲城と大規模なビール工場がある？', icon:'🏯'},
  showa_nichijo: {text:'昭和日常博物館がある？', icon:'🏛️'},
  kingyo_yatomi: {text:'金魚養殖と金魚水族館で知られる？', icon:'🐠', subjective:true},
  miyoshi_canoe: {text:'三好池でカヌー競技が盛ん？', icon:'🛶', subjective:true},
  shippoyaki: {text:'七宝焼を展示・体験できる施設がある？', icon:'🏺'},
  ghibli_linimo: {text:'ジブリパークと磁気浮上式鉄道がある？', icon:'🎡'},
  shinkansen:    {text:'新幹線の駅がある？', icon:'🚄'},
  coastal:       {text:'海に面している？', icon:'🌊'},
  designated:    {text:'政令指定都市？', icon:'🏙️'},
  festival:      {text:'全国的に有名なお祭りがある？', icon:'🎆', subjective:true},
  worldheritage: {text:'市内に世界遺産の構成資産がある？', icon:'⛩️'},
  snow:          {text:'豪雪地帯・特別豪雪地帯に指定されている？', icon:'❄️'},
  hot_40c:       {text:'観測史上40℃以上の気温を記録したことがある？', icon:'🌡️'},
  active_volcano:{text:'市内に気象庁指定の活火山がある？', icon:'🌋'},
  uchibo:        {text:'房総半島の内房側にある？', icon:'🌊'},
  sotobo:        {text:'房総半島の外房側にある？', icon:'🌊'},
  silk_heritage: {text:'製糸・養蚕施設が世界遺産の構成資産になっている？', icon:'🧶'},
  silk_textile:  {text:'無形文化遺産の伝統的な絹織物を主に生産している？', icon:'🧵'},
  moka_sl_line:  {text:'茨城県西部と栃木県東部を結ぶSL運行路線が通る？', icon:'🚂'},
  kururi_line:   {text:'JR久留里線が市内を通る？', icon:'🚃'},
  watarase_line: {text:'渡良瀬川上流の渓谷沿いを走る第三セクター線が通る？', icon:'🚃'},
  oito_line:     {text:'大糸線が通る？', icon:'🚃'},
  shinano_railway:{text:'しなの鉄道の駅がある？', icon:'🚃'},
  echizen_railway:{text:'えちぜん鉄道の駅がある？', icon:'🚃'},
  nagaragawa_railway:{text:'長良川鉄道の駅がある？', icon:'🚃'},
  yoro_railway:{text:'養老鉄道の駅がある？', icon:'🚃'},
  sunzu_line:    {text:'駿豆線が通る？', icon:'🚃'},
  aikan_railway: {text:'愛知環状鉄道の駅がある？', icon:'🚃'},
  kurobe_torokko:{text:'峡谷を走る観光トロッコ列車がある？', icon:'🚞'},
  noto_area:     {text:'能登地域にある？', icon:'🗺️'},
  dinosaur_museum:{text:'大規模な恐竜博物館がある？', icon:'🦕'},
  echizen_washi_hamono:{text:'手すき和紙と打刃物の産地？', icon:'🧻'},
  tojinbo:       {text:'東尋坊がある？', icon:'🌊'},
  jomon_venus:   {text:'縄文のビーナスを所蔵する？', icon:'🏺'},
  rokkoyo:       {text:'日本六古窯の産地？', icon:'🏺'},
  mino_ware:     {text:'美濃焼の主要産地？', icon:'🏺'},
  hamono_famous: {text:'日本有数の刃物産地？', icon:'🔪', subjective:true},
  snow_festival: {text:'雪まつり・雪を使ったイベントで知られる？', icon:'❄️', subjective:true},
  basin: {text:'盆地にある？', icon:'🏔️'},
  airport:       {text:'市内に定期旅客便のある空港がある？', icon:'✈️'},
  noodle:        {text:'名物グルメは麺料理？', icon:'🍜', subjective:true},
  mascot_famous: {text:'全国区で有名なご当地キャラがいる？', icon:'🧸', subjective:true},
  nihonkai:      {text:'日本海側の海に面している？', icon:'🌅'},
  taiheiyo:      {text:'太平洋側の海に面している？', icon:'🌊'},
  setonaikai:    {text:'瀬戸内海に面している？', icon:'⛵'},
  famous_mountain:{text:'日本百名山の山頂がある？', icon:'⛰️'},
  big_river:     {text:'大きな川が流れている？', icon:'🏞️', subjective:true},
  big_bay:       {text:'大きな湾に面している？', icon:'⚓', subjective:true},
  subway:        {text:'地下鉄が走っている？', icon:'🚇'},
  onsen:         {text:'温泉地として知られている？', icon:'♨️', subjective:true},
  sake:          {text:'日本酒を造る酒蔵がある？', icon:'🍶'},
  famous_hanabi: {text:'全国的または地域を代表する花火大会で知られる？', icon:'🎇', subjective:true},
  castle_town:   {text:'城下町だった？', icon:'🏯'},
  port_town:     {text:'港町として栄えた？', icon:'⚓', subjective:true},
  rice_region:   {text:'米どころとして知られている？', icon:'🌾', subjective:true},
  kana_name:     {text:'自治体名にひらがな・カタカナを含む？', icon:'🔤'},
  kansai_dialect:{text:'関西弁圏に含まれる？', icon:'🗣️'},
  ryukyu_dialect:{text:'沖縄県で、うちなーぐち（沖縄方言）が話される地域？', icon:'🗣️'},
  is_town_village:{text:'市ではなく町または村である？', icon:'🏘️'},
  is_tokyo_ward: {text:'東京23区のどれかである？', icon:'🗼'},
  ruins:          {text:'遺跡・古墳で有名？', icon:'🏛️', subjective:true},
  lakeside:       {text:'湖畔のマチですか？', icon:'🚣'},
  shrine_temple:  {text:'寺社仏閣が有名？', icon:'🛕', subjective:true},
  bakumatsu_port: {text:'幕末の開港五港のひとつ？', icon:'🚢'},
  sumo_basho:     {text:'大相撲の本場所が開催される？', icon:'🤼'},
  jleague:        {text:'Jリーグ（J1・J2・J3）のホームスタジアムがある？', icon:'⚽'},
  npb:            {text:'プロ野球チーム(NPB)の本拠地がある？', icon:'⚾'},
  former_capital:   {text:'過去に「都」が置かれたことがある？', icon:'👑'},
  grid_streets:     {text:'街の中心部は碁盤の目のよう？', icon:'🔲', subjective:true},
  kokuho_building:  {text:'国宝に指定されたものがある？', icon:'📜'},
  twelve_castles:   {text:'現存十二天守の城はありますか？', icon:'🏰'},
  sengoku_warlord:  {text:'有名な戦国武将ゆかりの地ですか？', icon:'⚔️', subjective:true},
  tram:             {text:'路面電車が走っていますか？', icon:'🚋'},
  famous_garden:    {text:'有名な庭園がありますか？', icon:'🌳', subjective:true},
  car_town:         {text:'自動車メーカーの本社または主要工場がある？', icon:'🚗'},
  private_railway: {text:'私鉄・第三セクターが走っている？', icon:'🚈'},
  monorail:         {text:'モノレールが走っている？', icon:'🚝'},
  remote_island:    {text:'もしかして離島に存在する？', icon:'🌴'},
  mining_heritage:  {text:'有名な鉱山・炭鉱跡がありますか？', icon:'⛏️', subjective:true},
  night_view:       {text:'日本三大夜景を誇るマチ？', icon:'🌃'},
  war_damage:       {text:'現在の市域で、第二次世界大戦中に大規模な空襲・原爆投下・地上戦があった？', icon:'🕯️'},
  ferris_wheel:     {text:'観覧車はありますか？', icon:'🎡'},
  theme_park:       {text:'テーマパークはありますか？', icon:'🎢'},
  zoo:              {text:'動物園はありますか？', icon:'🦁'},
  aquarium:         {text:'水族館はありますか？', icon:'🐠'},
  brand_beef:       {text:'有名なブランド牛肉はありますか？', icon:'🥩', subjective:true},
  kintetsu:         {text:'近鉄が通っていますか？', icon:'🚃'},
  kanji_one_char:   {text:'マチの名前が漢字一文字ですか？', icon:'📛'},
  chinatown:            {text:'有名な中華街がありますか？', icon:'🏮', subjective:true},
  sand_dunes:           {text:'有名な砂丘がありますか？', icon:'🏜️', subjective:true},
  imperial_university:  {text:'旧帝国大学がありますか？', icon:'🎓'},
  famous_tower:         {text:'有名なタワーがありますか？', icon:'🗼', subjective:true},
  famous_market:        {text:'有名な市場・朝市がありますか？', icon:'🐟', subjective:true},
  exotic_port:          {text:'異国情緒の港町ですか？', icon:'🛳️', subjective:true},
  dome_stadium:         {text:'ドーム球場がありますか？', icon:'🏟️'},
  tea_region:           {text:'茶どころとして有名ですか？', icon:'🍵', subjective:true},
  gokaido_shukuba:      {text:'江戸の五街道の宿場町として知られている？', icon:'🚶', subjective:true},
  pottery_famous:       {text:'焼き物・陶磁器で知られている？', icon:'🏺', subjective:true},
  traditional_craft:    {text:'有名な伝統工芸で知られている？', icon:'🎨', subjective:true},
  horse_racing:         {text:'競馬場がある？', icon:'🐎'},
  famous_horse_breeding: {text:'有名な馬産地？', icon:'🐴', subjective:true},
  literary_figure:      {text:'有名な作家・文学者ゆかりの街？', icon:'✒️', subjective:true},
  joetsu_region:              {text:'上越地方？', icon:'🗾'},
  chuetsu_region:              {text:'中越地方？', icon:'🗾'},
  kaetsu_region:               {text:'下越地方？', icon:'🗾'},
  joetsu_shinkansen_station:  {text:'上越新幹線の駅がある？', icon:'🚄'},
  hokuriku_shinkansen_station:{text:'北陸新幹線の駅がある？', icon:'🚄'},
  hokkaido_shinkansen_station:{text:'北海道新幹線の駅がある？', icon:'🚄'},
  tohoku_shinkansen_station:{text:'東北新幹線の駅がある？', icon:'🚄'},
  tokaido_shinkansen_station:{text:'東海道新幹線の駅がある？', icon:'🚄'},
  sanyo_shinkansen_station:{text:'山陽新幹線の駅がある？', icon:'🚄'},
  kyushu_shinkansen_station:{text:'九州新幹線の駅がある？', icon:'🚄'},
  nishikyushu_shinkansen_station:{text:'西九州新幹線の駅がある？', icon:'🚄'},
  yamagata_shinkansen_station:{text:'山形新幹線の駅がある？', icon:'🚄'},
  akita_shinkansen_station:{text:'秋田新幹線の駅がある？', icon:'🚄'},
  is_village:                  {text:'村？', icon:'🏘️'},
  shinano_river:               {text:'信濃川が流れる？', icon:'🏞️'},
  agano_river:                 {text:'阿賀野川が流れる？', icon:'🏞️'},
  uono_river:                  {text:'魚野川が流れる？', icon:'🏞️'},
  borders_yamagata:            {text:'山形県と接している？', icon:'🗺️'},
  borders_fukushima:           {text:'福島県と接している？', icon:'🗺️'},
  borders_gunma:               {text:'群馬県と接している？', icon:'🗺️'},
  borders_nagano:              {text:'長野県と接している？', icon:'🗺️'},
  borders_toyama:              {text:'富山県と接している？', icon:'🗺️'},
  todai_campus: {text:'東京大学の有名キャンパスがある？', icon:'🎓', subjective:true},
  waseda_campus: {text:'早稲田大学の主要キャンパスがある？', icon:'🎓'},
  keio_campus: {text:'慶應義塾大学の主要キャンパスがある？', icon:'🎓'},
  meiji_campus: {text:'明治大学のキャンパスがある？', icon:'🎓'},
  rikkyo_campus: {text:'立教大学の主要キャンパスがある？', icon:'🎓'},
  chuo_campus: {text:'中央大学の主要キャンパスがある？', icon:'🎓'},
  tus_campus: {text:'東京理科大学の主要キャンパスがある？', icon:'🎓'},
  imperial_palace: {text:'皇居がある？', icon:'🏯'},
  ginza: {text:'銀座がある？', icon:'💎'},
  tokyo_tower_ward: {text:'東京タワーがある？', icon:'🗼'},
  tokyo_dome_ward: {text:'東京ドームがある？', icon:'⚾'},
  sensoji: {text:'浅草寺がある？', icon:'⛩️'},
  skytree_ward: {text:'東京スカイツリーがある？', icon:'🗼'},
  toyosu_market: {text:'豊洲市場がある？', icon:'🐟'},
  haneda_ward: {text:'羽田空港がある？', icon:'✈️'},
  shibamata_taishakuten: {text:'柴又帝釈天がある？', icon:'⛩️'},
  kasai_park: {text:'葛西臨海公園がある？', icon:'🎡'},
  broadway_nakano: {text:'ブロードウェイがある？', icon:'🏬'},
  koenji_area: {text:'高円寺・阿佐ヶ谷・荻窪のどれかがある？', icon:'🎸'},
  jiyugaoka: {text:'自由が丘がある？', icon:'🍰'},
  shakujii_park: {text:'石神井公園がある？', icon:'🌳'},
  odakyu_line: {text:'小田急線の駅がある？', icon:'🚃'},
  keio_inokashira_line: {text:'京王線または井の頭線の駅がある？', icon:'🚃'},
  tokyu_line: {text:'東急線の駅がある？', icon:'🚃'},
  keikyu_line: {text:'京急線の駅がある？', icon:'🚃'},
  seibu_line: {text:'西武鉄道の駅がある？', icon:'🚃'},
  tobu_main_station: {text:'東武鉄道(東上線・越生線以外)の駅がある？', icon:'🚃'},
  tobu_tojo_station: {text:'東武東上線の駅がある？', icon:'🚃'},
  utsunomiya_station: {text:'宇都宮線(黒磯以南)の駅がある？', icon:'🚃'},
  takasaki_line_station: {text:'高崎線の駅がある？', icon:'🚃'},
  keisei_line: {text:'京成線の駅がある？', icon:'🚃'},
  tsukuba_express: {text:'つくばエクスプレスの駅がある？', icon:'🚄'},
  rinkai_line: {text:'りんかい線の駅がある？', icon:'🚃'},
  yurikamome: {text:'ゆりかもめの駅がある？', icon:'🚝'},
  toden_arakawa: {text:'都電荒川線の駅・停留場がある？', icon:'🚋'},
  nippori_toneri: {text:'日暮里・舎人ライナーの駅がある？', icon:'🚝'},
  tokyo_bay: {text:'東京湾に面している？', icon:'🌊'},
  tama_river: {text:'多摩川に接している？', icon:'🏞️'},
  sumida_river: {text:'隅田川に接している？', icon:'🏞️'},
  arakawa_river: {text:'荒川に接している？', icon:'🏞️'},
  edogawa_river: {text:'江戸川に接している？', icon:'🏞️'},
  meguro_river: {text:'目黒川が流れている？', icon:'🏞️'},
  shakujii_river: {text:'石神井川が流れている？', icon:'🏞️'},
  borders_kanagawa: {text:'神奈川県と接している？', icon:'🗺️'},
  borders_saitama: {text:'埼玉県と接している？', icon:'🗺️'},
  borders_chiba: {text:'千葉県と接している？', icon:'🗺️'},
  yamanote_line: {text:'山手線の駅がある？', icon:'🚃'},
  keihintohoku_line: {text:'京浜東北線の駅がある？', icon:'🚃'},
  chuo_rapid: {text:'中央線快速の駅がある？', icon:'🚃'},
  chuo_sobu: {text:'中央・総武線各駅停車の駅がある？', icon:'🚃'},
  joban_line: {text:'常磐線系統の駅がある？', icon:'🚃'},
  saikyo_line: {text:'埼京線の駅がある？', icon:'🚃'},
  ueno_station: {text:'上野駅がある？', icon:'🚉'},
  akabane_station: {text:'赤羽駅がある？', icon:'🚉'},
  nippori_station: {text:'日暮里駅がある？', icon:'🚉'},
  tsunagari_mayu_police: {text:'眉毛が繋がったおまわりさんがいる？', icon:'👮'},
  tv_station_area: {text:'NHKまたは在京民放キー局5社の本社・放送拠点がある？', icon:'📺'},
  sazae_family: {text:'国民的4コマ漫画の一家が住んでいる？', icon:'🏠'},
  hachiko_area: {text:'駅前で主人を待ち続けた犬が有名？', icon:'🐕', subjective:true},
  yose_hall: {text:'落語の定席寄席がある？', icon:'🎤'},
  sailor_moon_stage: {text:'月にかわっておしおきする戦士の舞台？', icon:'🌙'},
  godzilla_head: {text:'巨大な怪獣の頭がビルから出ている？', icon:'🦖'},
  rakugo_stage:  {text:'有名な古典落語の舞台として知られる？', icon:'🎙️', subjective:true},
  sanma_famous:  {text:'さんまで有名？', icon:'🐟', subjective:true},
  monzen:           {text:'有名な門前町ですか？', icon:'🙏', subjective:true},
  bedtown:          {text:'東京23区または政令指定都市のベッドタウン？', icon:'🏠', subjective:true},
  skijyou:          {text:'有名なスキー場がある？', icon:'⛷️', subjective:true},
  geopark:          {text:'ジオパークに指定されている？', icon:'🌋'},
  nuclearpowerplant:{text:'原子力発電所がある？', icon:'☢️'},
  monozukuri:       {text:'ものづくり(製造業)で知られている？', icon:'🏭', subjective:true},
  chukakushi:       {text:'中核市ですか？', icon:'🏛️'},
  tokureishi:       {text:'施行時特例市(かつての特例市)ですか？', icon:'📜'},
  kaikyo_machi:        {text:'海峡のマチ？', icon:'🌊'},
  gakuto:              {text:'「楽都」と呼ばれる音楽のまち？', icon:'🎵', subjective:true},
  hula_girl:           {text:'『フラガール』のふるさと？', icon:'🌺'},
  kannon_zo:           {text:'観音像が有名？', icon:'🗿', subjective:true},
  koedo:               {text:'舟運と蔵造りの町並みで知られる小江戸三市の一つ？', icon:'🏮', subjective:true},
  imono_kupola:        {text:'鋳物産業・キューポラの街として知られる？', icon:'🏭', subjective:true},
  aeon_laketown:       {text:'イオンレイクタウンがある？', icon:'🛍️'},
  sogo_dept:           {text:'そごう（百貨店）がある？', icon:'🏬'},
  isetan_dept:         {text:'伊勢丹（百貨店）がある？', icon:'🏬'},
  mitsukoshi_dept:     {text:'三越（百貨店）がある？', icon:'🏬'},
  daimaru_dept:        {text:'大丸（百貨店）がある？', icon:'🏬'},
  matsuzakaya_dept:    {text:'松坂屋（百貨店）がある？', icon:'🏬'},
  funasshi_famous:     {text:'ふなっしーで全国的に知られた？', icon:'🍐', subjective:true},
  takao_mountain:      {text:'高尾山がある？', icon:'⛰️'},
  curry_famous:        {text:'カレーで有名なマチ？', icon:'🍛', subjective:true},
  anime_seichi:        {text:'アニメの聖地として知られている？', icon:'📺', subjective:true},
  number_in_name:      {text:'自治体名に数字(一、二、三…)が入っている？', icon:'🔢'},
  kigyo_joukamachi:    {text:'企業城下町として知られる？', icon:'🏢', subjective:true},
  hankyu_line:         {text:'阪急電車が通っている？', icon:'🚃'},
  yayoiken_seichi:     {text:'聖地となったやよい軒がある？', icon:'🍚'},
  hirakata_park:       {text:'ひらかたパークがある？', icon:'🎡'},
  keihan_line:         {text:'京阪電車が通っている？', icon:'🚃'},
  kawachi_ondo:        {text:'河内音頭で知られる？', icon:'🎶', subjective:true},
  rugby_machi:         {text:'ラグビーワールドカップ2019の開催地？', icon:'🏉'},
  kougyou_toshi:       {text:'工業都市のイメージが強い？', icon:'🏭', subjective:true},
  hyoujun_jigosen:     {text:'日本標準時子午線が通る？', icon:'🕐'},
  koushien:            {text:'阪神甲子園球場がある？', icon:'⚾'},
  bikan_chiku:         {text:'美観地区で有名？', icon:'🏯', subjective:true},
  gunkou_machi:        {text:'旧海軍の鎮守府が置かれた軍港のまち？', icon:'⚓'},
  seitetsu_kouro:      {text:'製鉄所の高炉がある？', icon:'🏭'},
  fugu_famous:         {text:'ふぐで有名？', icon:'🐡', subjective:true},
  tire_famous:         {text:'タイヤで有名？', icon:'🛞', subjective:true},
  hamburger_famous:    {text:'ハンバーガーで有名？', icon:'🍔', subjective:true},
  kenkyu_gakuen_toshi: {text:'研究学園都市として知られる？', icon:'🔬', subjective:true},
  action_kamen:        {text:'アクション仮面が好きな5歳児が住んでいる？', icon:'🦸'},
  senbei_famous:       {text:'せんべいで有名？', icon:'🍘', subjective:true},
  tanabata_famous:     {text:'七夕まつりで有名？', icon:'🎋', subjective:true},
  uirou_famous:        {text:'ういろうで有名？', icon:'🍡', subjective:true},
  southern_seichi:     {text:'サザンオールスターズの桑田佳祐の出身地？', icon:'🎤'},
  b_kyu_gourmet:       {text:'有名なB級グルメがある？', icon:'🍜', subjective:true},
  beigun_kichi:        {text:'米軍基地がある？', icon:'🎖️'},
  shinkai_gyo:         {text:'深海水族館がある？', icon:'🐟'},
  saboten_machi:       {text:'サボテンのまちとして知られる？', icon:'🌵', subjective:true},
  combinat_yakei:      {text:'コンビナート夜景で有名？', icon:'🌃', subjective:true},
  danjiri_famous:      {text:'だんじり祭で全国的に有名？', icon:'🎊', subjective:true},
  onaji_ookawa:        {text:'市名と同じ大きな川が流れている？', icon:'🏞️', subjective:true},
  kageki_dan:          {text:'有名な歌劇団の本拠地？', icon:'🎭', subjective:true},
  kitanotakeshi:       {text:'北野武が幼少期を過ごしたマチ？', icon:'🎞️'},
  musashino_line:      {text:'JR武蔵野線が通っている？', icon:'🚃'},
  ekimei_chigau:       {text:'市の中心駅の名前が市名と異なる？', icon:'🚉'},
  prefectural_capital: {text:'都道府県庁の所在地？', icon:'🏛️'},
  borders_other_pref:  {text:'他の都道府県と境を接している？', icon:'🗺️'},
  formed_after_2000:   {text:'2000年以降の新設合併で誕生した？', icon:'🤝'},
  national_university: {text:'国立大学の本部がある？', icon:'🎓'},
  expressway_junction: {text:'高速道路のジャンクション(JCT)がある？', icon:'🛣️'},
  hiragana_name:       {text:'名前がすべてひらがな？', icon:'🔤'},
  hiragana_long:       {text:'自治体名から「市区町村」を除いた部分が4文字以上？', icon:'🔠'},
  direction_in_name:   {text:'名前に「東・西・南・北」が入っている？', icon:'🧭'},
  old_province_name:   {text:'名前が旧国名に由来する？', icon:'📜'},
  public_racing_venue: {text:'公営競技場(競馬・競輪・ボート・オートレース)がある？', icon:'🚤'},
  national_government_park: {text:'国営公園がある？', icon:'🌳'},
  film_city:           {text:'映画・映像のまちとして知られる？', icon:'🎬', subjective:true},
  shinsengumi:         {text:'新選組ゆかりのまち？', icon:'⚔️', subjective:true},
  shonan_area:         {text:'「湘南」と呼ばれる地域にある？', icon:'🏄', subjective:true},
  white_mirin_origin:  {text:'白みりん発祥の地？', icon:'🍶'},
  douou_area:               {text:'道央地方にありますか？', icon:'🧭'},
  doutou_area:              {text:'道東地方にありますか？', icon:'🧭'},
  dohoku_area:              {text:'道北地方にありますか？', icon:'🧭'},
  sapporo_metro:            {text:'札幌都市圏に含まれますか？', icon:'🏙️'},
  ishikari_plain:           {text:'石狩平野にありますか？', icon:'🌾'},
  historical_port_hokkaido: {text:'北海道を代表する歴史的な港町ですか？', icon:'⚓', subjective:true},
  industrial_port_hokkaido: {text:'工業港のあるマチですか？', icon:'🏭'},
  hakodate_honsen:          {text:'函館本線が通っていますか？', icon:'🚃'},
  ishikari_river:           {text:'石狩川が流れていますか？', icon:'🏞️'},
  tsugaru_area:       {text:'津軽地方にありますか？', icon:'🧭'},
  sendai_metro:       {text:'仙台都市圏に含まれますか？', icon:'🏙️'},
  kitakami_basin:     {text:'北上川流域のマチですか？', icon:'🏞️'},
  shonai_area:        {text:'庄内地方にありますか？', icon:'🧭'},
  hamadori_area:      {text:'福島県の浜通りにありますか？', icon:'🧭'},
  nakadori_area:      {text:'福島県の中通りにありますか？', icon:'🧭'},
  aizu_area:          {text:'会津地方にありますか？', icon:'🧭'},
  sanriku_area:       {text:'三陸沿岸のマチですか？', icon:'🌊'},
  north_kanto:        {text:'北関東3県のマチですか？', icon:'🧭'},
  tama_area:          {text:'東京の多摩地域にありますか？', icon:'🧭'},
  tokatsu_area:       {text:'千葉県の東葛地域にありますか？', icon:'🧭'},
  ryomo_area:         {text:'群馬県と栃木県にまたがる両毛地域ですか？', icon:'🧭'},
  tone_river_area:    {text:'利根川に接していますか？', icon:'🏞️'},
  sotetsu_line:       {text:'相鉄線の駅がありますか？', icon:'🚃'},
  hokuriku_three_pref:{text:'北陸3県のマチですか？', icon:'🧭'},
  koshin_area:        {text:'甲信地方にありますか？', icon:'🧭'},
  tokai_area:         {text:'東海地方にありますか？', icon:'🧭'},
  owari_area:         {text:'愛知県の尾張地方ですか？', icon:'🧭'},
  mikawa_area:        {text:'愛知県の三河地方ですか？', icon:'🧭'},
  izu_area:           {text:'伊豆地方にありますか？', icon:'🧭'},
  suruga_area:        {text:'駿河地方にありますか？', icon:'🧭'},
  totomi_area:        {text:'遠江地方にありますか？', icon:'🧭'},
  hida_area:          {text:'岐阜県の飛騨地方ですか？', icon:'🧭'},
  mino_area:          {text:'岐阜県の美濃地方ですか？', icon:'🧭'},
  hokushin_area:      {text:'長野県の北信地方ですか？', icon:'🧭'},
  toshin_area:        {text:'長野県の東信地方ですか？', icon:'🧭'},
  chushin_area:       {text:'長野県の中信地方ですか？', icon:'🧭'},
  nanshin_area:       {text:'長野県の南信地方ですか？', icon:'🧭'},
  meitetsu_line:      {text:'名鉄電車が通っていますか？', icon:'🚃'},
  keihanshin_area:    {text:'京阪神地域にありますか？', icon:'🏙️'},
  hokusetsu_area:     {text:'北摂地域にありますか？', icon:'🧭'},
  kawachi_area:       {text:'河内地域にありますか？', icon:'🧭'},
  senshu_area:        {text:'泉州地域にありますか？', icon:'🧭'},
  hanshin_area:       {text:'阪神間のマチですか？', icon:'🧭'},
  harima_area:        {text:'播磨地方にありますか？', icon:'🧭'},
  tajima_area:        {text:'但馬地方にありますか？', icon:'🧭'},
  tamba_area:         {text:'丹波地方にありますか？', icon:'🧭'},
  kyoto_north:        {text:'京都府北部にありますか？', icon:'🧭'},
  nara_basin:         {text:'奈良盆地にありますか？', icon:'🧭'},
  kii_peninsula:      {text:'紀伊半島にありますか？', icon:'🧭'},
  nankai_line:        {text:'南海電車が通っていますか？', icon:'🚃'},
  glasses_industry:            {text:'メガネ産業で有名？', icon:'🤓', subjective:true},
  towel_industry:              {text:'タオルで有名？', icon:'🧺', subjective:true},
  musical_instruments:         {text:'楽器製造で有名？', icon:'🎹', subjective:true},
  gold_leaf:                   {text:'金箔で有名？', icon:'✨', subjective:true},
  denim_industry:              {text:'デニム・ジーンズで有名？', icon:'👖', subjective:true},
  pearl_farming:               {text:'真珠の養殖で有名？', icon:'🦪', subjective:true},
  shipbuilding:                {text:'造船業で有名？', icon:'🚢', subjective:true},
  furniture_industry:          {text:'家具の産地として有名？', icon:'🪑', subjective:true},
  washi_famous:                {text:'和紙の産地として有名？', icon:'📜', subjective:true},
  pharmaceutical_industry:     {text:'製薬産業で知られる？', icon:'💊', subjective:true},
  fireworks_industry:          {text:'花火の製造で有名？', icon:'🎆', subjective:true},
  stone_industry:              {text:'石材・石切りで有名？', icon:'🪨', subjective:true},
  vinegar_famous:              {text:'酢の生産で有名？', icon:'🍶', subjective:true},
  soy_sauce_famous:            {text:'醤油の生産で有名？', icon:'🍶', subjective:true},
  miso_famous:                 {text:'八丁味噌で有名？', icon:'🍲', subjective:true},
  gyoza_famous:                {text:'餃子で有名？', icon:'🥟', subjective:true},
  yakisoba_famous:             {text:'焼きそばで有名？', icon:'🍜', subjective:true},
  udon_famous:                 {text:'うどんで有名？', icon:'🍜', subjective:true},
  soba_famous:                 {text:'そばで有名？', icon:'🍜', subjective:true},
  ramen_famous:                {text:'ラーメンで有名？', icon:'🍜', subjective:true},
  castella_famous:             {text:'カステラで有名？', icon:'🍰', subjective:true},
  kamaboko_famous:             {text:'かまぼこで有名？', icon:'🍥', subjective:true},
  lacquerware_famous:          {text:'漆器で有名？', icon:'🥢', subjective:true},
  ancient_provincial_capital:  {text:'古代の国府が置かれていた？', icon:'🏛️'},
  kokubunji_site:              {text:'国分寺・国分尼寺跡がある？', icon:'🏯'},
  traditional_buildings_district: {text:'重要伝統的建造物群保存地区がある？', icon:'🏘️'},
  little_kyoto:                {text:'「小京都」と呼ばれている？', icon:'⛩️', subjective:true},
  giant_buddha:                {text:'巨大な大仏・観音像がある？', icon:'🗿', subjective:true},
  sea_torii:                   {text:'海上や海辺の大鳥居で有名？', icon:'⛩️', subjective:true},
  deer_in_city:                {text:'鹿が市街地を歩くことで有名？', icon:'🦌', subjective:true},
  gassho_zukuri:               {text:'合掌造り集落がある？', icon:'🏠'},
  ferry_available:             {text:'定期フェリーがある？', icon:'⛴️'},
  no_railway_station:          {text:'市内に鉄道駅がひとつもない？', icon:'🚉'},
  shikoku_pilgrimage:          {text:'四国八十八ヶ所の札所がある？', icon:'🙏'},
  olympic_venue:               {text:'オリンピック競技が開催された？', icon:'🏅'},
  famous_battlefield:          {text:'有名な古戦場がある？', icon:'⚔️', subjective:true},
  kitamaebune_port:            {text:'北前船の寄港地として栄えた？', icon:'⛵', subjective:true},
  famous_fish_catch:           {text:'漁獲される特定の魚介で全国的に有名？', icon:'🐟', subjective:true},
  animal_in_name: {text:'自治体名に動物を表す漢字が入っている？', icon:'🐾'},
  ariake_coast: {text:'有明海に面していますか？', icon:'🧭'},
  big_small_in_name: {text:'自治体名に「大」または「小」が入っている？', icon:'🔠'},
  bingo_area: {text:'備後地方にありますか？', icon:'🧭'},
  body_part_in_name: {text:'自治体名に体の一部を表す漢字が入っている？', icon:'👁️'},
  chikugo_area: {text:'筑後地方にありますか？', icon:'🧭'},
  chikuho_area: {text:'筑豊地方にありますか？', icon:'🧭'},
  chikuzen_area: {text:'筑前地方にありますか？', icon:'🧭'},
  chugoku_mountain_basin: {text:'中国山地の盆地にありますか？', icon:'🧭'},
  chuyo_area: {text:'愛媛県の中予地方ですか？', icon:'🧭'},
  color_in_name: {text:'自治体名に色を表す漢字が入っている？', icon:'🎨'},
  dosan_line: {text:'土讃線が通っていますか？', icon:'🚃'},
  four_plus_name: {text:'自治体名が4文字以上？（「市区町村」を除く）', icon:'📏'},
  fukuoka_metro: {text:'福岡都市圏に含まれますか？', icon:'🧭'},
  hakubi_line: {text:'伯備線が通っていますか？', icon:'🚃'},
  hard_to_read_name: {text:'難読地名として知られている？', icon:'❓', subjective:true},
  hiroshima_metro: {text:'広島都市圏に含まれますか？', icon:'🧭'},
  honshu_bridge: {text:'本州方面と橋で結ばれていますか？', icon:'🧭'},
  izumo_area: {text:'出雲地方にありますか？', icon:'🧭'},
  kagoshima_main_line: {text:'鹿児島本線が通っていますか？', icon:'🚃'},
  kawa_in_name: {text:'自治体名に「川」が入っている？', icon:'🏞️'},
  kitakyushu_area: {text:'北九州地域にありますか？', icon:'🧭'},
  nanyo_area: {text:'愛媛県の南予地方ですか？', icon:'🧭'},
  new_old_in_name: {text:'自治体名に「新」または「古」が入っている？', icon:'🆕'},
  nippo_main_line: {text:'日豊本線が通っていますか？', icon:'🚃'},
  nishitetsu_line: {text:'西鉄電車が走っていますか？', icon:'🚃'},
  northern_kyushu: {text:'北部九州にありますか？', icon:'🧭'},
  okinawa_main_island: {text:'沖縄本島にありますか？', icon:'🧭'},
  okinawa_south_central: {text:'沖縄本島の中南部にありますか？', icon:'🧭'},
  osumi_area: {text:'大隅地方にありますか？', icon:'🧭'},
  paper_industry_shikoku: {text:'製紙業で知られるマチですか？', icon:'🏭', subjective:true},
  plant_in_name: {text:'自治体名に植物を表す漢字が入っている？', icon:'🌿'},
  pref_name_in_city_name: {text:'自治体名に都道府県名が含まれている？', icon:'🗾'},
  sakishima_islands: {text:'宮古・八重山地域にありますか？', icon:'🧭'},
  same_name_other_pref: {text:'同名の自治体が別の都道府県にもある？', icon:'👯'},
  sanin_area: {text:'山陰地方にありますか？', icon:'🧭'},
  sanin_main_line: {text:'山陰本線が通っていますか？', icon:'🚃'},
  sanyo_area: {text:'山陽地方にありますか？', icon:'🧭'},
  sanyo_main_line: {text:'山陽本線が通っていますか？', icon:'🚃'},
  satsuma_area: {text:'薩摩地方にありますか？', icon:'🧭'},
  sea_word_in_name: {text:'自治体名に「海・浜・浦」が入っている？', icon:'🌊'},
  setouchi_industrial: {text:'瀬戸内工業地域のマチですか？', icon:'🧭'},
  shima_in_name: {text:'自治体名に「島」が入っている？', icon:'🏝️'},
  southern_kyushu: {text:'南九州にありますか？', icon:'🧭'},
  ta_in_name: {text:'自治体名に「田」が入っている？', icon:'🌾'},
  toyo_area: {text:'愛媛県の東予地方ですか？', icon:'🧭'},
  yama_in_name: {text:'自治体名に「山」が入っている？', icon:'⛰️'},
  yosan_line: {text:'予讃線が通っていますか？', icon:'🚃'},
  ic_doo:        {text:'道央道のインターチェンジがある？', icon:'🛣️'},
  ic_sasson:     {text:'札樽道のインターチェンジがある？', icon:'🛣️'},
  ic_shiribeshi: {text:'後志道のインターチェンジがある？', icon:'🛣️'},
  ic_doto:       {text:'道東道のインターチェンジがある？', icon:'🛣️'},
  ic_tohoku:         {text:'東北道のインターチェンジがある？', icon:'🛣️'},
  ic_hachinohe:      {text:'八戸道のインターチェンジがある？', icon:'🛣️'},
  ic_aomori:         {text:'青森道のインターチェンジがある？', icon:'🛣️'},
  ic_kamaishi:       {text:'釜石道のインターチェンジがある？', icon:'🛣️'},
  ic_akita:          {text:'秋田道のインターチェンジがある？', icon:'🛣️'},
  ic_yamagata:       {text:'山形道のインターチェンジがある？', icon:'🛣️'},
  ic_tohoku_chuo:    {text:'東北中央道のインターチェンジがある？', icon:'🛣️'},
  ic_nihonkai_tohoku:{text:'日本海東北道のインターチェンジがある？', icon:'🛣️'},
  ic_banetsu:        {text:'磐越道のインターチェンジがある？', icon:'🛣️'},
  ic_joban:          {text:'常磐道のインターチェンジがある？', icon:'🛣️'},
  ic_kanetsu:        {text:'関越道のインターチェンジがある？', icon:'🛣️'},
  ic_joshinetsu:     {text:'上信越道のインターチェンジがある？', icon:'🛣️'},
  ic_hokukanto:      {text:'北関東道のインターチェンジがある？', icon:'🛣️'},
  ic_higashikanto:   {text:'東関東道のインターチェンジがある？', icon:'🛣️'},
  ic_tokyo_gaikan:   {text:'東京外環道のインターチェンジがある？', icon:'🛣️'},
  ic_tateyama:       {text:'館山道のインターチェンジがある？', icon:'🛣️'},
  ic_shin_kuko:      {text:'新空港道のインターチェンジがある？', icon:'🛣️'},
  ic_chuo:           {text:'中央道のインターチェンジがある？', icon:'🛣️'},
  ic_nagano:         {text:'長野道のインターチェンジがある？', icon:'🛣️'},
  ic_hokuriku:       {text:'北陸道のインターチェンジがある？', icon:'🛣️'},
  ic_tokai_hokuriku: {text:'東海北陸道のインターチェンジがある？', icon:'🛣️'},
  ic_tomei:          {text:'東名高速のインターチェンジがある？', icon:'🛣️'},
  ic_shin_tomei:     {text:'新東名高速のインターチェンジがある？', icon:'🛣️'},
  ic_meishin:        {text:'名神高速のインターチェンジがある？', icon:'🛣️'},
  ic_shin_meishin:   {text:'新名神高速のインターチェンジがある？', icon:'🛣️'},
  ic_tomeihan:       {text:'東名阪道のインターチェンジがある？', icon:'🛣️'},
  ic_isewangan:      {text:'伊勢湾岸道のインターチェンジがある？', icon:'🛣️'},
  ic_ise:            {text:'伊勢道のインターチェンジがある？', icon:'🛣️'},
  ic_kisei:          {text:'紀勢道のインターチェンジがある？', icon:'🛣️'},
  ic_meinikan:       {text:'名二環(名古屋第二環状道)のインターチェンジがある？', icon:'🛣️'},
  ic_kinki:          {text:'近畿道のインターチェンジがある？', icon:'🛣️'},
  ic_hanwa:          {text:'阪和道のインターチェンジがある？', icon:'🛣️'},
  ic_nishimeihan:    {text:'西名阪道のインターチェンジがある？', icon:'🛣️'},
  ic_maizuru_wakasa: {text:'舞鶴若狭道のインターチェンジがある？', icon:'🛣️'},
  ic_kansai_kuko:    {text:'関西空港道のインターチェンジがある？', icon:'🛣️'},
  ic_chugoku:        {text:'中国道のインターチェンジがある？', icon:'🛣️'},
  ic_sanyo:          {text:'山陽道のインターチェンジがある？', icon:'🛣️'},
  ic_tottori:        {text:'鳥取道のインターチェンジがある？', icon:'🛣️'},
  ic_yonago:         {text:'米子道のインターチェンジがある？', icon:'🛣️'},
  ic_okayama:        {text:'岡山道のインターチェンジがある？', icon:'🛣️'},
  ic_hamada:         {text:'浜田道のインターチェンジがある？', icon:'🛣️'},
  ic_matsue:         {text:'松江道のインターチェンジがある？', icon:'🛣️'},
  ic_onomichi:       {text:'尾道道のインターチェンジがある？', icon:'🛣️'},
  ic_hiroshima:      {text:'広島道のインターチェンジがある？', icon:'🛣️'},
  ic_harima:         {text:'播磨道のインターチェンジがある？', icon:'🛣️'},
  ic_takamatsu:      {text:'高松道のインターチェンジがある？', icon:'🛣️'},
  ic_tokushima:      {text:'徳島道のインターチェンジがある？', icon:'🛣️'},
  ic_matsuyama:      {text:'松山道のインターチェンジがある？', icon:'🛣️'},
  ic_kochi:          {text:'高知道のインターチェンジがある？', icon:'🛣️'},
  ic_kyushu:         {text:'九州道のインターチェンジがある？', icon:'🛣️'},
  ic_higashi_kyushu: {text:'東九州道のインターチェンジがある？', icon:'🛣️'},
  ic_nagasaki:       {text:'長崎道のインターチェンジがある？', icon:'🛣️'},
  ic_oita:           {text:'大分道のインターチェンジがある？', icon:'🛣️'},
  ic_miyazaki:       {text:'宮崎道のインターチェンジがある？', icon:'🛣️'},
  ic_okinawa:        {text:'沖縄道のインターチェンジがある？', icon:'🛣️'},
  koshien_champion:     {text:'甲子園(春・夏)の優勝校がある？', icon:'⚾'},
  sumo_yokozuna_ozeki:  {text:'昭和以降、横綱または大関を輩出した？', icon:'🤼'},
  famous_cape:          {text:'有名な岬がある？', icon:'🌊', subjective:true},
  yamata_no_orochi: {text:'ヤマタノオロチ神話の舞台として知られる？', icon:'🏯', subjective:true},
  hibagon: {text:'謎の類人猿「ヒバゴン」で知られる？', icon:'✨', subjective:true},
  mori_motonari: {text:'毛利元就の本拠・郡山城がある？', icon:'🏯'},
  hiruzen_highland: {text:'蒜山高原がある？', icon:'🗺️'},
  miyamoto_musashi_station: {text:'「宮本武蔵駅」がある？', icon:'✨'},
  akiyoshidai: {text:'秋吉台や秋芳洞で有名？', icon:'🎡', subjective:true},
  mizuki_shigeru_road: {text:'水木しげるロードがある？', icon:'🎡'},
  yasugi_bushi: {text:'どじょうすくいで知られる？', icon:'🏯', subjective:true},
  gonokawa: {text:'江の川が流れている？', icon:'🗺️'},
  donticchi_fish: {text:'「どんちっち三魚」という水産ブランドがある？', icon:'🍽️'},
  shokasonjuku: {text:'吉田松陰の松下村塾がある？', icon:'🏯'},
  motonosumi_shrine: {text:'海沿いに赤い鳥居が100基以上並ぶ神社がある？', icon:'🎡'},
  bizen_ware: {text:'備前焼の代表的な産地？', icon:'🏯'},
  osafune_sword_museum: {text:'備前長船刀剣博物館がある？', icon:'🏯'},
  naoshima_gateway: {text:'直島へ渡る主要な港がある？', icon:'⛴️'},
  horseshoe_crab_museum: {text:'カブトガニを専門にした博物館がある？', icon:'🎡'},
  astronomy_city: {text:'大型望遠鏡がある「天文のまち」？', icon:'🎡'},
  sunameri: {text:'スナメリと出会えることで有名？', icon:'🎡', subjective:true},
  naval_academy: {text:'旧海軍兵学校がある？', icon:'🏯'},
  goldfish_lantern: {text:'金魚ちょうちんで有名？', icon:'🎡', subjective:true},
  ito_hirobumi_birthplace: {text:'初代内閣総理大臣・伊藤博文の生誕地？', icon:'🏯'},
  train_factory: {text:'新幹線などの鉄道車両を製造する工場がある？', icon:'🏭'},
  stork: {text:'コウノトリで知られるマチ？', icon:'🎡', subjective:true},
  hyonosen: {text:'兵庫県最高峰の氷ノ山がある？', icon:'🗺️'},
  takeda_castle: {text:'「天空の城」と呼ばれる竹田城跡がある？', icon:'🎡'},
  tamba_dinosaur: {text:'恐竜化石「丹波竜」が発見された？', icon:'✨'},
  black_soybeans: {text:'黒豆や黒枝豆で全国的に有名？', icon:'🍽️', subjective:true},
  japan_navel: {text:'東経135度と北緯35度が交わる「日本のへそ」？', icon:'🗺️'},
  miki_hardware: {text:'大工道具などの「三木金物」で有名？', icon:'🏭', subjective:true},
  balloon_city: {text:'「気球の飛ぶまち」を掲げている？', icon:'✨'},
  saga_balloon_festa: {text:'バルーンフェスタで有名なマチ？', icon:'🎈', subjective:true},
  sake_birthplace: {text:'日本酒発祥の地を名乗っている？', icon:'🍽️'},
  peron_festival: {text:'ペーロン競漕の祭りで有名？', icon:'🎡', subjective:true},
  ako_ronin: {text:'忠臣蔵と赤穂浪士のまち？', icon:'🏯'},
  awaji_puppet_theater: {text:'人形浄瑠璃で有名？', icon:'🏯', subjective:true},
  nijigen_no_mori: {text:'ニジゲンノモリがある？', icon:'🎡'},
  akechi_mitsuhide_castle: {text:'明智光秀が築いた城がある？', icon:'🏯'},
  gunze_birthplace: {text:'グンゼ発祥の地？', icon:'🏭'},
  nihon_sankei: {text:'日本三景がある？', icon:'⛩️'},
  singing_sand: {text:'鳴き砂の浜で知られる？', icon:'🎡', subjective:true},
  miyama_thatched_village: {text:'美山かやぶきの里がある？', icon:'🎡'},
  hozugawa_boat_ride: {text:'嵐山まで続く保津川下りの出発地？', icon:'🎡'},
  doushisha: {text:'同志社大学のキャンパスがある？', icon:'🎓'},
  nagaoka_tenmangu: {text:'長岡天満宮がある？', icon:'🎡'},
  joruriji: {text:'国宝の九体阿弥陀如来像がある浄瑠璃寺がある？', icon:'🏯'},
  jrosyu_ume: {text:'青谷梅林と「城州白」という梅で知られる？', icon:'🍽️', subjective:true},
  ritsumeikan: {text:'立命館大学のキャンパスがある？', icon:'🎓'},
  pm_birthplace: {text:'歴代の内閣総理大臣が生まれたマチ？', icon:'🏛️'},
  name_has_betsu: {text:'自治体名に「別」が入る？', icon:'🔤'},
  hokkaido_greenland: {text:'北海道グリーンランドがある？', icon:'🎢'},
  famous_prison: {text:'明治期の旧監獄の建物が保存されている？', icon:'🔒'},
  yakitori_famous_bibai: {text:'焼き鳥で有名？', icon:'🍢', subjective:true},
  coal_mine_shaft: {text:'旧炭鉱の立坑櫓が残っている？', icon:'⛏️'},
  drift_ice: {text:'流氷の接岸で有名？', icon:'🧊', subjective:true},
  suffolk_sheep: {text:'サフォーク羊で有名？', icon:'🐑', subjective:true},
  ammonite_fossil: {text:'アンモナイトの化石で有名？', icon:'🐚', subjective:true},
  matsuo_jingisukan: {text:'松尾ジンギスカンの本店がある？', icon:'🍖'},
  sweet_road: {text:'スイートロードがある？', icon:'🍬'},
  least_populous_city: {text:'日本で人口が最も少ない市？', icon:'👤'},
  urokodango: {text:'ウロコダンゴが名物？', icon:'🍡'},
  bear_park: {text:'CMが有名なクマ牧場がある？', icon:'🐻'},
  fighters_farm: {text:'プロ野球球団のファーム施設の移転予定地？', icon:'⚾'},
  bijin_town: {text:'日本一美人が多いと言われているマチ？', icon:'💃', subjective:true},
  yoshi_ikuzo: {text:'「テレビも無え!ラジオも無え!」と歌われるマチ？', icon:'🎤'},
  oirase: {text:'奥入瀬渓流がある？', icon:'🍃'},
  osorezan: {text:'恐山がある？', icon:'⛰️'},
  shakoki_dogu: {text:'遮光器土偶が出土した？', icon:'🗿'},
  seibien: {text:'国指定名勝の盛美園がある？', icon:'🌳'},
  jodogahama: {text:'浄土ヶ浜がある？', icon:'🏖️'},
  goishi_coast: {text:'碁石海岸がある？', icon:'🪨'},
  miyazawa_kenji: {text:'宮沢賢治のふるさと？', icon:'📖'},
  tensho_chi: {text:'展勝地の桜並木で有名？', icon:'🌸', subjective:true},
  amber_kuji: {text:'国内有数の琥珀産地として知られる？', icon:'💎', subjective:true},
  tono_monogatari: {text:'『遠野物語』やカッパ伝説で有名？', icon:'🥒', subjective:true},
  geibikei: {text:'猊鼻渓がある？', icon:'⛰️'},
  ipponmatsu: {text:'奇跡の一本松がある？', icon:'🌲'},
  ohtani_shohei: {text:'大谷翔平の出身地？', icon:'⚾'},
  zashiki_warashi: {text:'座敷わらしで知られる金田一温泉がある？', icon:'👘', subjective:true},
  appi_kogen: {text:'安比高原がある？', icon:'⛷️'},
  ishinomori: {text:'石ノ森章太郎の出身地？', icon:'🎨'},
  chagu_chagu: {text:'チャグチャグ馬コの出発地がある？', icon:'🐴'},
  shiogama_shrine: {text:'鹽竈神社がある？', icon:'⛩️'},
  fukahire: {text:'フカヒレやサメの水揚げで有名？', icon:'🦈', subjective:true},
  shiroishi_umen: {text:'白石温麺が名物？', icon:'🍜'},
  sendai_airport: {text:'仙台空港の旅客ターミナルがある？', icon:'✈️'},
  jaxa_kakuda: {text:'JAXAの宇宙センターがある？', icon:'🚀'},
  takekoma_shrine: {text:'竹駒神社がある？', icon:'⛩️'},
  meiji_mura: {text:'「明治村」として観光資源にしている？', icon:'🏛️'},
  kano_eiko: {text:'狩野英孝の出身地？', icon:'😎'},
  blue_impulse: {text:'ブルーインパルスの本拠地がある？', icon:'✈️'},
  naruko_onsen: {text:'鳴子温泉郷がある？', icon:'♨️'},
  town_to_city_2016: {text:'2016年に町から市になった？', icon:'🏙️'},
  basketball_town: {text:'「バスケの街」として知られる？', icon:'🏀', subjective:true},
  kamakura_yokote: {text:'かまくらで有名？', icon:'⛄', subjective:true},
  akita_inu_hachiko: {text:'秋田犬と忠犬ハチ公のふるさと？', icon:'🐕'},
  namahage: {text:'なまはげで有名？', icon:'👹', subjective:true},
  inaniwa_udon: {text:'稲庭うどんの産地？', icon:'🍜'},
  oyu_stone_circle: {text:'大湯環状列石がある？', icon:'🪨'},
  yuri_kogen_railway: {text:'由利高原鉄道が走っている？', icon:'🚃'},
  blumen_akita: {text:'ブルーメッセあきたがある？', icon:'🌷'},
  odate_noshiro_airport: {text:'大館能代空港がある？', icon:'✈️'},
  tdk_town: {text:'TDKの企業城下町？', icon:'🏭'},
  kakunodate_tazawako: {text:'角館の武家屋敷と田沢湖がある？', icon:'🏯'},
  sankyo_soko: {text:'山居倉庫がある？', icon:'🏚️'},
  higashizawa_rose: {text:'東沢バラ公園がある？', icon:'🌹'},
  ayame_park: {text:'あやめ公園で有名？', icon:'🌸', subjective:true},
  hanagasa_tendo: {text:'花笠音頭「花の山形、紅葉の〇〇」？', icon:'🎵'},
  ginzan_onsen: {text:'銀山温泉がある？', icon:'♨️'},
  kumano_taisha: {text:'「東北の伊勢」と呼ばれる熊野大社がある？', icon:'⛩️'},
  tsuburaya_eiji: {text:'ウルトラマンの生みの親・円谷英二の故郷？', icon:'👽'},
  matsukawaura: {text:'松川浦がある？', icon:'🌊'},
  kiku_ningyo_nihonmatsu: {text:'菊人形や提灯祭りで有名？', icon:'🏮', subjective:true},
  abukumado: {text:'あぶくま洞がある？', icon:'🕳️'},
  kacchu_keiba: {text:'甲冑競馬・神旗争奪戦が行われる？', icon:'🐎'},
  anpogaki: {text:'あんぽ柿の発祥地として知られる？', icon:'🌰', subjective:true},
  william_park: {text:'プリンス・ウィリアムズ・パークの英国庭園がある？', icon:'🌷'},
  natural_gas_town: {text:'天然ガスの産出量が日本有数？', icon:'🔥'},
  region_hokkaido: {text:'北海道にある？', icon:'🗾'},
  region_tohoku: {text:'東北地方にある？', icon:'🗾'},
  region_kanto: {text:'茨城・栃木・群馬・埼玉・千葉・東京・神奈川にある？', icon:'🗾'},
  region_chubu: {text:'新潟・北陸・甲信・東海地方にある？', icon:'🗾'},
  region_kinki: {text:'三重・滋賀・京都・大阪・兵庫・奈良・和歌山にある？', icon:'🗾'},
  region_chugoku: {text:'中国地方にある？', icon:'🗾'},
  region_shikoku: {text:'四国にある？', icon:'🗾'},
  region_kyushu: {text:'九州・沖縄にある？', icon:'🗾'},
  // 47都道府県を直接たずねる質問。序盤の総当たりを防ぐため、出題時期と回数を厳しく制御する(canAskPrefQuestion)。
  pref_hokkaido: {text:'北海道にありますか？', icon:'📍'},
  pref_aomori: {text:'青森県にありますか？', icon:'📍'},
  pref_iwate: {text:'岩手県にありますか？', icon:'📍'},
  pref_miyagi: {text:'宮城県にありますか？', icon:'📍'},
  pref_akita: {text:'秋田県にありますか？', icon:'📍'},
  pref_yamagata: {text:'山形県にありますか？', icon:'📍'},
  pref_fukushima: {text:'福島県にありますか？', icon:'📍'},
  pref_ibaraki: {text:'茨城県にありますか？', icon:'📍'},
  pref_tochigi: {text:'栃木県にありますか？', icon:'📍'},
  pref_gunma: {text:'群馬県にありますか？', icon:'📍'},
  pref_saitama: {text:'埼玉県にありますか？', icon:'📍'},
  pref_chiba: {text:'千葉県にありますか？', icon:'📍'},
  pref_tokyo: {text:'東京都にありますか？', icon:'📍'},
  pref_kanagawa: {text:'神奈川県にありますか？', icon:'📍'},
  pref_niigata: {text:'新潟県にありますか？', icon:'📍'},
  pref_toyama: {text:'富山県にありますか？', icon:'📍'},
  pref_ishikawa: {text:'石川県にありますか？', icon:'📍'},
  pref_fukui: {text:'福井県にありますか？', icon:'📍'},
  pref_yamanashi: {text:'山梨県にありますか？', icon:'📍'},
  pref_nagano: {text:'長野県にありますか？', icon:'📍'},
  pref_gifu: {text:'岐阜県にありますか？', icon:'📍'},
  pref_shizuoka: {text:'静岡県にありますか？', icon:'📍'},
  pref_aichi: {text:'愛知県にありますか？', icon:'📍'},
  pref_mie: {text:'三重県にありますか？', icon:'📍'},
  pref_shiga: {text:'滋賀県にありますか？', icon:'📍'},
  pref_kyoto: {text:'京都府にありますか？', icon:'📍'},
  pref_osaka: {text:'大阪府にありますか？', icon:'📍'},
  pref_hyogo: {text:'兵庫県にありますか？', icon:'📍'},
  pref_nara: {text:'奈良県にありますか？', icon:'📍'},
  pref_wakayama: {text:'和歌山県にありますか？', icon:'📍'},
  pref_tottori: {text:'鳥取県にありますか？', icon:'📍'},
  pref_shimane: {text:'島根県にありますか？', icon:'📍'},
  pref_okayama: {text:'岡山県にありますか？', icon:'📍'},
  pref_hiroshima: {text:'広島県にありますか？', icon:'📍'},
  pref_yamaguchi: {text:'山口県にありますか？', icon:'📍'},
  pref_tokushima: {text:'徳島県にありますか？', icon:'📍'},
  pref_kagawa: {text:'香川県にありますか？', icon:'📍'},
  pref_ehime: {text:'愛媛県にありますか？', icon:'📍'},
  pref_kochi: {text:'高知県にありますか？', icon:'📍'},
  pref_fukuoka: {text:'福岡県にありますか？', icon:'📍'},
  pref_saga: {text:'佐賀県にありますか？', icon:'📍'},
  pref_nagasaki: {text:'長崎県にありますか？', icon:'📍'},
  pref_kumamoto: {text:'熊本県にありますか？', icon:'📍'},
  pref_oita: {text:'大分県にありますか？', icon:'📍'},
  pref_miyazaki: {text:'宮崎県にありますか？', icon:'📍'},
  pref_kagoshima: {text:'鹿児島県にありますか？', icon:'📍'},
  pref_okinawa: {text:'沖縄県にありますか？', icon:'📍'},
  kitasubaru: {text:'市立天文台「きたすばる」がある？', icon:'🔭'},
  kita_no_kuni: {text:'ドラマ『北の国から』の主な舞台？', icon:'📺'},
  kita_no_shonan: {text:'「北の湘南」と呼ばれている？', icon:'🏖️', subjective:true},
  shizumine: {text:'日本さくら名所100選の「静峰ふるさと公園」がある？', icon:'🌸'},
  shimotsuma_movie: {text:'ロリータファッションの少女とヤンキー少女が登場する映画の舞台？', icon:'🎬'},
  hitachi_kokufu: {text:'古代に常陸国の国府が置かれていた？', icon:'🏛️'},
  toyoda_castle: {text:'天守閣風の地域交流センター「豊田城」がある？', icon:'🏯'},
  moriya_junction: {text:'つくばエクスプレスと、取手方面へ向かう私鉄が接続する駅がある？', icon:'🚉'},
  namegata_farm: {text:'廃校を活用したサツマイモの体験型農業テーマパークがある？', icon:'🍠'},
  hananuki: {text:'紅葉で知られる花貫渓谷がある？', icon:'🍁', subjective:true},
  happogahara: {text:'八方ヶ原に大規模なレンゲツツジの群生地がある？', icon:'🌺'},
  kanuma_tsuchi: {text:'盆栽や園芸に使われる、黄色い軽石質の土の産地？', icon:'🪴'},
  nasu_yoichi: {text:'那須与一にちなんだ祭りが開かれる？', icon:'🏹'},
  jichi_medical: {text:'自治医科大学とその附属病院がある？', icon:'🏥'},
  bihada_onsen: {text:'日本三大美肌の湯の一つとされる温泉がある？', icon:'♨️'},
  moomin_park: {text:'ムーミンの物語を再現したテーマパークがある？', icon:'🎢'},
  ageo_sodou: {text:'1973年に通勤客が列車を占拠した国鉄騒動の舞台？', icon:'🚃'},
  iroha_toi: {text:'野火止用水を新河岸川の対岸へ渡した「いろは樋」で知られる？', icon:'💧', subjective:true},
  okegawa_benibana: {text:'中山道の宿場町で、紅花を市のシンボルとしている？', icon:'🌺'},
  ishito_zakura: {text:'日本五大桜の一つ「石戸蒲ザクラ」がある？', icon:'🌸'},
  kinchakuda: {text:'巾着田の大規模な曼珠沙華群生地がある？', icon:'🌺'},
  heirinji: {text:'国指定天然記念物の境内林を持つ平林寺がある？', icon:'🌳'},
  lucky_star: {text:'アニメ『らき☆すた』の聖地として知られる鷲宮神社がある？', icon:'⛩️', subjective:true},
  johnson_town: {text:'米国風の街並み「ジョンソンタウン」がある？', icon:'🏘️'},
  saika_matsuri: {text:'夏に「彩夏祭」が開かれる？', icon:'🎆'},
  mizuko_kaizuka: {text:'国指定史跡の水子貝塚がある？', icon:'🏺'},
  smallest_city: {text:'全国で最も面積が小さい市？', icon:'📏'},
  yashio_hanamomo: {text:'中川沿いに大規模な花桃の名所がある？', icon:'🌸'},
  yoshikawa_namazu: {text:'ナマズ料理と「なまずの里」で知られる？', icon:'🐟', subjective:true},
  shiraoka_nashi: {text:'特産の梨に「美人」を冠したブランド名がある？', icon:'🍐'},
  kurohama_kaizuka: {text:'国指定史跡の黒浜貝塚がある？', icon:'🏺'},
  hanyu_yurugp: {text:'全国各地のご当地キャラクターが集まる大規模イベントが開かれる？', icon:'🧸'},
  inzai_datacenter: {text:'国内有数のデータセンター集積地として知られる？', icon:'💾', subjective:true},
  kamagaya_farm: {text:'北海道日本ハムファイターズのファーム球場がある？', icon:'⚾'},
  iioka_cape: {text:'九十九里浜の東端に飯岡刑部岬がある？', icon:'🌊'},
  tomisato_suika: {text:'給水所ならぬ「給スイカ所」が設けられるロードレースがある？', icon:'🍉'},
  sanbu_sugi: {text:'関東を代表する赤みのある杉材の産地？', icon:'🌲'},
  keisei_rose: {text:'京成バラ園がある？', icon:'🌹'},
  aqualine_gate: {text:'東京湾アクアラインの千葉県側の玄関口？', icon:'🌉'},
  yotsukaido_name: {text:'市名が、四方向へ延びる街道の交差点に由来する？', icon:'🛣️'},
  onari_kaido: {text:'徳川家康の鷹狩りに使われた御成街道の終点だった？', icon:'🦅'},
  yachimata_peanuts: {text:'落花生の産地として全国的に有名？', icon:'🥜', subjective:true},
  nashibou: {text:'「なし坊」という梨のキャラクターがいる？', icon:'🍐'},
  soza_ueki: {text:'植木・苗木の出荷が全国有数？', icon:'🌱'},
  blueberry_origin: {text:'日本で初めてブルーベリーが農産物として栽培された？', icon:'🫐'},
  kishozeisei_center: {text:'気象庁の気象衛星センターがある？', icon:'🛰️'},
  summerland: {text:'東京サマーランドがある？', icon:'🎢'},
  hamura_zeki: {text:'玉川上水の水を取り入れる堰がある？', icon:'💧'},
  baseside_street: {text:'国道16号沿いに米国風商店街「ベースサイドストリート」がある？', icon:'🏘️'},
  zama_himawari: {text:'首都圏有数の規模を誇るヒマワリ畑がある？', icon:'🌻'},
  zushi_marina: {text:'湘南の海沿いに大型ヨットハーバーとリゾート施設群がある？', icon:'⛵'},
  ayase_no_station: {text:'市内に鉄道駅がなく、厚木基地の一部がある？', icon:'✈️'},
  nono_odoriji: {text:'市名に「々」が入る唯一の市？', icon:'🔤'},
  linear_center: {text:'リニア実験線の見学センターがある？', icon:'🚄'},
  shakou_elevator: {text:'住宅地と駅を結ぶ大型斜行エレベーターがある？', icon:'🛗'},
  saruhashi: {text:'日本三奇橋の猿橋がある？', icon:'🌉'},
  enbaragawa: {text:'伊自良湖と円原川の伏流水がある？', icon:'🌿', subjective:true},
  sanshu_kawara: {text:'三州瓦の産地で瓦をテーマにした美術館がある？', icon:'🧱'},
  nonbori_arai: {text:'五条川の桜並木と「のんぼり洗い」で知られる？', icon:'🎏', subjective:true},
  akame_taki: {text:'赤目四十八滝がある？', icon:'💦'},
  oiwayama_dotaku: {text:'大岩山遺跡から日本最大級の銅鐸が出土した？', icon:'🔔'},
  tokaido_nakasendo: {text:'東海道と中山道が分岐・合流した宿場町？', icon:'🛤️'},
  koka_ninja: {text:'忍者の里と信楽焼の両方で知られる？', icon:'🥷', subjective:true},
  take_no_michi: {text:'竹林の散策路「竹の径」がある？', icon:'🎋'},
  aioi_matsu: {text:'「相生の松」と尉と姥の伝説で知られる謡曲の舞台？', icon:'🌲', subjective:true},
  banshu_soroban_ono: {text:'播州そろばんの産地？', icon:'🧮'},
  katsuragi_tsutsuji: {text:'葛城山に「一目百万本」と呼ばれるツツジ群落がある？', icon:'🌺'},
  matabei_zakura: {text:'樹齢約300年とされる「又兵衛桜」がある？', icon:'🌸'},
  kishu_herazao: {text:'伝統工芸品「紀州へら竿」の産地？', icon:'🎣'},
  negoroji: {text:'新義真言宗総本山の根来寺がある？', icon:'🛕'},
  kokusan_denim: {text:'国産デニムの一大産地で、青色をテーマにした地域ブランドがある？', icon:'👖'},
  konrei_kagu: {text:'高級婚礼家具の産地として知られる？', icon:'🪑', subjective:true},
  nora_dokei: {text:'田園の中に立つ時計台「野良時計」がある？', icon:'🕰️'},
  onga_pump: {text:'世界遺産の遠賀川水源地ポンプ室がある？', icon:'⛲'},
  koinoki: {text:'全国でも珍しい「恋命」を祭る恋木神社がある？', icon:'💕'},
  hiyoko: {text:'銘菓「ひよ子」が生まれたまち？', icon:'🐤'},
  kubote_san: {text:'修験道の霊山・求菩提山がある？', icon:'⛰️'},
  taku_seibyo: {text:'孔子をまつる、現存最古級の聖廟がある？', icon:'🎓'},
  minamata_museum: {text:'四大公害病の一つについて学べる市立資料館がある？', icon:'🏫'},
  kikuchi_keikoku: {text:'阿蘇外輪山北西部に、避暑地として有名な渓谷がある？', icon:'🍁', subjective:true},
  mikoshiki_coast: {text:'干潟の曲線と夕日で知られる御輿来海岸がある？', icon:'🌅', subjective:true},
  amakusa_bridges: {text:'九州本土と島々を結ぶ5本の橋の大部分が市内にある？', icon:'🌉'},
  ikoma_kogen: {text:'コスモスの名所「生駒高原」がある？', icon:'🌼'},
  senbon_icho: {text:'個人が山を開いて作った「千本イチョウ」の名所がある？', icon:'🌳'},
  sogi_no_taki: {text:'「東洋のナイアガラ」と呼ばれる曽木の滝がある？', icon:'💦'},
  orion_beer: {text:'オリオンビールの工場がある？', icon:'🍺'},
  inami_kaeru_bridge: {text:'かえるをかたどった「かえる橋」がある？', icon:'🐸'},
  tsuruta_steuben: {text:'スチューベンの作付面積・生産量が日本一？', icon:'🍇'},
  jupialand_shibazakura: {text:'約25万株の芝桜が咲く公園がある？', icon:'🌸'},
  licca_castle: {text:'リカちゃんキャッスルがある？', icon:'🎀'},
  iitate_madeikan: {text:'道の駅「までい館」がある？', icon:'🏪'},
  ogata_reclamation: {text:'八郎潟の干拓によって誕生した村？', icon:'🌾'},
  ora_mirai_tower: {text:'シンボルタワー未来MiRAiがある？', icon:'🗼'},
  kamisato_sa: {text:'関越道の上里サービスエリアがある？', icon:'🛣️'},
  mikurajima_dolphin: {text:'野生のミナミハンドウイルカと泳げる島？', icon:'🐬'},
  aogashima_double_caldera: {text:'外輪山と内輪山からなる二重カルデラがある？', icon:'🌋'},
  oi_biotopia: {text:'未病バレー「ビオトピア」がある？', icon:'🌿'},
  nanko_ume: {text:'梅の代表品種「南高梅」発祥の地で、梅の生産量が日本一？', icon:'🌸'},
  ebikani_aquarium: {text:'エビやカニなど甲殻類に特化した水族館がある？', icon:'🦀'},
  misato_blueberry: {text:'ブルーベリーの産地として知られ、観光農園が集まる？', icon:'🫐'},
  circuit: {text:'モータースポーツのサーキット(レース場)がある？', icon:'🏁'},
  dam_lake: {text:'観光地として知られる有名なダム・ダム湖がある？', icon:'🌊'},
  meisui_hyakusen: {text:'環境省の「名水百選」に選ばれた湧き水や川がある？', icon:'💧'},
  least_populous_village: {text:'日本一人口の少ない村？', icon:'🏝️'},
  tanada_hyakusen: {text:'「日本の棚田百選」に選ばれた棚田がある？', icon:'🌾'},
  karst: {text:'石灰岩が広がるカルスト台地がある？', icon:'🐏'},
  ramsar: {text:'ラムサール条約に登録された湿地・干潟・湖沼がある？', icon:'🦆'},
  national_park: {text:'国立公園の区域内にある？', icon:'🏔️'},
  waterfall_hyakusen: {text:'「日本の滝百選」に選ばれた滝がある？', icon:'💧'},
  castle_hyakumeijo: {text:'「日本100名城」または「続日本100名城」の城がある？', icon:'🏯'},
  winery: {text:'ワイナリー・ワインの産地として知られる？', icon:'🍷'},
  pottery_ware: {text:'伝統的な焼き物・陶磁器の産地として知られる？', icon:'🏺'},
  funaoka_sakura: {text:'船岡城址公園と白石川堤の桜(日本さくら名所100選)で知られる？', icon:'🌸'},
  omocha_no_machi: {text:'「おもちゃのまち」と呼ばれる玩具産業の集積地がある？', icon:'🧸'},
  tanagura_kamegajo: {text:'棚倉城跡(亀ヶ城公園)がある？', icon:'🏯'},
  neba_sugi: {text:'矢作川の源流にあり、村の約9割が森林で「根羽杉」の産地？', icon:'🌲'}
};

// ==================== 質問の補足(ヘルプ) ====================
// ここに列挙したキーの質問だけ、質問画面に「ⓘ どういう意味？」ボタンを表示する。
// (一覧にないキーはボタン自体を出さない。対象・文言は指示された一覧をそのまま使用し、
// Claude側の判断で対象を増やしたり文言を書き換えたりしていない)
const QUESTION_HELP = {
  densityHigh: '人口密度が全国の自治体の上位約20％なら「はい」です。',
  densityLow: '人口密度が全国の自治体の下位約20％なら「はい」です。',
  areaLarge: '面積が全国の自治体の上位約20％なら「はい」です。',
  areaCompact: '面積が全国の自治体の下位約20％なら「はい」です。',
  designated: '行政区が置かれている、国指定の大都市です。',
  chukakushi: '都道府県の仕事の一部を担う、国指定の都市です。',
  tokureishi: '2015年の制度廃止時に特例市だった自治体です。',
  worldheritage: '世界遺産全体ではなく、その一部となる建物や遺跡でも該当します。',
  snow: '雪の印象ではなく、法律による指定を基準にしています。',
  active_volcano: '市域の一部に活火山が含まれていれば「はい」です。',
  airport: '自衛隊基地や定期便のない飛行場は含みません。',
  geopark: '市域の全部または一部がジオパークなら「はい」です。',
  bedtown: '大都市へ通勤する人が多く、昼夜間人口比率95未満を目安にしています。',
  formed_after_2000: '複数の自治体が合併し、新しい市として発足した場合です。',
  national_university: 'キャンパスだけでなく、大学本部が置かれている場合です。',
  expressway_junction: '複数の高速道路を直接乗り換える施設です。通常のICとは別です。',
  public_racing_venue: '国や自治体の認可を受けた公営競技の本場が対象です。',
  national_government_park: '国が管理する都市公園です。国立公園とは別です。',
  traditional_buildings_district: '国が選定した、歴史的な町並みの保存地区です。',
  ferry_available: '現在も定期運航する旅客航路が市内の港にあれば「はい」です。',
  no_railway_station: '旅客が利用できる鉄道駅を基準にしています。',
  olympic_venue: '夏季・冬季を問わず、正式競技の会場になった場合です。',
  koshien_champion: '現在その市に所在する高校が優勝したことがあるかで判定します。',
  sumo_yokozuna_ozeki: '力士の出身地を基準にし、最高位が横綱・大関なら該当します。',
  pm_birthplace: '選挙区や本籍地ではなく、実際の出生地を基準にしています。',
  coastal: '市区町村の区域に海岸線があれば「はい」です。',
  nihonkai: '日本海につながる湾や海峡に面する場合も含みます。',
  taiheiyo: '太平洋につながる湾や海峡に面する場合も含みます。',
  setonaikai: '大阪湾・播磨灘・燧灘などの海域も含みます。',
  uchibo: '東京湾側を「内房」としています。',
  sotobo: '太平洋側を「外房」としています。',
  basin: '周囲を山地に囲まれた平地に市街地がある場合です。',
  lakeside: '市域が湖岸に接していれば「はい」です。',
  big_bay: '東京湾・大阪湾・広島湾など主要な湾を基準にしています。',
  private_railway: 'JR以外の旅客鉄道に駅があれば「はい」です。',
  subway: '地下を走るだけのJR・私鉄ではなく、地下鉄路線が対象です。',
  tram: '道路上または道路沿いを走る軌道路線が対象です。',
  remote_island: '自治体の中心部が本土と陸続きでない島にある場合です。',
  borders_other_pref: '陸上で県境を接している場合です。海を挟むだけでは該当しません。',
  hyoujun_jigosen: '日本標準時の基準となる東経135度の線です。',
  ekimei_chigau: '代表的な中心駅の駅名が、市名と一致しない場合です。',
  honshu_bridge: '鉄道橋または道路橋で、本州と直接行き来できる場合です。',
  bakumatsu_port: '函館・横浜・新潟・神戸・長崎の五港です。',
  former_capital: '天皇の宮殿と政治の中心が置かれたことがあるかで判定します。',
  kokuho_building: '建造物に限らず、美術工芸品・書跡・考古資料などジャンルを問わず、国宝に指定された「もの」が所在すれば対象です。',
  twelve_castles: '江戸時代以前の天守が現在まで残る12城です。',
  gokaido_shukuba: '東海道・中山道・日光・奥州・甲州街道の宿場です。',
  imperial_university: '戦前の帝国大学を前身とする国立大学です。',
  old_province_name: '武蔵・相模・信濃・越前など、昔の国名が由来の場合です。',
  ancient_provincial_capital: '昔の国ごとに置かれた役所の所在地です。',
  kokubunji_site: '奈良時代に国ごとに建てられた寺院の跡です。',
  kitamaebune_port: '江戸～明治期、日本海側を航行した商船の寄港地です。',
  joetsu_region: '新潟県の南西部、上越・妙高・糸魚川周辺です。',
  chuetsu_region: '新潟県の中央部、長岡・柏崎・魚沼周辺です。',
  kaetsu_region: '新潟県の北東部、新潟・新発田・村上周辺です。',
  douou_area: '石狩・空知・後志・胆振・日高周辺です。',
  doutou_area: 'オホーツク・十勝・釧路・根室周辺です。',
  dohoku_area: '上川・留萌・宗谷周辺です。',
  tsugaru_area: '青森県西部の、青森・弘前・五所川原周辺です。',
  shonai_area: '山形県の日本海側、鶴岡・酒田周辺です。',
  hamadori_area: '福島県東部の太平洋沿岸地域です。',
  nakadori_area: '福島県中央部の福島・郡山・白河周辺です。',
  aizu_area: '福島県西部の会津若松周辺です。',
  sanriku_area: '青森県南東部から宮城県沿岸に続く地域です。',
  tama_area: '東京23区を除く、東京都西部の地域です。',
  tokatsu_area: '千葉県北西部の松戸・柏・野田周辺です。',
  ryomo_area: '群馬県東部と栃木県南西部にまたがる地域です。',
  koshin_area: '山梨県と長野県を合わせた地域です。',
  tokai_area: '岐阜・静岡・愛知・三重の地域です。',
  owari_area: '名古屋市を含む愛知県西部です。',
  mikawa_area: '岡崎・豊田・豊橋などの愛知県東部です。',
  suruga_area: '静岡県中部から東部にかけての地域です。',
  totomi_area: '浜松・磐田・掛川などの静岡県西部です。',
  hokushin_area: '長野市・中野市・飯山市周辺です。',
  toshin_area: '上田市・佐久市・小諸市周辺です。',
  chushin_area: '松本市・安曇野市・大町市周辺です。',
  nanshin_area: '諏訪・伊那・飯田周辺です。',
  hokusetsu_area: '大阪府北部の豊中・吹田・高槻周辺です。',
  kawachi_area: '大阪府東部の東大阪・八尾・河内長野周辺です。',
  senshu_area: '堺市以南の大阪府南西部です。',
  hanshin_area: '大阪市と神戸市の間に位置する地域です。',
  harima_area: '姫路・明石・加古川など兵庫県南西部です。',
  tajima_area: '豊岡・養父・朝来など兵庫県北部です。',
  tamba_area: '丹波・丹波篠山周辺の兵庫県中東部です。',
  bingo_area: '福山市を中心とする広島県東部です。',
  chikuzen_area: '福岡市・宗像・朝倉など福岡県北西部です。',
  chikugo_area: '久留米・大牟田・柳川など福岡県南部です。',
  chikuho_area: '飯塚・直方・田川など福岡県内陸部です。',
  toyo_area: '四国中央・新居浜・西条・今治周辺です。',
  chuyo_area: '松山市とその周辺地域です。',
  nanyo_area: '宇和島・八幡浜・大洲・西予周辺です。',
  satsuma_area: '鹿児島県の薩摩半島側です。',
  osumi_area: '鹿児島県の大隅半島側です。',
  sakishima_islands: '宮古島・石垣島など先島諸島の地域です。',
};

// cities.jsonの軽量化対応: 保存時、各自治体のtagsは「trueだったキーだけの配列」に
// 圧縮されている(ファイルサイズを大幅に削減するため)。起動時、ここで元の
// {キー: true/false, ...} というオブジェクト形式へ復元してから、他の処理へ渡す。
// 復元対象のキー一覧は、実行時計算タグ(kana_name等、enrichComputedTagsが後で設定する)
// を除いたもの。旧形式(既にオブジェクトのcities.json)が来た場合はそのまま何もしない。
const COMPUTED_ONLY_TAG_KEYS = new Set(['kana_name','kansai_dialect','ryukyu_dialect',
  'region_hokkaido','region_tohoku','region_kanto','region_chubu','region_kinki','region_chugoku','region_shikoku','region_kyushu',
  'pref_hokkaido','pref_aomori','pref_iwate','pref_miyagi','pref_akita','pref_yamagata','pref_fukushima','pref_ibaraki','pref_tochigi','pref_gunma','pref_saitama','pref_chiba','pref_tokyo','pref_kanagawa','pref_niigata','pref_toyama','pref_ishikawa','pref_fukui','pref_yamanashi','pref_nagano','pref_gifu','pref_shizuoka','pref_aichi','pref_mie','pref_shiga','pref_kyoto','pref_osaka','pref_hyogo','pref_nara','pref_wakayama','pref_tottori','pref_shimane','pref_okayama','pref_hiroshima','pref_yamaguchi','pref_tokushima','pref_kagawa','pref_ehime','pref_kochi','pref_fukuoka','pref_saga','pref_nagasaki','pref_kumamoto','pref_oita','pref_miyazaki','pref_kagoshima','pref_okinawa']);
function expandCompactTags(city){
  if(!Array.isArray(city.tags)) return city; // 既にオブジェクト形式ならそのまま(後方互換)
  const trueSet = new Set(city.tags);
  const obj = {};
  KEYS.forEach(k => {
    if(COMPUTED_ONLY_TAG_KEYS.has(k)) return; // これらはenrichComputedTagsが設定するので触らない
    obj[k] = trueSet.has(k);
  });
  city.tags = obj;
  return city;
}

// 【私鉄タグの自動補完】「小田急線の駅がある?」がtrueなら、当然「私鉄が走っている?」もtrue。
// これを手入力で揃えようとすると必ず付け忘れが出て、同じプレイの中で
//   「私鉄が走っている?」→ いいえ
//   「小田急線の駅がある?」→ はい
// という矛盾が起きてしまう(実際に156自治体で発生していた)。そこで、個別の私鉄路線タグの
// どれかがtrueなら private_railway も自動でtrueにする。
// 重要: 単純に「この14路線のOR」で上書きしてはいけない。富山地方鉄道(富山市)、
// 江ノ電(鎌倉市)、ことでん(高松市)のように、ここに挙がっていない私鉄だけが走る自治体が
// 48件あり、上書きするとそれらが誤ってfalseになってしまう。あくまで「元がtrueなら維持、
// 個別路線がtrueなら追加でtrue」という論理和(OR)にする。
const PRIVATE_RAILWAY_LINE_KEYS = [
  'odakyu_line','keio_inokashira_line','tokyu_line','keikyu_line','seibu_line','tobu_main_station','tobu_tojo_station',
  'keisei_line','tsukuba_express','meitetsu_line','kintetsu','hankyu_line','keihan_line',
  'nankai_line','nishitetsu_line','nagaragawa_railway','yoro_railway'
];

function enrichComputedTags(city){
  const t = city.tags;
  // 自治体名にひらがな・カタカナが含まれるか(簡易判定)
  t.kana_name = /[\u3040-\u30FF]/.test(city.name);
  const kansaiPrefs = ['大阪府','京都府','兵庫県','奈良県','滋賀県','和歌山県'];
  const ryukyuPrefs = ['沖縄県'];
  t.kansai_dialect = kansaiPrefs.includes(city.pref);
  t.ryukyu_dialect = ryukyuPrefs.includes(city.pref);
  t.is_town_village = t.is_town_village ?? false;
  t.is_tokyo_ward = t.is_tokyo_ward ?? false;
  // 個別の私鉄路線タグがひとつでもtrueなら、private_railwayもtrueにする(元の値は残す)
  if(PRIVATE_RAILWAY_LINE_KEYS.some(k => t[k] === true)) t.private_railway = true;
  // 【8地方判定】県から所属する地方を機械的に決めて、全国版で「どの地方か」を
  // 早く絞り込めるようにする(東海の市と九州の市が最後まで競合するのを防ぐ)。
  // 【47都道府県判定】県名から機械的に決まるので、データに持たず実行時に計算する。
  // 終盤で候補が同一地方に固まったときの決め手として使う(出題時期はPREF_QUESTION_KEYSで制御)。
  for(const pk in PREF_KEY_TO_NAME){ t[pk] = (city.pref === PREF_KEY_TO_NAME[pk]); }
  const region = REGION_OF_PREF[city.pref] || null;
  t.region_hokkaido = region === 'hokkaido';
  t.region_tohoku   = region === 'tohoku';
  t.region_kanto    = region === 'kanto';
  t.region_chubu    = region === 'chubu';
  t.region_kinki    = region === 'kinki';
  t.region_chugoku  = region === 'chugoku';
  t.region_shikoku  = region === 'shikoku';
  t.region_kyushu   = region === 'kyushu';
  return city;
}

// 都道府県質問のキー → 県名。47都道府県ぶんの「〇〇にありますか?」質問に使う。
const PREF_KEY_TO_NAME = {
  pref_hokkaido: '北海道',
  pref_aomori: '青森県',
  pref_iwate: '岩手県',
  pref_miyagi: '宮城県',
  pref_akita: '秋田県',
  pref_yamagata: '山形県',
  pref_fukushima: '福島県',
  pref_ibaraki: '茨城県',
  pref_tochigi: '栃木県',
  pref_gunma: '群馬県',
  pref_saitama: '埼玉県',
  pref_chiba: '千葉県',
  pref_tokyo: '東京都',
  pref_kanagawa: '神奈川県',
  pref_niigata: '新潟県',
  pref_toyama: '富山県',
  pref_ishikawa: '石川県',
  pref_fukui: '福井県',
  pref_yamanashi: '山梨県',
  pref_nagano: '長野県',
  pref_gifu: '岐阜県',
  pref_shizuoka: '静岡県',
  pref_aichi: '愛知県',
  pref_mie: '三重県',
  pref_shiga: '滋賀県',
  pref_kyoto: '京都府',
  pref_osaka: '大阪府',
  pref_hyogo: '兵庫県',
  pref_nara: '奈良県',
  pref_wakayama: '和歌山県',
  pref_tottori: '鳥取県',
  pref_shimane: '島根県',
  pref_okayama: '岡山県',
  pref_hiroshima: '広島県',
  pref_yamaguchi: '山口県',
  pref_tokushima: '徳島県',
  pref_kagawa: '香川県',
  pref_ehime: '愛媛県',
  pref_kochi: '高知県',
  pref_fukuoka: '福岡県',
  pref_saga: '佐賀県',
  pref_nagasaki: '長崎県',
  pref_kumamoto: '熊本県',
  pref_oita: '大分県',
  pref_miyazaki: '宮崎県',
  pref_kagoshima: '鹿児島県',
  pref_okinawa: '沖縄県',
};

// 県→8地方のマッピング(全国版の地方判定タグ用)。東京は関東に含める。
const REGION_OF_PREF = {
  '北海道':'hokkaido',
  '青森県':'tohoku','岩手県':'tohoku','宮城県':'tohoku','秋田県':'tohoku','山形県':'tohoku','福島県':'tohoku',
  '茨城県':'kanto','栃木県':'kanto','群馬県':'kanto','埼玉県':'kanto','千葉県':'kanto','東京都':'kanto','神奈川県':'kanto',
  '新潟県':'chubu','富山県':'chubu','石川県':'chubu','福井県':'chubu','山梨県':'chubu','長野県':'chubu','岐阜県':'chubu','静岡県':'chubu','愛知県':'chubu',
  '三重県':'kinki','滋賀県':'kinki','京都府':'kinki','大阪府':'kinki','兵庫県':'kinki','奈良県':'kinki','和歌山県':'kinki',
  '鳥取県':'chugoku','島根県':'chugoku','岡山県':'chugoku','広島県':'chugoku','山口県':'chugoku',
  '徳島県':'shikoku','香川県':'shikoku','愛媛県':'shikoku','高知県':'shikoku',
  '福岡県':'kyushu','佐賀県':'kyushu','長崎県':'kyushu','熊本県':'kyushu','大分県':'kyushu','宮崎県':'kyushu','鹿児島県':'kyushu','沖縄県':'kyushu',
};

// stats(実数値の人口・面積)が入っている市について、人口/面積/人口密度の
// しきい値質問を計算する。全市にstatsが揃った時点でactivateStatsQuestions()が
// 自動的に質問として有効化する。
//
// 【人口】は audit指定の7段階の固定しきい値(絶対値)を使う。
// 【面積・人口密度】は「上位/下位20%」の分位点を使う。ユーザーには相対的な
// 表現(「広いほう?」等)だけを見せ、内部のkm2やパーセンタイルは表示しない。
// 分位点は「東京」(23区全体の集計エントリ)を除いた825自治体の実データから
// 事前に算出した固定値(area_large: 上位20%=443.46km2以上, area_compact: 下位20%=49.26km2以下,
// density_high: 上位20%=2425.28人/km2以上, density_low: 下位20%=112.37人/km2以下)。
const AREA_LARGE_THRESHOLD = 443.46;
const AREA_COMPACT_THRESHOLD = 49.26;
const DENSITY_HIGH_THRESHOLD = 2425.28;
const DENSITY_LOW_THRESHOLD = 112.37;

const STATS_THRESHOLDS = {
  pop500k:      c => c.stats?.population != null ? c.stats.population >= 500000 : undefined,
  pop300k:      c => c.stats?.population != null ? c.stats.population >= 300000 : undefined,
  pop100k:      c => c.stats?.population != null ? c.stats.population >= 100000 : undefined,
  popUnder50k:  c => c.stats?.population != null ? c.stats.population < 50000 : undefined,
  // 「東京」(23区集計エントリ)は通常自治体の順位・分位に含めないため、
  // 常にfalse固定にする(undefinedにすると質問自体が有効化されなくなるため)。
  densityHigh:  c => c.name === '東京' ? false : ((c.stats?.population != null && c.stats?.area_km2) ? (c.stats.population / c.stats.area_km2) >= DENSITY_HIGH_THRESHOLD : undefined),
  densityLow:   c => c.name === '東京' ? false : ((c.stats?.population != null && c.stats?.area_km2) ? (c.stats.population / c.stats.area_km2) <= DENSITY_LOW_THRESHOLD : undefined),
  areaLarge:    c => c.name === '東京' ? false : (c.stats?.area_km2 != null ? c.stats.area_km2 >= AREA_LARGE_THRESHOLD : undefined),
  areaCompact:  c => c.name === '東京' ? false : (c.stats?.area_km2 != null ? c.stats.area_km2 <= AREA_COMPACT_THRESHOLD : undefined),
};
const STATS_QUESTIONS = {
  pop500k:     {text:'人口は50万人以上？', icon:'👥'},
  pop300k:     {text:'人口は30万人以上？', icon:'👥'},
  pop100k:     {text:'人口は10万人以上？', icon:'👥'},
  popUnder50k: {text:'人口は5万人未満？', icon:'👤'},
  densityHigh: {text:'人や住宅が密集しているほう？', icon:'🏢'},
  densityLow:  {text:'人口がまばらな地域が多い？', icon:'🏞️', subjective:true},
  areaLarge:   {text:'自治体の区域が広いほう？', icon:'🗺️'},
  areaCompact: {text:'自治体の区域がコンパクトなほう？', icon:'🗺️'},
};
// 人口のしきい値は「上限・下限が分かれば答えが確定する」階段状の質問なので、
// 序列(小さい順)を持たせておき、回答済みの範囲から不要な質問を除外するのに使う。
const POP_LADDER = ['popUnder50k','pop100k','pop300k','pop500k'];
// 面積・人口密度は「広い/コンパクト」「密集/まばら」の反対概念のペア。
// 同じプレイ内で両方を尋ねないようにするための組。
const STATS_OPPOSITE_PAIRS = [['areaLarge','areaCompact'], ['densityHigh','densityLow']];

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
let lastPickWasOneCity = false; // 直前に出した質問が「1市限定質問」だったか(連続を避けるため)
// 【候補数の節目GA4計測】1ゲームにつき、各節目を1回だけ送るための記録。
// startMode()でリセットする。
let notifiedCandidateMilestones = new Set();
const CANDIDATE_MILESTONES = [100, 50, 20, 10, 5, 3, 1];
let scorePool = []; // [{city, score}] 形式。はい/いいえで完全に消すのではなく、加点/減点で判断する
// 即時除外などで候補から外した分の置き場。捨てずにここへ避けておき、スコアの加減点は
// scorePool と同じように続ける。1回目の推測が外れたら、ここから候補へ戻して復活させる
// (=「絞り込みのどこかが間違っていた」とみなして、消してしまった正解を救うため)。
let prunedOutPool = [];

// 「路線図」のように、地理的に絶対に両立しない組み合わせをデータから自動学習する。
// (例: 西武線と東急線は、どちらも通っている自治体が1件も無いので「排他」と判定できる)
// 対象は誤学習を防ぐため、地理的に意味のある安全なタグ群だけに絞る。
const EXCLUSIVE_CHECK_GROUPS = [
  ['odakyu_line','keio_inokashira_line','tokyu_line','keikyu_line','seibu_line','tobu_main_station','tobu_tojo_station','keisei_line',
   'tsukuba_express','rinkai_line','toden_arakawa','yurikamome','nippori_toneri'],
  ['joetsu_region','chuetsu_region','kaetsu_region'],
  ['nihonkai','taiheiyo','setonaikai'],
  // 【追加】東京都: 「多摩地区?」に(自信を持って)はいと答えたら、23区にしか無い特定の
  // ランドマーク・大学キャンパス・主要駅は聞くまでもなく「いいえ」だと分かる(逆も同様)。
  // データ上、tama_area=trueとこれらのタグが両方trueになる市は1件も無いため、
  // 私鉄路線と同じ仕組みでデータから自動学習させる。
  ['tama_area','is_tokyo_ward',
   'todai_campus','waseda_campus','keio_campus','meiji_campus','rikkyo_campus','chuo_campus','tus_campus',
   'imperial_palace','ginza','tokyo_tower_ward','tokyo_dome_ward','sensoji','skytree_ward','toyosu_market','haneda_ward',
   'shibamata_taishakuten','kasai_park','broadway_nakano','koenji_area','jiyugaoka','shakujii_park',
   
   'ueno_station'],
  // 【47都道府県は完全に排他】各自治体はただ1つの都道府県にのみ属するため、
  // どれか1つの県で「はい」と答えたら、残り46県は聞くまでもなく「いいえ」。
  // これを入れないと「沖縄県?→はい」の後に「鹿児島県?」を無駄に聞いてしまう。
  //
  // さらに、地方細分・広域質問(南九州?・薩摩地方?・紀伊半島?など)も同じグループに含める。
  // これらは特定の県だけで trueになるので、含まれない県の pref質問とは「両方trueが0件」となり、
  // データ駆動で自動的に排他と判定される(例: southern_kyushu と pref_okinawa は0件なので排他)。
  // 一方、正当に両立するペア(satsuma_area × pref_kagoshima など)は両方trueの市があるため
  // 排他にはならない。これを入れないと「沖縄県?→はい」の後に「南九州?」を無駄に聞いてしまう。
  ['pref_hokkaido','pref_aomori','pref_iwate','pref_miyagi','pref_akita','pref_yamagata','pref_fukushima','pref_ibaraki','pref_tochigi','pref_gunma','pref_saitama','pref_chiba','pref_tokyo','pref_kanagawa','pref_niigata','pref_toyama','pref_ishikawa','pref_fukui','pref_yamanashi','pref_nagano','pref_gifu','pref_shizuoka','pref_aichi','pref_mie','pref_shiga','pref_kyoto','pref_osaka','pref_hyogo','pref_nara','pref_wakayama','pref_tottori','pref_shimane','pref_okayama','pref_hiroshima','pref_yamaguchi','pref_tokushima','pref_kagawa','pref_ehime','pref_kochi','pref_fukuoka','pref_saga','pref_nagasaki','pref_kumamoto','pref_oita','pref_miyazaki','pref_kagoshima','pref_okinawa',
   // ↓ 地方細分・広域質問(その県以外のpref質問と自動的に排他になる)
   'northern_kyushu','southern_kyushu','satsuma_area','osumi_area',
   'chikuzen_area','chikugo_area','chikuho_area','kitakyushu_area','fukuoka_metro',
   'okinawa_main_island','okinawa_south_central','sakishima_islands','ryukyu_dialect',
   'tsugaru_area','shonai_area','hamadori_area','nakadori_area','aizu_area','sendai_metro',
   'douou_area','doutou_area','dohoku_area','sapporo_metro','ishikari_plain',
   'tama_area','is_tokyo_ward','tokatsu_area','shonan_area','sotobo','uchibo',
   'joetsu_region','chuetsu_region','kaetsu_region','noto_area',
   'koshin_area','izu_area','suruga_area','totomi_area','tokai_area',
   'hokusetsu_area','kawachi_area','senshu_area','keihanshin_area','kii_peninsula','kansai_dialect',
   'harima_area','tajima_area','tamba_area','kyoto_north','nara_basin',
   'bingo_area','izumo_area','sanin_area','sanyo_area','hiroshima_metro','chugoku_mountain_basin',
   'kitakami_basin','sanriku_area','ryomo_area','tone_river_area','hachiko_area',
   'hokushin_area','toshin_area','chushin_area','nanshin_area','hida_area','mino_area','owari_area','mikawa_area',
   'toyo_area','chuyo_area','nanyo_area'],
];
let EXCLUSIVE_MAP = {};
// 【例外つき排他ルール】現実には「ほとんど両立しないが、ごく少数だけ両方に当てはまる」
// 組み合わせがある。例: 太平洋と瀬戸内海は普通どちらか一方だが、和歌山市や鳴門市は
// 実際に両方の海に面している。日本海と瀬戸内海も、下関市・北九州市は関門海峡を挟んで
// 両方に面している。
// 「1件でも両方trueなら排他とみなさない」という全か無かの判定だと、こうした数市の
// ために「太平洋?」→「瀬戸内海?」の自動除外という便利な仕組みを全部あきらめることに
// なってしまう。そこで、両方trueの市がEXCLUSIVE_MAX_EXCEPTIONS件以下なら排他として扱い、
// その少数の例外市だけを自動除外の対象から守る(下のEXCLUSIVE_EXCEPTIONSを参照)。
const EXCLUSIVE_MAX_EXCEPTIONS = 8;
// 例外は「少数の例外」でなければならない。絶対数だけで判定すると、包含関係にあるタグの組を
// 排他だと誤解してしまう。
// 例: is_tokyo_ward(23区=23件)と todai_campus(東大キャンパス=文京区・目黒区の2件)は、
// 文京区が両方trueなので「例外2件」に見えるが、実際は排他ではなく「23区の中に東大がある」
// という包含関係。これを排他扱いにすると、「東京23区のどれか?」に はい と答えた瞬間、
// 23区を区別するための名所質問(東大・浅草寺・東京タワー…)が全部「いいえ」と自動回答され、
// 二度と聞かれなくなってしまう。
// そこで「両方trueの件数が、少ない方のタグの件数に対してこの割合以下」も条件に加える。
// (上の例では 2/2 = 100% なので排他とみなさない。太平洋と瀬戸内海は 6/72 = 8% なので排他)
const EXCLUSIVE_MAX_EXCEPTION_RATIO = 0.2;
// キー: `${k1}|${k2}` / 値: 両方trueの「例外」自治体IDのSet
let EXCLUSIVE_EXCEPTIONS = {};

function computeExclusiveMap(){
  EXCLUSIVE_MAP = {};
  EXCLUSIVE_EXCEPTIONS = {};
  // 日本海/太平洋/瀬戸内海のように、複数のグループに同じキーが登場することがある
  //(地方別グループにこの3つを毎回加えているため)。同じ組を二重登録しないよう記録する。
  const seenPairs = new Set();
  // 【高速化】以前は、ペアが出てくるたびに CITIES.reduce/filter (825件ループ) を
  // 3回ずつ実行しており、地方限定タグ同士の組み合わせが数万ペアに及ぶ関係で
  // 起動のたびに3秒前後かかっていた。同じキーの「trueになる市の集合」は
  // ペアが変わっても結果は同じなので、キーごとに1回だけ計算してキャッシュし、
  // ペアの判定はSet同士の軽い集合演算(小さい方の要素数に比例)だけで済ませる。
  const idSetCache = new Map(); // key -> Set<cityId>
  function idSetFor(key){
    let s = idSetCache.get(key);
    if(!s){
      s = new Set();
      CITIES.forEach(c => { if(c.tags[key]) s.add(cityId(c)); });
      idSetCache.set(key, s);
    }
    return s;
  }
  EXCLUSIVE_CHECK_GROUPS.forEach(group => {
    for(let i = 0; i < group.length; i++){
      for(let j = i + 1; j < group.length; j++){
        const k1 = group[i], k2 = group[j];
        if(k1 === k2) continue;
        const pairId = k1 < k2 ? `${k1}|${k2}` : `${k2}|${k1}`;
        if(seenPairs.has(pairId)) continue;
        seenPairs.add(pairId);
        const set1 = idSetFor(k1);
        const set2 = idSetFor(k2);
        const n1 = set1.size, n2 = set2.size;
        if(n1 === 0 || n2 === 0) continue; // 片方が0件なら排他かどうか判断できない
        // 小さい方の集合を回して積集合を取ると、無駄なチェック回数が最小になる。
        const [smaller, larger] = n1 <= n2 ? [set1, set2] : [set2, set1];
        const bothIds = [];
        smaller.forEach(id => { if(larger.has(id)) bothIds.push(id); });
        if(bothIds.length > EXCLUSIVE_MAX_EXCEPTIONS) continue;                       // 例外が多すぎる
        if(bothIds.length > Math.min(n1, n2) * EXCLUSIVE_MAX_EXCEPTION_RATIO) continue; // 排他ではなく包含関係
        (EXCLUSIVE_MAP[k1] = EXCLUSIVE_MAP[k1] || []).push(k2);
        (EXCLUSIVE_MAP[k2] = EXCLUSIVE_MAP[k2] || []).push(k1);
        if(bothIds.length > 0){
          const ids = new Set(bothIds);
          EXCLUSIVE_EXCEPTIONS[`${k1}|${k2}`] = ids;
          EXCLUSIVE_EXCEPTIONS[`${k2}|${k1}`] = ids;
        }
      }
    }
  });
}
let excludedNames = new Set(); // このゲーム内で既に「ちがう」と言われた市区町村名
let guessAttempts = 0; // 0=まだ推測していない / 1=最初の推測が外れ追加質問中・2回目推測前 / 2=2回目も外れて諦め
let asked = [];
let questionCount = 0;      // 通常質問(最大MAX_Q問)で消費した数
let extraQuestionCount = 0; // 「ちがう」の後の追加質問(最大MAX_EXTRA_Q問)で消費した数
let questionPhase = 'normal'; // 'normal' | 'extra'
let history = []; // 「戻る」ボタン用の履歴(質問を出す直前の状態を保存)
let currentResult = null;   // 確定した結果を一元管理する: {city, success, questionCount, mode, barePoints}
let lastGuessCity = null;   // 直近に画面へ出した「もしかして」候補(訂正フォームの参考表示用)
// 降参(renderGiveUp)時点で候補に残っていた自治体のcityId一覧。
// 訂正フォームで入力された本当の地元がこの中に含まれていたら、
// 「実は候補に入っていました」というフィードバックを出すために使う。
let giveUpPoolSnapshot = null;
let answerLog = [];         // このゲーム内で実際に回答した内容の記録: {key, val, weight, responseMs}(historyと同じ並び順)
// 「これまでの回答」機能で使用】1回目の推測が外れて追加質問フェーズへ移った
// タイミングを記録する。「history.length がこの値に達したら、通常フェーズ→追加質問フェーズへの
// 切り替え処理を行う」という形で、回答再生(replayAnswersFrom)時にフェーズ遷移を再現するために使う。
let guessFailureLog = []; // [{ atHistoryLength, excludedCityName }, ...]
// 【不正解の原因分析】訂正フォームで特定できた「本当のマチ」のデータと、そこから計算した
// 矛盾リスト。降参画面(renderThanks)から「回答を直して推理を再開する」を押したときに使う。
let lastCorrectionMatchedCity = null;
let lastCorrectionMismatches = [];
let lastCorrectionWasNearMiss = false;
let lastCorrectionCityLabel = null;
// 「これまでの回答」パネルが、どちらの文脈から開かれたかを覚えておく。
// 'ingame'  … 通常のゲーム中(質問画面)から開いた。閉じると元の質問へ戻る。
// 'review'  … 不正解後の見直し(renderThanks)から開いた。閉じると降参完了画面へ戻る。
let answerHistoryPanelContext = 'ingame';
let answerHistoryQuestionShownAt = null; // 回答一覧を開く前の回答時間計測を、閉じた後も引き継ぐ
// 降参(giveup)として既に統計記録された後、「回答を直して推理を再開する」経由で
// ゲームを続けているかどうか。trueの間にcorrect(true)で正解すると、recordGameStats()の
// 基礎カウンタ(totalPlays・回答内訳・プレイ日付)を二重に加算しないようにする
// (giveup記録時に既に1回分カウント済みのため)。
let isReplayedFromGiveup = false;

// ==================== 今日のチャレンジ ====================
// 日本時間の日付を基準に、1日1つのお題を決定的に選ぶ(同じ日は必ず同じお題になる)。
// type: 'theme'(自由なお題、正解すれば達成) / 'region'(指定した地方版で正解すれば達成) /
//       'condition'(全国版で、特定の条件を満たして正解すれば達成)
const DAILY_CHALLENGE_THEMES = [
  { id: 'living',        text: '今住んでいるマチ',            type: 'theme' },
  { id: 'born',           text: '生まれたマチ',                type: 'theme' },
  { id: 'travel',         text: '旅行で好きになったマチ',      type: 'theme' },
  { id: 'lived_before',    text: '以前住んでいたマチ',           type: 'theme' },
  { id: 'family',          text: '家族にゆかりのあるマチ',       type: 'theme' },
  { id: 'hokkaido_tohoku', text: '北海道・東北版',              type: 'region', modes: ['hokkaido', 'tohoku'] },
  { id: 'kanto_chubu',     text: '関東・中部版',                type: 'region', modes: ['kanto', 'chubu'] },
  { id: 'kinki_chugoku',   text: '近畿・中国版',                type: 'region', modes: ['kinki', 'chugoku'] },
  { id: 'shikoku_kyushu',  text: '四国・九州沖縄版',            type: 'region', modes: ['shikoku', 'kyushu'] },
  { id: 'within20',       text: '20問以内に当てさせよう',       type: 'condition', condition: 'within20' },
  { id: 'no_unknown',     text: '「わからない」を使わずに当てさせよう', type: 'condition', condition: 'no_unknown' },
  { id: 'no_maybe',       text: '「たぶんそう」「たぶん違う」を使わずに当てさせよう', type: 'condition', condition: 'no_maybe' },
];
const DAILY_CHALLENGE_STORAGE_KEY = 'oramachi_daily_challenge_v1';
const DAILY_CHALLENGE_VERSION = 1;
// 「今日のチャレンジ」から開始したゲームだけ達成判定をする(通常プレイには一切影響しない)。
let dailyChallengeActive = null; // null=通常プレイ中 / {id, type, ...} = チャレンジ中のお題
let dailyChallengeResult = null; // 直近の正解が「今日のチャレンジ」の判定結果だった場合の詳細(結果画面の演出用)

// ==================== おらマチからの挑戦状 ====================
// 通常モードとは逆に、おらっちが選んだ自治体をヒントを頼りにプレイヤーが当てるモード。
// 全国制覇帳・正答率など通常モードの統計には一切混ぜず、専用のlocalStorageキーで管理する。
const CHALLENGE_STORAGE_KEY = 'oramachi_challenge_v1';
const CHALLENGE_VERSION = 1;
const CHALLENGE_MAX_HINTS = 5;
const CHALLENGE_SCORE_BY_HINTS = { 1: 1000, 2: 800, 3: 600, 4: 400, 5: 200 };

// ヒントの優先グループ(小さいほど先に出す)。
//   1: 地方・都道府県・海などの広い特徴
//   2: 人口・地形・鉄道・道路
//   3: 産業・歴史・文化
//   4: 名物・観光地・ご当地キャラクター
//   5: それ以外(遊び心・その他=1市限定になりやすい決定的な特徴)
const CHALLENGE_HINT_GROUP_BY_CATEGORY = {
  '地理': 1,
  '統計': 2, '人口・行政': 2, '交通': 2,
  '歴史・文化': 3, '学問': 3, '産業': 3,
  '観光・娯楽': 4, '食': 4,
  '遊び心': 5, 'その他': 5, '自治体名': 5,
};
function challengeHintGroupFor(key){
  if(isPrefQuestion(key) || REGION_QUESTION_KEYS.has(key)) return 1;
  return CHALLENGE_HINT_GROUP_BY_CATEGORY[categoryOf(key)] || 5;
}
// グループ1(広い特徴)の中でも、都道府県・地方(pref_*/region_*)を最優先にする。
// 「海に面している」等の他の地理タグは同じグループ1だが、これらより後回しにしたい。
function challengeHintSubOrderFor(key){
  return (isPrefQuestion(key) || REGION_QUESTION_KEYS.has(key)) ? 0 : 1;
}
// 【名前そのものの特徴を暗示する質問は使わない】「自治体名に色を表す漢字が入っている」
// 「自治体名に都道府県名が含まれる」のような質問は、市名そのものを直接示唆する強力な
// ヒントになってしまい、「地元がバレる理由」としては強すぎる。当てっこの醍醐味である
// 「地理・産業・観光地から絞り込む」楽しさを損なうため、この種の質問は除外する。
const CHALLENGE_EXCLUDED_NAME_HINT_KEYS = new Set([
  'katakana_city_name', 'kana_name', 'number_in_name', 'hiragana_name', 'hiragana_long', 'direction_in_name',
  'animal_in_name', 'big_small_in_name', 'body_part_in_name', 'color_in_name', 'four_plus_name',
  'hard_to_read_name', 'kawa_in_name', 'new_old_in_name', 'plant_in_name', 'pref_name_in_city_name',
  'same_name_other_pref', 'sea_word_in_name', 'shima_in_name', 'ta_in_name', 'yama_in_name',
  'yotsukaido_name', 'name_same_as_route', 'name_has_betsu', 'old_province_name',
]);

// 指定した自治体から、ヒントとして使える候補(自治体名を含まない、自然な文章に変換できるもの)を
// すべて集める。呼び出し元(出題対象の選定/実際のヒント組み立て)の両方で共有する。
function buildChallengeHintCandidates(city){
  const nameCore = displayName(city).replace(/[市区町村]$/, '');
  const candidates = [];
  const seenTexts = new Set(); // 同じ文言(例: 都道府県=地方名が同じ北海道)の重複を防ぐ
  // 【都道府県が分かれば地方は自明】都道府県質問(pref_*)が使える自治体では、地方質問(region_*)は
  // 情報として冗長になるので出さない。都道府県データが無い場合だけ地方質問を使う。
  const hasPrefTag = Object.keys(city.tags).some(k => city.tags[k] === true && isPrefQuestion(k));
  Object.keys(city.tags).forEach(key => {
    if(city.tags[key] !== true) return;
    if(hasPrefTag && REGION_QUESTION_KEYS.has(key)) return; // 都道府県質問がある場合、地方質問は使わない
    if(CHALLENGE_EXCLUDED_NAME_HINT_KEYS.has(key)) return; // 自治体名そのものを暗示する質問は使わない
    const q = QUESTIONS[key] || STATS_QUESTIONS[key];
    if(!q || !q.text) return;
    // 自治体名そのものが質問文に含まれる場合、答えが直接分かってしまうので除外する。
    if(nameCore && q.text.includes(nameCore)) return;
    const naturalText = naturalizeQuestionText(key, true);
    if(!naturalText || naturalText === key) return; // 変換に失敗した(未対応の)ものは使わない
    if(seenTexts.has(naturalText)) return; // 既に同じ文言のヒントがあれば重複させない
    seenTexts.add(naturalText);
    candidates.push({ key, text: naturalText, group: challengeHintGroupFor(key), subOrder: challengeHintSubOrderFor(key), subjective: !!q.subjective });
  });
  return candidates;
}

// 出題対象になり得る自治体の一覧(5個以上の自然なヒントが作れるもの)。
// 825件のループを毎回行うのはやや重いため、初回に計算した結果をキャッシュしておく。
let challengeEligibleCitiesCache = null;
function getChallengeEligibleCities(){
  if(challengeEligibleCitiesCache) return challengeEligibleCitiesCache;
  challengeEligibleCitiesCache = CITIES.filter(c => c.name !== '東京' && buildChallengeHintCandidates(c).length >= 5);
  return challengeEligibleCitiesCache;
}

// 対象自治体のヒントを、優先グループ(1〜5)順に「各グループから最低1つ」選んでいく。
// 地理カテゴリのように該当タグが多い自治体でも、1ジャンルだけでヒントが埋まらないようにする。
// 1周目でグループ1→5の順に1件ずつ取り、まだ枠が余っていれば2周目でグループ1から
// 順に埋めていく(同グループ内は客観的な質問を先、主観的な質問を後にしてある)。
function buildOrderedChallengeHints(city){
  const candidates = buildChallengeHintCandidates(city);
  const byGroup = { 1: [], 2: [], 3: [], 4: [], 5: [] };
  candidates.forEach(c => byGroup[c.group].push(c));
  Object.values(byGroup).forEach(arr => arr.sort((a, b) => {
    if(a.subOrder !== b.subOrder) return a.subOrder - b.subOrder;
    return (a.subjective ? 1 : 0) - (b.subjective ? 1 : 0);
  }));

  const result = [];
  for(let g = 1; g <= 5 && result.length < CHALLENGE_MAX_HINTS; g++){
    if(byGroup[g].length > 0) result.push(byGroup[g].shift());
  }
  for(let g = 1; g <= 5 && result.length < CHALLENGE_MAX_HINTS; g++){
    while(byGroup[g].length > 0 && result.length < CHALLENGE_MAX_HINTS){
      result.push(byGroup[g].shift());
    }
  }
  return result.map(c => c.text);
}

function emptyChallengeStatsData(){
  return { version: CHALLENGE_VERSION, bestScore: 0, totalPlays: 0, totalCorrect: 0 };
}
function loadChallengeStats(){
  try{
    const raw = localStorage.getItem(CHALLENGE_STORAGE_KEY);
    if(!raw) return emptyChallengeStatsData();
    const parsed = JSON.parse(raw);
    if(!parsed || typeof parsed !== 'object' || parsed.version !== CHALLENGE_VERSION){
      const empty = emptyChallengeStatsData();
      saveChallengeStats(empty);
      return empty;
    }
    return parsed;
  }catch(e){
    console.warn('おらマチ: 挑戦状モードデータの読み込みに失敗したため初期化します', e);
    const empty = emptyChallengeStatsData();
    try{ saveChallengeStats(empty); }catch(e2){ /* 保存も失敗する場合は諦める */ }
    return empty;
  }
}
function saveChallengeStats(data){
  try{ localStorage.setItem(CHALLENGE_STORAGE_KEY, JSON.stringify(data)); }
  catch(e){ console.warn('おらマチ: 挑戦状モードデータの保存に失敗しました', e); }
}

// 現在進行中の挑戦状ゲームの状態。トップページ・通常モードとは完全に独立している。
let challengeGameState = null; // { city, hints, hintsShown, guessAttempts, finished }

// ==================== 質問の補足・報告機能 ====================
// HTMLへ挿入するテキストをエスケープする(ユーザー入力=報告コメント等を安全に扱うため)。
function escapeHtml(str){
  if(str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
// onclick="...('${key}')" のようにJS文字列リテラルへ埋め込む値を安全にする。
// (対象は質問キー等の内部データのみで、ユーザー自由入力はここに通さない)
function escapeJsString(str){
  return String(str == null ? '' : str).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}
// ゲーム終了時(正解・降参のいずれか)に呼ばれ、たまっていたスキップ履歴をまとめて1回で送信する。
// 通信回数を抑えるため、質問のたびに送るのではなくここでまとめる。
function sendQuestionSkipsBatch(){
  if(pendingQuestionSkips.length === 0) return;
  const skips = pendingQuestionSkips;
  pendingQuestionSkips = [];
  if(!CORRECTIONS_ENDPOINT_URL || !isAnonymousReportingEnabled()) return;
  try{
    fetch(CORRECTIONS_ENDPOINT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ type: 'question_skips_batch', mode: currentMode, skips, createdAt: new Date().toISOString() })
    }).catch(err => {
      console.warn('おらマチ: スキップ履歴の送信に失敗しました', err);
    });
  }catch(e){
    console.warn('おらマチ: スキップ履歴送信処理でエラー', e);
  }
}

let questionHelpOpen = false; // 現在の質問で補足欄が開いているか(次の質問へ進んだらfalseに戻す)
let reportedQuestionKeysInGame = new Set(); // このゲーム内で既に報告した質問キー(連打・二重送信防止)
let pendingQuestionSkips = []; // 「わからない」でスキップされた質問の記録(ゲーム終了時にまとめて送信する)
// ==================== この質問を報告 ====================
const QUESTION_REPORT_REASONS = ['意味が分からない', '答えが違うと思う', '判断できない質問', '表現が分かりにくい'];
let reportModalLastFocusedEl = null; // 閉じたときにフォーカスを戻す元の要素
let reportModalKeydownHandler = null; // Escキー等のリスナー(閉じるときに確実に外す)
let reportModalTargetKey = null; // 現在報告しようとしている質問のキー

function openQuestionReportModal(key){
  if(reportedQuestionKeysInGame.has(key)) return; // 二重送信防止(念のためJS側でも止める)
  const q = QUESTIONS[key];
  if(!q) return;
  reportModalTargetKey = key;
  reportModalLastFocusedEl = document.activeElement;

  const root = document.getElementById('modalRoot');
  if(!root) return;
  const reasonsHtml = QUESTION_REPORT_REASONS.map((r, i) => `
    <label class="report-reason-item">
      <input type="radio" name="reportReason" value="${escapeHtml(r)}" ${i === 0 ? 'checked' : ''}>
      <span>${escapeHtml(r)}</span>
    </label>`).join('');

  root.innerHTML = `
    <div class="modal-overlay" id="reportModalOverlay">
      <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="reportModalTitle">
        <div class="modal-header">
          <h2 id="reportModalTitle">⚑ この質問を報告</h2>
          <button type="button" class="modal-close-btn" id="reportModalCloseBtn" aria-label="閉じる">×</button>
        </div>
        <div class="modal-body">
          <p class="modal-question-text">${escapeHtml(q.text)}</p>
          <div class="report-reason-list">${reasonsHtml}</div>
          <label class="report-comment-label" for="reportCommentInput">コメント(任意・100文字まで)</label>
          <textarea id="reportCommentInput" maxlength="100" rows="3" placeholder="気になった点があれば教えてください"></textarea>
          <div class="report-status" id="reportStatus" aria-live="polite"></div>
        </div>
        <div class="modal-footer">
          <button type="button" class="modal-btn-secondary" id="reportModalCancelBtn">キャンセル</button>
          <button type="button" class="modal-btn-primary" id="reportSubmitBtn">送信する</button>
        </div>
      </div>
    </div>`;

  const closeBtn = document.getElementById('reportModalCloseBtn');
  const cancelBtn = document.getElementById('reportModalCancelBtn');
  const submitBtn = document.getElementById('reportSubmitBtn');
  const overlay = document.getElementById('reportModalOverlay');
  closeBtn.addEventListener('click', closeQuestionReportModal);
  cancelBtn.addEventListener('click', closeQuestionReportModal);
  submitBtn.addEventListener('click', submitQuestionReport);
  overlay.addEventListener('click', (e) => { if(e.target === overlay) closeQuestionReportModal(); });

  reportModalKeydownHandler = (e) => {
    if(e.key === 'Escape'){ closeQuestionReportModal(); return; }
    if(e.key === 'Tab'){ trapFocusInModal(e, overlay.querySelector('.modal-box')); }
  };
  document.addEventListener('keydown', reportModalKeydownHandler);
  registerActiveModalClose(closeQuestionReportModal);
  closeBtn.focus();
}

// モーダル内でTabキーによるフォーカスが外へ漏れないようにする(簡易フォーカストラップ)。
function trapFocusInModal(e, box){
  if(!box) return;
  const focusable = box.querySelectorAll('button, input, textarea, [tabindex]:not([tabindex="-1"])');
  if(focusable.length === 0) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
  else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
}

function closeQuestionReportModal(){
  unregisterActiveModalClose(closeQuestionReportModal);
  const root = document.getElementById('modalRoot');
  if(root) root.innerHTML = '';
  if(reportModalKeydownHandler){
    document.removeEventListener('keydown', reportModalKeydownHandler);
    reportModalKeydownHandler = null;
  }
  if(reportModalLastFocusedEl && typeof reportModalLastFocusedEl.focus === 'function'){
    reportModalLastFocusedEl.focus();
  }
  reportModalTargetKey = null;
}

function submitQuestionReport(){
  const key = reportModalTargetKey;
  if(!key) return;
  const q = QUESTIONS[key];
  const statusEl = document.getElementById('reportStatus');
  const submitBtn = document.getElementById('reportSubmitBtn');
  const setStatus = (msg) => { if(statusEl) statusEl.textContent = msg; };

  const selectedRadio = document.querySelector('input[name="reportReason"]:checked');
  const reason = selectedRadio ? selectedRadio.value : QUESTION_REPORT_REASONS[0];
  const commentInput = document.getElementById('reportCommentInput');
  const comment = commentInput ? commentInput.value.slice(0, 100) : '';

  if(submitBtn) submitBtn.disabled = true; // 連打防止
  setStatus('送信しています…');

  const entry = {
    type: 'question_report',
    questionKey: key,
    questionText: q ? q.text : '',
    reason: reason,
    comment: comment,
    gameMode: currentMode,
    createdAt: new Date().toISOString()
  };

  reportedQuestionKeysInGame.add(key); // 送信を試みた時点で「報告済み」にする(再送はできるが同時多発は防ぐ)
  saveGameSession('question', { pendingQuestionKey: key });
  trackGaEvent('question_report_submit', { question_key: key, reason: reason, mode: currentMode });

  const finish = (ok) => {
    if(ok){
      setStatus('報告を受け付けました。ありがとうございます。');
      const completedKey = key;
      setTimeout(() => {
        // 待ち時間中に別モーダルへ切り替わっていたら、その新しいモーダルは閉じない。
        if(reportModalTargetKey === completedKey && document.getElementById('reportModalOverlay')){
          closeQuestionReportModal();
        }
      }, 1200);
    } else {
      setStatus('送信できませんでした。もう一度お試しください。');
      reportedQuestionKeysInGame.delete(key); // 失敗時は再報告できるように戻す
      saveGameSession('question', { pendingQuestionKey: key });
      if(submitBtn) submitBtn.disabled = false;
    }
  };

  if(!CORRECTIONS_ENDPOINT_URL || !isAnonymousReportingEnabled()){
    // 送信先が未設定、または匿名送信がOFFの場合は、ローカルでの受付だけ行う(エラーにはしない)。
    finish(true);
    return;
  }
  try{
    fetch(CORRECTIONS_ENDPOINT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(entry)
    }).then(() => finish(true)).catch(() => finish(false));
  }catch(e){
    console.warn('おらマチ: 質問報告の送信でエラー', e);
    finish(false);
  }
}

// 「ⓘ どういう意味？」ボタン: 補足欄の開閉をトグルする。
// stage.innerHTML全体を再構築せず、対象のDOM要素だけを直接操作することで、
// 「開閉時に大きく画面が跳ねない」「回答状態や質問時間をリセットしない」を両立させる。
function toggleQuestionHelp(){
  const panel = document.getElementById('questionHelpPanel');
  const btn = document.getElementById('questionHelpBtn');
  if(!panel || !btn) return;
  questionHelpOpen = !questionHelpOpen;
  panel.classList.toggle('open', questionHelpOpen);
  panel.setAttribute('aria-hidden', questionHelpOpen ? 'false' : 'true');
  btn.setAttribute('aria-expanded', questionHelpOpen ? 'true' : 'false');
}

// 入力文字列から、自治体名の候補を検索する。「市」「区」「町」「村」の有無や、
// 前後の空白といった軽微な表記違いは無視して部分一致させる。
function searchChallengeCityCandidates(inputText){
  const normalize = s => (s || '').trim().replace(/\s/g, '').replace(/[市区町村]$/, '');
  const inputNorm = normalize(inputText);
  if(!inputNorm) return [];
  const matches = CITIES.filter(c => {
    if(c.name === '東京') return false;
    const name = displayName(c);
    return normalize(name).includes(inputNorm) || name.includes(inputText.trim());
  });
  // 同名の市区町村があれば都道府県も表示して区別できるようにする。
  const nameCounts = {};
  matches.forEach(c => { const n = displayName(c); nameCounts[n] = (nameCounts[n] || 0) + 1; });
  return matches.slice(0, 8).map(c => ({
    id: cityId(c),
    label: nameCounts[displayName(c)] > 1 ? `${displayName(c)}（${c.pref}）` : displayName(c),
  }));
}

// 「おらマチからの挑戦状」を開始する。全国制覇帳・正答率など通常モードの統計には
// 一切影響しない、完全に独立したゲーム状態(challengeGameState)で管理する。
function startChallengeMode(){
  activeGameTransientScreen = null;
  const eligible = getChallengeEligibleCities();
  if(eligible.length === 0){
    // 万一対象が0件でもエラーにせず、案内を出すだけに留める。
    stage.innerHTML = `
      <div class="mascot-wrap"><div class="shake">${mascotSVG('sad')}</div></div>
      <div class="bubble"><span class="icon">🙏</span>今は挑戦状を出せるマチがありません</div>
      <button class="again" onclick="navigateToOpening()">トップ画面へ戻る</button>
    `;
    return;
  }
  const city = eligible[Math.floor(Math.random() * eligible.length)];
  const hints = buildOrderedChallengeHints(city);
  challengeGameState = { city, hints, hintsShown: 1, guessAttempts: 0, finished: false };
  pushGameNavState('challenge');
  trackGaEvent('challenge_mode_start', {});
  renderChallengeMode();
}

function renderChallengeMode(){
  activeGameTransientScreen = null;
  stampsEl.innerHTML = '';
  const st = challengeGameState;
  if(!st){ return renderOpening(); }

  const hintsHtml = st.hints.slice(0, st.hintsShown).map((h, i) => `
    <li class="challenge-hint-item"><span class="challenge-hint-num">ヒント${i + 1}</span>${h}</li>`).join('');
  const moreHintBtn = st.hintsShown < st.hints.length
    ? `<button class="challenge-hint-btn" onclick="showNextChallengeHint()">次のヒントを見る（残り${st.hints.length - st.hintsShown}）</button>`
    : `<div class="challenge-hint-max">これが最後のヒントです</div>`;

  stage.innerHTML = `
    <div class="mascot-wrap"><div class="pop">${mascotSVG('normal')}</div></div>
    <div class="bubble challenge-bubble"><span class="icon">📜</span>おらマチからの挑戦状！</div>
    <ul class="challenge-hint-list">${hintsHtml}</ul>
    ${moreHintBtn}

    <div class="challenge-answer-block">
      <input type="text" id="challengeInput" class="challenge-input" placeholder="マチの名前を入力…" autocomplete="off" oninput="onChallengeInputChange()">
      <div id="challengeCandidates" class="challenge-candidates"></div>
      <button class="challenge-submit-btn" id="challengeSubmitBtn" onclick="submitChallengeGuess()" disabled>これで回答する</button>
    </div>
    <button class="link-btn" onclick="giveUpChallenge()">諦めて答えを見る</button>
  `;
  updateDebugPanel();
}

// 入力欄の内容が変わるたびに呼ばれ、候補一覧を更新する。
let challengeSelectedCityId = null;
function onChallengeInputChange(){
  const input = document.getElementById('challengeInput');
  const list = document.getElementById('challengeCandidates');
  const btn = document.getElementById('challengeSubmitBtn');
  challengeSelectedCityId = null;
  if(btn) btn.disabled = true;
  if(!input || !list) return;
  const candidates = searchChallengeCityCandidates(input.value);
  list.innerHTML = candidates.map(c => `
    <button type="button" class="challenge-candidate-item" onclick="selectChallengeCandidate('${c.id.replace(/'/g, "\\'")}', '${c.label.replace(/'/g, "\\'")}')">${c.label}</button>`).join('');
}
function selectChallengeCandidate(id, label){
  challengeSelectedCityId = id;
  const input = document.getElementById('challengeInput');
  const list = document.getElementById('challengeCandidates');
  const btn = document.getElementById('challengeSubmitBtn');
  if(input) input.value = label;
  if(list) list.innerHTML = '';
  if(btn) btn.disabled = false;
}

function showNextChallengeHint(){
  const st = challengeGameState;
  if(!st || st.finished) return;
  if(st.hintsShown < st.hints.length) st.hintsShown++;
  renderChallengeMode();
}

function submitChallengeGuess(){
  const st = challengeGameState;
  if(!st || st.finished || !challengeSelectedCityId) return;
  st.guessAttempts++;
  const isCorrect = challengeSelectedCityId === cityId(st.city);
  if(isCorrect){
    finishChallengeMode(true);
    return;
  }
  // 不正解: すぐに答えは見せず、次のヒントを促す。最大ヒント数まで開示済みなら結果発表。
  if(st.hintsShown >= st.hints.length){
    finishChallengeMode(false);
    return;
  }
  st.hintsShown++;
  challengeSelectedCityId = null;
  activeGameTransientScreen = 'challengeNextHint';
  stage.innerHTML = `
    <div class="mascot-wrap"><div class="shake">${mascotSVG('think')}</div></div>
    <div class="bubble challenge-bubble"><span class="icon">🤔</span>惜しい！次のヒントを見る？</div>
    <button class="again" onclick="renderChallengeMode()">次のヒントを見る</button>
  `;
}

function giveUpChallenge(){
  const st = challengeGameState;
  if(!st || st.finished) return;
  finishChallengeMode(false, true);
}

// ゲームを終了させ、結果画面を表示する。統計(loadChallengeStats)もここで更新する。
function finishChallengeMode(success, gaveUp){
  const st = challengeGameState;
  if(!st) return;
  st.finished = true;
  const hintsUsed = st.hintsShown;
  const score = success ? (CHALLENGE_SCORE_BY_HINTS[hintsUsed] || CHALLENGE_SCORE_BY_HINTS[CHALLENGE_MAX_HINTS]) : 0;
  st.success = success;
  st.score = score;
  markGameNavResult('challenge');

  const stats = loadChallengeStats();
  stats.totalPlays += 1;
  if(success){
    stats.totalCorrect += 1;
    if(score > stats.bestScore) stats.bestScore = score;
  }
  saveChallengeStats(stats);
  trackGaEvent('challenge_mode_complete', { result: success ? 'correct' : 'incorrect', hints_used: hintsUsed, score });

  renderChallengeResult(success, score, hintsUsed);
}

function renderChallengeResult(success, score, hintsUsed){
  activeGameTransientScreen = null;
  markGameNavResult('challenge');
  const st = challengeGameState;
  const city = st.city;
  const resultLine = success
    ? `<div class="hanko">せいかい</div>`
    : `<div class="challenge-miss-line">正解は「${displayName(city)}」でした</div>`;
  const scoreLine = success ? `<div class="challenge-score">${score}点<span class="challenge-score-sub">（ヒント${hintsUsed}個で正解）</span></div>` : '';

  stage.innerHTML = `
    <div class="share-card challenge-result-card" id="challengeResultCard">
      <div class="share-card-head">
        <span class="share-eyebrow">おらマチからの挑戦状</span>
        ${success ? happyCelebrationMascotHTML() : `<div class="mascot-wrap"><div class="pop">${mascotSVG('sad')}</div></div>`}
      </div>
      ${resultLine}
      <div class="result-name">${displayName(city)}</div>
      <div class="result-pref">${city.pref}</div>
      ${scoreLine}
      <div class="fact">${city.fact || ''}</div>
    </div>
    <div class="result-actions-primary">
      <button class="again" onclick="startChallengeMode()">もう一度挑戦する</button>
    </div>
    <div class="result-actions-secondary">
      <button class="share-btn-text" onclick="shareChallengeResult()">
        <svg class="x-icon" viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        結果をシェア
      </button>
      <button class="link-btn" onclick="navigateToOpening()">トップへ戻る</button>
    </div>
  `;
  updateDebugPanel();
}

function shareChallengeResult(){
  const st = challengeGameState;
  if(!st) return;
  trackGaEvent('share', { method: 'x_text', content_type: 'challenge_result' });
  trackGaEvent('share_button_click', { method: 'x_text_challenge' });
  incrementShareCount();
  const text = st.success
    ? `🦝 おらマチからの挑戦状に正解！\n「${displayName(st.city)}」を${st.hintsShown}個のヒントで当てて${st.score}点でした。 #おらマチ`
    : `🦝 おらマチからの挑戦状に挑戦！\n正解は「${displayName(st.city)}」でした。次は当ててみせる！ #おらマチ`;
  const pageUrl = location.href.split('#')[0];
  const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(pageUrl)}`;
  window.open(intent, '_blank', 'noopener,noreferrer');
}

function emptyDailyChallengeData(){
  return { version: DAILY_CHALLENGE_VERSION, completedDates: [], currentStreak: 0, maxStreak: 0, history: [] };
}

function isValidDailyChallengeDate(value){
  if(typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split('-').map(Number);
  const utc = new Date(Date.UTC(year, month - 1, day));
  return Number.isFinite(utc.getTime()) && utc.toISOString().slice(0, 10) === value;
}

// localStorageは利用者や拡張機能から書き換えられるため、履歴の文字列をそのままHTMLへ戻さない。
// お題文は保存値を信用せず、既知のthemeIdから静的定義を引き直す。
function normalizeDailyChallengeData(parsed){
  if(!parsed || typeof parsed !== 'object' || Array.isArray(parsed)
     || parsed.version !== DAILY_CHALLENGE_VERSION
     || !Array.isArray(parsed.completedDates) || !Array.isArray(parsed.history)){
    return null;
  }

  const completedDates = [...new Set(
    parsed.completedDates.filter(isValidDailyChallengeDate)
  )].slice(-5000);
  const themeById = new Map(DAILY_CHALLENGE_THEMES.map(theme => [theme.id, theme]));
  const history = parsed.history.slice(-120).map(raw => {
    if(!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
    const date = isValidDailyChallengeDate(raw.date) ? raw.date : '';
    const theme = typeof raw.themeId === 'string' ? themeById.get(raw.themeId) : null;
    if(!date || !theme) return null;
    const questionCount = Number.isInteger(raw.questionCount)
      && raw.questionCount >= 1 && raw.questionCount <= 1000
      ? raw.questionCount
      : null;
    const atMs = typeof raw.at === 'string' ? Date.parse(raw.at) : NaN;
    const at = Number.isFinite(atMs)
      ? new Date(atMs).toISOString()
      : new Date(`${date}T00:00:00+09:00`).toISOString();
    return {
      date,
      themeId: theme.id,
      themeText: theme.text,
      questionCount,
      at,
    };
  }).filter(Boolean);

  const safeInteger = value => Number.isInteger(value) && value >= 0
    ? Math.min(value, completedDates.length)
    : 0;
  const currentStreak = safeInteger(parsed.currentStreak);
  const maxStreak = Math.max(currentStreak, safeInteger(parsed.maxStreak));
  return {
    version: DAILY_CHALLENGE_VERSION,
    completedDates,
    currentStreak,
    maxStreak,
    history,
  };
}

function loadDailyChallengeData(){
  try{
    const raw = localStorage.getItem(DAILY_CHALLENGE_STORAGE_KEY);
    if(!raw) return emptyDailyChallengeData();
    const parsed = JSON.parse(raw);
    const normalized = normalizeDailyChallengeData(parsed);
    if(!normalized){
      console.warn('おらマチ: 今日のチャレンジデータの形式が不正なため、初期化します');
      const empty = emptyDailyChallengeData();
      saveDailyChallengeData(empty);
      return empty;
    }
    if(JSON.stringify(parsed) !== JSON.stringify(normalized)){
      saveDailyChallengeData(normalized);
    }
    return normalized;
  }catch(e){
    console.warn('おらマチ: 今日のチャレンジデータの読み込みに失敗したため初期化します', e);
    const empty = emptyDailyChallengeData();
    try{ saveDailyChallengeData(empty); }catch(e2){ /* 保存も失敗する場合は諦める */ }
    return empty;
  }
}
function saveDailyChallengeData(data){
  try{ localStorage.setItem(DAILY_CHALLENGE_STORAGE_KEY, JSON.stringify(data)); }
  catch(e){ console.warn('おらマチ: 今日のチャレンジデータの保存に失敗しました', e); }
}

// 日付文字列(YYYY-MM-DD)から、決定的な0以上の整数を作る簡易ハッシュ。
// 「同じ日は必ず同じ値」「日によって変わる」の両方を満たせればよいので、暗号強度は不要。
function simpleDateHash(dateStr){
  let h = 0;
  for(let i = 0; i < dateStr.length; i++){
    h = (h * 31 + dateStr.charCodeAt(i)) >>> 0;
  }
  return h;
}

// 今日のお題を返す。地方型のお題は、含まれる2地方のうちどちらを実際に開始するかも
// ここで(日付から決定的に)確定させ、themeオブジェクトの resolvedMode に入れておく。
function getTodaysChallenge(){
  const dateStr = todayJstDateString();
  const hash = simpleDateHash(dateStr);
  const theme = DAILY_CHALLENGE_THEMES[hash % DAILY_CHALLENGE_THEMES.length];
  let resolvedMode = 'all';
  if(theme.type === 'region'){
    resolvedMode = theme.modes[Math.floor(hash / DAILY_CHALLENGE_THEMES.length) % theme.modes.length];
  }
  return { ...theme, dateStr, resolvedMode };
}

// 今日、既に達成済みかどうか。
function isTodaysChallengeCompleted(){
  const data = loadDailyChallengeData();
  return data.completedDates.includes(todayJstDateString());
}

// トップページの「今日のチャレンジ」カードのHTMLを組み立てる。目立たせすぎて通常の
// 開始ボタン(ビギナー版)を邪魔しないよう、コンパクトな1枚のカードに収める。
function renderDailyChallengeCardHtml(){
  const theme = getTodaysChallenge();
  const completed = isTodaysChallengeCompleted();
  const data = loadDailyChallengeData();
  // 日本時間の「今日の日」(1〜31)。日付が変わるたびに、カレンダーアイコン内の数字も
  // 自動的に切り替わる(絵文字だけでは任意の数字を表示できないため、CSSで自作している)。
  const todayDay = parseInt(todayJstDateString().slice(8, 10), 10);
  const streakLine = data.currentStreak >= 2
    ? `<span class="daily-challenge-card-streak">🔥 ${data.currentStreak}日連続達成中</span>`
    : '';
  const statusHtml = completed
    ? `<span class="daily-challenge-card-done">✓ 今日は達成済み</span>`
    : `<button class="daily-challenge-card-btn" onclick="startDailyChallenge()">挑戦する</button>`;

  return `
    <div class="daily-challenge-card">
      <div class="daily-challenge-card-head">
        <span class="daily-challenge-card-label"><span class="daily-challenge-calendar-icon" aria-hidden="true"><span class="cal-date">${todayDay}</span></span> 今日のチャレンジ</span>
        ${streakLine}
      </div>
      <div class="daily-challenge-card-theme">今日は「${theme.text}」で挑戦</div>
      <div class="daily-challenge-card-actions">
        ${statusHtml}
        <button class="daily-challenge-card-history" onclick="renderDailyChallengeHistory()">記録を見る</button>
      </div>
    </div>`;
}
let questionShownAt = null; // 現在の質問が画面に表示された時刻(回答時間の計測用)
                              // 「地元バレポイント」を、質問を出した後に振り返って計算するために使う。
let modeStartCount = 0;      // 今のモードを開始した時点の自治体数(候補数表示の分母に使う)
let lastDisplayedRemainingCount = null; // 候補数表示を単調減少させるための直近表示値
let forcedGuessCity = null; // 客観的質問で候補が1件に絞れたときに、確認画面へ渡す指定候補
let stableTopStreak = 0;    // 1位候補が連続して変わっていない回数(推測タイミングの安定判定用)
let lastTopName = null;

// ---- 統計質問(人口・面積・人口密度)の重複防止 ----
// 人口のはしご(小さい順)。フル確信度で回答された結果から「今分かっている人口の範囲」を
// 追跡し、その範囲だけで答えが確定してしまう人口質問を出題候補から除外する。
const POP_LADDER_INFO = {
  popUnder50k: { type:'under',   value:50000 },
  pop100k:     { type:'atleast', value:100000 },
  pop300k:     { type:'atleast', value:300000 },
  pop500k:     { type:'atleast', value:500000 },
};
let knownPopMin = -Infinity; // 今分かっている人口の下限(この値以上)
let knownPopMax = Infinity;  // 今分かっている人口の上限(この値未満)

function updateKnownPopRange(key, val){
  const info = POP_LADDER_INFO[key];
  if(!info || val === null) return;
  if(info.type === 'under'){
    if(val === true) knownPopMax = Math.min(knownPopMax, info.value);
    else knownPopMin = Math.max(knownPopMin, info.value);
  } else {
    if(val === true) knownPopMin = Math.max(knownPopMin, info.value);
    else knownPopMax = Math.min(knownPopMax, info.value);
  }
}
function isPopQuestionRedundant(key){
  const info = POP_LADDER_INFO[key];
  if(!info) return false;
  if(info.type === 'under') return knownPopMax <= info.value || knownPopMin >= info.value;
  return knownPopMin >= info.value || knownPopMax <= info.value;
}

function isOppositeStatsAlreadyAsked(key){
  for(const [a,b] of STATS_OPPOSITE_PAIRS){
    if(key === a && asked.includes(b)) return true;
    if(key === b && asked.includes(a)) return true;
  }
  return false;
}
// 面積の直後に人口密度(またはその逆)を連続させない
const AREA_KEYS = new Set(['areaLarge','areaCompact']);
const DENSITY_KEYS = new Set(['densityHigh','densityLow']);
// 【重要】ここで見る「直近の質問」は、必ず実際にプレイヤーへ表示した質問(history)から取る。
// asked配列にはEXCLUSIVE_MAPによる自動除外分(1回のトリガーで数十件増えることがある)も
// 積まれているため、asked の末尾をそのまま使うと「直近の質問」が自動除外の残骸になり、
// このジャンル連続防止ロジックが正しく働かなくなる。
function lastDisplayedKeys(n){
  return history.slice(-n).map(h => h.key);
}
function isAreaDensityBackToBack(key){
  const last = lastDisplayedKeys(1)[0];
  if(!last) return false;
  if(AREA_KEYS.has(key) && DENSITY_KEYS.has(last)) return true;
  if(DENSITY_KEYS.has(key) && AREA_KEYS.has(last)) return true;
  return false;
}
// 同じジャンルを3問以上連続させない(決め手になる質問は例外として許可する)。
function wouldExceedCategoryStreak(key){
  const last2 = lastDisplayedKeys(2);
  if(last2.length < 2) return false;
  const cat = categoryOf(key);
  const last2Cat = last2.map(categoryOf);
  return last2Cat[0] === cat && last2Cat[1] === cat;
}
const MAX_Q = 34;           // 通常質問の上限
const MAX_EXTRA_Q = 5;      // 「ちがう」の後の追加質問の上限(5問で固定。下の救済では延ばさない)
const HARD_MAX_Q = MAX_Q + MAX_EXTRA_Q + 10; // 暴走防止の絶対的な安全装置(通常は到達しない)
const ABSOLUTE_MAX_Q = 50;  // 1ゲームで出す質問の絶対的な上限(下の「わからない」救済を含めてもここは超えない)

// 【「わからない」を多く使ったときの救済】
// 「わからない」は候補の重みを一切動かさないので、その質問は完全に無駄打ちになる。
// 34問のうち10問を「わからない」で使うと、実質24問しか絞り込みに使えていないのに
// 上限に達して打ち切られてしまう(実測では「わからない」40%で5/20件が上限到達で失敗)。
// そこで、無駄打ちになった分だけ上限を延ばして、実質の質問数を確保する。
// 正直に「わからない」と答える人が損をしないようにするための調整。
// ただし、延ばした結果でも ABSOLUTE_MAX_Q(50問)は超えない。長すぎると飽きるため。
const UNKNOWN_EXTRA_Q_MAX = 10;   // 上限を延ばせる最大の問数(延々と続かないための歯止め)
function unknownAllowanceQ(){
  const wasted = answerLog.filter(r => r.val === null).length;
  return Math.min(wasted, UNKNOWN_EXTRA_Q_MAX);
}
// 「わからない」の分を上乗せした、いまのフェーズの実質的な上限。
// 追加質問(extra)は常に MAX_EXTRA_Q 問で固定にする。ここを延ばすと、1回目が外れた後に
// 延々と質問が続いて間延びするため(「わからない」の救済は通常質問側だけで行う)。
function effectiveMaxQ(phase){
  if(phase === 'extra') return MAX_EXTRA_Q;
  const base = MAX_Q + unknownAllowanceQ();
  // 全体で50問を超えないよう、いまのフェーズに残せる分に制限する
  return Math.min(base, Math.max(1, ABSOLUTE_MAX_Q - extraQuestionCount));
}

// ---- スコア方式のパラメータ ----
// 客観的質問(事実で確認できる)ほど強く反映し、主観的質問(印象・評判)は反映を控えめにする。
const OBJ_MATCH_BONUS = 4;        // 客観的質問: 一致したときの加点
const OBJ_MISMATCH_PENALTY = 2.5; // 客観的質問: 不一致だったときの減点
const SUBJ_MATCH_BONUS = 2;       // 主観的質問: 一致したときの加点(控えめ)
const SUBJ_MISMATCH_PENALTY = 0.8;// 主観的質問: 不一致だったときの減点(小さめ=反対候補を消しすぎない)
const PARTIAL_WEIGHT = 0.5;       // 「たぶんそう/たぶんいいえ」のときの加減点の強さ(通常の何倍か)

// ---- 推測タイミングのしきい値(すべてここにまとめる) ----
const MIN_Q_BEFORE_EARLY_GUESS = 3;        // 最低これだけ質問してから「早押し」判定を始める(通常質問側のみ)
const CONFIDENCE_MARGIN = 8;               // 1位と2位のスコア差がこれ以上なら、途中でも答えを出す
const GUESS_CONFIDENCE_THRESHOLD = 0.82;   // 1位候補の確率(推定)がこれ以上なら、途中でも答えを出す
const MIN_QUESTIONS_FOR_STABLE_GUESS = 15; // 「安定判定」を始める最低質問数(通常質問側のみ)
const STABLE_STREAK_REQUIRED = 4;          // 1位候補が何問連続で変わらなければ「安定」とみなすか

// ---- 候補の完全除外条件(ここに挙げた場合だけ、スコアを下げるのではなく候補から完全に外す) ----
// 「わからない」やあいまいな回答1回だけでは絶対に消えないよう、しきい値は厳しめに設定する。
const OBJECTIVE_CONTRADICTION_LIMIT = 5; // 明確な(フル確信度の)客観的回答にこの回数以上矛盾したら除外する
const EXTREME_LOW_PROB_THRESHOLD = 0.0002; // 候補確率(softmax)がこれを下回ったら除外候補にする
const MIN_POOL_FOR_PROB_PRUNE = 20;       // 候補がこれより少ない終盤では確率による除外は行わない(僅差の逆転を守るため)

// 上位候補5〜15自治体の違いを優先する、追加質問フェーズ用の絞り込み件数
const EXTRA_PHASE_POOL_MIN = 5;
const EXTRA_PHASE_POOL_MAX = 15;

// 質問を「客観的(事実)」か「主観的(印象・評判)」かに分類する。
// 【方針】質問文に含まれる語(「有名」「知られている」など)から機械的に推測するのはやめて、
// 質問ごとに subjective: true を明示する。理由:
//  ・「有名」は日本語として自然なだけの言い回しで、中身が事実データの質問(秋吉台がある・
//    浅草寺がある など)にも普通に使われる。語で判定すると、そういう質問まで主観扱いになる。
//  ・逆に「温泉地として知られている?」「大きな川が流れている?」のように、人によって
//    答えが割れる質問が客観扱いのままだと、「いいえ」と答えただけで正解候補が強く沈む。
// どちらの誤りも語の有無では見分けられないため、質問を作る人が明示する方式にする。
// 使い方: QUESTIONSの定義に subjective: true を足すだけ。
//   festival: {text:'全国的に有名なお祭りがある？', icon:'🎆', subjective:true},
function isSubjectiveQuestion(key){
  const q = QUESTIONS[key] || STATS_QUESTIONS[key];
  return !!(q && q.subjective === true);
}

// シード指定可能な乱数(指定しない場合は通常のMath.randomを使う)。
// シミュレーションで同じゲーム展開を再現したいときに setRandomSeed() で固定できる。
let __rngSeed = null;
function setRandomSeed(seed){ __rngSeed = (seed >>> 0) || 1; }
function rng(){
  if(__rngSeed == null) return Math.random();
  __rngSeed ^= __rngSeed << 13; __rngSeed >>>= 0;
  __rngSeed ^= __rngSeed >>> 17;
  __rngSeed ^= __rngSeed << 5;  __rngSeed >>>= 0;
  return (__rngSeed >>> 0) / 4294967296;
}

// 「東京」(23区全体を表す集計エントリ)は内部IDとしてはそのまま維持し、
// 画面表示だけ「東京23区部」に変える。将来、制覇帳や画像共有を追加する場合も
// 生の city.name を直接表示せず、必ずこの関数を経由すること。
function displayName(city){
  if(!city) return '';
  return city.name === '東京' ? '東京23区部' : city.name;
}

// 【シェア用の自治体名】同名の自治体を区別するため、データ上の名前には
// 「池田町（岐阜県）」のように末尾へ「（都道府県名）」を付けている。
// ただしシェア文・シェア画像では都道府県名を別に添えるため、そのまま使うと
// 「岐阜県池田町（岐阜県）」と二重になって読みにくい。ここでは末尾の括弧書きだけを外す。
// (「東京23区部」のように括弧を含まない表示名はそのまま返る)
function shareDisplayName(city){
  return stripPrefSuffix(displayName(city));
}

// 表示名の末尾に付いた「（都道府県名）」を取り除く。文字列を直接渡しても使える。
function stripPrefSuffix(label){
  return String(label || '').replace(/（[^（）]+?[都道府県]）$/, '');
}

// 結果画面用: 市役所を中心にした航空写真(正方形)のHTMLを組み立てる。
// APIキー不要の Google マップ埋め込み(output=embed)を使い、市役所を住所検索で表示する。
// - 検索クエリは「県名 + 市名 + 市役所」。区別表記の括弧(例:伊達市（福島県）)や
//   23区集計エントリ(東京)は検索の邪魔になるので取り除く。
// - t=k で航空写真、z=13 で概ね5km四方程度の範囲を表示する。
// - CSSのaspect-ratioで正方形を保つ。
function buildCityMapHtml(city){
  if(!city || !city.name) return '';
  // 東京23区の集計エントリは特定の市役所が無いので地図を出さない
  if(city.name === '東京') return '';
  // 区別表記の括弧を除く(例: 「伊達市（福島県）」→「伊達市」)
  const baseName = city.name.replace(/（.*?）/g, '').replace(/\(.*?\)/g, '');
  const query = `${city.pref}${baseName}役所`;
  // APIキー不要の埋め込み形式。output=embed で iframe 表示、t=k で航空写真、z=14 で
  // 市役所周辺(概ね数km四方)を表示する。ドメインは maps.google.co.jp を使う。
  const src = `https://maps.google.co.jp/maps?output=embed&q=${encodeURIComponent(query)}&t=k&z=14&hl=ja`;
  return `<div class="citymap-block">
    <div class="citymap-frame">
      <iframe class="citymap-iframe" src="${src}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen title="${displayName(city)}の航空写真"></iframe>
    </div>
    <div class="citymap-caption">${displayName(city)}役所の周辺(航空写真)</div>
  </div>`;
}

// 自治体の一意ID。cities.jsonに専用のID列は無いため、
// 「都道府県+名前」を安定キーとして使う(名前だけより変更に強い)。
// 将来cities.jsonに正式なIDが追加されたら、この関数だけ差し替えれば良い。
function cityId(city){
  if(!city) return '';
  return city.pref + '::' + city.name;
}

// 【同名自治体の表示名変更にともなう記録の引き継ぎ】
// 「池田町」のように複数の県に同じ名前の自治体がある場合、区別できるよう表示名へ
// 「（都道府県名）」を付けている(既存の伊達市・府中市と同じ方式)。
// cityIdは pref + '::' + name で作るため、表示名を変えると保存済みの記録のキーも変わり、
// そのままでは制覇帳や誤答回数の記録が迷子になってしまう。
// そこで「旧キー → 新キー」の対応表を持ち、読み込み時に一度だけ移し替える。
// 一度移し替えたあとは新キーで保存されるので、この処理は実質1回しか動かない。
const CITY_ID_MIGRATION = {
  '福井県::池田町': '福井県::池田町（福井県）',
  '長野県::池田町': '長野県::池田町（長野県）',
  '長野県::高山村': '長野県::高山村（長野県）',
  '福井県::美浜町': '福井県::美浜町（福井県）',
  '富山県::朝日町': '富山県::朝日町（富山県）',
  '大阪府::太子町': '大阪府::太子町（大阪府）',
  '長野県::川上村': '長野県::川上村（長野県）',
  '山梨県::南部町': '山梨県::南部町（山梨県）',
  '滋賀県::日野町': '滋賀県::日野町（滋賀県）',
  '和歌山県::広川町': '和歌山県::広川町（和歌山県）',
  '長野県::高森町': '長野県::高森町（長野県）',
  '島根県::美郷町': '島根県::美郷町（島根県）',
  '愛媛県::松前町': '愛媛県::松前町（愛媛県）',
  '静岡県::森町': '静岡県::森町（静岡県）',
  '和歌山県::日高町': '和歌山県::日高町（和歌山県）',
  '静岡県::清水町': '静岡県::清水町（静岡県）',
  '青森県::南部町': '青森県::南部町（青森県）',
  '熊本県::美里町': '熊本県::美里町（熊本県）',
  '山形県::朝日町': '山形県::朝日町（山形県）',
  '山形県::小国町': '山形県::小国町（山形県）',
  '熊本県::小国町': '熊本県::小国町（熊本県）',
  '山形県::川西町': '山形県::川西町（山形県）',
  '奈良県::川西町': '奈良県::川西町（奈良県）',
  '宮城県::川崎町': '宮城県::川崎町（宮城県）',
  '福岡県::川崎町': '福岡県::川崎町（福岡県）',
  '山形県::金山町': '山形県::金山町（山形県）',
  '福島県::金山町': '福島県::金山町（福島県）',
  '秋田県::美郷町': '秋田県::美郷町（秋田県）',
  '群馬県::南牧村': '群馬県::南牧村（群馬県）',
  '長野県::南牧村': '長野県::南牧村（長野県）',
  '群馬県::明和町': '群馬県::明和町（群馬県）',
  '三重県::明和町': '三重県::明和町（三重県）',
  '群馬県::昭和村': '群馬県::昭和村（群馬県）',
  '福島県::昭和村': '福島県::昭和村（福島県）',
  '群馬県::高山村': '群馬県::高山村（群馬県）',
  '埼玉県::美里町': '埼玉県::美里町（埼玉県）',
  '宮城県::美里町': '宮城県::美里町（宮城県）',
};

// 記録オブジェクト(キーがcityId)の旧キーを新キーへ移す。変更があればtrueを返す。
// 新旧どちらの記録もある場合は、より良い記録(最短質問数が少ないほう)を残してまとめる。
function migrateCityIdKeys(bucket, mergeEntry){
  if(!bucket || typeof bucket !== 'object') return false;
  let changed = false;
  for(const oldId in CITY_ID_MIGRATION){
    if(!Object.prototype.hasOwnProperty.call(bucket, oldId)) continue;
    const newId = CITY_ID_MIGRATION[oldId];
    const oldVal = bucket[oldId];
    bucket[newId] = Object.prototype.hasOwnProperty.call(bucket, newId) && mergeEntry
      ? mergeEntry(bucket[newId], oldVal)
      : (Object.prototype.hasOwnProperty.call(bucket, newId) ? bucket[newId] : oldVal);
    delete bucket[oldId];
    changed = true;
  }
  return changed;
}

// 制覇帳エントリ用のまとめ方(同じ自治体の記録が新旧に分かれていた場合)
function mergeConquestEntries(a, b){
  if(!a || typeof a !== 'object') return b;
  if(!b || typeof b !== 'object') return a;
  return {
    ...a,
    firstAt: (a.firstAt && b.firstAt) ? (a.firstAt < b.firstAt ? a.firstAt : b.firstAt) : (a.firstAt || b.firstAt),
    lastAt:  (a.lastAt && b.lastAt)  ? (a.lastAt  > b.lastAt  ? a.lastAt  : b.lastAt)  : (a.lastAt  || b.lastAt),
    count: (Number(a.count) || 0) + (Number(b.count) || 0),
    minQuestions: Math.min(
      Number.isFinite(a.minQuestions) ? a.minQuestions : Infinity,
      Number.isFinite(b.minQuestions) ? b.minQuestions : Infinity),
    modes: [...new Set([...(a.modes || []), ...(b.modes || [])])],
  };
}

// localStorageや読み込みファイルは利用者が書き換えられるため、そのまま表示には使わない。
// 自治体名・都道府県名は必ず現在のcities.jsonから引き直し、数値や日時も安全な型へ整える。
// strict=trueはセーブデータ読み込み用で、1件でも不正なら全体を拒否する。
function normalizeConquestData(rawConquest, strict){
  const fail = reason => ({ ok: false, reason });
  if(!rawConquest || typeof rawConquest !== 'object' || Array.isArray(rawConquest)
     || !rawConquest.entries || typeof rawConquest.entries !== 'object' || Array.isArray(rawConquest.entries)){
    return fail('制覇帳のデータが見つかりません。');
  }

  const rawIds = Object.keys(rawConquest.entries);
  if(rawIds.length > 2000) return fail('自治体データの件数が多すぎます。');

  // Object.prototypeを持たない入れ物へ移してから旧ID migrationを行う。
  // "__proto__"等を含む細工されたJSONでもprototypeを変更させない。
  const migratedEntries = Object.create(null);
  rawIds.forEach(id => {
    if(typeof id === 'string' && id.length <= 100){
      migratedEntries[id] = rawConquest.entries[id];
    }
  });
  migrateCityIdKeys(migratedEntries, mergeConquestEntries);

  const cityById = new Map(CITIES.map(city => [cityId(city), city]));
  const validModes = new Set(Object.keys(MODES));
  const normalizedEntries = {};
  for(const id of Object.keys(migratedEntries)){
    const raw = migratedEntries[id];
    const city = cityById.get(id);
    const invalid = !city || !raw || typeof raw !== 'object' || Array.isArray(raw)
      || !Number.isInteger(raw.count) || raw.count < 1 || raw.count > 1000000
      || !Number.isInteger(raw.minQuestions) || raw.minQuestions < 1 || raw.minQuestions > 1000
      || !Array.isArray(raw.modes) || raw.modes.length > 30;
    if(invalid){
      if(strict) return fail('制覇帳データの内容が壊れています。');
      continue;
    }

    const modes = [...new Set(raw.modes.filter(mode => typeof mode === 'string' && validModes.has(mode)))];
    if(strict && modes.length !== raw.modes.length){
      return fail('認識できないゲームモードが含まれています。');
    }

    const firstAtMs = typeof raw.firstAt === 'string' ? Date.parse(raw.firstAt) : NaN;
    const lastAtMs = typeof raw.lastAt === 'string' ? Date.parse(raw.lastAt) : NaN;
    if(strict && (!Number.isFinite(firstAtMs) || !Number.isFinite(lastAtMs))){
      return fail('制覇帳データの日時が壊れています。');
    }
    const firstAt = Number.isFinite(firstAtMs) ? new Date(firstAtMs).toISOString() : new Date(0).toISOString();
    const lastAt = Number.isFinite(lastAtMs) ? new Date(lastAtMs).toISOString() : firstAt;

    normalizedEntries[id] = {
      id,
      name: displayName(city),
      pref: city.pref,
      firstAt,
      lastAt,
      count: raw.count,
      minQuestions: raw.minQuestions,
      modes,
    };
  }

  return {
    ok: true,
    conquest: { version: CONQUEST_VERSION, entries: normalizedEntries }
  };
}

// ==================== localStorage: 設定(匿名送信) ====================
const SETTINGS_STORAGE_KEY = 'oramachi_settings_v1';
const SETTINGS_VERSION = 1;
// 初期値はON(既存の「最近当てられたマチ」「プレイ回数」表示が、
// 導入前と変わらず引き続き機能するようにするため)。設定画面でいつでもOFFにできる。
const DEFAULT_SETTINGS = { version: SETTINGS_VERSION, anonymousReporting: true };

function loadSettings(){
  try{
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if(!raw) return { ...DEFAULT_SETTINGS };
    const parsed = JSON.parse(raw);
    if(!parsed || typeof parsed !== 'object' || parsed.version !== SETTINGS_VERSION){
      // 破損・旧バージョンのデータを検出した時点で、localStorage側も安全な初期値に書き戻しておく
      saveSettings(DEFAULT_SETTINGS);
      return { ...DEFAULT_SETTINGS };
    }
    return { ...DEFAULT_SETTINGS, ...parsed };
  }catch(e){
    console.warn('おらマチ: 設定データの読み込みに失敗したため初期値を使います', e);
    try{ saveSettings(DEFAULT_SETTINGS); }catch(e2){ /* 保存も失敗する場合は諦める(ゲーム自体は継続) */ }
    return { ...DEFAULT_SETTINGS };
  }
}
function saveSettings(settings){
  try{
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  }catch(e){
    console.warn('おらマチ: 設定の保存に失敗しました(localStorageが使えない可能性があります)', e);
  }
}
let appSettings = loadSettings();
function isAnonymousReportingEnabled(){
  return !!appSettings.anonymousReporting;
}

// ==================== localStorage: 全国制覇帳 ====================
const CONQUEST_STORAGE_KEY = 'oramachi_conquest_v1';
const CONQUEST_VERSION = 1;
function emptyConquestData(){
  return { version: CONQUEST_VERSION, entries: {} };
}
function loadConquest(){
  try{
    const raw = localStorage.getItem(CONQUEST_STORAGE_KEY);
    if(!raw) return emptyConquestData();
    const parsed = JSON.parse(raw);
    if(!parsed || typeof parsed !== 'object' || parsed.version !== CONQUEST_VERSION
       || typeof parsed.entries !== 'object' || parsed.entries === null){
      console.warn('おらマチ: 制覇帳データの形式が不正なため、初期化します');
      const empty = emptyConquestData();
      saveConquest(empty); // localStorage側も安全な状態に書き戻しておく
      return empty;
    }
    const normalized = normalizeConquestData(parsed, false);
    if(!normalized.ok){
      const empty = emptyConquestData();
      saveConquest(empty);
      return empty;
    }
    // 旧形式、壊れた項目、表示名の改ざん等があれば、安全な正規形へ一度だけ書き戻す。
    const normalizedData = normalized.conquest;
    if(JSON.stringify(parsed) !== JSON.stringify(normalizedData)){
      try{ saveConquest(normalizedData); }catch(e){ /* 保存に失敗してもゲームは続行する */ }
    }
    return normalizedData;
  }catch(e){
    console.warn('おらマチ: 制覇帳データの読み込みに失敗したため初期化します(破損データの可能性)', e);
    const empty = emptyConquestData();
    try{ saveConquest(empty); }catch(e2){ /* 保存も失敗する場合は諦める(ゲーム自体は継続) */ }
    return empty;
  }
}
function saveConquest(data){
  try{
    localStorage.setItem(CONQUEST_STORAGE_KEY, JSON.stringify(data));
    return true;
  }catch(e){
    console.warn('おらマチ: 制覇帳の保存に失敗しました(localStorageの容量不足などの可能性)', e);
    return false;
  }
}

// ==================== localStorage: プレイ統計・称号 ====================
// 自治体ごとの正解回数・最少質問数・都道府県などは、既に全国制覇帳(oramachi_conquest_v1)
// が持っているため、ここでは重複させず、称号判定のときに制覇帳データを直接参照する。
const STATS_STORAGE_KEY = 'oramachi_stats_v1';
const STATS_VERSION = 1;
function emptyStatsData(){
  return {
    version: STATS_VERSION,
    totalPlays: 0,                 // 累計プレイ回数(結果が確定した回数。成功・諦めの両方を含む)
    totalCorrect: 0,                // 累計正解回数
    currentStreak: 0,               // 現在の連続正解数
    maxStreak: 0,                   // 最高連続正解数
    playedDates: [],                // プレイした日付(YYYY-MM-DD、日本時間)の一覧。重複なし
    answerCounts: { yes: 0, no: 0, maybeYes: 0, maybeNo: 0, unknown: 0 }, // 回答種別の累計回数
    firstGuessCorrectCount: 0,      // 最初の推測で正解した回数
    laterGuessCorrectCount: 0,      // 2回目以降(追加質問後)の推測で正解した回数
    extraQuestionCorrectCount: 0,   // 追加質問を経て正解した回数(laterGuessCorrectCountとほぼ同義だが明示的に持つ)
    maxQuestionReachedCount: 0,     // 合計質問数が30問に到達した回数
    misguessedCityCounts: {},       // 自治体ID -> このゲームで過去に誤推測(「ちがう」)された回数
    unlockedAchievements: {},       // 称号ID -> { unlockedAt: ISO日時 }
    achievementOrder: [],           // 称号を獲得した順番(称号IDの配列)
    lastResult: null,               // 直近の正解: { city, pref, at }
    recentRegions: [],              // 直近に正解した都道府県名(隣接判定の隠し称号用。最大3件保持)
    // 【今回追加】称号拡充のための追加フィールド。既存フィールドの意味・型は一切変えていない。
    shareCount: 0,                  // シェア操作(画像・X文章)を実際に行った回数
    mapViewCount: 0,                // 結果画面の地図を表示した回数
    statsPageViewedAt: null,        // 統計ページを初めて見たISO日時(null=未閲覧)
    personalBestUpdateCount: 0,     // 自己最短記録を更新した回数(初回登録は含まない)
  };
}
function loadStats(){
  try{
    const raw = localStorage.getItem(STATS_STORAGE_KEY);
    if(!raw) return emptyStatsData();
    const parsed = JSON.parse(raw);
    if(!parsed || typeof parsed !== 'object' || parsed.version !== STATS_VERSION){
      console.warn('おらマチ: プレイ統計データの形式が不正なため、初期化します');
      const empty = emptyStatsData();
      saveStats(empty);
      return empty;
    }
    // 古いバージョンや部分的なデータでも安全に動くよう、既定値とマージする
    const merged = { ...emptyStatsData(), ...parsed };
    merged.answerCounts = { ...emptyStatsData().answerCounts, ...(parsed.answerCounts || {}) };
    // 同名自治体の表示名変更にあわせて、誤答回数の記録のキーも移し替える
    if(merged.misguessedCityCounts && typeof merged.misguessedCityCounts === 'object'){
      if(migrateCityIdKeys(merged.misguessedCityCounts, (a, b) => (Number(a) || 0) + (Number(b) || 0))){
        try{ saveStats(merged); }catch(e){ /* 保存に失敗してもゲームは続行する */ }
      }
    }
    if(!Array.isArray(merged.playedDates)) merged.playedDates = [];
    if(!Array.isArray(merged.achievementOrder)) merged.achievementOrder = [];
    if(!Array.isArray(merged.recentRegions)) merged.recentRegions = [];
    if(typeof merged.unlockedAchievements !== 'object' || merged.unlockedAchievements === null) merged.unlockedAchievements = {};
    if(typeof merged.misguessedCityCounts !== 'object' || merged.misguessedCityCounts === null) merged.misguessedCityCounts = {};
    // 数値フィールドが壊れている(NaN・文字列など)場合は0にフォールバックし、正解回数などがNaNにならないようにする
    ['totalPlays','totalCorrect','currentStreak','maxStreak','firstGuessCorrectCount',
     'laterGuessCorrectCount','extraQuestionCorrectCount','maxQuestionReachedCount',
     'shareCount','mapViewCount','personalBestUpdateCount'].forEach(k => {
      if(!Number.isFinite(merged[k])) merged[k] = 0;
    });
    ['yes','no','maybeYes','maybeNo','unknown'].forEach(k => {
      if(!Number.isFinite(merged.answerCounts[k])) merged.answerCounts[k] = 0;
    });
    return merged;
  }catch(e){
    console.warn('おらマチ: プレイ統計データの読み込みに失敗したため初期化します(破損データの可能性)', e);
    const empty = emptyStatsData();
    try{ saveStats(empty); }catch(e2){ /* 保存も失敗する場合は諦める(ゲーム自体は継続) */ }
    return empty;
  }
}
function saveStats(data){
  try{
    localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(data));
    return true;
  }catch(e){
    console.warn('おらマチ: プレイ統計の保存に失敗しました(localStorageの容量不足などの可能性)', e);
    return false;
  }
}
// 日本時間(JST, UTC+9固定)でのYYYY-MM-DDを返す。
// ==================== 今日の挑戦者数 ====================
// 【設計】個人を特定できる情報は一切保存・送信しない。
// - 端末ごとにランダムな匿名ID(内容に意味を持たない文字列)をlocalStorageへ1つだけ保存する。
// - 同じ日(日本時間)に同じ端末から重ねて送らないよう、「最後に送った日付」も記録しておく。
//   これにより、ページを何度再読み込みしても「今日の挑戦者」としては1人分にしかならない。
// - ユニーク集計(重複除去)はサーバー側(Google Apps Script)で行う。クライアント側は
//   「今日まだ送っていなければ、匿名IDを1回だけ送る」ところまでしか行わない。
// - 送信は、既存の「匿名のプレイ結果を送信する」設定がOFFなら行わない(プレイ結果送信と同じ扱い)。
const VISITOR_ID_KEY = 'oramachi_visitor_id';
const VISITOR_LAST_SENT_KEY = 'oramachi_visitor_last_sent_date';

function getOrCreateVisitorId(){
  try{
    let id = localStorage.getItem(VISITOR_ID_KEY);
    if(!id){
      // crypto.randomUUIDが使えない環境向けの簡易フォールバック(個人情報は含まない乱数)
      id = (typeof crypto !== 'undefined' && crypto.randomUUID)
        ? crypto.randomUUID()
        : 'v-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
      localStorage.setItem(VISITOR_ID_KEY, id);
    }
    return id;
  }catch(e){
    return null; // localStorageが使えない環境では計測しない
  }
}

// 今日まだ送っていなければ、匿名IDを1回だけGASへ送る。
// (fetchLiveStatsと同じCORRECTIONS_ENDPOINT_URLへ type:'visitor' として送る想定。
//  サーバー側での日付ごとのユニーク集計方法は apps-script-corrections.gs 側の対応が必要)
function reportTodayVisitorOnce(){
  if(!CORRECTIONS_ENDPOINT_URL) return;
  if(!isAnonymousReportingEnabled()) return;
  const today = todayJstDateString();
  try{
    if(localStorage.getItem(VISITOR_LAST_SENT_KEY) === today) return; // 今日はもう送信済み
    const visitorId = getOrCreateVisitorId();
    if(!visitorId) return;
    fetch(CORRECTIONS_ENDPOINT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ type: 'visitor', visitorId, dateJst: today, timestamp: new Date().toISOString() })
    }).catch(err => {
      console.warn('おらマチ: 挑戦者数の送信に失敗しました(オフライン等の可能性)', err);
    });
    localStorage.setItem(VISITOR_LAST_SENT_KEY, today);
  }catch(e){
    console.warn('おらマチ: 挑戦者数の送信処理でエラー', e);
  }
}

function todayJstDateString(){
  const now = new Date();
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 10);
}
// 日本時間での「現在の時(0〜23)」。朝/深夜プレイの称号判定に使う。
function currentJstHour(){
  const now = new Date();
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return jst.getUTCHours();
}

// 正解が確定した瞬間だけ呼ばれる。制覇帳へ記録し、結果画面用のメッセージ種別を返す。
// ==================== 制覇帳データの書き出し・読み込み ====================
const SAVE_EXPORT_APP_ID = 'oramachi';
const SAVE_EXPORT_VERSION = 1; // 対応バージョン(将来データ形式を変える場合はここを上げ、読み込み側で分岐する)

function todayDateStringForFilename(){
  return todayJstDateString(); // 既存の日本時間の日付文字列(YYYY-MM-DD)をそのまま使う
}

// 現在の制覇帳データをJSONファイルとしてダウンロードする。
// アクセス解析用ID等は一切含めず、制覇帳の復元に必要なデータだけを書き出す。
function exportSaveData(){
  const statusEl = document.getElementById('saveIoStatus');
  const setStatus = (msg) => { if(statusEl) statusEl.textContent = msg; };
  try{
    const conquest = loadConquest();
    const payload = {
      app: SAVE_EXPORT_APP_ID,
      version: SAVE_EXPORT_VERSION,
      exportedAt: new Date().toISOString(),
      data: {
        conquest: { version: conquest.version, entries: conquest.entries }
      }
    };
    const json = JSON.stringify(payload, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `oramachi-save-${todayDateStringForFilename()}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    setStatus('セーブデータを書き出しました。');
    trackGaEvent('save_data_export', {});
  }catch(e){
    console.warn('おらマチ: セーブデータの書き出しに失敗しました', e);
    setStatus('書き出しに失敗しました。もう一度お試しください。');
  }
}

// ファイル選択ダイアログを開く。<input type="file">を動的に作って使い捨てる。
function openImportSaveFileDialog(){
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'application/json,.json';
  input.style.display = 'none';
  input.addEventListener('change', () => {
    const file = input.files && input.files[0];
    if(file) readImportSaveFile(file);
    input.remove();
  });
  document.body.appendChild(input);
  input.click();
}

function readImportSaveFile(file){
  const statusEl = document.getElementById('saveIoStatus');
  const setStatus = (msg) => { if(statusEl) statusEl.textContent = msg; };
  setStatus('ファイルを読み込んでいます…');
  const reader = new FileReader();
  reader.onload = () => {
    let parsed;
    try{
      parsed = JSON.parse(reader.result);
    }catch(e){
      setStatus('ファイルの形式が正しくありません(JSONとして読み込めませんでした)。');
      return;
    }
    const validation = validateImportedSaveData(parsed);
    if(!validation.ok){
      setStatus('読み込めませんでした: ' + validation.reason);
      return;
    }
    renderImportModeChoiceModal(validation.conquest);
  };
  reader.onerror = () => {
    setStatus('ファイルの読み込みに失敗しました。');
  };
  reader.readAsText(file);
}

// 読み込んだJSONの内容を検証する。問題があれば ok:false と理由を返すだけで、
// 現在のデータには一切触れない(呼び出し側もこの時点ではまだ何も変更しない)。
function validateImportedSaveData(parsed){
  if(!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return { ok: false, reason: 'データの形式が正しくありません。' };
  if(parsed.app !== SAVE_EXPORT_APP_ID) return { ok: false, reason: 'おらマチのセーブデータではないようです。' };
  if(!Number.isInteger(parsed.version) || parsed.version < 1 || parsed.version > SAVE_EXPORT_VERSION){
    return { ok: false, reason: '対応していないバージョンのデータです。' };
  }
  if(!parsed.data || typeof parsed.data !== 'object' || Array.isArray(parsed.data)){
    return { ok: false, reason: '必要なデータが見つかりません。' };
  }
  // 表示用のname/prefはファイルの値を信用せず、認識済み自治体IDから再生成する。
  return normalizeConquestData(parsed.data.conquest, true);
}

// 「統合する」か「上書きする」かを選ぶ確認画面。初期選択は安全な「統合する」にする。
function renderImportModeChoiceModal(importedConquest, focusReturnEl){
  const root = document.getElementById('modalRoot');
  if(!root) return;
  const lastFocusedEl = focusReturnEl || document.activeElement;
  const importedCount = Object.keys(importedConquest.entries).length;
  root.innerHTML = `
    <div class="modal-overlay" id="importModalOverlay">
      <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="importModalTitle">
        <div class="modal-header">
          <h2 id="importModalTitle">セーブデータの読み込み</h2>
          <button type="button" class="modal-close-btn" id="importModalCloseBtn" aria-label="閉じる">×</button>
        </div>
        <div class="modal-body">
          <p class="modal-question-text">${importedCount}件の自治体データが見つかりました。取り込み方法を選んでください。</p>
          <div class="report-reason-list">
            <label class="report-reason-item">
              <input type="radio" name="importMode" value="merge" checked>
              <span>現在のデータと統合する(推奨)</span>
            </label>
            <label class="report-reason-item">
              <input type="radio" name="importMode" value="overwrite">
              <span>現在のデータを上書きする</span>
            </label>
          </div>
          <div class="report-status" id="importStatus" aria-live="polite"></div>
        </div>
        <div class="modal-footer">
          <button type="button" class="modal-btn-secondary" id="importModalCancelBtn">キャンセル</button>
          <button type="button" class="modal-btn-primary" id="importModalConfirmBtn">読み込む</button>
        </div>
      </div>
    </div>`;

  const closeBtn = document.getElementById('importModalCloseBtn');
  const cancelBtn = document.getElementById('importModalCancelBtn');
  const confirmBtn = document.getElementById('importModalConfirmBtn');
  const overlay = document.getElementById('importModalOverlay');
  let keyHandler = null;
  const close = () => {
    unregisterActiveModalClose(close);
    root.innerHTML = '';
    if(keyHandler) document.removeEventListener('keydown', keyHandler);
    const fallback = document.getElementById('importSaveDataBtn');
    const focusTarget = lastFocusedEl && lastFocusedEl.isConnected && lastFocusedEl !== document.body
      ? lastFocusedEl
      : fallback;
    if(focusTarget && typeof focusTarget.focus === 'function') focusTarget.focus();
  };
  closeBtn.addEventListener('click', close);
  cancelBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if(e.target === overlay) close(); });
  keyHandler = (e) => {
    if(e.key === 'Escape'){ close(); return; }
    if(e.key === 'Tab') trapFocusInModal(e, overlay.querySelector('.modal-box'));
  };
  document.addEventListener('keydown', keyHandler);
  confirmBtn.addEventListener('click', () => {
    const selected = document.querySelector('input[name="importMode"]:checked');
    const mode = selected ? selected.value : 'merge';
    if(mode === 'overwrite'){
      close();
      renderOverwriteConfirmModal(importedConquest, lastFocusedEl);
    } else {
      close();
      applyImportedConquest(importedConquest, 'merge');
    }
  });
  registerActiveModalClose(close);
  closeBtn.focus();
}

// 上書き前の最終確認(依頼要件: 上書きの場合は確認画面を出す)。
function renderOverwriteConfirmModal(importedConquest, focusReturnEl){
  const root = document.getElementById('modalRoot');
  if(!root) return;
  root.innerHTML = `
    <div class="modal-overlay" id="overwriteConfirmOverlay">
      <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="overwriteConfirmTitle">
        <div class="modal-header">
          <h2 id="overwriteConfirmTitle">本当に上書きしますか？</h2>
        </div>
        <div class="modal-body">
          <p class="modal-question-text">現在の全国制覇帳の記録は消え、読み込んだデータだけが残ります。この操作は取り消せません。</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="modal-btn-secondary" id="overwriteCancelBtn">やめる</button>
          <button type="button" class="modal-btn-primary" id="overwriteConfirmBtn">上書きする</button>
        </div>
      </div>
    </div>`;
  const cancelBtn = document.getElementById('overwriteCancelBtn');
  const confirmBtn = document.getElementById('overwriteConfirmBtn');
  const overlay = document.getElementById('overwriteConfirmOverlay');
  let keyHandler = null;
  const close = () => {
    unregisterActiveModalClose(returnToChoice);
    root.innerHTML = '';
    if(keyHandler) document.removeEventListener('keydown', keyHandler);
  };
  const returnToChoice = () => {
    close();
    renderImportModeChoiceModal(importedConquest, focusReturnEl);
  };
  cancelBtn.addEventListener('click', returnToChoice);
  overlay.addEventListener('click', (e) => { if(e.target === overlay) returnToChoice(); });
  confirmBtn.addEventListener('click', () => {
    close();
    applyImportedConquest(importedConquest, 'overwrite');
  });
  keyHandler = (e) => {
    if(e.key === 'Escape'){ returnToChoice(); return; }
    if(e.key === 'Tab') trapFocusInModal(e, overlay.querySelector('.modal-box'));
  };
  document.addEventListener('keydown', keyHandler);
  registerActiveModalClose(returnToChoice);
  cancelBtn.focus();
}

// 統合/上書きを実際に適用する。失敗時は現在のデータを一切変更しないよう、
// 変更前のデータをいったん退避してから書き込み、例外が起きたら復元する。
function applyImportedConquest(importedConquest, mode){
  const before = loadConquest(); // 失敗時に戻すための退避データ
  try{
    let result;
    let mergedCount = 0;
    let newCount = 0;
    if(mode === 'overwrite'){
      result = { version: CONQUEST_VERSION, entries: { ...importedConquest.entries } };
      newCount = Object.keys(importedConquest.entries).length;
    } else {
      // 統合: 同じ自治体は「回数は合算・最短質問数は小さい方・日時は古い方/新しい方・modesは和集合」で統合する。
      const merged = { ...before.entries };
      Object.keys(importedConquest.entries).forEach(id => {
        const incoming = importedConquest.entries[id];
        const existing = merged[id];
        if(!existing){
          merged[id] = { ...incoming };
          newCount++;
        } else {
          merged[id] = {
            id, name: incoming.name || existing.name, pref: incoming.pref || existing.pref,
            firstAt: (existing.firstAt && incoming.firstAt) ? (existing.firstAt < incoming.firstAt ? existing.firstAt : incoming.firstAt) : (existing.firstAt || incoming.firstAt),
            lastAt: (existing.lastAt && incoming.lastAt) ? (existing.lastAt > incoming.lastAt ? existing.lastAt : incoming.lastAt) : (existing.lastAt || incoming.lastAt),
            count: (Number.isFinite(existing.count) ? existing.count : 1) + (Number.isFinite(incoming.count) ? incoming.count : 1),
            minQuestions: Math.min(
              Number.isFinite(existing.minQuestions) ? existing.minQuestions : Infinity,
              Number.isFinite(incoming.minQuestions) ? incoming.minQuestions : Infinity
            ),
            modes: Array.from(new Set([...(existing.modes || []), ...(incoming.modes || [])])),
          };
          mergedCount++;
        }
      });
      result = { version: CONQUEST_VERSION, entries: merged };
    }
    saveConquest(result);
    renderImportResultModal({ mode, newCount, mergedCount, total: Object.keys(result.entries).length });
    trackGaEvent('save_data_import', { mode, new_count: newCount, merged_count: mergedCount });
    // 制覇帳の内容が変わったので、開いていればすぐに反映されるよう画面を再描画する。
    renderConquestLog();
  }catch(e){
    console.warn('おらマチ: セーブデータの読み込み適用に失敗したため、変更前の状態に戻します', e);
    try{ saveConquest(before); }catch(e2){ /* 復元も失敗したら諦める(元データは壊していない) */ }
    renderImportResultModal({ mode, error: true });
  }
}

// 完了時に、読み込んだ件数や統合結果を表示する。
function renderImportResultModal(info){
  const root = document.getElementById('modalRoot');
  if(!root) return;
  const lastFocusedEl = document.activeElement;
  const bodyText = info.error
    ? 'データの読み込みに失敗しました。現在のデータは変更していません。'
    : (info.mode === 'overwrite'
      ? `上書きが完了しました。合計 ${info.total} 件の自治体が登録されています。`
      : `統合が完了しました。新しく ${info.newCount} 件を追加し、${info.mergedCount} 件を更新しました(合計 ${info.total} 件)。`);
  root.innerHTML = `
    <div class="modal-overlay" id="importResultOverlay">
      <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="importResultTitle">
        <div class="modal-header">
          <h2 id="importResultTitle">${info.error ? '読み込みエラー' : '読み込み完了'}</h2>
        </div>
        <div class="modal-body">
          <p class="modal-question-text">${escapeHtml(bodyText)}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="modal-btn-primary" id="importResultCloseBtn">閉じる</button>
        </div>
      </div>
    </div>`;
  const closeBtn = document.getElementById('importResultCloseBtn');
  const overlay = document.getElementById('importResultOverlay');
  let keyHandler = null;
  const close = () => {
    unregisterActiveModalClose(close);
    root.innerHTML = '';
    if(keyHandler) document.removeEventListener('keydown', keyHandler);
    const fallback = document.getElementById('importSaveDataBtn');
    const focusTarget = lastFocusedEl && lastFocusedEl.isConnected && lastFocusedEl !== document.body
      ? lastFocusedEl
      : fallback;
    if(focusTarget && typeof focusTarget.focus === 'function') focusTarget.focus();
  };
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if(e.target === overlay) close(); });
  keyHandler = (e) => {
    if(e.key === 'Escape'){ close(); return; }
    if(e.key === 'Tab') trapFocusInModal(e, overlay.querySelector('.modal-box'));
  };
  document.addEventListener('keydown', keyHandler);
  registerActiveModalClose(close);
  closeBtn.focus();
}

function recordConquest(city, questionCount, mode){
  const data = loadConquest();
  const bucket = data.entries;
  const id = cityId(city);
  const now = new Date().toISOString();
  const existing = bucket[id];

  let status;
  if(!existing){
    bucket[id] = {
      id, name: displayName(city), pref: city.pref,
      firstAt: now, lastAt: now, count: 1,
      minQuestions: questionCount, modes: [mode],
    };
    status = 'new';
  }else{
    existing.lastAt = now;
    // count/minQuestionsが壊れた値(NaN・文字列・0以下など)でも安全にフォールバックする
    const prevCount = Number.isFinite(existing.count) && existing.count > 0 ? existing.count : 1;
    existing.count = prevCount + 1;
    existing.name = displayName(city); // 表示名が変わった場合に追随
    if(!Array.isArray(existing.modes)) existing.modes = [];
    if(!existing.modes.includes(mode)) existing.modes.push(mode);
    const prevBest = Number.isFinite(existing.minQuestions) ? existing.minQuestions : Infinity;
    if(questionCount < prevBest){
      existing.minQuestions = questionCount;
      status = 'newRecord';
    } else {
      existing.minQuestions = prevBest; // 壊れていた場合はここで正常値に修復しておく
      status = 'repeat';
    }
  }
  const saved = saveConquest(data);
  return { status, saved, entry: bucket[id] };
}

// 通常自治体数(=「東京」集計エントリを除いた実際の収録数)。制覇率の分母に使う。
function normalCityCount(){
  return CITIES.filter(c => c.name !== '東京').length;
}

// ==================== プレイ統計の更新 ====================
// ゲームが「正解」または「諦め」で終わった、そのタイミングだけで呼ぶ。
// answerLog(このプレイの回答内訳)から、回答種別ごとの累計を集計して加算する。
function recordGameStats(outcome, guess, totalQuestions){
  const stats = loadStats();
  // 【降参後の再挑戦】既にrenderGiveUp()で「giveup」として基礎カウンタ
  // (totalPlays・回答内訳・プレイ日付・maxQuestionReachedCount)が加算済みの場合、
  // ここでもう一度加算すると二重カウントになってしまう。isReplayedFromGiveupが立っている
  // 間は、この基礎カウンタ部分だけをスキップし、成否に応じた集計(totalCorrect等)だけ行う。
  if(!isReplayedFromGiveup){
    stats.totalPlays += 1;

    // 回答種別の内訳をこのプレイのanswerLogから集計する
    answerLog.forEach(rec => {
      if(rec.val === null){ stats.answerCounts.unknown++; return; }
      const isFull = rec.weight >= 1;
      if(rec.val === true) { isFull ? stats.answerCounts.yes++ : stats.answerCounts.maybeYes++; }
      else { isFull ? stats.answerCounts.no++ : stats.answerCounts.maybeNo++; }
    });

    const dateStr = todayJstDateString();
    if(!stats.playedDates.includes(dateStr)) stats.playedDates.push(dateStr);

    if(totalQuestions >= (MAX_Q + MAX_EXTRA_Q)) stats.maxQuestionReachedCount += 1;
  }

  if(outcome === 'success'){
    stats.totalCorrect += 1;
    stats.currentStreak += 1;
    if(stats.currentStreak > stats.maxStreak) stats.maxStreak = stats.currentStreak;
    if(guessAttempts === 0) stats.firstGuessCorrectCount += 1;
    else { stats.laterGuessCorrectCount += 1; stats.extraQuestionCorrectCount += 1; }
    stats.lastResult = { city: displayName(guess), pref: guess.pref, at: new Date().toISOString() };
    stats.recentRegions.push(guess.pref);
    if(stats.recentRegions.length > 3) stats.recentRegions.shift();
  } else {
    stats.currentStreak = 0;
  }

  saveStats(stats);
  return stats;
}
// 「ちがう」を押された時点で、その自治体の誤推測回数を加算する。
function recordMisguess(city){
  const stats = loadStats();
  const id = cityId(city);
  const prev = Number.isFinite(stats.misguessedCityCounts[id]) ? stats.misguessedCityCounts[id] : 0;
  stats.misguessedCityCounts[id] = prev + 1;
  saveStats(stats);
}

// ==================== 称号(実績)システム ====================
// 都道府県ごとの{total, done}を集計する。称号判定・都道府県カード表示の両方で使う共通ロジック。
function computePrefStats(conqueredIds){
  const normalCities = CITIES.filter(c => c.name !== '東京');
  const prefGroups = {};
  normalCities.forEach(c => {
    const g = (prefGroups[c.pref] = prefGroups[c.pref] || { total: 0, done: 0 });
    g.total++;
    if(conqueredIds.has(cityId(c))) g.done++;
  });
  return prefGroups;
}
function computeRegionStats(conqueredIds){
  const normalCities = CITIES.filter(c => c.name !== '東京');
  const regionGroups = {};
  normalCities.forEach(c => {
    const r = regionOf(c.pref);
    const g = (regionGroups[r] = regionGroups[r] || { total: 0, done: 0 });
    g.total++;
    if(conqueredIds.has(cityId(c))) g.done++;
  });
  return regionGroups;
}

// 称号判定に必要な情報をまとめたコンテキストを作る。gameInfoには「今回のプレイ」の情報を渡す
// (通常のページ表示時など、直近のプレイが無い場面ではgameInfoを省略してよい)。
function buildAchievementContext(gameInfo){
  const stats = loadStats();
  const conquest = loadConquest();
  const conqueredIds = new Set(Object.keys(conquest.entries));
  const normalCities = CITIES.filter(c => c.name !== '東京');
  const normalEntries = Object.values(conquest.entries);
  const distinctCount = normalEntries.length;
  const prefGroups = computePrefStats(conqueredIds);
  const regionGroups = computeRegionStats(conqueredIds);

  // タグ別の集計を1回のループでまとめて計算し、キャッシュしておく。
  // (countByTag/allConqueredByTagが同じタグに対して何度呼ばれても、CITIES全体の再走査を1回に抑える)
  const tagCountCache = {};
  const tagAllCache = {};
  function ensureTagCache(tagKey){
    if(tagCountCache[tagKey] !== undefined) return;
    let doneCount = 0, targetCount = 0;
    normalCities.forEach(c => {
      if(c.tags[tagKey]){
        targetCount++;
        if(conqueredIds.has(cityId(c))) doneCount++;
      }
    });
    tagCountCache[tagKey] = doneCount;
    tagAllCache[tagKey] = targetCount > 0 && doneCount >= targetCount;
  }
  function countByTag(tagKey){
    ensureTagCache(tagKey);
    return tagCountCache[tagKey];
  }
  function allConqueredByTag(tagKey){
    ensureTagCache(tagKey);
    return tagAllCache[tagKey];
  }
  function prefFullyConquered(pref){
    const g = prefGroups[pref];
    return !!(g && g.total > 0 && g.done >= g.total);
  }
  function regionFullyConquered(region){
    const g = regionGroups[region];
    return !!(g && g.total > 0 && g.done >= g.total);
  }
  function allRegionsHaveAtLeastOne(){
    return REGION_ORDER.every(r => regionGroups[r] && regionGroups[r].done > 0);
  }
  function allRegionsFullyConquered(){
    return REGION_ORDER.every(r => regionFullyConquered(r));
  }
  function playedDistinctDays(n){
    return (stats.playedDates || []).length >= n;
  }

  return {
    stats, conquest, conqueredIds, normalCities, normalEntries, distinctCount,
    prefGroups, regionGroups,
    countByTag, allConqueredByTag, prefFullyConquered, regionFullyConquered,
    allRegionsHaveAtLeastOne, allRegionsFullyConquered, playedDistinctDays,
    game: gameInfo || null, // 今回のプレイの情報(正解直後だけ渡される)
  };
}

// 称号の一意ID・表示名・説明・カテゴリ・レア度(1〜5)・隠し称号かどうか・判定関数、を1か所にまとめる。
// カテゴリ: basic(基本) / speed(スピード) / streak(連続正解) / region(地方制覇) /
//          unique(おらマチ独自) / attribute(難易度・属性) / style(回答スタイル) /
//          collection(コレクション) / hidden(隠し称号)
const ACHIEVEMENTS = [
  // ---- 基本・プレイ回数 ----
  { id:'first_play', name:'はじめてのマチあて', description:'初めてゲームを開始する', category:'basic', rarity:1, hidden:false,
    check: ctx => ctx.stats.totalPlays >= 1 },
  { id:'first_correct', name:'おらっちの新入り', description:'初めて正解する', category:'basic', rarity:1, hidden:false,
    check: ctx => ctx.stats.totalCorrect >= 1 },
  { id:'distinct_5', name:'マチあて見習い', description:'異なる5自治体を正解する', category:'basic', rarity:1, hidden:false,
    check: ctx => ctx.distinctCount >= 5 },
  { id:'distinct_10', name:'マチあて探検家', description:'異なる10自治体を正解する', category:'basic', rarity:2, hidden:false,
    check: ctx => ctx.distinctCount >= 10 },
  { id:'distinct_30', name:'まち歩き名人', description:'異なる30自治体を正解する', category:'basic', rarity:2, hidden:false,
    check: ctx => ctx.distinctCount >= 30 },
  { id:'distinct_50', name:'日本マチ通', description:'異なる50自治体を正解する', category:'basic', rarity:3, hidden:false,
    check: ctx => ctx.distinctCount >= 50 },
  { id:'distinct_100', name:'全国マチ博士', description:'異なる100自治体を正解する', category:'basic', rarity:5, hidden:false,
    check: ctx => ctx.distinctCount >= 100 },
  { id:'distinct_300', name:'おらマチ仙人', description:'異なる300自治体を正解する', category:'basic', rarity:4, hidden:false,
    check: ctx => ctx.distinctCount >= 300 },
  { id:'distinct_500', name:'日本全国お見通し', description:'異なる500自治体を正解する', category:'basic', rarity:4, hidden:false,
    check: ctx => ctx.distinctCount >= 500 },
  { id:'distinct_800', name:'千里を見通すたぬき', description:'異なる800自治体を正解する', category:'basic', rarity:5, hidden:false,
    check: ctx => ctx.distinctCount >= 800 },

  // ---- 少ない質問数で正解 ----
  { id:'speed_20', name:'早わかり', description:'20問以内で正解する', category:'speed', rarity:1, hidden:false,
    check: ctx => !!ctx.game && ctx.game.success && ctx.game.totalQuestions <= 20 },
  { id:'speed_15', name:'なかなか鋭い', description:'15問以内で正解する', category:'speed', rarity:2, hidden:false,
    check: ctx => !!ctx.game && ctx.game.success && ctx.game.totalQuestions <= 15 },
  { id:'speed_12', name:'マチ勘さえてる', description:'12問以内で正解する', category:'speed', rarity:3, hidden:false,
    check: ctx => !!ctx.game && ctx.game.success && ctx.game.totalQuestions <= 12 },
  { id:'speed_10', name:'お見通し', description:'10問以内で正解する', category:'speed', rarity:3, hidden:false,
    check: ctx => !!ctx.game && ctx.game.success && ctx.game.totalQuestions <= 10 },
  { id:'speed_8', name:'電光石火のマチあて', description:'8問以内で正解する', category:'speed', rarity:4, hidden:false,
    check: ctx => !!ctx.game && ctx.game.success && ctx.game.totalQuestions <= 8 },
  { id:'speed_5', name:'以心伝心', description:'5問以内で正解する', category:'speed', rarity:5, hidden:false,
    check: ctx => !!ctx.game && ctx.game.success && ctx.game.totalQuestions <= 5 },
  { id:'speed_3', name:'奇跡の地元バレ', description:'3問以内で正解する', category:'speed', rarity:5, hidden:false,
    check: ctx => !!ctx.game && ctx.game.success && ctx.game.totalQuestions <= 3 },

  // ---- 連続正解 ----
  { id:'streak_3', name:'調子が出てきた', description:'3回連続正解する', category:'streak', rarity:1, hidden:false,
    check: ctx => ctx.stats.currentStreak >= 3 },
  { id:'streak_5', name:'マチ勘好調', description:'5回連続正解する', category:'streak', rarity:2, hidden:false,
    check: ctx => ctx.stats.currentStreak >= 5 },
  { id:'streak_10', name:'百発百中への道', description:'10回連続正解する', category:'streak', rarity:3, hidden:false,
    check: ctx => ctx.stats.currentStreak >= 10 },
  { id:'streak_20', name:'外さぬたぬき', description:'20回連続正解する', category:'streak', rarity:4, hidden:false,
    check: ctx => ctx.stats.currentStreak >= 20 },
  { id:'streak_30', name:'神がかったマチ勘', description:'30回連続正解する', category:'streak', rarity:5, hidden:false,
    check: ctx => ctx.stats.currentStreak >= 30 },

  // ---- 都道府県・地方制覇 ----
  { id:'region_hokkaido', name:'北海道の大地を知る者', description:'北海道の現在収録対象をすべて正解する', category:'region', rarity:3, hidden:false,
    check: ctx => ctx.regionFullyConquered('北海道') },
  { id:'region_tohoku', name:'みちのくマチ巡り', description:'東北地方の現在収録対象をすべて正解する', category:'region', rarity:3, hidden:false,
    check: ctx => ctx.regionFullyConquered('東北') },
  { id:'region_kanto', name:'関東マチマスター', description:'関東地方の現在収録対象をすべて正解する', category:'region', rarity:3, hidden:false,
    check: ctx => ctx.regionFullyConquered('関東') },
  { id:'region_chubu', name:'中部のまんなか博士', description:'中部地方の現在収録対象をすべて正解する', category:'region', rarity:3, hidden:false,
    check: ctx => ctx.regionFullyConquered('中部') },
  { id:'region_kinki', name:'近畿マチめぐり', description:'近畿地方の現在収録対象をすべて正解する', category:'region', rarity:3, hidden:false,
    check: ctx => ctx.regionFullyConquered('近畿') },
  { id:'region_chugoku', name:'中国地方通', description:'中国地方の現在収録対象をすべて正解する', category:'region', rarity:3, hidden:false,
    check: ctx => ctx.regionFullyConquered('中国') },
  { id:'region_shikoku', name:'四国八十八マチ気分', description:'四国地方の現在収録対象をすべて正解する', category:'region', rarity:3, hidden:false,
    check: ctx => ctx.regionFullyConquered('四国') },
  { id:'region_kyushu', name:'九州マチ探訪者', description:'九州地方の現在収録対象をすべて正解する', category:'region', rarity:3, hidden:false,
    check: ctx => ctx.regionFullyConquered('九州・沖縄') },
  { id:'region_okinawa', name:'南国マチマスター', description:'沖縄県の現在収録対象をすべて正解する', category:'region', rarity:3, hidden:false,
    check: ctx => ctx.prefFullyConquered('沖縄県') },
  { id:'region_all_touch', name:'列島縦断たぬき', description:'全地方で1自治体以上正解する', category:'region', rarity:2, hidden:false,
    check: ctx => ctx.allRegionsHaveAtLeastOne() },
  { id:'region_all_complete', name:'日本全国マチ巡り', description:'全地方の現在収録対象をすべて正解する', category:'region', rarity:5, hidden:false,
    check: ctx => ctx.allRegionsFullyConquered() },

  // ---- おらマチ独自 ----
  { id:'unique_first_revealed', name:'地元バレしました', description:'初めて正解される', category:'unique', rarity:1, hidden:false,
    check: ctx => ctx.stats.totalCorrect >= 1 },
  { id:'unique_revealed_10q', name:'そこまで分かるの？', description:'10問以内で正解される', category:'unique', rarity:3, hidden:false,
    check: ctx => !!ctx.game && ctx.game.success && ctx.game.totalQuestions <= 10 },
  { id:'unique_first_guess', name:'おらっちにはお見通し', description:'最初の推測で正解する', category:'unique', rarity:2, hidden:false,
    check: ctx => !!ctx.game && ctx.game.success && ctx.game.guessAttempts === 0 },
  { id:'unique_same_2', name:'そのマチ、知ってます', description:'同じ自治体で2回正解する', category:'unique', rarity:1, hidden:false,
    check: ctx => ctx.normalEntries.some(e => e.count >= 2) },
  { id:'unique_same_5', name:'地元より詳しい？', description:'同じ自治体で5回正解する', category:'unique', rarity:2, hidden:false,
    check: ctx => ctx.normalEntries.some(e => e.count >= 5) },
  { id:'unique_same_10', name:'マチへの愛が深すぎる', description:'同じ自治体で10回正解する', category:'unique', rarity:4, hidden:false,
    check: ctx => ctx.normalEntries.some(e => e.count >= 10) },
  { id:'unique_days_7', name:'おらマチ常連', description:'異なる7日間にプレイする', category:'unique', rarity:1, hidden:false,
    check: ctx => ctx.playedDistinctDays(7) },
  { id:'unique_days_30', name:'おらマチ住民', description:'異なる30日間にプレイする', category:'unique', rarity:2, hidden:false,
    check: ctx => ctx.playedDistinctDays(30) },
  { id:'unique_days_100', name:'おらマチ名誉町民', description:'異なる100日間にプレイする', category:'unique', rarity:4, hidden:false,
    check: ctx => ctx.playedDistinctDays(100) },

  // ---- 難易度・自治体属性 ----
  { id:'attr_capital_5', name:'県庁所在地入門', description:'異なる県庁所在地を5自治体正解する', category:'attribute', rarity:1, hidden:false,
    check: ctx => ctx.countByTag('prefectural_capital') >= 5 },
  { id:'attr_capital_all', name:'県庁所在地博士', description:'現在収録されている県庁所在地をすべて正解する', category:'attribute', rarity:4, hidden:false,
    check: ctx => ctx.allConqueredByTag('prefectural_capital') },
  { id:'attr_designated_all', name:'政令市ウォッチャー', description:'現在収録されている政令指定都市をすべて正解する', category:'attribute', rarity:3, hidden:false,
    check: ctx => ctx.allConqueredByTag('designated') },
  { id:'attr_tokyo23_all', name:'東京通', description:'東京23区をすべて正解する', category:'attribute', rarity:3, hidden:false,
    check: ctx => ctx.allConqueredByTag('is_tokyo_ward') },
  { id:'attr_niigata_all', name:'越後のマチ博士', description:'新潟県モードの対象自治体をすべて正解する', category:'attribute', rarity:3, hidden:false,
    check: ctx => ctx.prefFullyConquered('新潟県') },
  { id:'attr_village_10', name:'町村にも詳しい', description:'異なる町または村を10自治体正解する', category:'attribute', rarity:1, hidden:false,
    check: ctx => ctx.countByTag('is_town_village') >= 10 },
  { id:'attr_village_30', name:'小さなマチの理解者', description:'異なる町または村を30自治体正解する', category:'attribute', rarity:2, hidden:false,
    check: ctx => ctx.countByTag('is_town_village') >= 30 },
  { id:'attr_hardname_10', name:'難読地名に強い', description:'難読地名対象の異なる自治体を10自治体正解する', category:'attribute', rarity:2, hidden:false,
    check: ctx => ctx.countByTag('hard_to_read_name') >= 10 },
  { id:'attr_island_10', name:'離島マチ巡り', description:'島または離島にある異なる自治体を10自治体正解する', category:'attribute', rarity:2, hidden:false,
    check: ctx => ctx.countByTag('remote_island') >= 10 },
  { id:'attr_inland_30', name:'山あいのマチ通', description:'海に面していない異なる自治体を30自治体正解する', category:'attribute', rarity:2, hidden:false,
    check: ctx => ctx.normalCities.filter(c => !c.tags.coastal && ctx.conqueredIds.has(cityId(c))).length >= 30 },
  { id:'attr_coastal_30', name:'海辺のマチ通', description:'海に面している異なる自治体を30自治体正解する', category:'attribute', rarity:2, hidden:false,
    check: ctx => ctx.countByTag('coastal') >= 30 },

  // ---- 回答スタイル ----
  { id:'style_no_unknown', name:'即断即決', description:'正解した1プレイで「わからない」を一度も使わない', category:'style', rarity:1, hidden:false,
    check: ctx => !!ctx.game && ctx.game.success && ctx.game.answerLogSnapshot.length > 0 && ctx.game.answerLogSnapshot.every(r => r.val !== null) },
  { id:'style_no_maybe', name:'はっきり答える人', description:'正解した1プレイで「たぶんそう」「たぶん違う」を一度も使わない', category:'style', rarity:1, hidden:false,
    check: ctx => !!ctx.game && ctx.game.success && ctx.game.answerLogSnapshot.length > 0 && ctx.game.answerLogSnapshot.every(r => r.val === null || r.weight >= 1) },
  { id:'style_unknown_10', name:'正直者', description:'累計で「わからない」を10回使う', category:'style', rarity:1, hidden:false,
    check: ctx => ctx.stats.answerCounts.unknown >= 10 },
  { id:'style_maybe_20', name:'慎重なたぬき', description:'累計で「たぶんそう」または「たぶん違う」を20回使う', category:'style', rarity:1, hidden:false,
    check: ctx => (ctx.stats.answerCounts.maybeYes + ctx.stats.answerCounts.maybeNo) >= 20 },
  { id:'style_clear_10', name:'迷いなき旅人', description:'10回連続で「はい」「いいえ」だけを使って正解する', category:'style', rarity:3, hidden:false,
    check: ctx => !!ctx.game && ctx.game.success && ctx.game.answerLogSnapshot.length >= 10 &&
      ctx.game.answerLogSnapshot.slice(0, 10).every(r => r.val !== null && r.weight >= 1) },
  { id:'style_fast_median', name:'直感派', description:'8問以上回答した正解プレイで、1問あたりの回答時間の中央値が2秒以内', category:'style', rarity:2, hidden:false,
    check: ctx => {
      if(!ctx.game || !ctx.game.success) return false;
      const times = ctx.game.answerLogSnapshot.map(r => r.responseMs).filter(t => t != null).sort((a,b)=>a-b);
      if(times.length < 8) return false;
      const mid = times[Math.floor(times.length/2)];
      return mid <= 2000;
    } },
  { id:'style_slow_average', name:'じっくり派', description:'8問以上回答した正解プレイで、1問あたりの回答時間の平均が8秒以上', category:'style', rarity:2, hidden:false,
    check: ctx => {
      if(!ctx.game || !ctx.game.success) return false;
      const times = ctx.game.answerLogSnapshot.map(r => r.responseMs).filter(t => t != null);
      if(times.length < 8) return false;
      const avg = times.reduce((a,b)=>a+b,0) / times.length;
      return avg >= 8000;
    } },

  // ---- コレクション ----
  { id:'collection_1', name:'マチ図鑑の1ページ目', description:'全国制覇帳へ初めて自治体が登録される', category:'collection', rarity:1, hidden:false,
    check: ctx => ctx.distinctCount >= 1 },
  { id:'collection_25', name:'マチ図鑑収集中', description:'異なる25自治体が登録される', category:'collection', rarity:2, hidden:false,
    check: ctx => ctx.distinctCount >= 25 },
  { id:'collection_100', name:'マチ図鑑がにぎやか', description:'異なる100自治体が登録される', category:'collection', rarity:3, hidden:false,
    check: ctx => ctx.distinctCount >= 100 },
  { id:'collection_300', name:'列島コレクター', description:'異なる300自治体が登録される', category:'collection', rarity:4, hidden:false,
    check: ctx => ctx.distinctCount >= 300 },
  { id:'collection_90pct', name:'マチ図鑑完成間近', description:'現在収録されている自治体の90％以上を登録する', category:'collection', rarity:4, hidden:false,
    check: ctx => normalCityCount() > 0 && (ctx.distinctCount / normalCityCount()) >= 0.9 },
  { id:'collection_complete', name:'日本マチ図鑑完成', description:'現在収録されている自治体をすべて登録する', category:'collection', rarity:5, hidden:false,
    check: ctx => normalCityCount() > 0 && ctx.distinctCount >= normalCityCount() },

  // ---- ネタ・隠し称号 ----
  { id:'hidden_unknown_streak5', name:'それはどこだっけ？', description:'同じプレイで「わからない」を5問連続で選ぶ', category:'hidden', rarity:1, hidden:true,
    check: ctx => !!ctx.game && hasConsecutive(ctx.game.answerLogSnapshot, r => r.val === null, 5) },
  { id:'hidden_maybe_streak5', name:'たぶん、たぶんです', description:'同じプレイで「たぶんそう」「たぶん違う」のいずれかを5問連続で選ぶ', category:'hidden', rarity:1, hidden:true,
    check: ctx => !!ctx.game && hasConsecutive(ctx.game.answerLogSnapshot, r => r.val !== null && r.weight < 1, 5) },
  { id:'hidden_sea_and_mountain', name:'海なの？山なの？', description:'同じプレイで、海・沿岸カテゴリと山・山間カテゴリの質問の両方に「はい」または「たぶんそう」と答えて正解する', category:'hidden', rarity:2, hidden:true,
    check: ctx => {
      if(!ctx.game || !ctx.game.success) return false;
      const seaKeys = ['coastal','nihonkai','taiheiyo','setonaikai','tokyo_bay'];
      const mountainKeys = ['basin','famous_mountain','active_volcano'];
      const yesLike = r => r.val === true;
      const hasSea = ctx.game.answerLogSnapshot.some(r => seaKeys.includes(r.key) && yesLike(r));
      const hasMountain = ctx.game.answerLogSnapshot.some(r => mountainKeys.includes(r.key) && yesLike(r));
      return hasSea && hasMountain;
    } },
  { id:'hidden_border_hopping', name:'県境をさまよう者', description:'直近3回の正解都道府県がすべて異なり、1県目と2県目、2県目と3県目がそれぞれ隣接している', category:'hidden', rarity:2, hidden:true,
    check: ctx => {
      const r = ctx.stats.recentRegions;
      if(!r || r.length < 3) return false;
      const [a,b,c] = r;
      if(a === b || b === c || a === c) return false;
      return isPrefAdjacent(a,b) && isPrefAdjacent(b,c);
    } },
  { id:'hidden_lost_local', name:'地元なのに迷子', description:'過去にゲームが誤推測したことが2回以上ある自治体を、後のプレイで正解する', category:'hidden', rarity:2, hidden:true,
    check: ctx => !!ctx.game && ctx.game.success && (ctx.game.misguessedBeforeCount || 0) >= 2 },
  { id:'hidden_max30', name:'おらっちも分かりません', description:'質問の上限まで到達する', category:'hidden', rarity:1, hidden:true,
    check: ctx => !!ctx.game && ctx.game.totalQuestions >= (MAX_Q + MAX_EXTRA_Q) },
  { id:'hidden_extra_win', name:'もう一問いかせて！', description:'追加質問へ進んだ後に正解する', category:'hidden', rarity:2, hidden:true,
    check: ctx => !!ctx.game && ctx.game.success && ctx.game.guessAttempts >= 1 },
  { id:'hidden_last_question', name:'大逆転の地元バレ', description:'最後の質問で正解する', category:'hidden', rarity:4, hidden:true,
    check: ctx => !!ctx.game && ctx.game.success && ctx.game.totalQuestions === (MAX_Q + MAX_EXTRA_Q) },
  { id:'hidden_second_guess', name:'たぬきに化かされた', description:'最初の推測は不正解で、次の推測で正解する', category:'hidden', rarity:2, hidden:true,
    check: ctx => !!ctx.game && ctx.game.success && ctx.game.guessAttempts === 1 },
  { id:'hidden_revenge', name:'今度こそ当てるべ', description:'過去にゲームが誤推測したことがある自治体を、後のプレイで正解する', category:'hidden', rarity:1, hidden:true,
    check: ctx => !!ctx.game && ctx.game.success && (ctx.game.misguessedBeforeCount || 0) >= 1 },

  // ==================== 今回追加した称号 ====================
  // 【プレイ回数系】既存のdistinct系(異なる自治体を何件正解したか)とは別に、
  // 累計プレイ回数(成功・失敗を問わない=totalPlays)を基準にした称号。
  { id:'plays_10', name:'地元推理見習い', description:'累計10回プレイする', category:'basic', rarity:1, hidden:false,
    check: ctx => ctx.stats.totalPlays >= 10 },
  { id:'plays_50', name:'地元推理名人', description:'累計50回プレイする', category:'basic', rarity:2, hidden:false,
    check: ctx => ctx.stats.totalPlays >= 50 },
  { id:'plays_100', name:'百戦錬磨のたぬき', description:'累計100回プレイする', category:'basic', rarity:3, hidden:false,
    check: ctx => ctx.stats.totalPlays >= 100 },
  { id:'plays_1000', name:'千本ノック', description:'累計1000回プレイする', category:'basic', rarity:5, hidden:false,
    check: ctx => ctx.stats.totalPlays >= 1000 },

  // 【制覇数系】全国の半分を制覇する節目。
  { id:'collection_half', name:'全国折り返し地点', description:'現在の対象自治体の50%を正解する', category:'collection', rarity:4, hidden:false,
    check: ctx => ctx.normalCities.length > 0 && ctx.distinctCount >= Math.ceil(ctx.normalCities.length * 0.5) },

  // 【質問数系】自己最短記録を更新したときに解除される(既に解除済みの称号は再判定されないため、
  // 実質「初めて自己記録を更新したとき」に1回だけ解除される)。
  { id:'record_breaker', name:'記録更新の達人', description:'自己最短記録を更新する', category:'speed', rarity:2, hidden:false,
    check: ctx => !!ctx.game && ctx.game.success && !!ctx.game.isNewRecord },

  // 【連続正解系】既存の3・5・10・20・30に加えて25・50を追加。
  { id:'streak_25', name:'連勝街道まっしぐら', description:'25回連続正解する', category:'streak', rarity:4, hidden:false,
    check: ctx => ctx.stats.currentStreak >= 25 },
  { id:'streak_50', name:'伝説のマチ勘', description:'50回連続正解する', category:'streak', rarity:5, hidden:false,
    check: ctx => ctx.stats.currentStreak >= 50 },

  // 【回答スタイル系】「わからない」「たぶんそう」「たぶん違う」を1問も使わず、
  // すべて「はい」「いいえ」で正解する(既存の即断即決＋はっきり答える人を、1プレイで同時に満たす版)。
  { id:'style_no_miss', name:'ノーミス推理', description:'正解した1プレイで「わからない」「たぶんそう」「たぶん違う」を一度も使わない', category:'style', rarity:2, hidden:false,
    check: ctx => {
      if(!ctx.game || !ctx.game.success) return false;
      const log = ctx.game.answerLogSnapshot || [];
      return log.length > 0 && log.every(r => r.val !== null && r.weight >= 1);
    } },

  // 【特殊称号】時間帯・シェア・地図・統計ページ
  { id:'time_morning', name:'朝のおらマチ', description:'朝5時〜9時にプレイする', category:'unique', rarity:1, hidden:false,
    check: () => { const h = currentJstHour(); return h >= 5 && h < 9; } },
  { id:'time_midnight', name:'夜ふかし推理', description:'深夜0時〜4時にプレイする', category:'unique', rarity:1, hidden:false,
    check: () => { const h = currentJstHour(); return h >= 0 && h < 4; } },
  { id:'share_first', name:'シェアありがとう', description:'結果を初めてシェアする', category:'unique', rarity:1, hidden:false,
    check: ctx => (ctx.stats.shareCount || 0) >= 1 },
  { id:'share_many', name:'推理を広めし者', description:'結果を10回シェアする', category:'unique', rarity:3, hidden:false,
    check: ctx => (ctx.stats.shareCount || 0) >= 10 },
  { id:'map_lover', name:'地図好き', description:'結果画面の地図を10回表示する', category:'unique', rarity:1, hidden:false,
    check: ctx => (ctx.stats.mapViewCount || 0) >= 10 },
  { id:'data_lover', name:'データ好き', description:'統計ページを初めて見る', category:'unique', rarity:1, hidden:false,
    check: ctx => !!ctx.stats.statsPageViewedAt },
];
// 配列内で、条件関数fnを満たす要素がn回連続する箇所があるかを調べる(隠し称号の判定補助)。
function hasConsecutive(arr, fn, n){
  let run = 0;
  for(const item of arr){
    run = fn(item) ? run + 1 : 0;
    if(run >= n) return true;
  }
  return false;
}

// ゲーム終了時に呼ぶ。まだ解除されていない称号のうち、条件を満たしたものだけを解除し、
// 新しく解除された称号の配列を返す(結果画面での演出表示に使う)。
// gameInfoには、今回のプレイに関する情報(正解したか・質問数など)を渡す。
function checkAchievements(gameInfo){
  const ctx = buildAchievementContext(gameInfo);
  const stats = ctx.stats;
  const newlyUnlocked = [];
  const nowIso = new Date().toISOString();
  ACHIEVEMENTS.forEach(def => {
    if(stats.unlockedAchievements[def.id]) return; // 既に解除済みなら再判定しない
    let ok = false;
    try{ ok = !!def.check(ctx); }catch(e){ console.warn('おらマチ: 称号判定でエラー', def.id, e); ok = false; }
    if(ok){
      stats.unlockedAchievements[def.id] = { unlockedAt: nowIso };
      stats.achievementOrder.push(def.id);
      newlyUnlocked.push(def);
    }
  });
  if(newlyUnlocked.length > 0) saveStats(stats);
  return newlyUnlocked;
}

// 称号獲得演出。複数まとめて獲得したときも1画面に収める。
// 以前は1件ずつ「次の称号へ」を押させていたため、初回プレイで9個獲得すると
// 9回ボタンを押さないと結果画面を操作できなかった。
// いまは「最もレアな1件を大きく + 残りを一覧」で、押す回数はゼロ。
// 称号一覧ページと獲得記録(stats)の仕組みはそのまま。
function renderAchievementToastCard(list){
  const achievements = list || (currentResult && currentResult.newAchievements) || [];
  if(achievements.length === 0) return '';

  // レア度が高い順に並べ替える(同じレア度なら獲得順のまま)
  const sorted = achievements.slice().sort((a, b) => (b.rarity || 0) - (a.rarity || 0));
  const top = sorted[0];
  const rest = sorted.slice(1);
  const total = achievements.length;
  const isTopRarity = (top.rarity || 0) >= 5; // 最高レアは少し特別感を出す
  const stars = a => '★'.repeat(a.rarity) + '☆'.repeat(5 - a.rarity);

  // 残りが多いと結果画面が長くなるので、4件以上は最初たたんでおく
  const COLLAPSE_FROM = 4;
  const collapsed = rest.length >= COLLAPSE_FROM;
  const restHtml = rest.length === 0 ? '' : `
      <details class="achievement-toast-more"${collapsed ? '' : ' open'}>
        <summary>ほかに獲得した称号 ${rest.length}件${collapsed ? '(タップで開く)' : ''}</summary>
        <ul class="achievement-toast-list">
          ${rest.map(a => `
            <li>
              <span class="achievement-toast-list-stars">${stars(a)}</span>
              <span class="achievement-toast-list-name">${a.name}</span>
              <span class="achievement-toast-list-desc">${a.description}</span>
            </li>`).join('')}
        </ul>
      </details>`;

  return `
    <div class="achievement-toast${isTopRarity ? ' achievement-toast-top' : ''}" id="achievementToast">
      <div class="achievement-toast-title">${total > 1 ? `${total}個の称号を獲得！` : '称号を獲得しました！'}</div>
      <div class="achievement-toast-card">
        <div class="achievement-toast-stars">${stars(top)}</div>
        <div class="achievement-toast-name">${top.name}</div>
        <div class="achievement-toast-desc">${top.description}</div>
      </div>
      ${restHtml}
      <div class="achievement-toast-actions">
        <button class="link-btn" onclick="renderAchievementsPage()">称号一覧を見る</button>
        <button class="link-btn-subtle" onclick="closeAchievementToast()">閉じる</button>
      </div>
    </div>`;
}
function closeAchievementToast(){
  const container = document.getElementById('achievementToastContainer');
  if(container) container.innerHTML = '';
}

function sortedPool(){
  return scorePool
    .filter(e => !excludedNames.has(e.city.name))
    .sort((a, b) => b.score - a.score);
}

// スコアの加減点は「候補から外した分」にも同じように行う。
// こうしておくと、あとで復活させたときに、外した時点で時間が止まった古いスコアではなく、
// 最後まで正しく計算されたスコアで他の候補と比べられる。
function allScoreEntries(){
  return prunedOutPool.length ? scorePool.concat(prunedOutPool) : scorePool;
}

// 候補を絞り込む共通処理。捨てずに prunedOutPool へ避ける。
// kept が空になる場合は何もしない(安全装置)。
function applyPrune(kept){
  if(kept.length === 0 || kept.length === scorePool.length) return;
  const keptSet = new Set(kept);
  scorePool.forEach(e => { if(!keptSet.has(e)) prunedOutPool.push(e); });
  scorePool = kept;
}

// 【1回目の推測が外れたときの救済】
// 1回目が外れたということは、ここまでの絞り込みのどこかが間違っている可能性が高い。
// (「関東地方?」を押し間違えた、うろ覚えで「新幹線の駅がある?」に答えた、など)
// 即時除外は取り返しがつかないため、消してしまった正解は追加質問を何問足しても
// 絶対に当たらない。実測でも、追加質問へ進んだ26件のうち14件は正解が既に消えており、
// その14件の的中率は0%だった(正解が生きている12件は50%当たっていた)。
// そこで、外した候補を全部戻してから追加質問に入る。
// 戻す候補は加減点を受け続けているので、矛盾が多いものは自然と下位に沈む。
function restorePrunedCandidates(){
  if(prunedOutPool.length === 0) return 0;
  const n = prunedOutPool.length;
  scorePool = scorePool.concat(prunedOutPool);
  prunedOutPool = [];
  return n;
}

// スコアが1位に近い(=まだ僅差で競っている)自治体を中心に集める。
// 【第3段階での修正】以前は単純に「並び順の先頭40件」で打ち切っていたため、
// 全スコアが同点の序盤(全国版など)では cities.json の並び順(北海道・東北が先頭)の
// 影響をそのまま受け、序盤の質問が北海道・東北を分けやすいものに偏っていた。
// 今回は、(1)候補が少ない(CANDIDATE_EVAL_CAP以下)ならそのまま全件を評価対象にし、
// (2)多い場合は地方ごとに層化抽出して、cities.jsonの並び順に依存しないようにする。
const RELEVANCE_MARGIN = 8;
const CANDIDATE_EVAL_CAP = 200;     // 有効候補がこれ以下ならすべて評価対象にする
const STRATIFIED_SAMPLE_SIZE = 200; // 200件を超える場合に地方ごとの層化抽出で確保する件数の目安

// 地方タグ(regionOf)で層化し、各地方から均等に取り出す。
// 地方ごとに毎回シャッフルしてから順番に取るため、cities.jsonの並び順や
// 特定地方への偏りが評価対象の選ばれ方に影響しない。
function stratifiedSample(cities, sampleSize){
  const groups = {};
  cities.forEach(c => {
    const g = regionOf(c.pref);
    (groups[g] = groups[g] || []).push(c);
  });
  const regionNames = Object.keys(groups);
  const shuffled = {};
  regionNames.forEach(g => { shuffled[g] = shuffle(groups[g]); });
  const result = [];
  let idx = 0;
  while(result.length < sampleSize){
    let addedAny = false;
    for(const g of regionNames){
      if(idx < shuffled[g].length){
        result.push(shuffled[g][idx]);
        addedAny = true;
        if(result.length >= sampleSize) break;
      }
    }
    idx++;
    if(!addedAny) break; // 全地方分を使い切った
  }
  return result;
}

function topPoolCities(){
  const sorted = sortedPool();
  if(sorted.length === 0) return { cities: [], trueCount: 0 };
  const top1Score = sorted[0].score;
  const relevant = sorted.filter(e => top1Score - e.score <= RELEVANCE_MARGIN).map(e => e.city);
  const minCount = Math.min(8, sorted.length);
  const base = relevant.length >= minCount ? relevant : sorted.slice(0, minCount).map(e => e.city);
  // trueCount: 実際に「今どのくらいの候補が僅差で競っているか」。
  // 質問選びの計算量を抑えるための評価サンプル数(下のcities)とは別に、
  // 終盤の「決め手質問を優先する」判定(priorityAdjust)には必ずこちらを使う。
  const trueCount = base.length;

  if(base.length <= CANDIDATE_EVAL_CAP) return { cities: base, trueCount }; // 200件以下ならそのまま全件を評価対象にする
  return { cities: stratifiedSample(base, STRATIFIED_SAMPLE_SIZE), trueCount }; // 200件超は地方ごとに層化抽出する
}

// 追加質問フェーズ用: 上位5〜15自治体の違いを優先して質問を選ぶための候補集合。
function extraPhaseCities(){
  const sorted = sortedPool();
  const n = Math.max(EXTRA_PHASE_POOL_MIN, Math.min(EXTRA_PHASE_POOL_MAX, sorted.length));
  const cities = sorted.slice(0, n).map(e => e.city);
  return { cities, trueCount: cities.length };
}

let currentMode = 'all';

const MODES = {
  all: {
    label: '全国版',
    description: '日本全国1,741市区町村が対象です。東京都は多摩地区の市と23区を区ごとに当てます。'
  },
  capitals: {
    label: '県庁所在地・23区版',
    description: '県庁所在地と東京23区だけで当てます'
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
  chubu:    { label: '中部版（山梨含む）',   region: '中部' },
  kinki:    { label: '近畿版（三重含む）',   region: '近畿' },
  chugoku:  { label: '中国版',   region: '中国' },
  shikoku:  { label: '四国版',   region: '四国' },
  kyushu:   { label: '九州・沖縄版', region: '九州・沖縄' }
};


// ==================== Google Analytics 4 カスタムイベント ====================
// Googleタグが広告ブロッカー等で読み込まれなかった場合でも、ゲーム本体は止めない。
// 「匿名のプレイ結果をゲーム改善のため送信する」設定がOFFの場合は、
// (Google Apps Scriptへの送信と同様に)ここでも送信を止める。
// この設定はプレイ内容に関する送信全般をコントロールするためのものであり、
// 送信経路がGA4かGoogle Apps Scriptかで扱いを変えないようにする。
function trackGaEvent(eventName, params = {}){
  try{
    if(!isAnonymousReportingEnabled()) return;
    if(typeof window.gtag !== 'function') return;
    window.gtag('event', eventName, params);
  }catch(e){
    console.warn('おらマチ: GA4イベント送信に失敗しました', e);
  }
}

function analyticsModeType(mode){
  if(mode === 'all') return 'national';
  if(mode === 'niigata' || mode === 'tokyo') return 'prefecture';
  return 'region';
}

function analyticsModeParams(mode){
  return {
    game_mode: mode,
    game_mode_label: (MODES[mode] && MODES[mode].label) || mode,
    game_mode_type: analyticsModeType(mode)
  };
}

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

// 都道府県の陸上隣接マップ(隠し称号「県境をさまよう者」の判定用)。
// 北海道・沖縄県は海を挟むため、通常の陸上隣接なしとして扱う(要求仕様どおり)。
const PREF_ADJACENT = {
  '青森県': ['岩手県','秋田県'],
  '岩手県': ['青森県','宮城県','秋田県'],
  '宮城県': ['岩手県','秋田県','山形県','福島県'],
  '秋田県': ['青森県','岩手県','宮城県','山形県'],
  '山形県': ['宮城県','秋田県','福島県','新潟県'],
  '福島県': ['宮城県','山形県','茨城県','栃木県','群馬県','新潟県'],
  '茨城県': ['福島県','栃木県','埼玉県','千葉県'],
  '栃木県': ['福島県','茨城県','群馬県','埼玉県'],
  '群馬県': ['福島県','栃木県','埼玉県','新潟県','長野県'],
  '埼玉県': ['茨城県','栃木県','群馬県','千葉県','東京都','山梨県','長野県'],
  '千葉県': ['茨城県','埼玉県','東京都'],
  '東京都': ['埼玉県','千葉県','神奈川県','山梨県'],
  '神奈川県': ['東京都','山梨県','静岡県'],
  '新潟県': ['山形県','福島県','群馬県','長野県','富山県'],
  '富山県': ['新潟県','長野県','岐阜県','石川県'],
  '石川県': ['富山県','岐阜県','福井県'],
  '福井県': ['石川県','岐阜県','滋賀県','京都府'],
  '山梨県': ['埼玉県','東京都','神奈川県','静岡県','長野県'],
  '長野県': ['群馬県','埼玉県','山梨県','静岡県','愛知県','岐阜県','富山県','新潟県'],
  '岐阜県': ['富山県','石川県','福井県','長野県','愛知県','三重県','滋賀県'],
  '静岡県': ['神奈川県','山梨県','長野県','愛知県'],
  '愛知県': ['長野県','岐阜県','静岡県','三重県'],
  '三重県': ['愛知県','岐阜県','滋賀県','京都府','奈良県','和歌山県'],
  '滋賀県': ['福井県','岐阜県','三重県','京都府'],
  '京都府': ['福井県','滋賀県','三重県','奈良県','大阪府','兵庫県'],
  '大阪府': ['京都府','奈良県','和歌山県','兵庫県'],
  '兵庫県': ['京都府','大阪府','岡山県','鳥取県'],
  '奈良県': ['京都府','大阪府','三重県','和歌山県'],
  '和歌山県': ['三重県','奈良県','大阪府'],
  '鳥取県': ['兵庫県','岡山県','島根県'],
  '島根県': ['鳥取県','広島県','山口県'],
  '岡山県': ['兵庫県','鳥取県','広島県','香川県'],
  '広島県': ['島根県','岡山県','山口県','愛媛県'],
  '山口県': ['島根県','広島県','福岡県'],
  '徳島県': ['香川県','愛媛県','高知県'],
  '香川県': ['岡山県','徳島県','愛媛県'],
  '愛媛県': ['広島県','香川県','徳島県','高知県'],
  '高知県': ['徳島県','愛媛県'],
  '福岡県': ['山口県','佐賀県','熊本県','大分県'],
  '佐賀県': ['福岡県','長崎県'],
  '長崎県': ['佐賀県'],
  '熊本県': ['福岡県','佐賀県','大分県','宮崎県','鹿児島県'],
  '大分県': ['福岡県','熊本県','宮崎県'],
  '宮崎県': ['熊本県','大分県','鹿児島県'],
  '鹿児島県': ['熊本県','宮崎県'],
  '北海道': [],
  '沖縄県': [],
};
function isPrefAdjacent(a, b){
  if(!a || !b || a === b) return false;
  return (PREF_ADJACENT[a] || []).includes(b);
}

function getModeCities(mode){
  if(mode === 'capitals'){
    // 「さっそく遊んでみる」用の入り口モード。県庁所在地(新宿区含む47件)と
    // 東京23区(23件)の合算だが、新宿区は両方に該当するため重複しないようフィルタする。
    return CITIES.filter(c => c.name !== '東京' && (c.tags.prefectural_capital || c.tags.is_tokyo_ward));
  }
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
  // 全国版も同様に「東京」を除外する。23区が個別に入っているため、集計エントリと併存させると
  // タグの持ち主が食い違って矛盾が起きる(「東京」は相撲・NPB・東京ドームがtrueなのに、
  // 実際にそれらがある両国=墨田区・文京区はfalse。逆に東京タワーは港区だけtrueで「東京」はfalse)。
  // 他の政令市が「札幌市」のように市単位で入っているのと揃えて、23区は区単位で当てる。
  return CITIES.filter(c => c.name !== '東京');
}
const stage = document.getElementById('stage');
const stampsEl = document.getElementById('stamps');
const footEl = document.getElementById('foot');

// ---- デバッグモード(?debug=1 で有効化。通常の公開画面には一切表示されない) ----
const DEBUG_MODE = (function(){
  try {
    return /[?&]debug=1(&|$)/.test(location.search || '');
  } catch(e){ return false; }
})();

let debugPanelBodyEl = null;
function ensureDebugPanel(){
  if(!DEBUG_MODE) return null;
  if(debugPanelBodyEl) return debugPanelBodyEl;
  const panel = document.createElement('div');
  panel.id = 'debugPanel';
  panel.style.cssText = 'position:fixed; left:0; right:0; bottom:0; z-index:99999; background:rgba(15,15,20,0.96); color:#8CF28C; font-family:monospace; font-size:11px; line-height:1.5; border-top:2px solid #4CAF50; max-height:60vh; display:flex; flex-direction:column;';
  const bar = document.createElement('button');
  bar.type = 'button';
  bar.textContent = '🐞 デバッグ情報 (タップで開閉)';
  bar.style.cssText = 'width:100%; text-align:left; background:#1c1c24; color:#8CF28C; border:none; border-bottom:1px solid #4CAF50; padding:6px 10px; font-family:monospace; font-size:12px; cursor:pointer;';
  const body = document.createElement('div');
  body.id = 'debugPanelBody';
  body.style.cssText = 'overflow:auto; padding:8px 10px; display:block; white-space:pre-wrap;';
  bar.addEventListener('click', () => {
    body.style.display = (body.style.display === 'none') ? 'block' : 'none';
  });
  // デバッグモードでのみ表示される、統計データ初期化ボタン(通常のUIには一切表示しない)。
  const resetBtn = document.createElement('button');
  resetBtn.type = 'button';
  resetBtn.textContent = '⚠ [デバッグ専用] プレイ統計・称号を初期化';
  resetBtn.style.cssText = 'width:100%; text-align:left; background:#3a1c1c; color:#f28c8c; border:none; border-top:1px solid #4CAF50; padding:6px 10px; font-family:monospace; font-size:11px; cursor:pointer;';
  resetBtn.addEventListener('click', () => {
    if(confirm('[デバッグ] プレイ統計・称号をすべて初期化しますか？(制覇帳データは消しません)')){
      __debugResetStats();
      updateDebugPanel();
    }
  });
  panel.appendChild(bar);
  panel.appendChild(body);
  panel.appendChild(resetBtn);
  document.body.appendChild(panel);
  debugPanelBodyEl = body;
  return body;
}
// デバッグ用: プレイ統計・称号解除状況だけを初期化する(全国制覇帳のデータには触れない)。
// 通常のゲーム画面からは呼び出されず、?debug=1のデバッグパネルからのみ実行できる。
function __debugResetStats(){
  try{
    localStorage.removeItem(STATS_STORAGE_KEY);
    console.log('おらマチ[デバッグ]: プレイ統計データを初期化しました');
    return true;
  }catch(e){
    console.warn('おらマチ[デバッグ]: 統計データの初期化に失敗しました', e);
    return false;
  }
}

// 開発用テスト関数: ダミーの統計データを使って、称号の判定ロジックが正しく動くかを確認する。
// 通常のゲーム画面からは一切呼び出されない(ブラウザのコンソールや検証スクリプトから直接呼ぶ想定)。
// 実際のプレイヤーのデータは一時的にも書き換えず、メモリ上のダミーだけで判定する。
function __debugTestAchievements(overrides){
  const dummyStats = { ...emptyStatsData(), ...(overrides || {}) };
  const dummyConquest = loadConquest(); // 制覇帳は実データを読むだけ(判定条件の一部に必要なため)
  const conqueredIds = new Set(Object.keys(dummyConquest.entries));
  const normalCities = CITIES.filter(c => c.name !== '東京');
  const normalEntries = Object.values(dummyConquest.entries);
  const prefGroups = computePrefStats(conqueredIds);
  const regionGroups = computeRegionStats(conqueredIds);

  const tagCountCache = {}, tagAllCache = {};
  function ensureTagCache(tagKey){
    if(tagCountCache[tagKey] !== undefined) return;
    let doneCount = 0, targetCount = 0;
    normalCities.forEach(c => { if(c.tags[tagKey]){ targetCount++; if(conqueredIds.has(cityId(c))) doneCount++; } });
    tagCountCache[tagKey] = doneCount;
    tagAllCache[tagKey] = targetCount > 0 && doneCount >= targetCount;
  }
  const ctx = {
    stats: dummyStats, conquest: dummyConquest, conqueredIds, normalCities, normalEntries,
    distinctCount: normalEntries.length, prefGroups, regionGroups,
    countByTag: k => { ensureTagCache(k); return tagCountCache[k]; },
    allConqueredByTag: k => { ensureTagCache(k); return tagAllCache[k]; },
    prefFullyConquered: pref => { const g = prefGroups[pref]; return !!(g && g.total > 0 && g.done >= g.total); },
    regionFullyConquered: region => { const g = regionGroups[region]; return !!(g && g.total > 0 && g.done >= g.total); },
    allRegionsHaveAtLeastOne: () => REGION_ORDER.every(r => regionGroups[r] && regionGroups[r].done > 0),
    allRegionsFullyConquered: () => REGION_ORDER.every(r => { const g = regionGroups[r]; return !!(g && g.total > 0 && g.done >= g.total); }),
    playedDistinctDays: n => (dummyStats.playedDates || []).length >= n,
    game: dummyStats.__game || null,
  };
  const results = ACHIEVEMENTS.map(def => {
    let ok;
    try{ ok = !!def.check(ctx); }catch(e){ ok = 'ERROR: ' + e.message; }
    return { id: def.id, name: def.name, category: def.category, result: ok };
  });
  console.log('おらマチ[デバッグ]: 称号判定テスト結果', results);
  return results;
}

// デバッグパネルの表示内容を更新する。ゲームのスコアや状態を「読むだけ」で、
// ここでの処理が候補や質問選択などのゲームロジックへ影響することは一切ない。
// APIキーや送信先URL、個人情報などは表示しない。
function updateDebugPanel(){
  if(!DEBUG_MODE) return;
  const body = ensureDebugPanel();
  if(!body) return;

  const sorted = sortedPool();
  const probs = candidateProbabilities(sorted);
  const top10 = sorted.slice(0, 10).map((e, i) => {
    const p = probs[i] != null ? (probs[i]*100).toFixed(1) : '-';
    return `  ${i+1}. ${e.city.name}(${e.city.pref}) score=${e.score.toFixed(2)} prob=${p}% mismatch=${e.objMismatch||0}`;
  }).join('\n');

  const lastKey = lastDisplayedKeys(1)[0];
  const trueCount = lastKey != null ? sorted.filter(e => e.city.tags[lastKey]).length : '-';
  const falseCount = lastKey != null ? sorted.length - (typeof trueCount === 'number' ? trueCount : 0) : '-';

  const catHistory = lastDisplayedKeys(8).map(k => `${k}(${categoryOf(k)})`).join(', ') || '(なし)';
  const lastCat = lastKey ? categoryOf(lastKey) : '(なし)';

  const popRangeText = `${knownPopMin === -Infinity ? '下限不明' : knownPopMin+'人以上'} 〜 ${knownPopMax === Infinity ? '上限不明' : knownPopMax+'人未満'}`;

  const diag = lastPickDiagnostics;
  const pickInfo = diag ? [
    `選択された質問: ${diag.picked}(${labelFor(diag.picked)})`,
    `評価サンプル数: ${diag.evalSampleSize} / 実際の僅差候補数: ${diag.truePoolSize}`,
    '評価上位候補:',
    ...diag.topScored.map(s => `  ${s.key}(${s.label}): score=${s.score.toFixed(2)}`),
  ].join('\n') : '(まだ質問を選んでいません)';

  const statsOppositeState = STATS_OPPOSITE_PAIRS.map(([a,b]) => {
    const askedA = asked.includes(a), askedB = asked.includes(b);
    return `  ${a}/${b}: ${askedA?a+'済み':(askedB?b+'済み':'未使用')}`;
  }).join('\n');

  body.textContent =
`[状態] mode=${currentMode} phase=${questionPhase} 通常質問=${questionCount}/${MAX_Q} 追加質問=${extraQuestionCount}/${MAX_EXTRA_Q}
[候補] 現在の候補数=${sorted.length} / true=${trueCount} / false=${falseCount}
[除外済み] ${Array.from(excludedNames).join('、') || '(なし)'}
[推測済み(=除外済みと同じ集合)] ${Array.from(excludedNames).join('、') || '(なし)'}

[人口の判明範囲] ${popRangeText}
[統計質問の重複抑制] 
${statsOppositeState}

[直近の質問カテゴリ] ${lastCat}
[質問カテゴリ履歴(直近8件)] ${catHistory}

[質問選択の診断]
${pickInfo}

[候補 上位10]
${top10 || '(候補なし)'}

[回答履歴(質問キーの並び, 全${asked.length}件)]
${asked.join(', ') || '(なし)'}`;
}

function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(rng()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function renderStamps(){
  // 【進行バー】以前は上限34問ぶんの鳥居スタンプを並べていたが、スマホでは小さく詰まって
  // 圧迫感が出ていた。34個並べる代わりに、5問ごとの目盛りが付いた1本のバーで表す。
  // 質問数の上限やロジックは変えていない(見せ方だけの変更)。
  // 「質問 ○／34」の文字表示は別要素(count-line)にそのまま残している。
  stampsEl.innerHTML = '';

  const isExtra = questionPhase === 'extra';
  const max   = isExtra ? MAX_EXTRA_Q : MAX_Q;
  const count = isExtra ? extraQuestionCount : questionCount;
  const ratio = max > 0 ? Math.min(1, count / max) : 0;

  const bar = document.createElement('div');
  bar.className = 'qbar' + (isExtra ? ' qbar-extra' : '');

  // 5問ごとの目盛り(追加質問は問数が少ないので目盛りは出さない)
  if(!isExtra){
    for(let t = 5; t < max; t += 5){
      const tick = document.createElement('span');
      tick.className = 'qbar-tick';
      tick.style.left = (t / max * 100) + '%';
      bar.appendChild(tick);
    }
  }

  const fill = document.createElement('span');
  fill.className = 'qbar-fill';
  fill.style.width = (ratio * 100) + '%';
  bar.appendChild(fill);

  // 現在地の目印。通常質問は鳥居、追加質問は虫めがねで区別する。
  // ⛩は色付きの絵文字(CSSのcolorでは色を変えられない)だが、鳥居らしい見た目を
  // 優先してご指定のとおり絵文字のまま使う。大きさはCSS側のfont-sizeで調整する。
  const head = document.createElement('span');
  head.className = 'qbar-head';
  head.style.left = (ratio * 100) + '%';
  head.textContent = isExtra ? '🔎' : '⛩';
  bar.appendChild(head);

  stampsEl.appendChild(bar);
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
    'joetsu_region','chuetsu_region','uono_river','borders_gunma','borders_toyama',
    'is_town_village','kaetsu_region','is_village','shinano_river','agano_river','borders_yamagata','borders_fukushima','borders_nagano',
    'okutadami_dam','hokuetsu_kyoto','knit_gosen','kurokawa_yuden','niigata_smallest','kitsune_yomeiri','ryokan_birthplace','sakyu_momo','taishitamonja','gomadoyama_ajisai','ryugakubo','yahiko_jinja','fuji_rock'
  ],
  tokyo: [
    'todai_campus','waseda_campus','keio_campus','meiji_campus','rikkyo_campus','chuo_campus','tus_campus','sensoji','kasai_park','sumida_river','meguro_river','shakujii_river','borders_kanagawa','borders_saitama','borders_chiba','tsunagari_mayu_police','tv_station_area','sazae_family','yose_hall','sailor_moon_stage','godzilla_head','rakugo_stage','sanma_famous',
    'is_tokyo_ward','kitanotakeshi','imperial_palace','ginza','tokyo_tower_ward','tokyo_dome_ward','skytree_ward','toyosu_market','haneda_ward','shibamata_taishakuten','broadway_nakano','koenji_area','jiyugaoka','shakujii_park','rinkai_line','yurikamome','toden_arakawa','nippori_toneri','yamanote_line','chuo_rapid','ueno_station','akabane_station','nippori_station','hachiko_area','takao_mountain','blueberry_origin','kishozeisei_center','summerland','hamura_zeki','baseside_street',
    'oi_keibajo','tokyo_daibutsu','showa_kinen_park','kichijoji_harmonica','takahata_hijikata','shimura_ken','tama_rokuto','ghibli_museum','sanrio_puroland','mitakesan','edo_tokyo_tatemono','kurume_twin','akishima_kujira','tamako_yamato','yomiuri_land','second_smallest_city','hitotsubashi_univ','tama_monorail_extension'
  ],
  // 地方版別質問:キーをここに足すと、その地方版と全国版だけで出題される。
  hokkaido: ['douou_area','doutou_area','dohoku_area','sapporo_metro','ishikari_plain','historical_port_hokkaido','industrial_port_hokkaido','hakodate_honsen','ishikari_river',
    'banei_keiba','ebetsu_renga','kitami_hakka','shikotsuko_futoko','hamanasu_no_oka','northernmost_city','shio_kazunoko','canadian_world','garinko_go','nosappu_misaki','hokkaido_greenland','yakitori_famous_bibai','coal_mine_shaft','drift_ice','suffolk_sheep','ammonite_fossil','matsuo_jingisukan','sweet_road','least_populous_city','urokodango','bear_park','kitasubaru','kita_no_kuni','kita_no_shonan'
  ],
  tohoku:   ['tsugaru_area','sendai_metro','kitakami_basin','shonai_area','hamadori_area','nakadori_area','aizu_area','sanriku_area',
    'hirosaki_tenshu','hasshoku_center','misawa_flight','ishiwari_zakura','mutsu_kokufu','kanto_matsuri','kamo_kurage','uesugi_jinja','jionji','shinjo_matsuri','saito_mokichi','hanamiyama','nanko_park','yamagata_shinkansen_station','akita_shinkansen_station','gakuto','hula_girl','bijin_town','yoshi_ikuzo','oirase','osorezan','shakoki_dogu','seibien','jodogahama','goishi_coast','miyazawa_kenji','tensho_chi','amber_kuji','tono_monogatari','geibikei','ipponmatsu','ohtani_shohei','zashiki_warashi','appi_kogen','ishinomori','chagu_chagu','shiogama_shrine','fukahire','shiroishi_umen','sendai_airport','jaxa_kakuda','takekoma_shrine','kano_eiko','blue_impulse','naruko_onsen','town_to_city_2016','basketball_town','kamakura_yokote','akita_inu_hachiko','namahage','inaniwa_udon','oyu_stone_circle','yuri_kogen_railway','blumen_akita','odate_noshiro_airport','tdk_town','kakunodate_tazawako','sankyo_soko','higashizawa_rose','ayame_park','hanagasa_tendo','ginzan_onsen','kumano_taisha','tsuburaya_eiji','matsukawaura','kiku_ningyo_nihonmatsu','abukumado','kacchu_keiba','anpogaki','william_park','tsuruta_steuben','jupialand_shibazakura','licca_castle','iitate_madeikan','ogata_reclamation'
  ],
  kanto:    ['north_kanto','tama_area','tokatsu_area','ryomo_area','tone_river_area','sotetsu_line',
    'uchibo','sotobo','musashino_line','shonan_area','odakyu_line','keio_inokashira_line','tokyu_line','keikyu_line','seibu_line','tobu_main_station','tobu_tojo_station','utsunomiya_station','takasaki_line_station','keisei_line','tsukuba_express','tokyo_bay','tama_river','arakawa_river','edogawa_river','keihintohoku_line','chuo_sobu','joban_line','saikyo_line','silk_heritage','silk_textile','moka_sl_line','kururi_line','watarase_line','kamaboko_famous','koedo','imono_kupola','aeon_laketown','funasshi_famous','action_kamen','senbei_famous','southern_seichi','natural_gas_town','shizumine','shimotsuma_movie','hitachi_kokufu','toyoda_castle','moriya_junction','namegata_farm','hananuki','happogahara','kanuma_tsuchi','nasu_yoichi','jichi_medical','bihada_onsen','moomin_park','ageo_sodou','iroha_toi','okegawa_benibana','ishito_zakura','kinchakuda','heirinji','lucky_star','johnson_town','saika_matsuri','mizuko_kaizuka','smallest_city','yashio_hanamomo','yoshikawa_namazu','shiraoka_nashi','kurohama_kaizuka','hanyu_yurugp','inzai_datacenter','kamagaya_farm','iioka_cape','tomisato_suika','sanbu_sugi','keisei_rose','aqualine_gate','yotsukaido_name','onari_kaido','yachimata_peanuts','nashibou','soza_ueki','zama_himawari','zushi_marina','ayase_no_station',
    'hitachi_seaside_park','tsuchiura_hanabi','koga_kubo','toride_geidai','shimodate_gion','kamisu_gallery','tsukumai','ushiku_daibutsu','kashima_jingu','kokuo_jinja','warp_station_edo','ryujin_ohashi','ayumizaki_park','melon_hokota','ibaraki_airport','makabe_district','edosaki_kabocha','nishishioko_butai','itako_ayame','oyama_hyojo','uzumagawa_kura','ashikaga_gakko','shiobara_onsen','nikko_toshogu','kyuroku_kan','yamaage_matsuri','kanto_shinetsu_tsunagu','tajima_yahei','kiryu_nokogiri','tsutsujigaoka_bunbuku','ikaho_onsen','usui_meganebashi','tomihiro_museum','fukiware_no_taki','railway_museum','toki_no_kane','koku_kinen_park','misato_junction','toda_boat','shibusawa_eiichi','konosu_hina','first_outlet','jumbo_koinobori','higashimatsuyama_yakitori','seitenkyu','riken_hq','hanawa_hokiichi','sunaori_amagoi','sakitama_zerifry','gongendo_sakura','hitachidai_stadium','suguyaru_ka','nakayama_hokekyoji','kominato_railway','yatsu_higata','tokyo_disney','rekihaku','kikkoman_hq','abiko_ekisoba','nomizo_no_taki','tokyo_german_village','inubosaki','sawara_district','shirasato_kaigan','sunosaki_lighthouse','mother_farm_nokogiri','boshu_biwa','ohara_hadaka','kamogawa_seaworld','katsuura_tantanmen','jaxa_isas','shirokoro_horumon','izumi_no_mori_awaodori','enoshima','omote_tanzawa','ebina_sa','oyama_afuri','jogashima_maguro','daiyuzan_kintaro','ora_mirai_tower','kamisato_sa','mikurajima_dolphin','aogashima_double_caldera','oi_biotopia','jra_training','misato_blueberry'
  ],
  chubu:    ['hokuriku_three_pref','koshin_area','tokai_area','owari_area','mikawa_area','izu_area','suruga_area','totomi_area','hida_area','mino_area','hokushin_area','toshin_area','chushin_area','nanshin_area','meitetsu_line',
    'fujiko_f_birthplace','shinkiro_maibotsurin','fujiko_a_buri','hotaruika_museum','tulip_fair','merhen_kenchiku','gokayama_gassho','kaiwomaru_bridge','wakura_notojima','komatsu_origin','senmaida_shikki','rokugozaki','kaga_onsenkyo','ufo_museum','shirayama_tedori','matsui_museum','kehi_jindo','miketsukuni_saba','echizen_ono_castle','awara_onsen','fujiq_highland','fuefuki_fruit_park','shinpu_shichirigan','katakana_city_name','kiyosato_hakushu','shingen_zutsumi','isawa_onsen','katsunuma_budo','name_same_as_route','kamikochi','sanada_bessho','okaya_silk','ningyogeki_tenryukyo','suzaka_garyu','kaikoen_toson','takato_sakura','shinpei_ipponki','alpen_route_nagano','kamakura_nanohana','naraijuku_wine','farthest_from_sea','obasute_togura','unnojuku_yunomaru','wasabi_farm','nagaragawa_ukai','okuno_hosomichi_musubi','hida_furuimachi','mosaic_tile_museum','magome_kurikinton','udatsu_mino','kaseki_museum','iwamura_akechi','otajuku_satoyama','toki_outlet','aerospace_museum','rose_garden_akechi','fuyu_kaki_origin','setogawa_shirakabe','usuzumi_zakura','gujo_odori','nihon_sanmeisen','kisosansen_wajyu','atami_moa','genbegawa_rakujuen','sengen_taisha','omuroyama_jogasaki','horaibashi_sl','gakunan_tagonoura','yaizu_katsuo','kakegawa_castle','soccer_town_fujieda','gotemba_outlet','ecopa_hattasan','shimoda_port','fuji_safari','arai_sekisho','shuzenji_toi','hamaoka_lighthouse','senkagawa_fukamushi','nirayama_hansharo','sagara_oil_airport','masumida_keori','toyokawa_inari','tsushima_tenno','kokonoe_mirin','toyota_origin_kariya','toyota_hq','nihon_denmark','matcha_sakushima','takeshima_resort','centrair_manekineko','mandaraji_fuji','komaki_castle','konomiya_hadaka','nagashino_horaiji','juraku_daibutsu','aichi_kenko_mori','shinmaiko_okada','kakitsubata_chiryu','owariasahi_tower','okehazama','aichi_bokujo','irago_longbeach','sendohira_renkon','kiyosu_castle','showa_nichijo','kingyo_yatomi','miyoshi_canoe','shippoyaki','ghibli_linimo',
    'noto_area','oito_line','shinano_railway','echizen_railway','nagaragawa_railway','yoro_railway','sunzu_line','aikan_railway','kurobe_torokko','dinosaur_museum','echizen_washi_hamono','tojinbo','jomon_venus','rokkoyo','mino_ware','glasses_industry','musical_instruments','gold_leaf','pharmaceutical_industry','vinegar_famous','miso_famous','gassho_zukuri','shinkai_gyo','saboten_machi','nono_odoriji','linear_center','shakou_elevator','saruhashi','enbaragawa','sanshu_kawara','nonbori_arai'
  ],
  kinki:    ['keihanshin_area','hokusetsu_area','kawachi_area','senshu_area','hanshin_area','harima_area','tajima_area','tamba_area','kyoto_north','nara_basin','kii_peninsula','nankai_line',
    'nagashima_nabana','suzuka_circuit','magose_hinoki','sekijuku','toba_aquarium','onigajo_hananoiwaya','fujiwaradake_bairin','parque_ago','iga_ninja_basho','kurokabe_chikubu','hachimanbori','biwako_ohashi_sagawa','jra_training','konan_sanzan','metasequoia_shirahige','gokasho_eigenji','maizuru_akarenga','byodoin_uji','iwashimizu_nagarebashi','toyonaka_kyujo','taiyo_no_to','mofu_izumiotsu','imashirozuka_haniwa','mizuma_nishikinohama','moriguchi_daikon','hikari_no_kyokai','kansai_airport_city','pl_tower','naritasan_osaka','kanshinji_kongoji','nunose_takenouchi','nozaki_mairi','ikegami_sone','minoh_katsuoji','kashiwara_budo','ojin_ryo_wine','panasonic_hq','torikai_depot','takashinohama','fujiidera_kannon','sennan_rosegarden','shijonawate_masatsura','hoshi_no_buranko','sayamaike','pichipichi_beach','sumoto_castle_onsen','ashiya_yodoko','itami_sake_airport','katsumeshi_kakurinji','tada_jinja','sanda_hitohaku','kasai_globe_clock','izanagi_yumebutai','tojoko_omocha','tatsuno_shoyu_somen','takada_sakura_jinaimachi','kingyo_yamatokoriyama','tenri_shukyo_toshi','kashihara_jingu','miwa_somen','gojo_kaki_shinmachi','katsuragi_kodo','ikoma_cablecar','dontsurubo','taimadera_sumo','uda_seiyaku','kuroe_shikki','koyasan_gateway_pile','arida_mikan','shortest_private_line','kumano_hongu_benkei','kumano_hayatama_gotobiki','kokawadera_momo',
    'deer_in_city','hankyu_line','yayoiken_seichi','hirakata_park','keihan_line','kawachi_ondo','hyoujun_jigosen','koushien','danjiri_famous','kageki_dan','stork','hyonosen','takeda_castle','tamba_dinosaur','black_soybeans','japan_navel','miki_hardware','balloon_city','sake_birthplace','peron_festival','ako_ronin','awaji_puppet_theater','nijigen_no_mori','akechi_mitsuhide_castle','gunze_birthplace','singing_sand','miyama_thatched_village','hozugawa_boat_ride','doushisha','nagaoka_tenmangu','joruriji','jrosyu_ume','ritsumeikan','akame_taki','oiwayama_dotaku','tokaido_nakasendo','koka_ninja','take_no_michi','aioi_matsu','banshu_soroban_ono','katsuragi_tsutsuji','matabei_zakura','kishu_herazao','negoroji','inami_kaeru_bridge','nanko_ume','ebikani_aquarium'
  ],
  chugoku: ['sanin_area','sanyo_area','izumo_area','bingo_area','hiroshima_metro','chugoku_mountain_basin','setouchi_industrial','sanin_main_line','sanyo_main_line','hakubi_line',
    'kaike_onsen','kurayoshi_shirakabe','sesshu_teien','iwami_ginzan','gonokawa_kako','horumon_udon','kinojo','bitchu_matsuyama','saijo_sake','mihara_tako','kiri_no_umi','hiroshima_westmost','anno_hideaki','tokuyama_combinat','kintaikyo','cement_glass',
    'denim_industry','sea_torii','fugu_famous','yamata_no_orochi','hibagon','mori_motonari','hiruzen_highland','miyamoto_musashi_station','akiyoshidai','mizuki_shigeru_road','yasugi_bushi','gonokawa','donticchi_fish','shokasonjuku','motonosumi_shrine','bizen_ware','osafune_sword_museum','naoshima_gateway','horseshoe_crab_museum','astronomy_city','sunameri','naval_academy','goldfish_lantern','ito_hirobumi_birthplace','train_factory','kokusan_denim','konrei_kagu'
  ],
  shikoku: ['yosan_line','dosan_line','toyo_area','chuyo_area','nanyo_area','honshu_bridge','paper_industry_shikoku',
    'led_valley','naruto_uzushio','kincho_tanuki','awa_dochu','mima_udatsu','iya_kazurabashi','marugame_uchiwa','chichibugahama','zenigata_sunae','setoohashi_shikoku','kukai_birthplace','tebukuro_industry','uchinuki','garyu_sanso','kezuribushi','yawatahama_champon','seiyo_geopark','botchan_theater','kochi_ryoma_airport','chinkabashi','noichi_zoo','muroto_geopark','nabeyaki_ramen','daruma_yuhi','ashizuri_misaki','tosabushi','yanase_museum',
    'shikoku_pilgrimage','nora_dokei'
  ],
  kyushu: ['northern_kyushu','southern_kyushu','ariake_coast','fukuoka_metro','kitakyushu_area','chikugo_area','chikuho_area','chikuzen_area','satsuma_area','osumi_area','okinawa_main_island','okinawa_south_central','sakishima_islands','kagoshima_main_line','nippo_main_line','nishitetsu_line',
    'nakoku_no_oka','miike_tanko','sakurai_futamigaura','ushikubi_sueki','munakata_hetsugu','goshogatani_kogoishi','funabaru_kofun','hikari_no_michi','tanabata_jinja','nogata_meteorite','yanagawa_kudari','yame_gyokuro','sakuta_no_unade','tagawa_sekitan','hishino_suisha','oda_hiroki_museum','kiyomizudera_teien','toyota_kyushu','chikugo_yoshii','karatsu_kunchi','tosu_junction','okawachiyama','takeo_onsen_romon','ogi_yokan','kunenan','yutoku_inari','ureshino_bihada','isahaya_meganebashi','nagasaki_airport_omura','koi_no_oyogu_machi','hara_castle','unzen_jigoku','fukuejima_onidake','ajifry_seichi','tsushima_border','mugi_shochu_iki','nanatsugama_shonyudo','hirado_oranda','igusa_yatsushiro','sakitsu_shuraku','takaba_countrypark','hiryu_no_kane','misumi_nishiko','mandako_greenland','aoi_aso_jinja','kusasenrigahama','takasakiyama_saru','fukuzawa_karaage','bungo_futamigaura','usa_jingu','usuki_magaibutsu','harajiri_no_taki','kinrinko_yufuin','oka_castle','showa_no_machi','sandwich_jokamachi','futagoji','tsukumi_sakura_maguro','sekinoo_taki','nobeoka_ishigaki','umagase_cross','saitobaru_kofun','toimisaki_uma','ebino_kogen','shirokuma_tenmonkan','shiobitashi_onsen','kokuritsu_taiiku_univ','kamou_no_okusu','tsuru_ettochi','kinsakubaru_keihan','satsumayaki_miyama','bonotsu_ganjin','mizonokuchi_doketsu','chiran_bukeyashiki','daguri_misaki','makurazaki_station','bontan_shika','teppokan','satsuma_ryugakusei','koza_eisa','kaichu_doro_katsuren','okinawa_convention','heiwa_kinen_himeyuri','senagajima_umikaji','kabira_bay','irabu_ohashi','sefa_utaki',
    'kyushu_shinkansen_station','nishikyushu_shinkansen_station','castella_famous','hamburger_famous','onga_pump','koinoki','hiyoko','kubote_san','taku_seibyo','minamata_museum','kikuchi_keikoku','mikoshiki_coast','amakusa_bridges','ikoma_kogen','senbon_icho','sogi_no_taki','orion_beer','saga_balloon_festa'
  ]
};

// 【地方ごとの排他関係を全国に拡張】東京都(多摩地区/23区)で行った「地理的に絶対に
// 両立しない組み合わせをデータから自動学習する」やり方を、MODE_ONLY_KEYSに登録済みの
// 地方限定タグ群を単位にして全国へ広げる。各地方の限定タグ+日本海/太平洋/瀬戸内海を
// まとめて1グループとし、実際に両方trueになる市が1件も無いペアだけを自動検出する。
// 例: 「山陰本線が通っている?」にはいと答えたら、山陰本線は日本海側を走るため
// 「瀬戸内海に面している?」は聞くまでもなく「いいえ」だと分かる。
// MODE_ONLY_KEYSを単位にしているので、タグを追加・変更しても自動で追従する。
for(const __regionGroup in MODE_ONLY_KEYS){
  const __combined = [...new Set([...MODE_ONLY_KEYS[__regionGroup], 'nihonkai', 'taiheiyo', 'setonaikai'])];
  EXCLUSIVE_CHECK_GROUPS.push(__combined);
}

// 高速道路インターチェンジ質問(ic_*)の出題範囲。
// これらの路線は県境をまたぐため、MODE_ONLY_KEYS(1タグ=1地方)ではなく、
// 「1つのICタグ → 出題を許可する地方版の集合」として別テーブルで管理する。
// 全国版では常に出題対象。地方版では、その路線が実際に通る地方版でのみ出題する。
// 例: 東名(ic_tomei)は関東と中部を通るので、関東版・中部版・全国版で出題される。
const IC_ROUTE_GROUPS = {
  // 北海道
  ic_doo: ['hokkaido'], ic_sasson: ['hokkaido'], ic_shiribeshi: ['hokkaido'], ic_doto: ['hokkaido'],
  // 東北
  ic_tohoku: ['tohoku'], ic_hachinohe: ['tohoku'], ic_aomori: ['tohoku'], ic_kamaishi: ['tohoku'],
  ic_akita: ['tohoku'], ic_yamagata: ['tohoku'], ic_tohoku_chuo: ['tohoku'],
  ic_nihonkai_tohoku: ['tohoku'], ic_banetsu: ['tohoku'], ic_joban: ['tohoku'],
  // 関東・中部
  ic_kanetsu: ['chubu','kanto'], ic_joshinetsu: ['chubu','kanto'], ic_hokukanto: ['kanto'],
  ic_higashikanto: ['kanto'], ic_tokyo_gaikan: ['kanto'], ic_tateyama: ['kanto'], ic_shin_kuko: ['kanto'],
  ic_chuo: ['chubu','kanto'], ic_nagano: ['chubu'], ic_hokuriku: ['chubu','kinki'],
  ic_tokai_hokuriku: ['chubu'],
  ic_tomei: ['chubu','kanto'], ic_shin_tomei: ['chubu','kanto'],
  // 近畿・中部
  ic_meishin: ['chubu','kinki'], ic_shin_meishin: ['kinki'], ic_tomeihan: ['chubu','kinki'],
  ic_isewangan: ['chubu','kinki'], ic_ise: ['kinki'], ic_kisei: ['kinki'], ic_meinikan: ['chubu'],
  ic_kinki: ['kinki'], ic_hanwa: ['kinki'], ic_nishimeihan: ['kinki'],
  ic_maizuru_wakasa: ['chubu','kinki'], ic_kansai_kuko: ['kinki'],
  // 中国・近畿
  ic_chugoku: ['chugoku','kinki'], ic_sanyo: ['chugoku','kinki'], ic_tottori: ['chugoku'],
  ic_yonago: ['chugoku'], ic_okayama: ['chugoku'], ic_hamada: ['chugoku'], ic_matsue: ['chugoku'],
  ic_onomichi: ['chugoku'], ic_hiroshima: ['chugoku'], ic_harima: ['kinki'],
  // 四国
  ic_takamatsu: ['shikoku'], ic_tokushima: ['shikoku'], ic_matsuyama: ['shikoku'], ic_kochi: ['shikoku'],
  // 九州・沖縄
  ic_kyushu: ['kyushu'], ic_higashi_kyushu: ['kyushu'], ic_nagasaki: ['kyushu'],
  ic_oita: ['kyushu'], ic_miyazaki: ['kyushu'], ic_okinawa: ['kyushu'],
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
  // 【capitalsモード専用】県庁所在地・東京23区限定モードには東京23区が23件含まれるため、
  // 東京都限定グループ(is_tokyo_ward等)も出題対象にする。多摩地区限定の質問(tama_area等)も
  // 同じグループに含まれるが、対象に多摩地区の市が無いため情報量ゼロとなり、通常の
  // 出題ロジック側で自動的に選ばれなくなる(実害はない)。
  if(mode === 'capitals' && group === 'tokyo') return true;
  return false;
}

function activeKeysForMode(mode){
  return KEYS.filter(k => {
    // 高速道路IC質問は複数地方をまたぐことがあるので専用テーブルで判定する。
    // 全国版なら常に出題、地方版ならその路線が通る地方版のときだけ出題する。
    if(IC_ROUTE_GROUPS[k]){
      if(mode === 'all') return true;
      return IC_ROUTE_GROUPS[k].includes(mode);
    }
    for(const group in MODE_ONLY_KEYS){
      if(MODE_ONLY_KEYS[group].includes(k)){
        return modeAllowsGroup(mode, group);
      }
    }
    return true; // どの限定グループにも属さない質問は全モードで出る
  });
}

// ==================== 全国版での地方・県限定質問の動的優先(地方ブースト) ====================
// 全国版では地方・県限定質問(MODE_ONLY_KEYS)も技術的には出題対象だが、候補が全国に
// 散らばっている序盤は「その地方内をさらに絞り込む」効果が薄く、通常の情報利得評価では
// ほとんど選ばれない。回答が進み、候補が特定の地方・県に偏ってきたら、その地方限定質問を
// 優先的に出せるようにする。

// キー→限定グループ名の逆引き(質問1つ1つについて、都度MODE_ONLY_KEYS全体を走査しないため)
const KEY_TO_MODE_GROUP = {};
for(const __group in MODE_ONLY_KEYS){
  MODE_ONLY_KEYS[__group].forEach(k => { KEY_TO_MODE_GROUP[k] = __group; });
}
// 地方グループ名 → regionOf()が返す地方名の対応
const GROUP_REGION_NAME = {
  hokkaido: '北海道', tohoku: '東北', kanto: '関東', chubu: '中部',
  kinki: '近畿', chugoku: '中国', shikoku: '四国', kyushu: '九州・沖縄'
};
function cityMatchesGroup(city, group){
  if(group === 'niigata') return city.pref === '新潟県';
  if(group === 'tokyo') return city.pref === '東京都';
  return regionOf(city.pref) === GROUP_REGION_NAME[group];
}

const REGION_BOOST_SHARE_THRESHOLD = 0.3; // 候補のこの割合以上がその地方・県ならブースト対象にする
const REGION_BOOST_AMOUNT = 6;            // ブーストの強さ(priorityAdjust後のdiffから差し引く量)

// 東京の私鉄・鉄道路線タグ群。東京都版では、これらは23区・多摩地域の市を細かく
// 区別する重要な決め手になるが、路線を持つ市が少ないため情報利得だけでは埋もれて
// 出題されにくい(regionBoostは全国版専用で東京都版では効かない)。そこで東京都版に
// 限り、候補がある程度絞れた段階でこれらを優先的に出すためのグループとして定義する。
const TOKYO_RAIL_KEYS = new Set([
  'odakyu_line','keio_inokashira_line','tokyu_line','keikyu_line','seibu_line','tobu_main_station','tobu_tojo_station','keisei_line',
  'tsukuba_express','rinkai_line','yurikamome','toden_arakawa','nippori_toneri',
  'yamanote_line','keihintohoku_line','chuo_sobu','sotetsu_line'
]);
const TOKYO_RAIL_BOOST = 10;        // 東京都版で路線質問に与える優遇量
const TOKYO_RAIL_POOL_SIZE = 25;    // 候補がこの件数以下になったら路線質問を優先し始める
const TOKYO_RAIL_SHARE_THRESHOLD = 0.3; // 全国版で候補のこの割合以上が東京都なら路線質問を優先

// 【地方ブーストの全国拡張】TOKYO_RAIL_KEYSと同じ発想(「その地方に絞れてきたら、
// 情報利得だけでは埋もれがちな決め手質問を優先する」)を、東京以外の地方にも広げたもの。
// 例: 九州・沖縄に絞れてきたら「モノレールが走っている?」を優先する(那覇市・浦添市・
// 北九州市の決め手になりやすいが、モノレールがある市自体は全国的に少なく埋もれがち)。
// キー: MODE_ONLY_KEYSと同じ地方グループ名。値: その地方で優先したいキーの配列。
// (地方限定タグではなく全国で出題されうるタグを想定。地方限定タグの優先はregionBoostForが別途担う)
const REGION_KEY_BOOST = {
  // 九州・沖縄: モノレール(那覇市・浦添市・北九州市)、鉄道駅が無い(沖縄本島の市)は
  // 決め手になりやすいが、全国的には少数派で情報利得だけでは埋もれがち。
  // 実測: no_railway_stationは対象9市average 21.2→19.3問に改善(5シード)。
  // saga_balloon_festa(バルーンフェスタ=佐賀市)・takasakiyama_saru(高崎山のサル=大分市)は
  // それぞれ1市限定だが、九州・沖縄に絞れた後の決め手として優先する。
  kyushu: ['monorail', 'no_railway_station', 'saga_balloon_festa', 'takasakiyama_saru'],
  // 近畿: 阪急線・京阪線は大阪都市圏の市を区別する決め手になるが、東京の私鉄と同じ理由で埋もれがち。
  // 実測: hankyu_lineは対象12市average 18.0→16.2問に改善、失敗も1→0件に(5シード)。
  // keihan_lineは対象10市average 17.5→16.6問に改善(5シード)。
  kinki: ['hankyu_line', 'keihan_line'],
  // 中部: 合掌造り集落(南砺市・高山市)は該当2市のみだが、非常に特徴的な決め手。
  // 実測: 対象2市average 13.8→13.3問にわずかに改善(5シード、サンプルは少なめ)。
  chubu: ['gassho_zukuri'],
  // 関東: 桑田佳祐の出身地(茅ヶ崎市)は1市限定の決め手だが、全国的には情報利得だけでは埋もれがち。
  // 関東に絞れた後の決め手として優先する。
  kanto: ['southern_seichi'],
  // 北海道: 歴史的な港町(函館市・小樽市・室蘭市・釧路市)は北海道内では絞り込みの決め手になるが、
  // 全国的には少数派で埋もれがち。北海道に絞れた後の決め手として優先する。
  hokkaido: ['historical_port_hokkaido'],
  // 【検証の結果、追加を見送ったもの】
  // - shikoku: udon_famous(うどんが有名)は対象8市average 14.8→15.1問とほぼ横ばいで見送り。
  // - hokkaido: drift_ice(流氷)は対象3市average 26.3→29.0問と悪化したため見送り。
  // - chugoku: shipbuilding(造船で知られる)は対象5市average 20.6→20.7問とほぼ横ばいで見送り。
  //   (いずれも「その質問を選ばせる」こと自体が、他の質問順序の乱数連鎖に影響し、
  //   狙いと違う方向に転ぶことがあるため。効果が実測で確認できたものだけを採用した)
  //
  // 【新潟県・東京都限定タグの全国版対応】TOKYO_RAIL_KEYSと同じ「候補プールが絞れて
  // から優先する」仕組みを、新潟・東京の限定タグ全体(MODE_ONLY_KEYS.niigata / .tokyo)
  // にも広げたもの。
  // 実測: 「ほぼ確定してから出す」つもりで閾値0.7を試したところ、むしろ他地方と同じ
  // 緩い閾値0.3の方が効率的だった(新潟: 平均14.31→0.7で13.81→0.3で13.66問、
  // 東京: 平均17.79→0.7で17.63→0.3で17.12問。いずれも正答率100%は維持)。
  // 30%程度候補が絞れた時点で使い始めた方が、質問を無駄にしにくいため。
  // そのため他地方と同じ閾値をそのまま使う(専用の高い閾値は採用しなかった)。
  niigata: MODE_ONLY_KEYS.niigata,
  tokyo: MODE_ONLY_KEYS.tokyo,
};
const REGION_KEY_BOOST_AMOUNT = 8;
const REGION_KEY_BOOST_POOL_SIZE = 25;
const REGION_KEY_BOOST_SHARE_THRESHOLD = 0.3;
const REGION_KEY_BOOST_LOOKUP = {}; // キー→地方グループ名の逆引き
for(const __g in REGION_KEY_BOOST){ REGION_KEY_BOOST[__g].forEach(k => { REGION_KEY_BOOST_LOOKUP[k] = __g; }); }

// 現在の候補プール(topCities)の中で、各地方・県限定グループが占める割合を計算する。
// 全国版(currentMode==='all')のときだけ意味を持つ(地方版では既に常時有効なため不要)。
function computeGroupShares(topCities){
  const shares = {};
  if(currentMode !== 'all' || topCities.length === 0) return shares;
  for(const group in MODE_ONLY_KEYS){
    const count = topCities.filter(c => cityMatchesGroup(c, group)).length;
    shares[group] = count / topCities.length;
  }
  return shares;
}
// このキーが地方・県限定質問で、対応する地方・県の候補シェアが十分高ければブースト量を返す。
function regionBoostFor(key, groupShares){
  // 高速道路IC質問(複数地方対応)は、通る地方のいずれかのシェアが閾値を超えたらブースト。
  if(IC_ROUTE_GROUPS[key]){
    for(const g of IC_ROUTE_GROUPS[key]){
      const s = groupShares[g];
      if(s != null && s >= REGION_BOOST_SHARE_THRESHOLD) return REGION_BOOST_AMOUNT;
    }
    return 0;
  }
  const group = KEY_TO_MODE_GROUP[key];
  if(!group) return 0;
  const share = groupShares[group];
  if(share != null && share >= REGION_BOOST_SHARE_THRESHOLD) return REGION_BOOST_AMOUNT;
  return 0;
}

// ==================== 質問の「序盤・中盤・終盤」段階分類 ====================
// カテゴリごとの既定の段階。「地理・統計・人口の基本区分」は序盤、
// 「交通・産業・歴史・大学」は中盤、「名物・特産品・作品ゆかり・遊び心」は終盤、が基本方針。
// カテゴリの既定値だけでは実態に合わないキーは PHASE_KEY_OVERRIDES で個別に上書きする。
const PHASE_CATEGORY_DEFAULT = {
  '統計': 'early',
  '地理': 'early',
  '人口・行政': 'early',
  '交通': 'middle',
  '学問': 'middle',
  '歴史・文化': 'middle',
  '観光・娯楽': 'late',
  '食': 'late',
  '遊び心': 'late',
  'その他': 'late',
};

const PHASE_KEY_OVERRIDES = {
  // 人口・行政のうち、都市の性格・産業寄りの細かい話は中盤
  bedtown: 'middle', formed_after_2000: 'middle', kenkyu_gakuen_toshi: 'middle',
  sapporo_metro: 'middle', sendai_metro: 'middle', keihanshin_area: 'middle',
  monozukuri: 'middle', kougyou_toshi: 'middle', kigyo_joukamachi: 'middle',
  seitetsu_kouro: 'middle', imono_kupola: 'middle', tire_famous: 'middle', nuclearpowerplant: 'middle',
  // 名前・方言系の計算タグは、個性が強く決め手になりやすいので終盤
  kana_name: 'late', kansai_dialect: 'late', ryukyu_dialect: 'late',

  // 歴史・文化のうち、「城下町・宿場町・門前町・軍港」など町の性格を表すものは中盤
  castle: 'middle', worldheritage: 'middle', ruins: 'middle', shrine_temple: 'middle',
  former_capital: 'middle', sengoku_warlord: 'middle', old_province_name: 'middle',
  gokaido_shukuba: 'middle', monzen: 'middle', gunkou_machi: 'middle', beigun_kichi: 'middle',
  ancient_provincial_capital: 'middle', traditional_buildings_district: 'middle',

  // 地理カテゴリのうち、実質的に特産品・産業に近いものは終盤
  glasses_industry: 'late', towel_industry: 'late',
  musical_instruments: 'late', gold_leaf: 'late', denim_industry: 'late',
  pearl_farming: 'late', shipbuilding: 'late', furniture_industry: 'late',
  washi_famous: 'late', pharmaceutical_industry: 'late', fireworks_industry: 'late',
  stone_industry: 'late', lacquerware_famous: 'late',
};
// 地方・県限定タグ(MODE_ONLY_KEYS)は、個別指定が無ければ中盤に位置づける。
// (全国版では「地方ブースト」が効いてくる=候補が絞れてきた中盤〜終盤で出やすいため)
for(const __phaseGroup in MODE_ONLY_KEYS){
  MODE_ONLY_KEYS[__phaseGroup].forEach(k => { if(!(k in PHASE_KEY_OVERRIDES)) PHASE_KEY_OVERRIDES[k] = 'middle'; });
}

// ==================== 地域を絞る質問の出題順(4段階) ====================
// 「広い地域 → 都道府県 → 県内の細かい地域」の順に効かせたいので、段階を明示的に指定する。
//   序盤(early)            : 8地方(関東地方? 中部地方? など)
//   序盤と中盤の間(early_middle): 複数県にまたがる広域(北関東3県? 北陸3県? 京阪神? など)
//   中盤(middle)           : 47都道府県(岐阜県にありますか? など)
//   終盤(late)             : 県内の地方別(中越地方? 道北地方? など)

// 【序盤】地方をまたぐ広域質問。8地方の質問と同じ時期に使う。
// 紀伊半島は近畿(和歌山)と近畿(三重)、東海地方は中部と近畿(三重)にまたがるため、
// 「まず大きく地域を切る」用途として序盤に置く。
const PHASE_EARLY_WIDE_AREA_KEYS = ['kii_peninsula','tokai_area'];

// 【序盤と中盤の間】複数県をまとめた広域。地方は決まったが都道府県はまだ、という時期に使う。
const PHASE_EARLY_MIDDLE_KEYS = [
  'north_kanto','sanriku_area','hokuriku_three_pref','koshin_area','keihanshin_area',
  'sanin_area','sanyo_area','northern_kyushu','southern_kyushu',
  // 都道府県庁の所在地かどうかも、地方が決まった後に「県内のどのマチか」を大きく切る質問。
  // 各県に必ず1つあり、答えは客観的にはっきりしているので即時除外の対象にもする。
  'prefectural_capital',
  // 以下は主観が混じるため即時除外の対象外だが、出題時期は同じ
  'ryomo_area','chugoku_mountain_basin','hanshin_area','ariake_coast',
];

// 【終盤】県内・地方内をさらに細かく割る地域質問。
const PHASE_LATE_SUBREGION_KEYS = [
  'douou_area','doutou_area','dohoku_area','sapporo_metro',
  'tsugaru_area','shonai_area','hamadori_area','nakadori_area','aizu_area','sendai_metro',
  'tama_area','tokatsu_area','shonan_area',
  'joetsu_region','chuetsu_region','kaetsu_region','noto_area',
  'hokushin_area','toshin_area','chushin_area','nanshin_area',
  'izu_area','suruga_area','totomi_area','hida_area','mino_area','owari_area','mikawa_area',
  'hokusetsu_area','kawachi_area','senshu_area','harima_area','tajima_area','tamba_area',
  'kyoto_north','nara_basin',
  'bingo_area','izumo_area','hiroshima_metro','toyo_area','chuyo_area','nanyo_area',
  'chikuzen_area','chikugo_area','chikuho_area','kitakyushu_area','fukuoka_metro',
  'satsuma_area','osumi_area','okinawa_main_island','okinawa_south_central','sakishima_islands',
];

PHASE_EARLY_WIDE_AREA_KEYS.forEach(k => { PHASE_KEY_OVERRIDES[k] = 'early'; });
PHASE_EARLY_MIDDLE_KEYS.forEach(k => { PHASE_KEY_OVERRIDES[k] = 'early_middle'; });
PHASE_LATE_SUBREGION_KEYS.forEach(k => { PHASE_KEY_OVERRIDES[k] = 'late'; });

// 都道府県質問(pref_*)は中盤。「広い地域 → 都道府県 → 県内の細かい地域」の真ん中にあたる。
// ジャンルは「地理」だが、地理の既定(序盤)のままだと序盤に出てしまうため個別に上書きする。
// 実際の出題可否は PREF_QUESTION_KEYS 側の制限(質問数・候補数・間隔・回数)でも二重に守る。
Object.keys(PREF_KEY_TO_NAME).forEach(k => { PHASE_KEY_OVERRIDES[k] = 'middle'; });

// この質問キーが「序盤(early)・序盤と中盤の間(early_middle)・中盤(middle)・終盤(late)」の
// どれに属するかを返す。
function phaseOf(key){
  if(PHASE_KEY_OVERRIDES[key]) return PHASE_KEY_OVERRIDES[key];
  const cat = categoryOf(key);
  return PHASE_CATEGORY_DEFAULT[cat] || 'middle';
}

// 候補数と質問数の両方から、今がどの段階かを判定する。
// 段階は early → early_middle → middle → late の4つ。
//   early        : 8地方・海・人口規模など、まず大きく切る質問
//   early_middle : 8地方は決まったが都道府県までは絞れていない時期。複数県にまたがる
//                  広域質問(北関東3県・北陸3県・京阪神・山陰/山陽・北部九州/南九州など)
//   middle       : 47都道府県、鉄道・高速・産業・歴史など
//   late         : 県内の地方別(中越・道北など)、名物・施設など個別の決め手
//
// 【質問数を主、候補数を従にしている理由】
// 地方質問の即時除外により候補数は数問で一気に落ちる(825→203→…)。候補数を主にすると
// early(180件以上)から middle/late へ飛んでしまい、early_middle がほとんど訪れない。
// 実測では366局面中 early_middle はわずか4局面だった。そこで質問数で段階を進め、
// 候補数は「もう十分絞れているなら前倒しで終盤にする」補助として使う。
const PHASE_POOL_SIZE_LATE = 20;           // 候補がこれ以下なら質問数によらず終盤
const PHASE_QCOUNT_EARLY_MAX = 4;          // この質問数までは序盤
const PHASE_QCOUNT_EARLY_MIDDLE_MAX = 8;   // この質問数までは序盤と中盤の間
const PHASE_QCOUNT_LATE_MIN = 15;          // この質問数からは終盤

// 序盤は「上位から最低これだけは選択肢に入れて、その中からランダムに選ぶ」数。
// 毎回同じ質問(「海に面している?」など)から始まって単調になるのを防ぐためのもの。
// 大きくするほど質問が散らばるが、遠回りな質問も混じるので平均質問数は少し増える。
// 候補がたくさん残っている序盤ほど「どの質問でもそれなりに絞れる」ので広く取り、
// 進むにつれて精度優先で狭めていく。
function minChoicesFor(qCount){
  if(qCount <= 2) return 8;  // 入りの数問は大きく散らす(ゲームの印象を決めるところ)
  if(qCount <= 5) return 6;
  if(qCount <= PHASE_QCOUNT_EARLY_MIDDLE_MAX) return 4;
  return 1;                  // 中盤以降は精度優先(僅差のものだけでランダム)
}
function currentQuestionPhase(poolSize, qCount){
  if(poolSize <= PHASE_POOL_SIZE_LATE) return 'late';
  if(qCount <= PHASE_QCOUNT_EARLY_MAX) return 'early';
  if(qCount <= PHASE_QCOUNT_EARLY_MIDDLE_MAX) return 'early_middle';
  if(qCount >= PHASE_QCOUNT_LATE_MIN) return 'late';
  return 'middle';
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
// 各タグに11ジャンル(地理/交通/人口・行政/食/歴史・文化/観光・娯楽/学問/産業/自治体名/遊び心/その他)を割り当て、
// 「そのゲーム内で既に出たジャンル」ほど次に選ばれにくくする。これにより手動で個別調整しなくても
// 特定ジャンル(鉄道・大学など)ばかり連続しにくくなり、自然にジャンルがバラける。
const TAG_GAME_CATEGORY = {
  "hitachi_seaside_park": "観光・娯楽",
  "tsuchiura_hanabi": "観光・娯楽",
  "koga_kubo": "歴史・文化",
  "toride_geidai": "学問",
  "shimodate_gion": "観光・娯楽",
  "kamisu_gallery": "観光・娯楽",
  "tsukumai": "歴史・文化",
  "ushiku_daibutsu": "観光・娯楽",
  "kashima_jingu": "歴史・文化",
  "kokuo_jinja": "歴史・文化",
  "warp_station_edo": "観光・娯楽",
  "ryujin_ohashi": "観光・娯楽",
  "ayumizaki_park": "観光・娯楽",
  "melon_hokota": "地理",
  "ibaraki_airport": "交通",
  "makabe_district": "歴史・文化",
  "edosaki_kabocha": "食",
  "nishishioko_butai": "歴史・文化",
  "itako_ayame": "観光・娯楽",
  "oyama_hyojo": "歴史・文化",
  "uzumagawa_kura": "観光・娯楽",
  "ashikaga_gakko": "歴史・文化",
  "shiobara_onsen": "観光・娯楽",
  "nikko_toshogu": "歴史・文化",
  "kyuroku_kan": "観光・娯楽",
  "yamaage_matsuri": "観光・娯楽",
  "kanto_shinetsu_tsunagu": "遊び心",
  "tajima_yahei": "歴史・文化",
  "kiryu_nokogiri": "歴史・文化",
  "tsutsujigaoka_bunbuku": "観光・娯楽",
  "ikaho_onsen": "観光・娯楽",
  "usui_meganebashi": "観光・娯楽",
  "tomihiro_museum": "観光・娯楽",
  "fukiware_no_taki": "観光・娯楽",
  "railway_museum": "観光・娯楽",
  "toki_no_kane": "観光・娯楽",
  "koku_kinen_park": "歴史・文化",
  "misato_junction": "交通",
  "toda_boat": "歴史・文化",
  "shibusawa_eiichi": "歴史・文化",
  "konosu_hina": "観光・娯楽",
  "first_outlet": "歴史・文化",
  "jumbo_koinobori": "観光・娯楽",
  "higashimatsuyama_yakitori": "食",
  "seitenkyu": "観光・娯楽",
  "riken_hq": "学問",
  "hanawa_hokiichi": "歴史・文化",
  "sunaori_amagoi": "歴史・文化",
  "sakitama_zerifry": "観光・娯楽",
  "gongendo_sakura": "観光・娯楽",
  "hitachidai_stadium": "観光・娯楽",
  "suguyaru_ka": "歴史・文化",
  "nakayama_hokekyoji": "歴史・文化",
  "kominato_railway": "交通",
  "yatsu_higata": "地理",
  "tokyo_disney": "観光・娯楽",
  "rekihaku": "学問",
  "kikkoman_hq": "地理",
  "abiko_ekisoba": "食",
  "nomizo_no_taki": "観光・娯楽",
  "tokyo_german_village": "観光・娯楽",
  "inubosaki": "地理",
  "sawara_district": "観光・娯楽",
  "shirasato_kaigan": "地理",
  "sunosaki_lighthouse": "観光・娯楽",
  "mother_farm_nokogiri": "観光・娯楽",
  "boshu_biwa": "食",
  "ohara_hadaka": "観光・娯楽",
  "kamogawa_seaworld": "観光・娯楽",
  "katsuura_tantanmen": "食",
  "oi_keibajo": "観光・娯楽",
  "tokyo_daibutsu": "観光・娯楽",
  "showa_kinen_park": "観光・娯楽",
  "kichijoji_harmonica": "観光・娯楽",
  "takahata_hijikata": "歴史・文化",
  "shimura_ken": "遊び心",
  "tama_rokuto": "学問",
  "ghibli_museum": "観光・娯楽",
  "sanrio_puroland": "観光・娯楽",
  "mitakesan": "観光・娯楽",
  "edo_tokyo_tatemono": "観光・娯楽",
  "kurume_twin": "自治体名",
  "akishima_kujira": "歴史・文化",
  "tamako_yamato": "地理",
  "yomiuri_land": "観光・娯楽",
  "second_smallest_city": "地理",
  "hitotsubashi_univ": "学問",
  "jaxa_isas": "学問",
  "shirokoro_horumon": "食",
  "izumi_no_mori_awaodori": "観光・娯楽",
  "enoshima": "観光・娯楽",
  "omote_tanzawa": "観光・娯楽",
  "ebina_sa": "交通",
  "oyama_afuri": "歴史・文化",
  "jogashima_maguro": "観光・娯楽",
  "daiyuzan_kintaro": "観光・娯楽",
  "okutadami_dam": "観光・娯楽",
  "hokuetsu_kyoto": "観光・娯楽",
  "knit_gosen": "地理",
  "kurokawa_yuden": "歴史・文化",
  "niigata_smallest": "地理",
  "kitsune_yomeiri": "観光・娯楽",
  "ryokan_birthplace": "歴史・文化",
  "sakyu_momo": "食",
  "taishitamonja": "観光・娯楽",
  "gomadoyama_ajisai": "観光・娯楽",
  "ryugakubo": "観光・娯楽",
  "yahiko_jinja": "歴史・文化",
  "fuji_rock": "観光・娯楽",
  "tama_monorail_extension": "交通",
  "banei_keiba": "観光・娯楽",
  "ebetsu_renga": "地理",
  "kitami_hakka": "歴史・文化",
  "shikotsuko_futoko": "地理",
  "hamanasu_no_oka": "観光・娯楽",
  "northernmost_city": "地理",
  "whaling": "地理",
  "enclave_municipality": "地理",
  "honshu_northernmost": "地理",
  "honshu_easternmost": "地理",
  "honshu_westernmost": "地理",
  "honshu_southernmost": "地理",
  "japan_northernmost": "地理",
  "japan_southernmost": "地理",
  "japan_easternmost": "地理",
  "japan_westernmost": "地理",
  "shio_kazunoko": "地理",
  "canadian_world": "観光・娯楽",
  "garinko_go": "観光・娯楽",
  "nosappu_misaki": "地理",
  "hirosaki_tenshu": "歴史・文化",
  "hasshoku_center": "観光・娯楽",
  "misawa_flight": "歴史・文化",
  "ishiwari_zakura": "観光・娯楽",
  "mutsu_kokufu": "歴史・文化",
  "kanto_matsuri": "観光・娯楽",
  "kamo_kurage": "観光・娯楽",
  "uesugi_jinja": "歴史・文化",
  "jionji": "歴史・文化",
  "shinjo_matsuri": "観光・娯楽",
  "saito_mokichi": "歴史・文化",
  "hanamiyama": "観光・娯楽",
  "nanko_park": "歴史・文化",
  "nakoku_no_oka": "歴史・文化",
  "miike_tanko": "歴史・文化",
  "sakurai_futamigaura": "観光・娯楽",
  "ushikubi_sueki": "歴史・文化",
  "munakata_hetsugu": "歴史・文化",
  "goshogatani_kogoishi": "歴史・文化",
  "funabaru_kofun": "歴史・文化",
  "hikari_no_michi": "観光・娯楽",
  "tanabata_jinja": "歴史・文化",
  "nogata_meteorite": "歴史・文化",
  "yanagawa_kudari": "観光・娯楽",
  "yame_gyokuro": "観光・娯楽",
  "sakuta_no_unade": "歴史・文化",
  "tagawa_sekitan": "歴史・文化",
  "hishino_suisha": "観光・娯楽",
  "oda_hiroki_museum": "観光・娯楽",
  "kiyomizudera_teien": "歴史・文化",
  "toyota_kyushu": "地理",
  "chikugo_yoshii": "観光・娯楽",
  "karatsu_kunchi": "観光・娯楽",
  "tosu_junction": "交通",
  "okawachiyama": "歴史・文化",
  "takeo_onsen_romon": "観光・娯楽",
  "ogi_yokan": "食",
  "kunenan": "観光・娯楽",
  "yutoku_inari": "観光・娯楽",
  "ureshino_bihada": "観光・娯楽",
  "isahaya_meganebashi": "歴史・文化",
  "nagasaki_airport_omura": "交通",
  "koi_no_oyogu_machi": "観光・娯楽",
  "hara_castle": "歴史・文化",
  "unzen_jigoku": "観光・娯楽",
  "fukuejima_onidake": "観光・娯楽",
  "ajifry_seichi": "食",
  "tsushima_border": "地理",
  "mugi_shochu_iki": "歴史・文化",
  "nanatsugama_shonyudo": "観光・娯楽",
  "hirado_oranda": "歴史・文化",
  "igusa_yatsushiro": "地理",
  "sakitsu_shuraku": "歴史・文化",
  "takaba_countrypark": "観光・娯楽",
  "hiryu_no_kane": "観光・娯楽",
  "misumi_nishiko": "歴史・文化",
  "mandako_greenland": "観光・娯楽",
  "aoi_aso_jinja": "歴史・文化",
  "kusasenrigahama": "観光・娯楽",
  "takasakiyama_saru": "観光・娯楽",
  "fukuzawa_karaage": "観光・娯楽",
  "bungo_futamigaura": "観光・娯楽",
  "usa_jingu": "歴史・文化",
  "usuki_magaibutsu": "歴史・文化",
  "harajiri_no_taki": "観光・娯楽",
  "kinrinko_yufuin": "観光・娯楽",
  "oka_castle": "歴史・文化",
  "showa_no_machi": "観光・娯楽",
  "sandwich_jokamachi": "観光・娯楽",
  "futagoji": "歴史・文化",
  "tsukumi_sakura_maguro": "観光・娯楽",
  "sekinoo_taki": "観光・娯楽",
  "nobeoka_ishigaki": "歴史・文化",
  "umagase_cross": "観光・娯楽",
  "saitobaru_kofun": "歴史・文化",
  "toimisaki_uma": "観光・娯楽",
  "ebino_kogen": "観光・娯楽",
  "shirokuma_tenmonkan": "食",
  "shiobitashi_onsen": "歴史・文化",
  "kokuritsu_taiiku_univ": "学問",
  "kamou_no_okusu": "観光・娯楽",
  "tsuru_ettochi": "観光・娯楽",
  "kinsakubaru_keihan": "観光・娯楽",
  "satsumayaki_miyama": "歴史・文化",
  "bonotsu_ganjin": "歴史・文化",
  "mizonokuchi_doketsu": "観光・娯楽",
  "chiran_bukeyashiki": "歴史・文化",
  "daguri_misaki": "観光・娯楽",
  "makurazaki_station": "交通",
  "bontan_shika": "観光・娯楽",
  "teppokan": "歴史・文化",
  "satsuma_ryugakusei": "歴史・文化",
  "koza_eisa": "観光・娯楽",
  "kaichu_doro_katsuren": "観光・娯楽",
  "okinawa_convention": "観光・娯楽",
  "heiwa_kinen_himeyuri": "歴史・文化",
  "senagajima_umikaji": "観光・娯楽",
  "kabira_bay": "観光・娯楽",
  "irabu_ohashi": "観光・娯楽",
  "sefa_utaki": "歴史・文化",
  "kaike_onsen": "観光・娯楽",
  "kurayoshi_shirakabe": "観光・娯楽",
  "sesshu_teien": "歴史・文化",
  "iwami_ginzan": "歴史・文化",
  "gonokawa_kako": "地理",
  "nihon_sanmeien": "観光・娯楽",
  "horumon_udon": "食",
  "kinojo": "歴史・文化",
  "bitchu_matsuyama": "歴史・文化",
  "saijo_sake": "食",
  "mihara_tako": "観光・娯楽",
  "kiri_no_umi": "地理",
  "hiroshima_westmost": "地理",
  "anno_hideaki": "遊び心",
  "tokuyama_combinat": "観光・娯楽",
  "kintaikyo": "観光・娯楽",
  "cement_glass": "地理",
  "led_valley": "地理",
  "naruto_uzushio": "観光・娯楽",
  "kincho_tanuki": "観光・娯楽",
  "awa_dochu": "観光・娯楽",
  "mima_udatsu": "観光・娯楽",
  "iya_kazurabashi": "観光・娯楽",
  "marugame_uchiwa": "観光・娯楽",
  "chichibugahama": "観光・娯楽",
  "zenigata_sunae": "観光・娯楽",
  "setoohashi_shikoku": "交通",
  "kukai_birthplace": "歴史・文化",
  "tebukuro_industry": "地理",
  "uchinuki": "地理",
  "garyu_sanso": "観光・娯楽",
  "kezuribushi": "地理",
  "yawatahama_champon": "食",
  "seiyo_geopark": "地理",
  "botchan_theater": "観光・娯楽",
  "kochi_ryoma_airport": "交通",
  "chinkabashi": "観光・娯楽",
  "noichi_zoo": "観光・娯楽",
  "muroto_geopark": "観光・娯楽",
  "nabeyaki_ramen": "食",
  "daruma_yuhi": "観光・娯楽",
  "ashizuri_misaki": "地理",
  "tosabushi": "食",
  "yanase_museum": "観光・娯楽",
  "nagashima_nabana": "観光・娯楽",
  "suzuka_circuit": "観光・娯楽",
  "magose_hinoki": "観光・娯楽",
  "sekijuku": "歴史・文化",
  "toba_aquarium": "観光・娯楽",
  "onigajo_hananoiwaya": "観光・娯楽",
  "fujiwaradake_bairin": "観光・娯楽",
  "parque_ago": "観光・娯楽",
  "iga_ninja_basho": "歴史・文化",
  "kurokabe_chikubu": "観光・娯楽",
  "hachimanbori": "観光・娯楽",
  "biwako_ohashi_sagawa": "観光・娯楽",
  "jra_training": "観光・娯楽",
  "konan_sanzan": "歴史・文化",
  "metasequoia_shirahige": "観光・娯楽",
  "gokasho_eigenji": "歴史・文化",
  "maizuru_akarenga": "歴史・文化",
  "byodoin_uji": "歴史・文化",
  "iwashimizu_nagarebashi": "歴史・文化",
  "toyonaka_kyujo": "歴史・文化",
  "cupnoodle_museum": "観光・娯楽",
  "taiyo_no_to": "観光・娯楽",
  "mofu_izumiotsu": "地理",
  "imashirozuka_haniwa": "歴史・文化",
  "mizuma_nishikinohama": "観光・娯楽",
  "moriguchi_daikon": "歴史・文化",
  "hikari_no_kyokai": "観光・娯楽",
  "kansai_airport_city": "観光・娯楽",
  "pl_tower": "観光・娯楽",
  "naritasan_osaka": "歴史・文化",
  "kanshinji_kongoji": "歴史・文化",
  "nunose_takenouchi": "観光・娯楽",
  "nozaki_mairi": "歴史・文化",
  "ikegami_sone": "歴史・文化",
  "minoh_katsuoji": "観光・娯楽",
  "kashiwara_budo": "地理",
  "ojin_ryo_wine": "歴史・文化",
  "panasonic_hq": "地理",
  "torikai_depot": "交通",
  "takashinohama": "交通",
  "fujiidera_kannon": "歴史・文化",
  "sennan_rosegarden": "観光・娯楽",
  "shijonawate_masatsura": "歴史・文化",
  "hoshi_no_buranko": "観光・娯楽",
  "sayamaike": "歴史・文化",
  "pichipichi_beach": "観光・娯楽",
  "sumoto_castle_onsen": "観光・娯楽",
  "ashiya_yodoko": "観光・娯楽",
  "itami_sake_airport": "歴史・文化",
  "katsumeshi_kakurinji": "食",
  "tada_jinja": "歴史・文化",
  "sanda_hitohaku": "観光・娯楽",
  "kasai_globe_clock": "観光・娯楽",
  "izanagi_yumebutai": "歴史・文化",
  "tojoko_omocha": "観光・娯楽",
  "tatsuno_shoyu_somen": "食",
  "takada_sakura_jinaimachi": "観光・娯楽",
  "kingyo_yamatokoriyama": "地理",
  "tenri_shukyo_toshi": "歴史・文化",
  "kashihara_jingu": "歴史・文化",
  "miwa_somen": "食",
  "gojo_kaki_shinmachi": "観光・娯楽",
  "katsuragi_kodo": "歴史・文化",
  "ikoma_cablecar": "交通",
  "dontsurubo": "地理",
  "taimadera_sumo": "歴史・文化",
  "uda_seiyaku": "歴史・文化",
  "kuroe_shikki": "歴史・文化",
  "koyasan_gateway_pile": "地理",
  "arida_mikan": "地理",
  "shortest_private_line": "交通",
  "kumano_hongu_benkei": "歴史・文化",
  "kumano_hayatama_gotobiki": "歴史・文化",
  "kokawadera_momo": "観光・娯楽",
  "fujiko_f_birthplace": "歴史・文化",
  "shinkiro_maibotsurin": "観光・娯楽",
  "fujiko_a_buri": "歴史・文化",
  "hotaruika_museum": "観光・娯楽",
  "tulip_fair": "観光・娯楽",
  "merhen_kenchiku": "観光・娯楽",
  "gokayama_gassho": "歴史・文化",
  "kaiwomaru_bridge": "観光・娯楽",
  "wakura_notojima": "観光・娯楽",
  "komatsu_origin": "歴史・文化",
  "senmaida_shikki": "観光・娯楽",
  "rokugozaki": "地理",
  "kaga_onsenkyo": "観光・娯楽",
  "ufo_museum": "観光・娯楽",
  "shirayama_tedori": "観光・娯楽",
  "matsui_museum": "観光・娯楽",
  "kehi_jindo": "歴史・文化",
  "miketsukuni_saba": "歴史・文化",
  "echizen_ono_castle": "観光・娯楽",
  "awara_onsen": "観光・娯楽",
  "fujiq_highland": "観光・娯楽",
  "fuefuki_fruit_park": "観光・娯楽",
  "shinpu_shichirigan": "歴史・文化",
  "katakana_city_name": "自治体名",
  "kiyosato_hakushu": "観光・娯楽",
  "shingen_zutsumi": "歴史・文化",
  "isawa_onsen": "観光・娯楽",
  "katsunuma_budo": "観光・娯楽",
  "name_same_as_route": "自治体名",
  "kamikochi": "観光・娯楽",
  "sanada_bessho": "歴史・文化",
  "okaya_silk": "歴史・文化",
  "ningyogeki_tenryukyo": "観光・娯楽",
  "suzaka_garyu": "観光・娯楽",
  "kaikoen_toson": "歴史・文化",
  "takato_sakura": "観光・娯楽",
  "sauce_katsudon": "食",
  "shinpei_ipponki": "観光・娯楽",
  "alpen_route_nagano": "観光・娯楽",
  "kamakura_nanohana": "観光・娯楽",
  "naraijuku_wine": "観光・娯楽",
  "farthest_from_sea": "地理",
  "obasute_togura": "観光・娯楽",
  "unnojuku_yunomaru": "観光・娯楽",
  "wasabi_farm": "観光・娯楽",
  "nagaragawa_ukai": "観光・娯楽",
  "okuno_hosomichi_musubi": "歴史・文化",
  "hida_furuimachi": "観光・娯楽",
  "mosaic_tile_museum": "観光・娯楽",
  "magome_kurikinton": "観光・娯楽",
  "udatsu_mino": "観光・娯楽",
  "kaseki_museum": "観光・娯楽",
  "iwamura_akechi": "歴史・文化",
  "otajuku_satoyama": "観光・娯楽",
  "toki_outlet": "観光・娯楽",
  "aerospace_museum": "観光・娯楽",
  "rose_garden_akechi": "観光・娯楽",
  "fuyu_kaki_origin": "食",
  "setogawa_shirakabe": "観光・娯楽",
  "usuzumi_zakura": "観光・娯楽",
  "gujo_odori": "観光・娯楽",
  "nihon_sanmeisen": "観光・娯楽",
  "kisosansen_wajyu": "地理",
  "atami_moa": "観光・娯楽",
  "genbegawa_rakujuen": "観光・娯楽",
  "sengen_taisha": "歴史・文化",
  "omuroyama_jogasaki": "観光・娯楽",
  "horaibashi_sl": "観光・娯楽",
  "gakunan_tagonoura": "交通",
  "yaizu_katsuo": "食",
  "kakegawa_castle": "観光・娯楽",
  "soccer_town_fujieda": "観光・娯楽",
  "gotemba_outlet": "観光・娯楽",
  "ecopa_hattasan": "観光・娯楽",
  "shimoda_port": "歴史・文化",
  "fuji_safari": "観光・娯楽",
  "arai_sekisho": "歴史・文化",
  "shuzenji_toi": "観光・娯楽",
  "hamaoka_lighthouse": "地理",
  "senkagawa_fukamushi": "観光・娯楽",
  "nirayama_hansharo": "歴史・文化",
  "sagara_oil_airport": "地理",
  "masumida_keori": "歴史・文化",
  "toyokawa_inari": "歴史・文化",
  "tsushima_tenno": "歴史・文化",
  "kokonoe_mirin": "食",
  "toyota_origin_kariya": "歴史・文化",
  "toyota_hq": "地理",
  "nihon_denmark": "観光・娯楽",
  "matcha_sakushima": "食",
  "takeshima_resort": "観光・娯楽",
  "centrair_manekineko": "観光・娯楽",
  "mandaraji_fuji": "観光・娯楽",
  "komaki_castle": "歴史・文化",
  "konomiya_hadaka": "観光・娯楽",
  "nagashino_horaiji": "歴史・文化",
  "juraku_daibutsu": "観光・娯楽",
  "aichi_kenko_mori": "観光・娯楽",
  "shinmaiko_okada": "観光・娯楽",
  "kakitsubata_chiryu": "観光・娯楽",
  "owariasahi_tower": "観光・娯楽",
  "okehazama": "歴史・文化",
  "aichi_bokujo": "観光・娯楽",
  "irago_longbeach": "観光・娯楽",
  "sendohira_renkon": "観光・娯楽",
  "kiyosu_castle": "歴史・文化",
  "showa_nichijo": "観光・娯楽",
  "kingyo_yatomi": "観光・娯楽",
  "miyoshi_canoe": "観光・娯楽",
  "shippoyaki": "歴史・文化",
  "ghibli_linimo": "観光・娯楽",
  "coastal": "地理",
  "nihonkai": "地理",
  "taiheiyo": "地理",
  "setonaikai": "地理",
  "famous_mountain": "地理",
  "big_river": "地理",
  "big_bay": "地理",
  "hot_40c": "地理",
  "active_volcano": "地理",
  "uchibo": "地理",
  "sotobo": "地理",
  "silk_heritage": "歴史・文化",
  "silk_textile": "歴史・文化",
  "moka_sl_line": "交通",
  "kururi_line": "交通",
  "watarase_line": "交通",
  "oito_line": "交通",
  "shinano_railway": "交通",
  "echizen_railway": "交通",
  "nagaragawa_railway": "交通",
  "yoro_railway": "交通",
  "sunzu_line": "交通",
  "aikan_railway": "交通",
  "kurobe_torokko": "交通",
  "noto_area": "地理",
  "dinosaur_museum": "観光・娯楽",
  "echizen_washi_hamono": "歴史・文化",
  "tojinbo": "観光・娯楽",
  "jomon_venus": "歴史・文化",
  "rokkoyo": "歴史・文化",
  "mino_ware": "歴史・文化",
  "hamono_famous": "地理",
  "snow": "地理",
  "basin": "地理",
  "lakeside": "地理",
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
  "tobu_main_station": "交通",
  "tobu_tojo_station": "交通",
  "utsunomiya_station": "交通",
  "takasaki_line_station": "交通",
  
  "keisei_line": "交通",
  "tsukuba_express": "交通",
  "rinkai_line": "交通",
  "yurikamome": "交通",
  "toden_arakawa": "交通",
  "nippori_toneri": "交通",
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
  "ueno_station": "交通",
  "akabane_station": "交通",
  "nippori_station": "交通",
  "designated": "人口・行政",
  "is_town_village": "人口・行政",
  "is_tokyo_ward": "人口・行政",
  "kana_name": "人口・行政",
  "kansai_dialect": "人口・行政",
  "ryukyu_dialect": "人口・行政",
  "is_village": "人口・行政",
  "bedtown": "人口・行政",
  "nuclearpowerplant": "人口・行政",
  "monozukuri": "人口・行政",
  "noodle": "食",
  "sake": "食",
  "rice_region": "食",
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
  "twelve_castles": "歴史・文化",
  "sengoku_warlord": "歴史・文化",
  "war_damage": "歴史・文化",
  "mining_heritage": "歴史・文化",
  "gokaido_shukuba": "歴史・文化",
  "pottery_famous": "歴史・文化",
  "traditional_craft": "歴史・文化",
  "horse_racing": "歴史・文化",
  "famous_horse_breeding": "歴史・文化",
  "literary_figure": "歴史・文化",
  "imperial_palace": "歴史・文化",
  "sensoji": "歴史・文化",
  "shibamata_taishakuten": "歴史・文化",
  "monzen": "歴史・文化",
  "festival": "観光・娯楽",
  "snow_festival": "観光・娯楽",
  "onsen": "観光・娯楽",
  "famous_hanabi": "観光・娯楽",
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
  "tokyo_tower_ward": "観光・娯楽",
  "tokyo_dome_ward": "観光・娯楽",
  "skytree_ward": "観光・娯楽",
  "haneda_ward": "観光・娯楽",
  "kasai_park": "観光・娯楽",
  "broadway_nakano": "観光・娯楽",
  "koenji_area": "観光・娯楽",
  "jiyugaoka": "観光・娯楽",
  "shakujii_park": "観光・娯楽",
  "skijyou": "観光・娯楽",
  "ginza": "観光・娯楽",
  "todai_campus": "学問",
  "waseda_campus": "学問",
  "keio_campus": "学問",
  "meiji_campus": "学問",
  "rikkyo_campus": "学問",
  "chuo_campus": "学問",
  "tus_campus": "学問",
  "imperial_university": "学問",
  "tsunagari_mayu_police": "遊び心",
  "tv_station_area": "産業",
  "sazae_family": "遊び心",
  "hachiko_area": "遊び心",
  "yose_hall": "観光・娯楽",
  "sailor_moon_stage": "遊び心",
  "godzilla_head": "遊び心",
  "rakugo_stage": "遊び心",
  "sanma_famous": "遊び心",
  "kanji_one_char": "自治体名",
  "pop500k": "統計",
  "pop300k": "統計",
  "pop200k": "統計",
  "pop100k": "統計",
  "popUnder50k": "統計",
  "popUnder30k": "統計",
  "popUnder10k": "統計",
  "densityHigh": "統計",
  "densityLow": "統計",
  "areaLarge": "統計",
  "areaCompact": "統計",
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
  "sogo_dept": "観光・娯楽",
  "isetan_dept": "観光・娯楽",
  "mitsukoshi_dept": "観光・娯楽",
  "daimaru_dept": "観光・娯楽",
  "matsuzakaya_dept": "観光・娯楽",
  "funasshi_famous": "遊び心",
  "takao_mountain": "地理",
  "curry_famous": "食",
  "anime_seichi": "観光・娯楽",
  "number_in_name": "自治体名",
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
  "koshien_champion": "観光・娯楽",
  "sumo_yokozuna_ozeki": "観光・娯楽",
  "famous_cape": "地理",
  "yamata_no_orochi": "歴史・文化",
  "hibagon": "遊び心",
  "mori_motonari": "歴史・文化",
  "hiruzen_highland": "地理",
  "miyamoto_musashi_station": "遊び心",
  "akiyoshidai": "観光・娯楽",
  "mizuki_shigeru_road": "観光・娯楽",
  "yasugi_bushi": "歴史・文化",
  "gonokawa": "地理",
  "donticchi_fish": "食",
  "shokasonjuku": "歴史・文化",
  "motonosumi_shrine": "観光・娯楽",
  "bizen_ware": "歴史・文化",
  "osafune_sword_museum": "歴史・文化",
  "naoshima_gateway": "交通",
  "horseshoe_crab_museum": "観光・娯楽",
  "astronomy_city": "観光・娯楽",
  "sunameri": "観光・娯楽",
  "naval_academy": "歴史・文化",
  "goldfish_lantern": "観光・娯楽",
  "ito_hirobumi_birthplace": "歴史・文化",
  "train_factory": "産業",
  "stork": "観光・娯楽",
  "hyonosen": "地理",
  "takeda_castle": "観光・娯楽",
  "tamba_dinosaur": "学問",
  "black_soybeans": "食",
  "japan_navel": "地理",
  "miki_hardware": "産業",
  "balloon_city": "観光・娯楽",
  "saga_balloon_festa": "観光・娯楽",
  "sake_birthplace": "食",
  "peron_festival": "観光・娯楽",
  "ako_ronin": "歴史・文化",
  "awaji_puppet_theater": "歴史・文化",
  "nijigen_no_mori": "観光・娯楽",
  "akechi_mitsuhide_castle": "歴史・文化",
  "gunze_birthplace": "産業",
  "nihon_sankei": "観光・娯楽",
  "singing_sand": "観光・娯楽",
  "miyama_thatched_village": "観光・娯楽",
  "hozugawa_boat_ride": "観光・娯楽",
  "doushisha": "学問",
  "nagaoka_tenmangu": "観光・娯楽",
  "joruriji": "歴史・文化",
  "jrosyu_ume": "食",
  "ritsumeikan": "学問",
  "pm_birthplace": "歴史・文化",
  "name_has_betsu": "自治体名",
  "hokkaido_greenland": "観光・娯楽",
  "famous_prison": "観光・娯楽",
  "yakitori_famous_bibai": "食",
  "coal_mine_shaft": "歴史・文化",
  "drift_ice": "地理",
  "suffolk_sheep": "食",
  "ammonite_fossil": "観光・娯楽",
  "matsuo_jingisukan": "食",
  "sweet_road": "食",
  "least_populous_city": "人口・行政",
  "urokodango": "食",
  "bear_park": "観光・娯楽",
  "fighters_farm": "観光・娯楽",
  "bijin_town": "遊び心",
  "yoshi_ikuzo": "遊び心",
  "oirase": "地理",
  "osorezan": "観光・娯楽",
  "shakoki_dogu": "歴史・文化",
  "seibien": "観光・娯楽",
  "jodogahama": "地理",
  "goishi_coast": "地理",
  "miyazawa_kenji": "歴史・文化",
  "tensho_chi": "観光・娯楽",
  "amber_kuji": "産業",
  "tono_monogatari": "歴史・文化",
  "geibikei": "地理",
  "ipponmatsu": "観光・娯楽",
  "ohtani_shohei": "遊び心",
  "zashiki_warashi": "観光・娯楽",
  "appi_kogen": "観光・娯楽",
  "ishinomori": "歴史・文化",
  "chagu_chagu": "歴史・文化",
  "shiogama_shrine": "歴史・文化",
  "fukahire": "食",
  "shiroishi_umen": "食",
  "sendai_airport": "交通",
  "jaxa_kakuda": "学問",
  "takekoma_shrine": "歴史・文化",
  "meiji_mura": "観光・娯楽",
  "kano_eiko": "遊び心",
  "blue_impulse": "観光・娯楽",
  "naruko_onsen": "観光・娯楽",
  "town_to_city_2016": "人口・行政",
  "basketball_town": "観光・娯楽",
  "kamakura_yokote": "観光・娯楽",
  "akita_inu_hachiko": "観光・娯楽",
  "namahage": "歴史・文化",
  "inaniwa_udon": "食",
  "oyu_stone_circle": "歴史・文化",
  "yuri_kogen_railway": "交通",
  "blumen_akita": "観光・娯楽",
  "odate_noshiro_airport": "交通",
  "tdk_town": "産業",
  "kakunodate_tazawako": "観光・娯楽",
  "sankyo_soko": "歴史・文化",
  "higashizawa_rose": "観光・娯楽",
  "ayame_park": "観光・娯楽",
  "hanagasa_tendo": "歴史・文化",
  "ginzan_onsen": "観光・娯楽",
  "kumano_taisha": "歴史・文化",
  "tsuburaya_eiji": "歴史・文化",
  "matsukawaura": "地理",
  "kiku_ningyo_nihonmatsu": "観光・娯楽",
  "abukumado": "観光・娯楽",
  "kacchu_keiba": "歴史・文化",
  "anpogaki": "食",
  "william_park": "観光・娯楽",
  "natural_gas_town": "産業",
  "region_hokkaido": "地理",
  "region_tohoku": "地理",
  "region_kanto": "地理",
  "region_chubu": "地理",
  "region_kinki": "地理",
  "region_chugoku": "地理",
  "region_shikoku": "地理",
  "region_kyushu": "地理",
  "pref_hokkaido": "地理",
  "pref_aomori": "地理",
  "pref_iwate": "地理",
  "pref_miyagi": "地理",
  "pref_akita": "地理",
  "pref_yamagata": "地理",
  "pref_fukushima": "地理",
  "pref_ibaraki": "地理",
  "pref_tochigi": "地理",
  "pref_gunma": "地理",
  "pref_saitama": "地理",
  "pref_chiba": "地理",
  "pref_tokyo": "地理",
  "pref_kanagawa": "地理",
  "pref_niigata": "地理",
  "pref_toyama": "地理",
  "pref_ishikawa": "地理",
  "pref_fukui": "地理",
  "pref_yamanashi": "地理",
  "pref_nagano": "地理",
  "pref_gifu": "地理",
  "pref_shizuoka": "地理",
  "pref_aichi": "地理",
  "pref_mie": "地理",
  "pref_shiga": "地理",
  "pref_kyoto": "地理",
  "pref_osaka": "地理",
  "pref_hyogo": "地理",
  "pref_nara": "地理",
  "pref_wakayama": "地理",
  "pref_tottori": "地理",
  "pref_shimane": "地理",
  "pref_okayama": "地理",
  "pref_hiroshima": "地理",
  "pref_yamaguchi": "地理",
  "pref_tokushima": "地理",
  "pref_kagawa": "地理",
  "pref_ehime": "地理",
  "pref_kochi": "地理",
  "pref_fukuoka": "地理",
  "pref_saga": "地理",
  "pref_nagasaki": "地理",
  "pref_kumamoto": "地理",
  "pref_oita": "地理",
  "pref_miyazaki": "地理",
  "pref_kagoshima": "地理",
  "pref_okinawa": "地理",
  "kitasubaru": "学問",
  "kita_no_kuni": "観光・娯楽",
  "kita_no_shonan": "地理",
  "shizumine": "観光・娯楽",
  "shimotsuma_movie": "観光・娯楽",
  "hitachi_kokufu": "歴史・文化",
  "toyoda_castle": "観光・娯楽",
  "moriya_junction": "交通",
  "namegata_farm": "観光・娯楽",
  "hananuki": "地理",
  "happogahara": "地理",
  "kanuma_tsuchi": "産業",
  "nasu_yoichi": "歴史・文化",
  "jichi_medical": "学問",
  "bihada_onsen": "観光・娯楽",
  "moomin_park": "観光・娯楽",
  "ageo_sodou": "歴史・文化",
  "iroha_toi": "歴史・文化",
  "okegawa_benibana": "歴史・文化",
  "ishito_zakura": "観光・娯楽",
  "kinchakuda": "観光・娯楽",
  "heirinji": "歴史・文化",
  "lucky_star": "遊び心",
  "johnson_town": "観光・娯楽",
  "saika_matsuri": "観光・娯楽",
  "mizuko_kaizuka": "歴史・文化",
  "smallest_city": "地理",
  "yashio_hanamomo": "観光・娯楽",
  "yoshikawa_namazu": "食",
  "shiraoka_nashi": "食",
  "kurohama_kaizuka": "歴史・文化",
  "hanyu_yurugp": "観光・娯楽",
  "inzai_datacenter": "産業",
  "kamagaya_farm": "観光・娯楽",
  "iioka_cape": "地理",
  "tomisato_suika": "食",
  "sanbu_sugi": "産業",
  "keisei_rose": "観光・娯楽",
  "aqualine_gate": "交通",
  "yotsukaido_name": "地理",
  "onari_kaido": "歴史・文化",
  "yachimata_peanuts": "食",
  "nashibou": "観光・娯楽",
  "soza_ueki": "産業",
  "blueberry_origin": "食",
  "kishozeisei_center": "学問",
  "summerland": "観光・娯楽",
  "hamura_zeki": "歴史・文化",
  "baseside_street": "観光・娯楽",
  "zama_himawari": "観光・娯楽",
  "zushi_marina": "観光・娯楽",
  "ayase_no_station": "交通",
  "nono_odoriji": "自治体名",
  "linear_center": "交通",
  "shakou_elevator": "交通",
  "saruhashi": "地理",
  "enbaragawa": "地理",
  "sanshu_kawara": "産業",
  "nonbori_arai": "歴史・文化",
  "akame_taki": "地理",
  "oiwayama_dotaku": "歴史・文化",
  "tokaido_nakasendo": "歴史・文化",
  "koka_ninja": "観光・娯楽",
  "take_no_michi": "観光・娯楽",
  "aioi_matsu": "歴史・文化",
  "banshu_soroban_ono": "産業",
  "katsuragi_tsutsuji": "地理",
  "matabei_zakura": "観光・娯楽",
  "kishu_herazao": "産業",
  "negoroji": "歴史・文化",
  "kokusan_denim": "産業",
  "konrei_kagu": "産業",
  "nora_dokei": "観光・娯楽",
  "onga_pump": "歴史・文化",
  "koinoki": "観光・娯楽",
  "hiyoko": "食",
  "kubote_san": "地理",
  "taku_seibyo": "歴史・文化",
  "minamata_museum": "学問",
  "kikuchi_keikoku": "地理",
  "mikoshiki_coast": "地理",
  "amakusa_bridges": "交通",
  "ikoma_kogen": "観光・娯楽",
  "senbon_icho": "観光・娯楽",
  "sogi_no_taki": "地理",
  "orion_beer": "食",
  "bikan_chiku": "観光・娯楽",
  "gunkou_machi": "歴史・文化",
  "seitetsu_kouro": "人口・行政",
  "fugu_famous": "食",
  "tire_famous": "人口・行政",
  "hamburger_famous": "食",
  "kenkyu_gakuen_toshi": "人口・行政",
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
  "borders_other_pref": "地理",
  "formed_after_2000": "人口・行政",
  "national_university": "学問",
  "expressway_junction": "交通",
  "ic_doo": "交通",
  "ic_sasson": "交通",
  "ic_shiribeshi": "交通",
  "ic_doto": "交通",
  "ic_tohoku": "交通",
  "ic_hachinohe": "交通",
  "ic_aomori": "交通",
  "ic_kamaishi": "交通",
  "ic_akita": "交通",
  "ic_yamagata": "交通",
  "ic_tohoku_chuo": "交通",
  "ic_nihonkai_tohoku": "交通",
  "ic_banetsu": "交通",
  "ic_joban": "交通",
  "ic_kanetsu": "交通", "ic_joshinetsu": "交通", "ic_hokukanto": "交通", "ic_higashikanto": "交通",
  "ic_tokyo_gaikan": "交通", "ic_tateyama": "交通", "ic_shin_kuko": "交通",
  "ic_chuo": "交通", "ic_nagano": "交通", "ic_hokuriku": "交通", "ic_tokai_hokuriku": "交通", "ic_tomei": "交通", "ic_shin_tomei": "交通",
  "ic_meishin": "交通", "ic_shin_meishin": "交通", "ic_tomeihan": "交通", "ic_isewangan": "交通",
  "ic_ise": "交通", "ic_kisei": "交通", "ic_meinikan": "交通",
  "ic_kinki": "交通", "ic_hanwa": "交通", "ic_nishimeihan": "交通", "ic_maizuru_wakasa": "交通", "ic_kansai_kuko": "交通",
  "ic_chugoku": "交通", "ic_sanyo": "交通", "ic_tottori": "交通", "ic_yonago": "交通", "ic_okayama": "交通",
  "ic_hamada": "交通", "ic_matsue": "交通", "ic_onomichi": "交通", "ic_hiroshima": "交通", "ic_harima": "交通",
  "ic_takamatsu": "交通", "ic_tokushima": "交通", "ic_matsuyama": "交通", "ic_kochi": "交通",
  "ic_kyushu": "交通", "ic_higashi_kyushu": "交通", "ic_nagasaki": "交通", "ic_oita": "交通", "ic_miyazaki": "交通", "ic_okinawa": "交通",
  "hiragana_name": "自治体名",
  "hiragana_long": "自治体名",
  "direction_in_name": "自治体名",
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
  "tone_river_area": "地理","sotetsu_line": "交通",
  "hokuriku_three_pref": "地理","koshin_area": "地理","tokai_area": "地理","owari_area": "地理",
  "mikawa_area": "地理","izu_area": "地理","suruga_area": "地理","totomi_area": "地理",
  "hida_area": "地理","mino_area": "地理","hokushin_area": "地理","toshin_area": "地理",
  "chushin_area": "地理","nanshin_area": "地理",
  "meitetsu_line": "交通",
  "keihanshin_area": "人口・行政","hokusetsu_area": "地理","kawachi_area": "地理","senshu_area": "地理",
  "hanshin_area": "地理","harima_area": "地理","tajima_area": "地理","tamba_area": "地理",
  "kyoto_north": "地理","nara_basin": "地理","kii_peninsula": "地理","nankai_line": "交通",
  "glasses_industry": "地理","towel_industry": "地理","musical_instruments": "地理",
  "gold_leaf": "地理","denim_industry": "地理","pearl_farming": "地理","shipbuilding": "地理",
  "furniture_industry": "地理","washi_famous": "地理","pharmaceutical_industry": "地理","fireworks_industry": "地理","stone_industry": "地理",
  "soy_sauce_famous": "食","vinegar_famous": "食","miso_famous": "食","gyoza_famous": "食","yakisoba_famous": "食",
  "udon_famous": "食","soba_famous": "食","ramen_famous": "食","castella_famous": "食","kamaboko_famous": "食",
  "lacquerware_famous": "地理","famous_fish_catch": "食",
  "ancient_provincial_capital": "歴史・文化","kokubunji_site": "歴史・文化","traditional_buildings_district": "歴史・文化",
  "little_kyoto": "歴史・文化","giant_buddha": "歴史・文化","sea_torii": "歴史・文化","deer_in_city": "歴史・文化","gassho_zukuri": "歴史・文化",
  "shikoku_pilgrimage": "歴史・文化","olympic_venue": "歴史・文化","famous_battlefield": "歴史・文化","kitamaebune_port": "歴史・文化",
  "ferry_available": "交通","no_railway_station": "交通",
  "animal_in_name": "自治体名",
  "ariake_coast": "地理",
  "big_small_in_name": "自治体名",
  "bingo_area": "地理",
  "body_part_in_name": "自治体名",
  "chikugo_area": "地理",
  "chikuho_area": "地理",
  "chikuzen_area": "地理",
  "chugoku_mountain_basin": "地理",
  "chuyo_area": "地理",
  "color_in_name": "自治体名",
  "dosan_line": "交通",
  "four_plus_name": "自治体名",
  "fukuoka_metro": "地理",
  "hakubi_line": "交通",
  "hard_to_read_name": "自治体名",
  "hiroshima_metro": "地理",
  "honshu_bridge": "地理",
  "izumo_area": "地理",
  "kagoshima_main_line": "交通",
  "kawa_in_name": "自治体名",
  "kitakyushu_area": "地理",
  "nanyo_area": "地理",
  "new_old_in_name": "自治体名",
  "nippo_main_line": "交通",
  "nishitetsu_line": "交通",
  "northern_kyushu": "地理",
  "okinawa_main_island": "地理",
  "okinawa_south_central": "地理",
  "osumi_area": "地理",
  "paper_industry_shikoku": "歴史・文化",
  "plant_in_name": "自治体名",
  "pref_name_in_city_name": "自治体名",
  "sakishima_islands": "地理",
  "same_name_other_pref": "自治体名",
  "sanin_area": "地理",
  "sanin_main_line": "交通",
  "sanyo_area": "地理",
  "sanyo_main_line": "交通",
  "satsuma_area": "地理",
  "sea_word_in_name": "自治体名",
  "setouchi_industrial": "地理",
  "shima_in_name": "自治体名",
  "southern_kyushu": "地理",
  "ta_in_name": "自治体名",
  "toyo_area": "地理",
  "yama_in_name": "自治体名",
  "yosan_line": "交通"
};
function categoryOf(k){ return TAG_GAME_CATEGORY[k] || "その他"; }

// 遊び心系だけは特別扱い: 候補が絞れてきた終盤の「決め手」として使いたいので、
// ジャンルバランスとは別に、序盤は出にくく・終盤(候補少数)は優先させる。
const HIGH_PRIORITY_KEYS = new Set([
  'tsunagari_mayu_police','tv_station_area','sazae_family','hachiko_area','yose_hall','sailor_moon_stage','godzilla_head','rakugo_stage','sanma_famous','action_kamen','funasshi_famous','southern_seichi','yayoiken_seichi','kitanotakeshi'
]);
// 【常時加点】HIGH_PRIORITY_KEYSと違い、候補数に関わらずいつでも一定量を加点したい質問。
// (HIGH_PRIORITY_KEYSは「候補が絞れてから使う」設計で、候補が多い間はむしろ出にくくなる
// ペナルティが付くため、単純に「優先度を上げたい」という用途には合わなかった)
const ALWAYS_BOOST_KEYS = new Set([
  'nihon_sanmeien', // 日本三名園(偕楽園=水戸市・兼六園=金沢市・後楽園=岡山市)。3市を一発で見分ける決め手質問。
  'dome_stadium',   // ドーム球場(札幌市・名古屋市・大阪市・福岡市)。
  'sumo_basho',     // 大相撲の本場所(名古屋市・大阪市・福岡市)。
  'chinatown',      // 中華街(横浜市・神戸市・長崎市)。
  'sand_dunes',     // 砂丘(新潟市・鳥取市)。
]);
const ALWAYS_BOOST_AMOUNT = 40;
const FUN_ACTIVATION_POOL_SIZE = 10; // 候補がこの件数以下に絞れてから遊び心系を優先し始める
const HIGH_PRIORITY_BONUS = 45;
const HIGH_PRIORITY_EARLY_PENALTY = 15; // 序盤はむしろ少し出にくくしておく
const CATEGORY_REPEAT_PENALTY = 20; // 同じジャンルを1回出すたびに、次の選ばれやすさをこれだけ下げる

// 【統計質問(人口・面積・人口密度)の抑制】
// これらは情報利得が高く機械的に選ばれやすいが、プレイヤーには「答えづらい/わからない」
// ことが多く、出過ぎると体感が単調になる。候補がある程度絞れるまでは優先度を下げ、
// 1ゲーム中に何度も出ないようにする。
const STATS_QUESTION_KEYS = new Set([
  'pop500k','pop300k','pop100k','popUnder50k','areaLarge','areaCompact','densityHigh','densityLow'
]);
const STATS_EARLY_PENALTY = 20;      // 候補が多い序盤〜中盤で統計質問に課す一律ペナルティ
const STATS_ACTIVATION_POOL_SIZE = 6; // 候補がこの件数以下になったら統計質問の抑制を解除する
const STATS_REPEAT_PENALTY = 20;     // 同じゲーム内で統計質問を出すたびに加算する追加ペナルティ
const RECENT_CATEGORY_PENALTY = 1.5; // 直近の質問と同じジャンルに対する、軽めの追加減点

let askedCategoryCounts = {}; // ゲーム開始時にリセットする(startMode参照)
let askedStatsCount = 0; // 同一ゲーム内で出題した統計質問(人口・面積・密度)の数。startModeでリセット

const DECISIVE_BOOST = 15;      // 「今答えれば一発で決着する」質問への優遇度
// 候補がこの件数以下のときだけ、決め手質問(1市限定質問)を優遇する。
// 12件だと、残り10〜11件の場面で「〇〇に△△がある?」のような1市限定質問が
// 「新潟県ですか?」(5/10で割れる)のような効率の良い質問に競り勝ってしまい、
// 都道府県質問が50ゲーム中1回も出なかった。8件まで絞ってから優遇する。
const DECISIVE_POOL_SIZE = 8;

function priorityAdjust(k, diff, poolSize, isDecisive, groupShares){
  // 【地方ブースト(HIGH_PRIORITY_KEYSより優先)】southern_seichi(桑田佳祐の出身地)のように
  // 遊び心系(HIGH_PRIORITY_KEYS)にも登録されている決め手質問は、そのままだと
  // 「候補が絞れるまで抑制する」ロジックが先に効いてしまい、REGION_KEY_BOOSTの
  // 「地方が濃厚になったら早めに出す」という意図が発動しなくなる。地方が濃厚な場面では
  // こちらを優先させる。
  const boostGroup = REGION_KEY_BOOST_LOOKUP[k];
  if(boostGroup && poolSize <= REGION_KEY_BOOST_POOL_SIZE){
    const share = groupShares ? groupShares[boostGroup] : null;
    const regionFocused = (currentMode === boostGroup) ||
      (currentMode === 'all' && share != null && share >= REGION_KEY_BOOST_SHARE_THRESHOLD);
    if(regionFocused){
      return Math.max(0, diff - REGION_KEY_BOOST_AMOUNT);
    }
  }
  if(HIGH_PRIORITY_KEYS.has(k)){
    return poolSize <= FUN_ACTIVATION_POOL_SIZE
      ? Math.max(0, diff - HIGH_PRIORITY_BONUS)
      : diff + HIGH_PRIORITY_EARLY_PENALTY;
  }
  if(ALWAYS_BOOST_KEYS.has(k)){
    return Math.max(0, diff - ALWAYS_BOOST_AMOUNT);
  }
  // 候補が絞れてきた場面で「これに はい/いいえ が返ってきたら一発で決着する」質問は、
  // 同じジャンルが連続していても優先的に出す(杉並区のような、固有の目印タグ待ちで長引くケースを防ぐ)
  if(isDecisive && poolSize <= DECISIVE_POOL_SIZE){
    return Math.max(0, diff - DECISIVE_BOOST);
  }
  // 【東京の私鉄・鉄道路線の優先】候補が東京都の自治体に絞れてきたら、路線質問を優先して
  // 出す。23区・多摩地域の市は路線で区別できることが多いのに、路線を持つ市が少なく
  // 情報利得だけでは埋もれてしまうため(例: 府中市の京王線、東急線・京急線)。
  //  - 東京都版: 候補が絞れた段階で常に優先。
  //  - 全国版: 候補の多くが東京都の自治体になった段階(groupShares.tokyo が高い)で優先。
  if(TOKYO_RAIL_KEYS.has(k) && poolSize <= TOKYO_RAIL_POOL_SIZE){
    const tokyoShare = groupShares ? groupShares['tokyo'] : null;
    const tokyoFocused = (currentMode === 'tokyo') ||
      (currentMode === 'all' && tokyoShare != null && tokyoShare >= TOKYO_RAIL_SHARE_THRESHOLD);
    if(tokyoFocused){
      return Math.max(0, diff - TOKYO_RAIL_BOOST);
    }
  }
  const cat = categoryOf(k);
  const repeatCount = askedCategoryCounts[cat] || 0;
  // 候補が絞れてきたら、ジャンルの偏りより「早く絞り込むこと」を優先する。
  // (戸田市のように特徴タグは多いのに、ジャンル分散のせいで決め手が後回しになって
  //  質問切れになるケースを防ぐ)
  const penaltyWeight = poolSize <= DECISIVE_POOL_SIZE ? 0.4 : 1;
  let adjusted = diff + repeatCount * CATEGORY_REPEAT_PENALTY * penaltyWeight;
  // 統計質問(人口・面積・密度)は、候補が十分絞れるまで出にくくする。
  // さらに同じゲーム内で既に何問か出ていたら、その回数に応じて追加で出にくくする。
  if(STATS_QUESTION_KEYS.has(k) && poolSize > STATS_ACTIVATION_POOL_SIZE){
    adjusted += STATS_EARLY_PENALTY;
    adjusted += (askedStatsCount || 0) * STATS_REPEAT_PENALTY;
  }
  return adjusted;
}

// ==================== 都道府県質問の出題ルール ====================
// 「〇〇県にありますか?」は終盤の決め手として強力だが、序盤から出すと県名の総当たりになり
// ゲームとして面白くない。そこで、この質問だけは特別扱いして出題時期と回数を制限する。
// 判定はすべて entropyPick() の候補絞り込みで行う(スコアではなく、候補に含めるか否か)。
const PREF_QUESTION_KEYS = new Set(Object.keys(PREF_KEY_TO_NAME));
const PREF_MIN_QUESTIONS       = 8;   // これ以下の質問数では絶対に出さない(序盤は通常質問を優先)
const PREF_UNLOCK_POOL         = 15;  // 残り候補がこれ以下なら解禁
const PREF_UNLOCK_QCOUNT       = 12;  // 質問数がこれ以上なら解禁
const PREF_UNLOCK_DOMINANT     = 0.6; // 同一県が残り候補のこの割合以上を占めるなら解禁
const PREF_GAP_AFTER           = 3;   // 一度出したら、通常質問をこの数だけ挟むまで出さない
const PREF_MAX_PER_GAME        = 1;   // 1ゲームの原則上限
const PREF_MAX_RESCUE          = 2;   // 質問数が上限に近い救済時の上限
const PREF_RESCUE_REMAINING_Q  = 5;   // 残り質問数がこれ以下なら救済措置とみなす
const PREF_MIN_YES_RATIO       = 0.2; // はい側が残り候補のこの割合未満なら情報量が小さいので出さない
const PREF_MIN_YES_COUNT       = 2;   // 該当が1市だけの都道府県質問は出さない(それは1市限定質問と同じ)

// 【地方が判明した後の早期解禁】
// 「中部地方?」が判明して残り38市になった後も、愛知県内の特定施設を1市ずつ聞いてしまう。
// 本来はそこで「新潟県?」「北陸3県?」のように大きく分けたい。
// そこで、地方が絞れていて候補もそこそこ減っている場面では、質問数や候補15件を待たずに
// 都道府県質問を解禁する。回数の上限もこの場面では2回まで許す
// (1回だけだと、地方の次に県を1つ聞いた時点で打ち止めになり、県内地域まで進めないため)。
const PREF_REGION_DONE_POOL    = 60;  // 地方判明後、残り候補がこれ以下なら早期解禁
const PREF_REGION_DONE_MAX     = 2;   // 早期解禁の場面での出題上限
const PREF_AREA_RECENT_GAP     = 2;   // 直近この問数以内に地方・都道府県質問を出していたら解禁しない
// 早期解禁のときだけ、質問数の下限も緩める。
// 実測では、即時除外が効くため8問目には候補が8〜11件まで落ちており、その頃には残り候補が
// 同じ県に集中して都道府県質問の情報量がゼロになっていた(=PREF_MIN_QUESTIONS=8 が、
// 都道府県質問のいちばん有効な時期をちょうど塞いでいた)。
const PREF_REGION_DONE_MIN_Q   = 4;   // 早期解禁の場面での質問数の下限
// 早期解禁の場面で都道府県質問に与える加点(スコアは小さいほど良いので引く)。
// 加点しないと、候補9件で「秋田県ですか?」(2/7に割れる)は「名前がひらがな?」(4/5に割れる)に
// 効率で負けて、実測では50ゲーム中1回も出なかった。地名で大きく分ける流れを作るための下駄。
const PREF_BOOST_AMOUNT        = 22;
// capitalsモードで都道府県質問を解禁する候補数の目安。69件を数問(地方質問・一般質問)で
// このくらいまで絞ってから、都道府県で一気に仕上げる。
const PREF_CAPITALS_UNLOCK_POOL = 25;
// capitalsモード(県庁所在地・23区限定)専用。地方質問のブースト(60)にも対抗できるよう、
// 全国版向けの加点(22)よりずっと大きくする。都道府県ごとに候補が最大1〜2件しかない
// このモードでは、都道府県質問こそが最も効率よく絞れる手段のため。
const PREF_BOOST_AMOUNT_CAPITALS = 80;

function isPrefQuestion(key){ return PREF_QUESTION_KEYS.has(key); }

// これまでに実際に出題した都道府県質問の数と、直前に出してから何問経ったか
function prefAskedCount(){ return asked.filter(k => isPrefQuestion(k)).length; }
function questionsSinceLastPref(){
  for(let i = asked.length - 1; i >= 0; i--){
    if(isPrefQuestion(asked[i])) return asked.length - 1 - i;
  }
  return Infinity; // まだ一度も出していない
}

// 直近に地方・都道府県質問を出していないか(地名の総当たりに戻さないための歯止め)
function areaOrPrefAskedRecently(n){
  return lastDisplayedKeys(n).some(k =>
    REGION_QUESTION_KEYS.has(k) || isPrefQuestion(k) || WIDE_AREA_BOOST_KEYS.has(k));
}

// 地方が判明していて候補も減っている「都道府県質問を使いたい場面」かどうか。
// 直前2問以内に地方・都道府県質問を出していたら、地名が続いて総当たりに見えるので見送る。
function prefRegionUnlockNow(poolSize, regionDone){
  // 【capitalsモード専用】県庁所在地・東京23区限定(69件)では、47都道府県を1つずつ
  // 聞くのは非効率(1問で1件しか減らせない)。かといって「地方が判明してから」という
  // 条件は、この母集団では地方がどこも突出して多くならない(最多の関東でも42%)ため、
  // 全国版向けの閾値(0.6)では成立せず、緩めても即座に成立してしまい、地方質問による
  // 絞り込みが働かなくなる問題があった(実測で確認済み)。
  // そこで、地方の判明有無ではなく「候補数」を直接見て解禁する。序盤の一般質問・地方質問で
  // ある程度絞れてから都道府県で仕上げる、という自然な流れになる。
  if(currentMode === 'capitals'){
    return poolSize <= PREF_CAPITALS_UNLOCK_POOL && !areaOrPrefAskedRecently(PREF_AREA_RECENT_GAP);
  }
  return !!regionDone
    && poolSize <= PREF_REGION_DONE_POOL
    && !areaOrPrefAskedRecently(PREF_AREA_RECENT_GAP);
}

// 都道府県質問を今この場面で出してよいか(キー単位ではなく場面の判定)
function prefQuestionAllowedNow(poolSize, regionDone){
  const qCount = questionCount + extraQuestionCount;

  // 【地方判明後の早期解禁】地方が絞れていて候補も減っているなら、質問数を待たずに解禁する。
  // ただし地名質問が続くと総当たりに見えるので、直前2問以内に地方・都道府県質問があれば見送る。
  const regionUnlock = prefRegionUnlockNow(poolSize, regionDone);

  // 1. 序盤では出さない(早期解禁の場面だけ下限を緩める)
  const minQ = regionUnlock ? PREF_REGION_DONE_MIN_Q : PREF_MIN_QUESTIONS;
  if(qCount < minQ) return false;

  // 3. 1ゲーム原則1回。質問数が上限に近い場面と、上の早期解禁の場面は2回まで許す
  const phaseMax = effectiveMaxQ(questionPhase);
  const phaseCount = questionPhase === 'extra' ? extraQuestionCount : questionCount;
  const nearLimit = (phaseMax - phaseCount) <= PREF_RESCUE_REMAINING_Q;
  const cap = nearLimit ? PREF_MAX_RESCUE : (regionUnlock ? PREF_REGION_DONE_MAX : PREF_MAX_PER_GAME);
  if(prefAskedCount() >= cap) return false;

  // 4. 総当たり禁止: 一度出したら通常質問を3問以上挟む
  if(questionsSinceLastPref() < PREF_GAP_AFTER) return false;

  // 2. 解禁条件: 候補が少ない / 質問数が多い / 地方判明後で候補も減った のいずれか
  if(poolSize <= PREF_UNLOCK_POOL) return true;
  if(qCount >= PREF_UNLOCK_QCOUNT) return true;
  if(regionUnlock) return true;
  return false;
}

// 6. 地方質問を優先する: 地方がまだ絞れていない段階では都道府県質問を使わない。
// 「全候補が完全に1地方」まで求めると、残り候補に他地方が1市混じるだけで永久に解禁されず、
// 実測では25ゲーム中4回しか成立しなかった(=都道府県質問がほぼ死に質問になる)。
// 仕様の意図は「地方がある程度特定された後に使う」なので、最も多い地方が候補の
// REGION_DOMINANT_RATIO以上を占めていれば「特定された」とみなす。
const REGION_DOMINANT_RATIO = 0.6;
// capitalsモード(69件)は8地方に分けても最多の関東で42%程度にしかならず、
// 全国版向けの0.6という閾値では絶対に「判明」と判定されない。
// ただし①8地方質問そのもののブースト停止判定にはこの緩和閾値を使わない
// (使うと1問目から「地方判明済み」扱いになり、地方質問が全く出なくなってしまうため。実測で確認済み)。
// ②広域質問・都道府県質問の「解禁」判定にだけ、この緩和した閾値を使う。
const REGION_DOMINANT_RATIO_CAPITALS = 0.35;
function regionNarrowedDown(cities){
  if(!cities.length) return false;
  const count = {};
  for(const c of cities){
    for(const rk of REGION_QUESTION_KEYS){
      if(c.tags[rk]){ count[rk] = (count[rk] || 0) + 1; break; }
    }
  }
  const top = Math.max(0, ...Object.values(count));
  return (top / cities.length) >= REGION_DOMINANT_RATIO;
}
// ②広域質問・都道府県質問の解禁だけに使う、capitalsモードでは緩和した判定。
function regionNarrowedDownForWideUnlock(cities){
  if(!cities.length) return false;
  if(currentMode !== 'capitals') return regionNarrowedDown(cities);
  const count = {};
  for(const c of cities){
    for(const rk of REGION_QUESTION_KEYS){
      if(c.tags[rk]){ count[rk] = (count[rk] || 0) + 1; break; }
    }
  }
  const top = Math.max(0, ...Object.values(count));
  return (top / cities.length) >= REGION_DOMINANT_RATIO_CAPITALS;
}

// 【序盤〜中盤前半の地名質問ブースト】
// 地名で候補を切る質問(8地方 → 複数県にまたがる広域)は、分類が細かいほど「はい」が
// 少数派になり、情報量では半々に割れる通常質問に必ず負ける。実測では8地方の質問が
// 1問も出ないゲームばかりだった。
//
//   他の都道府県と境を接している? 382/443 → 情報量 0.996
//   関東地方ですか?               203/622 → 情報量 0.805
//   北海道地方ですか?              35/790 → 情報量 0.253
//
// しかし地名質問には情報量では測れない価値がある。答えると即時除外が働いて候補が一気に
// 減り、そのあとの「都道府県 → 県内の地方別」という流れの起点になる。
// そこで、その質問を使いたい時期に限って加点(スコアを引き下げ)を与える。
// スコアは「小さいほど良い」ので、値を引くことが優先を意味する。
//
// 【総当たりを防ぐ2つの歯止め】
// (1) はい側が少なすぎる地名質問はブーストしない
//     全部を等しく持ち上げると「北海道?→いいえ」「関東?→いいえ」「九州?→いいえ」…と
//     1つずつ潰す総当たりになり、かえって遠回りになる(実測で平均19.4→22.2問に悪化)。
//     「はい」が候補の一定割合を占めるものだけを優先すれば、当たれば一気に絞れ、
//     外れてもそれなりに減る。結果として「いま一番大きい地域から聞く」形になる。
// (2) 地名質問を出した直後は、しばらくブーストしない
//     ブーストが続くと地名質問が数問連続し、地名の総当たりに見えてしまう。
//     直近 AREA_BOOST_GAP 問以内に地名質問を出していたら加点しない(通常質問を挟ませる)。
//     ※ブーストしないだけで、その質問自体の実力で選ばれることは妨げない。
const AREA_BOOST_AMOUNT       = 60;   // 地名質問を選ばせるための加点
const AREA_BOOST_MIN_YES      = 0.15; // はい側がこの割合未満の地名質問はブーストしない
const AREA_BOOST_GAP          = 2;    // 直近この問数以内に地名質問を出していたらブーストしない
const REGION_BOOST_QCOUNT_MAX = 20;   // ①8地方: 地方が決まるまで粘る(決まれば下の regionDone で止まる)
const WIDE_AREA_BOOST_QCOUNT_MAX = 12;// ②広域: この質問数までブースト

// ②の広域質問のうち、ブースト対象にするもの(主観が混じる4件も出題時期は同じなので含める)
const WIDE_AREA_BOOST_KEYS = new Set(PHASE_EARLY_MIDDLE_KEYS);

// 直近に地名質問を出していないか(総当たり防止)
function areaQuestionAskedRecently(){
  return lastDisplayedKeys(AREA_BOOST_GAP)
    .some(k => REGION_QUESTION_KEYS.has(k) || WIDE_AREA_BOOST_KEYS.has(k));
}

function earlyRegionBoostFor(key, cities){
  if(questionPhase === 'extra') return 0;
  if(!cities.length) return 0;

  // 【capitalsモード専用】「東京23区のどれかである?」は、このモード(69件)では
  // 東京23区(23件≒33%)とそれ以外を大きく2分する強力な質問。地方質問(8地方)と同じ
  // 扱いで序盤に優先させる(ご要望により)。「23区かどうか」は8地方の絞り込みとは
  // 別の軸なので、地方が判明したかどうかでは止めない(はい割合が下がったら自然に止まる)。
  if(currentMode === 'capitals' && key === 'is_tokyo_ward'){
    if(questionCount > REGION_BOOST_QCOUNT_MAX) return 0;
    if(areaQuestionAskedRecently()) return 0;
    const yes = cities.filter(c => c.tags[key]).length;
    if((yes / cities.length) < AREA_BOOST_MIN_YES) return 0;
    return AREA_BOOST_AMOUNT;
  }

  const isRegion = REGION_QUESTION_KEYS.has(key);
  const isWide   = WIDE_AREA_BOOST_KEYS.has(key);
  if(!isRegion && !isWide) return 0;

  const regionDone = regionNarrowedDown(cities); // ①(8地方)の停止判定は常に厳格な閾値

  // ①8地方: 地方が決まるまで続ける。決まったらもう不要。
  if(isRegion){
    if(regionDone) return 0;
    if(questionCount > REGION_BOOST_QCOUNT_MAX) return 0;
  }
  // ②広域: 8地方が決まってから使う。決まる前に出すと「北関東3県?」「山陽地方?」…と
  // 全国を相手に広域名を総当たりすることになり、かえって遠回りになる。
  // capitalsモードでは、①と同じ厳格な閾値だと絶対に成立しないため緩和した判定を使う。
  else {
    if(!regionNarrowedDownForWideUnlock(cities)) return 0;
    if(questionCount > WIDE_AREA_BOOST_QCOUNT_MAX) return 0;
  }

  if(areaQuestionAskedRecently()) return 0;            // (2) 連続させない
  const yes = cities.filter(c => c.tags[key]).length;
  if((yes / cities.length) < AREA_BOOST_MIN_YES) return 0; // (1) はいが少なすぎるものは除く
  return AREA_BOOST_AMOUNT;
}

// 早期解禁の場面でだけ、都道府県質問を優先させるための加点
function prefBoostFor(key, poolSize, regionDone){
  if(!isPrefQuestion(key)) return 0;
  if(!prefRegionUnlockNow(poolSize, regionDone)) return 0;
  // capitalsモードでは、都道府県質問がこのモードの主力の絞り込み手段になるため、
  // 全国版向けの加点(PREF_BOOST_AMOUNT=22)よりも大きく優遇する。
  return currentMode === 'capitals' ? PREF_BOOST_AMOUNT_CAPITALS : PREF_BOOST_AMOUNT;
}

// capitalsモード(県庁所在地・東京23区限定)では実質ほぼ無意味な質問。
//   ・prefectural_capital(都道府県庁の所在地?) … 対象69件中67件がtrue(県庁所在地+新宿区)で絞り込み効果が薄い。
//   ・popUnder50k(人口は5万人未満?) … 県庁所在地・東京23区は基本的に人口が多く、ほぼ全件falseになる。
const CAPITALS_EXCLUDED_KEYS = new Set(['prefectural_capital', 'popUnder50k']);

function entropyPick(){
  const poolInfo = questionPhase === 'extra' ? extraPhaseCities() : topPoolCities();
  const topCities = poolInfo.cities;
  const truePoolSize = poolInfo.trueCount; // 質問選びの評価サンプル数ではなく、実際の僅差候補数
  let unused = activeKeysForMode(currentMode).filter(k => !asked.includes(k));
  // 【統計質問の重複防止】(1)人口の範囲から答えが確定している質問 (2)面積/人口密度の反対概念
  // (3)面積の直後の人口密度(またはその逆)は、そもそも候補から外す。
  unused = unused.filter(k => !isPopQuestionRedundant(k) && !isOppositeStatsAlreadyAsked(k) && !isAreaDensityBackToBack(k));

  // 【capitalsモード専用】県庁所在地・東京23区限定モードでは、都道府県を直接特定する質問
  // (pref_*、例えば「佐賀県にありますか?」)や、ほぼ無意味な質問(CAPITALS_EXCLUDED_KEYS)を
  // 出題対象から完全に除外する。「県庁所在地は当然、県名がわかれば一発で当たってしまう」ため、
  // 当てっこゲームとして単調で面白みに欠けるという判断による。地方質問・広域質問は引き続き使う。
  if(currentMode === 'capitals'){
    unused = unused.filter(k => !isPrefQuestion(k) && !CAPITALS_EXCLUDED_KEYS.has(k));
  }

  // 【都道府県質問の制限】場面の条件を満たさないときは、候補からまとめて外す。
  // 地方が絞れているか(都道府県質問の解禁判定と、早期解禁の両方で使う)
  const regionDoneNow = regionNarrowedDown(topCities);
  // capitalsモードは候補数ベースで都道府県を解禁する(prefRegionUnlockNow内で判定済み)ため、
  // 地方判明(regionDoneNow)の有無をここで別途必須にはしない。
  const prefOkNow = prefQuestionAllowedNow(truePoolSize, regionDoneNow) && (regionDoneNow || currentMode === 'capitals');
  if(!prefOkNow) unused = unused.filter(k => !isPrefQuestion(k));

  const candidateQuestions = [];
  const decisiveSet = new Set();

  // 【1市限定質問(決め手質問)を優遇してよい場面かどうか】
  // 「はい側が1市だけ」の質問は、当たれば一発で決まるが、外れると1市減るだけでほぼ無駄打ちになる。
  // 候補がまだ多い場面で出すと「〇〇市ですか?」を1件ずつ潰す総当たりに近くなり、
  // 実測では全質問の31.6%が1市限定質問、うち190回が2問連続、278回が残り20市以上の場面だった。
  // そこで、優遇するのは候補が DECISIVE_POOL_SIZE 件以下に絞れてからに限る。
  const decisiveActive = truePoolSize <= DECISIVE_POOL_SIZE;
  // 候補がまだ多いのに1市限定質問を選ぼうとしたときの減点。
  // (禁止ではなく減点。他に良い質問が無ければ選ばれる)
  const ONE_CITY_PENALTY = 25;
  // 直前も1市限定質問だったら、さらに減点して連続を避ける。
  const ONE_CITY_STREAK_PENALTY = 25;
  function oneCityPenalty(k){
    if(!decisiveSet.has(k)) return 0;
    // 【capitalsモード専用】都道府県質問は「1市限定質問の総当たり」ではなく、
    // このモードにおける本来の効率的な絞り込みそのものなので、減点の対象から外す。
    if(currentMode === 'capitals' && isPrefQuestion(k)) return 0;
    if(decisiveActive) return 0;               // 十分絞れているので優遇してよい場面
    // 【地方ブースト対象】southern_seichi(桑田佳祐の出身地)のように、地方に絞れたら
    // 積極的に出したい1市限定の決め手質問は、地方が濃厚な場面ではこのペナルティも免除する
    // (免除しないと、REGION_KEY_BOOST_AMOUNTの加点よりこのペナルティの方が大きく、
    //  地方ブーストの効果が相殺されてしまうため)。
    const boostGroup = REGION_KEY_BOOST_LOOKUP[k];
    if(boostGroup){
      const share = groupShares ? groupShares[boostGroup] : null;
      const regionFocused = (currentMode === boostGroup) ||
        (currentMode === 'all' && share != null && share >= REGION_KEY_BOOST_SHARE_THRESHOLD);
      if(regionFocused) return 0;
    }
    return ONE_CITY_PENALTY + (lastPickWasOneCity ? ONE_CITY_STREAK_PENALTY : 0);
  }

  for(const k of unused){
    const yes = topCities.filter(c=>c.tags[k]).length;
    const no = topCities.length - yes;
    if(yes===0 || no===0) continue; // 情報量ゼロの質問は除外
    // 5. 情報量が大きい場合だけ出題する: はい側が極端に少ない県質問は総当たりの入口になるので外す
    // (例: 残り10市のうち新潟県が1市だけ → 「新潟県にありますか?」は出さない)
    // 該当が1市だけの都道府県質問は、実質「その1市ですか?」と同じで総当たりになるので出さない。
    //
    // 【capitalsモード専用】県庁所在地・東京23区限定では、1つの都道府県から県庁所在地が
    // 1件しか候補に残らないため、都道府県質問は必ず「はい=1件」になる。これは全国版なら
    // 総当たりだが、capitalsモードでは「その都道府県ですか?」がそのまま「その1市ですか?」の
    // 効率的な言い換えになる(どの市にも必ず用意されている、抜け漏れのない決め手質問として使える)。
    // そのため、このモードだけ最低該当数・比率の制約を外す。
    const prefMinYesCount = currentMode === 'capitals' ? 1 : PREF_MIN_YES_COUNT;
    if(isPrefQuestion(k) && yes < prefMinYesCount) continue;
    if(isPrefQuestion(k) && currentMode !== 'capitals' && (yes / topCities.length) < PREF_MIN_YES_RATIO) continue;
    if(yes === 1 || no === 1) decisiveSet.add(k);
    candidateQuestions.push(k);
  }
  if(candidateQuestions.length === 0) return unused[0] || null;

  // 【初手のランダム化】モード開始直後の1問目は、常に同じ質問(海に面している?など)から
  // 始まると単調なので、候補全体をそれなりに分割できる良質な質問の中からランダムに選ぶ。
  // 全国では大半の特徴が少数派のため、範囲を広め(12〜88%)に取って複数の初手候補を確保する。
  // 統計・地方区分・高速道路ICは初手に向かないので除外する。
  if(asked.length === 0 && questionPhase !== 'extra'){
    const modeCities = getModeCities(currentMode);
    const opener = candidateQuestions.filter(k => {
      if(STATS_QUESTION_KEYS.has(k)) return false; // 統計質問は初手にしない
      if(/_area$|_region$/.test(k)) return false;   // 地方区分だけの質問も初手にしない
      if(IC_ROUTE_GROUPS && IC_ROUTE_GROUPS[k]) return false; // 高速道路ICも初手向きでない
      const cat = categoryOf(k);
      if(cat === '人口・行政') return false;         // 行政区分の細かい質問も初手向きでない
      const yes = modeCities.filter(c => c.tags[k]).length;
      const ratio = yes / modeCities.length;
      return ratio >= 0.12 && ratio <= 0.88;        // それなりに分割できる質問
    });
    // 候補が十分あるときだけランダム初手にする(少なすぎると毎回同じで意味がない)
    if(opener.length >= 3) return shuffle(opener)[0];
  }

  // 【質問の段階(序盤・中盤・終盤)】完全に絞り込む(ハードフィルタ)と、その段階にちょうど良い
  // 質問が無いときに情報利得の高い質問を選べず絞り込みが非効率になるため、
  // 「段階が合わない質問には軽い減点」というソフトな優先付けにする。
  // 候補が多い(序盤)ほど段階の一致を重視し、候補が絞れてくる(終盤)ほど、
  // 段階の自然さより「早く絞り込むこと」を優先する(終盤で多少ジャンルが飛ぶのは許容する)。
  // 追加質問フェーズ(最初の推測が外れた後)は、常に終盤相当として扱う。
  const nowPhase = (questionPhase === 'extra') ? 'late' : currentQuestionPhase(truePoolSize, questionCount);
  const PHASE_MISMATCH_PENALTY = 2.5;
  // 段階の効かせ具合。currentQuestionPhase() が質問数を主にしているので、ここも質問数で合わせる。
  // (候補数を基準にすると、地方質問の即時除外で候補が一気に100件以下へ落ちた瞬間に
  //  重みが0.5〜0.15まで下がり、段階の指定がほとんど効かなくなってしまう)
  // 終盤は「決め手を優先したい」ので軽くし、序盤〜中盤は段階の順序をしっかり守らせる。
  const phasePenaltyWeight = questionCount <= PHASE_QCOUNT_EARLY_MIDDLE_MAX ? 1
                           : (questionCount < PHASE_QCOUNT_LATE_MIN ? 0.6 : 0.15);
  function phasePenalty(k){
    // capitalsモードの都道府県質問は、どの段階でも優先してよい(このモードの主力の絞り込み手段)。
    if(currentMode === 'capitals' && isPrefQuestion(k)) return 0;
    // 決め手質問は段階を問わず優先する。ただし候補が十分絞れている場面に限る
    // (候補が多いうちから優先すると、1市ずつ潰す総当たりになってしまう)。
    if(decisiveSet.has(k) && decisiveActive) return 0;
    return phaseOf(k) === nowPhase ? 0 : PHASE_MISMATCH_PENALTY * phasePenaltyWeight;
  }

  // 【カテゴリ3連続防止】同じジャンルが3問以上連続しないよう、可能な限り避ける。
  // ただし、それがこの局面での決め手質問だったり、他に選べる質問が無い場合は例外として許可する。
  const nonStreak = candidateQuestions.filter(k => !wouldExceedCategoryStreak(k) || (decisiveSet.has(k) && decisiveActive));
  const finalCandidates = nonStreak.length > 0 ? nonStreak : candidateQuestions;

  // 【地方ブースト】全国版で候補が特定の地方・県に偏ってきたら、その地方限定質問を優先する。
  const groupShares = computeGroupShares(topCities);

  // 【直近3問のジャンル偏り】直前と同じカテゴリ、直近3問で多く使われたカテゴリには軽い減点を加える。
  // (askedCategoryCountsによるゲーム全体を通じた減点とは別に、局所的な「連続しすぎ」も軽く抑える)
  // ここも実際に表示した質問(history)基準。asked.slice(-3)だとEXCLUSIVE_MAPの自動除外分の
  // 残骸を見てしまい、直近ジャンル判定が崩れる。
  const recentCats = lastDisplayedKeys(3).map(categoryOf);
  function recentStreakPenalty(k){
    const cat = categoryOf(k);
    let penalty = 0;
    if(recentCats[recentCats.length-1] === cat) penalty += RECENT_CATEGORY_PENALTY; // 直前と同じ
    penalty += recentCats.filter(c => c === cat).length * (RECENT_CATEGORY_PENALTY * 0.5); // 直近3問での出現回数
    return penalty;
  }

  // 候補が多いときは計算量を抑えるため、まず1手先の診断で上位グループに絞り込む
  const prelim = finalCandidates.map(k=>{
    const yes = topCities.filter(c=>c.tags[k]).length;
    const no = topCities.length - yes;
    // 「yesが1件だけ」のような質問は、それが今の対象なら一発で決め手になる(飛び級)ので、
    // 候補が絞れてきた場面では積極的に優先する。
    const isDecisive = (yes === 1 || no === 1);
    const diff = priorityAdjust(k, Math.abs(yes - no), truePoolSize, isDecisive, groupShares) - regionBoostFor(k, groupShares)
      - earlyRegionBoostFor(k, topCities)
      + ((isDecisive && decisiveActive) ? 0 : recentStreakPenalty(k)) + phasePenalty(k) + oneCityPenalty(k)
      - prefBoostFor(k, truePoolSize, regionDoneNow);
    return { k, diff };
  }).sort((a,b)=> a.diff - b.diff);
  const shortlistSize = truePoolSize > 150 ? 20 : 12;
  const shortlist = prelim.slice(0, Math.min(shortlistSize, prelim.length)).map(s=>s.k);

  const scored = shortlist.map(k=>{
    const yesGroup = topCities.filter(c=>c.tags[k]);
    const noGroup = topCities.filter(c=>!c.tags[k]);
    const usedAfter = [...asked, k];
    const isDecisive = (yesGroup.length === 1 || noGroup.length === 1);
    // 2手目でそれぞれの枝を最も良く絞り込めた場合の「最悪残存数」を見る
    const worstYes = bestSplitDiff(yesGroup, usedAfter);
    const worstNo = bestSplitDiff(noGroup, usedAfter);
    const minimax = priorityAdjust(k, Math.max(worstYes, worstNo), truePoolSize, isDecisive, groupShares) - regionBoostFor(k, groupShares)
      - earlyRegionBoostFor(k, topCities)
      + ((isDecisive && decisiveActive) ? 0 : recentStreakPenalty(k)) + phasePenalty(k) + oneCityPenalty(k)
      - prefBoostFor(k, truePoolSize, regionDoneNow);
    return { k, minimax };
  });

  scored.sort((a, b) => a.minimax - b.minimax);
  const best = scored[0].minimax;
  // 僅差の質問はまとめてプールし、ランダムに選ぶ(毎回同じ質問順に固定されないようにする)。
  // 候補がまだ多い序盤は、多少精度を犠牲にしてもマージンを広げ、入りの質問を毎回変える。
  // (常に同じ質問から始まって単調になるのを防ぐ)。終盤は精度優先でマージンを狭く保つ。
  //
  // 【マージンだけでは足りない】
  // スコアが僅差の質問がたまたま無いと、マージンを広げても選択肢は1つのままになる。
  // 実測では序盤(1-4問目)の3割が1択で、「海に面している?」が9割のゲームで出ていた。
  // そこで、序盤は「上位から最低でもこれだけは選択肢に入れる」下限も設ける。
  // 精度への影響を抑えるため、下限で拾うのは上位のものだけ(scoredは昇順=良い順)。
  const poolMargin = truePoolSize > 150 ? 6 : (truePoolSize > 40 ? 3 : 1);
  let pool = scored.filter(s => s.minimax <= best + poolMargin).map(s => s.k);
  const minChoices = minChoicesFor(questionCount);
  if(pool.length < minChoices){
    // 下限を満たすまで上位から足す。ただし地名質問(8地方・広域)は、直前に地名質問を
    // 出していたら足さない。ここで足すと「関東?」「中部?」…と地名が連続してしまい、
    // せっかくの総当たり防止(areaQuestionAskedRecently)が骨抜きになるため。
    const areaBlocked = areaQuestionAskedRecently();
    const fill = scored.filter(s =>
      !(areaBlocked && (REGION_QUESTION_KEYS.has(s.k) || WIDE_AREA_BOOST_KEYS.has(s.k)))
    ).map(s => s.k);
    pool = fill.slice(0, Math.min(minChoices, fill.length));
    if(pool.length === 0) pool = scored.slice(0, 1).map(s => s.k); // 安全装置
  }
  const picked = shuffle(pool)[0];
  lastPickWasOneCity = decisiveSet.has(picked); // 次回の「連続させない」判定に使う

  // デバッグパネル用: 質問選択時の評価上位候補を記録しておく(ゲームロジックには影響しない)
  lastPickDiagnostics = {
    truePoolSize,
    evalSampleSize: topCities.length,
    topScored: scored.slice().sort((a,b)=>a.minimax-b.minimax).slice(0,8).map(s => ({ key: s.k, label: labelFor(s.k), score: s.minimax })),
    picked,
  };

  return picked;
}
let lastPickDiagnostics = null; // 直近のentropyPick()の内部評価(デバッグモードのみ表示)
function labelFor(k){
  const q = QUESTIONS[k] || STATS_QUESTIONS[k];
  return q ? q.text : k;
}

// おらマチ オリジナルマスコット「おらっち」(角/触角なし・まんまる目・ω口)
const MASCOT_ASSET_VERSION = 'f52e4bfff8'; // 画像を軽量化(500px→320px・減色)したので更新
const MASCOT_IMAGES = {
  normal: `mascot-normal.png?v=${MASCOT_ASSET_VERSION}`,
  wink:   `mascot-wink.png?v=${MASCOT_ASSET_VERSION}`,
  think:  `mascot-think.png?v=${MASCOT_ASSET_VERSION}`,
  happy:  `mascot-happy.png?v=${MASCOT_ASSET_VERSION}`,
  sad:    `mascot-sad.png?v=${MASCOT_ASSET_VERSION}`
};
function mascotSVG(mood, extraClass = ''){
  const src = MASCOT_IMAGES[mood] || MASCOT_IMAGES.normal;
  const className = extraClass ? `mascot ${extraClass}` : 'mascot';
  return `<img class="${className}" src="${src}" alt="おらっち" draggable="false">`;
}

// トップページ専用。1枚の画像をJavaScriptでnormal/winkへ切り替える。
// CSSアニメーションを減らす端末設定でも、指定された演出は確実に動かす。
let openingMascotTimer = null;
let openingMascotAnimations = [];
function stopOpeningMascotAnimation(){
  if(openingMascotTimer){
    clearTimeout(openingMascotTimer);
    openingMascotTimer = null;
  }
  openingMascotAnimations.forEach(animation => {
    try{ animation.cancel(); }catch(e){}
  });
  openingMascotAnimations = [];
}
function openingMascotHTML(){
  return `
    <div class="opening-mascot-shell" id="openingMascotShell">
      <div class="opening-smoke" id="openingSmoke" aria-hidden="true">
        <span class="opening-smoke-puff"></span>
        <span class="opening-smoke-puff"></span>
        <span class="opening-smoke-puff"></span>
        <span class="opening-smoke-puff"></span>
        <span class="opening-smoke-puff"></span>
        <span class="opening-smoke-puff"></span>
        <span class="opening-smoke-puff"></span>
      </div>
      <span class="opening-pon" id="openingPon" aria-hidden="true">ぽん！</span>
      <img class="mascot opening-mascot-image" id="openingMascotImage"
        src="${MASCOT_IMAGES.normal}" alt="おらっち" draggable="false">
    </div>`;
}
function startOpeningMascotAnimation(){
  stopOpeningMascotAnimation();
  const shell = document.getElementById('openingMascotShell');
  const image = document.getElementById('openingMascotImage');
  const smoke = document.getElementById('openingSmoke');
  const pon = document.getElementById('openingPon');
  if(!shell || !image) return;

  const winkPreload = new Image();
  winkPreload.src = MASCOT_IMAGES.wink;

  if(typeof image.animate === 'function'){
    // 煙の奥から小さく現れ、勢いよく「ぽん！」と飛び出して着地する。
    openingMascotAnimations.push(image.animate([
      { opacity:0, transform:'translateY(58px) scale(.16) rotate(-12deg)' },
      { opacity:1, transform:'translateY(-18px) scale(1.22) rotate(7deg)', offset:.38 },
      { opacity:1, transform:'translateY(5px) scale(.92) rotate(-4deg)', offset:.62 },
      { opacity:1, transform:'translateY(-6px) scale(1.07) rotate(2deg)', offset:.82 },
      { opacity:1, transform:'translateY(0) scale(1) rotate(0)' }
    ], { duration:1020, delay:80, easing:'cubic-bezier(.2,1.55,.35,1)', fill:'both' }));

    if(smoke){
      const smokeMoves = [
        [-58,-20],[-39,-35],[-18,-28],[8,-39],[28,-28],[47,-34],[63,-17]
      ];
      smoke.querySelectorAll('.opening-smoke-puff').forEach((puff, index) => {
        const [x,y] = smokeMoves[index] || [0,-28];
        openingMascotAnimations.push(puff.animate([
          { opacity:0, transform:'translate(0,4px) scale(.2)' },
          { opacity:.96, transform:'translate(0,0) scale(1.18)', offset:.24 },
          { opacity:.72, transform:`translate(${x * .48}px,${y * .48}px) scale(1.05)`, offset:.52 },
          { opacity:0, transform:`translate(${x}px,${y}px) scale(.7)` }
        ], { duration:900, delay:index * 35, easing:'ease-out', fill:'both' }));
      });
    }

    if(pon){
      openingMascotAnimations.push(pon.animate([
        { opacity:0, transform:'translate(-8px,10px) rotate(-8deg) scale(.35)' },
        { opacity:1, transform:'translate(4px,-3px) rotate(9deg) scale(1.28)', offset:.34 },
        { opacity:1, transform:'translate(0,0) rotate(6deg) scale(1)', offset:.72 },
        { opacity:0, transform:'translate(8px,-12px) rotate(10deg) scale(.9)' }
      ], { duration:900, delay:300, easing:'ease-out', fill:'both' }));
    }

    // 飛び出しが終わってから、トップページらしい穏やかな浮遊を続ける。
    openingMascotAnimations.push(image.animate([
      { transform:'translateY(0) rotate(-1.4deg)' },
      { transform:'translateY(-10px) rotate(1.4deg)' },
      { transform:'translateY(0) rotate(-1.4deg)' }
    ], { duration:3000, easing:'ease-in-out', iterations:Infinity, delay:1180 }));
  }else{
    image.classList.add('opening-mascot-css-fallback', 'opening-mascot-float-fallback');
    if(smoke) smoke.classList.add('opening-smoke-css-fallback');
    if(pon) pon.classList.add('opening-pon-css-fallback');
  }

  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  async function winkTwice(){
    if(!image.isConnected) return false;
    image.src = MASCOT_IMAGES.wink;
    await wait(620); // 以前より長く閉じ、ウインクだと分かるようにする
    if(!image.isConnected) return false;
    image.src = MASCOT_IMAGES.normal;
    await wait(260);
    if(!image.isConnected) return false;
    image.src = MASCOT_IMAGES.wink;
    await wait(470);
    if(!image.isConnected) return false;
    image.src = MASCOT_IMAGES.normal;
    return true;
  }
  async function winkLoop(){
    await wait(2300); // 飛び出し演出を見せてから最初のウインク
    while(image.isConnected){
      const continued = await winkTwice();
      if(!continued) break;
      await wait(4700);
    }
  }
  winkLoop();
}

// 正解画面専用。Web Animations APIで飛び出し・ジャンプ・キラキラを再生する。
function happyCelebrationMascotHTML(){
  return `
    <div class="share-mascot happy-celebration" id="happyCelebration">
      <span class="happy-sparkle happy-sparkle-1" aria-hidden="true">✦</span>
      <span class="happy-sparkle happy-sparkle-2" aria-hidden="true">★</span>
      <span class="happy-sparkle happy-sparkle-3" aria-hidden="true">✦</span>
      <span class="happy-sparkle happy-sparkle-4" aria-hidden="true">★</span>
      <div class="happy-mascot-motion" id="happyMascotMotion">${mascotSVG('happy', 'happy-mascot-image')}</div>
    </div>`;
}
function playHappyMascotAnimation(){
  const motion = document.getElementById('happyMascotMotion');
  const celebration = document.getElementById('happyCelebration');
  if(!motion || !celebration) return;

  if(typeof motion.animate === 'function'){
    motion.animate([
      { opacity:0, transform:'translateY(48px) scale(.25) rotate(-16deg)' },
      { opacity:1, transform:'translateY(-18px) scale(1.28) rotate(9deg)', offset:.34 },
      { opacity:1, transform:'translateY(5px) scale(.90) rotate(-6deg)', offset:.56 },
      { opacity:1, transform:'translateY(-8px) scale(1.12) rotate(4deg)', offset:.76 },
      { opacity:1, transform:'translateY(0) scale(1) rotate(0)' }
    ], { duration:950, easing:'cubic-bezier(.22,1.45,.36,1)', fill:'both' });

    motion.animate([
      { transform:'translateY(0) rotate(0) scale(1)' },
      { transform:'translateY(-12px) rotate(-8deg) scale(1.04)' },
      { transform:'translateY(0) rotate(0) scale(1)' },
      { transform:'translateY(-12px) rotate(8deg) scale(1.04)' },
      { transform:'translateY(0) rotate(0) scale(1)' }
    ], { duration:720, easing:'ease-in-out', iterations:3, delay:850 });

    celebration.querySelectorAll('.happy-sparkle').forEach((sparkle, index) => {
      const x = [-22, 22, 25, -25][index] || 0;
      const y = [-24, -20, 16, 14][index] || -20;
      sparkle.animate([
        { opacity:0, transform:'translate(0,8px) scale(.15) rotate(0deg)' },
        { opacity:1, transform:`translate(${x * .45}px,${y * .45}px) scale(1.45) rotate(35deg)`, offset:.35 },
        { opacity:0, transform:`translate(${x}px,${y}px) scale(.65) rotate(100deg)` }
      ], { duration:1350, easing:'ease-out', delay:180 + index * 130, fill:'both' });
    });
  }else{
    motion.classList.add('happy-mascot-css-fallback');
    celebration.classList.add('happy-sparkles-css-fallback');
  }
}

// ==================== 端末・ブラウザの「戻る」操作への対応 ====================
// 【重要】このファイルには、質問の「前の質問へ戻る」機能のために
// `let history = [];`というグローバル変数が既にあり、ブラウザ標準の `history`
// (= window.history)を覆い隠してしまっている。そのため、ここでは必ず
// `window.history.pushState(...)` のように window. を明示して参照する。
//
// 対象は、都道府県別進捗・称号コレクション・全国制覇帳などの「サブ画面」。
// ゲーム本体の質問の戻る(goBack())とは別の仕組みで、ブラウザ履歴に軽く連動させる。
let isHandlingPopState = false; // popstateの処理中に、さらにpushStateしてしまうのを防ぐフラグ
let currentNavState = { oramachiScreen: 'opening', oramachiDepth: 0 };
let currentGameFlowKind = null;  // null | 'deduction' | 'challenge'
let currentGameFlowPhase = null; // null | 'active' | 'result'
let activeGameTransientScreen = null; // null | 'answerHistory' | 'answerEdit' | 'extraIntro' | 'challengeNextHint'
let activeModalCloseStack = [];
let modalHistoryGuardHandlers = new Set();
let modalGuardRemovalPending = false;
let suppressModalGuardHistoryRemoval = false;
let explicitHistoryNavigationPending = false;

function navDepth(state){
  return state && Number.isInteger(state.oramachiDepth) && state.oramachiDepth >= 0
    ? state.oramachiDepth
    : 0;
}
function makeNavState(screen, extra, depth){
  // extra側から画面名を上書きできないよう、共通キーは最後に確定する。
  const next = Object.assign({}, extra || {});
  next.oramachiScreen = screen;
  next.oramachiDepth = Number.isInteger(depth) && depth >= 0 ? depth : 0;
  return next;
}
function currentHistoryNavState(){
  try{
    const state = window.history.state;
    if(state && state.oramachiScreen) return state;
  }catch(e){ /* history.stateが読めない環境ではメモリ上の状態を使う */ }
  return currentNavState;
}
function rememberExactNavState(state){
  currentNavState = makeNavState(
    state && state.oramachiScreen ? state.oramachiScreen : 'opening',
    state || {},
    navDepth(state)
  );
  return currentNavState;
}
function sameNavRoute(a, b){
  if(!a || !b) return false;
  const comparable = state => Object.keys(state)
    .filter(key => key !== 'oramachiDepth')
    .sort()
    .map(key => `${key}:${JSON.stringify(state[key])}`)
    .join('|');
  return comparable(a) === comparable(b);
}
function pushNavState(screen, extra){
  if(isHandlingPopState) return;
  const previous = currentHistoryNavState();
  const sameDepthState = makeNavState(screen, extra, navDepth(previous));
  try{
    if(previous.oramachiModalGuard){
      // 深さ0の案内モーダルを表示したまま別画面へ進んだ場合は、案内を閉じ、
      // 番兵entryをそのまま次画面へ置換して余分な「トップ→トップ」を残さない。
      closeGuardedModalsBeforeNavigation();
      const next = makeNavState(screen, extra, navDepth(previous) + 1);
      currentNavState = next;
      window.history.replaceState({ ...next }, '');
      return;
    }
    // 結果画面から制覇帳などへ進む場合、結果DOMは履歴から再構築できない。
    // 現在entryを次画面へ置き換え、戻る時に「トップ→トップ」の空振りを残さない。
    if(previous.oramachiScreen === 'game' && previous.gamePhase === 'result' && screen !== 'game'){
      currentNavState = sameDepthState;
      window.history.replaceState({ ...sameDepthState }, '');
      return;
    }
    if(sameNavRoute(previous, sameDepthState)){
      currentNavState = sameDepthState;
      window.history.replaceState({ ...sameDepthState }, '');
      return;
    }
    const next = makeNavState(screen, extra, navDepth(previous) + 1);
    currentNavState = next;
    window.history.pushState({ ...next }, '');
  }catch(e){
    // historyが使えない環境でも、画面内の戻る判定に使う状態だけは更新する。
    currentNavState = sameDepthState;
  }
}
function replaceNavState(screen, extra){
  if(isHandlingPopState) return;
  const next = makeNavState(screen, extra, navDepth(currentHistoryNavState()));
  currentNavState = next;
  try{
    window.history.replaceState({ ...next }, '');
  }catch(e){ /* 同上 */ }
}
function replaceExactNavState(state){
  const next = rememberExactNavState(state);
  try{ window.history.replaceState({ ...next }, ''); }
  catch(e){ /* 同上 */ }
}
// モーダルごとの後始末(キーイベント解除・フォーカス復元等)を保ったまま、
// 端末の戻る操作から最前面のモーダルを閉じるための共通登録口。
function registerActiveModalClose(handler, options){
  if(typeof handler !== 'function') return;
  // 同じモーダルの再登録は1件にまとめ、最後に開いたものを常に最前面とする。
  activeModalCloseStack = activeModalCloseStack.filter(item => item !== handler);
  activeModalCloseStack.push(handler);
  if(options && options.ensureHistoryEntry){
    modalHistoryGuardHandlers.add(handler);
    try{
      const state = currentHistoryNavState();
      if(!state.oramachiModalGuard){
        window.history.pushState({ ...state, oramachiModalGuard: true }, '');
      }
    }catch(e){ /* 番兵を作れない環境では将来のnative back APIだけで閉じる */ }
  }
}
function unregisterActiveModalClose(handler){
  if(!handler){
    activeModalCloseStack = [];
    modalHistoryGuardHandlers.clear();
    return;
  }
  activeModalCloseStack = activeModalCloseStack.filter(item => item !== handler);
  const wasGuarded = modalHistoryGuardHandlers.delete(handler);
  if(wasGuarded && modalHistoryGuardHandlers.size === 0 && !suppressModalGuardHistoryRemoval){
    try{
      const state = window.history.state;
      if(state && state.oramachiModalGuard){
        modalGuardRemovalPending = true;
        window.history.back();
      }
    }catch(e){ modalGuardRemovalPending = false; }
  }
}
function closeActiveModalFromBack(){
  if(activeModalCloseStack.length === 0) return { closed: false, wasGuarded: false, historyGuardConsumed: false };
  const close = activeModalCloseStack.pop();
  const wasGuarded = modalHistoryGuardHandlers.delete(close);
  let historyGuardConsumed = false;
  if(wasGuarded){
    try{ historyGuardConsumed = !(window.history.state && window.history.state.oramachiModalGuard); }
    catch(e){ historyGuardConsumed = false; }
  }
  try{ close(); }catch(e){ console.warn('おらマチ: モーダルを閉じられませんでした', e); }
  return { closed: true, wasGuarded, historyGuardConsumed };
}
function closeGuardedModalsBeforeNavigation(){
  if(modalHistoryGuardHandlers.size === 0) return;
  const handlers = activeModalCloseStack.filter(handler => modalHistoryGuardHandlers.has(handler)).reverse();
  suppressModalGuardHistoryRemoval = true;
  try{
    handlers.forEach(handler => {
      activeModalCloseStack = activeModalCloseStack.filter(item => item !== handler);
      modalHistoryGuardHandlers.delete(handler);
      try{ handler(); }catch(e){ console.warn('おらマチ: 案内モーダルを閉じられませんでした', e); }
    });
  } finally {
    suppressModalGuardHistoryRemoval = false;
  }
}
// popstateは既に1つ前の履歴へ移動した後に届く。戻る操作を画面内で消費した場合は、
// 直前の画面状態を1件だけ積み直す。これによりキャンセルを繰り返しても履歴が増殖しない。
function restoreCurrentNavEntry(){
  try{ window.history.pushState({ ...currentNavState }, ''); }
  catch(e){ /* 履歴を戻せなくても、現在画面とゲーム状態は維持する */ }
}
function closeTransientGameLayerFromBack(){
  if(questionHelpOpen && document.getElementById('questionHelpPanel')){
    toggleQuestionHelp();
    return true;
  }
  if(activeGameTransientScreen === 'answerEdit'){
    renderAnswerHistoryPanel();
    return true;
  }
  if(activeGameTransientScreen === 'answerHistory'){
    closeAnswerHistoryPanel();
    return true;
  }
  if(activeGameTransientScreen === 'extraIntro'){
    renderQuestion();
    return true;
  }
  if(activeGameTransientScreen === 'challengeNextHint'){
    renderChallengeMode();
    return true;
  }
  return false;
}
function activeGameFlowKind(){
  if(currentNavState.oramachiScreen !== 'game') return null;
  if(currentNavState.gamePhase !== 'active') return null;
  return currentNavState.gameKind === 'deduction' || currentNavState.gameKind === 'challenge'
    ? currentNavState.gameKind
    : null;
}
function confirmLeaveActiveGame(kind){
  if(kind === 'challenge'){
    return window.confirm('挑戦状を終了してトップ画面へ戻りますか？');
  }
  return window.confirm('トップ画面へ戻りますか？\n途中のゲームは保存され、「続きから」で再開できます。');
}
function normalizeHistoryNavState(state){
  const depth = navDepth(state);
  const screen = state && state.oramachiScreen;
  const known = new Set([
    'opening', 'conquestLog', 'conquestMap', 'dailyChallengeHistory',
    'prefectureCards', 'prefectureDetail', 'achievements', 'stats'
  ]);
  // ゲーム画面は質問ごとのDOMを履歴に保存していないため、forward等で古いgame entryへ
  // 移動した場合は安全なトップへ正規化する。
  if(screen === 'game' || !known.has(screen)) return makeNavState('opening', null, depth);
  if(screen === 'prefectureDetail'){
    const pref = typeof state.pref === 'string' ? state.pref : '';
    const exists = Array.isArray(CITIES) && CITIES.some(city => city.pref === pref && city.name !== '東京');
    if(!exists) return makeNavState('opening', null, depth);
    return makeNavState('prefectureDetail', { pref }, depth);
  }
  return makeNavState(screen, null, depth);
}
function renderNavStateFromHistory(state){
  const st = normalizeHistoryNavState(state);
  replaceExactNavState(st);
  if(st.oramachiScreen === 'opening'){ renderOpening(); }
  else if(st.oramachiScreen === 'conquestLog'){ renderConquestLog(); }
  else if(st.oramachiScreen === 'conquestMap'){ renderConquestMapView(); }
  else if(st.oramachiScreen === 'dailyChallengeHistory'){ renderDailyChallengeHistory(); }
  else if(st.oramachiScreen === 'prefectureCards'){ renderPrefectureCards(); }
  else if(st.oramachiScreen === 'prefectureDetail'){ renderPrefectureDetail(st.pref); }
  else if(st.oramachiScreen === 'achievements'){ renderAchievementsPage(); }
  else if(st.oramachiScreen === 'stats'){ renderStatsPage(); }
  else { renderOpening(); }
}
// ゲーム開始時に呼ぶ。「ここから戻ったらトップ画面」という目印だけを履歴に積む。
// 質問が進むたびに呼ぶ必要はない(質問ごとに履歴を積むと、既存の「前の質問へ戻る」ボタンと
// 二重管理になってしまうため)。もう一度あそぶ等で連続してゲームを開始した場合は、
// 履歴を無駄に積み増さないよう、既に'game'状態ならpushではなくreplaceにする。
function pushGameNavState(kind){
  currentGameFlowKind = kind === 'challenge' ? 'challenge' : 'deduction';
  currentGameFlowPhase = 'active';
  const extra = { gameKind: currentGameFlowKind, gamePhase: currentGameFlowPhase };
  const cur = currentHistoryNavState();
  if(cur && cur.oramachiScreen === 'game') replaceNavState('game', extra);
  else pushNavState('game', extra);
}
function markGameNavResult(kind){
  currentGameFlowKind = kind === 'challenge' ? 'challenge' : 'deduction';
  currentGameFlowPhase = 'result';
  replaceNavState('game', { gameKind: currentGameFlowKind, gamePhase: currentGameFlowPhase });
}
function finishActiveGameForBack(kind){
  activeGameTransientScreen = null;
  if(kind === 'challenge') challengeGameState = null;
  currentGameFlowKind = null;
  currentGameFlowPhase = null;
  if(currentNavState.oramachiScreen === 'game'){
    currentNavState = { ...currentNavState, gamePhase: 'ended' };
  }
}
function navigateBackOr(fallback){
  if(navDepth(currentNavState) > 0){
    try{ window.history.back(); return; }
    catch(e){ /* 下の安全な戻り先を使う */ }
  }
  if(typeof fallback === 'function') fallback();
}
function navigateToOpening(){
  const depth = navDepth(currentNavState);
  if(depth > 0){
    explicitHistoryNavigationPending = true;
    try{ window.history.go(-depth); return; }
    catch(e){ explicitHistoryNavigationPending = false; }
  }
  renderOpening();
}
function handleBackRequest(options){
  const opts = options || {};
  const modalResult = closeActiveModalFromBack();
  if(modalResult.closed){
    if(opts.historyAlreadyMoved && !modalResult.historyGuardConsumed){
      restoreCurrentNavEntry();
    } else if(!opts.historyAlreadyMoved && modalResult.wasGuarded){
      try{
        if(window.history.state && window.history.state.oramachiModalGuard){
          modalGuardRemovalPending = true;
          window.history.back();
        }
      }catch(e){ modalGuardRemovalPending = false; }
    }
    return true;
  }
  if(closeTransientGameLayerFromBack()){
    if(opts.historyAlreadyMoved) restoreCurrentNavEntry();
    return true;
  }
  const activeKind = activeGameFlowKind();
  if(activeKind){
    if(!confirmLeaveActiveGame(activeKind)){
      if(opts.historyAlreadyMoved) restoreCurrentNavEntry();
      return true;
    }
    finishActiveGameForBack(activeKind);
    if(opts.historyAlreadyMoved) renderNavStateFromHistory(opts.targetState);
    else navigateToOpening();
    return true;
  }
  if(opts.historyAlreadyMoved){
    renderNavStateFromHistory(opts.targetState);
    return true;
  }
  if(navDepth(currentNavState) > 0){
    try{ window.history.back(); return true; }
    catch(e){ /* 呼び出し元がアプリ終了等へフォールバックできるようfalseを返す */ }
  }
  return false;
}
window.oramachiBackNavigation = {
  registerModalClose: registerActiveModalClose,
  unregisterModalClose: unregisterActiveModalClose,
  requestBack: () => handleBackRequest({ historyAlreadyMoved: false }),
};
try{
  window.addEventListener('popstate', function(ev){
    isHandlingPopState = true;
    try{
      if(modalGuardRemovalPending){
        modalGuardRemovalPending = false;
        replaceExactNavState(normalizeHistoryNavState(ev.state));
        return;
      }
      if(explicitHistoryNavigationPending){
        explicitHistoryNavigationPending = false;
        finishActiveGameForBack(activeGameFlowKind());
        renderNavStateFromHistory(ev.state);
        return;
      }
      handleBackRequest({ historyAlreadyMoved: true, targetState: ev.state });
    } finally {
      isHandlingPopState = false;
    }
  });
}catch(e){ /* 古い環境などでaddEventListener自体が無い場合も、ゲーム本体は動き続ける */ }

function renderOpening(){
  activeGameTransientScreen = null;
  currentGameFlowKind = null;
  currentGameFlowPhase = null;
  stampsEl.innerHTML = '';
  replaceNavState('opening'); // トップ画面は履歴を積み増さず、常に「今の状態」を置き換える

  const niigataCount = CITIES.filter(c => c.pref === '新潟県').length;
  const tokyoCount = CITIES.filter(c => c.pref === '東京都' && c.name !== '東京').length;
  // 「全国◯自治体」のような数字は、cities.jsonの実データから毎回算出する(手打ちの固定値にしない)。
  // 「東京」は23区の集計用データなので対象自治体数には含めない。
  const totalCount = CITIES.filter(c => c.name !== '東京').length;
  const capitalsCount = getModeCities('capitals').length;
  const resumeCardHtml = renderGameResumeCardHtml();

  stage.innerHTML = `
    <div class="mascot-wrap opening-mascot-wrap">${openingMascotHTML()}</div>

    <!-- 【キャッチコピー】5秒で内容が伝わることを優先し、文章は増やしすぎない。
         優先順位: ①キャラクター ②メインコピー ③開始ボタン ④説明 ⑤今日の挑戦者数 -->
    <h1 class="catch-copy" id="catchCopy">あなたの地元、<br class="catch-copy-br">おらっちが当てます。</h1>
    ${resumeCardHtml}
    <button class="mode-btn mode-btn-primary" onclick="startMode('all')">
      <span class="mode-title">全国版で遊ぶ</span>
      <span class="mode-desc">日本全国${totalCount.toLocaleString('ja-JP')}市区町村から、あなたの地元を当てます</span>
    </button>
    <p class="catch-copy-sub">
      日本全国${totalCount.toLocaleString('ja-JP')}市区町村に対応！<br>
      「はい」「いいえ」で答えるだけ。おらっちがあなたの地元を推理します。
    </p>

    ${renderDailyChallengeCardHtml()}

    <div class="mode-select">
      <div class="mode-sub-head">初めての方におすすめ</div>
      <button class="mode-btn" onclick="startMode('capitals')">
        <span class="mode-title">入門版（県庁所在地・東京23区）</span>
        <span class="mode-desc">都道府県庁所在地（新宿区を含む）か東京23区の、どれか1つを思い浮かべてください</span>
        <span class="mode-count">現在 ${capitalsCount} 自治体</span>
      </button>

      <div class="mode-sub-head">地域をしぼってあそぶ</div>
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

    <div class="challenge-entry-card">
      <div class="challenge-entry-title">📜 おらマチからの挑戦状</div>
      <div class="challenge-entry-desc">ヒントを頼りに、おらっちが選んだマチを当てよう！</div>
      <button class="challenge-entry-btn" onclick="startChallengeMode()">挑戦状を受け取る</button>
    </div>

    <div class="opening-sub-nav">
      <button class="conquest-entry-btn" onclick="renderConquestLog()">📖 全国制覇帳</button>
      <button class="conquest-entry-btn" onclick="renderAchievementsPage()">🏅 称号一覧</button>
      <button class="conquest-entry-btn" onclick="renderStatsPage()">📊 みんなの統計</button>
    </div>
    <div id="liveStatsTop">${renderStatsBlock()}</div>
  `;

  // DOMへ追加した次のフレームで登場・浮遊・ウインクを開始する。
  requestAnimationFrame(startOpeningMascotAnimation);
  footEl.textContent = `対応エリア 日本全国 ${totalCount} 市区町村`;
  trackGaEvent('catchcopy_view'); // キャッチコピーの表示計測(GA4)
  reportTodayVisitorOnce(); // 「今日の挑戦者数」の集計用(今日まだ未送信の場合のみ)
}

// ==================== 全国制覇帳 画面 ====================
const REGION_ORDER = ['北海道','東北','関東','中部','近畿','中国','四国','九州・沖縄'];

// ==================== 称号一覧ページ ====================
const ACHIEVEMENT_CATEGORY_LABELS = {
  all: 'すべて', basic: '基本', speed: 'スピード', streak: '連続正解',
  region: '地方制覇', unique: 'おらマチ独自', attribute: '属性', style: '回答スタイル',
  collection: 'コレクション', hidden: '隠し称号',
};
let achievementFilter = 'all'; // 現在選択中のフィルタ(カテゴリ名 または 'all'/'unlocked'/'locked')

function formatAchievementDate(iso){
  if(!iso) return '';
  try{
    const d = new Date(iso);
    return `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日獲得`;
  }catch(e){ return ''; }
}

// ==================== みんなの統計ページ ====================
// 【設計】このページで見せる「みんなの統計」(苦戦した自治体・当てやすい自治体など)は、
// 全ユーザー分のプレイ結果を集計しないと出せない値のため、サーバー側(Google Apps Script)の
// 集計結果(liveStats.statsDetail)を使う。GAS側がまだこの集計に対応していない場合は
// statsDetailがundefinedのままなので、「集計中です」という案内を表示し、
// 存在しないデータをでっち上げて表示することはしない。
// 現在の公開APIが返すのは累計値だけ。期間別APIが実装・検証されるまでは、
// ラベルだけが切り替わる誤解を招くタブを表示しない。

function renderStatsPage(){
  stampsEl.innerHTML = '';
  pushNavState('stats');
  trackGaEvent('stats_page_view');

  // 「データ好き」称号: 統計ページを初めて見た時刻を記録する。
  const stats = loadStats();
  if(!stats.statsPageViewedAt){
    stats.statsPageViewedAt = new Date().toISOString();
    saveStats(stats);
    const unlocked = checkAchievements(null);
    if(unlocked.length){
      // トップページ以外(このページ)で獲得した場合も、称号自体はきちんと記録される。
      // 演出はページ下部に軽く出す(結果画面のような大きなトーストは、統計ページの文脈に合わないため)。
      setTimeout(() => {
        const box = document.getElementById('statsAchievementNotice');
        if(box) box.innerHTML = renderAchievementToastCard(unlocked);
      }, 0);
    }
  }

  const detail = liveStats && liveStats.statsDetail;

  const body = detail ? renderStatsDetailBody(detail) : `
    <div class="stats-empty">
      <p>まだ「みんなの統計」を集計できるだけのデータが揃っていません。</p>
      <p class="stats-empty-sub">プレイが増えると、苦戦した自治体ランキングなどが表示されるようになります。</p>
    </div>`;

  stage.innerHTML = `
    <div class="mascot-wrap"><div class="pop">${mascotSVG('think')}</div></div>
    <div class="bubble"><span class="icon">📊</span>みんなの統計だべ</div>
    <div id="statsPageBody">${body}</div>
    <div id="statsAchievementNotice"></div>
    <button class="link-btn" onclick="navigateToOpening()">トップへ戻る</button>
  `;
  updateDebugPanel();
}

// 自治体ランキング(苦戦した/当てやすい/質問数が多い・少ない)を1つのテーブルとして描画する共通処理
function renderCityRankingList(list, valueLabel, valueFormatter){
  if(!list || list.length === 0) return `<div class="stats-ranking-empty">まだ十分なデータがありません</div>`;
  return `<ol class="stats-ranking-list">
    ${list.slice(0, 10).map(row => `
      <li>
        <span class="stats-ranking-name">${escapeHtml(row.pref)} ${escapeHtml(row.name)}</span>
        <span class="stats-ranking-value">${valueFormatter(row)}</span>
      </li>`).join('')}
  </ol>`;
}

function renderStatsDetailBody(detail){
  const sampleNote = detail.minSampleSize
    ? `<p class="stats-sample-note">※プレイ${detail.minSampleSize}回以上の自治体のみを集計対象にしています</p>`
    : '';
  return `
    <div class="stats-section">
      <div class="stats-section-title">📈 全体のプレイ状況</div>
      <div class="stats-overview-grid">
        <div class="stats-overview-item"><div class="v">${liveStats.todayPlays ?? '–'}</div><div class="l">今日のプレイ回数</div></div>
        <div class="stats-overview-item"><div class="v">${liveStats.totalPlays ?? '–'}</div><div class="l">累計プレイ回数</div></div>
        <div class="stats-overview-item"><div class="v">${detail.overallAccuracy != null ? detail.overallAccuracy.toFixed(1) + '%' : '–'}</div><div class="l">全体正答率</div></div>
        <div class="stats-overview-item"><div class="v">${detail.overallAvgQuestions != null ? detail.overallAvgQuestions.toFixed(1) + '問' : '–'}</div><div class="l">全体平均質問数</div></div>
      </div>
    </div>

    <div class="stats-section">
      <div class="stats-section-title">😵 みんなが苦戦した自治体</div>
      ${renderCityRankingList(detail.hardestCities, '正答率', row => `正答率 ${row.accuracy.toFixed(1)}%／平均${row.avgQuestions.toFixed(1)}問`)}
    </div>

    <div class="stats-section">
      <div class="stats-section-title">🎯 最も当てやすい自治体</div>
      ${renderCityRankingList(detail.easiestCities, '正答率', row => `正答率 ${row.accuracy.toFixed(1)}%／平均${row.avgQuestions.toFixed(1)}問`)}
    </div>

    <details class="stats-more">
      <summary>もっと見る</summary>
      <div class="stats-section">
        <div class="stats-section-title">🐢 平均質問数が多い自治体</div>
        ${renderCityRankingList(detail.mostQuestionsCities, '平均質問数', row => `平均${row.avgQuestions.toFixed(1)}問`)}
      </div>
      <div class="stats-section">
        <div class="stats-section-title">⚡ 平均質問数が少ない自治体</div>
        ${renderCityRankingList(detail.fewestQuestionsCities, '平均質問数', row => `平均${row.avgQuestions.toFixed(1)}問`)}
      </div>
    </details>
    ${sampleNote}
    <p class="stats-period-note">集計期間: 累計</p>
  `;
}

// 「今日のチャレンジ」の過去の達成記録一覧。トップページの「記録を見る」から開く。
function renderDailyChallengeHistory(){
  stampsEl.innerHTML = '';
  pushNavState('dailyChallengeHistory');
  const data = loadDailyChallengeData();
  const total = data.completedDates.length;
  const sortedHistory = [...data.history].sort((a, b) => b.date.localeCompare(a.date));

  const streakHtml = data.currentStreak >= 2
    ? `<div class="daily-challenge-history-streak">🔥 現在${data.currentStreak}日連続達成中(最長${data.maxStreak}日)</div>`
    : (data.maxStreak >= 2 ? `<div class="daily-challenge-history-streak">これまでの最長連続記録: ${data.maxStreak}日</div>` : '');

  const stampsHtml = sortedHistory.length
    ? `<div class="daily-challenge-stamp-grid">${sortedHistory.map(h => `
        <div class="daily-challenge-stamp-item" title="${escapeHtml(h.themeText || '')}">
          <div class="daily-challenge-stamp-item-date">${escapeHtml(h.date.slice(5).replace('-', '/'))}</div>
        </div>`).join('')}</div>`
    : `<div class="conquest-muted">まだ達成記録がありません。今日のチャレンジに挑戦してみましょう！</div>`;

  stage.innerHTML = `
    <div class="mascot-wrap"><div class="pop">${mascotSVG('normal')}</div></div>
    <div class="bubble"><span class="icon">📅</span>チャレンジ記録</div>
    <div class="conquest-summary">
      <div class="conquest-summary-main">これまで ${total} 日達成</div>
    </div>
    ${streakHtml}
    <div class="conquest-section-title">達成スタンプ</div>
    ${stampsHtml}
    <button class="again" onclick="navigateToOpening()">トップ画面へ戻る</button>
  `;
  updateDebugPanel();
}

function renderAchievementsPage(){
  stampsEl.innerHTML = '';
  pushNavState('achievements');
  const ctx = buildAchievementContext(null);
  const stats = ctx.stats;
  const unlockedCount = Object.keys(stats.unlockedAchievements).length;
  const totalCount = ACHIEVEMENTS.length;

  const filterButtons = ['all','unlocked','locked', ...Object.keys(ACHIEVEMENT_CATEGORY_LABELS).filter(k=>k!=='all')]
    .map(f => {
      const label = f === 'all' ? 'すべて' : f === 'unlocked' ? '獲得済み' : f === 'locked' ? '未獲得' : ACHIEVEMENT_CATEGORY_LABELS[f];
      const active = achievementFilter === f ? ' active' : '';
      return `<button class="achievement-filter-btn${active}" onclick="setAchievementFilter('${f}')">${label}</button>`;
    }).join('');

  let list = ACHIEVEMENTS.slice();
  if(achievementFilter === 'unlocked') list = list.filter(a => stats.unlockedAchievements[a.id]);
  else if(achievementFilter === 'locked') list = list.filter(a => !stats.unlockedAchievements[a.id]);
  else if(achievementFilter !== 'all') list = list.filter(a => a.category === achievementFilter);

  // 獲得済みは獲得順、未獲得はカテゴリ順で後ろに並べる(要求「獲得した順」を基本に、見やすさのため未獲得を後方へ)
  const unlockedList = list.filter(a => stats.unlockedAchievements[a.id])
    .sort((a,b) => stats.achievementOrder.indexOf(a.id) - stats.achievementOrder.indexOf(b.id));
  const lockedList = list.filter(a => !stats.unlockedAchievements[a.id]);
  const orderedList = [...unlockedList, ...lockedList];

  const cardsHtml = orderedList.map(a => {
    const unlocked = stats.unlockedAchievements[a.id];
    const isHiddenLocked = a.hidden && !unlocked;
    const name = isHiddenLocked ? '？？？' : a.name;
    const desc = isHiddenLocked ? '解除条件：？？？' : a.description;
    const stars = '★'.repeat(a.rarity) + '☆'.repeat(5 - a.rarity);
    const dateLine = unlocked ? formatAchievementDate(unlocked.unlockedAt) : '未獲得';
    return `
      <div class="achievement-card${unlocked ? ' unlocked' : ' locked'}">
        <div class="achievement-card-stars">${stars}</div>
        <div class="achievement-card-name">${name}</div>
        <div class="achievement-card-desc">${desc}</div>
        <div class="achievement-card-date">${dateLine}</div>
      </div>`;
  }).join('');

  stage.innerHTML = `
    <div class="mascot-wrap"><div class="pop">${mascotSVG('normal')}</div></div>
    <div class="bubble"><span class="icon">🏅</span>称号コレクション</div>
    <div class="conquest-summary">
      <div class="conquest-summary-main">獲得 ${unlockedCount}／${totalCount}</div>
    </div>
    <div class="achievement-filter-row">${filterButtons}</div>
    <div class="achievement-grid">${cardsHtml || '<div class="conquest-muted">該当する称号がありません</div>'}</div>
    <button class="link-btn" onclick="navigateBackOr(renderConquestLog)">← 前の画面へ戻る</button>
    <button class="again" onclick="navigateToOpening()">トップ画面へ戻る</button>
  `;
}
function setAchievementFilter(f){
  achievementFilter = f;
  renderAchievementsPage();
}

// ==================== 都道府県カード画面 ====================
// 達成率に応じた色分けクラスを返す(色だけに頼らず、文字・アイコンでも状態を示す)。
// ==================== 全国制覇帳: 日本地図 ====================
// 以前の四角いタイル表ではなく、japan-map-data.js に収録した47都道府県の
// 実際の輪郭を使ってSVGを組み立てる。北海道・本州・四国・九州・沖縄の
// 位置関係が一目で分かり、各都道府県の輪郭自体をタップできる。
const JAPAN_MAP_VIEWBOX = [0, 0, 438, 516];

function japanMapPaths(){
  const data = window.ORAMACHI_JAPAN_MAP;
  return data && data.paths ? data.paths : {};
}

// 達成率(0〜1)から地図タイルの塗り色を決める。prefTierInfo()の分類(未着手/挑戦中/達成中/
// コンプリート)と統一しておく(地図とカード一覧で同じ基準になるように)。
function mapTileColorFor(done, total){
  if(total <= 0 || done <= 0) return '#e4e0d0'; // 未着手: 薄いグレージュ
  const pct = done / total;
  if(pct >= 1) return '#D4A017';                // コンプリート: 金色
  if(pct >= 0.5) return '#C1432E';               // 達成中(50%以上): 濃い朱色
  return '#E8A798';                              // 挑戦中(50%未満): 薄い朱色
}

// 日本地図全体のSVGを組み立てる。prefGroupsは { 都道府県名: {total, done} } の形。
// clickable=trueなら輪郭をタップ・キーボード操作できる。小さな都府県も押しやすいよう、
// 同じパスを透明な太線で重ねてヒット領域を少し広げている。
function buildJapanMapSvg(prefGroups, options){
  options = options || {};
  const paths = japanMapPaths();
  const [vx, vy, vw, vh] = (window.ORAMACHI_JAPAN_MAP && window.ORAMACHI_JAPAN_MAP.viewBox) || JAPAN_MAP_VIEWBOX;

  const shapes = Object.keys(paths).map(pref => {
    const g = prefGroups[pref] || { total: 0, done: 0 };
    const color = mapTileColorFor(g.done, g.total);
    const isComplete = g.total > 0 && g.done >= g.total;
    const pct = g.total > 0 ? Math.round(100 * g.done / g.total) : 0;
    const cls = `map-pref${isComplete ? ' map-pref-complete' : ''}`;
    const interaction = options.clickable
      ? ` role="button" tabindex="0" onclick="onMapTileClick('${pref}')" onkeydown="onMapPrefKeydown(event,'${pref}')" onmouseenter="showMapPrefPreview('${pref}',${g.done},${g.total})" onfocus="showMapPrefPreview('${pref}',${g.done},${g.total})"`
      : ' class="map-pref-static"';
    const classAttr = options.clickable ? ` class="${cls}"` : '';
    const aria = `${pref}、${g.done}／${g.total}マチ、達成率${pct}%`;
    return `<g${classAttr}${interaction} data-pref="${pref}" aria-label="${aria}">
      <title>${aria}</title>
      ${options.clickable ? `<path class="map-pref-hit" d="${paths[pref]}"/>` : ''}
      <path class="map-pref-shape" d="${paths[pref]}" fill="${color}"
        stroke="${isComplete ? '#8a6d00' : '#fffdf5'}" stroke-width="${isComplete ? 1.35 : 0.72}"/>
    </g>`;
  }).join('');

  return `<svg viewBox="${vx} ${vy} ${vw} ${vh}" xmlns="http://www.w3.org/2000/svg" class="japan-map-svg" aria-label="都道府県別の全国制覇地図" role="img" preserveAspectRatio="xMidYMid meet">${shapes}</svg>`;
}

function prefTierInfo(done, total){
  if(total <= 0 || done <= 0) return { cls: 'pref-tier-0', icon: '☆', label: '未着手' };
  const pct = done / total;
  if(pct >= 1) return { cls: 'pref-tier-complete', icon: '🏆', label: 'コンプリート' };
  if(pct >= 0.5) return { cls: 'pref-tier-high', icon: '●', label: '達成中' };
  return { cls: 'pref-tier-low', icon: '◐', label: '挑戦中' };
}

function renderPrefectureCards(){
  stampsEl.innerHTML = '';
  pushNavState('prefectureCards');
  const ctx = buildAchievementContext(null);
  const normalCities = ctx.normalCities;
  const prefOrder = [...new Set(normalCities.map(c => c.pref))];

  // 地方ごとにグループ分けする
  const byRegion = {};
  prefOrder.forEach(p => {
    const r = regionOf(p);
    (byRegion[r] = byRegion[r] || []).push(p);
  });

  const sectionsHtml = REGION_ORDER.filter(r => byRegion[r]).map(r => {
    const cardsHtml = byRegion[r].map(p => {
      const g = ctx.prefGroups[p] || { total: 0, done: 0 };
      const pct = g.total > 0 ? Math.round(100 * g.done / g.total) : 0;
      const tier = prefTierInfo(g.done, g.total);
      return `
        <button class="pref-card ${tier.cls}" onclick="renderPrefectureDetail('${p}')">
          <div class="pref-card-icon">${tier.icon}</div>
          <div class="pref-card-name">${p}</div>
          <div class="pref-card-count">${g.done}／${g.total}マチ</div>
          <div class="pref-card-pct">${pct}%</div>
        </button>`;
    }).join('');
    return `
      <div class="pref-region-section">
        <div class="conquest-section-title">${r}</div>
        <div class="pref-card-grid">${cardsHtml}</div>
      </div>`;
  }).join('');

  stage.innerHTML = `
    <div class="mascot-wrap"><div class="pop">${mascotSVG('normal')}</div></div>
    <div class="bubble"><span class="icon">🗾</span>都道府県別進捗</div>
    <div class="conquest-hint" style="margin-bottom:10px;">現在収録されている自治体を基準にした達成率です。カードをタップすると詳細を見られます。</div>
    ${sectionsHtml}
    <button class="link-btn" onclick="navigateBackOr(renderConquestLog)">← 前の画面へ戻る</button>
    <button class="again" onclick="navigateToOpening()">トップ画面へ戻る</button>
  `;
}

function renderPrefectureDetail(pref){
  stampsEl.innerHTML = '';
  pushNavState('prefectureDetail', { pref });
  const data = loadConquest();
  const conqueredIds = new Set(Object.keys(data.entries));
  const cities = CITIES.filter(c => c.pref === pref && c.name !== '東京');
  const done = cities.filter(c => conqueredIds.has(cityId(c)));
  const notDone = cities.filter(c => !conqueredIds.has(cityId(c)));
  const total = cities.length;
  const rate = total > 0 ? Math.round(100 * done.length / total) : 0;

  const doneHtml = done.length ? done.map(c => {
    const e = data.entries[cityId(c)];
    return `<div class="conquest-city-row">${c.name} ・ 自己ベスト${e.minQuestions}問 ・ ${e.count}回正解</div>`;
  }).join('') : '<div class="conquest-muted">まだありません</div>';

  // 未正解自治体は名前を表示しているが、将来「？？？」表示へ切り替えやすいよう
  // cityNameForUnsolvedDisplay()を経由する(現時点では実名をそのまま返す)。
  function cityNameForUnsolvedDisplay(c){ return c.name; }
  const notDoneHtml = notDone.length ? notDone.map(c => `<div class="conquest-city-row conquest-muted">${cityNameForUnsolvedDisplay(c)}</div>`).join('') : '<div class="conquest-muted">すべて正解済みです！</div>';

  stage.innerHTML = `
    <div class="mascot-wrap"><div class="pop">${mascotSVG('normal')}</div></div>
    <div class="bubble"><span class="icon">🗾</span>${pref}</div>
    <div class="conquest-summary">
      <div class="conquest-summary-main">${done.length}／${total}マチ を制覇(${rate}%)</div>
    </div>
    <details class="conquest-details" open>
      <summary>正解済み自治体(${done.length}件)</summary>
      <div class="conquest-city-list">${doneHtml}</div>
    </details>
    <details class="conquest-details">
      <summary>未正解自治体(${notDone.length}件)</summary>
      <div class="conquest-city-list">${notDoneHtml}</div>
    </details>
    <button class="link-btn" onclick="navigateBackOr(renderPrefectureCards)">← 前の画面へ戻る</button>
    <button class="again" onclick="navigateToOpening()">トップ画面へ戻る</button>
  `;
}

// 都道府県タイルをタップしたときの処理。既存の詳細画面をそのまま使う
// (達成自治体数・対象自治体数・達成率・正解済み/未制覇自治体の一覧は、
//  renderPrefectureDetail() が既に表示している)。
function onMapTileClick(pref){
  trackGaEvent('conquest_map_pref_tap', { pref });
  renderPrefectureDetail(pref);
}

function onMapPrefKeydown(event, pref){
  if(event.key === 'Enter' || event.key === ' '){
    event.preventDefault();
    onMapTileClick(pref);
  }
}

// マウスやキーボードで都道府県を選んだとき、地図のすぐ下に名前と進捗を表示する。
// スマートフォンではタップすると詳細画面へ移動するため、title/aria-labelが補助となる。
function showMapPrefPreview(pref, done, total){
  const el = document.getElementById('mapPrefPreview');
  if(!el) return;
  const pct = total > 0 ? Math.round(100 * done / total) : 0;
  el.textContent = `${pref}　${done}／${total}マチ制覇（${pct}%）`;
}

// 全国制覇帳の「地図で見る」タブ。実際の都道府県輪郭を持つ日本地図で
// 達成状況を色分け表示する。一覧表示(renderConquestLog)とはボタンで切り替えられる。
// ==================== 全国制覇帳: 日本地図の画像共有 ====================
// generateShareImageCanvas()(結果画面用)と同じ考え方で、外部ライブラリなしの
// Canvas 2D APIだけで、地図と達成状況をまとめた画像を作る。
function roundRectPath(ctx, x, y, w, h, r){
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

async function generateConquestMapImageCanvas(){
  const ctx2 = buildAchievementContext(null);
  const prefGroups = ctx2.prefGroups;
  const total = normalCityCount();
  const conqueredCount = ctx2.distinctCount;
  const rate = total > 0 ? (100 * conqueredCount / total).toFixed(1) : '0.0';

  const canvas = document.createElement('canvas');
  canvas.width = SHARE_IMAGE_W;
  canvas.height = SHARE_IMAGE_H;
  const ctx = canvas.getContext('2d');
  if(!ctx) return null;

  ctx.fillStyle = '#F7F1E3';
  ctx.fillRect(0, 0, SHARE_IMAGE_W, SHARE_IMAGE_H);
  ctx.strokeStyle = 'rgba(38,58,92,0.15)';
  ctx.lineWidth = 6;
  ctx.strokeRect(18, 18, SHARE_IMAGE_W - 36, SHARE_IMAGE_H - 36);

  const FONT = "'Hiragino Sans','Yu Gothic','Meiryo',sans-serif";

  // ロゴ
  const logoY = 80;
  ctx.beginPath(); ctx.arc(90, logoY, 38, 0, Math.PI*2); ctx.fillStyle = '#263A5C'; ctx.fill();
  ctx.fillStyle = '#263A5C';
  ctx.font = `bold 40px ${FONT}`;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'left';
  ctx.fillText('おらマチ', 140, logoY);

  // タイトル・達成率
  ctx.textAlign = 'center';
  ctx.font = `bold 36px ${FONT}`;
  ctx.fillStyle = '#263A5C';
  ctx.fillText('全国制覇帳', SHARE_IMAGE_W/2, 170);
  ctx.font = `bold 64px ${FONT}`;
  ctx.fillStyle = '#C1432E';
  ctx.fillText(`達成率 ${rate}%`, SHARE_IMAGE_W/2, 240);
  ctx.font = `32px ${FONT}`;
  ctx.fillStyle = '#3a3a34';
  ctx.fillText(`${conqueredCount} / ${total} 自治体を制覇`, SHARE_IMAGE_W/2, 290);

  // 実際の都道府県輪郭をCanvasへ描画する。DOM表示と同じパス・色分けを使うため、
  // 画面では地図なのに共有画像だけタイル表になる、という食い違いを起こさない。
  const paths = japanMapPaths();
  const [, , sourceW, sourceH] = (window.ORAMACHI_JAPAN_MAP && window.ORAMACHI_JAPAN_MAP.viewBox) || JAPAN_MAP_VIEWBOX;
  const mapAreaW = 720;
  const mapAreaH = 820;
  const scale = Math.min(mapAreaW / sourceW, mapAreaH / sourceH);
  const drawnW = sourceW * scale;
  const drawnH = sourceH * scale;
  const mapX0 = (SHARE_IMAGE_W - drawnW) / 2;
  const mapY0 = 330;

  // 海を思わせる薄い背景で、日本列島の輪郭を読み取りやすくする。
  ctx.fillStyle = '#EDF4F2';
  roundRectPath(ctx, mapX0 - 36, mapY0 - 20, drawnW + 72, drawnH + 40, 28);
  ctx.fill();

  ctx.save();
  ctx.translate(mapX0, mapY0);
  ctx.scale(scale, scale);
  Object.keys(paths).forEach(pref => {
    const g = prefGroups[pref] || { total: 0, done: 0 };
    const isComplete = g.total > 0 && g.done >= g.total;
    const path = new Path2D(paths[pref]);
    ctx.fillStyle = mapTileColorFor(g.done, g.total);
    ctx.fill(path);
    ctx.strokeStyle = isComplete ? '#8a6d00' : '#fffdf5';
    ctx.lineWidth = isComplete ? 1.35 : 0.72;
    ctx.lineJoin = 'round';
    ctx.stroke(path);
  });
  ctx.restore();

  // 共有画像内にも色の意味を明記する。
  const legendY = 1205;
  const legend = [
    ['#e4e0d0', '未着手'], ['#E8A798', '50%未満'],
    ['#C1432E', '50%以上'], ['#D4A017', 'コンプリート']
  ];
  ctx.font = `22px ${FONT}`;
  ctx.textBaseline = 'middle';
  let legendX = 142;
  legend.forEach(([color, label]) => {
    ctx.fillStyle = color;
    roundRectPath(ctx, legendX, legendY - 12, 24, 24, 5);
    ctx.fill();
    ctx.strokeStyle = 'rgba(38,58,92,.22)'; ctx.lineWidth = 1; ctx.stroke();
    ctx.fillStyle = '#5f5a50'; ctx.textAlign = 'left';
    ctx.fillText(label, legendX + 34, legendY + 1);
    legendX += label === 'コンプリート' ? 0 : 210;
  });

  // フッター(サイト名)
  ctx.textAlign = 'center';
  ctx.font = `28px ${FONT}`;
  ctx.fillStyle = '#8a8578';
  ctx.fillText('おらマチ | oramachi-jp.com', SHARE_IMAGE_W/2, SHARE_IMAGE_H - 60);

  return canvas;
}

async function shareConquestMapImage(){
  const statusEl = document.getElementById('mapShareStatus');
  const setStatus = (msg) => { if(statusEl) statusEl.textContent = msg; };

  trackGaEvent('share', { method: 'image_button', content_type: 'conquest_map' });
  trackGaEvent('share_button_click', { method: 'conquest_map_image' });

  setStatus('画像を作成しています…');
  let canvas;
  try{
    canvas = await generateConquestMapImageCanvas();
    if(canvas) trackGaEvent('share_image_generated', { content_type: 'conquest_map' });
  }catch(e){
    console.warn('おらマチ: 制覇地図の画像生成に失敗しました', e);
    canvas = null;
  }
  if(!canvas){ setStatus('画像の生成に失敗しました。しばらくしてからもう一度お試しください。'); return; }

  const blob = await canvasToBlob(canvas);
  if(!blob){ setStatus('画像の生成に失敗しました。しばらくしてからもう一度お試しください。'); return; }

  const fileName = 'oramachi_conquest_map.png';
  const file = (typeof File !== 'undefined') ? new File([blob], fileName, { type: 'image/png' }) : null;
  const text = 'おらマチの全国制覇帳だべ！ #おらマチ';
  const pageUrl = location.href.split('#')[0];

  // 1. Web Share API(画像ファイル対応)
  if(file && navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share){
    try{
      await navigator.share({ files: [file], text, url: pageUrl, title: 'おらマチ 全国制覇帳' });
      setStatus('');
      trackGaEvent('share_completed', { method: 'web_share_api', content_type: 'conquest_map' });
      incrementShareCount();
      return;
    }catch(e){
      if(e && e.name === 'AbortError'){ setStatus(''); trackGaEvent('share_cancelled', { method: 'web_share_api' }); return; }
      console.warn('おらマチ: 地図画像の共有に失敗したため保存にフォールバックします', e);
    }
  }

  // 2. 画像を端末へ保存(ダウンロード)
  try{
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    setStatus('画像を保存しました。SNSアプリなどから画像を選んで共有してください。');
    trackGaEvent('share_completed', { method: 'image_download', content_type: 'conquest_map' });
    incrementShareCount();
  }catch(e){
    console.warn('おらマチ: 地図画像の保存に失敗しました', e);
    setStatus('画像の保存に対応していない環境です。');
  }
}

function renderConquestMapView(){
  stampsEl.innerHTML = '';
  pushNavState('conquestMap');
  const ctx = buildAchievementContext(null);
  const prefGroups = ctx.prefGroups;
  const total = normalCityCount();
  const conqueredCount = ctx.distinctCount;
  const rate = total > 0 ? (100 * conqueredCount / total).toFixed(1) : '0.0';

  // 100%制覇した都道府県の一覧(特別表示用)
  const completedPrefs = Object.keys(prefGroups).filter(p => {
    const g = prefGroups[p];
    return g.total > 0 && g.done >= g.total;
  });
  // 完全制覇した地方の一覧(お祝い演出用)
  const completedRegions = REGION_ORDER.filter(r => ctx.regionFullyConquered(r));

  const mapSvg = buildJapanMapSvg(prefGroups, { clickable: true });

  const celebrationHtml = completedRegions.length
    ? `<div class="map-celebration">🎉 ${completedRegions.join('・')}地方を制覇しました！</div>`
    : '';
  const completedPrefsHtml = completedPrefs.length
    ? `<div class="map-completed-line">🏆 100%制覇: ${completedPrefs.join('、')}</div>`
    : '';

  stage.innerHTML = `
    <div class="mascot-wrap"><div class="pop">${mascotSVG('normal')}</div></div>
    <div class="bubble"><span class="icon">🗾</span>日本地図で見る全国制覇帳</div>

    <div class="conquest-summary">
      <div class="conquest-summary-main">収録自治体 ${conqueredCount}／${total} を制覇(${rate}%)</div>
    </div>
    ${celebrationHtml}

    <div class="japan-map-wrap" id="japanMapWrap">${mapSvg}</div>
    <div class="map-pref-preview" id="mapPrefPreview" aria-live="polite">都道府県に触れると進捗を表示します</div>

    <div class="map-legend">
      <span class="map-legend-item"><span class="map-legend-swatch" style="background:#e4e0d0"></span>未着手</span>
      <span class="map-legend-item"><span class="map-legend-swatch" style="background:#E8A798"></span>挑戦中(50%未満)</span>
      <span class="map-legend-item"><span class="map-legend-swatch" style="background:#C1432E"></span>達成中(50%以上)</span>
      <span class="map-legend-item"><span class="map-legend-swatch" style="background:#D4A017"></span>★コンプリート</span>
    </div>
    ${completedPrefsHtml}
    <div class="conquest-hint">都道府県の形をタップすると詳細を見られます。小さな都府県はカード表示からも選べます。</div>

    <div class="map-share-row">
      <button class="share-btn-text" id="mapShareBtn" onclick="shareConquestMapImage()">📸 地図を画像でシェア</button>
    </div>
    <div id="mapShareStatus" class="share-image-status"></div>

    <div class="conquest-nav-row">
      <button class="link-btn" onclick="navigateBackOr(renderConquestLog)">← 前の画面へ戻る</button>
      <button class="link-btn" onclick="renderPrefectureCards()">🗂️ カード表示で見る</button>
    </div>
    <button class="again" onclick="navigateToOpening()">トップ画面へ戻る</button>
  `;
  trackGaEvent('conquest_map_view');
}

function renderConquestLog(){
  stampsEl.innerHTML = '';
  pushNavState('conquestLog');
  const data = loadConquest();
  const normalCities = CITIES.filter(c => c.name !== '東京');
  const total = normalCityCount();
  const conqueredIds = new Set(Object.keys(data.entries));
  const conqueredCount = normalCities.filter(c => conqueredIds.has(cityId(c))).length;
  const rate = total > 0 ? (100 * conqueredCount / total).toFixed(1) : '0.0';

  // 都道府県別
  const prefGroups = {};
  normalCities.forEach(c => {
    const g = (prefGroups[c.pref] = prefGroups[c.pref] || { total: 0, done: 0 });
    g.total++;
    if(conqueredIds.has(cityId(c))) g.done++;
  });
  const prefOrder = [...new Set(normalCities.map(c => c.pref))];
  const prefListHtml = prefOrder.map(p => {
    const g = prefGroups[p];
    return `<div class="conquest-pref-row"><span class="conquest-pref-name">${p}</span><span class="conquest-pref-count">${g.done}／${g.total}自治体</span></div>`;
  }).join('');

  // 地方別
  const regionGroups = {};
  normalCities.forEach(c => {
    const r = regionOf(c.pref);
    const g = (regionGroups[r] = regionGroups[r] || { total: 0, done: 0 });
    g.total++;
    if(conqueredIds.has(cityId(c))) g.done++;
  });
  const regionListHtml = REGION_ORDER.filter(r => regionGroups[r]).map(r => {
    const g = regionGroups[r];
    const pct = g.total > 0 ? Math.round(100 * g.done / g.total) : 0;
    return `
      <div class="conquest-region-row">
        <div class="conquest-region-head"><span>${r}</span><span>${pct}%(${g.done}／${g.total})</span></div>
        <div class="conquest-region-bar"><div class="conquest-region-bar-fill" style="width:${pct}%"></div></div>
      </div>`;
  }).join('');

  // 最近当てた自治体・正解回数が多い自治体
  const entryList = Object.values(data.entries);
  const recent = entryList.slice().sort((a,b) => new Date(b.lastAt) - new Date(a.lastAt)).slice(0, 8);
  const mostFrequent = entryList.slice().sort((a,b) => b.count - a.count).filter(e => e.count > 1).slice(0, 8);
  const unconquered = normalCities.filter(c => !conqueredIds.has(cityId(c))).slice(0, 30);

  stage.innerHTML = `
    <div class="mascot-wrap"><div class="pop">${mascotSVG('normal')}</div></div>
    <div class="bubble"><span class="icon">📖</span>全国制覇帳</div>

    <div class="conquest-summary">
      <div class="conquest-summary-main">収録自治体 ${conqueredCount}／${total} を制覇(${rate}%)</div>
      <div class="conquest-hint">※現在ゲームに収録している自治体を基準にした制覇率です。日本の全自治体を制覇したという意味ではありません。</div>
    </div>

    <div class="conquest-section-title">地方別の進捗</div>
    <div class="conquest-region-list">${regionListHtml || '<div class="conquest-muted">データがありません</div>'}</div>

    <div class="conquest-nav-row">
      <button class="link-btn" onclick="renderConquestMapView()">🗺️ 日本地図で見る</button>
      <button class="link-btn" onclick="renderPrefectureCards()">🗾 都道府県別進捗をカードで見る</button>
      <button class="link-btn" onclick="renderAchievementsPage()">🏅 称号一覧を見る</button>
    </div>

    <details class="conquest-details">
      <summary>都道府県別の一覧(現在収録中の自治体を基準)</summary>
      <div class="conquest-pref-list">${prefListHtml}</div>
    </details>

    <details class="conquest-details">
      <summary>最近当てた自治体(${recent.length}件)</summary>
      <div class="conquest-city-list">${recent.length ? recent.map(e => `<div class="conquest-city-row">${e.name}(${e.pref}) ・ 最少${e.minQuestions}問</div>`).join('') : '<div class="conquest-muted">まだありません</div>'}</div>
    </details>

    <details class="conquest-details">
      <summary>正解回数が多い自治体(${mostFrequent.length}件)</summary>
      <div class="conquest-city-list">${mostFrequent.length ? mostFrequent.map(e => `<div class="conquest-city-row">${e.name}(${e.pref}) ・ ${e.count}回正解</div>`).join('') : '<div class="conquest-muted">2回以上正解した自治体はまだありません</div>'}</div>
    </details>

    <details class="conquest-details">
      <summary>未制覇の自治体(先頭30件)</summary>
      <div class="conquest-city-list">${unconquered.length ? unconquered.map(c => `<div class="conquest-city-row conquest-muted">${c.name}(${c.pref})</div>`).join('') : '<div class="conquest-muted">すべて制覇済みです！</div>'}</div>
    </details>

    <details class="conquest-details">
      <summary>⚙️ 設定</summary>
      <div class="settings-block">
        <label class="settings-toggle-row">
          <input type="checkbox" id="anonymousReportingToggle" ${isAnonymousReportingEnabled() ? 'checked' : ''} onchange="toggleAnonymousReporting(this.checked)">
          <span>匿名のプレイ結果をゲーム改善のため送信する</span>
        </label>
        <p class="settings-hint">オフにすると、プレイ結果の自動送信が止まります(訂正フォームを送信ボタンで送る場合は、この設定に関わらず送信されます)。詳しくは<a href="./privacy.html" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>をご覧ください。</p>

        <div class="save-io-block">
          <div class="save-io-title">全国制覇帳のバックアップ</div>
          <p class="settings-hint">機種変更などに備えて、制覇帳のデータをファイルに書き出したり、読み込んで復元したりできます。</p>
          <div class="save-io-actions">
            <button class="link-btn" onclick="exportSaveData()">📤 セーブデータを書き出す</button>
            <button class="link-btn" id="importSaveDataBtn" onclick="openImportSaveFileDialog()">📥 セーブデータを読み込む</button>
          </div>
          <div id="saveIoStatus" class="settings-hint" aria-live="polite"></div>
        </div>

        <button class="danger-btn" onclick="confirmDeleteConquest()">全国制覇帳の記録を削除する</button>
        <div id="deleteConquestStatus"></div>
      </div>
    </details>

    <button class="again" onclick="navigateToOpening()">トップ画面へ戻る</button>
  `;
}

function toggleAnonymousReporting(checked){
  appSettings.anonymousReporting = !!checked;
  saveSettings(appSettings);
}

// 制覇記録の削除。誤操作防止のため二段階で確認する。
function confirmDeleteConquest(){
  const first = confirm('全国制覇帳の記録をすべて削除しますか？\nこの操作は元に戻せません。');
  if(!first) return;
  const second = confirm('本当によろしいですか？もう一度確認します。\n削除すると、これまでの正解記録・最少質問数の記録もすべて消えます。');
  if(!second) return;
  try{
    localStorage.removeItem(CONQUEST_STORAGE_KEY);
    const statusEl = document.getElementById('deleteConquestStatus');
    if(statusEl) statusEl.textContent = '削除しました。';
    renderConquestLog();
  }catch(e){
    console.warn('おらマチ: 制覇帳の削除に失敗しました', e);
    const statusEl = document.getElementById('deleteConquestStatus');
    if(statusEl) statusEl.textContent = '削除に失敗しました。';
  }
}

// ==================== これまでの回答/回答変更 ====================
// 指定インデックスの回答を書き換えた上で、ゲーム開始時点から全回答を再生し、
// 状態(scorePool・excludedNames・地元バレポイント用のanswerLog等)を正しく再構築する。
// 「これまでの回答」一覧から回答を変更したときに呼ばれる。
//
// 設計方針: 既存の answer()/renderQuestion() のコア処理(applyAnswerCore/pushQuestionState)を
// そのまま再利用することで、通常のゲームプレイと全く同じロジックパスを通す。
// これにより、スコア計算・即時除外(applyPrune)・EXCLUSIVE_MAPの推論などを再実装せずに済み、
// 新しいバグを埋め込むリスクを最小化している。
//
// 戻り値: 変更後にゲームが確定してしまった(候補が0件などで救済フローに入った)場合は
// そちらの画面がそのまま表示される。呼び出し元は特に後処理をしなくてよい。
function replayAnswersWithChange(changeIndex, newVal, newWeight){
  // 1. 変更前のタイムライン(質問キー・回答・元のフェーズ)を、historyとanswerLogから復元する。
  //    history[i].key が i番目に出題された質問、answerLog[i] がその回答(順序が対応している)。
  //    【重要】historyには「まだ回答していない、今表示中の質問」が1件多く含まれることがある
  //    (renderQuestion()が次の質問をhistoryへpushした直後、まだユーザーが回答していない状態)。
  //    そのため再生対象は必ず answerLog.length を基準にする(history.length ではない)。
  if(changeIndex < 0 || changeIndex >= answerLog.length) return false;
  const timeline = answerLog.map((a, i) => ({
    key: history[i].key,
    val: a.val,
    weight: a.weight,
    originalPhase: history[i].questionPhase || 'normal',
  }));
  timeline[changeIndex] = { ...timeline[changeIndex], val: newVal, weight: newWeight };

  // 2. 「1回目の推測が外れて追加質問フェーズへ切り替わった」タイミングを、変更前の記録から控える。
  //    (どのhistory.lengthの時点で切り替わったか、その時に除外された市名)
  //    【重要】ここで再現するのは「除外していた候補を復活させる」効果だけにとどめる。
  //    guessAttempts・questionPhase・extraQuestionCountを機械的に上書きしてしまうと、
  //    「回答を直したことで、実は1回目の質問だけで当てられるようになった」場合でも
  //    強制的に追加質問フェーズ(最大5問)に押し込められ、かえって当てにくくなってしまう
  //    (実測で確認済み)。回答を修正した以上、今度は通常フローの判定にすべて委ねる。
  //    フェーズ自体は、各質問が「元々どちらのフェーズで聞かれたか」(originalPhase)にだけ
  //    従わせる(questionCount/extraQuestionCountのカウント整合性を保つため)。
  const failurePoints = guessFailureLog.map(g => ({
    atHistoryLength: g.atHistoryLength,
    excludedCityName: g.excludedCityName,
    excludedCityId: g.excludedCityId || '',
  }));

  // 3. ゲーム状態を、startMode() と同じ内容でリセットする(currentMode・modeStartCount等、
  //    モード自体に関する値は変更しない=そのまま引き継ぐ)。
  const modeCities = getModeCities(currentMode);
  scorePool = modeCities.map(city => ({ city, score: 0, objMismatch: 0 }));
  prunedOutPool = [];
  lastPickWasOneCity = false;
  excludedNames = new Set();
  guessAttempts = 0;
  notifiedCandidateMilestones = new Set();
  asked = [];
  questionCount = 0;
  extraQuestionCount = 0;
  questionPhase = 'normal';
  history = [];
  forcedNextKey = null;
  forcedGuessCity = null;
  askedCategoryCounts = {};
  askedStatsCount = 0;
  currentResult = null;
  lastGuessCity = null;
  stableTopStreak = 0;
  lastTopName = null;
  knownPopMin = -Infinity;
  knownPopMax = Infinity;
  answerLog = [];
  guessFailureLog = [];

  // 4. タイムラインを順に再生する。
  for(let i = 0; i < timeline.length; i++){
    // このタイミングで(変更前は)候補の即時除外が発生していたなら、その復活だけを再現する。
    const failure = failurePoints.find(f => f.atHistoryLength === history.length);
    if(failure){
      if(failure.excludedCityName) excludedNames.add(failure.excludedCityName);
      restorePrunedCandidates();
      guessFailureLog.push({ ...failure });
    }
    // この質問が元々どちらのフェーズで聞かれていたかに合わせる(カウント整合性のため)。
    // 通常→追加質問への切り替わりが初めて必要になった時だけ、質問数のカウント基盤
    // (extraQuestionCount)を初期化する。guessAttemptsは「実際に追加質問の記録がある場合」
    // だけ1にする(effectiveMaxQ等の追加質問側の上限判定に必要なため)。
    if(timeline[i].originalPhase === 'extra' && questionPhase !== 'extra'){
      questionPhase = 'extra';
      extraQuestionCount = 0;
      guessAttempts = 1;
    }
    pushQuestionState(timeline[i].key);
    applyAnswerCore(timeline[i].key, timeline[i].val, timeline[i].weight);
    // 再生中に候補が1件へ絞れて forcedGuessCity が立っても、画面遷移(renderGuess)はしない。
    // scorePool自体は正しく更新済みなので、次の回答の反映には影響しない。
    forcedGuessCity = null;
  }
  // 【重要】最後の質問への回答まで再生し終えた"直後"に候補復活が発生していた場合
  // (=ちょうど最後の質問の後で1回目の推測が外れていた場合)、ループ内のチェックだけでは
  // 検出できない(ループはtimeline.length回で終わり、その後のhistory.lengthは判定されないため)。
  // ここでもう一度だけ確認する。
  const finalFailure = failurePoints.find(f => f.atHistoryLength === history.length);
  if(finalFailure){
    if(finalFailure.excludedCityName) excludedNames.add(finalFailure.excludedCityName);
    restorePrunedCandidates();
    guessFailureLog.push({ ...finalFailure });
  }

  return true;
}

// 「今日のチャレンジ」カードの「挑戦する」ボタンから呼ばれる。
// 通常のstartMode()をそのまま使い、その直後にチャレンジ情報をセットするだけなので、
// 既存のゲーム進行ロジックには一切手を加えていない。
// 日付文字列(YYYY-MM-DD)に days 日を加算(負なら減算)した文字列を返す。
// Dateオブジェクトのローカルタイムゾーン依存のgetDate/setDateは使わず、
// UTCの年月日として扱って計算するため、実行環境のタイムゾーンに関わらず結果が安定する。
function addDaysToDateString(dateStr, days){
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + days);
  return dt.toISOString().slice(0, 10);
}

// 「今日のチャレンジ」を達成したときに呼ぶ。同じ日に何度呼ばれても、記録は1回分だけ増える
// (completedDatesに今日の日付が既にあれば、streakやhistoryを増やさず何もしない)。
// 戻り値: { justAchieved, streak, isNewStreakMilestone } (呼び出し元で演出に使う)
function recordDailyChallengeCompletion(theme, totalQuestions){
  const data = loadDailyChallengeData();
  const today = todayJstDateString();
  if(data.completedDates.includes(today)){
    return { justAchieved: false, streak: data.currentStreak, isNewStreakMilestone: false };
  }

  // 連続記録の判定: 前回達成日が「昨日」なら継続、そうでなければ今日から1日目としてやり直す。
  // 【前向きな表現の方針】途切れたこと自体を責める文言はどこにも出さない。あくまで
  // 「これまで◯日達成」という積み上げの数字だけを見せる。
  const sortedDates = [...data.completedDates].sort();
  const lastDate = sortedDates[sortedDates.length - 1];
  const yesterday = addDaysToDateString(today, -1);
  const continuing = lastDate === yesterday;
  data.currentStreak = continuing ? data.currentStreak + 1 : 1;
  if(data.currentStreak > data.maxStreak) data.maxStreak = data.currentStreak;
  data.completedDates.push(today);
  data.history.push({ date: today, themeId: theme.id, themeText: theme.text, questionCount: totalQuestions || null, at: new Date().toISOString() });
  // 履歴が無限に膨らまないよう、直近120件程度に留める(スタンプ帳として十分な量)。
  if(data.history.length > 120) data.history = data.history.slice(-120);

  const isNewStreakMilestone = (data.currentStreak % 7 === 0);
  saveDailyChallengeData(data);
  trackGaEvent('daily_challenge_complete', { theme_id: theme.id, streak: data.currentStreak });
  if(isNewStreakMilestone) trackGaEvent('daily_challenge_streak_milestone', { streak: data.currentStreak });
  return { justAchieved: true, streak: data.currentStreak, isNewStreakMilestone };
}

// 正解画面を組み立てる前に、今日のチャレンジ達成可否を確定する。
// 描画後に判定すると、達成していても一度「未達成」と表示されてしまう。
function evaluateDailyChallengeResult(totalQuestions){
  dailyChallengeResult = null;
  if(!dailyChallengeActive) return;

  const cond = dailyChallengeActive;
  let achieved = false;
  if(cond.type === 'theme' || cond.type === 'region'){
    achieved = true;
  } else if(cond.type === 'condition'){
    if(cond.condition === 'within20') achieved = totalQuestions <= 20;
    else if(cond.condition === 'no_unknown') achieved = !answerLog.some(a => a.val === null);
    else if(cond.condition === 'no_maybe') achieved = !answerLog.some(a => a.weight != null && a.weight < 1);
  }
  const recordResult = achieved ? recordDailyChallengeCompletion(cond, totalQuestions) : null;
  dailyChallengeResult = { theme: cond, achieved, ...(recordResult || {}) };
}

// ==================== 進行中ゲームの保存・復元 ====================
// historyやscorePoolには自治体オブジェクトが大量に含まれるため、そのままlocalStorageへ
// 保存しない。直接回答した質問のタイムラインだけを保存し、復元時に既存のゲーム処理
// (pushQuestionState + applyAnswerCore)を再生して同じ状態を組み立て直す。
const GAME_SESSION_STORAGE_KEY = 'oramachi_game_session_v1';
const GAME_SESSION_VERSION = 1;
// 推理ロジックの互換性を壊す変更を行ったときだけ上げる。PWAキャッシュ番号とは分離する。
const GAME_SESSION_RULES_VERSION = 1;
const GAME_SESSION_TTL_MS = 24 * 60 * 60 * 1000;
const GAME_SESSION_FUTURE_TOLERANCE_MS = 5 * 60 * 1000;
const GAME_SESSION_MAX_ANSWERS = 80;
const GAME_SESSION_SCREENS = new Set(['question', 'guess', 'extraIntro']);

function gameSessionInvalid(reason){
  return { ok: false, reason: reason || 'invalid' };
}

// localStorage由来の値を信用せず、既知のモード・質問・自治体だけで新しいオブジェクトを作る。
// 表示用文字列や自治体オブジェクトそのものは保存値から一切受け取らない。
function normalizeGameSessionData(raw, nowMs){
  if(!raw || typeof raw !== 'object' || Array.isArray(raw)) return gameSessionInvalid('shape');
  const now = Number.isFinite(nowMs) ? nowMs : Date.now();
  if(raw.version !== GAME_SESSION_VERSION) return gameSessionInvalid('version');
  if(raw.rulesVersion !== GAME_SESSION_RULES_VERSION) return gameSessionInvalid('rules');
  if(raw.citiesVersion !== CITIES_VERSION) return gameSessionInvalid('cities');
  if(!Number.isFinite(raw.savedAt)) return gameSessionInvalid('savedAt');
  if(raw.savedAt > now + GAME_SESSION_FUTURE_TOLERANCE_MS) return gameSessionInvalid('future');
  if(now - raw.savedAt > GAME_SESSION_TTL_MS) return gameSessionInvalid('expired');
  if(typeof raw.mode !== 'string' || !Object.prototype.hasOwnProperty.call(MODES, raw.mode)){
    return gameSessionInvalid('mode');
  }
  if(!GAME_SESSION_SCREENS.has(raw.screen)) return gameSessionInvalid('screen');
  if(!Array.isArray(raw.answers) || raw.answers.length > GAME_SESSION_MAX_ANSWERS){
    return gameSessionInvalid('answers');
  }

  const modeCities = getModeCities(raw.mode);
  const modeCityIds = new Set(modeCities.map(cityId));
  const directQuestionKeys = new Set();
  let reachedExtraPhase = false;
  const answers = [];
  for(const item of raw.answers){
    if(!item || typeof item !== 'object' || Array.isArray(item)) return gameSessionInvalid('answer-shape');
    if(typeof item.key !== 'string' || !QUESTIONS[item.key]) return gameSessionInvalid('answer-key');
    if(directQuestionKeys.has(item.key)) return gameSessionInvalid('answer-duplicate');
    directQuestionKeys.add(item.key);
    if(item.val !== true && item.val !== false && item.val !== null) return gameSessionInvalid('answer-value');
    if(item.weight !== 1 && item.weight !== PARTIAL_WEIGHT) return gameSessionInvalid('answer-weight');
    if(item.phase !== 'normal' && item.phase !== 'extra') return gameSessionInvalid('answer-phase');
    if(reachedExtraPhase && item.phase !== 'extra') return gameSessionInvalid('answer-phase-order');
    if(item.phase === 'extra') reachedExtraPhase = true;
    const responseMs = item.responseMs == null ? null : item.responseMs;
    if(responseMs != null && (!Number.isFinite(responseMs) || responseMs < 0 || responseMs > 30000)){
      return gameSessionInvalid('answer-time');
    }
    const remainingBefore = item.remainingBefore == null ? null : item.remainingBefore;
    if(remainingBefore != null && (!Number.isInteger(remainingBefore) || remainingBefore < 0 || remainingBefore > modeCities.length)){
      return gameSessionInvalid('answer-remaining');
    }
    answers.push({
      key: item.key,
      val: item.val,
      weight: item.weight,
      responseMs,
      phase: item.phase,
      remainingBefore,
    });
  }

  const pendingQuestionKey = raw.pendingQuestionKey == null ? null : raw.pendingQuestionKey;
  if(raw.screen === 'question'){
    if(typeof pendingQuestionKey !== 'string' || !QUESTIONS[pendingQuestionKey] || directQuestionKeys.has(pendingQuestionKey)){
      return gameSessionInvalid('pending-question');
    }
  }else if(pendingQuestionKey !== null){
    return gameSessionInvalid('unexpected-question');
  }

  const guessCityId = raw.guessCityId == null ? null : raw.guessCityId;
  if(raw.screen === 'guess'){
    if(typeof guessCityId !== 'string' || !modeCityIds.has(guessCityId)) return gameSessionInvalid('guess-city');
  }else if(guessCityId !== null){
    return gameSessionInvalid('unexpected-guess');
  }

  if(!Array.isArray(raw.guessFailureLog) || raw.guessFailureLog.length > 1){
    return gameSessionInvalid('guess-failures');
  }
  const guessFailureLog = [];
  for(const item of raw.guessFailureLog){
    if(!item || typeof item !== 'object' || Array.isArray(item)) return gameSessionInvalid('guess-failure-shape');
    if(!Number.isInteger(item.atHistoryLength) || item.atHistoryLength < 0 || item.atHistoryLength > answers.length){
      return gameSessionInvalid('guess-failure-index');
    }
    if(typeof item.cityId !== 'string' || !modeCityIds.has(item.cityId)){
      return gameSessionInvalid('guess-failure-city');
    }
    guessFailureLog.push({ atHistoryLength: item.atHistoryLength, cityId: item.cityId });
  }
  if(reachedExtraPhase && guessFailureLog.length !== 1) return gameSessionInvalid('extra-without-failure');
  if(raw.screen === 'extraIntro'){
    if(guessFailureLog.length !== 1 || guessFailureLog[0].atHistoryLength !== answers.length){
      return gameSessionInvalid('extra-intro');
    }
  }

  let dailyChallenge = null;
  if(raw.dailyChallenge != null){
    const d = raw.dailyChallenge;
    if(!d || typeof d !== 'object' || Array.isArray(d)) return gameSessionInvalid('daily-shape');
    const today = getTodaysChallenge();
    if(d.id !== today.id || d.date !== today.dateStr || d.resolvedMode !== today.resolvedMode || raw.mode !== today.resolvedMode){
      return gameSessionInvalid('daily-date');
    }
    dailyChallenge = { id: today.id, date: today.dateStr, resolvedMode: today.resolvedMode };
  }

  const reportedQuestionKeys = [];
  const reportedInput = raw.reportedQuestionKeys == null ? [] : raw.reportedQuestionKeys;
  if(!Array.isArray(reportedInput) || reportedInput.length > GAME_SESSION_MAX_ANSWERS){
    return gameSessionInvalid('reported');
  }
  const reportedSet = new Set();
  for(const key of reportedInput){
    if(typeof key !== 'string' || !QUESTIONS[key]) return gameSessionInvalid('reported-key');
    if(!reportedSet.has(key)){
      reportedSet.add(key);
      reportedQuestionKeys.push(key);
    }
  }

  const lastDisplayedRemainingCount = raw.lastDisplayedRemainingCount == null
    ? null
    : raw.lastDisplayedRemainingCount;
  if(lastDisplayedRemainingCount != null &&
     (!Number.isInteger(lastDisplayedRemainingCount) || lastDisplayedRemainingCount < 0 || lastDisplayedRemainingCount > modeCities.length)){
    return gameSessionInvalid('remaining');
  }
  const pendingRemainingBefore = raw.pendingRemainingBefore == null ? null : raw.pendingRemainingBefore;
  if(pendingRemainingBefore != null &&
     (!Number.isInteger(pendingRemainingBefore) || pendingRemainingBefore < 0 || pendingRemainingBefore > modeCities.length)){
    return gameSessionInvalid('pending-remaining');
  }
  if(raw.lastPickWasOneCity !== true && raw.lastPickWasOneCity !== false){
    return gameSessionInvalid('last-pick');
  }
  const notifiedMilestonesInput = raw.notifiedMilestones == null ? [] : raw.notifiedMilestones;
  if(!Array.isArray(notifiedMilestonesInput) || notifiedMilestonesInput.length > CANDIDATE_MILESTONES.length){
    return gameSessionInvalid('milestones');
  }
  const notifiedMilestones = [];
  const notifiedSet = new Set();
  for(const value of notifiedMilestonesInput){
    if(!CANDIDATE_MILESTONES.includes(value)) return gameSessionInvalid('milestone-value');
    if(!notifiedSet.has(value)){
      notifiedSet.add(value);
      notifiedMilestones.push(value);
    }
  }

  return {
    ok: true,
    session: {
      version: GAME_SESSION_VERSION,
      rulesVersion: GAME_SESSION_RULES_VERSION,
      citiesVersion: CITIES_VERSION,
      savedAt: raw.savedAt,
      mode: raw.mode,
      screen: raw.screen,
      answers,
      pendingQuestionKey,
      guessCityId,
      guessFailureLog,
      dailyChallenge,
      reportedQuestionKeys,
      isReplayedFromGiveup: raw.isReplayedFromGiveup === true,
      lastDisplayedRemainingCount,
      pendingRemainingBefore,
      lastPickWasOneCity: raw.lastPickWasOneCity,
      notifiedMilestones,
    },
  };
}

function clearGameSession(){
  try{ localStorage.removeItem(GAME_SESSION_STORAGE_KEY); }
  catch(e){ /* 保存領域が使えなくてもゲームは続行できる */ }
}

function loadGameSession(){
  try{
    const text = localStorage.getItem(GAME_SESSION_STORAGE_KEY);
    if(!text) return null;
    const checked = normalizeGameSessionData(JSON.parse(text), Date.now());
    if(!checked.ok){
      clearGameSession();
      return null;
    }
    return checked.session;
  }catch(e){
    clearGameSession();
    return null;
  }
}

function saveGameSession(screen, details){
  if(!GAME_SESSION_SCREENS.has(screen) || !scorePool.length) return;
  const options = details || {};
  const answers = answerLog.map((entry, index) => {
    const snapshot = history[index];
    return {
      key: entry.key,
      val: entry.val,
      weight: entry.weight == null ? 1 : entry.weight,
      responseMs: entry.responseMs == null ? null : entry.responseMs,
      phase: snapshot && snapshot.questionPhase === 'extra' ? 'extra' : 'normal',
      remainingBefore: snapshot && snapshot.remainingCount != null ? snapshot.remainingCount : null,
    };
  });
  // answerLogとhistoryの対応が崩れている場合は、壊れた途中データを書き出さない。
  if(answers.some((entry, index) => !history[index] || history[index].key !== entry.key)) return;

  const currentModeCities = getModeCities(currentMode);
  const failureItems = guessFailureLog.map(item => {
    const city = (item.excludedCityId && currentModeCities.find(c => cityId(c) === item.excludedCityId)) ||
      currentModeCities.find(c => c.name === item.excludedCityName);
    return city ? { atHistoryLength: item.atHistoryLength, cityId: cityId(city) } : null;
  }).filter(Boolean);
  if(failureItems.length !== guessFailureLog.length) return;

  const daily = dailyChallengeActive
    ? { id: dailyChallengeActive.id, date: dailyChallengeActive.dateStr, resolvedMode: dailyChallengeActive.resolvedMode }
    : null;
  const data = {
    version: GAME_SESSION_VERSION,
    rulesVersion: GAME_SESSION_RULES_VERSION,
    citiesVersion: CITIES_VERSION,
    savedAt: Date.now(),
    mode: currentMode,
    screen,
    answers,
    pendingQuestionKey: screen === 'question' ? (options.pendingQuestionKey || null) : null,
    guessCityId: screen === 'guess' && options.guessCity ? cityId(options.guessCity) : null,
    guessFailureLog: failureItems,
    dailyChallenge: daily,
    reportedQuestionKeys: Array.from(reportedQuestionKeysInGame),
    isReplayedFromGiveup: isReplayedFromGiveup === true,
    lastDisplayedRemainingCount: lastDisplayedRemainingCount == null ? null : lastDisplayedRemainingCount,
    pendingRemainingBefore: screen === 'question' && history.length
      ? (history[history.length - 1].remainingCount == null ? null : history[history.length - 1].remainingCount)
      : null,
    lastPickWasOneCity: lastPickWasOneCity === true,
    notifiedMilestones: Array.from(notifiedCandidateMilestones),
  };
  const checked = normalizeGameSessionData(data, data.savedAt);
  if(!checked.ok) return;
  try{ localStorage.setItem(GAME_SESSION_STORAGE_KEY, JSON.stringify(checked.session)); }
  catch(e){ /* 容量制限・プライベートモード等では保存せず、ゲーム本体を優先する */ }
}

function renderGameResumeCardHtml(){
  const session = loadGameSession();
  if(!session) return '';
  const answered = session.answers.length;
  const nextNumber = answered + (session.screen === 'question' ? 1 : 0);
  const progress = session.screen === 'extraIntro'
    ? '追加質問へ進むところ'
    : (session.screen === 'guess' ? '推理結果を確認するところ' : `${nextNumber}問目`);
  return `
    <section class="game-resume-card" aria-label="途中のゲーム">
      <div class="game-resume-title">途中のゲームがあります</div>
      <div class="game-resume-meta">${escapeHtml(MODES[session.mode].label)}・${progress}</div>
      <div class="game-resume-actions">
        <button class="game-resume-primary" onclick="resumeSavedGame()">続きから</button>
        <button class="game-resume-secondary" onclick="discardSavedGame()">最初から選ぶ</button>
      </div>
    </section>`;
}

function discardSavedGame(){
  clearGameSession();
  renderOpening();
}

function cityByGameSessionId(id){
  return CITIES.find(city => cityId(city) === id) || null;
}

function applyRestoredGuessFailure(item){
  const city = cityByGameSessionId(item.cityId);
  if(!city) return false;
  excludedNames.add(city.name);
  restorePrunedCandidates();
  guessAttempts = 1;
  questionPhase = 'extra';
  extraQuestionCount = 0;
  lastGuessCity = city;
  guessFailureLog.push({
    atHistoryLength: item.atHistoryLength,
    excludedCityName: city.name,
    excludedCityId: cityId(city),
  });
  return true;
}

function restoreGameSession(session){
  const todayChallenge = session.dailyChallenge ? getTodaysChallenge() : null;
  const ready = startMode(session.mode, {
    restore: true,
    deferRender: true,
    dailyChallenge: todayChallenge,
  });
  if(!ready) return false;

  const failureByIndex = new Map(session.guessFailureLog.map(item => [item.atHistoryLength, item]));
  for(let index = 0; index < session.answers.length; index++){
    const failure = failureByIndex.get(history.length);
    if(failure && !applyRestoredGuessFailure(failure)) return false;

    const item = session.answers[index];
    if(item.phase === 'extra' && questionPhase !== 'extra'){
      questionPhase = 'extra';
      extraQuestionCount = 0;
      guessAttempts = 1;
    }
    lastDisplayedRemainingCount = item.remainingBefore;
    pushQuestionState(item.key);
    questionShownAt = null;
    applyAnswerCore(item.key, item.val, item.weight);
    answerLog[answerLog.length - 1].responseMs = item.responseMs;
    forcedGuessCity = null;
  }
  const finalFailure = failureByIndex.get(history.length);
  if(finalFailure && !guessFailureLog.some(item => item.atHistoryLength === finalFailure.atHistoryLength)){
    if(!applyRestoredGuessFailure(finalFailure)) return false;
  }

  reportedQuestionKeysInGame = new Set(session.reportedQuestionKeys);
  isReplayedFromGiveup = session.isReplayedFromGiveup;
  lastDisplayedRemainingCount = session.lastDisplayedRemainingCount;
  lastPickWasOneCity = session.lastPickWasOneCity;
  notifiedCandidateMilestones = new Set(session.notifiedMilestones);
  pendingQuestionSkips = [];
  let normalNumber = 0;
  let extraNumber = 0;
  session.answers.forEach(item => {
    const questionNumber = item.phase === 'extra' ? ++extraNumber : ++normalNumber;
    if(item.val === null){
      pendingQuestionSkips.push({
        questionKey: item.key,
        gameMode: session.mode,
        questionNumber,
        helpOpened: false,
      });
    }
  });

  if(session.screen === 'question'){
    lastDisplayedRemainingCount = session.pendingRemainingBefore;
    forcedNextKey = session.pendingQuestionKey;
    renderQuestion();
  }else if(session.screen === 'guess'){
    const guess = cityByGameSessionId(session.guessCityId);
    if(!guess) return false;
    forcedGuessCity = guess;
    renderGuess();
  }else{
    renderExtraIntro();
  }
  scrollToGameTop();
  trackGaEvent('oramachi_game_resume', {
    ...analyticsModeParams(session.mode),
    answered_questions: session.answers.length,
    resume_screen: session.screen,
  });
  return true;
}

function resumeSavedGame(){
  const session = loadGameSession();
  if(!session) return renderOpening();
  try{
    if(!restoreGameSession(session)){
      clearGameSession();
      renderOpening();
    }
  }catch(e){
    console.warn('おらマチ: 進行中ゲームの復元に失敗したため破棄します', e);
    clearGameSession();
    renderOpening();
  }
}

function startDailyChallenge(){
  const theme = getTodaysChallenge();
  const started = startMode(theme.resolvedMode, { dailyChallenge: theme });
  if(started) trackGaEvent('daily_challenge_start', { theme_id: theme.id, mode: theme.resolvedMode });
}

function startMode(mode, startOptions){
  const options = startOptions || {};
  if(!options.restore){
    const existing = loadGameSession();
    if(existing && !options.skipExistingSessionConfirm){
      const replace = confirm('途中のゲームがあります。\nその記録を消して、新しいゲームを始めますか？');
      if(!replace) return false;
    }
    clearGameSession();
  }
  activeGameTransientScreen = null;
  currentMode = mode;
  pushGameNavState(); // ここから戻ったらトップ画面、という目印を履歴に積む
  const modeCities = getModeCities(mode);
  scorePool = modeCities.map(city => ({ city, score: 0, objMismatch: 0 }));
  prunedOutPool = [];
  lastPickWasOneCity = false;
  excludedNames = new Set();
  guessAttempts = 0;
  giveUpPoolSnapshot = null;
  notifiedCandidateMilestones = new Set();
  asked = [];
  questionCount = 0;
  extraQuestionCount = 0;
  questionPhase = 'normal';
  history = [];
  forcedNextKey = null;
  forcedGuessCity = null;
  askedCategoryCounts = {};
  askedStatsCount = 0;
  currentResult = null;
  lastGuessCity = null;
  stableTopStreak = 0;
  lastTopName = null;
  knownPopMin = -Infinity;
  knownPopMax = Infinity;
  answerLog = [];
  guessFailureLog = [];
  isReplayedFromGiveup = false;
  answerHistoryPanelContext = 'ingame';
  answerHistoryQuestionShownAt = null;
  dailyChallengeActive = options.dailyChallenge || null; // 通常プレイはnull、今日のチャレンジは初回描画前に設定
  dailyChallengeResult = null; // 前回のデイリー結果を通常ゲームへ持ち越さない
  questionHelpOpen = false;
  questionShownAt = null;
  reportedQuestionKeysInGame = new Set();
  pendingQuestionSkips = [];
  modeStartCount = modeCities.length;
  lastDisplayedRemainingCount = null;

  if(modeCities.length === 0){
    markGameNavResult('deduction');
    stage.innerHTML = `
      <div class="mascot-wrap"><div class="shake">${mascotSVG('sad')}</div></div>
      <div class="bubble"><span class="icon">🙏</span>このモードのデータがまだありません</div>
      <button class="again" onclick="navigateToOpening()">モード選択へ戻る</button>
    `;
    return false;
  }

  // 「全国版／県版／地方版のどれで1ゲームを始めたか」を計測する。
  if(!options.restore){
    trackGaEvent('oramachi_game_start', {
      ...analyticsModeParams(mode),
      candidate_count: modeCities.length
    });
  }

  footEl.textContent = `${MODES[mode].label} ・ 対応 ${modeCities.length}自治体`;
  if(options.deferRender) return true;
  renderQuestion();
  scrollToGameTop();
  return true;
}

// ゲーム画面(カード)の一番上が見えるように、ページの先頭へスクロールする。
// モード選択ボタンはページの下の方にあるため、押したままだとプレイ画面が
// 途中(「おらマチとは」の辺り)から表示されてしまう。これを防ぐ。
function scrollToGameTop(){
  try{
    const card = document.querySelector('.card');
    const target = card || document.body;
    // ヘッダー(ロゴ)の少し上まで戻したいので、カードの上端より少し余白をとる。
    const top = target.getBoundingClientRect().top + window.pageYOffset - 12;
    window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
  }catch(e){
    // 万一スクロールに失敗しても、ゲーム進行には影響させない。
    try{ window.scrollTo(0, 0); }catch(_){}
  }
}
let forcedNextKey = null; // 「戻る」で復元したときに、同じ質問を出すための指定

// 【質問出題の状態更新】historyへのスナップショット保存、asked追加、questionCount更新。
// 画面描画は行わない。通常のrenderQuestion()と、「これまでの回答」機能での再生の
// 両方から呼ばれる共通処理。
function pushQuestionState(key){
  // このジャンルが実際に出題されたことを記録する前の状態も履歴に残す(戻るボタン用)
  const categorySnapshotBefore = { ...askedCategoryCounts };
  const remainingCountSnapshotBefore = lastDisplayedRemainingCount;

  // このジャンルが実際に出題されたことを記録(次以降の選ばれやすさ調整に使う)
  const cat = categoryOf(key);
  askedCategoryCounts[cat] = (askedCategoryCounts[cat] || 0) + 1;
  const statsCountSnapshotBefore = askedStatsCount;
  if(STATS_QUESTION_KEYS.has(key)) askedStatsCount++;

  // このタイミング(まだこの質問を聞く前)の状態と、聞く質問のキーを履歴に保存する
  history.push({
    scorePool: scorePool.map(e => ({ city: e.city, score: e.score, objMismatch: e.objMismatch || 0 })),
    prunedOutPool: prunedOutPool.map(e => ({ city: e.city, score: e.score, objMismatch: e.objMismatch || 0 })),
    excludedNames: new Set(excludedNames),
    asked: [...asked],
    questionCount: questionCount,
    extraQuestionCount: extraQuestionCount,
    questionPhase: questionPhase,
    askedCategoryCounts: categorySnapshotBefore,
    askedStatsCount: statsCountSnapshotBefore,
    knownPopMin: knownPopMin,
    knownPopMax: knownPopMax,
    remainingCount: remainingCountSnapshotBefore,
    key: key
  });

  asked.push(key);
  if(questionPhase === 'extra'){ extraQuestionCount++; } else { questionCount++; }
}

function renderQuestion(){
  renderStamps();
  const key = forcedNextKey || entropyPick();
  forcedNextKey = null;

  const phaseCount = questionPhase === 'extra' ? extraQuestionCount : questionCount;
  // 「わからない」で無駄打ちになった分だけ上限を延ばす(effectiveMaxQ)
  const phaseMax = effectiveMaxQ(questionPhase);
  // 【重要】askedには実際に表示した質問だけでなく、EXCLUSIVE_MAPによる自動除外分
  // (「多摩地区?」にはいと答えたら23区限定タグ群を一括で「いいえ」扱いにする、など)も
  // 積まれる。自動除外は1回のトリガーで数十件まとめて増えることがあるため、
  // askedの長さをそのまま安全装置の判定に使うと、実質の質問数が少ないうちに
  // 誤って強制終了してしまう。ここは必ず実質の質問数(questionCount+extraQuestionCount)で判定する。
  const realQuestionCount = questionCount + extraQuestionCount;
  if(!key || phaseCount >= phaseMax || sortedPool().length <= 1 || realQuestionCount >= ABSOLUTE_MAX_Q || realQuestionCount > HARD_MAX_Q + unknownAllowanceQ()){
    return renderGuess();
  }

  pushQuestionState(key);
  renderQuestionScreen(key);
  saveGameSession('question', { pendingQuestionKey: key });
}

// 【画面描画のみ】質問画面のHTMLを構築して表示する。history/asked/questionCountの更新は
// 行わない(renderQuestion()側で既に済んでいる前提)。「これまでの回答」パネルを閉じて
// 元の質問へ戻るときにも、この関数だけを呼び直す(pushQuestionStateを再度呼ぶと
// 質問が二重に記録されてしまうため)。
function renderQuestionScreen(key){
  activeGameTransientScreen = null;
  const q = QUESTIONS[key];
  questionHelpOpen = false; // 新しい質問に切り替わったら、前の質問で開いていた補足は必ず閉じた状態に戻す

  const displayCount = questionPhase === 'extra' ? extraQuestionCount : questionCount;
  const displayMax = questionPhase === 'extra' ? MAX_EXTRA_Q : MAX_Q;
  const countLabel = questionPhase === 'extra' ? `追加質問 ${displayCount}／${displayMax}` : `質問 ${displayCount}／${displayMax}`;

  // 「826マチ → 残り約42マチ」のような、候補の絞れ具合を示す補助表示。
  // 文言と表情を必ず同じ判定(thinkingStatusFor)から取るため、片方だけ変わることはない。
  // 【候補数の演出】アニメーションを発火させるため、描画前の値を控えておく
  // (estimateRemainingCountForDisplayを呼ぶと lastDisplayedRemainingCount 自体が更新されるため、先に取っておく)。
  const remainingBefore = lastDisplayedRemainingCount;
  const remainingNow = estimateRemainingCountForDisplay();
  const progressLabel = `${modeStartCount}マチ → 残り約<span class="progress-count-num" id="progressCountNum">${remainingNow}</span>マチ`;
  const status = thinkingStatusFor(remainingNow, modeStartCount);
  const moraleLabel = status.text;
  // 新しいゲームを開始した最初の質問(まだ1問も答えていない)だけは、
  // 候補数によらずnormal表情にする。(asked.push(key)は既に実行済みなので、
  // 通常質問の1問目=asked.length===1で判定する)
  const mascotMood = (questionPhase === 'normal' && asked.length === 1) ? 'normal' : status.mood;

  const backBtn = history.length > 1
    ? `<button class="btn-back" onclick="goBack()">← 前の質問に戻る</button>`
    : '';
  // 【これまでの回答】1問でも回答済みならボタンを出す(まだ0問なら一覧が空になるため出さない)。
  const answerHistoryBtn = answerLog.length > 0
    ? `<button class="btn-answer-history" onclick="renderAnswerHistoryPanel()">📝 これまでの回答</button>`
    : '';

  // 【質問の補足】指定された一覧(QUESTION_HELP)にあるキーだけボタンを出す。無いキーは何も表示しない。
  const helpText = QUESTION_HELP[key];
  const questionHelpHtml = helpText
    ? `<button type="button" class="question-help-btn" id="questionHelpBtn"
        aria-expanded="false" aria-controls="questionHelpPanel" onclick="toggleQuestionHelp()">ⓘ どういう意味？</button>
      <div class="question-help-panel" id="questionHelpPanel" role="region" aria-hidden="true">
        <span class="question-help-icon" aria-hidden="true">ⓘ</span><span class="question-help-text">${escapeHtml(helpText)}</span>
      </div>`
    : '';
  // 【この質問を報告】常時表示。既にこのゲーム内で報告済みの質問はボタンを無効化して連打を防ぐ。
  const alreadyReported = reportedQuestionKeysInGame.has(key);
  const reportBtnHtml = `<button type="button" class="question-report-btn" onclick="openQuestionReportModal('${escapeJsString(key)}')" ${alreadyReported ? 'disabled' : ''}>${alreadyReported ? '報告済み' : '⚑ この質問を報告'}</button>`;

  stage.innerHTML = `
    <div class="mascot-wrap"><div class="bob pop">${mascotSVG(mascotMood)}</div></div>
    <div class="bubble"><span class="icon">${q.icon}</span>${q.text}</div>
    ${questionHelpHtml}
    <div class="count-line">${countLabel}</div>
    <div class="progress-line"><span class="progress-count">${progressLabel}</span><span class="progress-morale">${moraleLabel}</span></div>
    <div class="choices">
      <button class="btn btn-yes" onclick="answer('${key}', true)">はい</button>
      <button class="btn btn-no" onclick="answer('${key}', false)">いいえ</button>
      <button class="btn btn-maybe-yes" onclick="answer('${key}', true, PARTIAL_WEIGHT)">たぶんそう</button>
      <button class="btn btn-maybe-no" onclick="answer('${key}', false, PARTIAL_WEIGHT)">たぶん違う</button>
      <button class="btn btn-unknown" onclick="answer('${key}', null)">わからない・スキップ</button>
    </div>
    <div class="question-sub-actions">
      ${backBtn}
      ${answerHistoryBtn}
    </div>
    <div class="question-meta-actions">
      ${reportBtnHtml}
    </div>
  `;
  questionShownAt = Date.now(); // 回答時間の計測開始(この質問が画面に出た時刻)
  animateCandidateCount(remainingBefore, remainingNow); // 候補数の変化演出
  notifyCandidateMilestone(remainingNow);
  updateDebugPanel();
}

// ==================== これまでの回答 一覧・編集 ====================
// 回答(val, weight)を表示用ラベルに変換する。「戻る」ボタンや結果画面でも
// 同じ判定基準(現在ゲームで使用している5択)を使うため、ここに集約しておく。
function answerValueLabel(val, weight){
  if(val === null) return { label: 'わからない', cls: 'unknown' };
  const full = weight == null || weight >= 1;
  if(val === true) return full ? { label: 'はい', cls: 'yes' } : { label: 'たぶんそう', cls: 'maybe-yes' };
  return full ? { label: 'いいえ', cls: 'no' } : { label: 'たぶん違う', cls: 'maybe-no' };
}

// 「これまでの回答」一覧を表示する。質問画面の上に被せる形(stage.innerHTMLを丸ごと
// 置き換える)だが、閉じるときは元の画面(質問画面 or 降参完了画面)だけを再描画するので、
// history/asked/questionCountの二重登録は発生しない。
//
// answerHistoryPanelContext が 'review' のときは、不正解の原因分析(lastCorrectionMismatches)
// で見つかった、矛盾していた質問を目立たせて表示する。
function renderAnswerHistoryPanel(){
  if(activeGameTransientScreen === null && answerHistoryPanelContext === 'ingame'){
    answerHistoryQuestionShownAt = questionShownAt;
  }
  activeGameTransientScreen = 'answerHistory';
  const isReview = answerHistoryPanelContext === 'review';
  const highlightKeys = isReview ? new Set(lastCorrectionMismatches.map(m => m.key)) : new Set();

  const items = answerLog.map((a, i) => {
    const q = QUESTIONS[a.key];
    if(!q) return ''; // 万一データ不整合があっても描画を止めない
    const v = answerValueLabel(a.val, a.weight);
    const isHighlighted = highlightKeys.has(a.key);
    return `
      <li class="answer-history-item${isHighlighted ? ' answer-history-item-flagged' : ''}" onclick="renderAnswerEditFor(${i})">
        <span class="answer-history-num">${i + 1}</span>
        <span class="answer-history-q">${isHighlighted ? '⚠️ ' : ''}${q.text}</span>
        <span class="answer-history-val answer-history-val-${v.cls}">${v.label}</span>
      </li>`;
  }).join('');

  const hint = isReview
    ? '⚠️ の付いた質問が、実際のデータと違っていた回答です'
    : 'タップすると回答を直せます';

  stage.innerHTML = `
    <div class="mascot-wrap"><div class="pop">${mascotSVG('think')}</div></div>
    <div class="bubble"><span class="icon">📝</span>これまでの回答だべ</div>
    <div class="answer-history-hint">${hint}</div>
    <ul class="answer-history-list">${items}</ul>
    <button class="again" onclick="closeAnswerHistoryPanel()">閉じる</button>
  `;
  updateDebugPanel();
}

// 一覧に戻らず、そのまま元の画面へ戻る(回答は変更しない)。
// 通常のゲーム中(ingame)なら元の質問画面へ、不正解後の見直し(review)なら降参完了画面へ戻る。
function closeAnswerHistoryPanel(){
  if(answerHistoryPanelContext === 'review'){
    answerHistoryQuestionShownAt = null;
    return renderThanks(lastCorrectionWasNearMiss, lastCorrectionCityLabel, lastCorrectionMatchedCity, lastCorrectionMismatches);
  }
  const pendingKey = asked[asked.length - 1];
  renderQuestionScreen(pendingKey);
  if(answerHistoryQuestionShownAt != null) questionShownAt = answerHistoryQuestionShownAt;
  answerHistoryQuestionShownAt = null;
}

// i番目の回答を編集する画面。現在ゲームで使っているのと同じ5択をそのまま使う。
function renderAnswerEditFor(index){
  activeGameTransientScreen = 'answerEdit';
  const entry = answerLog[index];
  if(!entry) return renderAnswerHistoryPanel();
  const q = QUESTIONS[entry.key];
  const current = answerValueLabel(entry.val, entry.weight);
  // 見直し文脈では、実際のデータ(あれば)も一緒に見せて判断しやすくする。
  const actualLine = (answerHistoryPanelContext === 'review' && lastCorrectionMatchedCity && typeof lastCorrectionMatchedCity.tags[entry.key] === 'boolean')
    ? `<div class="answer-edit-actual">${lastCorrectionMatchedCity.pref}${displayName(lastCorrectionMatchedCity)}の実際: <b>${lastCorrectionMatchedCity.tags[entry.key] ? 'はい' : 'いいえ'}</b></div>`
    : '';

  stage.innerHTML = `
    <div class="mascot-wrap"><div class="pop">${mascotSVG('think')}</div></div>
    <div class="bubble"><span class="icon">${q.icon}</span>${q.text}</div>
    <div class="answer-edit-current">今の回答: <b class="answer-history-val-${current.cls}">${current.label}</b>（${index + 1}問目）</div>
    ${actualLine}
    <div class="choices">
      <button class="btn btn-yes" onclick="applyAnswerEdit(${index}, true, 1)">はい</button>
      <button class="btn btn-no" onclick="applyAnswerEdit(${index}, false, 1)">いいえ</button>
      <button class="btn btn-maybe-yes" onclick="applyAnswerEdit(${index}, true, ${PARTIAL_WEIGHT})">たぶんそう</button>
      <button class="btn btn-maybe-no" onclick="applyAnswerEdit(${index}, false, ${PARTIAL_WEIGHT})">たぶん違う</button>
      <button class="btn btn-unknown" onclick="applyAnswerEdit(${index}, null, 1)">わからない・スキップ</button>
    </div>
    <button class="link-btn" onclick="renderAnswerHistoryPanel()">変更せず一覧に戻る</button>
  `;
  updateDebugPanel();
}

// 回答を変更し、全回答を再生して状態を再構築したうえで、ゲームを続行(または再開)する。
function applyAnswerEdit(index, newVal, newWeight){
  answerHistoryQuestionShownAt = null;
  const wasReview = answerHistoryPanelContext === 'review';
  const ok = replayAnswersWithChange(index, newVal, newWeight);
  if(!ok) return renderAnswerHistoryPanel(); // 万一失敗しても一覧に戻すだけでエラーにしない
  // 見直し文脈から編集した場合、通常のゲーム進行に戻す(以後は普通の質問画面として扱う)。
  if(wasReview){
    answerHistoryPanelContext = 'ingame';
    isReplayedFromGiveup = true; // 統計の二重カウント防止用(recordGameStatsで参照する)
    pushGameNavState('deduction'); // 結果画面から推理へ戻ったので、端末の戻る対象も進行中へ戻す
    trackGaEvent('oramachi_replay_from_mismatch', { ...analyticsModeParams(currentMode) });
  }
  // 再生後、次に聞くべき質問(または「もしかして」画面・降参画面)を通常のフローで表示する。
  // 候補が0件になるような極端な矛盾があっても、既存のrenderQuestion()内の安全装置
  // (sortedPool().length<=1でrenderGuess()へ)にそのままつながる。
  renderQuestion();
}

// 降参完了画面の「回答を直して推理を再開する」から呼ばれる。
function startReplayFromMismatch(){
  answerHistoryPanelContext = 'review';
  renderAnswerHistoryPanel();
}

function goBack(){
  if(history.length === 0) return;
  history.pop(); // 今表示していた質問の分を捨てる
  const prev = history.pop(); // その前(=戻りたい状態)を取り出す
  if(!prev) return;
  scorePool = prev.scorePool;
  prunedOutPool = prev.prunedOutPool || [];
  excludedNames = prev.excludedNames;
  asked = prev.asked;
  questionCount = prev.questionCount;
  extraQuestionCount = prev.extraQuestionCount != null ? prev.extraQuestionCount : 0;
  questionPhase = prev.questionPhase || 'normal';
  askedCategoryCounts = prev.askedCategoryCounts || {};
  askedStatsCount = prev.askedStatsCount || 0;
  knownPopMin = prev.knownPopMin != null ? prev.knownPopMin : -Infinity;
  knownPopMax = prev.knownPopMax != null ? prev.knownPopMax : Infinity;
  lastDisplayedRemainingCount = prev.remainingCount != null ? prev.remainingCount : null;
  // askedにはEXCLUSIVE_MAPによって自動推論された「実際には表示していない質問」も含まれる。
  // 直接回答の件数は、残った質問スナップショット数(history.length)に合わせる。
  answerLog.length = history.length;
  // 戻った先が「1回目の推測が外れる前」なら、その記録も取り消す(再生時の整合性のため)
  guessFailureLog = guessFailureLog.filter(g => g.atHistoryLength <= history.length);
  forcedNextKey = prev.key; // 同じ質問を再表示する
  renderQuestion();
}

// スコアを確率相当の値に変換する(softmax)。1位候補がどのくらい優勢かの目安として使う。
const CONFIDENCE_TEMPERATURE = 4; // 大きいほど「僅差でも確率が割れやすく」なる
function candidateProbabilities(pool){
  if(pool.length === 0) return [];
  const maxScore = Math.max(...pool.map(e => e.score));
  const exps = pool.map(e => Math.exp((e.score - maxScore) / CONFIDENCE_TEMPERATURE));
  const sum = exps.reduce((a,b)=>a+b, 0);
  return pool.map((e,i) => sum > 0 ? exps[i] / sum : 1 / pool.length);
}
function topConfidence(){
  const sorted = sortedPool();
  if(sorted.length === 0) return 0;
  const probs = candidateProbabilities(sorted);
  return probs[0] != null ? probs[0] : 0;
}

// 「だいたいこのくらい残っている」という目安の候補数。スコアによる評価であり完全な除外方式では
// ないため、確率が極端に低いものだけ目安から除く(=断定はしない、画面表示側で「約」を付ける)。
// 絶対閾値だけだと、候補の母集団が少ないモード(新潟県版など)で「どの候補もそれなりに
// 確率が残っている」状態になりやすく、絞り込みがほとんど進んでいないように見えてしまう。
// そこで、1位候補の確率に対する相対的な閾値も併用し、1位から大きく見劣りする候補は
// 目安から外すようにする。
const REMAINING_COUNT_PROB_THRESHOLD = 0.001;   // 絶対的な下限(母集団が大きいときの基準)
const REMAINING_COUNT_RELATIVE_RATIO = 0.08;    // 1位候補の確率のこの割合未満は「実質圏外」とみなす
function estimateRemainingCountRaw(){
  const sorted = sortedPool();
  if(sorted.length === 0) return 0;
  if(sorted.length === 1) return 1;
  const probs = candidateProbabilities(sorted);
  const maxProb = Math.max(...probs);
  const threshold = Math.max(REMAINING_COUNT_PROB_THRESHOLD, maxProb * REMAINING_COUNT_RELATIVE_RATIO);
  const count = probs.filter(p => p >= threshold).length;
  return Math.max(1, count);
}
// 表示用: 一度減った数字が質問の巡り合わせで急に増えて見えないよう、単調減少に保つ。
function estimateRemainingCountForDisplay(){
  const raw = estimateRemainingCountRaw();
  if(lastDisplayedRemainingCount == null || raw < lastDisplayedRemainingCount){
    lastDisplayedRemainingCount = raw;
  }
  return lastDisplayedRemainingCount;
}
// 候補の絞れ具合に応じた、おらっちの一言と表情を同時に返す。
// (文字だけ変わって表情が変わらない、という状態を作らないため、必ずこの関数を経由する)
// 【候補数の演出】数字が変わった(減った)瞬間に、少し拡大して元に戻る短い演出を入れる。
// 候補が10以下まで絞れている場面は、少し強めの演出にして「絞れてきた感」を出す。
// transform(scale)だけで作っているのでレイアウトは動かず、回答ボタンの操作も妨げない。
// prefers-reduced-motion環境ではCSS側(.progress-count-num系)で自動的に短縮される。
const CANDIDATE_COUNT_STRONG_THRESHOLD = 10; // これ以下の候補数では強めの演出にする
// 候補数が節目(100/50/20/10/5/3/1)を初めて下回った瞬間だけGA4へ送る。
// 同じ節目を同じゲーム内で何度も送らないよう notifiedCandidateMilestones で管理する。
function notifyCandidateMilestone(remaining){
  if(remaining == null) return;
  for(const m of CANDIDATE_MILESTONES){
    if(remaining <= m && !notifiedCandidateMilestones.has(m)){
      notifiedCandidateMilestones.add(m);
      trackGaEvent('candidate_count_milestone', { milestone: m, remaining });
    }
  }
}

function animateCandidateCount(before, after){
  const el = document.getElementById('progressCountNum');
  if(!el) return;
  if(before == null || before === after) return; // 初回表示・変化なしの場合は演出しない
  const strong = after != null && after <= CANDIDATE_COUNT_STRONG_THRESHOLD;
  const cls = strong ? 'count-pop-strong' : 'count-pop';
  // 連続で質問に答えたときに前のアニメーションが残っていても正しく再生されるよう、
  // 一度クラスを外してから(reflowを挟んで)付け直す。
  el.classList.remove('count-pop', 'count-pop-strong');
  void el.offsetWidth; // reflowを強制してアニメーションを再始動させる
  el.classList.add(cls);
}

function thinkingStatusFor(remaining, total){
  const ratio = total > 0 ? remaining / total : 1;
  if(remaining <= 3) return { text: 'もう分かったかも！', mood: 'happy' };
  if(ratio <= 0.05) return { text: 'かなり絞れてきた！', mood: 'think' };
  if(ratio <= 0.3) return { text: 'だいぶ見えてきたべ', mood: 'think' };
  return { text: 'まだ考え中……', mood: 'think' };
}
// 後方互換用(文言だけが欲しい場合)
function moraleText(remaining, total){
  return thinkingStatusFor(remaining, total).text;
}

// 1位候補が連続して変わっていないかを記録する(「安定した推測」判定に使う)
function updateStableStreak(){
  const sorted = sortedPool();
  const top1 = sorted[0], top2 = sorted[1];
  // 1位が2位と完全に同点(僅差ではなく本当のタイ)の場合、それは配列順でたまたま
  // 先頭に並んでいるだけで「安定して1位」なわけではない。安定判定の対象にしない。
  const hasClearLead = !!top1 && (!top2 || top1.score > top2.score);
  const topName = hasClearLead ? top1.city.name : null;
  if(topName && topName === lastTopName){
    stableTopStreak++;
  } else {
    stableTopStreak = 0;
  }
  lastTopName = topName;
}

// 今、推測に進んでよいかを判定する(いずれかを満たせばOK)。
// 「わからない」「たぶん」の回答が多い場合は、性急な推測を避けるための目安。
const AMBIGUOUS_RATIO_THRESHOLD = 0.4;  // 曖昧な回答がこの割合以上なら慎重にする
const TOP1_MISMATCH_CAUTION = 2;        // 1位候補が客観的回答とこの回数以上矛盾していたら慎重にする
function ambiguousAnswerRatio(){
  if(answerLog.length === 0) return 0;
  const ambiguous = answerLog.filter(r => r.val === null || r.weight < 1).length;
  return ambiguous / answerLog.length;
}

function shouldGuessNow(){
  const sorted = sortedPool();
  if(sorted.length <= 1) return true; // 候補が1つに絞れた
  const top1 = sorted[0], top2 = sorted[1];
  const margin = (top1 && top2) ? top1.score - top2.score : Infinity;

  // 曖昧回答(わからない・たぶん)が多い、または1位候補が客観的回答と何度も矛盾している場合は、
  // 性急な推測を避け、より慎重な「安定判定」基準だけで判断する。
  const ambiguousHigh = ambiguousAnswerRatio() >= AMBIGUOUS_RATIO_THRESHOLD;
  const top1MismatchHigh = !!(top1 && (top1.objMismatch || 0) >= TOP1_MISMATCH_CAUTION);
  if(ambiguousHigh || top1MismatchHigh){
    if(questionPhase === 'normal' && questionCount >= MIN_QUESTIONS_FOR_STABLE_GUESS && stableTopStreak >= STABLE_STREAK_REQUIRED){
      return true;
    }
    return false;
  }

  if(margin >= CONFIDENCE_MARGIN) return true; // 1位と2位の差が十分大きい
  if(topConfidence() >= GUESS_CONFIDENCE_THRESHOLD) return true; // 1位候補の確率が高い
  if(questionPhase === 'normal' && questionCount >= MIN_QUESTIONS_FOR_STABLE_GUESS && stableTopStreak >= STABLE_STREAK_REQUIRED){
    // 安定はしているが、まだ1位と2位を確実に分けられる客観質問が残っているなら、
    // それを聞いてから答える(「最西端?」を聞かずに離島同士で外すのを防ぐ)。
    if(decisiveQuestionRemains()) return false;
    return true; // 15問以上・数問連続で1位候補が変わっていない
  }
  return false;
}

// 【まだ粘れるか】1位と2位の候補を「客観的な質問1つで確実に区別できる」場合、
// その質問をまだ聞いていないなら推測を我慢して聞きに行く価値がある。
// 例: 与那国町(最西端)と竹富町は、「日本最西端?」を聞けば一発で分かるのに、
// スコアが僅差のまま推測してしまうと、この決め手を使わずに外すことがある。
// ただし無限に粘らないよう、通常質問の上限が近い場面(残りわずか)では適用しない。
function decisiveQuestionRemains(){
  const sorted = sortedPool();
  if(sorted.length < 2) return false;
  const top1 = sorted[0], top2 = sorted[1];
  if(!top1 || !top2) return false;
  // 通常質問の残りが2問未満なら、粘らずに答える(時間切れ間際)
  const phaseMax = effectiveMaxQ(questionPhase);
  if(questionCount >= phaseMax - 2) return false;
  // 1位と2位で真偽が分かれる客観的質問(主観でない・未出題・モードで有効)を探す
  const unused = activeKeysForMode(currentMode).filter(k => !asked.includes(k));
  for(const k of unused){
    if(isSubjectiveQuestion(k)) continue;          // 主観質問は決め手にしない(住民でも割れる)
    const v1 = top1.city.tags[k] === true;
    const v2 = top2.city.tags[k] === true;
    if(v1 !== v2) return true;                       // 1問で1位と2位を確実に分けられる
  }
  return false;
}

// 【答えが確定する質問による即時絞り込み】
// 「関東地方(東京含む)にありますか?」のような地域の質問は、市の所在地から機械的に決まり、
// 属するか属さないかがはっきりしている。つまり住んでいる人が迷う余地がなく、
// 他のタグのように「解釈の幅」も無い。
// そのため、はい/いいえ をフル確信度(「たぶん」ではない)で答えたら、その時点で
// 矛盾する市は候補から即座に外してよい。
//   ・「関東?」→ はい  … 関東以外の市を全部外す
//   ・「関東?」→ いいえ … 関東の市を全部外す
//   ・「中越地方?」→ はい … 中越以外の市を全部外す
// 「わからない」「たぶん」(weight<1)では絶対に発動させない。誤操作した場合に取り返しが
// つかなくなるのを避けるため、除外の結果が空になるときは何もしない(安全装置)。
//
// 【対象外にしているもの】
//   ・両毛地域 / 中国山地の盆地 / 阪神間 / 有明海に面している
//       … 範囲の捉え方に主観が混じり、住民でも判断が割れうるので除外しない(減点のみ)。
//   ・紀伊半島 / 東海地方
//       … 複数の地方にまたがり、どこまでを含むかの解釈が分かれるので除外しない(減点のみ)。
const REGION_QUESTION_KEYS = new Set([
  'region_hokkaido','region_tohoku','region_kanto','region_chubu',
  'region_kinki','region_chugoku','region_shikoku','region_kyushu'
]);

// 8地方と同じ「即時除外」を適用する地域質問(広域 + 県内の地方別)。
// PHASE_EARLY_MIDDLE_KEYS / PHASE_LATE_SUBREGION_KEYS から、主観が混じるものだけ外して作る。
const SUBJECTIVE_AREA_KEYS = new Set(['ryomo_area','chugoku_mountain_basin','hanshin_area','ariake_coast']);
const AREA_PRUNE_KEYS = new Set(
  [...PHASE_EARLY_MIDDLE_KEYS, ...PHASE_LATE_SUBREGION_KEYS].filter(k => !SUBJECTIVE_AREA_KEYS.has(k))
);


// 【はい/いいえで確定する客観的な質問】
// 地名の質問(8地方・広域・県内の地方別)と同じく、答えが事実で決まり、住んでいる人が
// 迷う余地のない質問。フル確信度で答えられたら、矛盾する候補を即座に外してよい。
// 「たぶん」「わからない」では発動しない(pruneByRegionAnswer の入口で弾いている)。
//
// 【入れていないもの】
//   ・主観的な質問(subjective:true) … 「ベッドタウン?」など、住民でも判断が割れる
//   ・中核市 / 施行時特例市 / 2000年以降の合併 … 事実は明確だが、住民でも知らないことが多く、
//     うろ覚えの1問で正解が永久に消えてしまうため
//   ・「植物/動物/色/体の一部を表す漢字が入っている?」 … どの漢字が該当するか解釈が割れる
//   ・豪雪地帯の指定 / 盆地 / 湖畔 / ジオパーク など … 指定や地形の認識が人によって曖昧
//   ・紀伊半島 / 東海地方 / 両毛 / 中国山地の盆地 / 阪神間 / 有明海 … 範囲の解釈が分かれる
//   ・瀬戸内海に面している? … 大阪湾も制度上は瀬戸内海だが、尼崎などの住民は
//                             「いいえ」と答えそうで、事実と食い違いやすい
//   ・太平洋側の海に面している? … 東京湾・伊勢湾を「太平洋側」と認識するかが人による
//   ・本州方面と橋で結ばれていますか? … 「本州方面」の指す範囲が受け取り方で変わる

// 交通: 駅・インターチェンジ・空港などの有無。あるか無いかがはっきりしている。
const PRUNE_KEYS_TRAFFIC = [
  'aikan_railway','airport','akita_shinkansen_station','chuo_rapid',
  'chuo_sobu','dosan_line','echizen_railway','nagaragawa_railway','yoro_railway','ekimei_chigau',
  'expressway_junction','ferry_available','hakodate_honsen','hakubi_line',
  'hankyu_line','hokuriku_shinkansen_station','ic_akita','ic_banetsu',
  'ic_chugoku','ic_chuo','ic_doo','ic_doto',
  'ic_hanwa','ic_higashi_kyushu','ic_higashikanto','ic_hokukanto',
  'ic_hokuriku','ic_ise','ic_isewangan','ic_joban',
  'ic_joshinetsu','ic_kamaishi','ic_kanetsu','ic_kinki',
  'ic_kochi','ic_kyushu','ic_maizuru_wakasa','ic_matsue',
  'ic_matsuyama','ic_meinikan','ic_meishin','ic_miyazaki',
  'ic_nagano','ic_nagasaki','ic_nihonkai_tohoku','ic_nishimeihan',
  'ic_oita','ic_okayama','ic_okinawa','ic_sanyo',
  'ic_shin_meishin','ic_shin_tomei','ic_takamatsu','ic_tateyama',
  'ic_tohoku','ic_tohoku_chuo','ic_tokai_hokuriku','ic_tokushima',
  'ic_tokyo_gaikan','ic_tomei','ic_tomeihan','ic_yamagata',
  'joban_line','joetsu_shinkansen_station','kagoshima_main_line','keihan_line',
  'keihintohoku_line','keikyu_line','keio_inokashira_line','keisei_line',
  'kintetsu','kururi_line','kyushu_shinkansen_station','meitetsu_line',
  'monorail','musashino_line','nankai_line','nippo_main_line',
  'nishikyushu_shinkansen_station','nishitetsu_line','no_railway_station','odakyu_line',
  'oito_line','private_railway','saikyo_line','sanin_main_line',
  'sanyo_main_line','sanyo_shinkansen_station','seibu_line','shinano_railway',
  'shinkansen','sotetsu_line','subway','sunzu_line',
  'takasaki_line_station','tobu_main_station','tobu_tojo_station','toden_arakawa',
  'tohoku_shinkansen_station','tokaido_shinkansen_station','tokyu_line','tram',
  'tsukuba_express','utsunomiya_station','watarase_line','yamagata_shinkansen_station',
  'yamanote_line','yosan_line',
];

// 人口・行政: 政令指定都市・町村など、制度上はっきり決まっているもの。
const PRUNE_KEYS_ADMIN = [
  'designated','is_town_village','is_village','nuclearpowerplant',
  'seitetsu_kouro',
];

// 遊び心: 自治体名を見れば分かるもの(解釈の余地がある「〜を表す漢字」系は入れない)。
const PRUNE_KEYS_NAME = [
  'big_small_in_name','four_plus_name','kawa_in_name','name_has_betsu',
  'new_old_in_name','pref_name_in_city_name','same_name_other_pref','sea_word_in_name',
  'shima_in_name','ta_in_name','tv_station_area','yama_in_name',
  'yose_hall',
];

// 地理: 海・川・県境など、地図で確定するもの。
const PRUNE_KEYS_GEO = [
  'active_volcano','agano_river','arakawa_river','borders_fukushima',
  'borders_gunma','borders_kanagawa','borders_nagano','borders_yamagata',
  'coastal','edogawa_river','gonokawa','ishikari_river','kitakami_basin','meguro_river','nihonkai',
  'remote_island','shakujii_river','shinano_river',
  'sotobo','sumida_river','tama_river',
  'tokyo_bay','tone_river_area','uchibo','uono_river',
];

const OBJECTIVE_PRUNE_KEYS = new Set([
  ...PRUNE_KEYS_TRAFFIC, ...PRUNE_KEYS_ADMIN, ...PRUNE_KEYS_NAME, ...PRUNE_KEYS_GEO
]);

function pruneByRegionAnswer(key, val, weight){
  if(val === null || weight < 1) return;   // 「わからない」「たぶん」では発動しない

  if(REGION_QUESTION_KEYS.has(key) || AREA_PRUNE_KEYS.has(key) || OBJECTIVE_PRUNE_KEYS.has(key)){
    applyPrune(scorePool.filter(e => (e.city.tags[key] === true) === (val === true)));
    return;
  }

  // 【東京23区の質問も同じ扱いにする】
  // 「東京23区のどれかである?」に確信を持って はい と答えたなら、23区以外の市は
  // すべて矛盾する(他の地方はもちろん、同じ関東の多摩地区や横浜市なども当てはまらない)。
  // 地方の質問と同様に、迷う余地のない客観的な事実なので即座に絞り込む。
  // 「いいえ」側は絞り込まない: 消えるのが23件だけで効果が薄いわりに、押し間違えたときの
  // 損失(23区が正解なら二度と当たらない)が大きいため、従来どおり減点にとどめる。
  if(key === 'is_tokyo_ward' && val === true){
    applyPrune(scorePool.filter(e => e.city.tags.is_tokyo_ward === true));
  }
}

// 候補を完全除外する: (1)複数の客観的回答と明確に矛盾する場合、(2)候補が十分多い場面で
// 確率が極端に低くなった場合。一度「ちがう」と言われた候補の除外(excludedNames)とは別の仕組み。
// どちらも「わからない」やあいまいな回答1回だけでは発動しないよう、しきい値は厳しめにしている。
function pruneObviouslyWrongCandidates(){
  // (1) フル確信度の客観的回答にOBJECTIVE_CONTRADICTION_LIMIT回以上矛盾した候補を除外
  applyPrune(scorePool.filter(e => (e.objMismatch || 0) < OBJECTIVE_CONTRADICTION_LIMIT));

  // (2) 候補が十分多いときだけ、確率(softmax)が極端に低い候補を除外する(終盤の僅差候補は守る)
  if(scorePool.length >= MIN_POOL_FOR_PROB_PRUNE){
    const probs = candidateProbabilities(scorePool);
    applyPrune(scorePool.filter((e, i) => probs[i] >= EXTREME_LOW_PROB_THRESHOLD));
  }
}

// 【回答のコア処理】スコア更新・即時除外・EXCLUSIVE_MAP推論など、画面描画を伴わない部分。
// 通常のanswer()と、「これまでの回答」機能での回答再生の両方から呼ばれる共通処理。
// 戻り値: true = 候補が1件に絞れてforcedGuessCityが設定された(呼び出し元でrenderGuess()するか判断する)
function applyAnswerCore(key, val, weight){
  weight = weight == null ? 1 : weight;
  const subjective = isSubjectiveQuestion(key);
  const matchBonus = subjective ? SUBJ_MATCH_BONUS : OBJ_MATCH_BONUS;
  const mismatchPenalty = subjective ? SUBJ_MISMATCH_PENALTY : OBJ_MISMATCH_PENALTY;

  // 「地元バレポイント」計算用に、質問と回答の組を記録しておく(historyと同じ並び順で増える)。
  // 回答時間(称号「直感派」「じっくり派」用)。極端に長い場合(離席等)は30秒を上限にする。
  const responseMs = questionShownAt != null ? Math.min(30000, Math.max(0, Date.now() - questionShownAt)) : null;
  answerLog.push({ key, val, weight, subjective, responseMs });

  if(val === true && weight >= 1 && !subjective){
    // 客観的質問に確信を持って「はい」と答え、その条件を満たす候補が1つだけに絞れても、
    // 即座に正解扱いにはせず、必ず「もしかして○○ですか?」の確認画面を挟む。
    const uniqueMatches = scorePool.filter(e => !excludedNames.has(e.city.name) && e.city.tags[key] === true);
    if(uniqueMatches.length === 1){
      forcedGuessCity = uniqueMatches[0].city;
      return true;
    }
  }

  if(val !== null){
    // はい/いいえで完全に候補を消すのではなく、一致したら加点・不一致なら減点する。
    // 客観的質問は強く、主観的質問(印象・評判)は控えめに反映する。
    // 「たぶんそう/たぶんいいえ」はweightを0.5にして、加減点の強さを半分にする。
    // フル確信度の客観的質問に矛盾した回数(objMismatch)も、ここで一緒に数えておく
    // (「候補を完全除外する条件」の判定に使う。あいまいな回答では絶対に増えない)。
    const isFullConfidenceObjective = !subjective && weight >= 1;
    allScoreEntries().forEach(e => {
      if(e.city.tags[key] === val){
        e.score += matchBonus * weight;
      } else {
        e.score -= mismatchPenalty * weight;
        if(isFullConfidenceObjective) e.objMismatch = (e.objMismatch || 0) + 1;
      }
    });
    // 人口のはしご質問(フル確信度)なら、判明している人口の範囲を更新しておく。
    // これにより、次の質問選びで既に答えが確定している人口質問を出さないようにする。
    if(isFullConfidenceObjective && POP_LADDER_INFO[key]){
      updateKnownPopRange(key, val);
    }
  }
  // 「わからない」(val === null)は候補の重みを一切変更しない。
  // ただし質問自体はrenderQuestion()側で既に asked に記録済みなので、再び出題されることはない。

  if(val === true && weight >= 1 && EXCLUSIVE_MAP[key]){
    // 「西武線がある?」に確信を持って「はい」と答えたなら、絶対に両立しない「東急線がある?」は
    // 実際には聞かずに「いいえ」だったことにして、次の質問をもっと有効に使う。
    // スコアへの反映(加点/減点)は直接答えた場合と同様に行うが、objMismatch(完全除外の
    // 判定に使う「矛盾回数」)には含めない。理由: これは「プレイヤーが直接答えた事実」では
    // なく「別の回答からの推論」であり、その元になった回答自体が誤答(勘違い)だった場合、
    // 1つの間違いがEXCLUSIVE_MAPを通じて数十件の「推論による矛盾」を連鎖的に生み、
    // 本来まだ正解になり得る候補まで即座に完全除外してしまう(誤答からの巻き返しを
    // 不当に難しくする)ことが実測で確認できたため。
    EXCLUSIVE_MAP[key].forEach(otherKey => {
      if(asked.includes(otherKey)) return;
      asked.push(otherKey);
      // 【例外市の保護】和歌山市のように、実際に太平洋と瀬戸内海の両方に面している市は、
      // 「太平洋?」→「瀬戸内海は"いいえ"のはず」という推論が当てはまらない。
      // この推論はプレイヤーが実際に答えたものではないので、当てはまらない市を不利にしては
      // いけない。かといって何もしないと、他の候補だけが加点されて相対的に沈んでしまう。
      // そこで例外市には他の候補と同じ加点を与え、この推論では順位が動かないようにする
      //(=「瀬戸内海?」は実際には聞かれていないので、そこで差がつかないのが正しい)。
      const exceptions = EXCLUSIVE_EXCEPTIONS[`${key}|${otherKey}`];
      allScoreEntries().forEach(e => {
        if(exceptions && exceptions.has(cityId(e.city))){
          e.score += OBJ_MATCH_BONUS; // 例外市: 推論の対象外なので、他の候補と同じ扱いにする
          return;
        }
        if(e.city.tags[otherKey] === false){
          e.score += OBJ_MATCH_BONUS;
        } else {
          e.score -= OBJ_MISMATCH_PENALTY;
        }
      });
    });
  }

  pruneByRegionAnswer(key, val, weight);
  pruneObviouslyWrongCandidates();
  updateStableStreak();
  return false;
}

function answer(key, val, weight){
  if(val === null){
    // 「わからない・スキップ」が選ばれた質問を記録する。GA4へは都度送るが、
    // GAS(スプレッドシート)への送信は通信回数を減らすため、ゲーム終了時にまとめて送る。
    const questionNumber = questionPhase === 'extra' ? extraQuestionCount : questionCount;
    pendingQuestionSkips.push({ questionKey: key, gameMode: currentMode, questionNumber, helpOpened: questionHelpOpen });
    trackGaEvent('question_skipped', {
      question_key: key,
      game_mode: currentMode,
      question_number: questionNumber,
      help_opened: questionHelpOpen
    });
  }
  const forced = applyAnswerCore(key, val, weight);
  if(forced) return renderGuess();

  // 通常質問側の「最低質問数に達するまでは早押ししない」制約(追加質問側は毎回判定してよい)
  if(questionPhase === 'normal' && questionCount < MIN_Q_BEFORE_EARLY_GUESS){
    return renderQuestion();
  }

  if(shouldGuessNow()){
    return renderGuess();
  }

  renderQuestion();
}

function renderGuess(){
  activeGameTransientScreen = null;
  const sorted = sortedPool();
  const guess = forcedGuessCity || (sorted[0] ? sorted[0].city : CITIES[0]);
  forcedGuessCity = null;
  lastGuessCity = guess;
  const isRetry = guessAttempts > 0;
  const bubbleText = isRetry ? 'うーん、もしかしてこっちかも?' : 'もしかして、この街では?';
  // 【もうわかった！ジャンプ演出】初回の推測(isRetry===false)のときだけ、
  // おらっちが喜んで飛び跳ねる。2回目以降の推測(訂正後の再推測)では、
  // 既に一度見た演出を繰り返さないようにするため付けない。
  // クラスは表示と同時に1回だけ付与するので、演出の有無がボタン操作の
  // タイミングに影響しない(正解発表を遅らせない)。
  const jumpClass = isRetry ? '' : ' mascot-guess-jump';
  if(!isRetry) trackGaEvent('final_guess_animation', { ...analyticsModeParams(currentMode) });
  stage.innerHTML = `
    <div class="mascot-wrap"><div class="pop${jumpClass}">${mascotSVG('happy')}</div></div>
    <div class="bubble"><span class="icon">💭</span>${bubbleText}</div>
    <div class="result-name">${displayName(guess)}</div>
    <div class="result-pref">${guess.pref}</div>
    <div class="choices">
      <button class="btn btn-yes" onclick="correct(true)">当たり!</button>
      <button class="btn btn-no" onclick="correct(false)">ちがう</button>
    </div>
  `;
  saveGameSession('guess', { guessCity: guess });
  updateDebugPanel();
}

// ==================== 地元バレポイント ====================
// 「決め手」らしさが薄い、一般的すぎる/地方区分だけの質問は表示優先度を下げる
// (表示しないわけではないが、より特徴的な回答があれば後回しにする)。
// 【結果画面「地元がバレた理由」で優先度を下げる質問】
// 誰にでも当てはまりやすく、決め手として面白みのないもの。
const DEPRIORITIZED_LANDMARK_KEYS = new Set([
  'pop100k','pop500k','pop300k','pop200k','popUnder50k','popUnder30k','popUnder10k',
  'areaLarge','areaCompact','densityHigh','densityLow',
  'is_town_village','is_tokyo_ward','designated','chukakushi','tokureishi',
  // 海・県境なども「日本の市の半分が該当する」ような一般的な質問なので下げる
  'coastal','borders_other_pref','taiheiyo','nihonkai','private_railway','formed_after_2000',
]);
function isLandmarkDeprioritized(key){
  if(DEPRIORITIZED_LANDMARK_KEYS.has(key)) return true;
  // 8地方(関東・中部…)は範囲が広すぎて決め手としては弱いので下げる。
  // 【注意】以前は /_area$|_region$/ という正規表現で判定していたが、これは
  //   ・chuetsu_region(中越地方)のような「県内の地域」まで巻き込んで下げてしまい
  //   ・region_chubu(中部地方)のような8地方はマッチせず素通りさせていた
  // という、意図とちょうど逆の動きになっていた。
  // 県内地域(中越地方・津軽地方など)は該当数が少なく識別力が高いので、むしろ優先したい。
  if(REGION_QUESTION_KEYS.has(key)) return true;
  // 複数県にまたがる広域(北関東3県・京阪神など)も、県内地域よりは広いので少しだけ下げる対象
  if(WIDE_AREA_BOOST_KEYS.has(key)) return true;
  return false;
}

// 質問文を、結果画面で読める自然な文に変換する(疑問形→言い切り)。
// falseだった回答は、質問文の意味を反転して表示する。
// 例:「信濃川が流れる?」→「信濃川が流れていない」
//     「JRの駅がない?」→「JRの駅がある」
const FALSE_LANDMARK_TEXT_OVERRIDES = {
  // 否定形の質問や、機械的な語尾変換では意味が不自然になりやすいもの
  is_town_village: '市である',
  no_railway_station: '市内に鉄道駅がある',
  kokuho_building: '国宝がない',
  ekimei_chigau: '市の中心駅の名前が市名と同じである',
  four_plus_name: '市の名前が3文字以下（「市」を除く）',
};

function naturalizeQuestionText(key, answerValue = true){
  const q = QUESTIONS[key] || STATS_QUESTIONS[key];
  if(!q || !q.text) return key;

  // 【都道府県質問】「新潟県にありますか?」は機械的に語尾を変えると
  // 「新潟県にあります」「新潟県にありません」となって硬いので、専用の言い回しにする。
  if(PREF_KEY_TO_NAME[key]){
    const pname = PREF_KEY_TO_NAME[key];
    return answerValue === false ? `${pname}にはない` : `${pname}にある`;
  }

  let t = q.text
    .replace(/[?？](?=（)/g, '')
    .replace(/[?？]+\s*$/, '')
    .replace(/でしょうか$/, 'です')
    .replace(/でしたか$/, 'でした')
    .replace(/ましたか$/, 'ました')
    .replace(/ですか$/, 'です')
    .replace(/ますか$/, 'ます')
    .replace(/(の|が|は)方$/, '$1ほう');

  // trueなら、従来どおり質問文を言い切り形にするだけ。
  if(answerValue !== false) return t;

  if(FALSE_LANDMARK_TEXT_OVERRIDES[key]){
    return FALSE_LANDMARK_TEXT_OVERRIDES[key];
  }

  // 数値の境界は、否定文にせず反対側の範囲として表示する。
  if(/人口は.+未満$/.test(t)) return t.replace(/未満$/, '以上');
  if(/人口は.+以上$/.test(t)) return t.replace(/以上$/, '未満');

  // もともと否定形の質問をfalseで答えた場合は、肯定形に戻す。
  // 例:「JRが通っていない?」→「JRが通っている」
  const positiveRules = [
    [/ひとつもない$/, 'ある'],
    [/ていません$/, 'ています'],
    [/ていない$/, 'ている'],
    [/ではありません$/, 'です'],
    [/ではない$/, 'である'],
    [/がありません$/, 'があります'],
    [/がない$/, 'がある'],
    [/いません$/, 'います'],
    [/見えません$/, '見えます'],
    [/見えない$/, '見える'],
    [/含まない$/, '含む'],
    [/存在しない$/, '存在する'],
    [/開催されない$/, '開催される'],
    [/指定されない$/, '指定される'],
    [/されない$/, 'される'],
    [/しない$/, 'する'],
    [/なりやすくない$/, 'なりやすい'],
    [/強くない$/, '強い'],
    [/多くない$/, '多い'],
  ];

  for(const [pattern, replacement] of positiveRules){
    if(pattern.test(t)) return t.replace(pattern, replacement);
  }

  // 肯定形の質問をfalseで答えた場合の自然な否定形。
  // 長い・具体的な語尾から先に判定する。
  const negativeRules = [
    [/置かれたことがある$/, '置かれたことがない'],
    [/開催されたことがある$/, '開催されたことがない'],
    [/として栄えた$/, 'として栄えていない'],
    [/栄えた$/, '栄えていない'],
    [/指定されている$/, '指定されていない'],
    [/結ばれています$/, '結ばれていません'],
    [/知られています$/, '知られていません'],
    [/知られている$/, '知られていない'],
    [/知られた$/, '知られていない'],
    [/知られる$/, '知られていない'],
    [/含まれています$/, '含まれていません'],
    [/含まれます$/, '含まれません'],
    [/含まれている$/, '含まれていない'],
    [/含まれる$/, '含まれない'],
    [/接しています$/, '接していません'],
    [/接している$/, '接していない'],
    [/面しています$/, '面していません'],
    [/面している$/, '面していない'],
    [/流れています$/, '流れていません'],
    [/流れている$/, '流れていない'],
    [/流れる$/, '流れていない'],
    [/通っています$/, '通っていません'],
    [/通っている$/, '通っていない'],
    [/通る$/, '通っていない'],
    [/走っています$/, '走っていません'],
    [/走っている$/, '走っていない'],
    [/走る$/, '走っていない'],
    [/入っています$/, '入っていません'],
    [/入っている$/, '入っていない'],
    [/ている$/, 'ていない'],
    [/住んでいます$/, '住んでいません'],
    [/住んでいる$/, '住んでいない'],
    [/置かれていた$/, '置かれていない'],
    [/誕生した$/, '誕生していない'],
    [/開催された$/, '開催されていない'],
    [/開催される$/, '開催されない'],
    [/立地する$/, '立地していない'],
    [/存在する$/, '存在しない'],
    [/製造する$/, '製造していない'],
    [/関係がある$/, '関係がない'],
    [/含む$/, '含まない'],
    [/見えます$/, '見えません'],
    [/見える$/, '見えない'],
    [/受けました$/, '受けていない'],
    [/受けた$/, '受けていない'],
    [/なりやすい$/, 'なりやすくない'],
    [/強い$/, '強くない'],
    [/多い$/, '多くない'],
    [/あります$/, 'ありません'],
    [/います$/, 'いません'],
    [/がある$/, 'がない'],
    [/にある$/, 'にない'],
    [/ある$/, 'ない'],
    [/がいる$/, 'がいない'],
    [/である$/, 'ではない'],
    [/だった$/, 'ではなかった'],
    [/です$/, 'ではない'],
    [/有名$/, '有名ではない'],
    [/以上$/, '未満'],
    [/未満$/, '以上'],
    [/する$/, 'しない'],
    [/される$/, 'されない'],
    [/れる$/, 'れない'],
    [/異なる$/, '異ならない'],
    [/地域$/, '地域ではない'],
    [/地方$/, '地方ではない'],
    [/都市$/, '都市ではない'],
    [/首都$/, '首都ではない'],
    [/料理$/, '料理ではない'],
    [/聖地$/, '聖地ではない'],
    [/舞台$/, '舞台ではない'],
    [/ふるさと$/, 'ふるさとではない'],
    [/本拠地$/, '本拠地ではない'],
    [/所在地$/, '所在地ではない'],
    [/の地$/, 'の地ではない'],
    [/の街$/, 'の街ではない'],
    [/街$/, '街ではない'],
    [/村$/, '村ではない'],
    [/ひとつ$/, 'ひとつではない'],
    [/ひらがな$/, 'ひらがなではない'],
    [/マチ$/, 'マチではない'],
    [/まち$/, 'まちではない'],
    [/一文字$/, '一文字ではない'],
    [/3ケタ$/, '3ケタではない'],
    [/よう$/, 'ようではない'],
    [/ほう$/, 'ほうではない'],
  ];

  for(const [pattern, replacement] of negativeRules){
    if(pattern.test(t)) return t.replace(pattern, replacement);
  }

  // 未知の語尾でも肯定文のまま表示しないための安全なフォールバック。
  return `${t}、という特徴はない`;
}

// このゲームの回答履歴(history + answerLog)を振り返り、確定した自治体を
// 特定する決め手になった回答を最大3つ選ぶ。ゲームロジック(候補の絞り込みなど)には
// 一切影響しない、結果画面表示専用の後付け計算。
function computeBarePoints(finalCity){
  const candidates = [];
  for(let i = 0; i < history.length; i++){
    const h = history[i];
    const rec = answerLog[i];
    if(!rec || rec.key !== h.key) continue; // 念のための整合性チェック
    if(rec.val === null) continue; // 「わからない」は対象外
    if(!!finalCity.tags[rec.key] !== !!rec.val) continue; // 正解自治体のデータと矛盾する回答は対象外

    const poolBefore = h.scorePool.filter(e => !h.excludedNames.has(e.city.name));
    const nextH = history[i+1];
    const poolAfter = nextH
      ? nextH.scorePool.filter(e => !nextH.excludedNames.has(e.city.name))
      : scorePool.filter(e => !excludedNames.has(e.city.name)); // 最後の質問なら「今の」状態を使う

    if(poolBefore.length === 0) continue;
    const idxBefore = poolBefore.findIndex(e => e.city.name === finalCity.name);
    if(idxBefore === -1) continue; // 正解自治体がこの時点で候補に無い(理論上起きないはずだが念のため)
    const probsBefore = candidateProbabilities(poolBefore);
    const probBefore = probsBefore[idxBefore] || 0;

    let probAfter = probBefore;
    const idxAfter = poolAfter.findIndex(e => e.city.name === finalCity.name);
    if(idxAfter !== -1){
      const probsAfter = candidateProbabilities(poolAfter);
      probAfter = probsAfter[idxAfter] || probBefore;
    }

    const poolSizeBefore = poolBefore.length;
    const poolSizeAfter = poolAfter.length;
    const narrowedBy = Math.max(0, poolSizeBefore - poolSizeAfter);
    const narrowedRatio = poolSizeBefore > 0 ? narrowedBy / poolSizeBefore : 0;
    const probGain = Math.max(0, probAfter - probBefore);

    // 希少性: この質問の答え(はい/いいえ)に、質問前の候補の中でどれだけ少数だけが該当するか
    const matchCount = poolBefore.filter(e => !!e.city.tags[rec.key] === !!rec.val).length;
    const rarity = poolSizeBefore > 0 ? 1 - (matchCount / poolSizeBefore) : 0;

    // 【重み付け】「実際に候補を大きく減らした質問」を第一の基準にする。
    //   narrowedRatio … その回答で候補が何割減ったか(=いちばん効いた質問)
    //   probGain      … 正解自治体の確率がどれだけ上がったか(有力候補の絞り込み)
    //   rarity        … その答えに該当する市が少ないほど識別力が高い
    // 以前は probGain を最重視していたため、「中部地方です」「海に面していない」のような
    // 一般的な回答が、信濃川・豪雪といった本当の決め手より上に出ることがあった。
    let importance = narrowedRatio * 55 + probGain * 45 + rarity * 20;
    if(!rec.subjective) importance *= 1.15;  // 客観的な回答のほうをやや優先する
    if(rec.val === true) importance *= 1.12; // 「〜である」という特徴のほうが読んで面白い
    // 終盤の質問ほど「最後の決め手」らしいので、わずかに優先する
    importance *= 1 + Math.min(0.15, (i / Math.max(1, history.length)) * 0.15);
    // 一般的すぎる質問は大きく下げる。8地方の質問は即時除外で候補を一気に減らすため
    // narrowedRatio が非常に大きくなり、0.25倍程度では上位に残ってしまう(実測で確認)。
    if(isLandmarkDeprioritized(rec.key)) importance *= 0.08;

    // ほとんど絞れていない質問は「決め手」とは呼べないので対象外にする
    if(narrowedRatio < 0.03 && probGain < 0.02) continue;

    candidates.push({ key: rec.key, importance, text: naturalizeQuestionText(rec.key, rec.val) });
  }

  candidates.sort((a, b) => b.importance - a.importance);

  // 【ジャンルの分散】同じような内容が3件並ぶと単調になるので、可能な範囲でジャンルを散らす。
  // 「地方・交通・名物」のように違う切り口が並んだほうが読んでいて面白い。
  // ただし無理に分散させて弱い理由を混ぜると本末転倒なので、
  // 同ジャンルは2件までとし、それで3件そろわなければ重要度順でそのまま埋める。
  const BARE_SAME_CATEGORY_MAX = 2;
  // 「中部地方です」「海に面している」のような一般的な理由は、並べても面白くないので1件まで。
  const BARE_GENERAL_MAX = 1;
  const picked = [];
  const usedCategory = {};
  let generalCount = 0;
  for(const c of candidates){
    if(picked.length >= 3) break;
    const cat = TAG_GAME_CATEGORY[c.key] || 'その他';
    if((usedCategory[cat] || 0) >= BARE_SAME_CATEGORY_MAX) continue;
    const general = isLandmarkDeprioritized(c.key);
    if(general && generalCount >= BARE_GENERAL_MAX) continue;
    if(general) generalCount++;
    usedCategory[cat] = (usedCategory[cat] || 0) + 1;
    picked.push(c);
  }
  // 分散の制限で3件に届かなかった場合は、重要度順に残りから埋める
  for(const c of candidates){
    if(picked.length >= 3) break;
    if(picked.includes(c)) continue;
    picked.push(c);
  }
  // 無理に3件そろえない。有効な候補が1~2件しか無ければそのまま返す。
  return picked.map(c => c.text);
}

// 診断カード用: 既存のtagsだけから「雪国度」「都市規模」「ご当地色」を1〜5段階で算出
// (cities.jsonに新しいフィールドを追加せず、既存タグの組み合わせだけで計算する)
// ==================== 正解時の褒め言葉 ====================
// 【質問数に応じた基本評価】星評価は初期実装として質問数だけで決める
// (自治体ごとの難易度=誤答率などは考慮しない。将来の拡張候補)。
// 同じ状況でも毎回まったく同じ文言にならないよう、各段階で数種類から抽選する。
const PRAISE_TIERS = [
  { max: 10, stars: 5, lines: ['驚異的！ おらマチ名人！', '神業の推理でした！', 'おらっちもびっくりの速さ！'] },
  { max: 15, stars: 4, lines: ['すごい！ かなり早い！', 'お見事なひらめき！', 'かなりの推理力です！'] },
  { max: 20, stars: 3, lines: ['お見事！', 'よく当てました！', 'いい調子です！'] },
  { max: 25, stars: 2, lines: ['じっくり推理して的中！', '粘り強い推理でした！', '着実に絞り込みましたね'] },
  { max: Infinity, stars: 1, lines: ['最後までありがとう！', '長い推理、お疲れさまでした！', '最後まで付き合ってくれてありがとう！'] },
];
function basePraiseFor(totalQuestions){
  const tier = PRAISE_TIERS.find(t => totalQuestions <= t.max);
  const line = tier.lines[Math.floor(Math.random() * tier.lines.length)];
  return { stars: tier.stars, line };
}

// 【特別メッセージ】該当する場合に基本評価より優先して表示する。上から順に判定し、
// 最初に該当した1件だけを使う(大げさになりすぎないよう複数は重ねない)。
// 地方制覇・全国制覇率の節目は、対応する称号がちょうど今回解除されたかどうかで判定する
// (二重に判定条件を持たず、称号の定義と食い違いが起きないようにするため)。
function specialPraiseFor(info){
  if(info.isNewRecord){
    return { emoji: '🎉', title: '最短記録更新！', body: `これまでの記録を${info.recordDiff}問更新しました。` };
  }
  if(info.isFirstEverPlay){
    return { emoji: '🌟', title: 'はじめてのプレイで的中！', body: '幸先のいいスタートです。' };
  }
  if(info.isStreakRecord){
    return { emoji: '🔥', title: '連続正解記録更新！', body: `現在${info.streakCount}連続正解中です。` };
  }
  if(info.regionAchievement){
    return { emoji: '🗾', title: '地方制覇達成！', body: `「${info.regionAchievement.name}」を獲得しました。` };
  }
  if(info.collectionAchievement){
    return { emoji: '🏆', title: '制覇数の節目に到達！', body: `「${info.collectionAchievement.name}」を獲得しました。` };
  }
  if(info.isFirstWinOfCity){
    return { emoji: '🎯', title: `はじめて${info.cityName}を制覇！`, body: '全国制覇帳に新しく記録されました。' };
  }
  if(info.newAchievementsCount > 0){
    return { emoji: '🏅', title: '新しい称号を獲得しました！', body: '' };
  }
  return null;
}

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
  if (city.stats && city.stats.population >= 1000000) urban += 2;
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

// 【シェア文のバリエーション】状況に応じて異なる文言を返す。
// 優先順位: 自己最短記録更新 > 新しい称号を獲得 > 通常の正解 / 不正解。
// options:
//   isNewRecord: bool          … 自己最短記録を更新したか
//   newAchievement: {name}     … 今回新しく獲得した称号のうち代表の1件(あれば)
//   success: bool              … 正解できたかどうか(false=不正解シェア用)
//   correctCityLabel: string   … 不正解時、訂正フォームで入力された「本当の地元」の表示名
//   distinctCount: number      … 現在の全国制覇数(称号シェア用)
function buildShareText(city, totalQuestions, options){
  options = options || {};
  const q = totalQuestions != null ? totalQuestions : questionCount;
  const cityLabel = city ? `${city.pref}${shareDisplayName(city)}` : '';

  if(options.isNewRecord && city){
    return `🎉 自己最短記録更新！\n${q}問で「${cityLabel}」を的中！\n#おらマチ`;
  }
  if(options.newAchievement){
    const distinctLabel = options.distinctCount != null ? `\n現在${options.distinctCount}自治体を制覇中。` : '';
    return `🏅「${options.newAchievement.name}」の称号を獲得しました！${distinctLabel}\n#おらマチ`;
  }
  if(options.success === false){
    const correctLabel = stripPrefSuffix(options.correctCityLabel) || '???';
    return `🦝 おらっちでも見抜けなかった！\n今回の正解は「${correctLabel}」でした。\nあなたの地元も挑戦してみませんか？\n#おらマチ #まちあてゲーム`;
  }
  return `🦝 おらマチで挑戦！\n${q}問で「${cityLabel}」を当てられました！\nあなたの地元は隠し通せる？\n#おらマチ #まちあてゲーム`;
}

// シェア操作(X文章・画像)が実際に行われた回数を加算し、シェア系の称号を再判定する。
// 正解結果画面の外(既にcurrentResultが無い場面)から呼ばれることもあるため、
// 称号判定は「今回のゲーム情報無し(ctx.game=null)」で行い、シェア系以外の
// game依存の称号(hidden系など)が誤って解除されないようにする。
function incrementShareCount(){
  const stats = loadStats();
  stats.shareCount = (stats.shareCount || 0) + 1;
  saveStats(stats);
  const unlocked = checkAchievements(null);
  if(unlocked.length && stage && stage.innerHTML.includes('share-card')){
    // 結果画面を表示中なら、称号獲得演出を追加で出す(既存のトースト表示を流用)
    const container = document.getElementById('achievementToastContainer');
    if(container) container.innerHTML = renderAchievementToastCard(unlocked);
  }
}

function shareToX(city, totalQuestions, trackShare = true){
  const q = totalQuestions != null ? totalQuestions : questionCount;
  if(trackShare){
    trackGaEvent('share', {
      method: 'x_text',
      content_type: 'game_result',
      item_id: city ? displayName(city) : '',
      ...analyticsModeParams(currentMode),
      question_count: q
    });
    trackGaEvent('share_button_click', { method: 'x_text' });
    incrementShareCount(); // シェア系称号の判定に使う累計回数
  }

  // 今シェアしようとしている結果が、直近の正解結果(currentResult)と同じものであれば、
  // 記録更新・称号獲得の情報を自動的にシェア文へ反映する(呼び出し側で毎回渡さずに済むように)。
  const isSameAsCurrent = currentResult && currentResult.city && city && cityId(currentResult.city) === cityId(city);
  const shareOptions = isSameAsCurrent ? {
    isNewRecord: currentResult.isNewRecord,
    newAchievement: (currentResult.newAchievements && currentResult.newAchievements[0]) || null,
    distinctCount: Object.keys(loadConquest().entries).length,
    success: currentResult.success,
  } : {};

  const text = buildShareText(city, totalQuestions, shareOptions);
  const pageUrl = location.href.split('#')[0];
  const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(pageUrl)}`;
  window.open(intent, '_blank', 'noopener,noreferrer');
}

// ==================== 結果カードの画像共有 ====================
// 外部ライブラリ・外部CDNは一切使わず、Canvas 2D APIへ直接描画する。
// 使う画像は、既にPWAへ同梱済みのマスコットPNGのみ(オフラインでも生成できる)。
const SHARE_IMAGE_W = 1080;
const SHARE_IMAGE_H = 1350;

function loadImageSafe(src, timeoutMs){
  return new Promise((resolve) => {
    const img = new Image();
    let done = false;
    const finish = (result) => { if(!done){ done = true; resolve(result); } };
    img.onload = () => finish(img);
    img.onerror = () => finish(null);
    img.src = src;
    setTimeout(() => finish(null), timeoutMs || 2500);
  });
}

// currentResult(結果画面で確定した同じデータ)だけを使ってカード画像を生成する。
// 自治体の再計算は一切行わない。
async function generateShareImageCanvas(){
  if(!currentResult || !currentResult.city) return null;
  const city = currentResult.city;
  const q = currentResult.questionCount;
  const barePoints = currentResult.barePoints || [];

  const canvas = document.createElement('canvas');
  canvas.width = SHARE_IMAGE_W;
  canvas.height = SHARE_IMAGE_H;
  const ctx = canvas.getContext('2d');
  if(!ctx) return null;

  // 背景(サイトのクリーム色)
  ctx.fillStyle = '#F7F1E3';
  ctx.fillRect(0, 0, SHARE_IMAGE_W, SHARE_IMAGE_H);
  // うっすらとした縁取り
  ctx.strokeStyle = 'rgba(38,58,92,0.15)';
  ctx.lineWidth = 6;
  ctx.strokeRect(18, 18, SHARE_IMAGE_W - 36, SHARE_IMAGE_H - 36);

  const FONT = "'Hiragino Sans','Yu Gothic','Meiryo',sans-serif"; // Webフォント読み込み待ちが不要な安全なフォント

  // ロゴ(円形マーク+テキスト)
  const logoY = 90;
  ctx.beginPath(); ctx.arc(90, logoY, 42, 0, Math.PI*2); ctx.fillStyle = '#263A5C'; ctx.fill();
  ctx.beginPath();
  ctx.moveTo(90, logoY-24);
  ctx.bezierCurveTo(74, logoY-24, 64, logoY-11, 64, logoY);
  ctx.bezierCurveTo(64, logoY+16, 90, logoY+38, 90, logoY+38);
  ctx.bezierCurveTo(90, logoY+38, 116, logoY+16, 116, logoY);
  ctx.bezierCurveTo(116, logoY-11, 106, logoY-24, 90, logoY-24);
  ctx.closePath();
  ctx.fillStyle = '#F7F1E3'; ctx.fill();
  ctx.beginPath(); ctx.arc(90, logoY-2, 14, 0, Math.PI*2); ctx.fillStyle = '#C1432E'; ctx.fill();
  ctx.fillStyle = '#263A5C';
  ctx.font = `bold 44px ${FONT}`;
  ctx.textBaseline = 'middle';
  ctx.fillText('おらマチ', 150, logoY);

  // マスコット
  const mascotImg = await loadImageSafe(MASCOT_IMAGES.happy, 2500);
  if(mascotImg){
    const mw = 260, mh = 260 * (mascotImg.height / mascotImg.width || 1);
    ctx.drawImage(mascotImg, SHARE_IMAGE_W - mw - 60, 40, mw, mh);
  }

  // 「あたり」判子風
  ctx.save();
  ctx.translate(SHARE_IMAGE_W/2, 380);
  ctx.rotate(-8 * Math.PI/180);
  ctx.strokeStyle = '#C1432E'; ctx.lineWidth = 8;
  ctx.strokeRect(-110, -50, 220, 100);
  ctx.fillStyle = '#C1432E';
  ctx.font = `bold 64px ${FONT}`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('あたり', 0, 0);
  ctx.restore();
  ctx.textAlign = 'left';

  // 自治体名・都道府県
  ctx.fillStyle = '#263A5C';
  ctx.font = `bold 84px ${FONT}`;
  ctx.textAlign = 'center';
  ctx.fillText(shareDisplayName(city), SHARE_IMAGE_W/2, 520);
  ctx.font = `36px ${FONT}`;
  ctx.fillStyle = '#6B6455';
  ctx.fillText(city.pref, SHARE_IMAGE_W/2, 580);

  // 質問数
  ctx.font = `bold 40px ${FONT}`;
  ctx.fillStyle = '#263A5C';
  ctx.fillText(`おらっちが ${q}問 で当てました!`, SHARE_IMAGE_W/2, 660);

  // 【星評価・自己ベスト・称号・全国制覇数】結果画面の褒め言葉と同じ質問数基準で星を出す。
  // 自己ベスト更新・新称号は、あれば優先してバッジ風に添える(無ければ全国制覇数だけ表示)。
  const shareStars = basePraiseFor(q).stars;
  ctx.textAlign = 'center';
  ctx.font = `bold 40px ${FONT}`;
  ctx.fillStyle = '#D4A017';
  ctx.fillText('★'.repeat(shareStars) + '☆'.repeat(5 - shareStars), SHARE_IMAGE_W/2, 712);

  const distinctCountForImage = Object.keys(loadConquest().entries).length;
  const badgeParts = [];
  if(currentResult.isNewRecord) badgeParts.push('🎉 自己ベスト更新！');
  if(currentResult.newAchievements && currentResult.newAchievements.length) badgeParts.push(`🏅 ${currentResult.newAchievements[0].name}`);
  badgeParts.push(`🗾 全国制覇 ${distinctCountForImage}自治体`);
  ctx.font = `bold 28px ${FONT}`;
  ctx.fillStyle = '#C1432E';
  ctx.fillText(badgeParts.join('　'), SHARE_IMAGE_W/2, 758);

  // 地元バレポイント
  let y = 810;
  if(barePoints.length){
    ctx.textAlign = 'left';
    ctx.font = `bold 36px ${FONT}`;
    ctx.fillStyle = '#C1432E';
    ctx.fillText('あなたの地元がバレた理由', 80, y);
    y += 56;
    ctx.font = `32px ${FONT}`;
    ctx.fillStyle = '#3a3a34';
    barePoints.slice(0, 3).forEach(text => {
      const line = '・' + text;
      // 長い文はカードの横幅に収まるよう簡易的に折り返す
      const maxWidth = SHARE_IMAGE_W - 160;
      if(ctx.measureText(line).width > maxWidth){
        let cur = '';
        for(const ch of line){
          if(ctx.measureText(cur + ch).width > maxWidth){ ctx.fillText(cur, 80, y); y += 44; cur = ''; }
          cur += ch;
        }
        ctx.fillText(cur, 80, y); y += 54;
      } else {
        ctx.fillText(line, 80, y); y += 54;
      }
    });
  }

  // フッター(サイト名)
  ctx.textAlign = 'center';
  ctx.font = `28px ${FONT}`;
  ctx.fillStyle = '#8a8578';
  ctx.fillText('おらマチ | Yes/Noであなたのマチを当てるゲーム', SHARE_IMAGE_W/2, SHARE_IMAGE_H - 60);

  return canvas;
}

async function canvasToBlob(canvas){
  return new Promise((resolve) => {
    if(canvas.toBlob){
      canvas.toBlob((blob) => resolve(blob), 'image/png');
    } else {
      resolve(null);
    }
  });
}

// 画像共有のエントリポイント。優先順位:
// 1. Web Share API(画像ファイル共有に対応していれば画像+文章)
// 2. 画像を端末へ保存(ダウンロード)
// 3. 文章のみの共有/コピーへフォールバック
async function shareResultImage(){
  const statusEl = document.getElementById('shareImageStatus');
  const setStatus = (msg) => { if(statusEl) statusEl.textContent = msg; };
  if(!currentResult || !currentResult.city){ setStatus('シェアできる結果がありません'); return; }

  // ボタン利用数として計測する。共有キャンセル時も「ボタンを使った」1回に含める。
  trackGaEvent('share', {
    method: 'image_button',
    content_type: 'game_result',
    item_id: displayName(currentResult.city),
    ...analyticsModeParams(currentResult.mode || currentMode),
    question_count: currentResult.questionCount
  });

  setStatus('画像を作成しています…');
  let canvas;
  try{
    canvas = await generateShareImageCanvas();
    if(canvas) trackGaEvent('share_image_generated', { item_id: displayName(currentResult.city) });
  }catch(e){
    console.warn('おらマチ: 画像カードの生成に失敗しました', e);
    canvas = null;
  }

  const text = buildShareText(currentResult.city, currentResult.questionCount, {
    isNewRecord: currentResult.isNewRecord,
    newAchievement: (currentResult.newAchievements && currentResult.newAchievements[0]) || null,
    distinctCount: Object.keys(loadConquest().entries).length,
    success: currentResult.success,
  });
  const pageUrl = location.href.split('#')[0];

  if(!canvas){
    // 画像生成に失敗しても、通常の文章シェアは必ず使えるようにする。
    // ボタン利用としては既に上のtrackGaEvent('share', {method:'image_button',...})で計測済みなので、
    // ここは「実際に文章シェアへ進んだ」ことが分かるよう true で送る(二重計測ではなく別イベント扱い)。
    setStatus('画像の生成に失敗したため、文章でシェアします。');
    shareToX(currentResult.city, currentResult.questionCount, true);
    return;
  }

  const blob = await canvasToBlob(canvas);
  if(!blob){
    setStatus('画像の生成に失敗したため、文章でシェアします。');
    shareToX(currentResult.city, currentResult.questionCount, true);
    return;
  }

  const fileName = `oramachi_${displayName(currentResult.city)}.png`;
  const file = (typeof File !== 'undefined') ? new File([blob], fileName, { type: 'image/png' }) : null;

  // 1. Web Share API(画像ファイル対応)
  if(file && navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share){
    try{
      await navigator.share({ files: [file], text, url: pageUrl, title: 'おらマチ' });
      setStatus('');
      trackGaEvent('share_completed', { method: 'web_share_api' });
      incrementShareCount();
      return;
    }catch(e){
      // ユーザーがキャンセルした場合などはエラーにせず、静かに終える
      if(e && e.name === 'AbortError'){ setStatus(''); trackGaEvent('share_cancelled', { method: 'web_share_api' }); return; }
      console.warn('おらマチ: 画像共有に失敗したため保存にフォールバックします', e);
    }
  }

  // 2. 画像を端末へ保存(ダウンロード)
  try{
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    setStatus('画像を保存しました。SNSアプリなどから画像を選んで共有してください。');
    trackGaEvent('share_completed', { method: 'image_download' });
    incrementShareCount();
    return;
  }catch(e){
    console.warn('おらマチ: 画像の保存に失敗しました', e);
  }

  // 3. 最終フォールバック: 文章シェア
  setStatus('画像の共有・保存に対応していない環境のため、文章でシェアします。');
  shareToX(currentResult.city, currentResult.questionCount, true);
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
  // 匿名送信設定がOFFの場合、自動送信(プレイ結果の送信)はここで止める。
  // ただし訂正フォームの送信(sendCorrectionToSheet)はユーザーの明示操作なので対象外。
  if(!isAnonymousReportingEnabled()) return;
  try{
    const totalQ = (currentResult && currentResult.questionCount != null) ? currentResult.questionCount : (questionCount + extraQuestionCount);
    fetch(CORRECTIONS_ENDPOINT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        type: 'result',
        result: result, // 'success' または 'giveup'
        cityName: city ? displayName(city) : '',
        pref: city ? city.pref : '',
        questionCount: totalQ,
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

function safeApiNumber(value, min, max, integerOnly){
  if(typeof value !== 'number' || !Number.isFinite(value) || value < min || value > max) return null;
  if(integerOnly && !Number.isInteger(value)) return null;
  return value;
}

function normalizeStatsRankingList(rawList){
  if(!Array.isArray(rawList)) return [];
  return rawList.slice(0, 50).map(raw => {
    if(!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
    const pref = typeof raw.pref === 'string' ? raw.pref.trim() : '';
    const name = typeof raw.name === 'string' ? raw.name.trim() : '';
    // APIが返した表示名は信用せず、現在の自治体データに存在する組み合わせだけを採用する。
    const city = CITIES.find(c => c.pref === pref && (displayName(c) === name || c.name === name));
    if(!city) return null;
    const accuracy = safeApiNumber(raw.accuracy, 0, 100, false);
    const avgQuestions = safeApiNumber(raw.avgQuestions, 0, 1000, false);
    const plays = safeApiNumber(raw.plays, 0, 1000000000, true);
    if(accuracy == null || avgQuestions == null) return null;
    return {
      pref: city.pref,
      name: displayName(city),
      accuracy,
      avgQuestions,
      ...(plays == null ? {} : { plays }),
    };
  }).filter(Boolean);
}

function normalizeLiveStatsPayload(raw){
  if(!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
  if(raw.ok === false) return null;
  const safe = {};
  const totalPlays = safeApiNumber(raw.totalPlays, 0, 1000000000, true);
  const todayPlays = safeApiNumber(raw.todayPlays, 0, 1000000000, true);
  const todayVisitors = safeApiNumber(raw.todayVisitors, 0, 1000000000, true);
  if(totalPlays != null) safe.totalPlays = totalPlays;
  if(todayPlays != null) safe.todayPlays = todayPlays;
  if(todayVisitors != null) safe.todayVisitors = todayVisitors;

  safe.recentSuccesses = Array.isArray(raw.recentSuccesses)
    ? raw.recentSuccesses.slice(0, 10)
      .filter(v => typeof v === 'string')
      .map(v => v.replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, 80))
      .filter(Boolean)
    : [];

  if(raw.statsDetail && typeof raw.statsDetail === 'object' && !Array.isArray(raw.statsDetail)){
    const d = raw.statsDetail;
    const overallAccuracy = safeApiNumber(d.overallAccuracy, 0, 100, false);
    const overallAvgQuestions = safeApiNumber(d.overallAvgQuestions, 0, 1000, false);
    const minSampleSize = safeApiNumber(d.minSampleSize, 1, 1000000000, true);
    if(overallAccuracy != null && overallAvgQuestions != null){
      safe.statsDetail = {
        overallAccuracy,
        overallAvgQuestions,
        ...(minSampleSize == null ? {} : { minSampleSize }),
        hardestCities: normalizeStatsRankingList(d.hardestCities),
        easiestCities: normalizeStatsRankingList(d.easiestCities),
        mostQuestionsCities: normalizeStatsRankingList(d.mostQuestionsCities),
        fewestQuestionsCities: normalizeStatsRankingList(d.fewestQuestionsCities),
      };
    }
  }
  return safe;
}

async function fetchLiveStats(){
  if(!CORRECTIONS_ENDPOINT_URL) return;
  try{
    const res = await fetch(CORRECTIONS_ENDPOINT_URL, { method: 'GET' });
    if(!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    const normalized = normalizeLiveStatsPayload(data);
    if(!normalized) throw new Error('invalid stats response');
    liveStats = normalized;
    // 「トップページが今表示されているか」は、文言の一致(以前はここで固定文言を
    // 探していたが、キャッチコピー変更で文言が変わり判定できなくなっていた)ではなく、
    // トップページにしか存在しない liveStatsTop 要素の有無で判定する。
    const liveStatsTop = document.getElementById('liveStatsTop');
    if(liveStatsTop){
      liveStatsTop.innerHTML = renderStatsBlock();
      if(Number.isFinite(liveStats.todayVisitors)) trackGaEvent('daily_visitors_displayed', { count: liveStats.todayVisitors });
    }
  }catch(e){
    console.warn('おらマチ: 統計の取得に失敗しました', e);
  }
}

function renderStatsBlock(){
  if(!liveStats) return '';
  const recent = (liveStats.recentSuccesses || []).slice(0, 10);
  const recentHtml = recent.length
    ? `<div class="recent-line">🎉 最近当てられたマチ: ${recent.map(escapeHtml).join('、')}</div>`
    : '';
  const countHtml = (liveStats.totalPlays != null)
    ? `<div class="count-stats">これまで <b>${liveStats.totalPlays}</b> 回プレイ ・ 今日は <b>${liveStats.todayPlays || 0}</b> 回</div>`
    : '';
  // 【今日の挑戦者数】「○回遊ばれた」(プレイ回数)ではなく「○人が挑戦した」(ユニーク端末数)を表示する。
  // サーバー側(Google Apps Script)がまだ対応していない・集計に失敗した場合は liveStats.todayVisitors が
  // undefined のままになるので、その場合は何も表示しない(0人と断定したり、数字を水増ししたりしない)。
  const visitorHtml = Number.isFinite(liveStats.todayVisitors)
    ? `<div class="visitor-count-line"><span class="visitor-count-label">今日の挑戦者</span><span class="visitor-count-num">${liveStats.todayVisitors}</span><span class="visitor-count-unit">人</span></div>`
    : '';
  if(!recentHtml && !countHtml && !visitorHtml) return '';
  return `<div class="stats-block-top">${visitorHtml}${countHtml}${recentHtml}</div>`;
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

// 正解画面の「この情報を訂正する」から呼ばれる。結果自治体(currentResult.city)は
// 再計算せず、既存の訂正フォームをその場に差し込むだけ。
function renderSuccessCorrectionForm(){
  const holder = document.getElementById('shareImageStatus');
  if(holder) holder.innerHTML = renderCorrectionForm();
}

// 訂正フォームで入力された(都道府県, 市区町村名の自由記述)から、CITIESデータの該当自治体を
// 特定する。表記ゆれがあるため、都道府県が一致し、かつ市区町村名が前方一致(「府中」→
// 「府中市」等)する場合のみ一致とみなす、控えめな判定にしている(誤って別の市と紐付けないため)。
// 【不正解の原因分析】answerLog(このゲームで実際に回答した内容)と、本当のマチのデータ
// (matched.tags)を比較し、矛盾していた回答を抽出する。
//
// 除外するもの:
//   ・val === null(「わからない」) … スコアに一切影響しないため、原因にはなり得ない。
//   ・matched.tags[key] が boolean でない(データ不足・未設定) … 断定できないので誤回答扱いしない。
//
// 重要度(severity)の目安:
//   ・フル確信度(weight>=1)の矛盾を最重要とする(スコアへの影響が最も大きいため)。
//   ・「たぶんそう/たぶん違う」(weight<1)は影響が半分なので、重要度も一段下げる。
//   ・EXCLUSIVE_MAPによる自動推論(=answerLogには記録されない)は、そもそもここでは扱わない
//     (プレイヤーが直接答えたことではないため。既存のEXCLUSIVE_MAP設計時の判断を踏襲)。
//
// 戻り値は重要度が高い順に並べた配列: [{ key, question, userLabel, actualLabel, weight, severity }]
function computeAnswerMismatches(matched){
  if(!matched) return [];
  const results = [];
  answerLog.forEach(entry => {
    if(entry.val === null) return; // 「わからない」は原因にならない
    const actual = matched.tags[entry.key];
    if(typeof actual !== 'boolean') return; // データが無い項目は断定しない
    if(actual === entry.val) return; // 矛盾していない

    const q = QUESTIONS[entry.key];
    if(!q) return; // 万一定義が見つからない場合はスキップ(表示崩れ防止)

    const weight = entry.weight == null ? 1 : entry.weight;
    const isFull = weight >= 1;
    results.push({
      key: entry.key,
      question: q.text,
      userLabel: answerValueLabel(entry.val, weight).label,
      actualLabel: actual ? 'はい' : 'いいえ',
      weight,
      severity: isFull ? 2 : 1, // 2=フル確信度の矛盾(最重要) / 1=あいまいな回答での矛盾
    });
  });
  // 重要度が高い順、同じ重要度なら回答した順(古い方=序盤の判断ミスを先に見せる)
  results.sort((a, b) => b.severity - a.severity);
  return results;
}

function findCityByPrefAndFreeText(pref, cityText){
  const normalize = s => (s || '').replace(/\s/g, '');
  const inputCityNorm = normalize(cityText);
  return CITIES.find(c => {
    if(c.name === '東京') return false;
    if(c.pref !== pref) return false;
    const n = normalize(displayName(c));
    return n === inputCityNorm || n.startsWith(inputCityNorm) || inputCityNorm.startsWith(n.replace(/[市区町村]$/, ''));
  }) || null;
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

  // 「もしかして」の対象は、常にlastGuessCity(直近に画面へ出した候補)を使う。
  // 途中でsortedPool()の順位が変わっても、ユーザーが実際に見た候補名とズレないようにする。
  const guess = lastGuessCity || (currentResult && currentResult.city) || (sortedPool()[0] || {}).city || CITIES[0];
  const entry = {
    guessedName: guess ? displayName(guess) : null,
    guessedPref: guess ? guess.pref : null,
    correctPref: pref,
    correctCity: city,
    questionCount: questionCount + extraQuestionCount,
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

  // 入力された「本当のマチ」がCITIESデータのどれに該当するかを特定する(表記ゆれに強い
  // 前方一致判定)。見つかれば、不正解時の原因分析(computeAnswerMismatches)と
  // 「惜しい候補」判定の両方に使う。見つからなければ、どちらの機能も行わない
  // (誤って別の市のデータと比較しないため)。
  const matched = findCityByPrefAndFreeText(pref, city);

  // 【惜しい候補との突合】降参画面で表示していた候補の中に、入力された本当の地元が
  // 含まれていたかを判定する。一致しなければ何も言わない(誤って「候補に入っていました」と
  // 言わないようにするため)。
  let wasNearMiss = false;
  if(matched && giveUpPoolSnapshot && giveUpPoolSnapshot.length){
    if(giveUpPoolSnapshot.includes(cityId(matched))) wasNearMiss = true;
  }

  // 【不正解の原因分析】本当のマチのデータが特定できたら、これまでの回答と比較して、
  // 矛盾していた(=不正解の原因になった可能性がある)回答を抽出しておく。
  const mismatches = matched ? computeAnswerMismatches(matched) : [];

  renderThanks(wasNearMiss, `${pref}${city}`, matched, mismatches);
}

function renderThanks(wasNearMiss, correctCityLabel, matchedCity, mismatches){
  activeGameTransientScreen = null;
  markGameNavResult('deduction');
  mismatches = mismatches || [];
  const nearMissLine = wasNearMiss
    ? `<div class="fact">実はおらっちの候補に入っていました！次はきっと当てられます。</div>`
    : '';
  // 【不正解時のシェア】訂正フォームで教えてもらった「本当の地元」を使って文章を作る。
  // このゲーム自体は正解を知らないため、シェアできるのは訂正フォーム送信後だけ。
  const shareBtn = correctCityLabel
    ? `<button class="share-btn-text" id="giveUpShareBtn">
        <svg class="x-icon" viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        結果をシェア
      </button>`
    : '';

  // 【不正解の原因】本当のマチが特定できて、かつ矛盾していた回答があれば表示する。
  // 「回答を直して再開する」→「見直しをやめて戻る」の往復で使うため、必要な情報をすべて控えておく。
  lastCorrectionMatchedCity = matchedCity || null;
  lastCorrectionMismatches = mismatches;
  lastCorrectionWasNearMiss = wasNearMiss;
  lastCorrectionCityLabel = correctCityLabel;
  const mismatchHtml = buildMismatchSectionHtml(matchedCity, mismatches);

  stage.innerHTML = `
    <div class="mascot-wrap"><div class="pop">${mascotSVG('happy')}</div></div>
    <div class="bubble"><span class="icon">🙏</span>ありがとう！おらっちが修行します</div>
    ${nearMissLine}
    ${mismatchHtml}
    ${dailyChallengeActive ? '' : `<button class="again" onclick="restart()">もう一度あそぶ</button>`}
    ${shareBtn ? `<div class="result-actions-secondary">${shareBtn}</div>` : ''}
  `;
  const giveUpShareBtn = document.getElementById('giveUpShareBtn');
  if(giveUpShareBtn){
    // 自由入力をHTML属性へ埋め込まず、クロージャ経由で共有関数へ渡す。
    giveUpShareBtn.addEventListener('click', () => shareGiveUpResult(correctCityLabel));
  }
}

// 「〇〇市のデータと違っていた回答が◯個ありました」ブロックのHTMLを組み立てる。
// 件数が多い場合は、最初は上位3件だけ見せて「すべて見る」で展開する。
const MISMATCH_INITIAL_SHOW = 3;
function buildMismatchSectionHtml(matchedCity, mismatches){
  if(!matchedCity || mismatches.length === 0) return '';
  const cityLabel = `${matchedCity.pref}${displayName(matchedCity)}`;
  const cityLabelHtml = escapeHtml(cityLabel);
  const rows = mismatches.map((m, i) => `
    <li class="mismatch-item${i >= MISMATCH_INITIAL_SHOW ? ' mismatch-item-extra' : ''}">
      <span class="mismatch-q">${escapeHtml(m.question)}</span>
      <span class="mismatch-compare">
        <span class="mismatch-user">あなたの回答: <b>${escapeHtml(m.userLabel)}</b></span>
        <span class="mismatch-actual">${cityLabelHtml}の実際: <b>${escapeHtml(m.actualLabel)}</b></span>
      </span>
    </li>`).join('');
  const moreBtn = mismatches.length > MISMATCH_INITIAL_SHOW
    ? `<button class="link-btn" onclick="toggleMismatchExtra(this)">すべて見る(あと${mismatches.length - MISMATCH_INITIAL_SHOW}件)</button>`
    : '';

  return `
    <div class="mismatch-block">
      <div class="mismatch-title">${cityLabelHtml}のデータと違っていた回答が${mismatches.length}個ありました</div>
      <ul class="mismatch-list">${rows}</ul>
      ${moreBtn}
      <button class="btn-teach" onclick="startReplayFromMismatch()">回答を直して推理を再開する</button>
    </div>`;
}

// 「すべて見る」ボタン: 隠れている項目(mismatch-item-extra)を表示する。
function toggleMismatchExtra(btn){
  const list = btn.previousElementSibling;
  if(list) list.querySelectorAll('.mismatch-item-extra').forEach(el => el.classList.add('mismatch-item-shown'));
  btn.remove();
}

// 不正解確定(降参→訂正フォーム送信)後のシェア。正解自治体名はユーザーの入力そのもの
// (CITIESデータと完全一致するとは限らない自由記述)なので、buildShareTextへ直接文字列で渡す。
function shareGiveUpResult(correctCityLabel){
  trackGaEvent('share', { method: 'x_text', content_type: 'giveup_result' });
  trackGaEvent('share_button_click', { method: 'x_text_giveup' });
  incrementShareCount();
  const text = buildShareText(null, null, { success: false, correctCityLabel });
  const pageUrl = location.href.split('#')[0];
  const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(pageUrl)}`;
  window.open(intent, '_blank', 'noopener,noreferrer');
}

function correct(isRight, overrideCity){
  // 【重要】画面に「もしかして○○ですか?」として実際に表示されていたのは
  // renderGuess()が設定した lastGuessCity。forcedGuessCity は表示直後に
  // renderGuess() 側でnullへリセットされるため、ここで再度参照すると
  // (一意マッチ経由の推測画面など)ごく稀に画面表示中の自治体と食い違うことがあった。
  // 「結果画面・制覇帳・シェア・送信ログの自治体を必ず一致させる」ため、
  // 画面表示に使われた lastGuessCity を最優先で使う。
  const guess = overrideCity || lastGuessCity || forcedGuessCity || (sortedPool()[0] ? sortedPool()[0].city : CITIES[0]);
  forcedGuessCity = null;
  lastGuessCity = guess;
  const totalQuestions = questionCount + extraQuestionCount;

  // 推測ごとの的中／不的中を計測する。最初の不的中と、追加質問後の不的中も別々に数える。
  trackGaEvent('oramachi_guess_result', {
    ...analyticsModeParams(currentMode),
    guess_result: isRight ? 'correct' : 'incorrect',
    guessed_city: guess ? displayName(guess) : '',
    guessed_pref: guess ? guess.pref : '',
    question_count: totalQuestions,
    guess_attempt: guessAttempts + 1
  });

  if(isRight){
    // 正解後に再読み込みされても、結果送信・統計加算を二重実行しないよう先に削除する。
    clearGameSession();
    // 結果画面・シェア文・訂正フォーム・プレイ結果送信・制覇帳・画像共有のすべてで、
    // ここで確定した同じ自治体データ(currentResult.city)を使う。再計算は一切しない。
    const barePoints = computeBarePoints(guess);
    // 称号判定・褒め言葉判定より前の時点(=recordGameStatsで今回分が加算される前)の値を控えておく。
    const statsBefore = loadStats();
    const misguessedBeforeCount = statsBefore.misguessedCityCounts[cityId(guess)] || 0;
    const prevMaxStreak = statsBefore.maxStreak;     // 連続正解「記録更新」の判定用
    const prevTotalPlays = statsBefore.totalPlays;   // 「初プレイで正解」の判定用(0なら今回が1回目)
    // 自己ベスト比較のため、記録を更新する前の最少質問数を取っておく。
    const prevBestQuestions = (() => {
      const data = loadConquest();
      const existing = data.entries[cityId(guess)];
      return existing ? existing.minQuestions : null;
    })();
    const conquestResult = recordConquest(guess, totalQuestions, currentMode);
    const statsAfter = recordGameStats('success', guess, totalQuestions);
    // 【正解時の褒め言葉・称号判定で共通して使う値】ここでまとめて計算しておく。
    const isNewRecord = prevBestQuestions != null && totalQuestions < prevBestQuestions;
    const recordDiff = isNewRecord ? (prevBestQuestions - totalQuestions) : 0;
    const isStreakRecord = statsAfter.currentStreak > prevMaxStreak && statsAfter.currentStreak >= 3;
    if(isNewRecord) statsAfter.personalBestUpdateCount = (statsAfter.personalBestUpdateCount || 0) + 1;
    // 「地図好き」称号のため、結果画面に地図が表示された回数を数える。
    // 【重要】statsへの追加更新はここでまとめて行い、1回だけsaveStatsする。
    // (checkAchievements呼び出しの後にstatsAfterを使って再度saveStatsすると、
    //  checkAchievements内で解除された称号の保存を、この古いオブジェクトで上書きして
    //  消してしまうバグがあったため、更新は必ずcheckAchievementsより前にまとめる)
    statsAfter.mapViewCount = (statsAfter.mapViewCount || 0) + 1;
    saveStats(statsAfter);
    const newAchievements = checkAchievements({
      success: true,
      totalQuestions,
      guessAttempts,
      answerLogSnapshot: [...answerLog],
      misguessedBeforeCount,
      isNewRecord,
    });
    currentResult = { city: guess, success: true, questionCount: totalQuestions, mode: currentMode, barePoints, conquestResult, newAchievements, isNewRecord };
    markGameNavResult('deduction');
    const stars = calcStars(guess);

    // 【正解時の褒め言葉】質問数の基本評価に、記録更新などがあれば特別メッセージを重ねる。
    const regionAchievement = newAchievements.find(a => a.category === 'region') || null;
    const collectionAchievement = newAchievements.find(a => a.category === 'collection') || null;
    const praiseBase = basePraiseFor(totalQuestions);
    const praiseSpecial = specialPraiseFor({
      isNewRecord, recordDiff,
      isFirstEverPlay: prevTotalPlays === 0,
      isStreakRecord, streakCount: statsAfter.currentStreak,
      regionAchievement, collectionAchievement,
      isFirstWinOfCity: conquestResult.status === 'new',
      cityName: displayName(guess),
      newAchievementsCount: newAchievements.length,
    });
    if(isNewRecord) trackGaEvent('personal_best_updated', { item_id: displayName(guess), question_count: totalQuestions, improved_by: recordDiff });
    newAchievements.forEach(a => trackGaEvent('achievement_unlocked', { achievement_id: a.id, achievement_name: a.name, rarity: a.rarity }));
    const praiseHtml = `
      <div class="praise-block">
        <div class="praise-stars">${starString(praiseBase.stars)}</div>
        <div class="praise-line">${praiseBase.line}</div>
        ${praiseSpecial ? `
          <div class="praise-special">
            <span class="praise-special-emoji">${praiseSpecial.emoji}</span>
            <span class="praise-special-text">
              <span class="praise-special-title">${praiseSpecial.title}</span>
              ${praiseSpecial.body ? `<span class="praise-special-body">${praiseSpecial.body}</span>` : ''}
            </span>
          </div>` : ''}
      </div>`;

    const barePointsHtml = barePoints.length
      ? `<div class="barepoints-block">
          <div class="barepoints-title">あなたの地元がバレた理由</div>
          <ul class="barepoints-list">${barePoints.map(t => `<li>${t}</li>`).join('')}</ul>
        </div>`
      : '';

    // 市役所を中心とした航空写真(正方形・5km四方相当)。APIキー不要のembed方式を使う。
    // 検索クエリは「県名+市名+市役所」。23区集計エントリ(東京)や区別表記の括弧は
    // 検索の邪魔になるので取り除く。
    const mapHtml = buildCityMapHtml(guess);

    let conquestLine = '';
    if(conquestResult.status === 'new'){
      conquestLine = `新しく${displayName(guess)}を制覇しました！`;
    } else if(conquestResult.status === 'newRecord'){
      conquestLine = `${displayName(guess)}は${conquestResult.entry.count}回目の正解、最少記録を更新しました！`;
    } else {
      conquestLine = `${displayName(guess)}は${conquestResult.entry.count}回目の正解です`;
    }
    const conquestHtml = `<div class="conquest-line">${conquestLine}</div>`;

    // 自己ベスト表示(結果画面の主役=自治体名や紹介文を邪魔しない位置=質問数の下あたりに小さく表示)
    let bestLine;
    if(prevBestQuestions == null){
      bestLine = `今回: ${totalQuestions}問 ・ このマチの記録を登録しました！`;
    } else if(totalQuestions === prevBestQuestions){
      bestLine = `今回: ${totalQuestions}問 ・ 自己ベストタイ！`;
    } else if(totalQuestions < prevBestQuestions){
      bestLine = `これまでの自己ベスト: ${prevBestQuestions}問 → 今回: ${totalQuestions}問 ・ 新記録！`;
    } else {
      bestLine = `自己ベスト: ${prevBestQuestions}問 ・ 今回: ${totalQuestions}問`;
    }
    const bestHtml = `<div class="best-line">${bestLine}</div>`;

    // 称号獲得演出(新しく解除された称号があるときだけ表示。1件ずつ確認できる形にする)
    const achievementHtml = `<div id="achievementToastContainer">${renderAchievementToastCard(newAchievements)}</div>`;

    evaluateDailyChallengeResult(totalQuestions);

    // 【今日のチャレンジ】達成した場合だけ、日付入りスタンプと短い演出を表示する。
    // 同じ日に2回目以降で条件を満たしても、スタンプ自体は増やさない(すでに達成済みの旨を伝える)。
    const dailyChallengeHtml = (dailyChallengeResult && dailyChallengeResult.achieved)
      ? `<div class="daily-challenge-result">
          <div class="daily-challenge-stamp">
            <span class="daily-challenge-stamp-label">${dailyChallengeResult.justAchieved ? '今日のチャレンジ達成' : '今日はすでに達成済み'}</span>
            <span class="daily-challenge-stamp-date">${todayJstDateString()}</span>
          </div>
          <div class="daily-challenge-result-theme">お題: ${dailyChallengeResult.theme.text}</div>
          ${dailyChallengeResult.justAchieved && dailyChallengeResult.streak >= 2 ? `<div class="daily-challenge-streak-line">これまで${dailyChallengeResult.streak}日連続で達成中！</div>` : ''}
          ${dailyChallengeResult.justAchieved && dailyChallengeResult.isNewStreakMilestone ? `<div class="daily-challenge-milestone">🎉 ${dailyChallengeResult.streak}日連続達成のごほうびスタンプ！</div>` : ''}
        </div>`
      : (dailyChallengeActive
        ? `<div class="daily-challenge-result daily-challenge-result-miss">
            <div class="daily-challenge-result-theme">今日のお題「${dailyChallengeActive.text}」は今回は条件を満たせませんでした。またいつでも挑戦できます！</div>
          </div>`
        : '');

    stage.innerHTML = `
      <div class="share-card" id="shareCard">
        <div class="share-card-head">
          <span class="share-eyebrow">おらマチ診断</span>
          ${happyCelebrationMascotHTML()}
        </div>
        <div class="hanko">あたり</div>
        <div class="result-name">${displayName(guess)}</div>
        <div class="result-pref">${guess.pref}</div>
        ${dailyChallengeHtml}
        <div class="result-line">おらっちが <b>${totalQuestions}問</b> で当てました!</div>
        ${praiseHtml}
        ${bestHtml}
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
        ${mapHtml}
        ${barePointsHtml}
      </div>
      ${conquestHtml}
      ${achievementHtml}
      <div class="result-actions-primary">
        <button class="share-btn share-btn-image" id="shareImageBtn" onclick="shareResultImage()">📸 画像でシェア</button>
        ${dailyChallengeActive ? '' : `<button class="again" onclick="restart()">もう一度あそぶ</button>`}
      </div>
      <div class="result-actions-secondary">
        <button class="share-btn-text" onclick="shareToX(currentResult.city, currentResult.questionCount)">
          <svg class="x-icon" viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          文章でシェア
        </button>
        <button class="link-btn" onclick="navigateToOpening()">別の地域版であそぶ</button>
        <button class="link-btn" onclick="renderConquestLog()">📖 全国制覇帳を見る</button>
        <button class="link-btn-subtle" onclick="renderSuccessCorrectionForm()">この情報を訂正する</button>
      </div>
      <div id="shareImageStatus" class="share-image-status"></div>
    `;
    // DOMへ追加した直後に喜びの演出を再生する。
    requestAnimationFrame(playHappyMascotAnimation);
    // 正解またはギブアップまで到達したときだけ、ゲーム完了として1回送る。
    trackGaEvent('oramachi_game_complete', {
      ...analyticsModeParams(currentMode),
      completion_result: 'success',
      final_city: displayName(currentResult.city),
      final_pref: currentResult.city.pref,
      question_count: totalQuestions,
      guess_attempts: guessAttempts + 1
    });

    sendGameResult('success', currentResult.city);
    sendQuestionSkipsBatch(); // このゲーム中に「わからない」でスキップされた質問をまとめて送信

    updateDebugPanel();
    return;
  }

  // 外れた場合
  excludedNames.add(guess.name);
  recordMisguess(guess);

  if(guessAttempts === 0){
    // 【第6段階】最初の推測が外れても、2位・3位の候補をそのまま連続表示するのではなく、
    // 上位候補を絞り込む追加質問(最大MAX_EXTRA_Q問)を挟んでから、改めて1回だけ推測し直す。
    //
    // 【救済】追加質問に入る前に、即時除外などで候補から外した分を全部戻す。
    // 1回目が外れた=ここまでの絞り込みのどこかが間違っている、ということなので、
    // 消してしまった正解を追加質問で選び直せるようにする。戻さないままだと、正解が
    // 既に消えているゲームでは追加質問を何問足しても絶対に当たらない。
    restorePrunedCandidates();
    guessAttempts = 1;
    questionPhase = 'extra';
    extraQuestionCount = 0;
    // 「これまでの回答」機能で回答を再生する際に、このタイミング(通常フェーズ→追加質問
    // フェーズへの切り替え)を正確に再現するために記録しておく。
    guessFailureLog.push({
      atHistoryLength: history.length,
      excludedCityName: guess.name,
      excludedCityId: cityId(guess),
    });
    return renderExtraIntro();
  }

  // 2回目の推測も外れた: これ以上は推測せず、正解入力(訂正フォーム)へ案内する
  guessAttempts = 2;
  currentResult = { city: null, success: false, questionCount: totalQuestions, mode: currentMode };
  renderGiveUp();
}

// 追加質問フェーズへ入る前のワンクッション画面
function renderExtraIntro(){
  activeGameTransientScreen = 'extraIntro';
  stage.innerHTML = `
    <div class="mascot-wrap"><div class="shake">${mascotSVG('think')}</div></div>
    <div class="bubble"><span class="icon">💦</span>むむっ、違いましたか……<br>あと少しだけ教えてください！</div>
    <button class="again" onclick="renderQuestion()">つぎの質問へ</button>
  `;
  saveGameSession('extraIntro');
  updateDebugPanel();
}

function renderGiveUp(){
  activeGameTransientScreen = null;
  markGameNavResult('deduction');
  // 降参画面では統計・GAS送信が走るため、再起動で同じ終了処理を繰り返さない。
  clearGameSession();
  sendQuestionSkipsBatch(); // このゲーム中に「わからない」でスキップされた質問をまとめて送信
  // 【惜しかった候補】最後まで残っていた候補を、推理結果(スコア順=sortedPool)の
  // 上位から最大3件だけ見せる。単純な配列の先頭ではなく、実際に絞り込みで
  // 上位に残っていた=おらっちが最後まで迷っていた自治体を選ぶ。
  // 都道府県名も添えて、同名・類似市を区別できるようにする。
  // sortedPoolは同じ自治体を重複して含まないため、重複排除は不要。
  const nearMiss = sortedPool().slice(0, 3).map(e => `${e.city.pref} ${displayName(e.city)}`);
  giveUpPoolSnapshot = sortedPool().map(e => cityId(e.city)); // 訂正フォーム送信後の判定用
  const hint = nearMiss.length
    ? `<div class="near-miss-block">
        <div class="near-miss-title">惜しい！<br>おらっちが最後まで迷っていた候補</div>
        <ul class="near-miss-list">${nearMiss.map(t => `<li>${t}</li>`).join('')}</ul>
      </div>`
    : '';
  stage.innerHTML = `
    <div class="mascot-wrap"><div class="shake">${mascotSVG('sad')}</div></div>
    <div class="bubble"><span class="icon">🙏</span>まだまだ修行が足りないようです…</div>
    <div class="fact">現在のデータ範囲(${getModeCities(currentMode).length}自治体)では絞り込みきれませんでした。データが増えるともっと当たりやすくなります。</div>
    ${hint}
    ${renderCorrectionForm()}
    ${dailyChallengeActive ? '' : `<button class="again" onclick="restart()">もう一度あそぶ</button>`}
    <div class="result-actions-secondary">
      <button class="link-btn" onclick="navigateToOpening()">別の地域版であそぶ</button>
      <button class="link-btn" onclick="renderConquestLog()">📖 全国制覇帳を見る</button>
    </div>
  `;
  trackGaEvent('oramachi_game_complete', {
    ...analyticsModeParams(currentMode),
    completion_result: 'giveup',
    final_city: lastGuessCity ? displayName(lastGuessCity) : '',
    final_pref: lastGuessCity ? lastGuessCity.pref : '',
    question_count: currentResult ? currentResult.questionCount : (questionCount + extraQuestionCount),
    guess_attempts: guessAttempts
  });

  sendGameResult('giveup', lastGuessCity);
  recordGameStats('giveup', lastGuessCity, currentResult ? currentResult.questionCount : (questionCount + extraQuestionCount));
  updateDebugPanel();
}

function restart(){
  startMode(currentMode, { skipExistingSessionConfirm: true });
}
// 【cities.json のバージョン】bump-version.js が cities.json の中身から自動で書き換える。
// 以前は cache:'no-store' で毎回必ず再ダウンロードしていたため、407KBのデータを
// 訪問のたびに落とし直しており、起動が遅くなる最大の原因になっていた。
// URLに中身のハッシュを付ければ、更新したときだけ新しいURLになるので、
// 「常に最新」を保ったままブラウザのキャッシュを使える(2回目以降の起動が速くなる)。
const CITIES_VERSION = '3b03ef5463';

async function boot(){
  try{
    // ネットワークが詰まって応答が返らない場合に「読み込み中」のまま止まらないよう、
    // 20秒でタイムアウトさせてエラー表示へ切り替える。
    const controller = (typeof AbortController !== 'undefined') ? new AbortController() : null;
    const timeoutId = controller ? setTimeout(() => controller.abort(), 20000) : null;
    let res;
    try{
      res = await fetch('cities.json?v=' + CITIES_VERSION, { signal: controller ? controller.signal : undefined });
    } finally {
      if(timeoutId) clearTimeout(timeoutId);
    }
    if(!res.ok) throw new Error('HTTP ' + res.status);
    CITIES = await res.json();
    if(!Array.isArray(CITIES) || CITIES.length === 0) throw new Error('empty data');
    CITIES.forEach(expandCompactTags); // 軽量化されたtags(配列形式)を、あれば先にオブジェクト形式へ復元
    CITIES.forEach(enrichComputedTags);
    CITIES.forEach(enrichStatsTags);
    activateStatsQuestions();
    computeExclusiveMap(); // 路線図などから「絶対に両立しない」組み合わせを学習する
    footEl.textContent = `対応エリア ${getModeCities('all').length}市 ・ データはcities.jsonから読み込み`;
    // 再読み込み前の古いSPA履歴が残っていても、起動直後は必ずトップを深さ0の基点にする。
    replaceExactNavState(makeNavState('opening', null, 0));
    renderOpening();
    fetchLiveStats(); // 「最近当てられたマチ」「プレイ回数」を非同期で取得(失敗しても無視)
  }catch(e){
    // 原因調査用に、実際のエラー内容をブラウザのコンソールへ必ず残す。
    console.error('おらマチ: 起動時のデータ読み込みに失敗しました', e);
    stage.innerHTML = `
      <div class="mascot-wrap">${mascotSVG('sad')}</div>
      <div class="error-text">
        ゲームデータを読み込めませんでした。<br>
        通信状況を確認して、ページを再読み込みしてください。
      </div>
      <button class="again" onclick="location.reload()">再読み込みする</button>`;
    footEl.textContent = 'データ読み込みエラー';
  }
}

boot();
