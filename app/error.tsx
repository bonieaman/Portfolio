"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button, LinkButton } from "@/components/ui/Button";

export default function ErrorPage({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    void error;
  }, [error]);

  return (
    <Container className="flex min-h-[70vh] flex-col justify-center py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Error</p>
      <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
        Something interrupted this page.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        Try reloading this route. If it keeps happening, the contact page has a direct message path.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button onClick={reset}>
          <RotateCcw aria-hidden="true" size={17} />
          Try Again
        </Button>
        <LinkButton href="/contact" variant="secondary">
          Contact
        </LinkButton>
      </div>
    </Container>
  );
}
