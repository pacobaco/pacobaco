# Juan Rodriguez — pacobaco

> Converge knowledge, not prestige.

This repository can serve two functions at once:

1. **GitHub profile README** for `pacobaco/pacobaco`
2. **Deployable profile application** that turns the account into a live systems index

---

## What this package includes

- polished GitHub profile README copy
- Next.js App Router dashboard scaffold
- live `/api/repos` endpoint
- GitHub API fetch with fallback snapshot behavior
- semantic classification into AI, finance, network, infrastructure, publication, and other layers
- SVG systems map for README embedding

---

## Profile README block

Paste this into `pacobaco/pacobaco/README.md` if you want the repository profile itself to carry the narrative layer.

```md
# Juan Rodriguez — pacobaco

> Converge knowledge, not prestige.

## Systems Focus

I design computational systems where identity, finance, AI, infrastructure, and publication converge into executable architectures.

## Current Operating Layers

- Intelligence systems
- Financial valuation systems
- Network and identity systems
- Infrastructure and telemetry systems
- Publication and mezzanine distribution systems

## Selected Surfaces

- WeTheMachines — http://www.wethemachines.com
- Johnny Babylon — https://www.johnnybabylon.com
- GitHub — https://github.com/pacobaco

## Thesis

This is not a portfolio.

It is a live systems topology.
```

---

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

---

## Environment variables

Create `.env.local`:

```bash
GITHUB_USERNAME=pacobaco
GITHUB_TOKEN=your_github_token_here
```

If `GITHUB_TOKEN` is omitted, the app still works against public data until rate limits are hit. If fetch fails, it falls back to curated local metadata.

---

## Deploy on Vercel

1. Push this folder to a new repository.
2. Import the repo into Vercel.
3. Add environment variables.
4. Deploy.

The app uses Next.js route handlers and server-side `fetch`, and the GitHub snapshot is cached with revalidation semantics suitable for profile/dashboard use.

---

## API

`GET /api/repos`

Returns:

- profile snapshot
- source type (`github` or `fallback`)
- repos grouped semantically in the UI
- aggregate stats

---

## Extend next

- add contribution heatmap card
- add pinned repo override logic
- ingest `ai_models.json` from Flyometer
- add Navstone metrics widget
- add D3 or force-graph system topology view
