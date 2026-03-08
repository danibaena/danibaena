# Daniel Baena — Career Profile & Website Update Brief

> Handoff document for updating danibaena.com and CV resume.
> Compiled Feb 2026 from GitHub data, current resume PDF, and live website audit.

---

## 1. Identity & Contact

- **Full name:** Daniel Baena Hermosa
- **Title (current):** Staff Software Engineer
- **Location:** Madrid, Spain (remote available)
- **Email:** me@danibaena.com
- **GitHub (personal):** github.com/danibaena
- **GitHub (work):** github.com/dbaena-ctaima (twind-ops org)
- **LinkedIn:** linkedin.com/in/danibaena
- **Twitter:** @dani_baena
- **Website:** danibaena.com

---

## 2. Complete Work History

### Ctaima / Twind — SaaS for Contractor Access Control

**Staff Software Engineer, Feb 2025 – Present (~1 year)**

This role is **completely missing** from the website and CV.

**What he built (verified from 240 PRs + 284 commits across twind-ops org):**

Frontend (TwindWeb — 230 PRs, 233 commits):

- Architected and built a **React + TypeScript monorepo from scratch** using TurboRepo, Vite, TanStack Router/Query
- Created a **shadcn-based design system** with component library, design tokens, and Storybook (deployed via CloudFront)
- Set up the entire **DX toolchain**: ESLint, Prettier, git hooks, turbo generators for new packages
- Implemented **i18n at scale** with Tolgee (static translations, hook patterns, CLI-compatible migration)
- Built full **CRUD features**: sites, employees, contracts, requirements, resource classification
- Implemented **contractor onboarding flow** (multi-step: welcome → registration → qualification)
- Set up **MSW mocking** across all apps (admin, cm, public) with proper prod bundle exclusion
- **CI/CD**: GitHub Actions with affected-based test filtering, parallel jobs, reusable workflows, Storybook deployment, cache optimization
- Created shared packages: `@twind/hooks` (useSafeMutation, useDeepestRouteContext)
- **Code quality ownership**: codebase health audits, test infrastructure consolidation, slop reports
- OpenAPI client auto-generation pipeline (hey-api) with cross-repo notifications
- Vite code-splitting optimization, loading states, auth context wiring

Mobile (TwindMobile — 3 PRs, 51 commits):

- Built the **entire mobile app from scratch**: Expo SDK 54, React Native 0.81, React 19
- **NativeWind** (Tailwind for RN), Expo Router (file-based routing)
- OAuth with **Azure AD B2C** (expo-auth-session + expo-secure-store)
- QR code scanner (expo-camera) for contractor access control
- **Offline-first architecture** with WatermelonDB
- **Zod validation schemas** for the access flow
- **E2E testing with Maestro** (14 tests passing) + MSW mocking in RN
- **EAS build/submit pipeline**: 8 build profiles (dev, local, e2e, e2e-device, preview, preview-apk, staging, production)
- Deploy workflow via GitHub Actions → TestFlight + Google Play Internal
- PostHog analytics, toast notifications, TanStack Query with useSafeMutation

Infra/Cross-cutting:

- AWS infrastructure via CDK for Storybook deployment (CloudFront + S3)
- CI pipelines with npm cache optimization, changesets integration
- OpenAPI client automation across repos (TwindApi-OpenApi → TwindWeb + TwindMobile)

**Key achievement summary (use these for the CV — specific but not company-revealing):**

- Architected and delivered a **React monorepo with design system, 3 apps, and shared packages** — 230+ PRs in 9 months
- Built a **React Native mobile app from zero to production** (iOS + Android) with offline-first sync, QR scanning, and OAuth
- Set up **end-to-end CI/CD**: GitHub Actions with affected-based testing, automated OpenAPI client generation, EAS build/submit to app stores
- Created a **component library with Storybook**, deployed and documented, serving as the single source of truth for the design system
- Established **i18n infrastructure** (Tolgee) with CLI-compatible patterns across web and mobile
- Owned **codebase health**: audits, test consolidation, shared hooks extraction, bundle optimization

---

### Merlyn Mind (prev. Emergence AI) — EdTech AI Assistant for Classrooms

**Staff Frontend Software Engineer, Sep 2023 – Feb 2025 (~1.5 years)**

- Developed several products from scratch: chatbot for classrooms, Kahoot-like tools for teachers/students
- Actively involved with Product and Design from early stages — technical breakdowns, estimations, launch management
- Stack: Next.js, React, TypeScript, React-Query, React-Hook-Form, Tailwind, ShadCN/RadixUI, MSW, Vite, Vitest
- Built a **monorepo for shared packages** using TurboRepo, hosted npm packages in ECR
- Created DX utilities and scripts to streamline CI and automate tasks
- Migrated a **BFF (tRPC) to AWS Lambda**, refactored into SPA to reduce overengineering
- Mentored engineers on best practices

---

### Eventbrite — Real Life & Online Events Marketplace

**Senior Software Engineer, Jul 2021 – Sep 2023 (~2.2 years)**

- Large-scale challenges, global reach
- Owned several services including **Tier 1 (200 req/s endpoint)**
- Migrated a service from legacy to **gRPC, hosted in a TLZ within AWS using ECS Fargate**
- Implemented backend for **Urgency Signals & Highlights** in Event Pages — raised revenue, **CTR up 1%**
- Developed **Event Collections** on frontend, owning multiple apps and libraries (React)

---

### Alea Soluciones — Fiber Optics Networks

**Senior Full Stack Developer, Apr 2018 – Jul 2021 (~3.3 years)**

- Software Craftsmanship culture: Python, NGINX, Docker, Jenkins, React, Redis, PostgreSQL, RabbitMQ, REST APIs
- TDD, Agile, eXtreme Programming
- Distributed systems, Event Driven Architecture, Hexagonal Architecture, Interaction Driven Design, Clean Code
- Product and ownership mindset, self-organized team

---

### Machiina — Product & Service Design Agency

**Senior Full Stack Developer, Oct 2016 – Mar 2018 (~1.5 years)**

- Implemented Carrefour e-Commerce frontends (Supermercado, Bodega): HTML5, jQuery, CSS3, responsive
- Created internal tooling: A11y, minification, cross-browser, linting
- Implemented Credit Card & Apple Pay integrations with Adyen

---

### Ezzing Solar — Photovoltaic Solar Energy Startup

**Backend Developer, Jan 2016 – Oct 2016 (~10 months)**

- Fast-paced startup, meaningful mission
- CRM with REST API using Laravel/PHP

---

### h4ckademy — Bootcamp & Open Source Project

**Backend Developer, Oct 2015 – Dec 2015 (~3 months)**

- Google Campus Madrid, learning by doing
- Open source project: Pistonify (Node.js API consumption engine)

---

## 3. Total Experience

- **~10.5 years** (Oct 2015 – present, Feb 2026)
- The website says "9 years" — **must be updated to 10+**

---

## 4. Technical Skills (Current, Verified)

### Frontend (Primary strength)

- **React 19**, TypeScript 5.x, Next.js
- **TanStack** (Query v5, Router)
- **Tailwind CSS**, NativeWind, ShadCN/RadixUI, Styled Components
- Vite, Vitest, MSW (Mock Service Worker)
- React-Hook-Form, Zod validation
- Storybook, ESLint, Prettier
- i18n (Tolgee), analytics (PostHog)
- Accessibility (A11y)

### Mobile

- **React Native 0.81**, Expo SDK 54, Expo Router
- NativeWind (Tailwind for RN)
- WatermelonDB (offline-first)
- expo-camera, expo-auth-session, expo-secure-store
- EAS Build/Submit, Maestro E2E testing

### Backend

- **Node.js**, Python, PHP (Laravel), Kotlin (exposure)
- REST APIs, gRPC, tRPC
- PostgreSQL, Redis, RabbitMQ, DynamoDB, Kafka, Celery
- Hexagonal Architecture, Event-Driven Architecture, DDD

### Infrastructure & DevOps

- **AWS**: CDK, ECS Fargate, S3, CloudFront, Lambda, ECR
- Terraform, Docker, Kubernetes
- **CI/CD**: GitHub Actions (advanced — affected-based filtering, reusable workflows, parallel jobs), Jenkins, CircleCI
- Git (advanced), trunk-based development

### Architecture & Patterns

- Monorepo (TurboRepo) — built from scratch twice (Merlyn Mind + Ctaima)
- Design systems / component libraries
- Offline-first mobile architecture
- OpenAPI client generation pipelines
- BFF patterns (and knowing when to remove them)

### AI & Tooling

- Claude Code, GitHub Copilot, ChatGPT
- AI-assisted development workflows (skills, ADR automation)
- Built an incident investigation agent (Claude Code + PagerDuty)

### Methodologies

- TDD/BDD, Agile, eXtreme Programming
- Pair programming, mentoring
- Product-minded engineering
- Software Craftsmanship

---

## 5. Personal Projects (from GitHub)

| Project                    | Tech                                        | Description                                                             |
| -------------------------- | ------------------------------------------- | ----------------------------------------------------------------------- |
| bitcoin-game               | TypeScript                                  | Bitcoin-related game (recent, 2025)                                     |
| madridpublictransportcard  | React, TypeScript, Hooks, Styled Components | Track Madrid transport card expiry, save to calendar. Hosted on Netlify |
| madridtransportcard        | Node.js                                     | API server for Madrid Transport Card                                    |
| Pistonify                  | JavaScript                                  | Engine for consuming APIs (h4ckademy open source project)               |
| property_based_testing_poc | Python                                      | Property-based testing proof of concept                                 |
| sesame_autochecker         | JavaScript                                  | Automation tool                                                         |
| userscripts                | JavaScript                                  | Greasemonkey/Tampermonkey personal userscripts                          |

### Open Source Contributions (forks with commits)

- **mamba** — Python BDD testing framework
- **expects** — Python TDD/BDD assertion library
- **consul** — Open Government and E-Participation (Ruby)
- **react-native-calendars** — React Native calendar components

---

## 6. Website Audit (danibaena.com)

### Current State

- Static HTML site, minimalist design, hosted likely on Netlify
- Pages: Home, CV Resume (PDF download), Pet Projects, Photography (Flickr link), Contact, Credits
- Built with basic HTML/CSS — no framework

### What's Wrong

**Content gaps:**

| Issue                                      | Fix                                                                                       |
| ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| Missing Ctaima/Twind role entirely         | Add as current role — it's 1 year of Staff-level work                                     |
| "9 years experience"                       | Update to "10+ years"                                                                     |
| Title "Staff Full Stack Developer" on site | Align with CV: "Staff Software Engineer" (or pick a target: "Staff Frontend Engineer")    |
| Skills list outdated                       | No React Native, Expo, TanStack, Tailwind, NativeWind, Zod, PostHog, Tolgee, EAS, Maestro |
| Still lists React 16+                      | Should be React 19                                                                        |
| Pet projects page shows only 1 project     | Add bitcoin-game, Pistonify, property-based testing, open source contributions            |
| CV is a PDF link only                      | Should also be an HTML page for SEO/scannability                                          |
| No mention of mobile development           | Built an entire RN app — should be prominent                                              |
| No mention of monorepo expertise           | Built monorepos from scratch at 2 companies                                               |
| No mention of AI tooling                   | Built an incident agent, uses Claude Code professionally                                  |

**Missing sections entirely:**

1. **Blog / Writing** — For staff+ roles, written communication is a strong signal. Even 2-3 posts on architecture decisions, offline-first patterns, or monorepo setup would differentiate
2. **"What I've Built" portfolio** — Should showcase: TwindWeb (monorepo + design system), TwindMobile (offline-first RN app), Merlyn Mind products (AI classroom tools), Eventbrite features (Urgency Signals, Event Collections)
3. **Current tech stack / radar** — Show what's in active use NOW, not a flat historical list
4. **Open source section** — mamba, expects, consul, react-native-calendars contributions are invisible

**Design/UX issues:**

- Photography goes to external Flickr — feels disconnected
- Credits page is dead weight
- No dark mode (minor but expected for dev portfolios in 2026)
- Static HTML makes iteration slow

---

## 7. CV Resume Update Instructions

### Current CV Problems

1. **Missing current role** (Ctaima/Twind, Feb 2025 – Present)
2. **Skills section is buried** at the bottom as "Technical Extras" — should be more prominent
3. **No education section** visible
4. **Technologies in Alea role** list raw tech without context of what was built
5. **Career Goals section** is generic — could be cut to make room for the missing role
6. **Hobbies section** takes prime real estate

### Recommended CV Structure

```
DANIEL BAENA
Staff Software Engineer | 10+ years

CONTACT | LINKS

WORK EXPERIENCE (reverse chronological)

1. Ctaima — SaaS Contractor Access Control (Feb 2025 – Present)
   Staff Software Engineer
   - Architected a React monorepo (3 apps, shared packages, design system) — 230+ PRs
   - Built a React Native mobile app from zero to App Store/Play Store with offline-first sync
   - Set up CI/CD with GitHub Actions: affected-based testing, automated API client generation, EAS deployment
   - Created component library with Storybook, established i18n infrastructure (Tolgee)

2. Merlyn Mind — EdTech AI (Sep 2023 – Feb 2025)
   Staff Frontend Software Engineer
   [keep existing bullets, they're good]

3. Eventbrite (Jul 2021 – Sep 2023)
   Senior Software Engineer
   [keep existing bullets, they're good]

4. Alea Soluciones (Apr 2018 – Jul 2021)
   Senior Full Stack Developer
   [keep but add context: what was built, not just tech list]

5. Machiina (Oct 2016 – Mar 2018)
   Senior Full Stack Developer
   [keep as-is, compact]

6. Ezzing Solar (Jan 2016 – Oct 2016)
   Backend Developer
   [one line is fine]

7. h4ckademy (Oct 2015 – Dec 2015)
   [one line is fine]

TECHNICAL SKILLS (reorganized)
   Frontend: React 19, TypeScript, TanStack (Query/Router), Tailwind, ShadCN, Vite, Storybook
   Mobile: React Native, Expo, NativeWind, WatermelonDB, EAS
   Backend: Node.js, Python, gRPC, REST, PostgreSQL, Redis, RabbitMQ
   Infra: AWS (CDK, ECS, Lambda, S3, CloudFront), Docker, Terraform, GitHub Actions
   Practices: TDD, Monorepo (TurboRepo), Design Systems, Pair Programming, Mentoring

CORE STRENGTHS [keep but condense to 4-5 items]

HOBBIES [reduce to one line or remove to fit the missing role]
```

---

## 8. Positioning Strategy

### For Staff Frontend Engineer roles

Lead with:

1. Built design systems + component libraries used across monorepo apps (twice — Merlyn Mind + Ctaima)
2. Architected a React Native mobile app from scratch with offline-first sync
3. Owned 230+ PRs in 9 months — full product ownership
4. Previous Staff at AI company (Merlyn Mind) + Senior at Eventbrite (global scale, Tier 1 services)

### For Full Stack roles

Add: 5. Backend experience: gRPC migration at Eventbrite, Python services at Alea, Laravel at Ezzing/Machiina 6. AWS infrastructure: CDK, ECS Fargate, Lambda, CloudFront 7. Database breadth: PostgreSQL, Redis, RabbitMQ, DynamoDB, WatermelonDB

### Differentiator

Most frontend staff engineers can't set up CDK infrastructure, build EAS deployment pipelines, or architect offline-first mobile apps. Daniel goes from Figma design tokens all the way down to CloudFront cache invalidation. That full vertical ownership is rare and valuable.

---

## 9. Key Numbers (for résumé/interviews)

- **10+ years** professional experience
- **240 PRs** in 9 months at current role
- **284+ commits** across web and mobile products
- **3 apps** in a monorepo (admin, contractor management, public onboarding)
- **1 mobile app** from zero to App Store + Play Store
- **14 E2E tests**, **21 unit tests** for mobile (growing)
- **Tier 1 service ownership** at Eventbrite (200 req/s)
- **1% CTR lift** from Urgency Signals feature at Eventbrite
- **2 monorepos built from scratch** (Merlyn Mind + Ctaima)
- **2 design systems** created with Storybook
