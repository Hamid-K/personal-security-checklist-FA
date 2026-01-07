# Project State: personal-security-checklist-FA

This file captures the **current technical state**, reasoning, and the exact fixes made so you can resume later without re-discovery. It is written for an engineering agent.

## Environment
- Repo: `/Users/hamid/Documents/Repository/personal-security-checklist-FA`
- Web app: `web/` (Qwik + Vite + DaisyUI)
- Default Node: use `nvm` Node 20 (`source /opt/homebrew/opt/nvm/nvm.sh && nvm use 20`)
- Dev: `cd web && yarn dev`
- Static build for GH Pages: `cd web && yarn build.static` (runs `build.client` then static SSR)
- Static output: `web/dist/`

## Hosting & Domain
- Custom domain: `amni.at`
- GH Pages workflow: `.github/workflows/gh-pages.yml` now supports custom domain via env.
  - `CUSTOM_DOMAIN=amni.at`
  - `PUBLIC_BASE_PATH=/`
  - `PUBLIC_ORIGIN=https://amni.at`
  - `PAGES_DIR=web/dist`
- `web/public/CNAME` contains `amni.at`.
- GoDaddy DNS should have:
  - A records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - CNAME `www` → `hamid-k.github.io`
- SSL: GH Pages cert takes time after DNS verification. Enable **Enforce HTTPS** in repo settings once verified.

## Localization & Translation
- **Default locale is Farsi**:
  - `web/src/i18n/translations.ts`: `defaultLocale = 'fa'`
  - `web/src/root.tsx`: `<body lang={defaultLocale}>`
- Checklist data per locale:
  - `web/src/data/checklists/en.yml` and `web/src/data/checklists/fa.yml`
  - `web/src/data/checklists.ts` loads raw YAML via `?raw`, parses, provides `getChecklist(locale)`
- Locale switching updates checklist data:
  - `web/src/routes/layout.tsx`: `ChecklistContext` uses signal updated by `useVisibleTask$` tracking `localeStore.locale.value` and resetting `checklists.value`.
- `use-translations.ts` uses `noSerialize` to avoid Qwik serialization errors.

## Checklist / UI / Progress
- Progress and checklist display updates on locale switch (no stale signal in table).
- LocalStorage hook loads immediately in client:
  - `web/src/hooks/useLocalStorage.ts` uses `useVisibleTask$` (replaces `useOnWindow('load')`) so progress is available on first render.

## Sidebar / Drawer / Menu Fixes
- The drawer menu was not clickable in subpages. Fixed by **proper drawer layout + open state**:
  - `web/src/routes/layout.tsx` now wraps app in `<div class="drawer lg:drawer-open">` with `.drawer-content` and `SideDrawer`.
  - `web/src/components/furniture/side-drawer.tsx` contains the full sidebar menu (moved out of `nav.tsx`).
  - `web/src/components/furniture/nav.tsx` only renders top bar.
  - Drawer overlay has `md:hidden` and z-index lower than menu (`z-10` vs menu `z-20`).

## Base Path / Internal Links
- Internal links respect Vite base:
  - Added `web/src/utils/paths.ts` with `withBase()`
  - Updated links across nav, checklist list, article list, progress, 404, router-head, root.
- Trailing slashes for static pages (e.g. `/checklist/email/`).

## Article SSG Fix
- SSG failed because fetch of markdown with relative URL. Fixed:
  - `web/src/routes/article/[slug]/index.tsx`: in SSR, read file from `web/public/articles/...` using `fs/promises` and `path.resolve`.

## GH Pages / Build Fixes
- `web/package.json`:
  - `build.static`: `yarn build.client && vite build -c adapters/static/vite.config.mts`
  - `build`: `yarn build.static`
- `web/adapters/static/vite.config.mts` uses `maxWorkers: 1` for SSG stability.
- Vite upgraded to v5 and `vite-plugin-static-copy` v2 to avoid Vite 4 issues.
- `web/src/components/router-head/router-head.tsx` updated to avoid duplicate key issue (use `{...s.props}` instead of dangerouslySetInnerHTML).

## Progress / Section Cards
- Not-started label moved to **bottom-left**:
  - `web/src/components/psc/section-link-grid.tsx`: `class="absolute left-4 bottom-3 ..."`.

## README / Credits
- Main README is `.github/README.md`.
- Farsi intro section added at top with links:
  - Farsi: `CHECKLIST.fa.md`
  - English: `CHECKLIST.md`
  - Domain highlighted: `https://amni.at/`
- Link in about page for author:
- `web/src/routes/about/index.tsx` now links “Alicia Sykes” to `https://github.com/Lissy93/personal-security-checklist` (original repo).

## Awesome Privacy Integration
- `web/src/components/article/awesome-privacy.tsx` now renders a fused search experience: hero call-to-action, live search results (powered by `Fuse`), inline category/section grids, and a sticky service detail panel—plus full Persian/English UI strings. The layout mimics the original `awesome-privacy.xyz` while being fully localized via `translations.ts`.
- `web/src/data/awesome-privacy.ts` enriches every service with `slug`, `category`, and `section` metadata so cards, search results, and detail panes can keep in sync, and `getAwesomePrivacyServiceIndex()` feeds the search/focus logic.
- `web/src/components/article/awesome-privacy.css` provides the new page grid, search results, detail column, and responsive behavior for the service catalogue.
- The data file (`web/src/data/awesome-privacy.yml`) is still the English dataset from the upstream repo and kept up to date via `.github/workflows/sync-awesome-privacy.yml` (weekly cron + manual dispatch → curl → build → commit). If you want each service description translated, you’ll need to add a localized dataset or augment the YAML manually.

## Checklist Markdown Generation
- Workflow `.github/workflows/insert-checklist.yml` generates BOTH:
  - `CHECKLIST.md` from `personal-security-checklist.en.yml`
  - `CHECKLIST.fa.md` from `personal-security-checklist.fa.yml`
- `lib/generate.py` supports `--input`, `--output`, `--locale` with locale-specific priority labels and headings.

## Domain Links in Docs
- Updated references from `hamid-k.github.io/...` to `https://amni.at/` in:
  - `CHECKLIST.md`, `CHECKLIST.fa.md`
  - `web/README.txt`
- Social share URLs updated to `https://amni.at`.

## Outstanding / Known
- Lint warnings exist around `useVisibleTask$` (not fatal).
- If GH Pages “DNS check successful” but SSL wrong, wait for cert issuance and enable HTTPS. Clearing local DNS cache helps for local resolution issues.

## Common Commands
- Dev server: `cd web && yarn dev`
- Static build (local): `cd web && yarn build.static`
- Serve static: `python -m http.server 4173 --directory web/dist`

## Latest updates
- Completely rewrote `web/src/components/article/awesome-privacy.*` to mirror the original layout: hero, Fuse-powered search, category/section grid, and service detail pane; added localized copy in `web/src/i18n/translations.ts` for the new UI strings.
- Refined the Awesome Privacy layout so the browse panel stretches to the viewport height, scrolls top-to-bottom as needed, and each category card uses a subtly different tint to make distinguishing boxes easier.
- Swapped the README for a Farsi-first overview, highlighted https://amni.at as the custom domain, and clarified the bilingual checklists plus awesome-privacy integration and automation.
- Fixed article rendering to re-fetch markdown when `locale` changes so `/article/*` respects the language toggle.
- Added a Persian redirect notice to `web/public/articles/fa/5_Privacy_Respecting_Software.md` so the translated article now points readers to our bilingual Awesome Privacy page on amni.at.

## Tests / verification
- `cd web && timeout 10 yarn dev -- --host 127.0.0.1 --port 5173` → fails because binding to port 5173 is blocked in this sandbox (EPERM). Browser on local machine will need to re-run without `timeout` once network permissions allow.
- `cd web && PUBLIC_BASE_PATH=/personal-security-checklist-FA/ PUBLIC_ORIGIN=https://hamid-k.github.io/personal-security-checklist-FA yarn build.static` → succeeds (SSG generated 21 pages).
- `cd web && yarn build.static` → succeeds with the new responsive enhancements applied.

## Latest work (after this turn)
- Default language handling + progress/sync hooks now react to locale/local storage updates so ESL translations and progress charts auto-refresh.
- Awesome Privacy page now mirrors the original experience: two-column layout, searchable results, internal anchors, localized category labels, and DaisyUI-aware colors that follow the current theme.
- README was rewritten to introduce the Farsi-first story, highlight `amni.at`, and surface the Awesome Privacy integration/workflows.
- Created branch `mobile-responsive` with hero/progress/drawer tweaks and responsive global CSS so the main UI scales well on phones.
- Added a dedicated mobile checklist list with big “cards” per section plus simplified progress layout, and ensured the drawer stays usable on tiny screens.
- Tests: `cd web && yarn build.static` (warning about large chunks, but success).

Leave this file untouched in Git; it exists only to capture state for the next agent.
