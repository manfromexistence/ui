import { Suspense } from "react";
import { GitHubStatsContent } from "./github-stats-client";
import { getGithubStats } from "@/app/actions/github";

export async function GitHubStats() {
  const stats = await getGithubStats();

  return (
    <Suspense fallback={<GitHubStatsContent stars={300} contributors={[]} />}>
      <GitHubStatsContent {...stats} />
    </Suspense>
  );
}
