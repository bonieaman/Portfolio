import Image from "next/image";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ProjectVisual({
  project,
  className,
  priority = false
}: {
  project: Project;
  className?: string;
  priority?: boolean;
}) {
  const primary = project.screenshots[0];

  if (primary && !primary.isPlaceholder) {
    return (
      <div className={cn("overflow-hidden rounded-lg border border-border bg-card", className)}>
        <Image
          src={primary.src}
          alt={primary.alt}
          width={1400}
          height={900}
          priority={priority}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative min-h-[22rem] overflow-hidden rounded-lg border border-border bg-panel p-5 md:min-h-[30rem]",
        className
      )}
      aria-label={`${project.title} visual placeholder`}
    >
      <div className="grid-mask absolute inset-0 opacity-60" />
      <div className="relative flex h-full min-h-[19rem] flex-col justify-between rounded-md border border-border bg-card/80 p-4 shadow-sm md:min-h-[26rem]">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="rounded-full border border-border px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Replace with screenshot
          </span>
        </div>

        <div className="grid gap-4 py-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              {project.status}
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              {project.title}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground md:text-base">
              {project.subtitle}
            </p>
          </div>

          <div className="grid gap-3 rounded-md border border-border bg-background/70 p-4">
            {project.keyFeatures.slice(0, 5).map((feature) => (
              <div key={feature} className="flex items-start gap-3 text-sm">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="border-t border-border pt-3 text-xs text-muted-foreground">
          This area avoids fake screenshots. Configure project media in
          <span className="font-mono"> content/project-media.ts</span>.
        </p>
      </div>
    </div>
  );
}
