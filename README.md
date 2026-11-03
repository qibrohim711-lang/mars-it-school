# MARS IT School local recreation

Created from the publicly rendered reference at https://marsit.uz/ on 3 November 2026. React, Vite, JavaScript, Tailwind CSS, original compiled CSS, React Router, and Leaflet.

## Run

```powershell
npm install
npm run dev
```

Open http://localhost:5173/. Production: `npm run build`, then `npm run preview`.

## Implemented pages

33 local routes. All seven observed homepage sections and the footer are preserved. Uzbek, Russian and English homepages are included.

- `/`
- `/about`
- `/about/history`
- `/about/team`
- `/apply`
- `/blog`
- `/buyuk-ipak`
- `/careers`
- `/chilonzor`
- `/contacts`
- `/course-finder`
- `/courses`
- `/courses/ai-kids`
- `/courses/it-development`
- `/courses/methodology`
- `/en`
- `/minor`
- `/news`
- `/news/ai-for-kids-12-14`
- `/news/ai-work-future`
- `/news/first-global-challenge-2026-uzbekistan`
- `/news/parental-control-phone`
- `/news/rebenok-v-telefone-chto-delat`
- `/news/roblox-harmful-or-helpful`
- `/news/roblox-studio-first-game`
- `/news/scratch-python-roblox`
- `/news/vibe-coding-explained`
- `/payment`
- `/ru`
- `/sergeli`
- `/space`
- `/tinchlik`
- `/yunusobod`

## Interactions

Desktop dropdown navigation; expandable mobile navigation; homepage language selection; course links and CTAs; benefits selection; all eight original SPACE screens; FAQ disclosure controls; six distinct parent videos; branch photo lightbox with previous/next, arrow keys and Escape; maps with the reference public tiles, pan, zoom and six location markers; map/list switch; input validation; 20 quiz steps with back navigation.

Forms never claim success while disconnected. No reference form or chat API is used.

## Backend integration

Copy `.env.example` to `.env.local` and configure project-owned endpoints. Restart Vite after changes.

- `VITE_LEAD_ENDPOINT`: POST JSON form data, including `first_name`, `last_name`, `phone`, and the empty `website` honeypot. Return a successful JSON response only after saving the lead.
- `VITE_QUIZ_ENDPOINT`: POST `{answers: {questionIndex: {option, text}}}`. Return `{title, description}`. The original performs scoring on its backend; no invented scoring is shipped.
- AI assistant: the original robot launcher is reproduced; opening it explains that the assistant service is not connected. An authenticated project-owned chat backend and its full UI remain to be integrated.

## Visual verification

See [comparison report](verification/index.html), [numeric results](verification/comparison.json), [route checks](verification/route-checks.json), and [final full page](verification/final-full-page.jpg).

Reference and local viewport captures cover 1920×1080, 1440×900, 1366×768, 1024×768, 768×1024, 430×932, 390×844, and 375×812. Screenshot dimensions were checked against the actual browser viewport.

Three correction passes addressed initial font/style loading, header/section completeness and assets, then responsive controls and final route checks. Heading bounding-box width and height match at all eight sizes. Pixel comparison uses a mean RGB channel difference threshold of 20: 4.54–16.52% of viewport pixels exceed that threshold. These are sampled image differences, not an accuracy percentage. Entrance/floating animation phase and capture timing are visible in overlays. No 100% match is claimed.

All 33 routes were opened in the browser. No JavaScript console errors or unintended horizontal overflow were observed in those checks. All eight homepage viewports had no broken completed images; the final full-page review loaded all 59 main-content image elements, including carousel copies. Production build passes.

Use `npm run compare` to regenerate image differences from the saved screenshot pairs. The optional `?visual-check=1` query loads offscreen images eagerly for full-page capture; normal pages retain lazy loading.

## Known limits and reference faults

- The original returns 404 for `/tech-icons/animaker.svg` and `/tech-icons/midjourney.svg`. Those source faults are documented rather than replaced with unrelated icons. Failed images are hidden.
- The following public news routes displayed the original “Yangilik topilmadi” state during inspection: `/news/ai-for-kids-12-14`, `/news/ai-work-future`, `/news/rebenok-v-telefone-chto-delat`, `/news/roblox-harmful-or-helpful`, `/news/roblox-studio-first-game`, `/news/scratch-python-roblox`, `/news/vibe-coding-explained`. Their observed state is retained.
- Translated subpages beyond the Russian/English homepages are linked to the original website when no local capture exists. Locale menus on captured subpages are not fully translated.
- Map tiles and YouTube playback require network access. Marker selection uses an accessible popup rather than the original selected-branch panel.
- One-time scroll reveals use the reference threshold and −4% bottom margin. Original hover, carousel, hero and floating-image CSS is retained. Dynamic stagger timing can still differ. Reduced-motion preferences are respected.
- Assistant conversation and server-generated quiz results remain unavailable until a project backend is connected. Gallery/video dialog geometry and focus behavior are approximations; they do not claim a pixel match.

## Source structure

`src/pages/` contains one sanitized rendered-content snapshot per route. Original scope attributes and utility classes are retained for visual fidelity. Route snapshots load separately so visiting one page does not download every route. `src/App.jsx` binds local React interactions; `src/components/` contains reusable overlay components; `src/hooks/` owns map lifecycle; `src/leadService.js` owns the project API interface. Original images/fonts/styles live in `public/`; public source URLs are recorded in `asset-manifest.json`. Analytics scripts, source runtime scripts, credentials and tracking identifiers are not part of the application.
