import { NextResponse } from "next/server";

export interface Repo {
  name: string;
  description: string | null;
  stars: number;
  language: string | null;
  url: string;
}

export interface GitHubStats {
  repos: Repo[];
  totalCommits: number;
  loading: boolean;
  error: string | null;
}

const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN; // server-side only, never exposed to browser

async function fetchPaginated<T>(url: string, token: string): Promise<T[]> {
  let results: T[] = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    const fullUrl = `${url}&per_page=${perPage}&page=${page}`;
    const res = await fetch(fullUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Failed on page ${page}:`, res.status, errorText);
      break;
    }

    const data: T[] = await res.json();

    if (data.length === 0) break;
    results = results.concat(data);
    page++;
  }

  return results;
}

export async function GET() {
  if (!username || !token) {
    return NextResponse.json({ error: "Missing environment variables" }, { status: 500 });
  }

  // Manually specify which repos to count commits from
  const REPOS_TO_COUNT = [
    'portfolio-next',
    'property-listing--react',
    'react--pokemon-card-app',
    "react--todo-app",
    "react--quiz-app",
  ];

  try {
    // 1️⃣ Fetch all repos (for display)
    const reposData: any[] = await fetchPaginated(
      `https://api.github.com/users/${username}/repos?type=owner`,
      token
    );

    const repos: Repo[] = reposData.map((repo) => ({
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      language: repo.language,
      url: repo.html_url,
    }));

    // 2️⃣ Filter only the repos you want to count
    const reposToCount = reposData.filter(repo =>
      REPOS_TO_COUNT.includes(repo.name)
    );

    // 3️⃣ Fetch commits only for selected repos
    let totalCommits = 0;
    for (const repo of reposToCount) {
      const commits: any[] = await fetchPaginated(
        `https://api.github.com/repos/${username}/${repo.name}/commits?author=${username}`,
        token
      );
      totalCommits += commits.length;
    }

    return NextResponse.json({ repos, totalCommits });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch GitHub data" }, { status: 500 });
  }
}
