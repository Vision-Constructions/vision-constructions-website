# Vision Constructions QLD — Website

Static multi-page website for Vision Constructions QLD Pty Ltd. Built with plain HTML, CSS, and JavaScript. No build tools, no framework, no dependencies — just open a file and it works.

**Live deployment target:** Vercel (auto-deploys from GitHub)
**Current status:** V2 design system complete across all 7 pages

---

## New to this project? Start here.

1. **Open `index.html` in a browser** — see the homepage.
2. **Read this file end-to-end** — it's short, takes 5 minutes.
3. **For deeper guides, go to the `docs/` folder.**

---

## Folder map

```
Vision Website/
│
├── index.html              Homepage
├── about.html              About / team / timeline
├── capabilities.html       4 service areas (Support, Marine, SMP, Civil)
├── projects.html           Real project case studies
├── careers.html            Job listings + application form
├── contact.html            Contact details, map, enquiry form
├── policies.html           Certifications + company policies
│
├── styles.css              All styling — one file, one source of truth
├── main.js                 All JavaScript — one file, one source of truth
│
├── images/                 Every photo used by the site
├── assets/                 Downloadable files (e.g. Capability Statement PDF)
│
├── docs/                   Documentation — start here for "how do I…?"
│   ├── CONTENT.md          How to change copy, photos, job listings, projects
│   ├── BRAND.md            Brand colours, logo usage, typography
│   ├── DEPLOY.md           Vercel + GitHub deployment, custom domain
│   └── CHANGELOG.md        History of approved changes
│
├── _source/                Raw originals, kept for reference. NOT used by the site.
│   ├── photos-raw/         Original high-res photos (DJI, iPhone, WhatsApp)
│   ├── logos-raw/          Client logos + legacy Vision logo files
│   ├── working-docs/       Internal docs (client brief, design brief, etc.)
│   └── client-files-onedrive/  OneDrive-synced folder of client files
│
└── README.md               This file
```

**Rule:** the root folder contains only files the website serves. Anything in `_source/` can be deleted without breaking the site.

---

## Common tasks — quick reference

| I want to... | Go to |
|---|---|
| Change copy on a page | Open the relevant `.html` file. See [docs/CONTENT.md](docs/CONTENT.md). |
| Replace a photo | Drop a new image in `images/` using the existing filename. See [docs/CONTENT.md](docs/CONTENT.md). |
| Add a new project | See the "Projects" section in [docs/CONTENT.md](docs/CONTENT.md). |
| Add a new job listing | See the "Careers" section in [docs/CONTENT.md](docs/CONTENT.md). |
| Change colours | Edit CSS variables at the top of `styles.css`. See [docs/BRAND.md](docs/BRAND.md). |
| Change the logo | Swap `images/logo.svg` and `images/logo-dark.svg`. See [docs/BRAND.md](docs/BRAND.md). |
| Deploy the site | See [docs/DEPLOY.md](docs/DEPLOY.md). |
| See what's changed | [docs/CHANGELOG.md](docs/CHANGELOG.md). |

---

## Key company details

| Field | Value |
|---|---|
| Business name | Vision Constructions QLD Pty Ltd |
| ABN | 54 136 270 347 |
| Phone | (07) 4755 4839 |
| Email | admin@visionconstructions.com.au |
| Address | 95 Crocodile Crescent, Mount St John QLD 4818 |
| Founded | 2009 |

These appear throughout the site. To change them, Find/Replace across all `.html` files — they are hand-written into each page (no server-side includes in static HTML).

---

## Design system (at a glance)

- **Palette:** warm charcoal light theme (`--h-bg: #C4C3BF`) with dark sections (`--h-dark: #15130F`). Vision green (`#4CB848`) is the accent.
- **Typography:** Inter (body), Space Grotesk (display) — both from Google Fonts.
- **Component prefix:** everything uses the `v2-` class prefix (the second-gen design system). `body.v2` scopes all styles.
- **Navigation:** dual-logo swap — white logo on dark hero, dark logo on light scrolled background.

Full details in [docs/BRAND.md](docs/BRAND.md).

---

## Contact / credits

Website built for Vision Constructions QLD Pty Ltd.
