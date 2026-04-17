import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const writeToken = String(process.env.BLOGS_WRITE_TOKEN || '').trim();

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

function slugify(value) {
  const base = String(value ?? '')
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');

  return base || 'untitled-blog';
}

function asOptionalTrimmedString(value) {
  if (value === null || value === undefined) return null;
  const normalized = String(value).trim();
  return normalized.length > 0 ? normalized : null;
}

async function createUniqueSlug(baseSlug) {
  const safeBase = slugify(baseSlug);
  const maxAttempts = 30;

  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const candidate = attempt === 0 ? safeBase : `${safeBase}-${attempt + 1}`;
    const exists = await pool.query('SELECT 1 FROM blogs WHERE slug = $1 LIMIT 1', [candidate]);
    if (exists.rowCount === 0) return candidate;
  }

  return `${safeBase}-${Date.now()}`;
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

app.post('/blogs', async (req, res) => {
  try {
    if (writeToken) {
      const authHeader = String(req.headers.authorization || '');
      const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';
      if (token !== writeToken) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
    }

    const title = String(req.body?.title ?? '').trim();
    const contentHtml = String(req.body?.contentHtml ?? '').trim();
    const excerpt = String(req.body?.excerpt ?? req.body?.description ?? '').trim();
    const author = String(req.body?.author ?? '').trim();

    if (!title) return res.status(400).json({ error: '`title` is required' });
    if (!contentHtml) return res.status(400).json({ error: '`contentHtml` is required' });
    if (!excerpt) return res.status(400).json({ error: '`excerpt` or `description` is required' });
    if (!author) return res.status(400).json({ error: '`author` is required' });

    const explicitSlug = asOptionalTrimmedString(req.body?.slug);
    const slug = await createUniqueSlug(explicitSlug || title);

    const category = asOptionalTrimmedString(req.body?.category);
    const coverImageUrl = asOptionalTrimmedString(req.body?.coverImageUrl);
    const thumbnailUrl = asOptionalTrimmedString(req.body?.thumbnailUrl);
    const seoTitle = asOptionalTrimmedString(req.body?.seoTitle) ?? title;
    const seoDescription =
      asOptionalTrimmedString(req.body?.seoDescription) ??
      asOptionalTrimmedString(req.body?.description) ??
      excerpt;

    const publishedAtInput = asOptionalTrimmedString(req.body?.publishedAt);
    let publishedAt = null;
    if (publishedAtInput) {
      const parsed = new Date(publishedAtInput);
      if (Number.isNaN(parsed.getTime())) {
        return res.status(400).json({ error: '`publishedAt` must be a valid ISO date-time string' });
      }
      publishedAt = parsed.toISOString();
    }

    const tags = Array.isArray(req.body?.tags) ? req.body.tags : [];
    const normalizedTags = tags
      .map((tag) => String(tag ?? '').trim().toLowerCase())
      .filter(Boolean)
      .slice(0, 20);

    const insertResult = await pool.query(
      `
        INSERT INTO blogs (
          slug,
          title,
          excerpt,
          author,
          category,
          cover_image_url,
          thumbnail_url,
          content_html,
          tags_json,
          seo_title,
          seo_description,
          published_at
        )
        VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9::jsonb, $10, $11, $12
        )
        RETURNING *
      `,
      [
        slug,
        title,
        excerpt,
        author,
        category,
        coverImageUrl,
        thumbnailUrl,
        contentHtml,
        JSON.stringify(normalizedTags),
        seoTitle,
        seoDescription,
        publishedAt,
      ]
    );

    return res.status(201).json(insertResult.rows[0]);
  } catch (err) {
    if (err?.code === '23505') {
      return res.status(409).json({ error: 'A blog with this slug already exists' });
    }

    console.error('Failed to create blog:', err);
    return res.status(500).json({ error: 'Failed to create blog' });
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
