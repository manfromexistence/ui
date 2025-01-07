import { Suspense } from "react";
import { RepoActivityContent } from "./repo-activity-client";
import { getRepoActivity } from "@/app/actions/github";

export async function RepoActivity() {
  const stats = await getRepoActivity();

  return (
    <Suspense
      fallback={
        <RepoActivityContent
          stats={{
            openPRs: 0,
            mergedPRs: 0,
            openIssues: 0,
            closedIssues: 0,
            lastUpdate: new Date().toISOString(),
          }}
        />
      }
    >
      <RepoActivityContent stats={stats} />
    </Suspense>
  );
}
