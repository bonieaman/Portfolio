import { projectScreenshots } from "@/content/project-media";
import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "berenda",
    title: "Berenda",
    subtitle: "Property discovery and rental marketplace",
    description:
      "I'm building Berenda to improve how people discover, evaluate, and connect with rental properties.",
    year: "2025 \u2013 Present",
    role: "Founder / Full-Stack Software Engineer",
    status: "Active / In Development",
    featured: true,
    priority: 1,
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Neon",
      "Vercel",
      "Render",
      "Google authentication",
      "OCR workflows"
    ],
    problem:
      "Rental discovery is often fragmented across inconsistent listings, unclear location context, limited trust signals, and manual coordination between renters and property managers.",
    solution:
      "I designed Berenda around searchable property listings, ranking and suggestions, user accounts, identity verification, messaging, notifications, profiles, amenities, and production-ready deployment boundaries.",
    contributions: [
      "I designed and built the marketplace product structure for discovery, listing management, profiles, messaging, notifications, and verification-aware account flows.",
      "I implemented full-stack application features across React, TypeScript, Node.js, Express, Prisma, and PostgreSQL.",
      "I built discovery features including fuzzy search, search ranking, location suggestions, integer bedroom handling, amenities, and structured property metadata.",
      "I integrated password authentication, Google authentication, Ethiopian phone-number normalization, Digital ID verification, OCR-assisted Digital ID processing, legal agreement handling, and email OTP verification.",
      "I managed production-oriented deployment work across Vercel, Render, Neon, environment configuration, and Prisma database migrations."
    ],
    keyFeatures: [
      "Property listing system",
      "Property discovery",
      "Fuzzy search",
      "Search ranking",
      "Location suggestions",
      "Integer bedroom handling",
      "Property amenities",
      "Direct messaging",
      "Profile names and profile photos in messaging",
      "Notification indicators",
      "Password authentication",
      "Google authentication",
      "Digital ID verification",
      "OCR-assisted Digital ID processing",
      "Ethiopian phone normalization",
      "Email OTP verification",
      "Frontend deployment on Vercel",
      "Backend deployment on Render",
      "PostgreSQL database on Neon",
      "Prisma migrations"
    ],
    challenges: [
      {
        title: "Authentication and verification migration",
        context:
          "I needed Berenda to introduce stronger verification for new registrations while preserving access for existing users.",
        approach:
          "I separated legacy access from new account creation requirements. New password registrations collect Ethiopian phone information, password and confirmation, legal agreement acceptance, Digital ID verification, and email OTP verification before account creation."
      },
      {
        title: "Digital ID verification",
        context:
          "Digital ID capture and OCR-assisted processing introduce privacy, validation, and uncertain-result states that need careful product handling.",
        approach:
          "I treat verification as a registration workflow rather than a single upload field. The system supports Digital ID processing without claiming that OCR or identity checks are perfect or fraud-proof."
      },
      {
        title: "Search and discovery",
        context:
          "Renters need useful results even when search terms, location names, and listing metadata do not match perfectly.",
        approach:
          "I use fuzzy matching, search ranking, and location suggestions to make property discovery more forgiving while structured fields such as bedrooms and amenities keep results useful for filtering and comparison."
      },
      {
        title: "Production database evolution",
        context:
          "A marketplace schema changes as listings, users, messages, verification states, and notifications mature.",
        approach:
          "I use Prisma and PostgreSQL migrations to evolve the database without relying on destructive resets once production records matter."
      }
    ],
    decisions: [
      "I chose a conventional, deployable stack: React and TypeScript for the frontend, Node.js and Express for API behavior, Prisma for database access, and PostgreSQL on Neon.",
      "I kept identity verification integrated with registration state so verification requirements can evolve without silently breaking existing user access.",
      "I separated deployment concerns across Vercel for the frontend, Render for backend services, and Neon for managed PostgreSQL."
    ],
    results: [
      {
        label: "Product scope",
        value:
          "I'm actively developing marketplace features across search, authentication, Digital ID verification, messaging, notifications, property management, database migrations, and production deployment."
      },
      {
        label: "Engineering outcome",
        value:
          "I built a cohesive full-stack product architecture that connects renter-facing discovery, account workflows, and property-management operations."
      }
    ],
    screenshots: projectScreenshots.berenda,
    architecture: [
      {
        id: "frontend",
        title: "Frontend",
        description: "React and TypeScript product interface deployed on Vercel",
        technologies: ["React", "TypeScript", "Vercel"],
        branches: [{ label: "requests", target: "api" }]
      },
      {
        id: "api",
        title: "REST API",
        description: "Node.js and Express application layer",
        technologies: ["Node.js", "Express", "Render"],
        branches: [
          { label: "data access", target: "orm" },
          { label: "auth", target: "auth" },
          { label: "verification", target: "ocr" }
        ]
      },
      {
        id: "orm",
        title: "Prisma",
        description: "Typed database access and schema migrations",
        technologies: ["Prisma"],
        branches: [{ label: "queries", target: "database" }]
      },
      {
        id: "database",
        title: "PostgreSQL / Neon",
        description: "Relational data for listings, users, messages, notifications, and verification states",
        technologies: ["PostgreSQL", "Neon"]
      },
      {
        id: "auth",
        title: "Authentication",
        description: "Password, Google authentication, legal agreement, and email OTP flows",
        technologies: ["Password auth", "Google auth", "Email OTP"]
      },
      {
        id: "ocr",
        title: "Digital ID Processing",
        description: "OCR-assisted Digital ID verification workflow",
        technologies: ["OCR", "Digital ID"]
      }
    ],
    lessons: [
      "Search quality is product quality; fuzzy matching and ranking decisions change how trustworthy a marketplace feels.",
      "Identity verification needs careful user-state design, not just backend validation.",
      "Database migrations become product work once users and listings depend on existing records."
    ],
    searchTerms: [
      "rental marketplace",
      "property search",
      "fuzzy search",
      "search ranking",
      "location suggestions",
      "authentication",
      "google authentication",
      "digital id",
      "ocr",
      "ethiopian phone normalization",
      "postgresql",
      "prisma",
      "neon",
      "vercel",
      "render",
      "migrations",
      "messaging"
    ]
  },
  {
    slug: "youth-camp-admin-system",
    title: "Youth Camp Admin System",
    subtitle: "Operational registration, QR identification, attendance, meals, and reporting",
    description:
      "I built and deployed a centralized administrative system for the July 2026 Youth Camp to manage registration, participant IDs, QR check-in, attendance, meals, teams, role-based administration, reporting, and certificate eligibility.",
    year: "July 2026",
    role: "Full-Stack Developer / System Designer",
    status: "Built and used in 2026",
    featured: true,
    priority: 2,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Neon",
      "Vercel",
      "QR workflows",
      "Role-based access"
    ],
    problem:
      "Managing registration, attendance, meals, participant identification, teams, and reporting manually during a multi-day event creates administrative overhead and makes duplicate records or inaccurate counts more likely.",
    solution:
      "I centralized camp operations around a clear workflow: registration to participant ID, QR identification, check-in, attendance, meal scanning, team assignment, and reporting.",
    contributions: [
      "I designed the operational data model for participants, participant IDs, attendance sessions, meal scans, teams, outreach groups, digital evangelism groups, roles, reports, and certificate eligibility.",
      "I built administrative workflows for QR-based identification, check-in, morning and afternoon attendance, breakfast, lunch, and dinner scanning.",
      "I implemented role-based administration for SuperAdmin, MealAdmin, and AttendanceAdmin responsibilities.",
      "I connected the system to PostgreSQL with Prisma and Neon, with Vercel deployment for the application."
    ],
    keyFeatures: [
      "Participant registration",
      "Participant IDs",
      "QR-code identification",
      "Check-in",
      "Attendance scanning",
      "Morning and afternoon attendance",
      "Meal tracking",
      "Breakfast, lunch, and dinner scanning",
      "Team assignment",
      "Outreach team tracking",
      "Digital evangelism team tracking",
      "Role-based administration",
      "SuperAdmin, MealAdmin, and AttendanceAdmin roles",
      "Reporting",
      "Certificate eligibility calculations",
      "PostgreSQL database",
      "Prisma",
      "Neon",
      "Next.js",
      "Vercel"
    ],
    challenges: [
      {
        title: "Replacing manual event administration",
        context:
          "A multi-day camp with more than 100 participants needs reliable records across registration, attendance, meals, teams, and eligibility.",
        approach:
          "I turned camp operations into a single administrative workflow, reducing repeated manual entry and making records easier to review during the event."
      },
      {
        title: "QR-based participant identification",
        context:
          "Administrators need to identify participants quickly while keeping check-in, attendance, meal, and team records aligned.",
        approach:
          "I connected participant IDs and QR scanning back to the same participant record instead of maintaining separate manual lists."
      },
      {
        title: "Role-based administration",
        context:
          "Different staff members need focused access for meals, attendance, and overall administration.",
        approach:
          "I separated responsibilities across SuperAdmin, MealAdmin, and AttendanceAdmin roles while keeping the underlying data model consistent."
      }
    ],
    decisions: [
      "I modeled the workflow around participant records so registration, QR identity, attendance, meals, teams, and reports share one source of truth.",
      "I separated admin roles by responsibility to keep the interface focused during real event operations.",
      "I used PostgreSQL, Prisma, Neon, Next.js, and Vercel to keep the system deployable and maintainable."
    ],
    results: [
      {
        label: "Operational use",
        value:
          "I built and deployed the system for the 2026 Youth Camp, supporting a real multi-day event with more than 100 participants."
      },
      {
        label: "Workflow outcome",
        value:
          "I centralized participant registration, QR identification, attendance, meals, teams, reporting, and certificate eligibility in one administrative system."
      }
    ],
    screenshots: projectScreenshots.youthCampAdmin,
    architecture: [
      {
        id: "admin-ui",
        title: "Admin Interface",
        description: "Registration, scanning, team, meal, attendance, and reporting surfaces",
        technologies: ["Next.js", "React", "TypeScript", "Vercel"],
        branches: [{ label: "actions", target: "api" }]
      },
      {
        id: "api",
        title: "Application Workflows",
        description: "Participant, QR, attendance, meal, team, role, and eligibility operations",
        technologies: ["Server-side application logic", "Role-based access"],
        branches: [
          { label: "records", target: "database" },
          { label: "identifies", target: "qr" }
        ]
      },
      {
        id: "database",
        title: "PostgreSQL / Neon",
        description: "Single source of truth for participants and operational event records",
        technologies: ["PostgreSQL", "Neon", "Prisma"]
      },
      {
        id: "qr",
        title: "QR Identification",
        description: "Participant lookup for check-in, attendance, meals, and teams",
        technologies: ["QR workflows"]
      },
      {
        id: "roles",
        title: "Admin Roles",
        description: "SuperAdmin, MealAdmin, and AttendanceAdmin responsibility boundaries",
        technologies: ["Authorization"]
      }
    ],
    lessons: [
      "I learned that operational software succeeds when it reduces reconciliation work for the people running the event.",
      "QR identification is most useful when it connects several workflows to the same participant record.",
      "Role-based interfaces help staff move faster during live operations."
    ],
    searchTerms: [
      "qr",
      "attendance",
      "registration",
      "admin",
      "meal scanning",
      "teams",
      "outreach",
      "digital evangelism",
      "certificate eligibility",
      "postgresql",
      "prisma",
      "neon",
      "next.js",
      "vercel"
    ]
  },
  {
    slug: "youth-camp-information-website",
    title: "Youth Camp Information Website",
    subtitle: "Public event website for camp information, registration, and gallery content",
    description:
      "I built the public-facing information website for the 2026 Youth Camp separately from the operational admin system, helping attendees and prospective participants understand the event, program, speakers, activities, rules, facilities, gallery, and registration path.",
    year: "2026",
    role: "Frontend Developer / Product Builder",
    status: "Built for 2026 Youth Camp",
    featured: true,
    priority: 3,
    technologies: ["React", "TypeScript", "Vite", "Vercel", "Vercel Blob"],
    problem:
      "Attendees and prospective participants needed a clear public source for camp details, program information, registration, rules, facilities, speakers, outreach, digital activities, and gallery content.",
    solution:
      "I created a responsive public website for the camp overview, themes, speakers, outreach and digital evangelism information, camp-life details, rules, facilities, gallery, and registration link.",
    contributions: [
      "I built a separate public-facing product experience from the operational admin dashboard.",
      "I created responsive sections for camp overview, program, themes, speakers, outreach, digital activities, rules, facilities, gallery, and registration.",
      "I implemented an image gallery with categories and upload workflow, with Vercel deployment and Vercel Blob-backed gallery functionality where appropriate."
    ],
    keyFeatures: [
      "Camp information",
      "Program information",
      "Themes",
      "Speakers",
      "Outreach information",
      "Digital evangelism information",
      "Camp rules",
      "Facilities",
      "Gallery",
      "Registration link",
      "Responsive layout",
      "Image gallery with categories",
      "Gallery upload system",
      "Vercel deployment",
      "Vercel Blob-backed gallery functionality"
    ],
    challenges: [
      {
        title: "Separating public information from operations",
        context:
          "I needed the public website and the admin dashboard to serve different audiences without feeling like the same product.",
        approach:
          "I focused the public site on attendee comprehension, registration, program details, and camp-life content, while the admin system focuses on operational records and scanning workflows."
      },
      {
        title: "Gallery organization",
        context:
          "Camp media needs to be useful for visitors without turning the site into an unstructured image dump.",
        approach:
          "I used categorized gallery views and an upload flow to keep camp-life content organized and easy to browse."
      }
    ],
    decisions: [
      "I used React, TypeScript, and Vite for a fast public-facing UI that could be deployed to Vercel.",
      "I kept registration as a clear public action while using the site primarily to explain the event and help participants prepare.",
      "I treated the gallery as a content system with categories rather than a static collection of images."
    ],
    results: [
      {
        label: "Product role",
        value:
          "I delivered the public information and registration-facing website for the 2026 Youth Camp."
      },
      {
        label: "Audience separation",
        value:
          "I kept attendee-facing information separate from the operational admin dashboard used by staff."
      }
    ],
    screenshots: projectScreenshots.youthCampInfo,
    architecture: [
      {
        id: "public-ui",
        title: "Public Website",
        description: "Responsive attendee-facing React and TypeScript interface",
        technologies: ["React", "TypeScript", "Vite"],
        branches: [
          { label: "registration", target: "registration" },
          { label: "media", target: "gallery" }
        ]
      },
      {
        id: "registration",
        title: "Registration Link",
        description: "Entry point for participant registration",
        technologies: ["Public registration flow"]
      },
      {
        id: "gallery",
        title: "Gallery System",
        description: "Categorized image gallery and upload workflow",
        technologies: ["Vercel Blob", "Gallery categories"]
      },
      {
        id: "hosting",
        title: "Vercel Deployment",
        description: "Public deployment for the information site",
        technologies: ["Vercel"]
      }
    ],
    lessons: [
      "I learned that public event websites need a different UX from internal operations software.",
      "Clear information architecture makes registration and event preparation easier for visitors.",
      "Gallery content benefits from categories and upload structure early."
    ],
    searchTerms: [
      "youth camp",
      "public website",
      "registration",
      "gallery",
      "vercel blob",
      "react",
      "typescript",
      "vite",
      "program",
      "speakers",
      "responsive"
    ]
  }
];

export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => a.priority - b.priority);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const ordered = [...projects].sort((a, b) => a.priority - b.priority);
  const index = ordered.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return ordered[0];
  }
  return ordered[(index + 1) % ordered.length];
}
