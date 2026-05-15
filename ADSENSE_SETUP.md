# Google AdSense Setup Checklist

Use this when Dallas Food Map is ready to apply for AdSense.

## 1. Before Applying

- Deploy the site to a public domain.
- Make sure these pages are live:
  - `/about/`
  - `/contact/`
  - `/privacy/`
  - `/sitemap.xml`
  - `/ads.txt`
- Add enough original guide content to the major pages:
  - `/cheap-eats-dallas/`
  - `/best-bbq-dallas/`
  - `/date-night-restaurants-dallas/`
  - `/restaurants/deep-ellum/`
  - `/restaurants/bishop-arts/`

## 2. Apply in AdSense

- Create or open a Google AdSense account.
- Add the production domain.
- Follow Google's verification instructions.
- Save the publisher ID, which looks like:

```text
ca-pub-0000000000000000
```

## 3. Update ads.txt

Replace the placeholder in `public/ads.txt` with the value Google provides. It usually looks like:

```text
google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0
```

## 4. Add Live Ad Code

After approval, wire the publisher ID into the reusable `AdSlot` component. Keep ad placements clearly separated from editorial restaurant cards and avoid excessive ads above the fold.
