import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "@/content/writing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function WritingPreview() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Writing"
          title="Draft engineering notes that can become published essays."
          description="I'm keeping this section scaffolded for now. Drafts stay labeled as drafts until the implementation details are verified."
          action={
            <LinkButton href="/writing" variant="secondary">
              View Writing
              <ArrowRight aria-hidden="true" size={16} />
            </LinkButton>
          }
        />
        <div className="grid gap-4 md:grid-cols-2">
          {articles.slice(0, 4).map((article) => (
            <Link
              key={article.slug}
              href={`/writing/${article.slug}`}
              className="rounded-lg border border-border bg-card p-5 transition hover:border-accent"
            >
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge>{article.status === "draft" ? "Draft" : "Published"}</Badge>
                <Badge>{article.readingTime}</Badge>
              </div>
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
