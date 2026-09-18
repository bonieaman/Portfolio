import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export type ThemeMode = "light" | "dark" | "system";

export type ExternalLink = {
  label: string;
  href: string;
  isPlaceholder?: boolean;
};

export type SocialLink = {
  label: string;
  handle?: string;
  href: string;
  icon: ComponentType<LucideProps>;
  isPlaceholder?: boolean;
};

export type Availability = {
  enabled: boolean;
  status: string;
  role: string;
  summary: string;
  focus: string[];
  locations: string[];
};

export type ResumeConfig = {
  pdfPath: string;
  fallbackPath: string;
  fileName: string;
};

export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption?: string;
  kind: "desktop" | "mobile" | "mockup";
  isPlaceholder?: boolean;
};

export type ArchitectureConnection = {
  label: string;
  target: string;
};

export type ArchitectureLayer = {
  id: string;
  title: string;
  description: string;
  technologies?: string[];
  branches?: ArchitectureConnection[];
};

export type ProjectChallenge = {
  title: string;
  context: string;
  approach: string;
  openQuestions?: string[];
};

export type ProjectResult = {
  label: string;
  value: string;
  isPlaceholder?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  yearIsPlaceholder?: boolean;
  role: string;
  status: string;
  featured: boolean;
  priority: number;
  technologies: string[];
  problem: string;
  solution: string;
  contributions: string[];
  keyFeatures: string[];
  challenges: ProjectChallenge[];
  decisions: string[];
  results: ProjectResult[];
  screenshots: ProjectScreenshot[];
  liveUrl?: ExternalLink;
  githubUrl?: ExternalLink;
  architecture: ArchitectureLayer[];
  lessons: string[];
  searchTerms: string[];
};

export type Experience = {
  id: string;
  organization: string;
  position: string;
  period?: string;
  context: string;
  category: "software" | "leadership";
  description: string;
  achievements: string[];
  technologies?: string[];
  projectSlug?: string;
  projectUrl?: string;
  ctaLabel?: string;
  visible: boolean;
};

export type SkillCategory = {
  title: string;
  description: string;
  skills: {
    name: string;
    projectSlugs?: string[];
  }[];
};

export type LeadershipItem = {
  title: string;
  description: string;
  evidence?: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  status: "draft" | "published";
  sections: {
    heading: string;
    body: string;
  }[];
};

export type Testimonial = {
  name: string;
  role: string;
  organization: string;
  quote: string;
  avatar?: string;
};
