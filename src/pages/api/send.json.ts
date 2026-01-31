/**
 * Send message to authenticated user in Telegram via bot
 * POST /api/send.json
 *
 * Authorized users can send messages to themselves.
 * Messages must be RSA-encrypted using the server's public key.
 * Get the public key from /api/public-key.json
 */

import type { APIRoute } from 'astro';
import { protectedRoute } from '@/lib/auth/middleware.ts';
import { decryptWithPrivateKey, getPrivateKey } from '@/lib/crypto/rsa.ts';

interface SendMessageRequest {
  // RSA-encrypted message (base64-encoded ciphertext)
  encryptedMessage: string;
  // Optional: parse mode (Markdown, MarkdownV2, HTML)
  parseMode?: 'Markdown' | 'MarkdownV2' | 'HTML';
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

    // Validate encrypted message
    if (!body.encryptedMessage || typeof body.encryptedMessage !== 'string') {
      return new Response(JSON.stringify({
        success: false,
        error: 'encryptedMessage is required and must be a string'
      } satisfies SendMessageResponse), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Decrypt RSA-encrypted message
    let decryptedMessage: string;
    try {
      const privateKey = getPrivateKey();
      decryptedMessage = decryptWithPrivateKey(body.encryptedMessage, privateKey);

      // Validate that decryption produced valid text
      if (!decryptedMessage || decryptedMessage.length === 0) {
        throw new Error('Decrypted message is empty');
      }
    } catch (error) {
      console.error('RSA decryption error:', error);
      return new Response(JSON.stringify({
        success: false,
        error: 'Failed to decrypt message'
      } satisfies SendMessageResponse), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Validate message length (Telegram has a 4096 character limit)
    if (decryptedMessage.length > 4096) {
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
      text: decryptedMessage,
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