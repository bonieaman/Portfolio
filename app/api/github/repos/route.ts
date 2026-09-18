import { NextResponse } from "next/server";
import { getGitHubRepositories } from "@/lib/github";

export async function GET() {
  return NextResponse.json(await getGitHubRepositories());
}
