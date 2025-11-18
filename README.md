## Development

```bash
pnpm install
pnpm dev
```

The app runs at [http://localhost:3000](http://localhost:3000). ESLint/TypeScript guard rails are available via:

```bash
pnpm lint
```

## SEO & Analytics

- **Dynamic metadata**: Each route exports metadata via `lib/seo.ts`, providing canonical URLs, Open Graph/Twitter previews, and keywords.
- **Sitemap & robots**: `/sitemap.xml` and `/robots.txt` are generated from the same SEO config, so adding a new route only requires updating `seoRoutes`.
- **GA4 tracking**: `components/analytics/GA4Analytics.tsx` injects the Google Analytics script once and dispatches page views on every router transition.

### Required environment variables

Create a `.env.local` file with:

```
NEXT_PUBLIC_SITE_URL=https://llamao.xyz
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

`NEXT_PUBLIC_GA_MEASUREMENT_ID` can be omitted in local development if analytics is not needed.

## Performance Notes

- Large hero/background assets now include responsive `sizes` hints to cut transfer size on mobile and improve LCP.
- Shared client-only page content moved into `components/page-content/*` so server routes stay lean while animations still run on the client.
- `reward-pools` media assets were annotated with precise sizing to reduce layout shift inside the carousel layout.

## Deployment

The project is a standard Next.js App Router app and can be deployed on any Node-compatible platform (Vercel recommended):

```bash
pnpm build
pnpm start
```

Ensure the production environment exposes the same two environment variables listed above so metadata and analytics resolve to the correct domain.
