export interface Experience {
  company: string;
  industry: string;
  role: string;
  period: string;
  image: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "Ctaima / Twind",
    industry: "SaaS for Contractor Access Control",
    role: "Staff Frontend Engineer",
    period: "Feb 2025 – Present",
    image: "/images/experience/saas-platform.jpg",
    highlights: [
      "Architected a React monorepo (3 apps, shared packages, design system) — 230+ PRs in 9 months",
      "Built a React Native mobile app from zero to App Store/Play Store with offline-first sync and QR scanning",
      "Set up CI/CD with GitHub Actions: affected-based testing, automated OpenAPI client generation, EAS deployment",
      "Created component library with Storybook, established i18n infrastructure with Tolgee",
      "Owned codebase health: audits, test consolidation, shared hooks, bundle optimization",
    ],
  },
  {
    company: "Merlyn Mind",
    industry: "EdTech AI Assistant for Classrooms",
    role: "Staff Frontend Software Engineer",
    period: "Sep 2023 – Feb 2025",
    image: "/images/experience/edu-ai.jpg",
    highlights: [
      "Developed products from scratch: chatbot for classrooms, Kahoot-like tools for teachers and students",
      "Actively involved with Product and Design from early stages — technical breakdowns, estimations, launch management",
      "Built a monorepo for shared packages using TurboRepo, hosted npm packages in ECR",
      "Migrated a BFF (tRPC) to AWS Lambda, refactored into SPA to reduce overengineering",
      "Mentored engineers on best practices",
    ],
  },
  {
    company: "Eventbrite",
    industry: "Real Life & Online Events Marketplace",
    role: "Senior Software Engineer",
    period: "Jul 2021 – Sep 2023",
    image: "/images/experience/events.jpg",
    highlights: [
      "Large-scale challenges with worldwide reach",
      "Owned several services including Tier 1 (200 req/s endpoint)",
      "Migrated a service from legacy to gRPC, hosted in a TLZ within AWS using ECS Fargate",
      "Implemented backend for Urgency Signals & Highlights — raised revenue, CTR up 1%",
      "Developed Event Collections on the frontend, owning several apps and libraries using React",
    ],
  },
  {
    company: "Alea Soluciones",
    industry: "Fiber Optics Networks",
    role: "Senior Full Stack Developer",
    period: "Apr 2018 – Jul 2021",
    image: "/images/experience/fiber_optics.jpg",
    highlights: [
      "Software Craftsmanship: Python, Docker, Jenkins, React, Redis, PostgreSQL, RabbitMQ",
      "TDD, Agile and eXtreme Programming done right",
      "Distributed systems, Event Driven Architecture, Hexagonal Architecture",
      "Product and ownership mindset, self-organized team",
    ],
  },
  {
    company: "Machiina",
    industry: "Product & Service Design Agency",
    role: "Senior Full Stack Developer",
    period: "Oct 2016 – Mar 2018",
    image: "/images/experience/product_design.jpg",
    highlights: [
      "Implemented Carrefour e-Commerce frontends (Supermercado & Bodega)",
      "Created internal tooling for A11y, minification, cross-browser, linting",
      "Implemented Credit Card & Apple Pay integrations with Adyen",
    ],
  },
  {
    company: "Ezzing Solar",
    industry: "Photovoltaic Solar Energy Startup",
    role: "Backend Developer",
    period: "Jan 2016 – Oct 2016",
    image: "/images/experience/photovoltaic.jpg",
    highlights: [
      "Fast-paced startup environment with a meaningful mission",
      "Developed new features over a CRM with a REST API using Laravel",
    ],
  },
  {
    company: "h4ckademy",
    industry: "Bootcamp & Open Source Project",
    role: "Backend Developer",
    period: "Oct 2015 – Dec 2015",
    image: "/images/experience/bootcamp.jpg",
    highlights: [
      "Held at Google Campus Madrid with the goal of learning by doing",
      "Developed an open source project in Node.js called Pistonify",
    ],
  },
];
