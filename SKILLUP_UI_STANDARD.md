# SkillUp UI Standard v1.0

## Purpose
All SkillUp class, subject, syllabus, learning-path, practice and mastery pages must follow one responsive visual system.

## Responsive breakpoints
- Small mobile: <=380px
- Mobile: 381-767px
- Tablet: 768-1199px
- Desktop: >=1200px

## Typography
### Mobile
- Page title: 28-32px
- Section title: 18-20px
- Chapter title: 16-18px
- Body: 13-14px
- Caption: 11-12px
- Footer label: 11-12px

### Desktop
- Page title: 36-42px
- Section title: 22-26px
- Chapter title: 18-21px
- Body: 14-16px
- Caption: 12-13px
- Footer label: 12-14px

Never use 6-8px normal text.

## Learning path
Every chapter follows:
Learn -> Concepts -> Practice -> Mastery

- Mobile node size: 58-64px
- Desktop node size: 72-84px
- Chapter containers must grow naturally.
- Never use fixed heights that can cause the next chapter to overlap the current path.
- Long titles must wrap safely.

## Page width
- Mobile: 100% width with 12-16px side padding.
- Desktop: centered content with approximately 1100-1200px maximum width.
- No unnecessary narrow desktop columns.

## Header
Keep the SKILLUP brand, subtitle and controls consistent across all pages. Scale typography and spacing responsively; do not duplicate unrelated header designs.

## Global footer
Exactly five navigation positions:
Home | Learn | Practice | League | Profile

Rules:
- width: 100%
- left: 0
- right: 0
- no transform-based horizontal positioning
- fixed/sticky bottom behavior must not cover content
- equal-width navigation items
- sufficient page bottom padding

## Colors
Use the global SkillUp palette. Green = available/completed; blue = practice; yellow = mastery; grey = locked; dark navy = headings; light grey = background; purple = SkillUp brand.

## Navigation
Expected flow:
Home -> Learn -> Class -> Subject -> Chapter -> Learn -> Concepts -> Practice -> Mastery

No production placeholder links such as href="#".

## Version control
All shared UI changes increment the central SkillUp version. Pages should load the central version file rather than inventing independent cache-busting versions.

## Required QA sizes
Mobile: 360x800, 390x844, 412x915
Desktop: 1366x768, 1920x1080

Before release verify:
- no horizontal scrolling
- no overlapping nodes
- no text overflow
- footer fully visible and full width
- footer does not cover content
- consistent header and typography
- correct locked/unlocked state
- all navigation links work
- version is current

## Golden rule
Build one standard responsive template and reuse it for every class and subject. Do not copy a page and manually tune it independently unless the change is explicitly part of the global standard.
