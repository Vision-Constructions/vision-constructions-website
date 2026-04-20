# Brand Guide — Colours, logos, typography

Single source of truth for the Vision Constructions visual identity as implemented on the website.

---

## Colours

All colours are defined as CSS custom properties (variables) at the top of `styles.css`, scoped to `body.v2`. Change a variable value once and it updates everywhere.

### Primary palette

| Variable | Hex | Used for |
|---|---|---|
| `--h-green` | `#4CB848` | All accents — italic highlight text, CTA buttons, checklists, icon strokes. **The Vision green.** |
| `--h-dark` | `#15130F` | Dark band backgrounds (homepage hero, capability statement, CTAs, footer). |
| `--h-bg` | `#C4C3BF` | Light section background — a warm charcoal-grey. **This is the base canvas colour.** |
| `--h-alt` | `#B8B7B3` | Alternating light section (slightly darker tone of `--h-bg`). |
| `--h-card` | `#D4D3CF` | Card backgrounds on light sections (slightly lighter than `--h-bg`). |

### Text colours (on light background)

| Variable | Hex | Used for |
|---|---|---|
| `--h-ink` | `#1F1D19` | Primary text — headlines, body copy. |
| `--h-ink-muted` | `#4A4741` | Secondary text. |
| `--h-ink-soft` | `#6E6A64` | Tertiary text — small captions, kickers. |
| `--h-border` | `rgba(31, 29, 25, 0.14)` | Subtle divider lines on light backgrounds. |

### Why this palette

The brand brief specified green `#4CB848` and dark grey. The site **does not use pure white** — the light sections are a warm charcoal (`#C4C3BF`) which:
- Feels premium and construction-industrial, not corporate-white.
- Lets the Vision green punch without being overwhelming.
- Holds well alongside dark sections (no jarring contrast swings).

**Never introduce a pure-white section.** This was a deliberate design decision.

---

## Logo

### Files

| File | When to use |
|---|---|
| `images/logo.svg` | **White/light logo** — for use on dark backgrounds (hero, footer, dark bands). |
| `images/logo-dark.svg` | **Dark logo** — for use on light backgrounds (scrolled nav). |

Both are vector SVGs — they scale to any size without loss of quality.

### Dual-logo nav swap

The navigation swaps logos on scroll:
- **Top of page (hero visible, dark background):** `.nav-logo-light` (white logo) is shown.
- **After scrolling 40px (light scrolled nav):** `.nav-logo-dark` (dark logo) fades in.

This is controlled by:
- HTML — both `<img>` tags in `<a class="nav-logo">` inside the nav
- CSS — `.nav-logo-light` / `.nav-logo-dark` visibility rules in `styles.css`
- JS — `main.js` adds/removes the `.scrolled` class on `<nav>` based on scroll position

### Legacy logo files

`_source/logos-raw/` contains old logo exports (`logo-full.jpg`, `logo-full2.png`, `logo.png`). These are **not used by the site** — keep for historical reference only.

---

## Typography

Two fonts, both from Google Fonts.

| Font | Where used | Weights loaded |
|---|---|---|
| **Inter** | Body copy, navigation, forms, general text | 400, 500, 600, 700, 800, 900 |
| **Space Grotesk** | Display headlines, kickers, year labels, project tags | 500, 600, 700 |

Loaded via the `<link>` tag in every `.html` `<head>` — same URL on every page:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

CSS variables:
- `--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;`
- `--font-display: 'Space Grotesk', sans-serif;`

### Headline style

Headlines use a mixed-case treatment where the emphasised clause is wrapped in `<em>` — e.g.
> Built on values. *Delivered with Vision.*

The `<em>` portion renders in Vision green (`#4CB848`), not italic in the typographic sense — it's a visual accent.

---

## Iconography

All icons are **inline SVG** embedded directly in the HTML. No icon font. No icon library.

Source: hand-drawn or hand-picked from the Feather Icons / Lucide style — single-stroke, 2px, rounded joins. The standard viewBox is `0 0 24 24` with `stroke="currentColor"` so icons inherit the current text colour.

**To add a new icon:** find an SVG from [Lucide](https://lucide.dev/) or similar, strip attributes down to `viewBox`, `fill`, `stroke`, `stroke-width`, and paste inline.

---

## Component naming convention

All site components use the `v2-` prefix (short for "version 2 design system"). Examples:
- `.v2-section`, `.v2-section-alt`, `.v2-section-dark` — page section backgrounds
- `.v2-subhero` — shorter hero on subpages (not full viewport)
- `.v2-panel` — large featured content block
- `.v2-split` — two-column content + image
- `.v2-features` — grid of feature cards
- `.v2-checklist` — bulleted list with green checkmarks
- `.v2-timeline`, `.v2-jobs`, `.v2-detail-card` — listing layouts
- `.btn-pill`, `.btn-pill-primary`, `.btn-pill-green`, `.btn-pill-ghost` — buttons

**Rule:** any new component you add should use the `v2-` prefix to stay consistent with the system.

---

## Voice & tone

Observed across the site copy:
- **Direct and confident** — short sentences, plain language, no marketing fluff.
- **Grounded in North Queensland** — regional identity is part of the brand.
- **People + capability, not corporate posturing** — "good people", "local", "trusted", "in-house team".
- **Specific over generic** — real client names (AIMS, TRILITY, Glencore), real numbers (15+ years, 200+ projects), real places.

When writing new copy, match this tone: concrete, grounded, understated.
