export async function GET() {
  return new Response(
    JSON.stringify({
      addons: {
        "{724d1c91-059e-4392-8478-494513fc8241}": {
          updates: [
            {
              version: "2.9.4.3",
              update_link:
                "https://github.com/nedomru-dev/helper-site/releases/download/2.9.4.3/domhelper.xpi",
            },
          ],
        },
      },
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    },
  );
}
