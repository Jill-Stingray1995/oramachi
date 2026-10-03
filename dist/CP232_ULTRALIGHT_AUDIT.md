# CP232 Ultra-light audit foundation

- CP231 remains the functional base.
- CP227 Conversation Logic worlds and per-question gate results are memoized per answer-state signature. Semantics unchanged.
- CP229 Q1 structural-opening candidate rows are cached because they are invariant before the first answer. Semantics unchanged.
- Added `cp232AuditRunOneLite()` for bulk audit. It calls the same `r89PlanQuestion()` / `r89AfterAnswer()` runtime selector but omits expensive diagnostic snapshots.

## Measured benchmark in this environment
- Before: 1 Tokamachi run about 15.26 s, RSS about 497 MB.
- After Conversation Logic memoization: 1 run about 5.48 s.
- After Q1-row caching, 10 Tokamachi runs: 20.12 s total, RSS about 556 MB (~2.0 s/game amortized).

## Actual Tokamachi check after optimization
10/10 correct; 10/10 Face YES -> Surprise YES; max 19 questions in this batch.
Canonical ending observed: `snow_festival` -> `tokamachi_echigo_tsumari`.

IMPORTANT: this benchmark also exposed that opening-route diversity is still insufficient in this 10-run batch: Q1 was `sake` in all 10. Therefore CP232 is an AUDIT/PERFORMANCE checkpoint, not a selector-quality release and must not be deployed as the final build.
