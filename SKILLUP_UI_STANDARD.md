# SkillUp UI Standard v1.1

## Purpose
All SkillUp class, subject, syllabus, learning-path, practice and mastery pages must follow one responsive, colorful visual system.

## Responsive breakpoints
- Small mobile: <=380px
- Mobile: 381-767px
- Tablet: 768-1199px
- Desktop: >=1200px

## Typography
### Mobile
- Page title: 25-30px
- Section title: 18-20px
- Chapter title: 16-18px
- Body: 13-14px
- Caption: 11-12px
- Footer label: 11-12px

### Desktop
- Page title: 34-42px
- Section title: 22-26px
- Chapter title: 18-21px
- Body: 14-16px
- Caption: 12-13px
- Footer label: 12-14px

Never use 6-8px normal text.

## Global learning path
Every chapter follows exactly:
**Learn -> Challenge -> Practice -> Mastery**

- Learn = lesson/explanation/examples.
- Challenge = short comprehension/checkpoint activity.
- Practice = MCQs, numericals and application questions.
- Mastery = chapter assessment, score and unlock logic.

### Stage circles
The stage word MUST be inside its circle, never below or beside it.

Each circle contains:
- stage icon
- stage name
- centered text
- strong contrast
- sufficient internal padding

Recommended node size:
- Mobile: 62-70px
- Desktop: 78-88px

### Mandatory colorful stage palette
- Learn: green
- Challenge: orange
- Practice: blue
- Mastery: yellow/gold

Each stage circle should use a white border and subtle bottom shadow for a tactile Duolingo-style appearance.

## Colorful UI rule
SkillUp pages must not become monochrome or excessively grey. Use color intentionally for:
- learning-stage circles
- chapter numbers
- subject badges
- progress indicators
- active navigation
- section accents
- completed/available/locked states

Keep the page background light and calm so the colorful learning elements remain prominent.

## Learning-path geometry
Standard visual sequence:
Chapter heading
  -> Learn ↘
          Challenge ↙
  -> Practice ↘
          Mastery
  -> Next chapter

The four circles must never overlap each other, their text, the chapter heading, or the next chapter. Chapter containers must grow naturally; do not rely on unsafe fixed heights.

## Chapter structure
Every chapter clearly shows:
- chapter number
- chapter title
- chapter status
- four-stage learning path

Locked chapters use a clear lock indicator and concise unlock message.

## Page width
- Mobile: 100% width with 12-16px side padding.
- Desktop: centered content with approximately 1000-1200px maximum width.
- Never compress a desktop page into a tiny mobile-width column.

## Header
Keep SKILLUP branding, subtitle and controls consistent. Scale typography and spacing responsively; do not create unrelated header variants.

## Global footer
Exactly five navigation positions:
**Home | Learn | Practice | League | Profile**

Rules:
- width: 100%
- left: 0
- right: 0
- no transform-based horizontal positioning
- fixed/sticky bottom behavior must not cover content
- equal-width navigation items
- sufficient page bottom padding

## Navigation
Expected flow:
Home -> Learn -> Class -> Subject -> Chapter -> Learn -> Challenge -> Practice -> Mastery

No production placeholder links such as href="#".

## Accessibility and touch targets
- strong text/background contrast
- minimum practical touch target around 44px
- no horizontal scrolling
- no clipped titles
- long titles wrap naturally

## Version control
All shared UI changes increment the central SkillUp version. Pages must use the project version-control system rather than inventing independent cache-busting versions.

## Required QA sizes
Mobile: 360x800, 390x844, 412x915
Desktop: 1366x768, 1920x1080

Before release verify:
- stage circles are colorful
- stage words are inside circles
- no overlap
- no clipping
- readable typography
- responsive desktop scaling
- footer fully visible and full width
- footer does not cover content
- consistent header and typography
- correct locked/unlocked state
- all navigation links work
- version is current

## Golden rule
Build one standard responsive learning-path component and reuse it for every class, subject and competitive path. Do not manually tune individual pages unless the change is explicitly added to this standard.
