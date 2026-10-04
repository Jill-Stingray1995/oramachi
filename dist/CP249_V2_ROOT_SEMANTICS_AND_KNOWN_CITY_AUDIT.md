# CP249 Selector V2 — single truth semantics + known-city production-path audit

## Implemented
- Unified Conversation Logic Gate semantics with the actual runtime answer rule: `tags[key] === true` is YES; every other stored value is NO.
- Removed the previous third-state mismatch where runtime answered NO but conversation reconstruction treated the same missing tag as unknown.
- Unified V2 candidate split counting to the same rule.
- Preserved the CP246 single-brain wall: nationwide normal play cannot fall back to legacy post-plan selectors.
- No UI or authored question text changes.

## Actual production-selector audit performed
Production path: `v330AuditRunOne -> r89PlanQuestion -> pickNextQuestionSafely -> selectNextQuestionV2`.
3 runs each were executed for: 十日町市, 世田谷区, 新潟市, 長岡市, 京都市, 広島市, 盛岡市, 馬路村.

### Findings
- 十日町市: 8Q, correct 3/3, no nuclear detour, Face `snow_festival` -> Surprise `tokamachi_echigo_tsumari`.
- 広島市: 8Q, correct 3/3.
- 新潟市/長岡市/京都市/盛岡市: 11Q, correct 3/3 each.
- 世田谷区: 14Q, correct 3/3, but dry cleanup questions remain.
- 馬路村: 25Q, correct 3/3, Face `v330_umaji_yuzu_face` -> Surprise `v330_umaji_gokkun_surprise`, but 25Q violates the constitution and direct geography cleanup appears late.
- Route diversity is still insufficient in this audit: repeated runs were identical for these targets.

## Status
FAIL / checkpoint only. Do not deploy or release-certify.
The audit is now catching constitutional failures instead of hiding them behind aggregate correctness.
Next repair targets are: meaningful route-family diversity, earlier hypothesis convergence for small municipalities, late cleanup suppression, and constitutional regional fallback timing.
