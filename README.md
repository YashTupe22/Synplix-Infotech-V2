# Synplix Infotech Services

Main website for Synplix Infotech Services, built with Vite, React, TypeScript, shadcn/ui, and Tailwind CSS.

## Local Development

```sh
npm install
npm run dev
```

## Production Build

```sh
npm run build
npm run preview
```

The production build is emitted to `dist`.

## Vercel Deployment

Use these settings when importing the repository into Vercel:

```txt
Framework Preset: Vite
Install Command: npm install
Build Command: npm run build
Output Directory: dist
```

The included `vercel.json` rewrites all routes to `index.html` so React Router pages work on refresh and direct visits.
