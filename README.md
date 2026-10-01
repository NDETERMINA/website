# Determina website

The public website and documentation for [Determina](https://determina.dev).
The homepage introduces one idea; product and documentation pages carry the detail.

## Routes

- `/`: introduction and links to system types.
- `/recomm`, `/agents`, `/search`: system-specific examples and availability.
- `/company`: founder, company, and contact.
- `/docs`: documentation, with searchable navigation and mobile browsing.
- `/docs/how-it-works`: the product model, evidence, and limits.
- `/docs/quickstart`: hosted setup and first review, requiring platform access.
- `/docs/local-smoke-test`: package and integration checks.
- `/docs/cli-reference`: command reference.

Legacy documentation addresses redirect to their current guides. The old
`/engine-standard` address redirects to `/docs/how-it-works`.

## Development

```sh
npm ci
npm run dev
```

Set `NEXT_PUBLIC_WAITLIST_URL` to override the default pilot contact address.

```sh
npm run lint
npm run build
```

## Source and deployment

[NDETERMINA/website](https://github.com/NDETERMINA/website) contains the MIT-licensed
website source. The product engine is maintained separately in a private repository;
this repository does not grant access to its implementation or hosted execution.

The source website directory is synchronized to this repository by the upstream
website sync workflow. Vercel deploys its main branch to the existing production
project. Build output, local environment files, and local design work are excluded
from synchronization. Contact [founders@determina.dev](mailto:founders@determina.dev)
for product access, support, or an integration example.
