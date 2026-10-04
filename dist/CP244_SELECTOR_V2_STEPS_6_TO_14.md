# CP244 Selector V2 — Steps 6–14 implementation checkpoint

Status: IMPLEMENTED / STATICALLY VERIFIED / NOT BROWSER-CERTIFIED / NOT RELEASE-CERTIFIED

## Implemented
6. Implicit Geography: nationwide V2 human candidate generation excludes explicit-address keys and reasons from life/transport/nature/industry/culture evidence.
7. Route Family: existing five human route profiles are now consumed by the V2 core, not only by an optional opening branch.
8. Hypothesis + Narrative Continuity: recent confident YES answers build a family hypothesis; coherent follow-ups are rewarded and abrupt rare-fact detours are penalized.
9. Insight Convergence: candidates combine live information gain, route fit, hypothesis continuity, specificity and human-shared-clue quality.
10. Exit-to-Town: once the live hypothesis is mature, V2 stops ordinary cleanup and enters the authored terminal lane.
11. Face Lane: Exit-to-Town reserves the current lead municipality's authored Face.
12. Surprise Lane: Face-used state immediately prefers the reserved distinct-key Surprise; Face and Surprise cannot be the same key.
13. Legacy selector demotion: in nationwide normal play, `selectNextQuestionV2()` no longer falls back to `cp243LegacySelectorCore()`. Legacy selection remains only for non-nationwide/non-normal modes. Constitutional forced Face/Surprise transitions are explicitly admitted into V2.
14. Live/audit parity: both continue through `r89PlanQuestion()` -> `pickNextQuestionSafely()` -> `selectNextQuestionV2()`. `v330AuditRunOne()` contains no separate picker.

## Tokamachi-specific design consequence (generic rule, not city hard-code)
A successful landscape/nature hypothesis such as rice terraces now increases narrative continuity for related human evidence and penalizes an abrupt rare-fact family jump while the live pool is still broad. Thus a question such as nuclear power cannot win merely because it has information gain after a coherent landscape hypothesis. Once the town hypothesis matures, Exit-to-Town should move to authored Face -> distinct Surprise instead of spending unrelated cleanup balls.

## Static verification actually executed
- `node --check source/app.js`: PASS
- `node source/tools/test-question-tag-integrity.js`: PASS — 1,741 municipalities / 5,166 keys
- `node source/tools/test-security-release.js`: PASS
- source/dist app.js SHA-256 identical: `81299b22083a7cf9a03549f036781f852906fb4c3c6e620312b9c5672cf73b2d`

## Runtime verification status
Attempted to execute `audit-test.html` in the available headless Chromium. The environment's organization browser policy blocks both localhost and file:// navigation, so no runtime sequence result is claimed here. Therefore Step 15 (20 Tokamachi production-path runs and human inspection) is NOT marked complete.

No release certification is asserted by this checkpoint.
