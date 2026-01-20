/**
 * Authentication middleware for protecting API routes
 */

import type { APIRoute } from 'astro';
import { verifyToken, extractToken } from './jwt';
import type { AuthTokenPayload } from './types';

/**
 * Protected route handler wrapper
 * Wraps an APIRoute to require authentication
 */
export function protectedRoute(
  handler: (token: AuthTokenPayload, request: Request) => Promise<Response> | Response
): APIRoute {
  return async (context) => {
    // Extract token from Authorization header
    const token = extractToken(context.request.headers.get('Authorization'));

    if (!token) {
      return new Response(JSON.stringify({
        error: 'Unauthorized',
        message: 'Authorization header required'
      }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Verify token
    const payload = await verifyToken(token);

    if (!payload) {
      return new Response(JSON.stringify({
        error: 'Unauthorized',
        message: 'Invalid or expired token'
      }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Check if it's an access token
    if (payload.type !== 'access') {
      return new Response(JSON.stringify({
        error: 'Unauthorized',
        message: 'Invalid token type'
      }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Call the protected handler with token payload
    return handler(payload, context.request);
  };
}

/**
 * Optional authentication - adds user info if token is present
 */
export function optionalAuth(
  handler: (token: AuthTokenPayload | null, request: Request) => Promise<Response> | Response
): APIRoute {
  return async (context) => {
    const authHeader = context.request.headers.get('Authorization');
    const token = extractToken(authHeader);
    const payload = token ? await verifyToken(token) : null;

    return handler(payload, context.request);
  };
}
