import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export default function NotFoundPage() {
  return (
    <Container className="flex min-h-[70vh] flex-col justify-center py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">404</p>
      <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
        This page is not part of the product.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        The link may be outdated, or the case study may not have been added yet.
      </p>
      <div className="mt-10">
        <LinkButton href="/">
          <ArrowLeft aria-hidden="true" size={17} />
          Back Home
        </LinkButton>
      </div>
      <Link href="/contact" className="mt-6 w-fit text-sm text-muted-foreground hover:text-accent">
        Contact Me
      </Link>
    </Container>
  );
}
