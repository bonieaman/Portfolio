"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import {
  ArrowRight,
  Briefcase,
  FileDown,
  Code,
  Mail,
  Moon,
  Search,
  Sparkles
} from "lucide-react";
import { projects } from "@/content/projects";
import { articles } from "@/content/writing";
import { skillCategories } from "@/content/skills";
import { siteConfig } from "@/config/site";
import { visibleSocialLinks } from "@/config/social";
import { useTheme } from "@/components/layout/ThemeProvider";
import { cn, isHttpUrl } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

type CommandAction = {
  id: string;
  label: string;
  description: string;
  href?: string;
  keywords: string[];
  icon: typeof ArrowRight;
  onSelect?: () => void;
};

function normalize(value: string) {
  return value.toLowerCase().trim();
}

export function CommandPalette({ resumeHref }: { resumeHref: string }) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const { toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const openPalette = () => {
      setQuery("");
      setActiveIndex(0);
      setOpen(true);
    };
    window.addEventListener("open-command-palette", openPalette);
    return () => window.removeEventListener("open-command-palette", openPalette);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setQuery("");
        setActiveIndex(0);
        setOpen((value) => !value);
      }
      if (event.key === "Escape") {
        setOpen(false);
        setQuery("");
        setActiveIndex(0);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      window.setTimeout(() => inputRef.current?.focus(), 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const commands = useMemo<CommandAction[]>(() => {
    const projectCommands = projects.map((project) => ({
      id: `project-${project.slug}`,
      label: `View ${project.title}`,
      description: project.subtitle,
      href: `/projects/${project.slug}`,
      keywords: [
        project.title,
        project.subtitle,
        project.description,
        ...project.technologies,
        ...project.searchTerms,
        ...project.keyFeatures
      ],
      icon: Briefcase
    }));

    const articleCommands = articles.map((article) => ({
      id: `article-${article.slug}`,
      label: article.title,
      description: article.status === "draft" ? "Draft writing outline" : article.description,
      href: `/writing/${article.slug}`,
      keywords: [article.title, article.description, ...article.tags],
      icon: Sparkles
    }));

    const skillCommands = skillCategories.flatMap((category) =>
      category.skills.map((skill) => ({
        id: `skill-${category.title}-${skill.name}`,
        label: skill.name,
        description: `${category.title} technology`,
        href: "/#stack",
        keywords: [skill.name, category.title, category.description],
        icon: Search
      }))
    );

    const github = visibleSocialLinks.find((link) => link.label === "GitHub");
    const linkedIn = visibleSocialLinks.find((link) => link.label === "LinkedIn");
    const email = visibleSocialLinks.find((link) => link.label === "Email");

    return [
      {
        id: "work",
        label: "View all projects",
        description: "Selected engineering case studies",
        href: "/#work",
        keywords: ["projects", "work", "case studies", "portfolio"],
        icon: Briefcase
      },
      {
        id: "experience",
        label: "View experience",
        description: "Timeline and verified professional history",
        href: "/experience",
        keywords: ["experience", "timeline", "work history"],
        icon: ArrowRight
      },
      {
        id: "about",
        label: "About Me",
        description: "Product philosophy, background, and leadership",
        href: "/about",
        keywords: ["about", "bio", "philosophy", "leadership"],
        icon: ArrowRight
      },
      {
        id: "writing",
        label: "View writing",
        description: "Technical notes and draft case essays",
        href: "/writing",
        keywords: ["writing", "articles", "notes"],
        icon: Sparkles
      },
      {
        id: "resume-page",
        label: "View R\u00e9sum\u00e9",
        description: "R\u00e9sum\u00e9 page with PDF preview and actions",
        href: "/resume",
        keywords: ["resume", "cv", "r\u00e9sum\u00e9", "preview", "pdf"],
        icon: ArrowRight
      },
      {
        id: "resume-download",
        label: "Download R\u00e9sum\u00e9",
        description: "Open the current r\u00e9sum\u00e9 PDF",
        href: resumeHref,
        keywords: ["resume", "cv", "r\u00e9sum\u00e9", "download", "pdf"],
        icon: FileDown
      },
      {
        id: "contact",
        label: "Contact Me",
        description: "Send a message through the contact form",
        href: "/contact",
        keywords: ["contact", "email", "message"],
        icon: Mail
      },
      ...(email
        ? [
            {
              id: "email",
              label: "Email Me",
              description: email.handle ?? "bonieaman3@gmail.com",
              href: email.href,
              keywords: ["email", "mail", "bonieaman3@gmail.com"],
              icon: Mail
            } satisfies CommandAction
          ]
        : []),
      ...(github
        ? [
            {
              id: "github",
              label: "GitHub",
              description: github.handle ?? "bonieaman",
              href: github.href,
              keywords: ["github", "repositories", "code", "bonieaman"],
              icon: Code
            } satisfies CommandAction
          ]
        : []),
      ...(linkedIn
        ? [
            {
              id: "linkedin",
              label: "LinkedIn",
              description: linkedIn.handle ?? "Nabon Amanuel",
              href: linkedIn.href,
              keywords: ["linkedin", "profile", "professional"],
              icon: Briefcase
            } satisfies CommandAction
          ]
        : []),
      {
        id: "theme",
        label: "Toggle theme",
        description: "Switch between light and dark mode",
        keywords: ["theme", "dark", "light"],
        icon: Moon,
        onSelect: toggleTheme
      },
      ...projectCommands,
      ...articleCommands,
      ...skillCommands
    ];
  }, [resumeHref, toggleTheme]);

  const filtered = useMemo(() => {
    const needle = normalize(query);
    if (!needle) {
      return commands.slice(0, 12);
    }

    return commands
      .map((command) => {
        const haystack = normalize(
          [command.label, command.description, ...command.keywords].join(" ")
        );
        return {
          command,
          score: haystack.includes(needle)
            ? haystack.indexOf(needle)
            : command.keywords.some((keyword) => normalize(keyword).startsWith(needle))
              ? 200
              : Number.POSITIVE_INFINITY
        };
      })
      .filter((item) => Number.isFinite(item.score))
      .sort((a, b) => a.score - b.score)
      .map((item) => item.command)
      .slice(0, 12);
  }, [commands, query]);

  function closePalette() {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }

  function runCommand(command: CommandAction) {
    trackEvent("command_selected", { command: command.id });
    command.onSelect?.();

    if (command.href) {
      if (isHttpUrl(command.href) || command.href.endsWith(".pdf")) {
        window.open(command.href, "_blank", "noopener,noreferrer");
      } else if (command.href.startsWith("mailto:")) {
        window.location.href = command.href;
      } else {
        router.push(command.href);
      }
    }
    closePalette();
  }

  function onListKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % Math.max(filtered.length, 1));
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => (index - 1 + Math.max(filtered.length, 1)) % Math.max(filtered.length, 1));
    }
    if (event.key === "Enter" && filtered[activeIndex]) {
      event.preventDefault();
      runCommand(filtered[activeIndex]);
    }
  }

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-background/72 p-4 backdrop-blur-xl" role="presentation">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close command palette"
        onClick={closePalette}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="command-palette-title"
        className="focus-card relative mx-auto mt-16 w-full max-w-2xl overflow-hidden rounded-lg"
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search aria-hidden="true" size={18} className="text-muted-foreground" />
          <label id="command-palette-title" htmlFor="command-search" className="sr-only">
            Search portfolio commands
          </label>
          <input
            id="command-search"
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={onListKeyDown}
            placeholder={`Search ${siteConfig.name}'s work, skills, and writing...`}
            className="h-12 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
            aria-activedescendant={filtered[activeIndex]?.id}
            aria-controls="command-results"
            role="combobox"
            aria-expanded="true"
          />
          <kbd className="hidden rounded border border-border bg-muted px-2 py-1 text-xs text-muted-foreground sm:block">
            Esc
          </kbd>
        </div>

        <div id="command-results" role="listbox" className="max-h-[60vh] overflow-y-auto p-2">
          {filtered.length ? (
            filtered.map((command, index) => {
              const Icon = command.icon;
              return (
                <button
                  key={command.id}
                  id={command.id}
                  role="option"
                  aria-selected={activeIndex === index}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => runCommand(command)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-md px-3 py-3 text-left transition",
                    activeIndex === index ? "bg-muted text-foreground" : "text-muted-foreground"
                  )}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-card text-accent">
                    <Icon aria-hidden="true" size={17} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-foreground">
                      {command.label}
                    </span>
                    <span className="block truncate text-xs">{command.description}</span>
                  </span>
                  <ArrowRight aria-hidden="true" size={16} className="shrink-0" />
                </button>
              );
            })
          ) : (
            <div className="px-4 py-10 text-center">
              <p className="text-sm font-medium text-foreground">No results found.</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try &quot;PostgreSQL&quot;, &quot;authentication&quot;, &quot;Berenda&quot;, or
                &quot;resume&quot;.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
