"use client"
import {GitHubStats} from '../api/github/route'
import {Repo} from '../api/github/route'
import { useEffect, useState } from "react";

export function useGitHubStats(): GitHubStats {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [totalCommits, setTotalCommits] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/github");

        const data = await res.json();

        if ("error" in data) {
          setError(data.error);
        } else {
          setRepos(data.repos);
          setTotalCommits(data.totalCommits);
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { repos, totalCommits, loading, error };
}
