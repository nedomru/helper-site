/**
 * Authentication system types for Telegram-based extension authentication
 */

// Session states
export enum AuthSessionStatus {
  PENDING = 'pending',
  AUTHORIZED = 'authorized',
  EXPIRED = 'expired',
  CONSUMED = 'consumed'
}

// Authentication session stored in memory
export interface AuthSession {
  // Session ID (UUID - used in deep link)
  id: string;
  // Current status
  status: AuthSessionStatus;
  // Creation timestamp
  createdAt: number;
  // Expiration timestamp (5 minutes for QR scan)
  expiresAt: number;
  // Telegram user data (populated after authorization)
  telegramData?: TelegramUserData;
  // Extension identifier (optional, for binding to specific extension instance)
  extensionId?: string;
  // IP address for security logging
  ipAddress?: string;
}

// Telegram user data received from bot
export interface TelegramUserData {
  // Telegram user ID
  id: number;
  // Username (optional)
  username?: string;
  // First name
  first_name: string;
  // Last name (optional)
  last_name?: string;
  // Language code
  language_code?: string;
  // Profile photo ID (optional)
  photo_url?: string;
}

// JWT token payload
export interface AuthTokenPayload {
  // User's Telegram ID
  sub: string;
  // Session ID
  sessionId: string;
  // Token type
  type: 'access' | 'refresh';
  // Issued at
  iat: number;
  // Expiration time
  exp: number;
}

// API response types
export interface CreateSessionResponse {
  success: boolean;
  data?: {
    sessionId: string;
    // Deep link to Telegram bot with session ID
    botLink: string;
    // Expiration time in seconds
    expiresIn: number;
  };
  error?: string;
}

export interface CompleteAuthResponse {
  success: boolean;
  data?: {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    user: TelegramUserData;
  };
  error?: string;
}

export interface SessionStatusResponse {
  success: boolean;
  data?: {
    status: AuthSessionStatus;
    createdAt: number;
    expiresAt: number;
    // User data if authorized
    user?: TelegramUserData;
  };
  error?: string;
}

// Telegram webhook update types
export interface TelegramUpdate {
  update_id: number;
  message?: TelegramMessage;
  callback_query?: TelegramCallbackQuery;
}

export interface TelegramMessage {
  message_id: number;
  from: TelegramUserData;
  chat: {
    id: number;
    type: 'private' | 'group' | 'supergroup' | 'channel';
  };
  text?: string;
}

export interface TelegramCallbackQuery {
  id: string;
  from: TelegramUserData;
  message?: TelegramMessage;
  data: string;
}
