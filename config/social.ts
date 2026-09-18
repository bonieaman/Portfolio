import { BriefcaseBusiness, Code, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { SocialLink } from "@/lib/types";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    handle: "bonieaman",
    href: "https://github.com/bonieaman",
    icon: Code,
    isPlaceholder: false
  },
  {
    label: "LinkedIn",
    handle: "Nabon Amanuel",
    href: "https://www.linkedin.com/in/nabon-amanuel-a54aa6248/",
    icon: BriefcaseBusiness,
    isPlaceholder: false
  },
  {
    label: "Email",
    handle: siteConfig.contactEmail,
    href: `mailto:${siteConfig.contactEmail}`,
    icon: Mail,
    isPlaceholder: false
  }
];

export const visibleSocialLinks = socialLinks.filter(
  (link) => link.href && !link.isPlaceholder
);
