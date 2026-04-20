# Deployment Guide — Git, GitHub, Vercel, and the custom domain

How to get this site online and how it auto-deploys.

---

## The workflow in one sentence

You make a change → commit to Git → push to GitHub → Vercel automatically redeploys → the live site updates within about 30 seconds.

---

## One-time setup — First push to GitHub

### 1. Initialise the repo locally

From inside the `Vision Website/` folder, in Terminal:

```bash
cd "path/to/Vision Website"
git init
git add .
git commit -m "Initial commit — Vision Constructions website v2 design"
```

### 2. Create the repo on GitHub

- Go to https://github.com/new
- **Repository name:** `vision-constructions-website` (or whatever you prefer)
- **Private** is probably the right choice for a client site
- **Do NOT** tick "Initialize with a README" — we already have one
- Click **Create repository**

### 3. Connect the local repo to GitHub

GitHub will show you the commands on the empty-repo page. They look like this:

```bash
git remote add origin https://github.com/<your-username>/vision-constructions-website.git
git branch -M main
git push -u origin main
```

Done — the code is now on GitHub.

### 4. Connect Vercel to the GitHub repo

- Go to https://vercel.com and sign in
- **Add New → Project**
- Import the repo from GitHub (you may need to authorise Vercel to see the repo first)
- **Framework preset:** Other (or "No Framework") — this is a plain static site
- **Root Directory:** leave blank (HTML files are at the root)
- **Build command:** leave blank
- **Output directory:** leave blank
- Click **Deploy**

Vercel will assign a URL like `vision-constructions-website.vercel.app`. That's your live site.

---

## Ongoing updates — how to push a change

After the one-time setup, every change follows this loop:

```bash
cd "path/to/Vision Website"
git add .
git commit -m "Short description of what changed"
git push
```

Vercel detects the push and redeploys automatically. Check https://vercel.com to see the deployment status.

**If you're not comfortable with the command line:** use [GitHub Desktop](https://desktop.github.com/) — a free GUI that handles commit and push with button clicks.

---

## Custom domain setup

Once the site is deployed on Vercel:

1. In Vercel → your project → **Settings → Domains**
2. Click **Add Domain** and enter `visionconstructions.com.au` (and `www.visionconstructions.com.au`)
3. Vercel will show you the DNS records to add at the domain registrar (where the domain was purchased — e.g. GoDaddy, Crazy Domains, Netregistry).
4. Log in to the registrar, go to DNS settings, and add:
   - An `A` record pointing to Vercel's IP (shown by Vercel)
   - A `CNAME` record for `www` pointing to the Vercel domain
5. Wait for DNS to propagate (usually 5-30 minutes, can be up to 24 hours).
6. Once propagated, Vercel issues an SSL certificate automatically — the site is live at `https://visionconstructions.com.au`.

---

## What to commit vs what to skip

### `.gitignore` — files Git ignores

The repo has a `.gitignore` file that tells Git not to track certain files:

| Pattern | Why |
|---|---|
| `.DS_Store` | macOS metadata file — not useful, clutters repo |
| `Thumbs.db` | Windows thumbnail cache — same reason |
| `.vscode/`, `.idea/` | Editor settings — personal preference |
| `node_modules/` | Not used in this project, but guards against future install |

### Files that **are** committed

Everything in:
- `index.html`, `about.html`, all root `.html` files
- `styles.css`, `main.js`
- `images/`, `assets/`, `docs/`
- `README.md`

### Files in `_source/`

`_source/` is kept in Git by default — it's useful for the next person who works on the site. If the folder gets too large (over ~100MB), move it to cloud storage and add `_source/` to `.gitignore`.

---

## Hosting alternatives (if Vercel doesn't suit)

The site is 100% static HTML/CSS/JS — it runs on any file host. Options:

| Host | Cost | Notes |
|---|---|---|
| Vercel | Free tier sufficient | Recommended — easiest setup |
| Netlify | Free tier sufficient | Near-identical to Vercel |
| Cloudflare Pages | Free | Best performance globally |
| GitHub Pages | Free | Works but custom domain setup is fiddly |
| AWS S3 + CloudFront | ~$1/month | More setup, most control |

---

## Forms — making them actually send emails

The contact form and job application form currently show a success state but don't send emails anywhere. To wire them up:

### Quickest option — Formspree

1. Sign up at https://formspree.io (free plan: 50 submissions/month).
2. Create a form endpoint — you get a URL like `https://formspree.io/f/xyzabc`.
3. In `contact.html`, find `<form class="v2-form" id="contactForm">` and change it to:
   ```html
   <form class="v2-form" id="contactForm" action="https://formspree.io/f/xyzabc" method="POST">
   ```
4. Do the same for `careers.html` (the `#applyForm` form).
5. Push the change — forms now email to the address registered with Formspree.

### Other options

- **Vercel Serverless Function** — more code, but keeps everything under Vercel and avoids Formspree's submission limits.
- **Direct SMTP** — would require a backend; not worth it for a static site.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Site on Vercel shows 404 | Check that `index.html` is at the **root** of the repo. Vercel serves that by default. |
| Photo not showing | Check the filename case — `IMG.jpg` and `img.jpg` are different on servers (but look the same on Mac). All site image filenames are lowercase. |
| Changes pushed but site not updated | Check Vercel dashboard — the deploy may have failed (check logs). |
| Custom domain not working | DNS can take up to 24h to propagate. Use `dig visionconstructions.com.au` or https://whatsmydns.net to check. |
| Google Maps iframe blank | The iframe src on `contact.html` is a generic embed — if Google changes terms, replace the URL from https://www.google.com/maps (Share → Embed). |
