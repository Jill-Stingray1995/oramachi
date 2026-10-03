# CP235 Terminal Lane Repair — 実測結果

## 修正
- CP234でFace→Surpriseが欠落した370/3,150ゲームを解析。
- 主因: Face YES後、soft posterior/pruningによりFace所有者がlive holderから外れ、正式Strikeへ遷移できないケース。
- 修正: 実際に表示・YES回答された正式Faceを会話証拠として、現在posterior首位がそのFaceの正式所有者である場合のみowner anchorを復元。hidden targetは参照しない。
- R89台帳でStrikeが空だった8自治体を全件検出し、Strike空を0件化。
- 舟橋村・東峰村ほか不足していた固有Strikeを既存資産/公的資料に基づき補完。

## 実測
- CP234でFace→Surprise不成立だった54自治体を全件1回再試走: 54/54正解、54/54 Face→Surprise成立、最大18問。
- 代表10自治体×3回: 30/30 Face→Surprise成立。
- 舟橋村・東峰村: 各10回、20/20正解・20/20 Face→Surprise成立（舟橋14問、東峰13問）。
- R89 registry: 1,741自治体のStrike空 0件。
- Security/UI/release regression: PASS。
- question-tag-integrity: PASS（1,741自治体 / 5,166 keys）。

## 重要
CP234の315自治体×10回=3,150ゲーム全体については、CP235適用後の3,150本フル再走はまだ未完了。したがって本書は「全国3,150再監査PASS」とは主張しない。
