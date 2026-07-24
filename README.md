# DVO Corp — dvocorp.com

Corporate site for **DVO Corp** (DevOps, Virtualization & Optimization):
infrastructure, AI/GPU capacity and custom technical solutions for small teams.

Trilingual (uk / en / ru), statically exported, deployed to GitHub Pages on
every push to `main`.

---

## Stack

| Concern       | Choice                                            |
| ------------- | ------------------------------------------------- |
| Framework     | Next.js 16 (App Router, `output: "export"`)       |
| Language      | TypeScript 5.9, strict                            |
| Styling       | Tailwind CSS v4 (CSS-first `@theme` tokens)       |
| UI primitives | Radix (accordion, tabs, slider, switch, label)    |
| Animation     | Framer Motion (`motion`) for interactive pieces   |
| Icons         | lucide-react                                      |
| Hosting       | GitHub Pages + custom domain                      |

There is no backend, database or authentication — the whole site is prebuilt
HTML, CSS and JS.

### Two deliberate version pins

- **`lucide-react` is pinned to the `0.x` line.** In `1.x` the published
  `context.mjs` emits `"use strict"` *before* `"use client"`, so bundlers
  ignore the directive and every icon breaks React Server Components. Revisit
  once upstream fixes the directive order.
- **`@radix-ui/react-slot` is not used.** It creates a React context at module
  scope with no `"use client"`, which breaks any server component rendering
  `<Button asChild>`. `src/components/ui/slot.tsx` is a 20-line replacement
  that keeps buttons and links fully server-rendered.

---

## Getting started

```bash
npm install
```

```bash
npm run dev
```

The dev server runs on <http://localhost:3000>. Visiting `/` redirects to
`/uk/`.

### Scripts

| Script              | What it does                                            |
| ------------------- | ------------------------------------------------------- |
| `npm run dev`       | Development server                                      |
| `npm run build`     | Static export into `out/`, then `scripts/postbuild.mjs` |
| `npm run typecheck` | `tsc --noEmit`                                          |
| `npm run lint`      | ESLint (flat config)                                    |
| `npm run check`     | typecheck + lint + build — what CI runs                 |
| `npm start`         | Serves the built `out/` directory locally               |

To preview exactly what gets deployed:

```bash
npm run build && npx serve out
```

---

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx              pass-through root layout
│  ├─ page.tsx                / → /uk/ redirect (meta refresh + script + links)
│  ├─ not-found.tsx           exported as out/404.html
│  ├─ globals.css             design tokens, themes, reveal + grid utilities
│  ├─ fonts.ts                Inter + JetBrains Mono, self-hosted at build
│  ├─ icon.svg                favicon
│  ├─ opengraph-image.tsx     social card, rendered to PNG at build
│  ├─ sitemap.ts              sitemap.xml with full hreflang alternates
│  ├─ robots.ts               robots.txt
│  ├─ manifest.ts             web app manifest
│  └─ [locale]/
│     ├─ layout.tsx           <html lang>, header, footer, Organization + WebSite JSON-LD
│     ├─ page.tsx             home
│     ├─ services/page.tsx
│     ├─ ai-infrastructure/page.tsx
│     ├─ infrastructure/page.tsx
│     ├─ products/page.tsx
│     ├─ about/page.tsx
│     └─ contact/page.tsx
├─ components/
│  ├─ ui/                     button, card, badge, accordion, tabs, field, slider, switch, slot
│  ├─ layout/                 header, footer, logo, theme toggle, language switcher
│  ├─ common/                 reveal, section heading, page hero, grid background, json-ld
│  └─ sections/               page sections and the interactive visuals
├─ content/
│  ├─ site.ts                 contacts, product URLs, locales, routes, tech stack, form config
│  └─ locales/                uk.ts (source of truth), en.ts, ru.ts
└─ lib/
   ├─ seo.ts                  per-page metadata: canonical, hreflang, OG, Twitter
   ├─ jsonld.ts               Organization, WebSite, Service, BreadcrumbList, FAQPage, SoftwareApplication
   ├─ calculator.ts           AI page sizing logic (no prices — recommendations only)
   ├─ icons.tsx               name → Lucide component registry
   ├─ theme-script.ts         pre-paint theme + `.js` class
   └─ utils.ts                `cn`
```

### Pages

Seven pages × three locales = 21 routes, plus `/`, `404.html`, `sitemap.xml`,
`robots.txt`, `manifest.webmanifest`, `og.png` and `icon.svg`.

| Route                        | Contents                                                                                |
| ---------------------------- | --------------------------------------------------------------------------------------- |
| `/{locale}/`                 | Hero + request-flow diagram, advantages, directions, Media Processing, shared infrastructure, process, comparison, task picker, tech stack + counters, FAQ, CTA |
| `/{locale}/services/`        | Nine expandable service cards (problem / included / best for / outcome / CTA)             |
| `/{locale}/ai-infrastructure/` | Model deployment, GPU pools, API, queues, scaling, private deployment, dedicated-vs-shared, concept calculator |
| `/{locale}/infrastructure/`  | Interactive layered architecture, capabilities, engagement models, migration steps        |
| `/{locale}/products/`        | DVO Media Processing, "in development" cards, custom tooling                              |
| `/{locale}/about/`           | What DVO stands for, focus areas, working principles                                      |
| `/{locale}/contact/`         | Demo-mode request form, direct channels, what-happens-next                                |

### Key components

`FlowDiagram` (interactive SVG, stacked chips on mobile) ·
`ArchitectureDiagram` (layered stack) · `InfraModels` (Your server / Managed
DVO / Shared DVO) · `GpuPool` (shared-capacity visual) · `TaskPicker` ·
`Calculator` · `ServiceCard` · `Counters` · `ContactForm` · `Comparison` ·
`Faq` · `Header` / `Footer` / `ThemeToggle` / `LanguageSwitcher`.

---

## Editing content

**All copy lives in `src/content/`** — nothing user-facing is hardcoded in
components.

- `src/content/site.ts` — contacts, Telegram, email, product URLs, social
  links, locales, routes, the technology stack and form configuration.
- `src/content/locales/uk.ts` — Ukrainian, and the **source of truth for the
  content shape**. `Dictionary` is derived from it, so adding a key here makes
  TypeScript require the same key in `en.ts` and `ru.ts`. Run
  `npm run typecheck` after editing and the compiler will list anything
  missing.

Icons are referenced by name (`icon: "ServerCog"`) and resolved through
`src/lib/icons.tsx`. Add new names to the registry there.

### Contacts

`CONTACTS` in `src/content/site.ts` currently holds **placeholder values**:

```ts
email: "hello@dvocorp.com",
telegramUsername: "dvocorp",
```

Replace both with the real handles before launch — they feed the header,
footer, contact page, CTA blocks and JSON-LD.

### Adding a locale

1. Add the code to `LOCALES` in `src/content/site.ts` plus its entries in
   `LOCALE_TAGS`, `LOCALE_NAMES` and `LOCALE_SHORT`.
2. Create `src/content/locales/<code>.ts` typed as `Dictionary`.
3. Register it in `src/content/locales/index.ts`.

Routes, sitemap, hreflang and the language switcher pick it up automatically.

---

## Design system

Tokens are CSS custom properties in `src/app/globals.css`, exposed to Tailwind
through `@theme inline`. Dark is the default theme; light is a full
alternative. The active theme is a `dark` class on `<html>`, applied by an
inline script before first paint (no flash), stored in `localStorage` under
`dvo-theme`, and read by React through `useSyncExternalStore`.

Accents: blue (`--primary`), cyan (`--accent`), violet (`--violet`) over a deep
graphite background, with soft glows, a faint technical grid and glass
surfaces.

### Performance and accessibility notes

- Above-the-fold content (`Hero`, `PageHero`) renders **statically** — the
  `<h1>` is never hidden behind an animation, so LCP is the served HTML.
- Scroll reveals are CSS transitions gated on a `.js` class set before paint:
  content is fully visible without JavaScript, and there is no flash of hidden
  content with it.
- `prefers-reduced-motion` disables reveals, the grid drift, the flowing
  diagram dashes and the animated counters.
- Layout is mobile-first and verified down to 320 px with no horizontal
  overflow.
- Keyboard navigation, visible focus rings, a skip link, `aria-label`s on
  icon-only controls and `aria-pressed` / `aria-expanded` on the interactive
  visuals.

---

## SEO

Handled centrally in `src/lib/seo.ts` and `src/lib/jsonld.ts`:

- unique `title` / `description` / keywords per page **and** per locale;
- `canonical` plus `hreflang` alternates for all three locales and
  `x-default`;
- Open Graph and Twitter cards backed by a generated 1200×630 PNG;
- `sitemap.xml` with `xhtml:link` alternates, and `robots.txt`;
- JSON-LD: Organization, WebSite, Service, BreadcrumbList, SoftwareApplication,
  and FAQPage **only on the page where the questions are actually rendered**;
- semantic HTML with a single `<h1>` per page and an ordered heading structure;
- internal cross-linking between home, services, AI, infrastructure and
  products;
- a styled 404 page.

The root URL (`/`) is `noindex` — it only forwards to `/uk/`.

---

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which type-checks,
lints, builds and publishes `out/` to GitHub Pages. Pull requests run the same
checks without publishing.

### One-time repository setup

**Settings → Pages → Build and deployment → Source: GitHub Actions.**

`public/CNAME` already contains `dvocorp.com`, so the custom domain is applied
on the first deploy.

### DNS

Point `dvocorp.com` at GitHub Pages:

| Type  | Name  | Value                    |
| ----- | ----- | ------------------------ |
| A     | `@`   | `185.199.108.153`        |
| A     | `@`   | `185.199.109.153`        |
| A     | `@`   | `185.199.110.153`        |
| A     | `@`   | `185.199.111.153`        |
| AAAA  | `@`   | `2606:50c0:8000::153`    |
| AAAA  | `@`   | `2606:50c0:8001::153`    |
| AAAA  | `@`   | `2606:50c0:8002::153`    |
| AAAA  | `@`   | `2606:50c0:8003::153`    |
| CNAME | `www` | `dvo-corp.github.io.`    |

Once DNS resolves, enable **Enforce HTTPS** in Settings → Pages. Certificate
issuance usually takes a few minutes after the records propagate.

If the domain sits behind Cloudflare, set the records to **DNS only** (grey
cloud) until GitHub has issued the certificate, then re-enable proxying if you
want it.

### Why `trailingSlash` and the postbuild step

GitHub Pages serves directories, so `trailingSlash: true` makes every route an
`index.html`. `scripts/postbuild.mjs` then republishes the generated Open Graph
card as `out/og.png` (Next writes it without an extension, which Pages would
serve as `application/octet-stream`), ensures `.nojekyll` exists so `_next/` is
not skipped, and fails the build if `CNAME`, `404.html`, `sitemap.xml` or
`robots.txt` are missing.

---

## Wiring up a backend later

The architecture assumes these will arrive:

- **Contact form** — set `NEXT_PUBLIC_CONTACT_ENDPOINT` (see `.env.example`).
  `ContactForm` already posts to it and falls back to demo mode when unset; no
  component changes needed.
- **Telegram bot / email / CRM** — the form composes a plain-text summary
  (`composeMessage`) that can be forwarded as-is.
- **Analytics** — `ANALYTICS` in `src/content/site.ts` reserves
  `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`; add the script tag in `[locale]/layout.tsx`.
- **Live chat / API** — the site is static, so any widget or API client mounts
  as a client component without touching the build pipeline.

Note that a static export has no server routes: an API endpoint has to live
elsewhere (a small service, a serverless function, or a bot).

---

## Known placeholders

- Contact email and Telegram handle in `src/content/site.ts`.
- The contact form is in demo mode until an endpoint is configured — it tells
  the visitor so and offers Telegram/email instead.
- `https://mp.dvocorp.com` (DVO Media Processing) is linked but lives in its
  own repository.
