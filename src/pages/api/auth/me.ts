/**
 * Example protected endpoint
 * GET /api/auth/me
 *
 * Returns current user information if authenticated
 */

import type { APIRoute } from 'astro';
import { protectedRoute } from "@/lib/auth/middleware.ts";

export const GET = protectedRoute(async (token) => {
  return new Response(JSON.stringify({
    success: true,
    data: {
      telegramId: token.sub,
      sessionId: token.sessionId,
      issuedAt: new Date(token.iat * 1000).toISOString(),
      expiresAt: new Date(token.exp * 1000).toISOString()
    }
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
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
