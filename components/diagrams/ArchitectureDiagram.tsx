import type { ArchitectureLayer } from "@/lib/types";

export function ArchitectureDiagram({ layers }: { layers: ArchitectureLayer[] }) {
  const primary = layers.slice(0, 4);
  const branches = layers.slice(4);

  return (
    <div className="rounded-lg border border-border bg-card p-4 md:p-6">
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-3">
          {primary.map((layer, index) => (
            <div key={layer.id}>
              <ArchitectureNode layer={layer} />
              {index < primary.length - 1 ? (
                <div className="flex justify-center py-2 text-accent" aria-hidden="true">
                  ↓
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {branches.length ? (
          <div className="grid gap-3 rounded-md border border-border bg-muted/50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              External / Supporting Services
            </p>
            {branches.map((branch) => (
              <ArchitectureNode key={branch.id} layer={branch} compact />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function ArchitectureNode({
  layer,
  compact = false
}: {
  layer: ArchitectureLayer;
  compact?: boolean;
}) {
  return (
    <div className="rounded-md border border-border bg-background p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className={compact ? "text-base font-semibold" : "text-lg font-semibold"}>
            {layer.title}
          </h3>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">{layer.description}</p>
        </div>
        {layer.technologies?.length ? (
          <div className="flex flex-wrap gap-2 sm:justify-end">
            {layer.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border bg-card px-2.5 py-1 text-[0.72rem] font-medium text-muted-foreground"
              >
                {technology}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      {layer.branches?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {layer.branches.map((branch) => (
            <span
              key={`${branch.label}-${branch.target}`}
              className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
            >
              {branch.label} → {branch.target}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
