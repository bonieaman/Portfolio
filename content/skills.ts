import type { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    description: "Programming and markup languages used across product interfaces, APIs, tooling, and automation.",
    skills: [
      { name: "TypeScript", projectSlugs: ["berenda", "youth-camp-admin-system", "youth-camp-information-website"] },
      { name: "JavaScript", projectSlugs: ["berenda", "youth-camp-admin-system", "youth-camp-information-website"] },
      { name: "Python" },
      { name: "Go" },
      { name: "HTML", projectSlugs: ["youth-camp-information-website"] },
      { name: "CSS", projectSlugs: ["youth-camp-information-website"] }
    ]
  },
  {
    title: "Frontend",
    description: "Product interfaces, responsive systems, and accessible interaction design.",
    skills: [
      { name: "React", projectSlugs: ["berenda", "youth-camp-admin-system", "youth-camp-information-website"] },
      { name: "Next.js", projectSlugs: ["youth-camp-admin-system"] },
      { name: "Tailwind CSS" },
      { name: "HTML5", projectSlugs: ["youth-camp-information-website"] },
      { name: "CSS3", projectSlugs: ["youth-camp-information-website"] },
      { name: "Responsive web development", projectSlugs: ["berenda", "youth-camp-information-website"] }
    ]
  },
  {
    title: "Backend",
    description: "APIs, authentication, product workflows, and server-side validation.",
    skills: [
      { name: "Node.js", projectSlugs: ["berenda", "youth-camp-admin-system"] },
      { name: "Express", projectSlugs: ["berenda"] },
      { name: "REST APIs", projectSlugs: ["berenda"] },
      { name: "API design", projectSlugs: ["berenda", "youth-camp-admin-system"] },
      { name: "Authentication", projectSlugs: ["berenda"] },
      { name: "Authorization", projectSlugs: ["youth-camp-admin-system"] },
      { name: "Server-side application development", projectSlugs: ["berenda", "youth-camp-admin-system"] }
    ]
  },
  {
    title: "Databases",
    description: "Relational schemas, migrations, and production data modeling.",
    skills: [
      { name: "PostgreSQL", projectSlugs: ["berenda", "youth-camp-admin-system"] },
      { name: "Prisma", projectSlugs: ["berenda", "youth-camp-admin-system"] },
      { name: "Neon", projectSlugs: ["berenda"] },
      { name: "Supabase" }
    ]
  },
  {
    title: "Infrastructure / DevOps",
    description: "Deployment, version control, and environment-aware application setup.",
    skills: [
      { name: "Docker" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Vercel", projectSlugs: ["berenda", "youth-camp-admin-system", "youth-camp-information-website"] },
      { name: "Render", projectSlugs: ["berenda"] },
      { name: "Environment configuration", projectSlugs: ["berenda"] },
      { name: "Database migrations", projectSlugs: ["berenda", "youth-camp-admin-system"] }
    ]
  },
  {
    title: "AI / Integration",
    description: "Applied AI workflows and third-party integrations where they support the product.",
    skills: [
      { name: "Gemini API" },
      { name: "OCR workflows", projectSlugs: ["berenda"] },
      { name: "Google authentication", projectSlugs: ["berenda"] },
      { name: "Third-party APIs", projectSlugs: ["berenda"] },
      { name: "AI-assisted development" }
    ]
  }
];
