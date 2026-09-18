import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/config/site";
import { visibleSocialLinks } from "@/config/social";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { ThemeScript } from "@/components/layout/ThemeScript";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CommandPalette } from "@/components/command/CommandPalette";
import { getResumeHref } from "@/lib/resume";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap"
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#101214" }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s — ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    type: "website",
    url: "/",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio`
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description
  }
};

function PersonJsonLd() {
  const sameAs = visibleSocialLinks
    .map((link) => link.href)
    .filter((href) => href.startsWith("http"));
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    email: siteConfig.contactEmail,
    url: siteConfig.siteUrl,
    description: siteConfig.shortBio,
    sameAs
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const resumeHref = getResumeHref();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <ThemeScript />
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <SiteHeader resumeHref={resumeHref} />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <CommandPalette resumeHref={resumeHref} />
        </ThemeProvider>
        <PersonJsonLd />
        <Analytics />
      </body>
    </html>
  );
}
