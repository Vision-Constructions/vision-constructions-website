# Content Guide — What's on each page and how to change it

This is your go-to reference for updating the copy, photos, and listings across the site.

---

## Golden rules

1. **Never edit `_source/`.** It is a reference archive. Changes there do nothing to the live site.
2. **Only files in the root + `images/` + `assets/` affect the site.**
3. **Nav bar is duplicated in every page.** If you change the nav, do a Find/Replace across all `.html` files — look for `<ul class="nav-links">`.
4. **Footer is duplicated in every page.** Same rule as the nav.

---

## Pages — what's on each

### `index.html` — Homepage
Sections in order:
- Hero (full-screen photo, headline, 2 CTAs)
- Capability statement banner (6 feature icons)
- Capabilities strip (4 service cards)
- Featured projects (1 large + 2 small)
- Why Vision (stats + portrait photo)
- Contact band (email/phone CTA)

### `about.html` — About Us
- Hero + breadcrumb
- Company story (split: photo + text)
- Timeline (5 milestones: 2009, 2012, 2016, 2019, 2025)
- Values (4 icon cards)
- Key facts (dark band: ABN, team size, certifications, safety record)
- **Team row (5 people: Travis, Jack, Brendan, Maree, Kylie — all initial circles)**
- CTA band

### `capabilities.html` — Capabilities
- Hero with anchor pill nav
- 4 capability panels in order:
  1. Infrastructure Support (anchor: `#support`)
  2. Marine & Water (anchor: `#marine`)
  3. Structural, Mechanical & Piping (anchor: `#smp`)
  4. Civil Construction (anchor: `#civil`)
- Capability Statement PDF download band (dark)
- CTA band

### `projects.html` — Projects
- Hero
- 5 detailed project cards: Sludge Lagoon Extension, Jetty Maintenance (AIMS), STP Structural Concrete (AIMS), Jetty Guide Piles (AIMS), Chemical Dosing Skids (TRILITY)

### `careers.html` — Careers
- Hero
- Who We Hire (split: 2 columns — intro + roles checklist)
- 4 advertised vacancies (Site Supervisor, Boilermaker, Project Admin, Excavator Operator)
- Application form (anchor: `#apply`)

### `contact.html` — Contact
- Hero
- Contact details + Google Maps iframe (left)
- Contact form (right)

### `policies.html` — Policies & Certifications
- Hero
- 7 certification feature cards (ISO 45001, ISO 14001, ISO 9001, QBCC, Local Buy, WHS QLD, QLD Govt Prequalified)
- 4 policy panels (Safety, Environmental, Quality, WHS Management)

---

## How to replace a photo

**The easy way:** drop a new image into `images/` using the **exact same filename** as the one you want to replace. No code changes needed — the site will pick it up automatically.

**To change which photo a section uses:** find the `<img src="images/...">` tag in the relevant `.html` file and change the filename.

**Recommended dimensions:**
- Hero backgrounds: 1920×1080px or larger
- Panel / project cards: 1200×900px minimum
- Portrait / feature images: 800×1000px

**Naming convention:** use short descriptive names, all lowercase, hyphens between words. Examples: `marine-pontoon-crane.jpg`, `stp-drone-hoppers.jpg`, `welder-fabrication.jpg`.

---

## How to add a new project

1. Open `projects.html`.
2. Find a `<article class="v2-detail-card">` block and copy it.
3. Paste below, then update:
   - `<img src="images/...">` — photo (add the photo to `images/` first)
   - `<span class="v2-detail-tag">` — category (e.g. "Marine Works")
   - `<h3>` — project name
   - `<p class="v2-detail-lede">` — 2-3 sentence overview
   - `<ul class="v2-detail-list">` — client, location, completion, scope
4. Save and refresh the browser to verify.

**If it's a marquee project, also update the homepage:** `index.html` shows featured projects. Update the matching card there.

---

## How to add a new job listing

1. Open `careers.html`.
2. Find a `<div class="v2-job">` block and copy it.
3. Paste in the `.v2-jobs` container, then update:
   - Job tags (`Full Time`, location, `Site Based`/`Office Based`)
   - `<h3>` — role title
   - `<p>` — description (3-4 sentences, what the role involves + what's required)
4. Save and refresh the browser to verify.

To **remove a job**, delete the whole `<div class="v2-job">...</div>` block.

---

## How to change text anywhere on the site

1. Find the page (see "Pages — what's on each" above).
2. Open the `.html` file in any text editor.
3. Copy needs to be inside a tag — look for `<h1>`, `<h2>`, `<h3>`, `<p>`, or `<li>` tags.
4. Don't touch anything that looks like `<span class="..."` or `style="..."` — those are styling hooks.
5. Save the file and refresh the browser.

**Pro tip:** inline italics use `<em>` tags (e.g. `Built on values. <em>Delivered with Vision.</em>`). The italic text renders in Vision green.

---

## How to update company details (phone, email, address)

These appear in the footer of every page and in a few hero/contact sections. Use Find/Replace across all `.html` files:

| Current | Where to change |
|---|---|
| `(07) 4755 4839` | Footer contact column, contact page hero, hard-coded `tel:0747554839` links |
| `admin@visionconstructions.com.au` | Footer contact column, contact page hero, hard-coded `mailto:` links |
| `95 Crocodile Crescent` / `Mount St John QLD 4818` | Footer contact column, contact page details, Google Maps iframe `src` on contact.html |
| `ABN 54 136 270 347` | Footer bottom bar |

---

## Forms — how they work

The application form (careers) and contact form (contact) currently show a "thanks" success state but do **not** send emails anywhere. They're fully styled and working in-browser only.

**To make them send emails:** connect a service. Recommended options:
- **Formspree** — https://formspree.io — easiest, just change the form's `action` attribute.
- **Netlify Forms** — if the site ever moves to Netlify.
- **A custom backend** — e.g. a serverless function on Vercel.

See [DEPLOY.md](DEPLOY.md) for more on hosting options.

---

## JavaScript features (`main.js`)

| Feature | What it does |
|---|---|
| Nav scroll effect | Adds `.scrolled` class to `<nav>` after 40px scroll — triggers background + logo swap |
| Mobile menu | Hamburger toggle shows/hides nav links on small screens |
| Active nav link | Highlights the current page in the nav |
| Scroll reveal | Fades in `.reveal` elements as they enter the viewport |
| Stat counters | Animates numbers in `.stat-number[data-target]` when scrolled into view |
| Form handler | Shows success state on submit (does not send — see Forms section above) |

---

## If you break something

Every file is saved in plain text. Use your editor's undo (`Cmd+Z` / `Ctrl+Z`) or — if the project is in Git — `git diff` and `git checkout`. See [DEPLOY.md](DEPLOY.md) for Git setup.
