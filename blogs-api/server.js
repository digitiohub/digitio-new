import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();
const PORT = Number(process.env.PORT) || 3001;

const allowedOrigins = (process.env.FRONTEND_ORIGIN || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const corsOptions = {
  origin(origin, callback) {
    // Allow server-to-server requests, curl, and browser direct-open without Origin header.
    if (!origin) return callback(null, true);

    // If FRONTEND_ORIGIN is not configured yet, allow all origins to simplify initial deployment checks.
    if (allowedOrigins.length === 0) return callback(null, true);

    if (allowedOrigins.includes(origin)) return callback(null, true);

    return callback(new Error('CORS: Origin not allowed'));
  },
};

app.use(cors(corsOptions));

app.use(express.json());

function parsePositiveInt(value, fallback, max = Number.MAX_SAFE_INTEGER) {
  const parsed = Number.parseInt(String(value ?? ''), 10);
  if (!Number.isFinite(parsed) || parsed < 1) return fallback;
  return Math.min(parsed, max);
}

app.get('/', (req, res) => {
  res.json({
    name: 'blogs-api',
    status: 'ok',
    endpoints: ['/health', '/blogs'],
  });
});

// Health check
app.get('/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ ok: true, db: 'up' });
  } catch (err) {
    console.error('Health check failed:', err);
    res.status(500).json({ ok: false, db: 'down' });
  }
});

// Get all blogs
app.get('/blogs', async (req, res) => {
  try {
    const slugQuery = typeof req.query.slug === 'string' ? req.query.slug.trim() : '';

    // Query-param detail mode: /blogs?slug=your-blog-slug
    if (slugQuery) {
      const result = await pool.query(
        `
          SELECT *
          FROM blogs
          WHERE slug = $1
            AND published_at IS NOT NULL
            AND published_at <= NOW()
          LIMIT 1
        `,
        [slugQuery]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Not found' });
      }

      return res.json(result.rows[0]);
    }

    const page = parsePositiveInt(req.query.page, 1, 1000000);
    const limit = parsePositiveInt(req.query.limit, 9, 50);
    const offset = (page - 1) * limit;

    const [countResult, listResult] = await Promise.all([
      pool.query(
        `
          SELECT COUNT(*)::int AS total
          FROM blogs
          WHERE published_at IS NOT NULL
            AND published_at <= NOW()
        `
      ),
      pool.query(
        `
          SELECT slug, title, excerpt, cover_image_url, published_at
          FROM blogs
          WHERE published_at IS NOT NULL
            AND published_at <= NOW()
          ORDER BY published_at DESC
          LIMIT $1 OFFSET $2
        `,
        [limit, offset]
      ),
    ]);

    const total = countResult.rows[0]?.total ?? 0;
    const totalPages = total === 0 ? 1 : Math.ceil(total / limit);

    return res.json({
      items: listResult.rows,
      pagination: {
        page,
        limit,
        total,
        total_pages: totalPages,
        has_next: page < totalPages,
        has_prev: page > 1,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err && err.message && err.message.startsWith('CORS:')) {
    return res.status(403).json({ error: err.message });
  }

  console.error('Unhandled server error:', err);
  return res.status(500).json({ error: 'Internal Server Error' });
});

const server = app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});

async function shutdown(signal) {
  console.log(`${signal} received, closing server...`);

  server.close(async () => {
    try {
      await pool.end();
      console.log('Database pool closed.');
    } catch (err) {
      console.error('Error closing database pool:', err);
    } finally {
      process.exit(0);
    }
  });
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
