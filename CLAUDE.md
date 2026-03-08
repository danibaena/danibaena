# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for danibaena.com, built with Astro + Tailwind CSS 4.x, deployed on Netlify.

## Architecture

- **Astro** static site generator with `output: 'static'`
- **Tailwind CSS 4.x** via `@tailwindcss/vite` plugin
- **TypeScript** for data files
- **Zero client JS** — no React, no jQuery. Only a tiny vanilla JS nav toggle.
- **Pages**: `src/pages/index.astro` (portfolio), `src/pages/projects.astro`, `src/pages/credits.astro`
- **Components**: `src/components/` — Header, Hero, About, Skills, Experience, SocialLinks, ContactForm, Footer, ProjectCard
- **Data**: `src/data/` — typed TS files (experience, skills, projects, social)
- **Styling**: `src/styles/global.css` — Tailwind imports + custom theme (dark mode, Inter + JetBrains Mono fonts)
- **Static assets**: `public/` — images, PDF resume, favicons, CNAME
- **Contact form**: Formspree (`https://formspree.io/f/xoqprjne`)
- **Icons**: Inline SVGs (no Font Awesome)

## Development

```bash
npm install
npm run dev        # dev server at localhost:4321
npm run build      # production build to dist/
npm run preview    # preview production build
```

## Deployment

Push to `main` branch — Netlify auto-detects Astro and builds/deploys. Config in `netlify.toml`.

## Content Updates

- **Experience/skills/projects**: Edit `src/data/*.ts` files
- **Page layout**: Edit `src/components/*.astro`
- **Resume PDF**: Replace `public/pdf/DanielBaenaResume.pdf`
- **Images**: Add to `public/images/`
- **Career profile doc**: `docs/daniel-baena-career-profile.md`
