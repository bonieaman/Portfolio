import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between", className)}>
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
