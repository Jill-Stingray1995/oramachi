# CP229 Structural Route Engine — EXPERIMENTAL / NOT FOR DEPLOY

## Purpose
Replace CP228's post-hoc Human/Implicit Geography scoring with a structural opening selector.

## Structural changes
- Opening candidate generation excludes explicit region/prefecture routing and stats before route selection.
- Route profile is selected before the first question.
- Profiles tested: life→mobility, nature→mobility, mobility→terrain, culture→economy, industry→landscape.
- Every route ball must pass Conversation Logic, local-context, and a hard information-quality floor.
- Explicit region routing is fallback only; repeated explicit region questions are blocked by areaQuestionAskedRecently().
- No question text or cities.json changes.

## Actual runtime-shared audit: Tokamachi (runs completed before stopping)
All rows below were generated through v330AuditRunOne(), which calls the same r89PlanQuestion/r89AfterAnswer path as live play.

| run | opening route | correct | questions | first five summary | Face→Surprise |
|---:|---|:---:|---:|---|:---:|
| 0 | life_mobility | YES | 11 | sake / private railway / AEON mall / coast / prefectural border | FAIL (guess occurred first) |
| 1 | life_mobility | YES | 11 | sake / private railway / AEON mall / coast / big river | FAIL (guess occurred first) |
| 2 | terrain_mobility | YES | 15 | big river / private railway / prefectural border / sake / shinkansen | PASS |
| 3 | life_mobility | YES | 18 | sake / private railway / prefectural border / coast / big river | PASS |
| 4 | mobility_terrain | YES | 15 | private railway / big river / coast / sake / prefectural border | PASS |
| 5 | life_mobility | YES | 19 | sake / private railway / AEON mall / prefectural border / shinkansen | PASS |

## What improved
- 3 genuinely different opening profiles appeared in the completed sample.
- Q1-Q5 had zero explicit region-name questions in all six completed runs.
- 6/6 correct; worst completed run 19 questions; no 39-question runaway.
- Region-name routing moved to fallback after the implicit opening.

## Why this is NOT a release checkpoint
The constitutional Face→distinct Surprise ending failed in runs 0 and 1. This is unacceptable even though both guesses were correct.
The next repair must fix the pre-guess transition structurally, without weakening the new route architecture or adding target-specific exceptions.

## Status
EXPERIMENTAL. DO NOT DEPLOY.
