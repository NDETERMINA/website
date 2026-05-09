# Evidpath Website

Website and docs for Evidpath by NDETERMINA.

## Routes

- `/`: product overview and primary docs entry.
- `/docs`: docs landing page.
- `/docs/swarm-model`: how release questions become seeded behavior swarms.
- `/docs/domain-products`: recommender, search, and agent domain product overview.
- `/docs/recommender-domain`: recommender-specific guide.
- `/docs/search-domain`: search-specific guide.
- `/docs/agent-domain`: agent trajectory guide.
- `/docs/integration-paths`: native HTTP, schema-mapped HTTP, Python, and agent drivers.
- `/docs/quickstart`: install and first multi-domain audits.
- `/docs/cli-reference`: CLI commands and important options.
- `/docs/workflows`: common usage paths.
- `/docs/outputs`: reports, JSON, traces, plans, and manifests.
- `/docs/generation`: generated scenario/population coverage.
- `/docs/plan-first`: saved plan workflows.
- `/docs/troubleshooting`: common failures and fixes.

## Development

```bash
npm install
npm run dev
```

Set `NEXT_PUBLIC_WAITLIST_URL` to the Tally or Google Form URL used by the domain-pilot CTA.

## Checks

```bash
npm run lint
npm run build
```
