import type { Metadata } from "next";
import Image from "next/image";
import { aboutContent, leadershipItems } from "@/content/about";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}: product philosophy, engineering approach, and leadership.`
};

export default function AboutPage() {
  const hasPhoto = Boolean(aboutContent.photo.src);

  return (
    <Container className="py-16 md:py-24">
      <header className={hasPhoto ? "grid gap-10 lg:grid-cols-[1fr_22rem] lg:items-end" : "max-w-5xl"}>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">About</p>
          <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
            A product-minded engineer who stays close to the whole system.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-muted-foreground">
            {aboutContent.intro}
          </p>
        </div>
        {hasPhoto ? (
          <div className="rounded-lg border border-border bg-card p-2 shadow-[var(--shadow-soft)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-border bg-muted">
              <Image
                src={aboutContent.photo.src}
                alt={aboutContent.photo.alt}
                fill
                priority
                sizes="(min-width: 1024px) 22rem, (min-width: 640px) 60vw, 100vw"
                className="object-cover object-[50%_18%]"
              />
            </div>
          </div>
        ) : null}
      </header>

      <div className="mt-20 grid gap-6 lg:grid-cols-3">
        <article className="rounded-lg border border-border bg-card p-6 lg:col-span-2">
          <Badge>Engineering Philosophy</Badge>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{aboutContent.philosophy}</p>
        </article>
        <article className="rounded-lg border border-border bg-card p-6">
          <Badge>Product Building</Badge>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            {aboutContent.productBuilding}
          </p>
        </article>
      </div>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Beyond Code"
          title="Leadership is shown through ownership, not decoration."
          description={aboutContent.leadership}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {leadershipItems.map((item) => (
            <article key={item.title} className="rounded-lg border border-border bg-card p-5">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
              {item.evidence ? (
                <p className="mt-4 border-t border-border pt-4 text-xs leading-5 text-muted-foreground">
                  {item.evidence}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-lg border border-border bg-card p-6 md:p-8">
        <SectionHeading
          eyebrow="Interests"
          title="Useful products, dependable systems, and clearer operations."
          description={aboutContent.interests}
          className="mb-0"
        />
      </section>
    </Container>
  );
}
