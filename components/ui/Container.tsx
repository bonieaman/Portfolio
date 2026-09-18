import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "article" | "header" | "footer";
};

export function Container({ children, className, as: Component = "div" }: ContainerProps) {
  return (
    <Component className={cn("container-px mx-auto w-full max-w-7xl", className)}>
      {children}
    </Component>
  );
}
