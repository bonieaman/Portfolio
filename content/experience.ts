import type { Experience } from "@/lib/types";

export const experienceEntries: Experience[] = [
  {
    id: "berenda-founder-software-engineer",
    organization: "Berenda",
    position: "Founder / Software Engineer",
    period: "2025 \u2013 Present",
    context: "Startup / Product Development",
    category: "software",
    description:
      "I'm building Berenda, a property discovery and rental marketplace, while working across product design, frontend development, backend systems, databases, authentication, infrastructure, and deployment.",
    achievements: [
      "Designed and developed the platform across frontend and backend systems.",
      "Built property listing, discovery, fuzzy search, ranking, location suggestions, and property-management functionality.",
      "Developed authentication flows involving password authentication, Google authentication, email OTP verification, and Ethiopian phone-number handling.",
      "Integrated Digital ID verification and OCR-assisted identity processing into new-user registration.",
      "Built user messaging, profile integration, and notification functionality.",
      "Designed and maintained PostgreSQL and Prisma database infrastructure.",
      "Managed schema changes and production database migrations.",
      "Deployed and maintained frontend and backend services using platforms such as Vercel, Render, and Neon.",
      "Worked on the product from requirements and UX decisions through implementation, debugging, deployment, and production improvements."
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Neon",
      "REST APIs",
      "Gemini API",
      "OCR",
      "Vercel",
      "Render",
      "Git",
      "GitHub"
    ],
    projectSlug: "berenda",
    ctaLabel: "View Berenda Case Study",
    visible: true
  },
  {
    id: "youth-camp-management-system-volunteer-engineer",
    organization: "Youth Camp Management System",
    position: "Volunteer Software Engineer",
    period: "2026",
    context: "Volunteer Project / Event Operations",
    category: "software",
    description:
      "I designed and built a digital administration system used to support the operations of a 10-day youth camp with more than 100 participants.",
    achievements: [
      "Built participant registration and management functionality.",
      "Created unique participant identification and QR-based workflows.",
      "Developed participant check-in.",
      "Built morning and afternoon attendance tracking.",
      "Developed breakfast, lunch, and dinner meal tracking.",
      "Implemented duplicate-scan prevention.",
      "Built team assignment and participant organization functionality.",
      "Supported outreach and digital evangelism team tracking.",
      "Implemented role-based administration for SuperAdmin, MealAdmin, and AttendanceAdmin responsibilities.",
      "Created reporting and attendance-percentage functionality.",
      "Implemented certificate-eligibility calculations based on attendance.",
      "Designed the system around real event workflows and operational requirements.",
      "Deployed the system for actual camp operations."
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Neon",
      "Vercel",
      "QR-based workflows",
      "REST/API functionality"
    ],
    projectSlug: "youth-camp-admin-system",
    ctaLabel: "View Case Study",
    visible: true
  },
  {
    id: "youth-camp-information-website-volunteer-engineer",
    organization: "Youth Camp Information Website",
    position: "Volunteer Software Engineer",
    period: "2026",
    context: "Volunteer Project / Public Web Platform",
    category: "software",
    description:
      "I designed and developed the public-facing website for the 2026 youth camp, giving participants and prospective attendees a centralized place for program and event information.",
    achievements: [
      "Developed the responsive public website.",
      "Created sections for camp information, themes, speakers, outreach, digital activities, rules, facilities, and camp life.",
      "Integrated the external registration workflow.",
      "Developed the public image gallery.",
      "Implemented gallery categories and fullscreen image viewing.",
      "Built gallery upload functionality.",
      "Integrated Vercel Blob storage for gallery media.",
      "Designed the site for both desktop and mobile visitors.",
      "Deployed the application using Vercel."
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Vercel",
      "Vercel Blob",
      "API routes/endpoints",
      "HTML",
      "CSS"
    ],
    projectSlug: "youth-camp-information-website",
    ctaLabel: "View Case Study",
    visible: true
  },
  {
    id: "filwuha-choir-leader",
    organization: "Filwuha Seventh-day Adventist Church",
    position: "Choir Leader",
    context: "Volunteer Leadership",
    category: "leadership",
    description:
      "As a choir leader, I coordinate and mentor young members while fostering teamwork, collaboration, discipline, mentorship, and shared responsibility.",
    achievements: [
      "Lead and coordinate young team members.",
      "Organize rehearsals, programs, and performances.",
      "Foster teamwork and collaboration.",
      "Mentor younger members and develop future leaders.",
      "Coordinate people with different responsibilities and skill levels.",
      "Support youth organization and program planning.",
      "Strengthen communication, accountability, and teamwork."
    ],
    visible: true
  }
];

export const visibleExperienceEntries = experienceEntries.filter(
  (entry) => entry.visible
);

export const softwareExperienceEntries = visibleExperienceEntries.filter(
  (entry) => entry.category === "software"
);

export const leadershipExperienceEntries = visibleExperienceEntries.filter(
  (entry) => entry.category === "leadership"
);
