import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('Missing DATABASE_URL in environment variables.');
}

function parseBoolean(value, defaultValue = false) {
  if (typeof value !== 'string') return defaultValue;
  const normalized = value.trim().toLowerCase();
  if (normalized === 'true' || normalized === '1' || normalized === 'yes') return true;
  if (normalized === 'false' || normalized === '0' || normalized === 'no') return false;
  return defaultValue;
}

const useSsl = parseBoolean(process.env.DATABASE_SSL, false);
const rejectUnauthorized = parseBoolean(process.env.DATABASE_SSL_REJECT_UNAUTHORIZED, false);

const pool = new Pool({
  connectionString,
  ssl: useSsl ? { rejectUnauthorized } : false,
});

pool.on('error', (error) => {
  console.error('Unexpected PostgreSQL client error:', error);
});

export default pool;
