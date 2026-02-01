import type {APIRoute} from 'astro';

export const GITHUB_REPO = "nedomru/helper-site";
export const ADDON_ID = "{724d1c91-059e-4392-8478-494513fc8241}";

interface GitHubRelease {
  tag_name: string;
  name: string;
  prerelease: boolean;
  published_at: string;
}

export async function getVersionsManifest(includePrerelease: boolean) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/releases`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`);
    }

    const releases: GitHubRelease[] = await response.json();

    const filteredReleases = releases.filter(
      (release) => release.prerelease === includePrerelease
    );

    const latestRelease = filteredReleases[0];

    if (!latestRelease) {
      return new Response(JSON.stringify({ addons: {} }), {
        status: 200,
        headers: getCORSHeaders(),
      });
    }

    const manifest = {
      addons: {
        [ADDON_ID]: {
          updates: [
            {
              version: latestRelease.tag_name.replace(/^v/, ""),
              update_link: `https://github.com/${GITHUB_REPO}/releases/download/${latestRelease.tag_name}/domhelper.xpi`,
            },
          ],
        },
      },
    };

    return new Response(JSON.stringify(manifest), {
      status: 200,
      headers: getCORSHeaders(),
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ addons: {} }),
      {
        status: 500,
        headers: getCORSHeaders(),
      }
    );
  }
}

export function getCORSHeaders() {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

export const GET: APIRoute = async () => {
  return getVersionsManifest(false);
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: getCORSHeaders(),
  });
};
