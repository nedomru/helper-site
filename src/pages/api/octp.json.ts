export async function GET({ params, request }) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const response = await fetch(
    `https://api.telegram.org/bot${token}/getUpdates?offset=-1`
  );

  const channelData = await response.json();

  if (!channelData.ok) {
    return new Response(
      JSON.stringify({
        status: "not ok",
      })
    );
  }

  if (channelData.result.length === 0) {
    return new Response(
      JSON.stringify({
        status: "no updates",
      })
    );
  }

  const channelPost = channelData.result[0].channel_post;
  const caption = channelPost.caption || channelPost.text;

  return new Response(
    JSON.stringify({
      status: "ok",
      date: channelPost.date,
      text: caption,
    })
  );
}
