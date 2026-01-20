/**
 * Check session status
 * GET /api/auth/status?sessionId=xxx
 */

import type { APIRoute } from 'astro';
import { sessionStorage } from '../../../lib/auth/storage';
import type { SessionStatusResponse } from '../../../lib/auth/types';

export const GET: APIRoute = async ({ url }) => {
  try {
    // Get session ID from query parameter
    const sessionId = url.searchParams.get('sessionId');

    if (!sessionId) {
      const errorResponse: SessionStatusResponse = {
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
      const errorResponse: SessionStatusResponse = {
        success: false,
        error: 'Session not found'
      };

      return new Response(JSON.stringify(errorResponse), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    const response: SessionStatusResponse = {
      success: true,
      data: {
        status: session.status,
        createdAt: session.createdAt,
        expiresAt: session.expiresAt,
        // Include user data if authorized
        user: session.telegramData
      }
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    });
  } catch (error) {
    console.error('Session status check error:', error);

    const errorResponse: SessionStatusResponse = {
      success: false,
      error: 'Failed to check session status'
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
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  });
};
