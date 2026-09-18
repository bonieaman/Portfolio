import { NextResponse, type NextRequest } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

type ValidationResult =
  | { ok: true; name: string; email: string; message: string }
  | { ok: false; message: string };

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function validatePayload(payload: ContactPayload): ValidationResult {
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const company = typeof payload.company === "string" ? payload.company.trim() : "";

  if (company) {
    return { ok: false, message: "Message could not be sent." };
  }
  if (name.length < 2 || name.length > 80) {
    return { ok: false, message: "Name must be between 2 and 80 characters." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 160) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  if (message.length < 20 || message.length > 2000) {
    return { ok: false, message: "Message must be between 20 and 2000 characters." };
  }

  return { ok: true, name, email, message };
}

function checkRateLimit(key: string) {
  const now = Date.now();
  const current = rateLimit.get(key);

  if (!current || current.resetAt < now) {
    rateLimit.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return false;
  }

  current.count += 1;
  rateLimit.set(key, current);
  return true;
}

export async function POST(request: NextRequest) {
  const key = getClientKey(request);

  if (!checkRateLimit(key)) {
    return NextResponse.json(
      { message: "Too many messages. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const validated = validatePayload(payload);

  if (!validated.ok) {
    return NextResponse.json({ message: validated.message }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !toEmail || !fromEmail) {
    return NextResponse.json({
      configured: false,
      message:
        "Message validated. Email delivery is not connected yet, so configure RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL before production launch."
    });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: validated.email,
      subject: `Portfolio message from ${validated.name}`,
      text: `Name: ${validated.name}\nEmail: ${validated.email}\n\n${validated.message}`
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "Email provider could not send the message. Please try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    configured: true,
    message: "Message sent. Thank you for reaching out."
  });
}
