# Install notes

1. Copy these files into the root of your Next.js repo.
2. Run `npm install`.
3. Set `GITHUB_TOKEN` in Vercel.
4. Redeploy.

If you are merging this into another app that already has a `tsconfig.json`, make sure it either:
- includes the alias `"@/*": ["./*"]`, or
- you replace alias imports with relative imports.
