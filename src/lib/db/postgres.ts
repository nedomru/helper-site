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
 * Update user settings by merging with existing settings
 * @param userId - Telegram user ID
 * @param newSettings - Partial settings object to merge
 * @returns Updated user record or null if user not found
 */
export async function updateUserSettings(
  userId: number,
  newSettings: Record<string, unknown>
): Promise<DbUser | null> {
  const client = await getPool().connect();

  try {
    // Get current user and settings
    const currentResult = await client.query<DbUser>(
      'SELECT user_id, access, settings FROM users WHERE user_id = $1',
      [userId]
    );

    if (currentResult.rows.length === 0) {
      return null;
    }

    const currentUser = currentResult.rows[0];

    // Merge settings: deep merge nested objects
    const mergedSettings = deepMerge(
      (currentUser.settings as Record<string, unknown>) || {},
      newSettings
    );

    // Update the user with merged settings
    const updateResult = await client.query<DbUser>(
      'UPDATE users SET settings = $1 WHERE user_id = $2 RETURNING user_id, access, settings',
      [JSON.stringify(mergedSettings), userId]
    );

    return updateResult.rows[0];
  } catch (error) {
    console.error('Error updating user settings:', error);
    throw error;
  } finally {
    client.release();
  }
}

/**
 * Deep merge two objects
 * @param target - The target object to merge into
 * @param source - The source object to merge from
 * @returns Merged object
 */
function deepMerge(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): Record<string, unknown> {
  const result = { ...target };

  for (const [key, value] of Object.entries(source)) {
    if (
      value &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      key in result &&
      result[key] &&
      typeof result[key] === 'object' &&
      !Array.isArray(result[key])
    ) {
      // Both are objects, merge recursively
      result[key] = deepMerge(
        result[key] as Record<string, unknown>,
        value as Record<string, unknown>
      );
    } else {
      // Primitive value, array, or key doesn't exist in target - set/overwrite
      result[key] = value;
    }
  }

  return result;
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
