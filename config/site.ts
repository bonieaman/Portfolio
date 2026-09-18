import type { Availability, ResumeConfig } from "@/lib/types";

export const siteConfig = {
  name: "Nabon Amanuel",
  wordmark: "NABON.",
  title: "Software Engineer",
  headline: "I design, build, and ship digital products.",
  description:
    "I'm a software engineer working across frontend, backend, databases, APIs, deployment, and product development.",
  shortBio:
    "I build practical digital products across frontend, backend, databases, APIs, and deployment infrastructure.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "bonieaman3@gmail.com",
  githubUsername: process.env.GITHUB_USERNAME ?? "bonieaman",
  location: "",
  navItems: [
    { label: "Work", href: "/#work" },
    { label: "Experience", href: "/experience" },
    { label: "About", href: "/about" },
    { label: "Writing", href: "/writing" },
    { label: "Contact", href: "/contact" }
  ]
} as const;

export const availability: Availability = {
  enabled: true,
  status: "Available for opportunities",
  role: "Software Engineer",
  summary:
    "I'm open to software engineering, full-stack development, backend development, and product engineering opportunities.",
  focus: [
    "Software Engineering",
    "Full-Stack Development",
    "Backend Development",
    "Product Engineering"
  ],
  locations: ["Remote", "Relocation open"]
};

export const resumeConfig: ResumeConfig = {
  pdfPath: "/resume/nabon-amanuel-resume.pdf",
  fallbackPath: "/resume",
  fileName: "nabon-amanuel-resume.pdf"
};
