import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projects } from "@/content/projects";
import { articles } from "@/content/writing";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/about", "/experience", "/writing", "/contact", "/resume"].map(
    (path) => ({
      url: absoluteUrl(path || "/", siteConfig.siteUrl),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7
    })
  );

  const projectRoutes = projects.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`, siteConfig.siteUrl),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: project.slug === "berenda" ? 0.9 : 0.75
  }));

  const writingRoutes = articles.map((article) => ({
    url: absoluteUrl(`/writing/${article.slug}`, siteConfig.siteUrl),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.55
  }));

  return [...staticRoutes, ...projectRoutes, ...writingRoutes];
}
