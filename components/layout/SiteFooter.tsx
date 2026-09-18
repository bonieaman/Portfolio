import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { visibleSocialLinks } from "@/config/social";
import { Container } from "@/components/ui/Container";
import { getResumeHref } from "@/lib/resume";
import { isHttpUrl } from "@/lib/utils";

export function SiteFooter() {
  const resumeHref = getResumeHref();
  const resumeTarget = resumeHref.endsWith(".pdf") ? "_blank" : undefined;

  return (
    <footer className="border-t border-border">
      <Container className="py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="text-sm font-bold tracking-[0.18em]">
              {siteConfig.wordmark}
            </Link>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              {siteConfig.shortBio}
            </p>
          </div>
          <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2 md:text-right">
            <Link href="/projects/berenda" className="hover:text-accent">
              Berenda case study
            </Link>
            <Link href="/contact" className="hover:text-accent">
              Contact
            </Link>
            <Link
              href={resumeHref}
              target={resumeTarget}
              rel={resumeTarget ? "noopener noreferrer" : undefined}
              className="hover:text-accent"
            >
              {"R\u00e9sum\u00e9"}
            </Link>
            {visibleSocialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={isHttpUrl(link.href) ? "_blank" : undefined}
                rel={isHttpUrl(link.href) ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1 hover:text-accent md:justify-end"
              >
                {link.label}
                <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nabon Amanuel. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, and careful product judgment.</p>
        </div>
      </Container>
    </footer>
  );
}
