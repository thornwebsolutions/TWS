# Thorn Web Solutions

Marketing site for Thorn Web Solutions — a web design studio for established service businesses. Built with **Astro 5 + Tailwind v4 + GSAP**, deployed on **Vercel**.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Architecture

```
src/
├── layouts/BaseLayout.astro     # <head>/SEO/GA, View Transitions, cursor, nav, footer
├── components/
│   ├── Nav, Footer, MeshBackground, Icon, Section, SectionHeader, BlogCard
│   └── sections/                # one component per homepage section
├── data/                        # site info + all homepage content (typed)
├── content/blog/                # blog posts (Markdown content collection)
├── content.config.ts            # blog collection schema
├── lib/structuredData.ts        # JSON-LD (Organization, reviews, offers)
├── scripts/animations.ts        # GSAP: reveals, parallax, count-ups, magnetic, cursor
├── styles/global.css            # design tokens, prose styles, keyframes
└── pages/
    ├── index.astro              # homepage
    ├── blog/                    # index + [id] article template
    └── december-sale.astro      # hidden (noindex) promo page

api/contact.js                   # Vercel serverless function (Resend email)
public/                          # assets, favicons, robots.txt, llms.txt
legacy/                          # the previous static HTML site, kept for reference
```

## Notes

- **Contact form** posts to `/api/contact`, which is the Vercel serverless function in `api/contact.js`. It requires the `RESEND_API_KEY` environment variable.
- **Animations** are progressively enhanced: the `js` class on `<html>` gates initial-hidden states, and everything respects `prefers-reduced-motion`.
- **Content** (services, pricing, testimonials, etc.) lives in `src/data/` — edit there, not in the components.
- **Blog posts** are Markdown files in `src/content/blog/`. Frontmatter fields are defined in `src/content.config.ts`.
- The `sitemap-index.xml` is generated automatically and excludes the `/december-sale` page.
