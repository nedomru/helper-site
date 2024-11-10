// src/pages/api/last-message.js
let lastMessage = '';
let lastFetchTime = 0;
let messageTimestamp = 0;

// Configuration
const TELEGRAM_BOT_TOKEN = import.meta.env.TELEGRAM_BOT_TOKEN
const CHANNEL_USERNAME = import.meta.env.TELEGRAM_OCTP_CHANNEL_ID
const FETCH_INTERVAL = import.meta.env.OCTP_FETCH_INTERVAL

function formatEkaterinburgTime(timestamp, includeSeconds = false) {
  if (!timestamp) return '';
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
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates?chat_id=${CHANNEL_USERNAME}&offset=-1`
    );
    const data = await response.json();
    console.log('Telegram API response:', data); // Debug logging

    if (data.ok && data.result.length > 0) {
      const update = data.result[0];
      const message = update.message || update.channel_post;

      if (message) {
        // Handle both text messages and photo messages with captions
        if (message.text) {
          lastMessage = message.text;
        } else if (message.photo && message.caption) {
          lastMessage = message.caption;
        } else if (message.photo) {
          lastMessage = '[Photo]'; // Fallback if there's a photo but no caption
        }

        if (lastMessage) { // Only update timestamps if we got a message
          lastFetchTime = Date.now();
          messageTimestamp = message.date * 1000;
        }
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
  return new Response(JSON.stringify({
    message: lastMessage,
    lastFetchTime: formatEkaterinburgTime(lastFetchTime, true),
    messageTimestamp: formatEkaterinburgTime(messageTimestamp)
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    }
  });
};