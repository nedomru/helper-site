/**
 * Create a new authentication session
 * POST /api/auth/session
 */

import type { APIRoute } from 'astro';
import { sessionStorage } from "@/lib/auth/storage.ts";
import type { CreateSessionResponse } from "@/lib/auth/types.ts";

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse request body
    const body = await request.json().catch(() => ({}));
    const { extensionId } = body;

    // Get client IP for security logging
    const ipAddress = request.headers.get('x-forwarded-for') ||
                      request.headers.get('x-real-ip') ||
                      'unknown';

    // Create new session
    const session = sessionStorage.createSession(extensionId, ipAddress);

    // Generate Telegram bot deep link
    const botUsername = import.meta.env.TELEGRAM_BOT_USERNAME || 'YourBot';
    const botLink = `https://t.me/${botUsername}?start=${session.id}`;

    // Calculate expiration time in seconds
    const expiresIn = Math.floor((session.expiresAt - Date.now()) / 1000);

    const response: CreateSessionResponse = {
      success: true,
      data: {
        sessionId: session.id,
        botLink,
        expiresIn
      }
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    });
  } catch (error) {
    console.error('Session creation error:', error);

    const errorResponse: CreateSessionResponse = {
      success: false,
      error: 'Failed to create session'
    };

    return new Response(JSON.stringify(errorResponse), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};

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
