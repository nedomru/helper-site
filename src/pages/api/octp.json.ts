let lastMessage = '';
let lastFetchTime = 0;
let messageTimestamp = 0;

const TELEGRAM_BOT_TOKEN = import.meta.env.TELEGRAM_BOT_TOKEN;
const CHANNEL_USERNAME = import.meta.env.TELEGRAM_OCTP_CHANNEL_ID;
const FETCH_INTERVAL = import.meta.env.OCTP_FETCH_INTERVAL;

function formatEkaterinburgTime(timestamp, includeSeconds = false) {
  const date = new Date(timestamp);
  return date.toLocaleString('ru-RU', {
    timeZone: 'Asia/Yekaterinburg',
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: includeSeconds ? '2-digit' : undefined,
  }).replace(',', '');
}

async function fetchLastMessage() {
  try {
    const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates?chat_id=${CHANNEL_USERNAME}&limit=1`
    );
    const data = await response.json();

    if (data.ok && data.result.length > 0) {
      const message = data.result[0].message || data.result[0].channel_post;
      if (message && message.text) {
        lastMessage = message.text;
        lastFetchTime = Date.now();
        messageTimestamp = message.date * 1000; // Convert Telegram timestamp (seconds) to milliseconds
      }
    }
  } catch (error) {
    console.error('Error fetching message from Telegram:', error);
  }
}

// Initial fetch
fetchLastMessage();

// Set up periodic fetching
setInterval(fetchLastMessage, FETCH_INTERVAL);

export const GET = async () => {
  // Return the cached message with all times in Ekaterinburg format
  return new Response(JSON.stringify({
    message: lastMessage,
    lastFetchTime: formatEkaterinburgTime(lastFetchTime, true), // Include seconds
    messageTimestamp: formatEkaterinburgTime(messageTimestamp) // Without seconds
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    }
  });
};