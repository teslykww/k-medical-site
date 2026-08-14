# Design QA — K‑Medical

Final result: passed

## Comparison target

- Source visual truth: `C:\Users\test_\Documents\ChatGPT\КЕЙМЕДИКАЛ\project-docs\04-design\task-00-assets\01-clinical-navigation-premium-refined.png`
- Source pixels: 1448 × 1086, normalized visually against the desktop and mobile panels embedded in the board.
- Rendered implementation desktop: `C:\Users\test_\Documents\ChatGPT\КЕЙМЕДИКАЛ\project-docs\04-design\task-00-assets\implementation-desktop-1440x1000-v2.png`
- Rendered implementation mobile: `C:\Users\test_\Documents\ChatGPT\КЕЙМЕДИКАЛ\project-docs\04-design\task-00-assets\implementation-mobile-390x844-v2.png`
- Desktop viewport: 1440 × 1000 CSS px, DPR 1.
- Mobile viewport: 390 × 844 CSS px, DPR 1.
- State: public home page, light theme, initial state; mobile navigation open state was also inspected.

## Full-view comparison evidence

The implementation preserves the target composition: mineral-light background, forest typography, compact coral rules, left-weighted editorial hero, route image on the right, restrained controls, sharp section borders and large breathing room. Mobile preserves the same hierarchy, promotes the primary CTA to full width and moves the route below the introductory copy.

The generated patient-route image uses the same art direction and remains crisp through Next Image optimization. No stock medical photography, fake team portrait, custom inline SVG or CSS-drawn substitute was introduced.

## Focused comparison evidence

Focused inspection was applied to the hero typography, primary and secondary CTAs, generated route asset, desktop navigation, mobile menu, form controls and Doctor pricing cards. These areas contain the key brand, interaction and fidelity decisions. Other sections reuse the same confirmed tokens and did not require a separate crop.

## Required fidelity surfaces

- Fonts and typography: Manrope provides the modern clinical sans; Lora is restricted to the wordmark and editorial accents. Headline scale and wrapping were corrected after the first pass to match the source hierarchy more closely.
- Spacing and layout rhythm: asymmetric desktop hero and single-column mobile flow match the target intent. Section rhythm, dividers and restrained card use remain consistent.
- Colors and tokens: cool mineral background, deep forest green and one coral accent are consistent across pages. No gradients are used.
- Image quality: source-matched generated raster assets load through `next/image`; the primary hero asset was verified at natural width 691 px in the rendered 1440 px viewport.
- Copy and content: source copy remains factual; no invented clients, metrics, testimonials or team portraits. Unconfirmed delivery and legal inputs remain internal or are stated truthfully at the interaction point.
- Icons and controls: one Phosphor family is used. Primary controls meet mobile tap sizing and visible focus rules.

## Interaction and browser evidence

- Browser-rendered implementation verified on `/`, `/doctor` and `/diagnostic`.
- Mobile menu opened and exposed all five navigation items and the primary CTA.
- Diagnostic form accepted valid fields and consent, then showed the truthful `endpoint not configured` state instead of reporting a false success.
- Console warnings/errors on the tested production page: none.
- HTTP 200 verified for `/`, `/stomatology`, `/doctor`, `/diagnostic`, `/articles`, one article route, `/robots.txt` and `/sitemap.xml`.

## Comparison history

### Pass 1

- P2: desktop hero headline was too large and wrapped into too many short lines compared with the source.
- P2: hero descriptor used a dense sequence of separators that looked less composed on mobile.

Fixes made:

- Reduced desktop display scale, increased headline measure and relaxed line height.
- Reduced mobile display scale and widened its useful measure.
- Split the descriptor into responsive segments and reduced punctuation density.

### Pass 2

Post-fix desktop and mobile captures show the corrected hierarchy. The route image, headline, CTA pair and mobile flow now preserve the chosen visual target without actionable P0/P1/P2 drift.

### Pass 3 — source-copy restoration

- Restored the full approved copy from `docs/05-website-copy.md` on the home, stomatology, Doctor and diagnostic pages.
- Restored all eight complete article texts from `docs/08-articles.md`.
- Removed generic repeated diagnostic placeholders and unsupported FAQ copy.
- Re-ran responsive browser QA at 1440 × 1000 and 390 × 844. All tested routes remain within the viewport and browser console errors/warnings remain at zero.

## Residual P3 polish

- Real team photography can replace initials after confirmed assets are supplied.
- Production contacts, privacy documents, final domain and analytics can be styled into the established system when supplied.

### Pass 4 — COPY v2 and kinetic design upgrade

- `docs/05-website-copy.md` is now the in-repo COPY v2 source of truth used for all five index pages and all eight articles.
- Desktop and mobile were rechecked at 1440 × 1000 and 390 × 844 after the hero, story-stack, case, report and button-motion upgrade.
- Main navigation now exposes `Клиникам`, `Стоматологиям`, `Врачам`, `Кейсы`, `Статьи`; mobile menu opens, closes with Escape and keeps 44+ px targets.
- All core H1/H2 strings were automatically checked against COPY v2; all matched the source. All eight article routes preserve their slugs and render the complete new article copy with individual CTA blocks.
- Reference cases are visibly marked `Референс рынка / пример структуры`; generated visuals are additionally marked as demonstration/report examples and are not presented as K‑Medical evidence.
- Temporary phone, WhatsApp and Telegram values are non-interactive placeholders. The lead form has four requested business fields and shows a truthful preview-state message when no endpoint is configured.
- No horizontal overflow was found on the tested routes. Browser console warnings/errors: none.
- HTTP 200 verified for all five index routes, all eight article routes, `/robots.txt` and `/sitemap.xml`.
- Preview indexing remains blocked both in metadata and `robots.txt` until `NEXT_PUBLIC_ALLOW_INDEXING=true` is explicitly configured.

### Pass 5 — Doctor audience split and client-facing cleanup

- Added the explicit `Я врач` / `Я представляю клинику` decision immediately after the Doctor hero without changing the approved hero, typography, palette or motion system.
- Kept one shared Doctor page and one pricing line. The audience cards route to the existing pricing and clinic-benefit sections rather than creating duplicate products.
- Added two distinct final conversion paths for a doctor and for a clinic, each with its own analytics label.
- Removed temporary phone, WhatsApp and Telegram placeholders from the public footer. The Cases navigation item and all three visibly labelled reference cases remain by explicit product decision.
- Replaced the form's internal preview explanation with a neutral delivery error while preserving all four approved fields and their order.
- Updated the Open Graph message to the current patient-first positioning. Preview indexing remains env-gated.
- Production build, lint and type checks pass for all 19 generated pages. Desktop browser QA confirmed the audience split, card offset, anchor destination, CTA contrast, footer cleanup and three retained cases; no browser warnings or errors were found.
- Mobile fallbacks are explicit at the established `860px` and `767px` breakpoints: both new grids collapse to one column, the offset is removed, card heights become automatic and the long clinic CTA receives a full-width compact treatment.
