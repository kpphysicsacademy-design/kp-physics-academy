# Plant Kingdom Path Architecture — Protected Baseline

## Purpose
This document is the protected navigation and data baseline for the SkillUp NEET Botany → Plant Kingdom learning system.

## Current protected data sources
- botany-neet-path.html — NEET Botany entry and Plant Kingdom path
- botany-plant-kingdom.html — Plant Kingdom concept hub
- botany-plant-kingdom-practice.html — concept question banks, test engine, explanations, retry logic and mastery flow

## Required navigation architecture
NEET Botany
→ Plant Kingdom Hub
→ Choose Concept
→ Choose Test Level
→ Questions
→ Result
→ Wrong-answer Revision
→ Back to Concept Path

A separate route must be used for Full-Length Chapter Test:
Plant Kingdom Hub
→ Full-Length Chapter Test
→ Mixed Questions
→ Final Result
→ Weak-area Analysis
→ Recommended Revision

## Concept test contract
Each concept contains:
- Level 1: questions 1–10
- Level 2: questions 11–20
- Level 3: questions 21–30
- Total: 30 MCQs per concept
- Explanations after answers
- Wrong-answer retry/revision
- Result and weak-area feedback

## Protection rules before every update
1. Fetch and inspect the target file first.
2. Record the current SHA before modification.
3. Do not replace a whole file unless explicitly rebuilding it.
4. Preserve existing question banks unless the requested task explicitly updates questions.
5. Verify question-bank counts and JavaScript syntax after modification.
6. Verify all parent/back/next navigation links.
7. Make one logical change per commit.
8. If a route is being replaced, keep the old route working or provide a redirect.
9. Verify end-to-end flow before the next page is modified.
10. Never delete content merely to simplify layout without checking whether it contains learning data or navigation.

## Protected baseline snapshot
- botany-neet-path.html: f5df634f1c3918c10532f9adfba8bf236a8adbf1
- botany-plant-kingdom.html: 85b1bb907aaec721439ea999d5138ca8e36edc0a
- botany-plant-kingdom-practice.html: eb2a365ac10e66f55355150a5a0b550bbbb4865c

## Rebuild protocol
Audit → Snapshot → Update one layer → Verify data → Verify navigation → Commit → End-to-end test → Next layer.
