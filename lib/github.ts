export type PortfolioRepository = {
  repository: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  lastUpdated: string;
};

type GitHubRepository = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
};

export async function getGitHubRepositories(): Promise<{
  configured: boolean;
  repos: PortfolioRepository[];
  message?: string;
}> {
  const username = process.env.GITHUB_USERNAME ?? siteConfig.githubUsername;
  const token = process.env.GITHUB_TOKEN;

  if (!username) {
    return { configured: false, repos: [] };
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=6`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        next: {
          revalidate: 3600
        }
      }
    );

    if (!response.ok) {
      return {
        configured: true,
        repos: [],
        message: "GitHub repositories could not be loaded."
      };
    }

    const repos = ((await response.json()) as GitHubRepository[])
      .filter((repo) => !repo.fork)
      .map((repo) => ({
        repository: repo.name,
        url: repo.html_url,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        lastUpdated: repo.updated_at
      }));

    return { configured: true, repos };
  } catch {
    return {
      configured: true,
      repos: [],
      message: "GitHub repositories could not be loaded."
    };
  }
}
import { siteConfig } from "@/config/site";
