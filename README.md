# K‑Medical site

Production-ready local MVP built from the repository playbook and approved visual direction 01.

## Local run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run qa
```

This runs lint, TypeScript checks and a production build.

## Required before public launch

Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_LEAD_FORM_ENDPOINT`, add confirmed contacts and legal documents, confirm team details and assets, and connect analytics IDs. Vercel's public project URL is detected automatically, while `robots.txt` keeps indexing blocked until `NEXT_PUBLIC_ALLOW_INDEXING=true` is explicitly configured.

See `PRODUCT-PASS.md` for the current product ladder, and `design-qa.md` plus the root `project-docs` folder for decisions and visual evidence.
