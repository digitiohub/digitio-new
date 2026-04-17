import type { BlogDetail, BlogListItem, BlogListResponse } from "@/lib/blog-api";

export const FALLBACK_BLOG_SLUG = "digitiohub-content-loading";

export const fallbackBlogDetail: BlogDetail = {
  id: "fallback-blog-1",
  slug: FALLBACK_BLOG_SLUG,
  title: "Blogs Are Temporarily Unavailable",
  excerpt:
    "We are temporarily unable to load live blog posts. Our team is checking the connection and service health.",
  cover_image_url:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
  published_at: new Date().toISOString(),
  author: "DigitioHub Editorial Team",
  category: "Announcements",
  thumbnail_url: null,
  content_html: `
    <p>Our blog service is currently unavailable, so you are seeing a fallback article.</p>

    <h2>What this means</h2>
    <p>Live content could not be fetched from the API at the moment. This is usually temporary and caused by deployment restarts, DB connectivity, or network routing delays.</p>

    <h2>About DigitioHub</h2>
    <p>DigitioHub helps businesses grow with practical digital execution across strategy, content, performance marketing, and web experiences.</p>

    <h2>What to do next</h2>
    <ul>
      <li>Refresh after a minute and retry.</li>
      <li>Visit our main pages to explore services and case studies.</li>
      <li>Contact our team if this keeps happening.</li>
    </ul>

    <p>Thanks for your patience. Live blog content should be back shortly.</p>
  `,
  tags_json: ["announcement", "status", "digitiohub"],
  seo_title: "DigitioHub Blog Status",
  seo_description:
    "DigitioHub blog content is temporarily unavailable. Please check back shortly for live posts.",
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

export const fallbackBlogListItem: BlogListItem = {
  slug: fallbackBlogDetail.slug,
  title: fallbackBlogDetail.title,
  excerpt: fallbackBlogDetail.excerpt,
  cover_image_url: fallbackBlogDetail.cover_image_url,
  published_at: fallbackBlogDetail.published_at,
};

export const fallbackBlogListResponse: BlogListResponse = {
  items: [fallbackBlogListItem],
  pagination: {
    page: 1,
    limit: 9,
    total: 1,
    total_pages: 1,
    has_next: false,
    has_prev: false,
  },
};
