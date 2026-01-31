/**
 * Public key endpoint for RSA encryption
 * GET /api/public-key.json
 *
 * Returns the server's public key for clients to encrypt messages
 */

import type { APIRoute } from 'astro';
import { getPublicKey } from '@/lib/crypto/rsa.ts';

interface PublicKeyResponse {
  publicKey: string;
  keyType: 'RSA';
  keySize: number;
}

export const GET: APIRoute = async () => {
  try {
    const publicKey = getPublicKey();

    return new Response(JSON.stringify({
      publicKey: publicKey.replace(/\n/g, '\\n'), // Return as single-line string
      keyType: 'RSA',
      keySize: 2048
    } satisfies PublicKeyResponse), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    console.error('Error getting public key:', error);

    return new Response(JSON.stringify({
      error: 'Failed to retrieve public key'
    }), {
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
