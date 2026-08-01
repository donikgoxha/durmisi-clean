# Durmisi&Clean — Bilingual Static Website

**Date:** 2026-08-01
**Status:** Approved, in implementation

## Goal

A static marketing website for Durmisi&Clean, a Swiss cleaning company. Benchmarked against
sauber-co.com but deliberately stronger on responsiveness, visual polish, and trust signalling.
Bilingual German/English with a runtime toggle. No build step, no framework, no backend.

## Constraints

- HTML, CSS, and vanilla JavaScript only. No dependencies, no bundler.
- Must open and run correctly from `file://` as well as from a static server.
- All assets local — the site works offline.
- Real contact details are unknown at build time; they go in as single-source placeholders.

## Architecture

```
index.html          Home
leistungen.html     Six services in detail, anchor-linked from home
ueber-uns.html      Story, values, quality promise, team
kontakt.html        Contact form, hours, direct channels, service area
impressum.html      Impressum + Datenschutzerklärung (expected in CH)
css/style.css       Design tokens → reset → layout → components → utilities
js/i18n.js          DE/EN dictionary + translation engine
js/main.js          Nav drawer, scroll reveal, counters, accordion, form, testimonials
assets/img/         Photography (locally stored)
```

### Internationalisation

German is the literal text in the HTML, so the site is correct and indexable with JavaScript
disabled. Translatable nodes carry `data-i18n="section.key"`; attributes carry
`data-i18n-attr="placeholder:key; aria-label:key"`.

`js/i18n.js` holds `I18N = { de: {...}, en: {...} }` and swaps text on toggle. The selected
language is stored in `localStorage` under `dc-lang` and applied to `document.documentElement.lang`.

An inline `<head>` script reads the stored language before first paint. When the stored language is
English it sets `html.i18n-boot`, which hides the body until `i18n.js` has swapped the text —
preventing a flash of German for English visitors. A 1200 ms failsafe timer removes the class even
if `i18n.js` fails to load, so the page can never stay blank.

### Responsiveness

Mobile-first. Fluid type via `clamp()`, fluid space via a `clamp()` spacing scale. Grids use
`repeat(auto-fit, minmax(...))` so layouts reflow continuously rather than snapping at breakpoints.
Off-canvas nav drawer below 900 px with focus trap, Esc-to-close, and scroll lock.
`prefers-reduced-motion` disables all reveal and counter animation. `prefers-color-scheme: dark`
supported.

### Services (Swiss market standard)

1. Unterhaltsreinigung — recurring maintenance cleaning
2. Umzugsreinigung **mit Abnahmegarantie** — move-out cleaning with handover guarantee
3. Fensterreinigung — windows, frames, blinds
4. Baureinigung — construction rough/fine/final cleaning
5. Büroreinigung — offices and commercial premises
6. Grundreinigung — deep cleaning

The Abnahmegarantie is the strongest trust lever in the Swiss market and gets its own full-width
band on the home page. sauber-co does not offer this.

### Contact form

No backend. `js/main.js` validates required fields inline (bilingual error messages), then composes
a `mailto:` URL with a structured subject and body and opens the visitor's mail client. Direct
phone, email, and WhatsApp links are shown alongside so the form is never the only path.

## Design language

Ink navy, near-monochrome. There is deliberately **no second accent colour** —
emphasis comes from one navy at different strengths against warm off-white, so
nothing on the page competes for attention.

| Token | Value | Use |
|---|---|---|
| `--navy-950` | `#0C1526` | Headings, dark bands, footer |
| `--navy-900` | `#16233F` | Primary buttons |
| `--navy-700` | `#294070` | Links, icons |
| `--navy-600` | `#35528C` | Eyebrows, small emphasis |
| `--navy-300` | `#9DB0D3` | Text and marks on dark |
| `--paper` | `#F7F6F3` | Alternating section background |
| `--ink` | `#1A1D24` | Body text |
| `--ink-3` | `#666D7C` | Muted text (AA on white and paper) |

The primary CTA uses one class, `.btn--accent`: solid navy on light surfaces,
automatically inverted to white inside `.hero`, `.pagehero`, `.ctaband`,
`.guarantee` and `.section--dark`, so the markup never has to change.

Typography is a system font stack. Icons are hand-authored inline SVG (no icon font, no network).
Motion is limited to opacity/transform reveals and a counter tick.

## Home page order

Header → Hero → KPI counters → Services grid (6) → Why us → Process (4 steps) →
Abnahmegarantie band → Testimonials → Service area → FAQ accordion → CTA band → Footer

## Placeholders

Real details are unknown. Each appears as a bracketed token defined in one place per language:
`[TELEFON]`, `[EMAIL]`, `[STRASSE NR]`, `[PLZ ORT]`, `[UID]`, `[HANDELSREGISTER]`, `[WHATSAPP]`.
Replacing them is a find-and-replace across `js/i18n.js` and the HTML `href`s.

## Out of scope

Analytics, cookie banner, CMS, booking system, online quotation calculator, blog.
