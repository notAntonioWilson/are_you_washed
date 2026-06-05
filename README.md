# Are You Washed Pressure Washing — Website

Production Next.js 14 (App Router) website. Multi-page, SEO-optimized, conversion-focused.

---

## Quick Start (local)

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Deploy (recommended: Vercel)

1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com → it auto-detects Next.js, no config needed.
3. Add your custom domain `areyouwashed.com` in Vercel → Settings → Domains.
4. Set the `.org` domain to 301-redirect to `.com` (Vercel handles redirects in Domains).

---

## What still needs YOU (client-side wiring)

Everything below is built and ready — these are the live connections to flip on:

### 1. Quote form → email + CRM  ⚠️ REQUIRED for leads
The form posts to `/api/quote` (see `app/api/quote/route.ts`).
- In Make.com, create a scenario with a **Custom Webhook** trigger.
- Copy its URL.
- In Vercel → Settings → Environment Variables, add:
  `MAKE_WEBHOOK_URL = https://hook.us1.make.com/your-webhook-id`
- In that Make scenario, add modules: **Email** (to you + Juan) and **Airtable → Create Record**.
- Payload it receives: `{ name, phone, email, service, address, windows?, stories?, details?, submittedAt }`

Until that env var is set, submissions are logged to the server console (form still shows success).

### 2. Hero video  (currently a placeholder)
Replace `public/video/hero.mp4` with a real powerwashing clip.
- Keep it muted-friendly, ~10–20s loop, 1080p, compressed (<5MB ideal).
- The poster image (`public/images/house-after.jpg`) shows before the video loads.

### 3. Logo
`public/logo.png` (full-res) and `public/logo-web.png` (used in nav/hero) are background-removed.
If you get a professionally vectorized/transparent version, just replace those two files (keep the names).

### 4. Google Business Profile
Add `owner@otaisystems.com` as a manager (your note).

---

## Editing content

**Almost everything lives in one file:** `lib/site.ts`
- Business info (phone, email, hours, address)
- Services (name, description, features, images)
- Service areas
- Reviews
- Trust stats

Edit there and it updates across every page.

### Images
`public/images/` — swap any `.jpg` (keep filenames) to update before/afters and service photos.

---

## Tech / structure

- **Next.js 14** App Router, TypeScript, React 18
- **Self-hosted fonts** (Sora + Plus Jakarta Sans via @fontsource) — no Google Fonts dependency
- **SEO:** per-page metadata, OpenGraph, `LocalBusiness` JSON-LD with aggregateRating + areaServed, dynamic `sitemap.xml` + `robots.txt`
- **Pages:** Home, Services, About, Contact, Privacy, Terms, Disclaimer

```
app/
  layout.tsx          → fonts, metadata, JSON-LD, Nav + Footer
  page.tsx            → Home
  services/           → Services
  about/              → About
  contact/            → Contact
  privacy-policy/ terms-of-service/ disclaimer/
  api/quote/route.ts  → form handler (wire Make.com here)
  sitemap.ts robots.ts
components/            → Hero, Nav, Footer, QuoteForm, BeforeAfter, Reviews, etc.
lib/site.ts           → ALL content/config
public/               → logo, images, video, fonts
```

---

Built by OTAI.
