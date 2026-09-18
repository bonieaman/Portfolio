import { ArrowDown, ArrowRight, FileDown } from "lucide-react";
import { availability, siteConfig } from "@/config/site";
import { visibleSocialLinks } from "@/config/social";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { formatList } from "@/lib/utils";

export function HeroSection({ resumeHref }: { resumeHref: string }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-72 opacity-60 grid-mask" aria-hidden="true" />
      <Container className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20 md:py-28">
        <FadeIn>
          <div className="max-w-5xl">
            {availability.enabled ? (
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                {availability.status}
              </p>
            ) : null}
            <h1 className="text-balance mt-8 max-w-5xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-8xl">
              {siteConfig.headline}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
              {siteConfig.description}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/#work">
                View My Work
                <ArrowRight aria-hidden="true" size={17} />
              </LinkButton>
              <LinkButton
                href={resumeHref}
                variant="secondary"
                target={resumeHref.endsWith(".pdf") ? "_blank" : undefined}
                rel={resumeHref.endsWith(".pdf") ? "noopener noreferrer" : undefined}
              >
                <FileDown aria-hidden="true" size={17} />
                Download {"R\u00e9sum\u00e9"}
              </LinkButton>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              {visibleSocialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition hover:text-accent"
                  >
                    <Icon aria-hidden="true" size={16} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <div className="mt-14 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-sm text-muted-foreground">
            React · TypeScript · Next.js · Node.js · PostgreSQL
          </p>
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-accent"
          >
            Selected work
            <ArrowDown aria-hidden="true" size={16} />
          </a>
        </div>

        <div className="sr-only">{formatList([...availability.focus, ...availability.locations])}</div>
      </Container>
    </section>
  );
}
