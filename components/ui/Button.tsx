import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn, isHttpUrl } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-accent bg-accent text-accent-foreground hover:bg-[color-mix(in_srgb,var(--accent)_88%,black)]",
  secondary:
    "border-border bg-card text-foreground hover:border-accent hover:text-accent",
  ghost:
    "border-transparent bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
};

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function Button({
  children,
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  children,
  className,
  variant = "primary",
  href,
  ...props
}: LinkButtonProps) {
  const opensNewTab = isHttpUrl(href);
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition",
        variants[variant],
        className
      )}
      target={opensNewTab ? "_blank" : props.target}
      rel={opensNewTab ? "noopener noreferrer" : props.rel}
      {...props}
    >
      {children}
    </Link>
  );
}
