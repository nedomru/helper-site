const GITHUB_REPO = "nedomru/helper-site";

interface GitHubRelease {
  tag_name: string;
  name: string;
  body: string | null;
  html_url: string;
  published_at: string;
  prerelease: boolean;
}

export async function GET() {
  try {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`);
    }

    const releases: GitHubRelease[] = await response.json();

    const changelog = releases
      .filter((release) => release.tag_name)
      .map((release) => ({
        version: release.tag_name,
        name: release.name || release.tag_name,
        body: release.body || "Нет описания",
        url: release.html_url,
        date: release.published_at,
        prerelease: release.prerelease,
      }));

    return new Response(JSON.stringify(changelog), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to fetch changelog",
        message: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      },
    );
  }
}