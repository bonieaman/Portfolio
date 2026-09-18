import { testimonials } from "@/content/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  if (!testimonials.length) {
    return null;
  }

  return (
    <section className="py-20 md:py-24">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What collaborators say." />
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={`${testimonial.name}-${testimonial.organization}`} className="rounded-lg border border-border bg-card p-5">
              <blockquote className="text-sm leading-6 text-muted-foreground">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.organization}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
