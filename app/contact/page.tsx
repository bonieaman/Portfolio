import type { Metadata } from "next";
import { BriefcaseBusiness, Code, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { visibleSocialLinks } from "@/config/social";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { isHttpUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} about software engineering, full-stack development, and product-building opportunities.`
};

const fallbackLinks = [
  { label: "GitHub", icon: Code },
  { label: "LinkedIn", icon: BriefcaseBusiness },
  { label: "Email", icon: Mail }
];

export default function ContactPage() {
  return (
    <Container className="py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Contact</p>
          <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
            Let&apos;s build something useful.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-muted-foreground">
            Reach out about engineering roles, product builds, full-stack systems, or a problem
            that needs a careful technical partner.
          </p>

          <div className="mt-10 grid gap-3">
            {visibleSocialLinks.length
              ? visibleSocialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={isHttpUrl(link.href) ? "_blank" : undefined}
                      rel={isHttpUrl(link.href) ? "noopener noreferrer" : undefined}
                      className="inline-flex w-fit items-center gap-3 rounded-md border border-border bg-card px-4 py-3 text-sm font-medium transition hover:border-accent hover:text-accent"
                    >
                      <Icon aria-hidden="true" size={17} />
                      {link.handle ?? link.label}
                    </a>
                  );
                })
              : fallbackLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <div
                      key={link.label}
                      className="inline-flex w-fit items-center gap-3 rounded-md border border-dashed border-border bg-card px-4 py-3 text-sm text-muted-foreground"
                    >
                      <Icon aria-hidden="true" size={17} />
                      {link.label} link to be added
                    </div>
                  );
                })}
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-5 md:p-8">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
