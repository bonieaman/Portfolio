import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Code } from "lucide-react";
import { projects, getNextProject, getProjectBySlug } from "@/content/projects";
import { siteConfig } from "@/config/site";
import { ArchitectureDiagram } from "@/components/diagrams/ArchitectureDiagram";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { absoluteUrl } from "@/lib/utils";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`
    },
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.description,
      url: `/projects/${project.slug}`,
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${siteConfig.name}`,
      description: project.description
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(project.slug);
  const sections = [
    "Overview",
    "The Problem",
    "My Role",
    "The Solution",
    "System Architecture",
    "Key Features",
    "Engineering Challenges",
    "Important Decisions",
    "Results / Impact",
    "What I Learned",
    "Technology",
    ...(project.screenshots.length ? ["Screenshots"] : [])
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    creator: {
      "@type": "Person",
      name: siteConfig.name
    },
    url: absoluteUrl(`/projects/${project.slug}`, siteConfig.siteUrl),
    keywords: project.technologies.join(", ")
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <Container className="py-10 md:py-16">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-accent"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Back to selected work
          </Link>

          <header className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.36fr] lg:items-end">
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                <Badge>{project.role}</Badge>
                <Badge>{project.year}</Badge>
                <Badge>{project.status}</Badge>
              </div>
              <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-7xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-9 text-muted-foreground">
                {project.description}
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-5">
              <dl className="grid gap-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Role</dt>
                  <dd className="mt-1 font-medium">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Timeline</dt>
                  <dd className="mt-1 font-medium">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Core stack</dt>
                  <dd className="mt-1 font-medium">{project.technologies.slice(0, 5).join(" · ")}</dd>
                </div>
              </dl>
              <div className="mt-5 grid gap-2">
                {project.liveUrl && !project.liveUrl.isPlaceholder ? (
                  <LinkButton href={project.liveUrl.href} variant="secondary" className="w-full">
                    Live Product
                    <ArrowUpRight aria-hidden="true" size={16} />
                  </LinkButton>
                ) : null}
                {project.githubUrl && !project.githubUrl.isPlaceholder ? (
                  <LinkButton href={project.githubUrl.href} variant="secondary" className="w-full">
                    <Code aria-hidden="true" size={16} />
                    Repository
                  </LinkButton>
                ) : null}
              </div>
            </div>
          </header>

          <div className="mt-12">
            <ProjectVisual project={project} priority />
          </div>
        </Container>

        <Container className="grid gap-10 pb-20 lg:grid-cols-[12rem_1fr] lg:gap-16 md:pb-28">
          <aside className="hidden lg:block">
            <nav className="sticky top-24 grid gap-2 text-sm" aria-label="Case study sections">
              {sections.map((section, index) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="rounded-md px-3 py-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                >
                  {String(index + 1).padStart(2, "0")} — {section}
                </a>
              ))}
            </nav>
          </aside>

          <div className="grid gap-16">
            <CaseSection index={1} title="Overview">
              <p>{project.description}</p>
              <p>{project.solution}</p>
            </CaseSection>

            <CaseSection index={2} title="The Problem">
              <p>{project.problem}</p>
            </CaseSection>

            <CaseSection index={3} title="My Role">
              <p>{project.role}</p>
              <ul>
                {project.contributions.map((contribution) => (
                  <li key={contribution}>{contribution}</li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection index={4} title="The Solution">
              <p>{project.solution}</p>
            </CaseSection>

            <section id="system-architecture" className="scroll-mt-28">
              <SectionHeading
                eyebrow="05"
                title="System Architecture"
                description="A clean model of the product layers and supporting services. The diagram is generated from project data, not a static image."
              />
              <ArchitectureDiagram layers={project.architecture} />
            </section>

            <CaseSection index={6} title="Key Features">
              <div className="grid gap-3 sm:grid-cols-2">
                {project.keyFeatures.map((feature) => (
                  <div key={feature} className="rounded-md border border-border bg-card p-4">
                    {feature}
                  </div>
                ))}
              </div>
            </CaseSection>

            <section id="engineering-challenges" className="scroll-mt-28">
              <SectionHeading
                eyebrow="07"
                title="Engineering Challenges"
                description="These notes focus on the reasoning and tradeoffs. Unknown implementation details stay marked in the content model instead of being invented."
              />
              <div className="grid gap-4">
                {project.challenges.map((challenge) => (
                  <article key={challenge.title} className="rounded-lg border border-border bg-card p-5">
                    <h3 className="text-xl font-semibold">{challenge.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {challenge.context}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-foreground">{challenge.approach}</p>
                    {challenge.openQuestions?.length ? (
                      <div className="mt-5 rounded-md border border-dashed border-border bg-muted/50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                          To verify
                        </p>
                        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                          {challenge.openQuestions.map((question) => (
                            <li key={question}>{question}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>

            <CaseSection index={8} title="Important Decisions">
              <ul>
                {project.decisions.map((decision) => (
                  <li key={decision}>{decision}</li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection index={9} title="Results / Impact">
              <div className="grid gap-4 sm:grid-cols-2">
                {project.results.map((result) => (
                  <div
                    key={result.label}
                    className="rounded-lg border border-border bg-card p-5"
                  >
                    <p className="text-sm font-medium text-accent">{result.label}</p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{result.value}</p>
                  </div>
                ))}
              </div>
            </CaseSection>

            <CaseSection index={10} title="What I Learned">
              <ul>
                {project.lessons.map((lesson) => (
                  <li key={lesson}>{lesson}</li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection index={11} title="Technology">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </div>
            </CaseSection>

            {project.screenshots.length ? (
              <section id="screenshots" className="scroll-mt-28">
                <SectionHeading
                  eyebrow="12"
                  title="Screenshots"
                  description="Screenshots are configured centrally per project and loaded from the public project asset folders."
                />
                <div className="grid gap-4 md:grid-cols-2">
                  {project.screenshots.map((screenshot) => (
                    <figure key={screenshot.src} className="overflow-hidden rounded-lg border border-border bg-card">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        width={1400}
                        height={875}
                        className="aspect-[16/10] w-full object-cover"
                      />
                      <figcaption className="border-t border-border p-4">
                        <p className="text-sm font-medium">{screenshot.caption ?? screenshot.alt}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                          {screenshot.kind}
                        </p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            ) : null}

            <section className="rounded-lg border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                13 — Next Project
              </p>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="mt-4 flex flex-col gap-3 text-2xl font-semibold transition hover:text-accent sm:flex-row sm:items-center sm:justify-between"
              >
                {nextProject.title}
                <ArrowRight aria-hidden="true" size={22} />
              </Link>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {nextProject.subtitle}
              </p>
            </section>
          </div>
        </Container>
      </article>
    </>
  );
}

function CaseSection({
  index,
  title,
  children
}: {
  index: number;
  title: string;
  children: ReactNode;
}) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <section id={id} className="scroll-mt-28">
      <SectionHeading eyebrow={String(index).padStart(2, "0")} title={title} />
      <div className="prose-content">{children}</div>
    </section>
  );
}
