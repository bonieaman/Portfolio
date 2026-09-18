import { ArrowUpRight, Star } from "lucide-react";
import { getGitHubRepositories } from "@/lib/github";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export async function GitHubReposSection() {
  const { repos } = await getGitHubRepositories();

  if (!repos.length) {
    return null;
  }

  return (
    <section className="py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="GitHub"
          title="Selected repositories, lightly surfaced."
          description="I use repository activity as supporting evidence, not the center of the portfolio."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {repos.slice(0, 3).map((repo) => (
            <a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border bg-card p-5 transition hover:border-accent"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold">{repo.repository}</h3>
                <ArrowUpRight aria-hidden="true" size={16} className="text-muted-foreground" />
              </div>
              {repo.description ? (
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{repo.description}</p>
              ) : null}
              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                {repo.language ? <span>{repo.language}</span> : null}
                <span className="inline-flex items-center gap-1">
                  <Star aria-hidden="true" size={13} />
                  {repo.stars}
                </span>
                <span>Updated {new Date(repo.lastUpdated).toLocaleDateString("en-US")}</span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
