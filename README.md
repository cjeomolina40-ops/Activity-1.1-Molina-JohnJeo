# Pangasinan Heritage Digital Showcase

A React + Next.js 14 App Router project for the Pangasinan Heritage Digital Showcase academic activity.

## Requirements
- Node.js 18+ recommended
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production/static build

```bash
npm run build
```

The project is configured with `output: 'export'`, so the static site is generated in the `out/` directory.

## Pages
- `/` — Home
- `/heritage` — Heritage site search and details
- `/about` — Project information
- `/contact` — Contact prototype

## Atomic Design
- Atoms: Button, Typography, Color Tokens, Icon, Image
- Molecules: Heritage Card, Search Form, Navigation Item
- Organisms: Heritage Grid, Header Navigation

## Images
The six project images supplied for the activity are stored in `public/images/` and referenced through `data.js`.

## Submission note
`node_modules` and `.next` are intentionally excluded from the submission ZIP. They can be recreated with `npm install` and `npm run dev`/`npm run build`.
