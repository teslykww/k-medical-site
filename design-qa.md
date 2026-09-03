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
- Colors and tokens: cool mineral background, deep forest green and one coral accent are consistent across pages. Нет конкурирующих многоцветных градиентов; drawer использует только спокойный однотональный forest‑переход для глубины верхнего слоя.
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

### Pass 6 — product-pass integration

- Accepted the 14.08.2026 product pass as a narrow override for product names, prices, launch conditions and lead routes; the full COPY v2, approved visual target and retained reference cases remain unchanged.
- Kept Diagnosis outside the recurring pricing row, preserved the three clinic/Dental/Doctor levels and kept Enterprise plus the `Готовность к росту` bundle as supporting lines rather than extra tariff cards.
- Replaced the accidental three-item use of the four-item outcome grid with a dedicated asymmetric product composition: one anchor product and two supporting products, with explicit tablet, mobile, coarse-pointer and reduced-motion fallbacks.
- Integrated the Doctor form into the existing dark final conversion surface instead of adding a detached white ending after it.
- Fixed all Doctor pricing CTAs to target `#doctor-form`; clinic and Dental pricing retain the clinical diagnostic route.
- Replaced internal Doctor tier names in public audit copy with the public Russian product names and clarified the Doctor form label and example.

### Pass 7 — detailed product drawer

- Added one reusable right-side product drawer for all 15 public product descriptions while preserving the existing pages, pricing composition and approved visual direction.
- Checked clinic Focus, Dental Growth, Doctor Growth and Doctor Audit in the browser. Each opens the correct title, commercial terms, grouped scope, deliverables and its own CTA.
- Desktop QA: 720 px drawer on the right, readable editorial title, dimmed/blurred page context, sticky price/action surface and no console warnings or errors.
- Mobile QA at 390 × 844: full-width drawer, one-column groups, correctly wrapping commercial terms, no horizontal overflow (`scrollWidth = 390`) and a full-width sticky CTA above the safe area.
- Interaction QA: close button, Escape and backdrop click all close with the intended transition; focus starts on the close control and returns to the initiating `Что входит` button.
- The dialog is portalled to the document top layer so pricing-card styles cannot leak into the detailed content.
- `prefers-reduced-motion`, coarse pointer and narrow-screen fallbacks are explicit. No decorative product image was introduced because the detailed service content benefits more from clear hierarchy and uninterrupted reading.
- Lint, typecheck and production build pass; all 19 static pages remain generated. The private Pilot product is absent from public source content and UI.

### Pass 8 — standalone channel catalog

- Added 13 standalone services inside the existing early `#services` section without moving, redesigning or duplicating the recurring packages and fixed-scope products.
- Desktop 1440 × 1000 QA confirms the asymmetric 7/5/8-column composition, distinct surfaces, readable service rows and the intended visual continuation of the approved `Clinical navigation` direction.
- Mobile 390 × 844 QA confirms a single-column sequence, readable two-level row labels, 13 interactive triggers and no horizontal overflow (`scrollWidth = clientWidth = 390` in the open drawer).
- Opened the Yandex Direct service drawer on desktop and mobile. The correct service-specific title, scope framing and `Обсудить настройку` CTA render; no public price or `Стоимость` label appears.
- Escape closes the drawer and returns focus to the initiating service row. Close button works on mobile. Browser console warnings/errors: none.
- Hero channel typewriter now includes targeted advertising, SMM and YouTube/video while preserving one non-repeating motion surface.
- Lint, typecheck and production build pass; all 19 static pages remain generated.

### Pass 9 — result-first delegation copy

- Preserved the approved asymmetric three-card composition and replaced internal capability labels with the client journey: attract new patients, help them choose, return patients and show what works.
- Removed media, native advertising and bloggers from the first high-level card while leaving them available where a specific task requires them.
- Added a restrained bold lead inside each card so the channel set is scannable without turning the block into a menu of tools.
- Strengthened the closing note around starting with the directions and tasks that can create the greatest current effect for the clinic.

### Pass 10 — client homepage flow

- Preserved the approved `Clinical navigation` hero, palette, typography, team, channel drawer and pricing components while changing only the homepage narrative and section order.
- Added the editorial `Почему медицина особенная` bridge and replaced the long sticky story stack with a compact connected `Привлечение → Доверие → Возврат` sequence.
- Removed the three repeated outcome cards from the homepage without removing their shared styles from Doctor, where the same pattern is still intentional.
- Reduced the high-level service cards to outcomes and short mechanisms; the complete 13-channel catalog remains the single detailed tool layer below.
- Reordered the commercial flow to recurring formats → fixed-scope products → diagnostic → retained reference cases.
- Expanded the diagnostic card with five deliverables, 150 000 ₽, up to 10 working days and the 100 000 ₽ credit condition.
- Desktop and 390 px mobile browser QA confirm the intended hierarchy, vertical mobile connectors and no horizontal overflow. The diagnostic mobile grid was corrected after the first visual pass and rechecked at `scrollWidth = clientWidth = 375` CSS px.
- A duplicate below-fold use of the hero asset was replaced with the existing patient-journey illustration in the local-search reference case; the actual hero now renders with explicit eager/high-priority loading and a clean fresh-page console.
- Lint, typecheck and the Next.js production build pass; all 19 static pages remain generated.
