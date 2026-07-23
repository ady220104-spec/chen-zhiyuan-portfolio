# 志远 Design System

> **⚠️ Identity swap in progress.** At the user's request, this system's display name and avatar/logo were swapped from the original **ESTHER不二** to **志远** (real logo supplied by the user, see Assets). Everything else — colors, type, spacing, the 52-component library, and all content-voice guidance below — is still **ESTHER不二's original system, unmodified**. It has not yet been redesigned or rewritten for 志远's actual context (a personal brand for an A-share trading mentor, per `uploads/陈志远个人网页内容素材.md`), so voice/tone/content below will still read as a Chinese lifestyle-content-creator brand. Treat this as a placeholder swap, not a finished rebrand — ask for the full rebrand if you want the colors, type, tone, and components reworked around 志远's actual brand.

A personal-brand ("个人IP") content design system, ported from one originally built for **ESTHER不二** (GitHub: `esthersjw`) — a Chinese content creator and designer — and now labeled for **志远**. Unlike a typical SaaS product design system, this isn't a set of app screens; it's a **content-production system**: a brand DNA + a 52-family component library + five "scene" specifications that let an AI agent turn any piece of writing into an on-brand, publication-ready page across five real distribution channels.

## Sources

- **Primary source (as attached to this project):** [github.com/ady220104-spec/esther-design-system](https://github.com/ady220104-spec/esther-design-system) (branch `main`) — read in full: `README.md`, `SKILL.md`, `brand-dna.md`, `references/*.md` (layouts, components, checklist, all five scene specs), `assets/template-*.html`, `assets/avatar-placeholder.svg`, and the root `placeholder.jpg` illustration.
- **Original author, per the repo's own license header and SKILL.md:** ESTHER不二 (`esthersjw`), canonical repo `https://github.com/esthersjw/esther-design-system`, live demos hosted at `esthersjw.github.io`. The attached `ady220104-spec` copy appears to be a fork/mirror of the same project.
- **License:** CC BY-NC-SA 4.0 — free to use/modify/share with attribution to ESTHER不二 (esthersjw); no commercial use; derivatives must share alike.
- Explore the source repo further for the *complete* un-abridged component library (this system ports all 52 documented families, but the source's own markdown files contain more usage prose, more layout-pattern detail, and the original demo pages, which are worth reading directly if you want to go deeper than this port).

## What this actually is

The source repo is a prompt-engineering artifact: a manual an AI agent is required to consult before generating **any** HTML page for this creator, specifically to stop AI-generated design from regressing to generic "AI slop" (the repo's own words: "限制AI的自由度 = 保证输出质量" — restricting the AI's freedom is what guarantees output quality). It defines:

- **Brand DNA** — a fixed three-color system, a five-font pool, spacing rules, a taboo list.
- **16 layout patterns** — named, reusable page-section shapes (asymmetric hero, sticky-side, timeline, dark panel, editorial split, canvas, …).
- **52 components** — concrete, styled HTML/CSS recipes (cards, quotes, code panels, comparison tables, travel tickets, text-effects, …), ported here as React components (see `components/`).
- **Five output "scenes"** — the five real places this creator's content ends up: a tutorial/explainer page, an event/landing page, a personal dashboard-style app page, Xiaohongshu (小红书/RED) 3:4 image cards, and a WeChat official-account article. Each has its own constraints (see `ui_kits/`).

## Repo → design-system mapping

| This project | Source repo |
|---|---|
| `tokens/*.css` | `brand-dna.md` (colors, fonts, spacing) |
| `components/**` | `references/components.md` (52 numbered families) |
| `guidelines/*.html` | `brand-dna.md` + `references/checklist.md`, turned into visual specimen cards |
| `ui_kits/*/index.html` | `assets/template-*.html` + `references/scene-*.md`, turned into full interactive recreations |
| `assets/zhiyuan-logo.png` | user-supplied 志远 logo (replaces the source repo's own `placeholder.jpg` example IP illustration) |
| `SKILL.md` | `SKILL.md` (7-step workflow, ported/adapted) |

---

## Content Fundamentals

*(How ESTHER不二's copy is actually written, per the original source — from `brand-dna.md`, `references/scene-*.md`, and the repo's own README/SKILL voice. Not yet adapted for 志远's actual voice/audience — see caveat at the top of this file.)*

- **Language mix:** Chinese-first, English as accent/decoration/labels only ("中文为主，英文点缀做装饰/标签"). Section numbers, category tags, and single decorative words are where English lives (e.g. "STEP 1", "Boundary", "Script"); paragraphs are Chinese.
- **Voice:** conversational, warm, like explaining something to a friend ("口语化、轻松、像跟朋友解释"). Analogies over jargon ("就像百度网盘" / "相当于时光机") — "不堆术语，说人话" (don't pile on jargon, talk like a person).
- **Person:** first person for the creator's own voice (signature lines use "我"/"你" implicitly); tutorial copy addresses the reader directly and casually.
- **Emoji:** used, but restrained — roughly one per heading/section, never per bullet point ("用emoji但克制（每个标题一个就够）").
- **Casing (English fragments):** sentence case for prose fragments; full caps + wide letter-spacing reserved for the `label-caps` tag pattern (e.g. "TUTORIAL · SCENE 01"). English cards for international platforms drop to all-lowercase-except-proper-nouns (scene-cards.md's 英文卡片补充规范).
- **Signature sign-off (fixed, verbatim):**
  *志远*
  *▪️2006年入行｜专注A股短线*
  *▪️先看情绪主线，再看龙头节奏*
  This exact block closes articles and card decks (see `Signature` component) — do not paraphrase it. Bio lines are drawn from `uploads/陈志远个人网页内容素材.md`, replacing ESTHER不二's original persona copy.
- **The self-check that governs everything:** *"这个页面截图发到社交媒体，会不会被人评论'又是AI做的'？"* — would a screenshot of this get called "obviously AI" on social media? If yes, redo it.

## Visual Foundations

- **Color:** exactly three brand hues at a fixed ratio — blue `#2B7FD8` (60%, primary/headings/links), yellow `#F4D758` (30%, accent/badges/highlights), red `#E84A5F` (10%, pop/CTA/underlines only — **never** promoted to a primary color). Neutrals are always warm: cream `#fefcf6` (page bg) / cream-dark `#faf6eb` (alternating section bg) / ink `#1A1A2E` (never pure black) / ink-light `#4A4A5A` / ink-faint `#8A8A9A`. Pure `#000`/`#fff` never appear as backgrounds. Dark panels (`#151821` / `#0d1117`) break the rhythm 1–2 times per page, max. A documented optional 4th color (partner orange `#F1752D`/`#F7A946`) can replace red's *position* for co-branded landing pages — it never touches blue or yellow's role.
- **Type:** serif headings + sans body, always ("标题用衬线，正文用无衬线——混搭产生节奏"). Display/English accents in italic Fraunces; Chinese headings in Noto Serif SC 900 (see font substitution note below); body in Noto Sans SC; handwritten annotations in Caveat; code in Fira Code. Size contrast is deliberately extreme — hero type can hit `clamp(2.8rem,7vw,5.5rem)` while captions drop to `0.78rem`. Everything fluid via `clamp()`, nothing in fixed px.
- **Spacing:** also entirely `clamp()`-driven — section gaps `clamp(80px,12vh,160px)`, block gaps `clamp(40px,6vw,100px)`, card padding `clamp(28px,3vw,44px)`. Content capped at `max-width:1300px`, centered. Breakpoints at 900px (two-column → one) and 600px (16px → 15px base).
- **Backgrounds:** flat warm color is the default; radial gradients are used deliberately for depth ("用径向渐变制造层次感，不要纯平色") — but **any linear blue-purple gradient is banned outright**. No stock photography, no AI-generated imagery, no heavy filters. Full-bleed real photography is welcome (`FullBleedHero`) but must be a real, high-quality photo with a clear subject.
- **Imagery vibe (original ESTHER不二 system):** the one real illustration asset in the source (originally `placeholder.jpg`) was hand-drawn, crayon/colored-pencil textured, warm and a little wobbly on purpose — "手绘蜡笔感" (hand-drawn crayon feel). **This has been replaced** — the current `assets/zhiyuan-logo.png` is a clean navy calligraphy-style wordmark with a thin gold accent line, on a cream ground: restrained and editorial, the opposite texture of the original crayon illustration. Nothing else in the Visual Foundations below (color/type/spacing/shadows/motion) has been adjusted to match this new, more restrained mark — worth revisiting if 志远's full visual system should follow the logo's calmer register instead of ESTHER不二's playful one.
- **Animation:** opacity + transform only, ever — never animate layout properties (width/height). One easing curve system-wide: `cubic-bezier(0.16,1,0.3,1)` (expo-out). No bounce/elastic, no infinite decorative loops. The near-universal entrance is "Scroll Reveal" (fade + rise 32px, fires once, staggered 0.1s per element) — see `Reveal` / `.reveal` utility class. Respects `prefers-reduced-motion` everywhere.
- **Hover states:** links underline-sweep in yellow — brand rule is explicitly "hover = accent underline/block, **not** a color change" ("链接悬停：用强调色底色块或下划线，不用变色"). Buttons/cards lift (`translateY(-2px)` to `-4px`) with a soft colored glow-shadow, not a darken/lighten swap.
- **Press/active states:** not separately defined beyond the hover-lift; buttons rely on the same transform + shadow language. `Button`'s `coolMode` adds a click-and-hold particle burst (blue/yellow, minimal red) for one celebratory CTA per page.
- **Borders & dividers:** dashed borders (2–2.5px, brand-color) mark "sketchy"/handwritten-feel elements (labels, chair-cards, tickets). Solid hairlines (`rgba(26,26,46,.08–.12)`) separate list rows. Accent-color decorative border-bottoms on feature cards are always **exactly 4px** — thinner reads as an accident, not a choice.
- **Corner radii:** 6/12/16/20/24px scale plus a 999px pill — cards typically 12–20px, buttons 12px, avatars/pills fully round.
- **Shadows:** soft and warm, never harsh/black — five-step scale from a barely-there `0 1px 4px rgba(0,0,0,.04)` up to a floaty `0 12px 48px rgba(0,0,0,.15)` for elevated code panels.
- **Cards:** white (`#fff`) surface on the cream page background (never white-on-white), 12–24px radius, soft shadow, no border by default — dashed borders and colored top/bottom bars are deliberate accent treatments, not the default card style.
- **Transparency & blur:** `backdrop-filter: blur()` appears in exactly two places by convention — the sticky frosted nav bar and modal overlays. It is **not** a general decorative device (glassmorphism as an aesthetic is explicitly banned).
- **Layout rules:** left-aligned by default ("左对齐为主，不要居中病") — centering is reserved for a single Hero moment; everything after must go back to left-aligned. Every section on a page uses a *different* layout pattern from the 16-pattern library; repeating the same shape twice in a row is treated as a design bug.

## Iconography

The source repo defines **no icon font, no SVG icon set, and no PNG icon library**. Iconography is handled two ways, and both are intentional:

1. **Emoji**, used sparingly as inline glyphs inside components (card icon blocks, checklist tags, dark-panel bullet items, timeline emoji) — restrained per the Content Fundamentals rule above, never a decorative flourish.
2. **Unicode/typographic marks** as structural glyphs: `→` for flow arrows, `›`/`⟳` for ring-steps, `✦`/`"` as decorative quote/spinner glyphs, `✓`/`×`/`✕`/`◆` for compare-list bullets. These are typeset, not drawn.

The original ESTHER不二 system had no logo. **志远 has a real logo** — see Assets below.

## Assets

- `assets/zhiyuan-logo.png` — **user-supplied, real logo**: "志远" set in a navy calligraphy-style wordmark, a thin gold accent line and star beneath it, small "志远 / ZHIYUAN" lockup to the right, on a cream ground. This replaces the original system's `character-illustration.jpg` (ESTHER不二's hand-drawn crayon-style example avatar) at every usage site (Signature, hero images, avatar/gallery/flip-card demos, Xiaohongshu cover + end cards, WeChat signature). Some of those usage sites (circular avatar crops, full-bleed photo hero) were designed around a photographic/illustrated character and may not frame this wordmark logo perfectly — worth a visual pass.
- `assets/avatar-placeholder.svg` — a generic gray silhouette icon, used as a neutral empty-avatar fallback (unrelated to brand styling).
- **A real logo now exists** (see above) — this is a change from the original ESTHER不二 system, which had none.

## Font substitution flag ⚠️

The brand's first-choice Chinese display serif is **汇文明朝体 (Huiwen Mincho)** — a licensed commercial font. The source repo does not bundle it (each user is expected to own a licensed local copy) and no freely-redistributable version exists to add here. This system follows the source repo's **own documented fallback**: `--font-heading-cn` resolves to **Noto Serif SC, weight 900** everywhere a heading would use Huiwen Mincho. This is flagged in `tokens/fonts.css` and `tokens/typography.css`.
**If you have a licensed Huiwen Mincho file, please share it** — drop the `.ttf`/`.otf` into `assets/fonts/`, add its `@font-face` to `tokens/fonts.css`, and repoint `--font-heading-cn`.

All other fonts (Fraunces, Caveat, Noto Serif SC, Noto Sans SC, Fira Code, and Bangers for `ComicText` only) are loaded live from Google Fonts (`tokens/fonts.css`) exactly as the source repo's own templates do — this requires network access; nothing is self-hosted.

## Intentional additions & consolidations

Per the source's own component index, some of its 52 numbered families are near-duplicate treatments of the same idea at different call-sites. Rather than ship near-identical components twice, these were **merged into one component with a `variant`/`size` prop** (every source family is still fully represented — nothing was dropped):

- `Card` covers source #1 (A–D) **and** #10 (A–E) **and** #34 — all are "card with a decorative treatment" (magazine/numbered/tag/icon/editorial/dashed/gradient/typo); #1B, #10A and #34 in particular are the same "giant translucent number" idea at slightly different scales, unified as `variant="numbered"`.
- `QuoteBlock` covers #1E (A–D) **and** #3 (A, C) — both are "inline quote/insight card" families; #1E-B and #3B are effectively identical (handwritten dashed-border treatment).
- `SectionHeader` covers #2 and #8 (`size="compact"` vs `"giant"`).
- `CompareTable` covers #19 and #20; `CompareList` covers #12 (A–D).
- `FlipCard` covers #31 (click-to-flip) and #37 (hover-flip grid tile) via a `trigger` prop.
- `Button` covers #18 (CTA) and #46 (Cool Mode particle burst) via a `coolMode` prop.
- Components #26–#40's original CSS referenced a generic `var(--accent, #8b4513)`-style fallback (a brown/terracotta placeholder) and, for #38–40, `Libre Baskerville` — neither the color nor that font is defined anywhere in `brand-dna.md` for this brand. Those components are re-skinned onto the brand's real tokens (`--brand-primary` / Fraunces / Noto Serif SC) instead of the source's incidental placeholder values, per the instruction to ground values in the brand's actual system rather than an example file's leftover defaults.
- `StackedCards` (#30) reimplements the same click-to-cycle interaction with a React state reorder + CSS transition rather than the source's hand-rolled fly-out keyframe — same effect, simpler and self-contained.

No component families were invented beyond what the source defines.

---

## Index

```
readme.md                     ← you are here
SKILL.md                      ← Claude Code / Agent Skill-compatible version
styles.css                    ← global stylesheet entry point (imports only)
tokens/
  fonts.css                   ← @import Google Fonts + Huiwen Mincho substitution note
  colors.css                  ← brand three-color system + neutrals + semantic aliases
  typography.css              ← font stacks, fluid type scale, base link/selection rules
  spacing.css                 ← fluid spacing scale, container, breakpoints
  effects.css                 ← radii, shadows, easing, the global .reveal utility
components/                   ← 44 React components (see full list below), grouped by concern
  cards/        Card, BookCard
  quotes/       QuoteBlock, PullQuote, QuoteSection
  code/         CodePanel, ChatBubbles, TypewriterSection
  layout/       SectionHeader, FlowSteps, NewspaperLayout, FullBleedHero, TimelineCards, RingSteps
  compare/      CompareList, CompareTable
  navigation/   NavBar, FilterTabs, TabSwitcher
  interactive/  HorizontalScrollCards, Accordion, Carousel, StackedCards, FlipCard, HoverRevealCard, DarkReveal, Checklist, GalleryRail
  text-fx/      SparklesText, MorphingText, TypingText, KineticText, PixelImage, Highlighter, ComicText, SpinningText
  travel/       TicketCard, HotelCard
  misc/         AvatarCluster, Modal, MoodCalendar, Button, Signature, Reveal
guidelines/                   ← 20 foundation specimen cards (Colors ×4, Type ×7, Spacing ×4, Brand ×5)
ui_kits/                       ← 5 full interactive scene recreations
  tutorial-page/       教程型/介绍型/科普型
  landing-page/        活动页/分享会/Landing
  app-dashboard/       App型/功能型
  xiaohongshu-cards/   图文卡片 (3:4, 5 of 18 cards)
  wechat-article/      公众号排版 (all-inline, no styles.css — see its README)
assets/
  zhiyuan-logo.png            ← user-supplied 志远 logo (replaces the source repo's example IP portrait)
  avatar-placeholder.svg      ← generic empty-avatar fallback icon
```

(Working notes and the original source-repo files read during this build were kept in a scratch `research/` folder and removed once ported — re-fetch anything you need directly from the GitHub source linked above.)

## Components (44)

**cards/** — Card, BookCard
**quotes/** — QuoteBlock, PullQuote, QuoteSection
**code/** — CodePanel, ChatBubbles, TypewriterSection
**layout/** — SectionHeader, FlowSteps, NewspaperLayout, FullBleedHero, TimelineCards, RingSteps
**compare/** — CompareList, CompareTable
**navigation/** — NavBar, FilterTabs, TabSwitcher
**interactive/** — HorizontalScrollCards, Accordion, Carousel, StackedCards, FlipCard, HoverRevealCard, DarkReveal, Checklist, GalleryRail
**text-fx/** — SparklesText, MorphingText, TypingText, KineticText, PixelImage, Highlighter, ComicText, SpinningText
**travel/** — TicketCard, HotelCard
**misc/** — AvatarCluster, Modal, MoodCalendar, Button, Signature, Reveal

Every component's directory has a matching `.prompt.md` (what/when + example) and a `.d.ts` (full prop contract) alongside the `.jsx` — read those before using a component from code.

## Caveats & ask

- **Huiwen Mincho is missing** (see Font substitution flag above) — please share a licensed copy if you have one, or confirm the Noto Serif SC fallback is good enough to keep permanently.
- **The Xiaohongshu export button is decorative** — real PNG export needs `html2canvas`+`JSZip`, deliberately not vendored into this components library (see `ui_kits/xiaohongshu-cards/README.md`).
- **The character illustration may not be "your" asset** — the source repo frames it as a placeholder its own users are meant to replace; flag if you'd rather we remove it pending your real avatar/illustration.
- I ported all 52 source component families but exercised judgment consolidating a handful of near-duplicates and re-skinning a few components whose source CSS referenced an undocumented placeholder color/font (see "Intentional additions & consolidations" above) — worth a look to confirm those calls feel right.
- This is a first pass end-to-end. **Please iterate with me** — tell me which components/scenes need closer fidelity to the source, whether the two meta ("about this design system") example topics used in the tutorial/landing/cards kits should be swapped for real content, and what's missing.
