/**
 * JWT token generation and verification
 * Simple implementation using Web Crypto API / Node.js crypto
 */

/**
 * JWT token generation and verification
 * Simple implementation using Web Crypto API / Node.js crypto
 */
import type { AuthTokenPayload } from "./types";

// Get JWT secret from environment or use default (for development)
const JWT_SECRET = import.meta.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_ALGORITHM = 'HS256';

/**
 * Base64URL encode a string
 */
function base64UrlEncode(data: string): string {
  const base64 = btoa(data);
  return base64
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

/**
 * Base64URL decode a string
 */
function base64UrlDecode(data: string): string {
  let base64 = data.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) {
    base64 += '=';
  }
  return atob(base64);
}

/**
 * Sign data with HMAC-SHA256
 */
async function sign(data: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(secret);
  const messageData = encoder.encode(data);

  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign('HMAC', cryptoKey, messageData);
  const signatureArray = Array.from(new Uint8Array(signature));
  const signatureBase64 = btoa(String.fromCharCode.apply(null, signatureArray));

  return signatureBase64
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

/**
 * Verify signature
 */
async function verify(data: string, signature: string, secret: string): Promise<boolean> {
  const expectedSignature = await sign(data, secret);
  return signature === expectedSignature;
}

/**
 * Create a JWT token
 */
export async function createToken(
  payload: Omit<AuthTokenPayload, 'iat' | 'exp'>,
  expiresIn: number = 24 * 60 * 60 // 24 hours default
): Promise<string> {
  const header = {
    alg: JWT_ALGORITHM,
    typ: 'JWT'
  };

  const now = Math.floor(Date.now() / 1000);
  const fullPayload: AuthTokenPayload = {
    ...payload,
    iat: now,
    exp: now + expiresIn
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(fullPayload));
  const data = `${encodedHeader}.${encodedPayload}`;

  const signature = await sign(data, JWT_SECRET);

  return `${data}.${signature}`;
}

/**
 * Verify and decode a JWT token
 */
export async function verifyToken(token: string): Promise<AuthTokenPayload | null> {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      return null;
    }

    const [encodedHeader, encodedPayload, signature] = parts;
    const data = `${encodedHeader}.${encodedPayload}`;

    const isValid = await verify(data, signature, JWT_SECRET);
    if (!isValid) {
      return null;
    }

    const payload: AuthTokenPayload = JSON.parse(base64UrlDecode(encodedPayload));

    // Check expiration
    const now = Math.floor(Date.now() / 1000);
    if (payload.exp < now) {
      return null;
    }

    return payload;
  } catch (error) {
    console.error('Token verification error:', error);
    return null;
  }
}

/**
 * Create access token (24 hours)
 */
export async function createAccessToken(
  telegramId: string,
  sessionId: string
): Promise<string> {
  return createToken({
    sub: telegramId.toString(),
    sessionId,
    type: 'access'
  }, 24 * 60 * 60); // 24 hours
}

/**
 * Create refresh token (30 days)
 */
export async function createRefreshToken(
  telegramId: string,
  sessionId: string
): Promise<string> {
  return createToken({
    sub: telegramId.toString(),
    sessionId,
    type: 'refresh'
  }, 30 * 24 * 60 * 60); // 30 days
}

/**
 * Extract token from Authorization header
 */
export function extractToken(authHeader: string | null): string | null {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  return authHeader.substring(7);
}
