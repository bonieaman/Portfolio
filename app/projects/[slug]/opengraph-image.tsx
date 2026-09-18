import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/content/projects";
import { siteConfig } from "@/config/site";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

type ProjectImageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectOpenGraphImage({ params }: ProjectImageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101214",
          color: "#f1eee7",
          padding: 72,
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div style={{ color: "#5eead4", fontSize: 28, fontWeight: 700, letterSpacing: 4 }}>
          NABON.
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, lineHeight: 1, fontWeight: 700, letterSpacing: -2 }}>
            {project?.title ?? "Project"}
          </div>
          <div style={{ marginTop: 28, maxWidth: 880, fontSize: 30, lineHeight: 1.25, color: "#c9c2b6" }}>
            {project?.subtitle ?? siteConfig.title}
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 22, color: "#5eead4" }}>
          <span>{project?.role ?? siteConfig.title}</span>
        </div>
      </div>
    ),
    size
  );
}
