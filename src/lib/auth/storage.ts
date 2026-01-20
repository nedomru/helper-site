/**
 * In-memory session storage for authentication
 * In production, replace with Redis or database
 */

import { AuthSession, AuthSessionStatus } from './types';

class SessionStorage {
  private sessions: Map<string, AuthSession> = new Map();
  private readonly SESSION_TTL = 5 * 60 * 1000; // 5 minutes for QR scan
  private readonly CLEANUP_INTERVAL = 60 * 1000; // 1 minute

  constructor() {
    // Start periodic cleanup of expired sessions
    if (typeof window === 'undefined') {
      setInterval(() => this.cleanupExpiredSessions(), this.CLEANUP_INTERVAL);
    }
  }

  /**
   * Create a new authentication session
   */
  createSession(extensionId?: string, ipAddress?: string): AuthSession {
    const sessionId = this.generateSessionId();

    const session: AuthSession = {
      id: sessionId,
      status: AuthSessionStatus.PENDING,
      createdAt: Date.now(),
      expiresAt: Date.now() + this.SESSION_TTL,
      extensionId,
      ipAddress
    };

    this.sessions.set(sessionId, session);
    return session;
  }

  /**
   * Get session by ID
   */
  getSession(sessionId: string): AuthSession | undefined {
    const session = this.sessions.get(sessionId);

    if (!session) {
      return undefined;
    }

    // Check if expired
    if (Date.now() > session.expiresAt) {
      session.status = AuthSessionStatus.EXPIRED;
      this.sessions.set(sessionId, session);
    }

    return session;
  }

  /**
   * Update session with Telegram user data (called by bot webhook)
   */
  authorizeSession(sessionId: string, telegramData: any): boolean {
    const session = this.sessions.get(sessionId);

    if (!session || session.status !== AuthSessionStatus.PENDING) {
      return false;
    }

    if (Date.now() > session.expiresAt) {
      session.status = AuthSessionStatus.EXPIRED;
      this.sessions.set(sessionId, session);
      return false;
    }

    session.status = AuthSessionStatus.AUTHORIZED;
    session.telegramData = telegramData;
    this.sessions.set(sessionId, session);
    return true;
  }

  /**
   * Mark session as consumed (after token generation)
   */
  consumeSession(sessionId: string): boolean {
    const session = this.sessions.get(sessionId);

    if (!session || session.status !== AuthSessionStatus.AUTHORIZED) {
      return false;
    }

    session.status = AuthSessionStatus.CONSUMED;
    this.sessions.set(sessionId, session);
    return true;
  }

  /**
   * Delete a session
   */
  deleteSession(sessionId: string): boolean {
    return this.sessions.delete(sessionId);
  }

  /**
   * Clean up expired sessions
   */
  private cleanupExpiredSessions(): void {
    const now = Date.now();
    for (const [id, session] of this.sessions.entries()) {
      if (now > session.expiresAt) {
        this.sessions.delete(id);
      }
    }
  }

  /**
   * Generate a random session ID (short, URL-safe)
   */
  private generateSessionId(): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 10);
    return `${timestamp}-${random}`;
  }

  /**
   * Get current session count (for monitoring)
   */
  getStats(): { total: number; pending: number; authorized: number } {
    let pending = 0;
    let authorized = 0;

    for (const session of this.sessions.values()) {
      if (session.status === AuthSessionStatus.PENDING) pending++;
      if (session.status === AuthSessionStatus.AUTHORIZED) authorized++;
    }

    return {
      total: this.sessions.size,
      pending,
      authorized
    };
  }
}

// Export singleton instance
export const sessionStorage = new SessionStorage();
