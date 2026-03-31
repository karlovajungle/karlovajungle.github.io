# Karlova Jungle — Cursor Implementation Plan

Below is a **Cursor-ready implementation plan** for building the new **Karlova Jungle** website in **Astro + Tailwind CSS** as a **static site** deployable to **GitHub Pages**.

The plan is split into **reasonable-sized tasks** so GPT Codex or Claude can execute them without much supervision. Each task has:
- goal
- concrete instructions
- deliverables
- constraints
- done criteria

The plan assumes the model has access to:
- the current site content
- the logo assets
- the portfolio images
- the homepage work photos
- the booking URL

---

# Project brief

Build a near-finished v1 of a static website for **Karlova Jungle**.

## Core goals
1. Make booking easy and always accessible
2. Make the site feel more premium and contemporary
3. Keep the current brand identity and jungle/botanical feel
4. Preserve current content and structure with only light polish
5. Keep implementation simple and maintainable
6. Prepare codebase so English and Russian can be added later

## Tech constraints
- Astro
- Tailwind CSS
- Static output
- GitHub Pages deployment
- Images stored in repo
- Minimal JavaScript
- No animations
- Contemporary web conventions
- Clean component structure
- Good mobile/tablet/desktop support

## Visual constraints
- Overall background pale green
- Hero uses moody leaf-only botanical image with dark overlay
- Full round logo centered in hero
- Separate smaller header logo
- Typography:
  - Headings: Cormorant Garamond
  - Body/UI: Inter
- Palette:
  - Background: `#E7F0E4`
  - Surface: `#F4F7F2`
  - Text: `#1F2A22`
  - Muted text: `#516056`
  - Accent green: `#6F8F72`
  - Dark green: `#3F5A45`
  - Border: `#C7D5C6`

## Pages
- `/`
- `/kogemus`
- `/tood`
- `/teenused`
- `/kontakt`

## Navigation
- Avaleht
- Kogemus
- Tööd
- Teenused
- Kontakt
- Broneeri

## Booking URL
`https://karlova-jungle.salon.life/karlova-jungle`

---

# High-level architecture

Use a simple but scalable Astro structure.

## Recommended structure

```text
/
  public/
    favicon/
    images/
      hero/
      logos/
      homepage/
      works/
      og/
  src/
    components/
      layout/
      navigation/
      sections/
      ui/
      gallery/
      seo/
    data/
      site.ts
      navigation.ts
      contact.ts
      seo.ts
    layouts/
      BaseLayout.astro
      PageLayout.astro
    pages/
      index.astro
      kogemus.astro
      tood.astro
      teenused.astro
      kontakt.astro
      404.astro
    styles/
      global.css
  astro.config.mjs
  tailwind.config.mjs
  package.json
  README.md
```

Keep content mostly in page files and a few TS data files. Do not add CMS, MDX, or content collections unless truly needed.

---

# Execution plan for Cursor

## Task 1 — Initialize project scaffold

### Goal
Create a clean Astro project with Tailwind, static output, and GitHub Pages readiness.

### Instructions
1. Create a new Astro project.
2. Add Tailwind CSS.
3. Configure Astro for static output.
4. Configure base path handling so GitHub Pages deployment is straightforward.
5. Add a clean global stylesheet and design token foundation.
6. Add a simple README with project start/build/deploy notes.

### Deliverables
- working Astro app
- Tailwind configured
- static build works locally
- base layout file exists
- global styles wired in

### Constraints
- no unnecessary libraries
- no React/Vue/Svelte unless there is a very strong reason
- do not add animation libraries
- do not add CMS dependencies

### Done criteria
- `npm run dev` works
- `npm run build` works
- generated site is static
- layout and styles are connected

---

## Task 2 — Define design tokens and typography system

### Goal
Create a consistent visual foundation that already looks close to final.

### Instructions
1. Set up font loading for:
   - Cormorant Garamond
   - Inter
2. Create CSS variables or Tailwind theme extensions for:
   - colors
   - spacing
   - radii
   - shadows
   - typography scale
3. Define a typography system for:
   - hero logo area button spacing
   - page titles
   - section headings
   - body text
   - small metadata text
   - navigation
4. Define reusable container widths and vertical rhythm.

### Deliverables
- fonts integrated
- color tokens implemented
- type scale defined
- spacing scale defined
- reusable container classes/utilities decided

### Constraints
- no animations
- no trendy oversized effects unless restrained
- typography should feel premium and readable
- keep body text practical and clean

### Done criteria
- headings visibly use serif
- body/navigation/buttons visibly use sans-serif
- spacing feels deliberate across sections
- design tokens are centralized and reusable

---

## Task 3 — Add sitewide data/config files

### Goal
Centralize the few things likely to be reused or changed later.

### Instructions
Create TS data/config files for:
- salon name
- booking URL
- address
- email
- Instagram link
- Google Maps link
- page metadata defaults
- navigation labels and hrefs

Suggested files:
- `src/data/site.ts`
- `src/data/navigation.ts`
- `src/data/contact.ts`
- `src/data/seo.ts`

### Deliverables
- reusable typed config files
- no hardcoded booking URL scattered across components
- no hardcoded address/email repeated everywhere

### Constraints
- keep it simple
- do not over-abstract
- only centralize what is clearly shared

### Done criteria
- header, footer, contact page, and CTA buttons can read from shared config

---

## Task 4 — Build global layout and SEO foundation

### Goal
Create the core layout shell used by all pages.

### Instructions
Build:
- `BaseLayout.astro`
- optional `PageLayout.astro`

Include:
- document structure
- page title support
- meta description support
- canonical URL support
- Open Graph support
- favicon support
- body classes and theme setup

Add:
- `robots.txt`
- sitemap support
- OG image fallback support

### Deliverables
- reusable layout shell
- per-page metadata API
- SEO defaults wired in

### Constraints
- keep implementation simple and native to Astro
- no complex SEO framework unless needed

### Done criteria
- every page can set title and description
- head output is clean
- sitemap and robots are included in the build

---

## Task 5 — Build header, mobile nav, and footer

### Goal
Implement the sitewide navigation and footer exactly to product requirements.

### Instructions

### Header requirements
- sticky header
- over hero from start
- transparent at top
- more solid/semi-opaque after scroll
- desktop:
  - header logo left
  - nav links right
  - `Broneeri` CTA highlighted
- mobile:
  - compact header
  - menu toggle
  - booking CTA always accessible

### Footer requirements
Compact footer including:
- salon name or footer logo
- address
- email
- Instagram
- Broneeri
- privacy policy link placeholder
- copyright

### Deliverables
- reusable `Header.astro`
- reusable `MobileMenu.astro` if needed
- reusable `Footer.astro`

### Constraints
- no animation-heavy menu
- minimal JS only if needed for mobile menu and sticky state
- accessible navigation
- clear focus states

### Done criteria
- desktop header works
- mobile nav works
- `Broneeri` is easy to find at all times
- footer is compact and practical

---

## Task 6 — Build homepage hero

### Goal
Implement the homepage hero close to final design.

### Instructions
Create hero section with:
- full round logo centered like current site
- one `Broneeri` button below it
- no subtitle
- moody botanical leaf-only background image
- dark transparent overlay above image
- balanced spacing on all breakpoints

Support:
- simple swap between hero assets later
- one or two image sources depending on implementation simplicity

Suggested asset paths:
- `public/images/hero/karlova-jungle-hero-desktop.webp`
- `public/images/hero/karlova-jungle-hero-mobile.webp`
- `public/images/logos/logo-hero.*`
- `public/images/logos/logo-header.*`

### Deliverables
- `Hero.astro`
- responsive hero layout
- logo and button clearly readable

### Constraints
- no hero text except button
- do not turn this into a slideshow
- do not add parallax
- preserve the centered emblem feel

### Done criteria
- hero looks strong on desktop and mobile
- logo remains readable
- button is prominent but not flashy

---

## Task 7 — Build homepage content sections

### Goal
Create the minimal homepage structure after the hero.

### Instructions
Build homepage with this exact section order:
1. Hero
2. Salon description
3. Photos of stylist at work
4. Contact / location / socials

### Section 2: salon description
Use a short heading and short paragraph, aligned to the chosen tone.

Working copy direction:
- heading similar to `Privaatne ilustuudio Karlovas`
- short supporting paragraph
- minimal and calm

### Section 3: stylist-at-work photos
- reuse current homepage photo set
- present as a few larger editorial images
- no captions
- no gallery interactions needed here

### Section 4: contact/location/socials
Include:
- address
- email
- Instagram
- booking CTA
- practical presentation
- Google Maps link button

### Deliverables
- homepage fully built
- sections clearly separated
- restrained premium spacing

### Constraints
- no previews for `Tööd` or `Teenused` on homepage
- minimal text
- no visual clutter

### Done criteria
- homepage feels complete without being long
- contact info is easy to find
- flow matches agreed structure exactly

---

## Task 8 — Build `Kogemus` page

### Goal
Port the current experience page into a cleaner, premium-looking version without changing its basic structure.

### Instructions
- Keep content close to current site
- Present it as a simple chronological list
- Do not redesign into a timeline
- Improve typography, spacing, and readability
- Add a clean page title and restrained intro only if needed

### Deliverables
- `src/pages/kogemus.astro`

### Constraints
- do not heavily rewrite content
- do not make it stylist-centric beyond what already exists
- do not over-design

### Done criteria
- content is easy to scan
- page feels cleaner than current site
- structure remains familiar

---

## Task 9 — Build `Teenused` page

### Goal
Port the existing services and prices exactly as they are, but with improved presentation.

### Instructions
- Use current services list and price wording exactly as on current site
- Keep categories/content structure aligned with current site
- Present simply and clearly
- Use typography and spacing to elevate the page
- Page title can be `Teenused ja hinnad`
- Navigation label remains `Teenused`

### Deliverables
- `src/pages/teenused.astro`

### Constraints
- do not invent new services
- do not rewrite pricing
- do not convert it into decorative cards
- no fancy filtering or accordions unless absolutely necessary

### Done criteria
- prices are easy to scan
- long entries do not break layout
- page feels polished and calm

---

## Task 10 — Build `Tööd` page and lightbox gallery

### Goal
Create the portfolio/results gallery page.

### Instructions
- Use only result images
- Do not mix in atmospheric homepage images
- Show images in a responsive grid
- Desktop target: 2–3 images per row
- Keep natural image proportions
- Clicking an image opens a larger view
- Support simple previous/next navigation if it can be done cleanly
- Keep the lightbox minimal and fast

Suggested implementation:
- native/simple custom modal
- minimal JS
- avoid heavy gallery libraries unless necessary

### Deliverables
- `src/pages/tood.astro`
- `GalleryGrid.astro`
- `Lightbox` component or equivalent

### Constraints
- no masonry library unless necessary
- no overcomplicated transitions
- no client-heavy solution
- keep markup and interactions accessible

### Done criteria
- gallery looks clean
- natural image proportions are preserved
- opening/closing works reliably
- previous/next works if implemented
- mobile layout is usable

---

## Task 11 — Build `Kontakt` page

### Goal
Create a practical contact page with no fluff.

### Instructions
Include only:
- address
- clickable email
- Instagram
- booking CTA
- `Ava kaardil`

Behavior:
- mobile: only link-out to map
- desktop/tablet: optional embedded map block is allowed
- if adding embed complicates implementation, prefer simple link-out

Map link should open Google Maps.

Email should be clickable with `mailto:`.

### Deliverables
- `src/pages/kontakt.astro`

### Constraints
- no phone number
- no welcoming intro text
- do not add unnecessary form
- no paid map APIs
- no API keys

### Done criteria
- page is practical and fast
- all links work
- mobile experience is especially clean

---

## Task 12 — Add assets and image handling

### Goal
Place and wire all local assets in a clean way.

### Instructions
Organize:
- hero images
- hero logo
- header logo
- homepage images
- works/portfolio images
- favicon/OG image assets

Use optimized formats where practical:
- `webp` preferred for photos
- `svg` preferred for logos if available
- fallback raster if necessary

### Deliverables
- clean `public/images/...` structure
- all pages reference local assets cleanly

### Constraints
- keep filenames predictable
- do not rely on external hosting
- do not overcomplicate image pipeline if Astro defaults are sufficient

### Done criteria
- all important assets are local
- paths are tidy
- swapping assets later is easy

---

## Task 13 — Add accessibility and interaction polish

### Goal
Ensure the v1 is usable and not just visually correct.

### Instructions
Review:
- heading hierarchy
- alt text for meaningful images
- decorative images marked appropriately
- focus styles
- nav accessibility
- mobile menu keyboard/focus behavior
- lightbox close behavior
- contrast in header/hero
- button/link states
- semantic landmarks

### Deliverables
- accessibility pass
- fixes for obvious issues

### Constraints
- do not add complexity just to chase perfect scores
- fix the meaningful issues that affect actual use

### Done criteria
- site is keyboard-usable in major interactions
- contrast is acceptable
- markup is semantically sane

---

## Task 14 — Add SEO, metadata, favicon, OG, sitemap, robots

### Goal
Complete basic technical polish for launch.

### Instructions
Implement:
- per-page title
- per-page description
- canonical URLs
- Open Graph title/description/image
- favicon
- sitemap
- robots.txt

Create sensible defaults using salon/location context.

### Deliverables
- metadata on all pages
- favicon wired
- OG image support
- robots and sitemap included

### Constraints
- keep metadata simple and relevant
- do not keyword stuff

### Done criteria
- all pages have appropriate metadata
- build includes robots/sitemap
- social preview has a fallback image

---

## Task 15 — GitHub Pages deployment setup

### Goal
Make the project deployable without manual refactoring.

### Instructions
1. Configure Astro for GitHub Pages.
2. Ensure `base` handling is correct.
3. Add deployment notes to README.
4. If useful, add GitHub Actions workflow for static deployment.

### Deliverables
- deploy-ready config
- optional GitHub Actions workflow
- README deployment instructions

### Constraints
- keep setup conventional
- do not assume custom domain yet
- static hosting only

### Done criteria
- project can be built and deployed to GitHub Pages cleanly
- asset paths work under base path

---

## Task 16 — Final QA pass and cleanup

### Goal
Make the first implementation feel near-finished.

### Instructions
Perform final pass for:
- spacing consistency
- typography consistency
- responsive polish
- sticky header behavior
- button hierarchy
- image cropping issues
- long text wrapping
- footer balance
- dead links
- code cleanup
- remove placeholder/demo text/assets if any remain

### Deliverables
- final polished v1
- concise notes on anything intentionally left flexible

### Constraints
- do not start redesigning features
- focus on polish and correctness

### Done criteria
- site looks intentionally designed
- no obviously unfinished sections
- no placeholder junk remains

---

# Acceptance criteria

The model should treat the project as done only when all of the following are true.

## General
- site builds successfully
- site is static
- codebase is clean and contemporary
- structure is easy to extend later

## Visual
- premium, calm, pale-green look
- moody botanical hero
- serif headings + sans-serif UI
- no animation-heavy behavior
- not crowded or amateur-looking

## Homepage
- hero with centered full round logo
- one `Broneeri` button
- no subtitle
- salon description section
- homepage work photos section
- contact/location/social section

## Navigation
- sticky top header
- desktop standard layout
- mobile navigation usable
- booking CTA always accessible

## Pages
- `Kogemus` close to current content
- `Teenused` preserves current wording/prices
- `Tööd` uses result-only gallery with lightbox
- `Kontakt` practical only

## Contact/map
- mobile uses map link-out
- desktop/tablet may embed map, but simple link-only is acceptable if cleaner

## Tech
- Astro + Tailwind
- GitHub Pages ready
- local images
- SEO basics done

---

# Suggested implementation order inside Cursor

Use this exact order:

1. scaffold Astro + Tailwind + static config
2. design tokens + fonts
3. shared config/data
4. base layout + SEO shell
5. header/footer/mobile nav
6. homepage hero
7. homepage remaining sections
8. `Kogemus`
9. `Teenused`
10. `Tööd` gallery + lightbox
11. `Kontakt`
12. asset cleanup and local image wiring
13. accessibility pass
14. SEO/sitemap/robots/favicon
15. GitHub Pages config
16. final QA polish

This order minimizes rework.

---

# Prompt template to give Cursor

Use this as the top-level instruction.

```text
Build a near-finished v1 of a static Astro + Tailwind website for Karlova Jungle, based on the following requirements.

Goals:
- Make booking easy and always accessible
- Make the site feel premium, contemporary, feminine, confident
- Preserve the existing Karlova Jungle identity and botanical/jungle feel
- Keep implementation simple and maintainable
- Prepare structure so English and Russian can be added later
- Deploy as a static site to GitHub Pages

Tech:
- Astro
- Tailwind CSS
- Static output
- Minimal JS only where needed
- Images stored locally in repo
- Contemporary web development conventions
- Clean component structure

Pages:
- /
- /kogemus
- /tood
- /teenused
- /kontakt

Navigation:
- Avaleht
- Kogemus
- Tööd
- Teenused
- Kontakt
- Broneeri

Booking URL:
https://karlova-jungle.salon.life/karlova-jungle

Visual system:
- Main background: #E7F0E4
- Surface: #F4F7F2
- Text: #1F2A22
- Muted text: #516056
- Accent green: #6F8F72
- Dark green: #3F5A45
- Border: #C7D5C6
- Headings font: Cormorant Garamond
- Body/UI font: Inter
- No animations

Header:
- Sticky
- Transparent over hero initially
- More solid/semi-opaque on scroll
- Desktop: logo left, nav right, Broneeri highlighted
- Mobile: compact nav, booking easy to access

Hero:
- Full round logo centered
- One Broneeri button below it
- No subtitle
- Moody leaf-only botanical background image
- Dark transparent overlay

Homepage sections after hero:
1. short salon description
2. current stylist-at-work photos shown as a few larger editorial images
3. practical contact/location/social section

Kogemus:
- simple chronological list
- close to current content
- no timeline

Teenused:
- preserve current services/prices/wording exactly as-is
- present simply and clearly
- page heading can be "Teenused ja hinnad"

Tööd:
- result images only
- natural image proportions
- 2–3 images per row on desktop
- click opens larger
- previous/next in lightbox if simple

Kontakt:
- practical only
- address
- clickable email
- Instagram
- booking link
- Ava kaardil
- mobile: link-out only
- desktop/tablet: optional simple map embed
- no phone
- no contact form

Footer:
- compact
- salon name/logo
- address
- email
- Instagram
- Broneeri
- privacy policy placeholder
- copyright

SEO:
- titles
- descriptions
- canonical URLs
- Open Graph
- favicon
- robots.txt
- sitemap.xml

Important:
- Build this as a near-finished v1, not a rough scaffold
- Keep code clean and reasonably simple
- Do not over-engineer
- Do not add unnecessary dependencies
- Do not invent extra features
- Keep content structure easy to localize later
```

---

# Recommended working mode for Cursor

Tell the model to execute **one task at a time**, commit mentally between tasks, and not redesign already-fixed decisions.

Use this control instruction:

```text
Follow the plan task-by-task. Do not skip ahead. For each task:
1. implement only that task and any tiny prerequisite needed
2. keep code clean and minimal
3. preserve previously fixed decisions
4. do not introduce extra frameworks or features
5. when done, briefly summarize what was created and move to the next task
```

---

# Final note for the model

If content/assets are missing, the model should:
- build around clearly named placeholders
- keep all replacement points obvious
- not block progress waiting for perfect content

That way the website can reach a near-finished state even before final assets are swapped in.
