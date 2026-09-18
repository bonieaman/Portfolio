import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import {
  leadershipExperienceEntries,
  softwareExperienceEntries
} from "@/content/experience";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: {
    absolute: `Experience | ${siteConfig.name}`
  },
  description:
    "Software engineering, product development, volunteer engineering, and leadership experience for Nabon Amanuel."
};

export default function ExperiencePage() {
  return (
    <Container className="py-16 md:py-24">
      <header className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Experience</p>
        <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
          Real products, operational systems, and community leadership.
        </h1>
        <p className="mt-6 text-xl leading-9 text-muted-foreground">
          My experience comes from building and operating real software: startup product
          development, volunteer engineering for live event operations, public web platforms, and
          leadership work that depends on coordination and accountability.
        </p>
      </header>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Software & Product Experience"
          title="Work shaped by real users, workflows, and production constraints."
          description="These entries are labeled by context so founder and volunteer work are presented accurately."
        />
        <div className="relative grid gap-6 border-l border-border pl-6">
          {softwareExperienceEntries.map((entry, index) => {
            const href = entry.projectUrl ?? (entry.projectSlug ? `/projects/${entry.projectSlug}` : undefined);

            return (
              <article key={entry.id} className="relative rounded-lg border border-border bg-card p-6">
                <span className="absolute -left-[1.95rem] top-7 h-3 w-3 rounded-full border-2 border-background bg-accent" />
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0">
                    <p className="font-mono text-sm text-accent">{String(index + 1).padStart(2, "0")}</p>
                    <h2 className="mt-3 text-2xl font-semibold">{entry.organization}</h2>
                    <p className="mt-1 text-base text-muted-foreground">{entry.position}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
                    {entry.period ? <Badge>{entry.period}</Badge> : null}
                    <Badge>{entry.context}</Badge>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-muted-foreground">{entry.description}</p>

                <ul className="mt-5 grid gap-2 text-sm leading-6 text-muted-foreground">
                  {entry.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {entry.technologies?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {entry.technologies.map((technology) => (
                      <Badge key={technology}>{technology}</Badge>
                    ))}
                  </div>
                ) : null}

                {href ? (
                  <LinkButton href={href} variant="secondary" className="mt-6">
                    {entry.ctaLabel ?? "View Case Study"}
                    <ArrowRight aria-hidden="true" size={16} />
                  </LinkButton>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-20 border-t border-border pt-14">
        <SectionHeading
          eyebrow="Leadership & Community"
          title="Supporting teams beyond the codebase."
          description="Volunteer leadership is included as a secondary signal of communication, mentorship, coordination, and shared responsibility."
        />
        <div className="grid gap-4">
          {leadershipExperienceEntries.map((entry) => (
            <article key={entry.id} className="rounded-lg border border-border bg-card p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">{entry.position}</h2>
                  <p className="mt-1 text-accent">{entry.organization}</p>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {entry.period ? <Badge>{entry.period}</Badge> : null}
                  <Badge>{entry.context}</Badge>
                </div>
              </div>
              <p className="mt-5 max-w-3xl text-sm leading-6 text-muted-foreground">
                {entry.description}
              </p>
              <ul className="mt-5 grid gap-2 text-sm leading-6 text-muted-foreground md:grid-cols-2">
                {entry.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}
