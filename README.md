# Dallas Food Map

A Next.js directory site for Dallas-area restaurants, built around a map-first directory, SEO landing pages, and ad/sponsor-ready placements.

## Current Routes

- `/` - full Dallas Food Map directory
- `/cheap-eats-dallas` - affordable restaurant guide
- `/best-bbq-dallas` - barbecue guide
- `/date-night-restaurants-dallas` - date-night and special occasion guide
- `/restaurants/[neighborhood]` - neighborhood restaurant pages
- `/cuisine/[cuisine]` - cuisine pages
- `/spot/[slug]` - individual restaurant detail pages
- `/about` - site background
- `/contact` - advertising and correction inquiries
- `/privacy` - privacy and advertising disclosure

## Run Locally

Install dependencies, then start the dev server:

```bash
npm install
npm run dev
```

The Next.js site will usually run at:

```text
http://localhost:3000
```

The original static prototype files are still present as `index.html`, `styles.css`, and `app.js`.

## Static Preview

This project is configured for static export, which is a good fit for a directory site. Build and preview the exported site:

```bash
npm run build
npm run preview
```

The exported site lives in `out/`.

## AdSense

The site has AdSense-ready placeholders, a Privacy Policy, About page, Contact page, and `public/ads.txt` placeholder. See `ADSENSE_SETUP.md` before applying or adding live ad code.

## Deployment

See `DEPLOYMENT.md` for the recommended GitHub plus Vercel launch path.
