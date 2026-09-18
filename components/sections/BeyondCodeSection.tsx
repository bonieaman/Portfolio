import { leadershipItems } from "@/content/about";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function BeyondCodeSection() {
  return (
    <section className="border-y border-border bg-card/45 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Beyond Code"
          title="Ownership, communication, and product judgment."
          description="Secondary to the engineering case studies, but important: my software work also depends on clarifying ambiguous problems and helping people coordinate around them."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {leadershipItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.04}>
              <article className="h-full rounded-lg border border-border bg-background p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
                {item.evidence ? (
                  <p className="mt-4 border-t border-border pt-4 text-xs leading-5 text-muted-foreground">
                    {item.evidence}
                  </p>
                ) : null}
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
