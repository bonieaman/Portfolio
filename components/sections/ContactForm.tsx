"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

type ContactState =
  | { status: "idle"; message: string }
  | { status: "loading"; message: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

function validateForm(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (name.length < 2) {
    return "Please enter your name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please enter a valid email address.";
  }
  if (message.length < 20) {
    return "Please include a little more context in your message.";
  }
  return "";
}

export function ContactForm() {
  const [state, setState] = useState<ContactState>({
    status: "idle",
    message: ""
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const validationError = validateForm(formData);

    if (validationError) {
      setState({ status: "error", message: validationError });
      return;
    }

    setState({ status: "loading", message: "Sending message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          message: String(formData.get("message") ?? ""),
          company: String(formData.get("company") ?? "")
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const result = (await response.json()) as { message?: string; configured?: boolean };

      if (!response.ok) {
        throw new Error(result.message ?? "Something went wrong. Please try again.");
      }

      form.reset();
      trackEvent("contact_submitted", { configured: Boolean(result.configured) });
      setState({
        status: "success",
        message:
          result.message ??
          "Your message was validated. Email delivery can be connected through environment variables."
      });
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again."
      });
    }
  }

  const loading = state.status === "loading";

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          minLength={2}
          className="min-h-12 rounded-md border border-border bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-accent"
          placeholder="Your name"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-h-12 rounded-md border border-border bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-accent"
          placeholder="name@domain.com"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          rows={7}
          className="rounded-md border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-accent"
          placeholder="Tell me what you are building, hiring for, or trying to solve."
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full sm:w-fit">
        {loading ? <Loader2 aria-hidden="true" size={17} className="animate-spin" /> : <Send aria-hidden="true" size={17} />}
        {loading ? "Sending..." : "Send Message"}
      </Button>

      <div aria-live="polite" className="min-h-6">
        {state.message ? (
          <p
            className={
              state.status === "error"
                ? "text-sm text-red-600 dark:text-red-400"
                : "text-sm text-muted-foreground"
            }
          >
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
