export interface SkillCategory {
  title: string;
  icon: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "layout",
    items: [
      "React 19, TypeScript 5.x",
      "TanStack (Query v5, Router)",
      "Tailwind CSS, ShadCN/RadixUI",
      "Next.js, Vite, Vitest, MSW",
      "React-Hook-Form, Zod",
      "Storybook, ESLint, Prettier",
      "Accessibility (A11y)",
    ],
  },
  {
    title: "Mobile",
    icon: "smartphone",
    items: [
      "React Native 0.81, Expo SDK 54",
      "NativeWind (Tailwind for RN)",
      "Expo Router, expo-camera",
      "WatermelonDB (offline-first)",
      "EAS Build/Submit",
      "Maestro E2E testing",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    items: [
      "Node.js, Python, PHP (Laravel)",
      "REST APIs, gRPC, tRPC",
      "PostgreSQL, Redis, DynamoDB",
      "RabbitMQ, Kafka, Celery",
      "Hexagonal Architecture",
      "Event-Driven Architecture, DDD",
    ],
  },
  {
    title: "Infrastructure & DevOps",
    icon: "cloud",
    items: [
      "AWS: CDK, ECS Fargate, S3, CloudFront, Lambda",
      "Docker, Kubernetes, Terraform",
      "GitHub Actions (advanced CI/CD)",
      "Jenkins, CircleCI",
      "Git, trunk-based development",
    ],
  },
  {
    title: "Architecture & Patterns",
    icon: "blocks",
    items: [
      "Monorepo architecture (TurboRepo)",
      "Design systems & component libraries",
      "Offline-first mobile architecture",
      "OpenAPI client generation pipelines",
      "BFF patterns",
    ],
  },
  {
    title: "Methodologies & AI",
    icon: "sparkles",
    items: [
      "TDD/BDD, Agile, eXtreme Programming",
      "Pair programming, Mentoring",
      "Product-minded engineering",
      "Software Craftsmanship",
      "Claude Code, GitHub Copilot, ChatGPT",
      "AI-assisted development workflows",
    ],
  },
];
