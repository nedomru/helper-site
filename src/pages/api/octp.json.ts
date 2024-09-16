import { config } from "dotenv";

// Загружаем переменные окружения из .env файла
config();

export async function GET() {
  const token = process.env.TELEGRAM_BOT_TOKEN;

  if (!token) {
    return new Response(
      JSON.stringify({
        status: "missing token",
      }),

      { status: 500 }
    );
  }

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
      date: channelPost.date,
      text: caption,
    }),
    {
      status: 200,
    }
  );
}
