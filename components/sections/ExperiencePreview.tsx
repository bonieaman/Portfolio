import { ArrowRight } from "lucide-react";
import { softwareExperienceEntries } from "@/content/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";

export function ExperiencePreview() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Experience from real product and volunteer engineering work."
          description="Founder-led product development, operational event software, and public web platforms, all labeled by context."
          action={
            <LinkButton href="/experience" variant="secondary">
              View Experience
              <ArrowRight aria-hidden="true" size={16} />
            </LinkButton>
          }
        />

        {softwareExperienceEntries.length ? (
          <div className="grid gap-4 md:grid-cols-3">
            {softwareExperienceEntries.slice(0, 3).map((entry) => (
              <article key={entry.id} className="rounded-lg border border-border bg-card p-5">
                <p className="text-sm text-muted-foreground">{entry.period}</p>
                <h3 className="mt-2 text-xl font-semibold">{entry.organization}</h3>
                <p className="mt-1 text-sm text-accent">{entry.position}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {entry.context}
                </p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{entry.description}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-border bg-card p-6">
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
              Verified product, volunteer engineering, and leadership entries are managed in the
              centralized experience file and appear here automatically.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
