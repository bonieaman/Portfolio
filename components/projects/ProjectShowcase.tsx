import { ArrowUpRight, Code } from "lucide-react";
import type { Project } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export function ProjectShowcase({
  project,
  index
}: {
  project: Project;
  index: number;
}) {
  const reverse = index % 2 === 1;

  return (
    <FadeIn>
      <article
        className={cn(
          "grid gap-8 border-t border-border py-12 lg:grid-cols-[0.9fr_1.2fr] lg:items-center lg:gap-12",
          reverse && "lg:grid-cols-[1.2fr_0.9fr]"
        )}
      >
        <div className={cn(reverse && "lg:order-2")}>
          <div className="mb-5 flex flex-wrap gap-2">
            <Badge>{project.role}</Badge>
            <Badge>{project.year}</Badge>
            <Badge>{project.status}</Badge>
          </div>
          <h3 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Problem
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.problem}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Contribution
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {project.contributions[0]}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.slice(0, 8).map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href={`/projects/${project.slug}`}>
              View Case Study
              <ArrowUpRight aria-hidden="true" size={16} />
            </LinkButton>
            {project.liveUrl && !project.liveUrl.isPlaceholder ? (
              <LinkButton href={project.liveUrl.href} variant="secondary">
                Live Product
                <ArrowUpRight aria-hidden="true" size={16} />
              </LinkButton>
            ) : null}
            {project.githubUrl && !project.githubUrl.isPlaceholder ? (
              <LinkButton href={project.githubUrl.href} variant="ghost">
                <Code aria-hidden="true" size={16} />
                GitHub
              </LinkButton>
            ) : null}
          </div>
        </div>

        <ProjectVisual project={project} priority={index === 0} className={cn(reverse && "lg:order-1")} />
      </article>
    </FadeIn>
  );
}
