import { existsSync } from "node:fs";
import path from "node:path";
import { resumeConfig } from "@/config/site";

export function resumePdfExists() {
  const publicPath = resumeConfig.pdfPath.replace(/^\//, "");
  return existsSync(path.join(process.cwd(), "public", publicPath));
}

export function getResumeHref() {
  return resumePdfExists() ? resumeConfig.pdfPath : resumeConfig.fallbackPath;
}
