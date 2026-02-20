# Portfolio

A personal portfolio site built with [Next.js](https://nextjs.org) 15, React 19, Tailwind CSS 4, and Three.js.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

## Setup

```bash
# 1. Clone the repo
git clone <repo-url>
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server (uses Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build (static export) |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and deploy to GitHub Pages |

## Deployment

This project is configured for **static export** (`output: 'export'` in `next.config.mjs`). Running `npm run deploy` builds the site, creates a `.nojekyll` file, and pushes the `out/` directory to GitHub Pages via `gh-pages`.

## Tech Stack

- **Framework** — Next.js 15 (App Router)
- **UI** — React 19, Tailwind CSS 4
- **3D / Visuals** — React Three Fiber, Drei, tsparticles
- **Linting** — ESLint with eslint-config-next

