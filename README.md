# faris.id

Personal website of **Faris Arifiansyah** — Senior Software Engineer at NinjaOne.

One-page portfolio built as a static site and deployed to GitHub Pages. No server, no
runtime cost: everything is rendered at build time and served from GitHub's CDN.

## Stack

- [Astro](https://astro.build) 7 — static site generation
- [React](https://react.dev) — small interactive islands (theme toggle, copy email)
- [Tailwind CSS](https://tailwindcss.com) 4 — styling and design tokens
- TypeScript
- Fonts: Instrument Serif + Inter Variable, self-hosted via Fontsource
- Icons: Simple Icons (inline SVG)

## Development

Requires Node.js **22.23.4 or newer** (Node 24 recommended).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # generates dist/ (and public/og.png)
npm run preview   # serve the production build locally
```

## Content

All page content lives in `src/data/`:

| File | Contents |
| --- | --- |
| `profile.ts` | Name, role, summary, facts, languages, social links, impact metrics |
| `experience.ts` | Roles, dates, highlights, scope details, tech tags |
| `skills.ts` | Skill groups and legacy technologies |
| `education.ts` | Education, certifications, honors |

Edit those files and the page updates automatically. No CMS and no database.

Content was migrated from LinkedIn (exported PDF) plus the previous site. A few items
still need to be filled in manually:

- NinjaOne responsibilities and impact
- MBA details (thesis/focus) at Institut Teknologi Bandung
- Credential links/dates for certifications

## Design

- Minimal editorial layout: paper/ink palette with a deep green accent
- Light and dark themes (follows the system, remembers the user's choice)
- Responsive from 360px up
- Motion respects `prefers-reduced-motion`
- SEO: canonical URL, Open Graph/Twitter cards, JSON-LD Person schema, sitemap, robots.txt

## Deployment

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages.

One-time repository setup:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Custom domain: `www.faris.id` (also stored in `public/CNAME`)
3. Enable **Enforce HTTPS**

The site is served from the repository `faris-id/faris-id.github.io`, with DNS pointing
`www.faris.id` to `faris-id.github.io`.

## Project structure

```
public/            CNAME, favicon, robots.txt, generated og.png
scripts/           og image generator
src/
  assets/          portrait and other local images
  components/      Nav, Hero, About, Impact, Experience, Skills, Education, Contact
  data/            editable content
  layouts/         BaseLayout (head, fonts, theme bootstrap, reveal animation)
  pages/           index.astro
  styles/          global.css (Tailwind + design tokens)
.github/workflows/ deploy.yml
```

## License

Personal content © Faris Arifiansyah. The previous site was based on the Start Bootstrap
"Resume" theme (MIT); the current implementation replaces it.
