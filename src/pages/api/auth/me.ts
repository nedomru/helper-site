/**
 * Protected endpoint that returns current user information and settings
 * GET /api/auth/me
 */

import type { APIRoute } from 'astro';
import { protectedRoute } from "@/lib/auth/middleware.ts";
import { getUserSettings } from "@/lib/db/postgres.ts";

export const GET = protectedRoute(async (token) => {
  try {
    const userId = parseInt(token.sub, 10);

    if (isNaN(userId)) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Invalid user ID in token'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    const userSettings = await getUserSettings(userId);

    return new Response(JSON.stringify({
      success: true,
      data: {
        telegramId: token.sub,
        sessionId: token.sessionId,
        issuedAt: new Date(token.iat * 1000).toISOString(),
        expiresAt: new Date(token.exp * 1000).toISOString(),
        user: userSettings ? {
          userId: userSettings.user_id.toString(),
          access: userSettings.access,
          settings: userSettings.settings
        } : null
      }
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    console.error('Error fetching user data:', error);

    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to fetch user data'
    }), {
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
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  });
};
