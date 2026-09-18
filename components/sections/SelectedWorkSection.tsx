import { featuredProjects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";

export function SelectedWorkSection() {
  return (
    <section id="work" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Case studies that show product thinking, system design, and shipping discipline."
          description="I organize this portfolio around engineering stories rather than decorative thumbnails. Berenda leads because it combines marketplace UX, backend workflows, verification, search, and production concerns."
        />
        <div>
          {featuredProjects.map((project, index) => (
            <ProjectShowcase key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
