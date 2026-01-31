/**
 * Send message to authenticated user in Telegram via bot
 * POST /api/telegram/send-message.json
 *
 * Authorized users can send messages to themselves
 */

import type { APIRoute } from 'astro';
import { protectedRoute } from '@/lib/auth/middleware.ts';

interface SendMessageRequest {
  message: string;
  // Optional: parse mode (Markdown, MarkdownV2, HTML)
  parseMode?: 'Markdown' | 'MarkdownV2' | 'HTML';
  // Optional: whether message is base64 encoded (default: true)
  encoded?: boolean;
}

interface SendMessageResponse {
  success: boolean;
  data?: {
    messageId: number;
    sentAt: string;
  };
  error?: string;
}

export const POST = protectedRoute(async (token, request) => {
  try {
    const body: SendMessageRequest = await request.json();

    // Validate message
    if (!body.message || typeof body.message !== 'string') {
      return new Response(JSON.stringify({
        success: false,
        error: 'Message is required and must be a string'
      } satisfies SendMessageResponse), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Decode base64 message if encoded (default: true)
    let decodedMessage: string;
    const isEncoded = body.encoded !== false; // default to true

    if (isEncoded) {
      try {
        // Handle URL-safe base64 encoding
        const normalizedBase64 = body.message
          .replace(/-/g, '+')
          .replace(/_/g, '/');

        // Decode base64
        const buffer = Buffer.from(normalizedBase64, 'base64');
        decodedMessage = buffer.toString('utf-8');

        // Validate that decoding produced valid UTF-8
        if (!decodedMessage || decodedMessage.length === 0) {
          throw new Error('Decoded message is empty');
        }
      } catch (error) {
        return new Response(JSON.stringify({
          success: false,
          error: 'Failed to decode base64 message'
        } satisfies SendMessageResponse), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    } else {
      decodedMessage = body.message;
    }

    // Validate message length (Telegram has a 4096 character limit)
    if (decodedMessage.length > 4096) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Message is too long (maximum 4096 characters)'
      } satisfies SendMessageResponse), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Get bot token from environment
    const botToken = import.meta.env.TELEGRAM_BOT_TOKEN;
    if (!botToken) {
      console.error('TELEGRAM_BOT_TOKEN is not configured');
      return new Response(JSON.stringify({
        success: false,
        error: 'Bot configuration error'
      } satisfies SendMessageResponse), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Use authenticated user's Telegram ID from session
    const targetChatId = token.sub;

    // Send message via Telegram Bot API
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const telegramBody = {
      chat_id: targetChatId,
      text: decodedMessage,
      parse_mode: body.parseMode || 'HTML'
    };

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(telegramBody)
    });

    const telegramResponse = await response.json();

    if (!telegramResponse.ok) {
      console.error('Telegram API error:', telegramResponse.description);
      return new Response(JSON.stringify({
        success: false,
        error: `Failed to send message: ${telegramResponse.description || 'Unknown error'}`
      } satisfies SendMessageResponse), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      data: {
        messageId: telegramResponse.result.message_id,
        sentAt: new Date().toISOString()
      }
    } satisfies SendMessageResponse), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('Error sending Telegram message:', error);

    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to send message'
    } satisfies SendMessageResponse), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
});

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  });
};