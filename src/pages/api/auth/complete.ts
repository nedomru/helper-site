/**
 * Complete authentication - exchange authorized session for JWT tokens
 * POST /api/auth/complete
 *
 * Called by extension after polling shows session is authorized
 */

import type { APIRoute } from 'astro';
import { sessionStorage } from "@/lib/auth/storage.ts";
import { createAccessToken, createRefreshToken } from "@/lib/auth/jwt.ts";
import { AuthSessionStatus } from "@/lib/auth/types.ts";
import type { CompleteAuthResponse } from "@/lib/auth/types.ts";

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse request body
    const body = await request.json();
    const { sessionId } = body;

    // Validate input
    if (!sessionId) {
      const errorResponse: CompleteAuthResponse = {
        success: false,
        error: 'Session ID is required'
      };

      return new Response(JSON.stringify(errorResponse), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Get session
    const session = sessionStorage.getSession(sessionId);

    if (!session) {
      const errorResponse: CompleteAuthResponse = {
        success: false,
        error: 'Invalid session ID'
      };

      return new Response(JSON.stringify(errorResponse), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Check session status
    if (session.status === AuthSessionStatus.EXPIRED) {
      const errorResponse: CompleteAuthResponse = {
        success: false,
        error: 'Session has expired'
      };

      return new Response(JSON.stringify(errorResponse), {
        status: 410,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    if (session.status === AuthSessionStatus.CONSUMED) {
      const errorResponse: CompleteAuthResponse = {
        success: false,
        error: 'Session has already been used'
      };

      return new Response(JSON.stringify(errorResponse), {
        status: 409,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    if (session.status !== AuthSessionStatus.AUTHORIZED) {
      const errorResponse: CompleteAuthResponse = {
        success: false,
        error: 'Session not yet authorized. Please complete authorization in Telegram.'
      };

      return new Response(JSON.stringify(errorResponse), {
        status: 403,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Verify that Telegram user data exists
    if (!session.telegramData) {
      const errorResponse: CompleteAuthResponse = {
        success: false,
        error: 'Authorization data missing'
      };

      return new Response(JSON.stringify(errorResponse), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Generate JWT tokens
    const accessToken = await createAccessToken(
      session.telegramData.id.toString(),
      session.id
    );

    const refreshToken = await createRefreshToken(
      session.telegramData.id.toString(),
      session.id
    );

    // Mark session as consumed
    sessionStorage.consumeSession(session.id);

    const response: CompleteAuthResponse = {
      success: true,
      data: {
        accessToken,
        refreshToken,
        expiresIn: 24 * 60 * 60, // 24 hours
        user: session.telegramData
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
    console.error('Authentication completion error:', error);

    const errorResponse: CompleteAuthResponse = {
      success: false,
      error: 'Failed to complete authentication'
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
