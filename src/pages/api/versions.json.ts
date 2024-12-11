export async function GET() {
  return new Response(
    JSON.stringify({
      addons: {
        "{724d1c91-059e-4392-8478-494513fc8241}": {
          updates: [
            {
              version: "2.2",
              update_link:
                "https://github.com/AuthFailed/domru-helper/releases/download/2.2/domhelper.xpi",
            },
            {
              version: "2.3",
              update_link:
                "https://github.com/AuthFailed/domru-helper/releases/download/2.3/domhelper.xpi",
            },
            {
              version: "2.6",
              update_link:
                "https://github.com/AuthFailed/domru-helper/releases/download/2.6/domhelper.xpi",
              update_info_url: "https://helper.chrsnv.ru/wiki/versions/2-6/",
            },
            {
              version: "2.8.2",
              update_link:
                "https://github.com/AuthFailed/domru-helper/releases/download/2.8.2/domhelper.xpi",
              update_info_url: "https://helper.chrsnv.ru/wiki/versions/2-8-2/",
            },
            {
              version: "2.9.1",
              update_link:
                "https://github.com/AuthFailed/domru-helper/releases/download/2.9.1/domhelper.xpi",
            },
            {
              version: "2.9.2",
              update_link:
                "https://github.com/AuthFailed/domru-helper/releases/download/2.9.2/domhelper.xpi",
            },
            {
              version: "2.9.3",
              update_link:
                "https://github.com/AuthFailed/domru-helper/releases/download/2.9.3/domhelper.xpi",
            },
            {
              version: "2.9.4",
              update_link:
                "https://github.com/AuthFailed/domru-helper/releases/download/2.9.4/domhelper.xpi",
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
