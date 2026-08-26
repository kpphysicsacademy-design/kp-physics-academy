# SkillUp UI Standard v1.2

## Purpose
All SkillUp class, subject, syllabus, learning-path, practice and mastery pages use one responsive, colorful visual system.

## Global learning path
Every chapter follows exactly:
**Learn → Challenge → Practice → Mastery**

- **Learn** = lesson, explanation and examples.
- **Challenge** = short comprehension/checkpoint activity.
- **Practice** = MCQs, numericals and application questions.
- **Mastery** = chapter assessment, score and unlock logic.

## Stage circles — mandatory standard
The stage **icon and stage word MUST be inside the same circle**. Never place the stage word below, beside or outside the circle.

Each circle must contain:
- a clearly visible vector/SVG icon
- the stage name
- centered alignment
- strong contrast
- adequate internal padding
- white border
- tactile bottom shadow

### Duolingo-inspired color palette
Use the official Duolingo-inspired color roles below; SkillUp is not copying Duolingo branding or assets.

- **Learn:** Feather Green `#58CC02`
- **Challenge:** Fox Orange `#FF9600`
- **Practice:** Macaw Blue `#1CB0F6`
- **Mastery:** Bee Yellow `#FFC800`
- **Locked:** Hare/neutral `#AFAFAF`
- **Primary text:** Eel `#4B4B4B`
- **Background:** Snow `#FFFFFF` / Polar `#F7F7F7`

### Icon visibility
- Do **not** use emoji as the primary stage icon because emoji appearance varies by device/browser.
- Use simple inline SVG/vector icons.
- Icons must have sufficient contrast against their circle.
- Learn/Challenge/Practice icons: white.
- Mastery icon/text: dark `#4B4B4B` for contrast on yellow.
- Locked icon: white.

### Recommended node size
- Mobile: 62–70px
- Desktop: 78–88px

## Learning-path geometry
Standard visual sequence:

```text
Chapter heading
     ↓
📖 Learn       ⚡ Challenge
     ↘         ↙
🎯 Practice → 🏆 Mastery
     ↓
Next chapter
```

The four circles must never overlap each other, their text, the chapter heading, or the next chapter. Chapter containers must grow naturally; avoid unsafe fixed heights.

The SkillUp path is intentionally guided: learning stages are ordered so students always know the next action.

## Colorful UI rule
SkillUp pages must not become monochrome or excessively grey. Use color intentionally for:
- learning-stage circles
- chapter numbers
- subject badges
- progress indicators
- active navigation
- section accents
- completed/available/locked states

Keep the page background light and calm so the learning elements remain prominent.

## Typography
### Mobile
- Page title: 25–30px
- Section title: 18–20px
- Chapter title: 16–18px
- Body: 13–14px
- Caption: 11–12px
- Footer label: 11–12px

### Desktop
- Page title: 34–42px
- Section title: 22–26px
- Chapter title: 18–21px
- Body: 14–16px
- Caption: 12–13px
- Footer label: 12–14px

Never use 6–8px normal text.

## Page width
- Mobile: 100% width with 12–16px side padding.
- Desktop: centered content with approximately 1000–1200px maximum width.
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
**Home → Learn → Class → Subject → Chapter → Learn → Challenge → Practice → Mastery**

No production placeholder links such as `href="#"`.

## Accessibility and touch targets
- strong text/background contrast
- minimum practical touch target around 44px
- no horizontal scrolling
- no clipped titles
- long titles wrap naturally

## Version control
- Current UI standard: **v1.2**
- Shared UI changes increment the central SkillUp version.
- Pages should use the project version-control system rather than inventing unrelated versions.
- Current Class 6–9 learning-path rollout: **20260826.14**.

## Required QA sizes
Mobile: 360×800, 390×844, 412×915
Desktop: 1366×768, 1920×1080

Before release verify:
- stage circles are colorful
- icons are clearly visible
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
Build one standard responsive learning-path component and reuse it for **every class and every subject**. Do not manually create a different learning-path design for individual pages.
