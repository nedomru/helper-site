/**
 * Manually authorize a session (for testing/admin)
 * POST /api/auth/authorize
 *
 * This bypasses Telegram and directly authorizes a session with provided user data.
 * In production, you should add authentication/authorization to this endpoint.
 */

import type { APIRoute } from 'astro';
import { sessionStorage } from '../../../lib/auth/storage';
import type { TelegramUserData } from '../../../lib/auth/types';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse request body
    const body = await request.json();
    const { sessionId, userData } = body;

    // Validate input
    if (!sessionId) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Session ID is required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    if (!userData || !userData.id) {
      return new Response(JSON.stringify({
        success: false,
        error: 'User data with id is required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    // Get session to verify it exists
    const session = sessionStorage.getSession(sessionId);

    if (!session) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Session not found or expired'
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    // Authorize the session
    const authorized = sessionStorage.authorizeSession(sessionId, userData);

    if (!authorized) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Failed to authorize session. Session may not be in pending state.'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Session authorized successfully'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    });
  } catch (error) {
    console.error('Manual authorization error:', error);

    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to authorize session'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
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
