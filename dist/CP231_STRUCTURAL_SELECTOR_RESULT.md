# CP231 Structural Selector + Constitutional Ending

## 修正
- CP229/230 の構造的ルート生成を維持。
- `asked` は EXCLUSIVE_MAP の自動推論キーも含むため、「実際にプレイヤーへ表示済み」と同一視しない。Face/Surprise の未使用判定を `answerLog`（実表示）基準へ変更。
- selector が `null` を返した瞬間を「推測要求」として捕捉し、通常プレイでは推測より先に首位仮説の authored Face → distinct Surprise を必ず通す terminal lane を追加。
- 十日町市の canonical ending は `snow_festival` → `tokamachi_echigo_tsumari`。質問データ自体は変更していない。

## 十日町市 実ランタイム10回監査

| run | 正解 | 問数 | Q1〜Q5 | Face | Surprise |
|---:|:---:|---:|---|---|---|
| 0 | ○ | 13 | 日本酒を造る酒蔵がある？ / JR以外の鉄道会社の駅がある？ / 大型のイオン系ショッピングモールがある？ / 海に面している？ / 他の都道府県と境を接している？ | snow_festival | tokamachi_echigo_tsumari |
| 1 | ○ | 13 | 日本酒を造る酒蔵がある？ / JR以外の鉄道会社の駅がある？ / 大型のイオン系ショッピングモールがある？ / 海に面している？ / 国管理の一級河川が流れている？ | snow_festival | tokamachi_echigo_tsumari |
| 2 | ○ | 15 | 国管理の一級河川が流れている？ / JR以外の鉄道会社の駅がある？ / 他の都道府県と境を接している？ / 日本酒を造る酒蔵がある？ / 新幹線の駅がある？ | snow_festival | tokamachi_echigo_tsumari |
| 3 | ○ | 18 | 日本酒を造る酒蔵がある？ / JR以外の鉄道会社の駅がある？ / 他の都道府県と境を接している？ / 海に面している？ / 国管理の一級河川が流れている？ | snow_festival | tokamachi_echigo_tsumari |
| 4 | ○ | 15 | JR以外の鉄道会社の駅がある？ / 国管理の一級河川が流れている？ / 海に面している？ / 日本酒を造る酒蔵がある？ / 他の都道府県と境を接している？ | snow_festival | tokamachi_echigo_tsumari |
| 5 | ○ | 19 | 日本酒を造る酒蔵がある？ / JR以外の鉄道会社の駅がある？ / 大型のイオン系ショッピングモールがある？ / 他の都道府県と境を接している？ / 新幹線の駅がある？ | snow_festival | tokamachi_echigo_tsumari |
| 6 | ○ | 19 | 日本酒を造る酒蔵がある？ / JR以外の鉄道会社の駅がある？ / 百貨店・デパートがある？ / 国管理の一級河川が流れている？ / 海に面している？ | snow_festival | tokamachi_echigo_tsumari |
| 7 | ○ | 15 | 国管理の一級河川が流れている？ / JR以外の鉄道会社の駅がある？ / 他の都道府県と境を接している？ / 日本酒を造る酒蔵がある？ / 新幹線の駅がある？ | snow_festival | tokamachi_echigo_tsumari |
| 8 | ○ | 19 | 日本酒を造る酒蔵がある？ / JR以外の鉄道会社の駅がある？ / 百貨店・デパートがある？ / 国管理の一級河川が流れている？ / 他の都道府県と境を接している？ | snow_festival | tokamachi_echigo_tsumari |
| 9 | ○ | 19 | 市内に鉄道駅がひとつもない？ / 国管理の一級河川が流れている？ / JR以外の鉄道会社の駅がある？ / 日本酒を造る酒蔵がある？ / 海に面している？ | snow_festival | tokamachi_echigo_tsumari |

### 集計
- 正解: 10/10
- 雪まつり Face YES: 10/10
- 大地の芸術祭 Surprise YES: 10/10
- 最小/最大質問数: 13 / 19
- 39問級暴走: 0/10
- Q1〜Q5で明示的な地方・都道府県名質問: 0/10（ログ確認）

## 回帰
- `node --check app.js`: PASS
- `tools/test-security-release.js`: PASS
- `tools/test-question-tag-integrity.js`: PASS (1741 municipalities / 5158 keys)

## 注意
十日町10回については上記を実測済み。全国1,741自治体×複数回の完全ランタイム監査はこのチェックポイント作成時点では未完了。
