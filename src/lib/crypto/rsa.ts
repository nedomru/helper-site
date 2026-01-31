import * as crypto from 'node:crypto';

/**
 * Decrypt data using RSA private key (server-side use)
 * @param encryptedData - Base64-encoded encrypted data
 * @param privateKey - The PEM-formatted private key
 * @returns Decrypted string
 */
export function decryptWithPrivateKey(encryptedData: string, privateKey: string): string {
  const buffer = Buffer.from(encryptedData, 'base64');
  const decrypted = crypto.privateDecrypt(
    {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256',
    },
    buffer
  );
  return decrypted.toString('utf-8');
}

/**
 * Get the public key from environment
 */
export function getPublicKey(): string {
  const publicKey = import.meta.env.RSA_PUBLIC_KEY;
  if (!publicKey) {
    throw new Error('RSA_PUBLIC_KEY is not configured');
  }
  // Convert \n escapes to actual newlines for PEM format
  return publicKey.replace(/\\n/g, '\n');
}

/**
 * Get the private key from environment
 */
export function getPrivateKey(): string {
  const privateKey = import.meta.env.RSA_PRIVATE_KEY;
  if (!privateKey) {
    throw new Error('RSA_PRIVATE_KEY is not configured');
  }
  // Convert \n escapes to actual newlines for PEM format
  return privateKey.replace(/\\n/g, '\n');
}
