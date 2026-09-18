import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section className="pb-20 md:pb-28">
      <Container>
        <div className="rounded-lg border border-border bg-foreground p-8 text-background md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                Contact
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Let&apos;s build something useful.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-background/72">
                For recruiters, founders, engineering managers, and collaborators: the best
                next step is a concise conversation about the product, team, and problem.
              </p>
            </div>
            <LinkButton
              href="/contact"
              variant="primary"
              className="border-background bg-background text-foreground hover:bg-background/90"
            >
              Start a Conversation
              <ArrowRight aria-hidden="true" size={17} />
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
