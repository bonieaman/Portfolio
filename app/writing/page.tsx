import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "@/content/writing";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Writing",
  description: `Technical writing and engineering notes by ${siteConfig.name}.`
};

export default function WritingPage() {
  return (
    <Container className="py-16 md:py-24">
      <header className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Writing</p>
        <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
          Engineering notes, drafts, and case essays.
        </h1>
        <p className="mt-6 text-xl leading-9 text-muted-foreground">
          I mark articles as drafts until implementation details, dates, and outcomes are verified.
          The infrastructure is ready for MDX-style long-form writing through typed data.
        </p>
      </header>

      <div className="mt-16 grid gap-4 md:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/writing/${article.slug}`}
            className="group rounded-lg border border-border bg-card p-6 transition hover:border-accent"
          >
            <div className="flex flex-wrap gap-2">
              <Badge>{article.status === "draft" ? "Draft" : "Published"}</Badge>
              <Badge>{article.date}</Badge>
              <Badge>{article.readingTime}</Badge>
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight group-hover:text-accent">
              {article.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{article.description}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
              Read outline
              <ArrowRight aria-hidden="true" size={16} />
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
