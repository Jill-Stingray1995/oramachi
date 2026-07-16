# おらマチ 「質問の報告」「スキップ集計」サーバー側の設定ガイド

## 前提

`GAS_STATS_SETUP_GUIDE.md` と同じ、既存の Google Apps Script(GAS) Webアプリ(`CORRECTIONS_ENDPOINT_URL`)
をそのまま使う設計にしています。新しいエンドポイントは増やしていません。

クライアント側(`app.js`)の実装は完了していますが、サーバー側(GASスクリプトの中身)は
このプロジェクトのファイルとしては存在せず、Google側で個別に管理されているため、
今回の作業では直接編集できていません。以下の対応をGAS側に追加してください。

匿名送信の設定(「匿名のプレイ結果をゲーム改善のため送信する」のチェック)がOFFのときは、
どちらの送信も行われません(既存の `result` ログと同じ扱いです)。

---

## 1. クライアント側が新しく送信するようになったデータ

### 1-1. 質問の報告(`question_report`)

「⚑ この質問を報告」から送信されると、1回の報告につき1件、次の形式でPOSTされます。

```json
{
  "type": "question_report",
  "questionKey": "densityHigh",
  "questionText": "人や住宅が密集しているほう？",
  "reason": "意味が分からない",
  "comment": "",
  "gameMode": "all",
  "createdAt": "2026-07-17T12:00:00.000Z"
}
```

- `reason` は次の4つのいずれかです: `意味が分からない` / `答えが違うと思う` / `判断できない質問` / `表現が分かりにくい`
- `comment` は自由記入(最大100文字)。空文字のこともあります。
- 個人を特定する情報(氏名・メールアドレス・IPアドレス・端末ID等)は含まれません。

### 1-2. スキップ履歴のまとめ送信(`question_skips_batch`)

「わからない・スキップ」が選ばれた質問は、都度送信せず、そのゲームが終了したタイミング
(正解 or 降参が確定した瞬間)で、まとめて1回だけPOSTされます。通信回数を抑えるためです。

```json
{
  "type": "question_skips_batch",
  "mode": "all",
  "skips": [
    { "questionKey": "densityHigh", "gameMode": "all", "questionNumber": 5, "helpOpened": false },
    { "questionKey": "koshien_champion", "gameMode": "all", "questionNumber": 9, "helpOpened": true }
  ],
  "createdAt": "2026-07-17T12:00:00.000Z"
}
```

- `skips` が空配列になることはありません(1問もスキップしなかったゲームでは、このリクエスト自体が送信されません)。
- `helpOpened` は、その質問で「ⓘ どういう意味？」を開いていたかどうかです。

---

## 2. GAS側で対応してほしいこと

### 2-1. `doPost` に分岐を追加する

既存の `doPost(e)` 関数の中で、`type` によって処理を振り分けている箇所に、
以下の2パターンを追加してください(`type: 'result'` や `type: 'visitor'` の分岐と同じ並びです)。

```javascript
function doPost(e) {
  const data = JSON.parse(e.postData.contents);

  // ...既存の type 分岐(visitor, result など)はそのまま残す...

  if (data.type === 'question_report') {
    recordQuestionReport(data);
    return ContentService.createTextOutput('OK');
  }

  if (data.type === 'question_skips_batch') {
    recordQuestionSkipsBatch(data);
    return ContentService.createTextOutput('OK');
  }

  // ...既存の残りの分岐...
}

// 「QuestionReports」シートへ1件ずつ追記する。
function recordQuestionReport(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('QuestionReports');
  if (!sheet) {
    sheet = ss.insertSheet('QuestionReports');
    sheet.appendRow(['受信日時', 'questionKey', 'questionText', 'reason', 'comment', 'gameMode', 'createdAt']);
  }
  sheet.appendRow([
    new Date(),
    data.questionKey || '',
    data.questionText || '',
    data.reason || '',
    data.comment || '',
    data.gameMode || '',
    data.createdAt || ''
  ]);
}

// 「QuestionSkips」シートへ、1回のバッチ送信に含まれるスキップを行ごとに展開して追記する。
function recordQuestionSkipsBatch(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('QuestionSkips');
  if (!sheet) {
    sheet = ss.insertSheet('QuestionSkips');
    sheet.appendRow(['受信日時', 'questionKey', 'gameMode', 'questionNumber', 'helpOpened', 'createdAt']);
  }
  const skips = Array.isArray(data.skips) ? data.skips : [];
  const now = new Date();
  const rows = skips.map(s => [
    now,
    s.questionKey || '',
    s.gameMode || data.mode || '',
    s.questionNumber != null ? s.questionNumber : '',
    s.helpOpened === true,
    data.createdAt || ''
  ]);
  if (rows.length > 0) {
    // 1行ずつ appendRow するより、まとめて setValues した方が高速です。
    sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
  }
}
```

### 2-2. シート構成

自動で作成されるようにしてありますが、あらかじめ手動で作っておいても構いません。

**QuestionReports シート**

| 列 | 内容 |
|---|---|
| 受信日時 | サーバーが受信した日時(自動記録) |
| questionKey | 質問キー(例: `densityHigh`) |
| questionText | 報告された時点の質問文 |
| reason | 選ばれた理由 |
| comment | 自由記入コメント(空欄のこともある) |
| gameMode | 報告時のゲームモード |
| createdAt | クライアント側で記録した送信時刻(ISO文字列) |

**QuestionSkips シート**

| 列 | 内容 |
|---|---|
| 受信日時 | サーバーが受信した日時(自動記録) |
| questionKey | スキップされた質問キー |
| gameMode | ゲームモード |
| questionNumber | 何問目でスキップしたか |
| helpOpened | 補足を開いていたかどうか(true/false) |
| createdAt | バッチ送信の時刻(ISO文字列) |

### 2-3. 設定手順

1. 既存の `CORRECTIONS_ENDPOINT_URL` が指しているGoogle Apps Scriptプロジェクトを開く。
2. 上記の `doPost` 分岐と2つの関数を追加する(既存コードは削除しない)。
3. 「デプロイ」→「デプロイを管理」→ 既存のWebアプリのデプロイを「編集」→
   新しいバージョンとして再デプロイする(URLは変わりません)。
4. `QuestionReports` / `QuestionSkips` の2シートが自動で増えることを確認する
   (初回のPOSTが来たときに自動作成されます。手動で先に作っておいても構いません)。

以上でクライアント側からの送信を受け取れるようになります。
