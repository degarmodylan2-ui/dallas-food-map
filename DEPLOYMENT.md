# Deployment Guide

The recommended launch path is GitHub plus Vercel.

## 1. Create a GitHub Repository

Create a new repository, for example:

```text
dallas-food-map
```

Then push this project to that repository.

## 2. Import into Vercel

In Vercel:

1. Choose **Add New Project**.
2. Import the GitHub repository.
3. Use the Next.js framework preset.
4. Keep the default build command:

```text
npm run build
```

5. Deploy.

Vercel automatically detects Next.js projects and builds them on deploy.

## 3. After Deployment

Check these live URLs:

```text
/
/about
/contact
/privacy
/ads.txt
/sitemap.xml
/cheap-eats-dallas
/best-bbq-dallas
/date-night-restaurants-dallas
```

## 4. Domain and AdSense

After the site is live:

1. Add a custom domain in Vercel.
2. Update AdSense with the production domain.
3. Replace the placeholder in `public/ads.txt` with the value Google provides.
4. Add the AdSense publisher ID to the ad component after approval.
