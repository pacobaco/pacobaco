# pacobaco-profile-polished-fixed

A complete Next.js profile dashboard scaffold for `pacobaco`.

## Fixes included

- adds the missing `app/api/repos/route.ts`
- adds the missing `components/*` files imported by `app/page.tsx`
- adds `tsconfig.json` path alias support for `@/*`
- adds a minimal `package.json`, `layout.tsx`, and `globals.css`
- preserves live GitHub fetch with fallback behavior

## Environment variables

```bash
GITHUB_TOKEN=your_github_token
GITHUB_USERNAME=pacobaco
```

## Run locally

```bash
npm install
npm run build
npm run dev
```
