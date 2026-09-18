import Link from "next/link";
import { skillCategories } from "@/content/skills";
import { getProjectBySlug } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function StackSection() {
  return (
    <section id="stack" className="border-y border-border bg-card/45 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Technology"
          title="A stack shaped by real product surfaces."
          description="I group skills around the parts of a product I need to reason about: interface, API, data, deployment, and integrations."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.title} delay={index * 0.04}>
              <article className="h-full rounded-lg border border-border bg-background p-5">
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {category.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const firstProject = skill.projectSlugs?.[0]
                      ? getProjectBySlug(skill.projectSlugs[0])
                      : undefined;
                    const content = (
                      <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground transition">
                        {skill.name}
                      </span>
                    );

                    return firstProject ? (
                      <Link
                        key={skill.name}
                        href={`/projects/${firstProject.slug}`}
                        className="hover:[&>span]:border-accent hover:[&>span]:text-accent"
                      >
                        {content}
                      </Link>
                    ) : (
                      <span key={skill.name}>{content}</span>
                    );
                  })}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
