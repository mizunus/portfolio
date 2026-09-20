# Portfolio

Personal portfolio site — [www.siddharthdangarh.com](https://www.siddharthdangarh.com).
Built with [Next.js](https://nextjs.org) 15 (App Router), React 19 and Tailwind CSS 4,
shipped as a fully static export.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

## Setup

```bash
git clone https://github.com/mizunus/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | No | Access key for the contact form. Without it, the contact section falls back to a plain `mailto:` link. Get one free at [web3forms.com](https://web3forms.com). |

Locally, put it in `.env.local` (git-ignored):

```bash
echo 'NEXT_PUBLIC_WEB3FORMS_KEY=your-key-here' >> .env.local
```

For deploys, set it in the Cloudflare project's build environment variables —
it is inlined at build time, so the site must be rebuilt after changing it.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build + sitemap (static export to `out/`) |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and deploy to Cloudflare |

## Deployment

Hosted on **Cloudflare** as a static-assets Worker. `next.config.mjs` sets
`output: 'export'`, so the build produces a plain `out/` directory with no
server runtime.

`wrangler.jsonc` points Cloudflare at that directory. Because there is no
`main` entrypoint, the Worker serves static files only.

### Cloudflare build settings

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Output / assets directory | `out` |

> **Do not use the Next.js framework preset.** Cloudflare auto-detects Next.js
> and proposes `npx opennextjs-cloudflare build`. OpenNext adapts
> *server-rendered* Next.js to Workers; this site is a static export with no
> server bundle or middleware, so that build fails while bundling the
> middleware function. Use the build and deploy commands above instead.

Pushes to `master` trigger a deploy. To deploy by hand:

```bash
npm run deploy
```

## Tech Stack

- **Framework** — Next.js 15 (App Router), static export
- **UI** — React 19, Tailwind CSS 4
- **Visuals** — CSS-only ambient gradients, film grain and cursor spotlights (no 3D or animation libraries)
- **SEO** — `next-sitemap`, JSON-LD structured data, Open Graph metadata
- **Hosting** — Cloudflare Workers static assets via Wrangler
- **Linting** — ESLint with eslint-config-next
