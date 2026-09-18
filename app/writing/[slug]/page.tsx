import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { articles, getArticleBySlug } from "@/content/writing";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/writing/${article.slug}`
    },
    openGraph: {
      title: `${article.title} — ${siteConfig.name}`,
      description: article.description,
      type: "article",
      url: `/writing/${article.slug}`
    }
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <Container as="article" className="py-16 md:py-24">
      <Link
        href="/writing"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-accent"
      >
        <ArrowLeft aria-hidden="true" size={16} />
        Back to writing
      </Link>

      <header className="mt-12 max-w-4xl">
        <div className="mb-5 flex flex-wrap gap-2">
          <Badge>{article.status === "draft" ? "Draft outline" : "Published"}</Badge>
          <Badge>{article.date}</Badge>
          <Badge>{article.readingTime}</Badge>
        </div>
        <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-7xl">
          {article.title}
        </h1>
        <p className="mt-6 text-xl leading-9 text-muted-foreground">{article.description}</p>
      </header>

      <div className="prose-content mt-14 max-w-3xl">
        {article.sections.map((section) => (
          <section key={section.heading} className="mb-10">
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-foreground">
              {section.heading}
            </h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>
    </Container>
  );
}
