# CP230 Constitutional Ending Repair — CANDIDATE / DO NOT DEPLOY YET

## Structural repair
- Kept CP229 structural multi-route opening / Implicit Geography architecture.
- Added a terminal-lane state wall: once the runtime has earned a concrete leading municipality, legacy finishers cannot substitute a different Face or jump directly to a guess.
- The leading municipality's canonical authored Face is reserved first; its distinct authored Surprise is reserved as the next terminal beat.
- CP67 legacy terminal/finisher hooks are redirected into the canonical pair rather than allowed to bypass it.
- No question text, cities.json, or CSS changes.

## Tokamachi canonical ledger (verified from source)
- Face: `snow_festival` — 「大規模な雪まつり・氷まつりが開催される？」
- Surprise: `tokamachi_echigo_tsumari` — 「雪深い里山に現代アートが溶け込む「大地の芸術祭」のマチ？」
- Order in the owner ledger: `snow_festival` -> `tokamachi_echigo_tsumari`.

## Verification completed
- `node --check app.js`: PASS
- Security/UI/release regression: PASS
- Question/tag integrity: PASS (`municipalities=1741`, `keys=5158`)
- `cities.json`: unchanged
- `style.css`: unchanged

## Verification NOT completed
The runtime-shared Chromium audit did not finish within the execution window in this environment. Therefore this candidate is deliberately NOT labeled deploy-ready and no claim is made that the 10-run Tokamachi / nationwide runtime audit has passed.

## Required release gate
Before deployment, runtime-shared audit must confirm for Tokamachi across repeated runs:
1. multiple genuinely different opening routes,
2. no region-name interrogation dominating Q1-Q5,
3. all correct,
4. no runaway route,
5. every successful run ends `snow_festival YES -> tokamachi_echigo_tsumari YES -> 十日町市`,
6. no direct guess before the canonical pair.
Then expand the same invariant nationwide.
