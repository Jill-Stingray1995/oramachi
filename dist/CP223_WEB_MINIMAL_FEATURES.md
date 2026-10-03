# CP223 Web minimal feature implementation

Base: CP219 web-face-surprise-restored.

## UI preservation rule
- CP219 Web UI is the canonical visual source.
- `style.css` is byte-for-byte unchanged from CP219.
- The existing home `ほかの遊び方` row remains exactly: 入門版 / おらマチからの挑戦状 / 地方から遊ぶ.
- Normal-play selector, Face→Surprise logic, questions, and cities.json are unchanged.

## Implemented
1. Result replay wording: existing replay button only, renamed to `もう一回！`; no result redesign.
2. Detailed play history: localStorage `oramachi_play_history_v1`, latest 100 games, rendered with existing conquest UI classes.
3. おらマチ図鑑: separate record view using conquest data, `あと○マチ`, acquired municipality list and minimal detail card, rendered with existing UI classes.
4. おらっちに勝った！: challenge success result label plus a restrained `挑戦状の記録` view using existing challenge statistics.

## Deliberately not invented
The exact trigger for the previously agreed first `超レア隠し演出` could not be recovered from CP219/CP221 artifacts. No guessed trigger or visual effect was introduced. This preserves the approved Web UI and avoids silently changing the game specification.

## Verification
- `node --check source/app.js`: PASS
- `tools/test-security-release.js`: PASS
- `tools/test-question-tag-integrity.js`: PASS (1741 municipalities / 5158 keys)
- source/dist-web app.js: identical
- source/dist-web style.css: identical and unchanged from CP219
