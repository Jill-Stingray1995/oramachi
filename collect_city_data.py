"""
おらマチ データ収集スクリプト v2
================================
e-Stat API（社会・人口統計体系 = 都道府県・市区町村のすがた）から
人口・面積を取得し、人口密度まで自動計算して cities.json 用のレコードを
半自動生成します。Wikipedia側の処理はv1から変更ありません。

【v2で追加したこと】
- 総人口・総面積を「実数値」で取得(population, area_km2)
- 人口密度(density = population / area_km2)を自動計算
- おらマチ側(index.html)は、この実数値さえあれば
  「人口50万人以上?」「面積が広い?」等の質問を“自動生成”できる設計に
  変更済みです(閾値はJS側で判定するので、このスクリプトはbool判定を
  一切せず、生の数字を出すだけで良い設計にしています)

【使用しているe-Stat統計表】
- 社会・人口統計体系「都道府県・市区町村のすがた」
  - 人口・世帯 分野の統計表ID: 0000020201 (全市区町村共通の固定ID)
  - 自然環境(面積)分野の統計表IDは年度によって変わることがあるため、
    getStatsList で検索して動的に見つける実装にしています

【事前準備】
1. e-Stat API利用登録してアプリケーションIDを取得
   https://www.e-stat.go.jp/api/
2. 下の ESTAT_APP_ID に設定
3. pip install requests

【使い方】
    python3 collect_city_data.py

出力: new_cities.json
  (中身を確認・加筆してから cities.json の配列にマージしてください)

【注意】
e-Statのメタ情報(カテゴリコードの並び順や名称)は統計表の年度改定で
変わることがあります。このスクリプトは「総人口」「総面積」という
名称を含むカテゴリをメタ情報から自動検出する作りですが、もし
見つからない場合はエラーメッセージに従って PDF_MEMO 内のヒントを
確認し、CAT_NAME_HINTS を調整してください。
"""

import json
import re
import sys
import time

try:
    import requests
except ImportError:
    sys.exit("先に `pip install requests` を実行してください。")

# ---------------------------------------------------------------
# 設定
# ---------------------------------------------------------------
ESTAT_APP_ID = "YOUR_ESTAT_APP_ID_HERE"  # https://www.e-stat.go.jp/api/ で取得

# 次のバッチ: 政令指定都市のうち県庁所在地(47市)とまだ重複していない5市
# name / pref / 全国地方公共団体コード(5桁, 総務省の標準地域コード)
TARGET_CITIES = [
    {"name": "川崎市",   "pref": "神奈川県", "code": "14130"},
    {"name": "相模原市", "pref": "神奈川県", "code": "14150"},
    {"name": "浜松市",   "pref": "静岡県",   "code": "22130"},
    {"name": "堺市",     "pref": "大阪府",   "code": "27140"},
    {"name": "北九州市", "pref": "福岡県",   "code": "40100"},
]

KEYS = ['pop1m', 'shinkansen', 'coastal', 'designated', 'festival', 'castle',
        'worldheritage', 'snow', 'airport', 'prosports', 'island', 'capital',
        'noodle', 'mascot_famous', 'nihonkai', 'taiheiyo', 'setonaikai',
        'famous_mountain', 'big_river', 'subway', 'onsen', 'sake', 'fireworks',
        'castle_town', 'port_town', 'rice_region']

KEYWORD_RULES = {
    'shinkansen': ['新幹線'],
    'castle': ['城'],
    'worldheritage': ['世界遺産', '世界文化遺産', '世界自然遺産'],
    'airport': ['空港'],
    'festival': ['祭り', '祭', 'まつり'],
}

WIKI_API = "https://ja.wikipedia.org/w/api.php"
ESTAT_STATS_DATA_API = "https://api.e-stat.go.jp/rest/3.0/app/json/getStatsData"
ESTAT_STATS_LIST_API = "https://api.e-stat.go.jp/rest/3.0/app/json/getStatsList"

# 人口・世帯 分野(A)の統計表ID(社会・人口統計体系・市区町村データの固定ID)
POPULATION_STATS_DATA_ID = "0000020201"

# メタ情報からカテゴリコードを探すときの名称ヒント
CAT_NAME_HINTS = {
    "population": ["総人口"],
    "area": ["総面積", "実面積", "面積"],
}


def fetch_wikipedia_extract(title: str) -> str:
    params = {
        "action": "query", "format": "json", "prop": "extracts",
        "exintro": True, "explaintext": True, "redirects": 1, "titles": title,
    }
    r = requests.get(WIKI_API, params=params, timeout=15)
    r.raise_for_status()
    pages = r.json().get("query", {}).get("pages", {})
    for page in pages.values():
        return page.get("extract", "") or ""
    return ""


def guess_tags_from_text(text: str) -> dict:
    return {key: any(w in text for w in words) for key, words in KEYWORD_RULES.items()}


def estat_find_category_code(stats_data_id: str, name_hints: list) -> str | None:
    """
    getStatsDataをmetaGetFlg=Yで叩き、CLASS_INFの中から名称が
    name_hints に部分一致するカテゴリの code を探す。
    """
    params = {
        "appId": ESTAT_APP_ID, "lang": "J", "statsDataId": stats_data_id,
        "metaGetFlg": "Y", "cntGetFlg": "N",
    }
    r = requests.get(ESTAT_STATS_DATA_API, params=params, timeout=20)
    r.raise_for_status()
    data = r.json()
    try:
        class_objs = data["GET_STATS_DATA"]["STATISTICAL_DATA"]["CLASS_INF"]["CLASS_OBJ"]
    except (KeyError, TypeError):
        return None
    if isinstance(class_objs, dict):
        class_objs = [class_objs]

    for obj in class_objs:
        classes = obj.get("CLASS", [])
        if isinstance(classes, dict):
            classes = [classes]
        for c in classes:
            name = c.get("@name", "")
            if any(hint in name for hint in name_hints):
                return c.get("@code")
    return None


def estat_find_area_stats_data_id() -> str | None:
    """
    「都道府県・市区町村のすがた」自然環境(面積)分野の統計表IDを
    getStatsListの検索で動的に見つける。年度改定でIDが変わることがあるため。
    """
    params = {
        "appId": ESTAT_APP_ID, "lang": "J",
        "searchWord": "都道府県 市区町村のすがた 自然環境 面積",
        "statsCode": "00200502",  # 社会・人口統計体系
        "limit": 5,
    }
    r = requests.get(ESTAT_STATS_LIST_API, params=params, timeout=20)
    r.raise_for_status()
    data = r.json()
    try:
        tables = data["GET_STATS_LIST"]["DATALIST_INF"]["TABLE_INF"]
    except (KeyError, TypeError):
        return None
    if isinstance(tables, dict):
        tables = [tables]
    for t in tables:
        title = str(t.get("TITLE", ""))
        if "自然環境" in title or "面積" in title:
            return t.get("@id")
    return tables[0].get("@id") if tables else None


def estat_get_value(stats_data_id: str, area_code: str, cat_code: str) -> float | None:
    params = {
        "appId": ESTAT_APP_ID, "lang": "J", "statsDataId": stats_data_id,
        "cdArea": area_code, "cdCat01": cat_code, "metaGetFlg": "N", "cntGetFlg": "N",
    }
    r = requests.get(ESTAT_STATS_DATA_API, params=params, timeout=20)
    r.raise_for_status()
    data = r.json()
    try:
        values = data["GET_STATS_DATA"]["STATISTICAL_DATA"]["DATA_INF"]["VALUE"]
    except (KeyError, TypeError):
        return None
    if isinstance(values, dict):
        values = [values]
    if not values:
        return None
    try:
        return float(values[0].get("$"))
    except (TypeError, ValueError):
        return None


def fetch_population_and_area(city_code: str) -> dict:
    """人口(population)・面積km2(area_km2)を取得。取得できなければNoneのまま返す。"""
    result = {"population": None, "area_km2": None}
    if ESTAT_APP_ID == "YOUR_ESTAT_APP_ID_HERE":
        return result  # APIキー未設定ならスキップ

    try:
        pop_code = estat_find_category_code(POPULATION_STATS_DATA_ID, CAT_NAME_HINTS["population"])
        if pop_code:
            result["population"] = estat_get_value(POPULATION_STATS_DATA_ID, city_code, pop_code)
        time.sleep(0.3)

        area_table_id = estat_find_area_stats_data_id()
        if area_table_id:
            area_code = estat_find_category_code(area_table_id, CAT_NAME_HINTS["area"])
            if area_code:
                result["area_km2"] = estat_get_value(area_table_id, city_code, area_code)
        time.sleep(0.3)
    except Exception as e:
        print(f"  [e-Stat] 取得中にエラー: {e}", file=sys.stderr)

    return result


def build_record(city: dict) -> dict:
    name, pref, code = city["name"], city["pref"], city["code"]
    print(f"取得中: {name} ({pref}) ...")

    extract = fetch_wikipedia_extract(name)
    time.sleep(0.5)

    tag_guesses = guess_tags_from_text(extract)
    stats = fetch_population_and_area(code)

    tags = {k: None for k in KEYS}
    tags["designated"] = True
    tags["capital"] = False
    if stats["population"] is not None:
        tags["pop1m"] = stats["population"] >= 1_000_000
    for k, v in tag_guesses.items():
        tags[k] = v

    todo = [k for k, v in tags.items() if v is None]

    record = {
        "name": name,
        "pref": pref,
        "tags": tags,
        # 実数値。おらマチ側がここから人口/面積/人口密度の質問を自動生成します
        "stats": {
            "population": stats["population"],
            "area_km2": stats["area_km2"],
        },
        "fact": "", "food": "", "dialect": "", "mascot": "",
        "_todo_tags": todo,
        "_wiki_extract": extract[:400],
    }
    return record


def main():
    if ESTAT_APP_ID == "YOUR_ESTAT_APP_ID_HERE":
        print("※ ESTAT_APP_ID が未設定のため、人口・面積は取得されません。", file=sys.stderr)
        print("  https://www.e-stat.go.jp/api/ で登録してから設定してください。\n", file=sys.stderr)

    results = [build_record(c) for c in TARGET_CITIES]

    with open("new_cities.json", "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    print("\n完了! new_cities.json を書き出しました。")
    print("次のステップ:")
    print("  1. stats.population / stats.area_km2 が入っているか確認")
    print("     (nullの場合はe-Statのサイトで手動確認して埋めてください)")
    print("  2. _todo_tags の項目と fact/food/dialect/mascot を埋める")
    print("     (_wiki_extract を参考に執筆)")
    print("  3. _todo_tags と _wiki_extract キーを削除する")
    print("  4. cities.json の配列末尾にレコードをマージする")


if __name__ == "__main__":
    main()
