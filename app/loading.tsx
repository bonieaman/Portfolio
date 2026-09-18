import { Container } from "@/components/ui/Container";

export default function LoadingPage() {
  return (
    <Container className="py-16 md:py-24">
      <div className="animate-pulse">
        <div className="h-4 w-32 rounded bg-muted" />
        <div className="mt-6 h-16 max-w-3xl rounded bg-muted" />
        <div className="mt-4 h-6 max-w-2xl rounded bg-muted" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="h-56 rounded-lg bg-muted" />
          <div className="h-56 rounded-lg bg-muted" />
        </div>
      </div>
    </Container>
  );
}
