const TELEGRAM_BOT_TOKEN = import.meta.env.TELEGRAM_BOT_TOKEN;
const CHANNEL_USERNAME = import.meta.env.TELEGRAM_EXAMPLES_CHANNEL_ID;

// Функция для отправки сообщения в Telegram канал
async function sendMessageToChannel(message) {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHANNEL_USERNAME,
          text: message,
          parse_mode: 'HTML' // Поддержка HTML форматирования
        })
      }
    );

    const data = await response.json();
    
    if (!data.ok) {
      throw new Error(`Telegram API Error: ${data.description}`);
    }

    return data;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    throw error;
  }
}

export const POST = async ({ request }) => {
  try {
    // Проверяем Content-Type
    if (!request.headers.get('content-type')?.includes('application/json')) {
      return new Response(
        JSON.stringify({ error: 'Content-Type must be application/json' }),
        {
          status: 415,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // Получаем данные из тела запроса
    const body = await request.json();

    // Проверяем наличие сообщения
    if (!body.message) {
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // Отправляем сообщение в Telegram
    const result = await sendMessageToChannel(body.message);

    // Возвращаем успешный ответ
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Message sent successfully',
        result
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      }
    );
  } catch (error) {
    // Обрабатываем ошибки
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};

// Обработка OPTIONS запроса для CORS
export const OPTIONS = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  });
};