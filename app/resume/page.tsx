import type { Metadata } from "next";
import { AlertCircle, Download, ExternalLink } from "lucide-react";
import { resumeConfig, siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { resumePdfExists } from "@/lib/resume";

const resumeLabel = "R\u00e9sum\u00e9";
const resumeLowerLabel = "r\u00e9sum\u00e9";

export const metadata: Metadata = {
  title: {
    absolute: `${resumeLabel} | ${siteConfig.name}`
  },
  description: `${resumeLabel} of Nabon Amanuel, Software Engineer.`
};

export default function ResumePage() {
  const exists = resumePdfExists();
  const publicAssetPath = `public/resume/${resumeConfig.fileName}`;

  return (
    <Container className="py-16 md:py-24">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
          {resumeLabel}
        </p>
        <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
          Nabon Amanuel
        </h1>
        <p className="mt-4 text-2xl text-accent">Software Engineer</p>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-muted-foreground">
          View or download the current {resumeLowerLabel} PDF. The document below is the actual
          uploaded {resumeLowerLabel}, served from the portfolio&apos;s public {resumeLowerLabel} assets.
        </p>
      </div>

      {exists ? (
        <>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <LinkButton href={resumeConfig.pdfPath} target="_blank" rel="noopener noreferrer">
              <ExternalLink aria-hidden="true" size={17} />
              View {resumeLabel}
            </LinkButton>
            <LinkButton
              href={resumeConfig.pdfPath}
              variant="secondary"
              download={resumeConfig.fileName}
            >
              <Download aria-hidden="true" size={17} />
              Download PDF
            </LinkButton>
          </div>

          <section className="mt-12 overflow-hidden rounded-lg border border-border bg-card p-3 shadow-[var(--shadow-soft)] md:p-4">
            <div className="hidden md:block">
              <object
                data={resumeConfig.pdfPath}
                type="application/pdf"
                aria-label={`${resumeLabel} PDF preview`}
                className="h-[min(78vh,56rem)] w-full rounded-md border border-border bg-muted"
              >
                <div className="flex min-h-80 flex-col items-center justify-center rounded-md border border-dashed border-border bg-muted p-8 text-center">
                  <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                    Your browser could not display the embedded PDF preview.
                  </p>
                  <LinkButton
                    href={resumeConfig.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5"
                  >
                    <ExternalLink aria-hidden="true" size={17} />
                    Open {resumeLabel}
                  </LinkButton>
                </div>
              </object>
            </div>

            <div className="rounded-md border border-dashed border-border bg-muted p-6 text-center md:hidden">
              <p className="text-sm leading-6 text-muted-foreground">
                PDF previews vary on mobile browsers. Open the {resumeLowerLabel} in a new tab or
                download the PDF for the most reliable view.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <LinkButton href={resumeConfig.pdfPath} target="_blank" rel="noopener noreferrer">
                  <ExternalLink aria-hidden="true" size={17} />
                  Open {resumeLabel}
                </LinkButton>
                <LinkButton
                  href={resumeConfig.pdfPath}
                  variant="secondary"
                  download={resumeConfig.fileName}
                >
                  <Download aria-hidden="true" size={17} />
                  Download PDF
                </LinkButton>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="mt-12 rounded-lg border border-border bg-card p-6 md:p-8">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-muted text-accent">
            <AlertCircle aria-hidden="true" size={20} />
          </div>
          <h2 className="mt-5 text-2xl font-semibold">{resumeLabel} PDF has not been added yet.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
            Add the verified file at{" "}
            <span className="font-mono text-foreground">{publicAssetPath}</span>. The navigation
            and command palette will then point directly to the downloadable PDF.
          </p>
        </div>
      )}
    </Container>
  );
}
