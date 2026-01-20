/**
 * PostgreSQL connection utility
 */

import { Pool } from 'pg';

// Database configuration
const DB_CONFIG = {
  host: import.meta.env.DB_HOST || 'localhost',
  port: parseInt(import.meta.env.DB_PORT || '5432', 10),
  user: import.meta.env.DB_USER,
  password: import.meta.env.DB_PASSWORD,
  database: import.meta.env.DB_NAME,
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
};

// User interface from database
export interface DbUser {
  user_id: bigint;
  access: boolean;
  settings: unknown;
}

// Singleton pool instance
let pool: Pool | null = null;

/**
 * Get or create the database connection pool
 */
export function getPool(): Pool {
  if (!pool) {
    pool = new Pool(DB_CONFIG);

    pool.on('error', (err) => {
      console.error('Unexpected error on idle client', err);
    });
  }

  return pool;
}

/**
 * Get user settings from database by Telegram user ID
 */
export async function getUserSettings(userId: number): Promise<DbUser | null> {
  const client = await getPool().connect();

  try {
    const result = await client.query<DbUser>(
      'SELECT user_id, access, settings FROM users WHERE user_id = $1',
      [userId]
    );

    if (result.rows.length === 0) {
      return null;
    }

    return result.rows[0];
  } catch (error) {
    console.error('Error fetching user settings:', error);
    throw error;
  } finally {
    client.release();
  }
}

/**
 * Close all connections in the pool
 */
export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
  }
}
