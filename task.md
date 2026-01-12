# Task: Cleanup, Branding & CMS Refinement

- [x] **Project Setup: Keystatic CMS (Abandoned)**
    - [x] Phase 1: Data & Asset Refactoring
    - [x] Phase 2: Keystatic Setup (with workaround)
    - [x] Phase 3: Integration & Verification
    - [x] **Decision:** Switch to Decap CMS (Netlify CMS) due to persistent build/npm issues.

- [x] **Cleanup & Branding**
    - [x] Remove Lovable metadata/branding from `index.html` <!-- id: 12 -->
    - [x] Copy favicons to `public/` <!-- id: 13 -->
    - [x] Update `index.html` with "Shree Ram Collection" title & SEO meta tags <!-- id: 14 -->
    - [x] Update `manifest.json` for PWA capabilities <!-- id: 15 -->

- [x] **Brand Audit: "Shreeram Collection"**
    - [x] Scan codebase for "Sri Ram" / "Shree Ram" variations <!-- id: 16 -->
    - [x] Update Header/Footer/Hero/Contact/Trust content to "Shreeram Collection" <!-- id: 17 -->
    - [x] Verify visual branding changes <!-- id: 18 -->

- [x] **Logo Update**
    - [x] Replace "SR" text with `android-chrome-192x192.png` in Header <!-- id: 19 -->
    - [x] Replace "SR" text with `android-chrome-192x192.png` in Footer <!-- id: 20 -->
    - [x] Verify logo renders correctly (Header & Footer) <!-- id: 21 -->

- [x] **Refine CMS Structure (Simple Admin)**
    - [x] Create `src/content/site-settings.json` (Contact info, global text) <!-- id: 23 -->
    - [x] Create `src/content/promotions.json` (Global banners/offers) <!-- id: 24 -->
    - [x] Wire Frontend to use new JSON data <!-- id: 26 -->

- [x] **Netlify CMS Migration (Decap CMS)**
    - [x] Remove Keystatic dependencies & files <!-- id: 31 -->
    - [x] Create `public/admin/index.html` (Decap CMS Entry) <!-- id: 32 -->
    - [x] Create `public/admin/config.yml` (Configuration) <!-- id: 33 -->
    - [x] Push to GitHub <!-- id: 35 -->

- [x] **Deep Cleanup**
    - [x] Remove Scan & Build Logs <!-- id: 36 -->
    - [x] Verify `package.json` cleanliness <!-- id: 37 -->
    - [x] Final Sanity Check before deploy <!-- id: 38 -->

- [x] **Final Verification**
    - [x] SEO & Browser Banner Audit (Passed) <!-- id: 39 -->
    - [x] Git Status Check (Clean) <!-- id: 40 -->
