# Install and Deploy

## 1) Create a repo

Suggested repo name:

`pacobaco-profile-system`

## 2) Upload files

Push this project to GitHub.

## 3) Add Vercel environment variables

- `GITHUB_USERNAME=pacobaco`
- `GITHUB_TOKEN=...`

A token is recommended for higher GitHub API rate limits.

## 4) Deploy

```bash
npm install
npm run build
```

Then import the repo into Vercel.

## 5) Optional profile wiring

Copy the narrative block from the top-level `README.md` into `pacobaco/pacobaco/README.md`.

## 6) Evolve the classification layer

Edit `lib/classify.ts` to change semantic grouping rules as your repo graph changes.
