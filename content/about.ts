import type { LeadershipItem } from "@/lib/types";

export const aboutContent = {
  intro:
    "I'm Nabon Amanuel, a software engineer focused on building useful digital products and solving real operational problems with software. I work across frontend interfaces, backend systems, databases, APIs, product development, and deployment.",
  philosophy:
    "My strongest work sits at the intersection of product thinking and reliable engineering. I focus on understanding the real workflow, designing a practical system around it, and shipping software that is maintainable after launch.",
  productBuilding:
    "Berenda is my clearest startup product example: a rental marketplace requiring property discovery, search, authentication, identity verification, messaging, profiles, notifications, database migrations, and production deployment choices.",
  leadership:
    "Outside software development, I lead and mentor young people through choir and community activities. That experience has strengthened how I communicate, organize teams, mentor others, and work toward shared goals.",
  interests:
    "I'm interested in full-stack product development, dependable backend systems, search and discovery experiences, and tools that solve real operational problems.",
  photo: {
    src: "/profile/nabon-amanuel.png",
    alt: "Portrait of Nabon Amanuel",
    isPlaceholder: false
  }
};

export const leadershipItems: LeadershipItem[] = [
  {
    title: "Product Ownership",
    description:
      "I frame software work around the user journey, operational constraints, data model, and what has to be true for the product to ship.",
    evidence: "I show this through my founder and product-builder role on Berenda."
  },
  {
    title: "Systems Thinking",
    description:
      "I connect frontend workflows, API behavior, database design, authentication, and deployment into one coherent product system.",
    evidence: "This shows up in my marketplace, search, verification, and migration work."
  },
  {
    title: "Choir Leadership",
    description:
      "As Choir Leader at Filwuha Seventh-day Adventist Church, I coordinate and mentor young members while fostering teamwork, collaboration, discipline, and shared responsibility.",
    evidence:
      "I organize rehearsals, programs, and performances, help develop younger leaders, and coordinate youth activities with people across different responsibilities and skill levels."
  }
];
