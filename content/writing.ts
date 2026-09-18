import type { Article } from "@/lib/types";

export const articles: Article[] = [
  {
    slug: "designing-digital-id-verification-rental-marketplace",
    title: "Designing Digital ID Verification for a Rental Marketplace",
    description:
      "A draft case note on registration, OCR, trust, privacy, and failure states in Berenda.",
    date: "Draft",
    readingTime: "Outline",
    tags: ["Identity", "OCR", "Marketplace"],
    status: "draft",
    sections: [
      {
        heading: "Working Thesis",
        body:
          "Digital ID verification is not a single upload step. It is a trust workflow that has to account for capture quality, OCR confidence, privacy, review states, and user recovery."
      },
      {
        heading: "To Add",
        body:
          "Replace this draft with verified implementation notes, provider choices, edge cases, and product decisions before publishing."
      }
    ]
  },
  {
    slug: "building-qr-based-attendance",
    title: "Building QR-Based Attendance for 100+ Participants",
    description:
      "A draft outline for writing about identity, check-in speed, duplicate handling, and reporting.",
    date: "Draft",
    readingTime: "Outline",
    tags: ["Operations", "QR", "Admin Tools"],
    status: "draft",
    sections: [
      {
        heading: "Working Thesis",
        body:
          "QR attendance systems are most useful when scanning is connected to registration, meals, teams, reporting, and eligibility instead of living as a separate check-in table."
      },
      {
        heading: "To Add",
        body:
          "Confirm participant counts, exact implementation details, and outcomes before publishing."
      }
    ]
  },
  {
    slug: "migrating-authentication-without-breaking-users",
    title: "Migrating Authentication Without Breaking Existing Users",
    description:
      "A draft note on introducing new verification requirements while preserving legitimate access.",
    date: "Draft",
    readingTime: "Outline",
    tags: ["Authentication", "Migration", "Product Engineering"],
    status: "draft",
    sections: [
      {
        heading: "Working Thesis",
        body:
          "Authentication migrations need a user-state model, clear gates, recovery paths, and observability before new requirements become mandatory."
      },
      {
        heading: "To Add",
        body:
          "Add the verified migration path, database states, and support process once the production implementation is documented."
      }
    ]
  },
  {
    slug: "deploying-react-node-postgresql-application",
    title: "Lessons From Deploying a React + Node + PostgreSQL Application",
    description:
      "A draft deployment case note covering frontend, backend, database, migrations, and environment management.",
    date: "Draft",
    readingTime: "Outline",
    tags: ["Deployment", "PostgreSQL", "Full Stack"],
    status: "draft",
    sections: [
      {
        heading: "Working Thesis",
        body:
          "Deployment quality comes from boring details: environment separation, migration discipline, API boundaries, build configuration, and rollback thinking."
      },
      {
        heading: "To Add",
        body:
          "Document the exact Vercel, Render, Neon, and Prisma production decisions after they are verified."
      }
    ]
  }
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
