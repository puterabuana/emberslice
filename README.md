# Ember Slice — Pizza Joint Website

A fast, fully static website for a coal-fired pizza joint, built as an SEO + web-development
portfolio piece. No frameworks, no build step, no dependencies — just clean HTML, one CSS
file, and a little vanilla JavaScript. Everything (menu, copy, schema, favicon) is included
and ready to deploy.

**Live demo brand:** Ember Slice — a fictional coal-fired pizza joint in Williamsburg, Brooklyn.

**Design direction:** neo-brutalist — thick ink borders, hard offset shadows, sharp corners,
a kraft pizza-box palette (pepperoni red, basil green, cheese yellow), and a chunky
condensed display face. Deliberately loud, to sit at the opposite end of the spectrum from a
soft editorial layout.

---

## Why this is a good portfolio piece

- **Real SEO surface area** — unique `<title>` / meta description per page, canonical URLs,
  Open Graph + Twitter cards, breadcrumb + `Restaurant` + `Menu` + `Article` JSON-LD
  structured data, `sitemap.xml`, `robots.txt`, and a web manifest.
- **Distinct visual identity** — a full brutalist design system in one CSS file. Type:
  **Anton** (display), **Archivo** (body), **Space Mono** (labels/prices).
- **Accessible** — semantic landmarks, skip link, focus styles, `aria-current`,
  reduced-motion support, labelled forms.
- **Responsive** — mobile nav, fluid type, and layouts that reflow from 320px up.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home — hero, features, story, favourites, testimonials, journal preview |
| `menu.html` | Full tabbed menu (slices, pies, specials, sides, drinks) with `Menu` schema |
| `about.html` | Brand story, house rules, stats |
| `visit.html` | Hours, contact, map placeholder, pickup-order form |
| `journal.html` | Blog index ("The Oven") |
| `journal-cold-ferment-dough.html` | Sample article with `Article` schema |
| `privacy.html` · `404.html` | Utility pages |

---

## Preview locally

It's a static site, so any static server works. From the project folder:

```bash
# Python (already on most machines)
python -m http.server 8080

# or Node
npx serve .
```

Then open <http://localhost:8080>.

---

## Deploy to Cloudflare Pages

### Option A — Connect your Git repo (recommended)
1. Push this folder to a GitHub/GitLab repo.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo. **Framework preset:** *None*. **Build command:** *(leave blank)*.
   **Build output directory:** `/` (the repo root).
4. **Save and Deploy.** Cloudflare gives you a `*.pages.dev` URL in ~30 seconds.

### Option B — Direct upload
Drag the whole folder into **Pages → Create → Upload assets**. Done.

### Add your custom domain
1. Buy/point your domain to Cloudflare (add the site so Cloudflare is your DNS).
2. On your Pages project: **Custom domains → Set up a domain →** enter e.g. `emberslice.com`.
3. Cloudflare auto-creates the DNS record and SSL cert. HTTPS is live in a minute or two.

---

## Before you go live — find & replace

Everything is wired to the placeholder domain **`https://emberslice.com`**.
Do a project-wide find & replace to your real domain so canonical URLs, OG tags,
sitemap, and schema all point to the right place:

```
Find:    https://emberslice.com
Replace: https://YOURDOMAIN.com
```

Also update, wherever they appear:
- Business name, address, phone, email (search `211 Wythe`, `718) 555-0199`, `eat@emberslice.com`)
- Social links (`instagram.com/emberslice`, etc.)
- The map placeholder in `visit.html` → paste a real Google Maps `<iframe>` embed
- Opening hours (in `visit.html`, the footer of each page, and the JSON-LD)

## Make the forms actually send

The order and newsletter forms are front-end demos. Wire them to a form backend —
no server needed:

- **Cloudflare Pages Forms / Web3Forms / Formspree** — set the `<form action>` to the
  endpoint they give you and remove the `data-demo-form` attribute so the browser submits normally.

## Photos & licensing

The photos in `assets/img/` (`ph-*.jpg` + `og-image.jpg`) are real pizza photography from
**[Unsplash](https://unsplash.com/license)**, whose license grants free commercial and personal
use with **no attribution required**. They're downloaded and served locally (not hotlinked), so
the site stays fast and self-contained. A subtle `contrast/saturate` filter in the CSS keeps them
looking like one set inside the brutalist frames.

Swapping in your own shots is trivial: keep the same filenames (`ph-pie.jpg`, `ph-slice-pep.jpg`,
etc.) and the markup + `object-fit: cover` styling just works. Slot guide:

| File | Where it shows | Ideal shot |
|------|----------------|-----------|
| `ph-pie.jpg` | Home hero + article hero | A whole coal-fired pie |
| `ph-slice-cheese.jpg` | "The Classic" card | A plain cheese slice/pie |
| `ph-slice-pep.jpg` | "Cup & Char Pep" card | A pepperoni slice |
| `ph-grandma.jpg` | "The Grandma" card | A square/loaded slice |
| `ph-whitepie.jpg` | "White Pie" card + CTA band | A pale, no-red-sauce pie |
| `ph-square.jpg` | "Vodka Grandma" journal post | A special/loaded pie |
| `ph-dough.jpg` | Dough-ferment posts | Dough / hands making pizza |
| `ph-oven.jpg` | "The Joint" + oven posts | The oven / flames |
| `ph-counter.jpg` | Interior banners | The counter / dining room |

`favicon.svg` is an original vector pizza-slice mark. `og-image.jpg` is the 1200×630 social-share
card (a real photo, so every scraper renders it).

## Rebrand in seconds

Swap the values in the `:root` block of `assets/css/styles.css` — colours, fonts, border
weight, and shadow offset are all variables. Change `--red`, `--paper`, and the border/shadow
tokens and the whole site re-skins.
