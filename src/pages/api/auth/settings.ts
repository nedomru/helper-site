/**
 * Protected endpoint for updating user settings
 * PUT /api/auth/settings
 *
 * Merges provided settings with existing user settings (deep merge)
 */

import type { APIRoute } from 'astro';
import { protectedRoute } from '@/lib/auth/middleware';
import { updateUserSettings } from '@/lib/db/postgres';

interface UpdateSettingsRequest {
  settings: Record<string, unknown>;
}

export const PUT = protectedRoute(async (token, request) => {
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

    // Parse request body
    let body: UpdateSettingsRequest;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({
        success: false,
        error: 'Invalid request body: expected JSON'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Validate settings object exists
    if (!body.settings || typeof body.settings !== 'object' || Array.isArray(body.settings)) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Invalid settings: must be an object'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Update user settings (deep merge with existing)
    const updatedUser = await updateUserSettings(userId, body.settings);

    if (!updatedUser) {
      return new Response(JSON.stringify({
        success: false,
        error: 'User not found'
      }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      data: {
        user: {
          id: updatedUser.user_id.toString(),
          access: updatedUser.access,
          settings: updatedUser.settings
        }
      }
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    console.error('Error updating user settings:', error);

    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to update user settings'
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
      'Access-Control-Allow-Methods': 'PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  });
};