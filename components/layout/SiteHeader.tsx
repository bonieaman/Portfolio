"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Command, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button, LinkButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function SiteHeader({ resumeHref }: { resumeHref: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const resumeTarget = resumeHref.endsWith(".pdf") ? "_blank" : undefined;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition",
        scrolled
          ? "border-border/80 bg-[var(--nav-bg)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm font-bold tracking-[0.18em] text-foreground"
          aria-label="Nabon Amanuel home"
        >
          {siteConfig.wordmark}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {siteConfig.navItems.map((item) => {
            const active =
              item.href === "/#work" ? pathname === "/" : pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition",
                  active
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="ghost"
            className="h-10 min-h-10 gap-2 rounded-full px-3 text-muted-foreground"
            aria-label="Open command palette"
            onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
          >
            <Command aria-hidden="true" size={16} />
            <span className="text-xs">Cmd/Ctrl K</span>
          </Button>
          <LinkButton
            href={resumeHref}
            variant="secondary"
            className="rounded-full"
            target={resumeTarget}
            rel={resumeTarget ? "noopener noreferrer" : undefined}
          >
            {"R\u00e9sum\u00e9"}
          </LinkButton>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="secondary"
            className="h-10 min-h-10 w-10 rounded-full px-0"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="container-px border-t border-border bg-card pb-4 pt-3 md:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1" aria-label="Mobile navigation">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={resumeHref}
              target={resumeTarget}
              rel={resumeTarget ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-sm font-medium text-accent transition hover:bg-muted"
            >
              {"R\u00e9sum\u00e9"}
            </Link>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                window.dispatchEvent(new Event("open-command-palette"));
              }}
              className="rounded-md px-3 py-3 text-left text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              Command palette
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
