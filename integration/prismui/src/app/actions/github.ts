"use server";

interface Contributor {
  avatar_url: string;
  login: string;
}

interface Stats {
  stars: number;
  contributors: Contributor[];
}

interface RepoStats {
  openPRs: number;
  mergedPRs: number;
  openIssues: number;
  closedIssues: number;
  lastUpdate: string;
}

export async function getGithubStats(): Promise<Stats> {
  try {
    const [repoResponse, contributorsResponse] = await Promise.all([
      fetch("https://api.github.com/repos/codehagen/prismui", {
        ...(process.env.GITHUB_OAUTH_TOKEN && {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
            "Content-Type": "application/json",
          },
        }),
        next: { revalidate: 3600 },
      }),
      fetch("https://api.github.com/repos/codehagen/prismui/contributors", {
        ...(process.env.GITHUB_OAUTH_TOKEN && {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
            "Content-Type": "application/json",
          },
        }),
        next: { revalidate: 3600 },
      }),
    ]);

    if (!repoResponse.ok || !contributorsResponse.ok) {
      return { stars: 300, contributors: [] };
    }

    const repoData = await repoResponse.json();
    const contributorsData = await contributorsResponse.json();

    return {
      stars: repoData.stargazers_count,
      contributors: contributorsData as Contributor[],
    };
  } catch (error) {
    return { stars: 300, contributors: [] };
  }
}

export async function getRepoActivity(): Promise<RepoStats> {
  try {
    const [prsResponse, issuesResponse] = await Promise.all([
      fetch("https://api.github.com/repos/codehagen/prismui/pulls?state=all", {
        ...(process.env.GITHUB_OAUTH_TOKEN && {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
            "Content-Type": "application/json",
          },
        }),
        next: { revalidate: 3600 },
      }),
      fetch("https://api.github.com/repos/codehagen/prismui/issues?state=all", {
        ...(process.env.GITHUB_OAUTH_TOKEN && {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
            "Content-Type": "application/json",
          },
        }),
        next: { revalidate: 3600 },
      }),
    ]);

    if (!prsResponse.ok || !issuesResponse.ok) {
      return {
        openPRs: 0,
        mergedPRs: 0,
        openIssues: 0,
        closedIssues: 0,
        lastUpdate: new Date().toISOString(),
      };
    }

    const prs = await prsResponse.json();
    const issues = await issuesResponse.json();

    return {
      openPRs: prs.filter((pr: any) => pr.state === "open").length,
      mergedPRs: prs.filter((pr: any) => pr.state === "closed" && pr.merged_at)
        .length,
      openIssues: issues.filter(
        (issue: any) => issue.state === "open" && !issue.pull_request
      ).length,
      closedIssues: issues.filter(
        (issue: any) => issue.state === "closed" && !issue.pull_request
      ).length,
      lastUpdate: new Date().toISOString(),
    };
  } catch (error) {
    return {
      openPRs: 0,
      mergedPRs: 0,
      openIssues: 0,
      closedIssues: 0,
      lastUpdate: new Date().toISOString(),
    };
  }
}
