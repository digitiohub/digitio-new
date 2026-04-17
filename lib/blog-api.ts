export type BlogListItem = {
  slug: string;
  title: string;
  excerpt: string;
  cover_image_url: string | null;
  published_at: string | null;
};

export type BlogDetail = BlogListItem & {
  id: string;
  author: string;
  category: string | null;
  thumbnail_url: string | null;
  content_html: string;
  tags_json: unknown;
  seo_title: string | null;
  seo_description: string | null;
  created_at: string;
  updated_at: string;
};

export type BlogListResponse = {
  items: BlogListItem[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    total_pages: number;
    has_next: boolean;
    has_prev: boolean;
  };
};

const RAW_API_BASE_URL = process.env.NEXT_PUBLIC_BLOGS_API_URL || "";

export function getBlogsApiBaseUrl() {
  return RAW_API_BASE_URL.replace(/\/+$/, "");
}

export function buildBlogsApiUrl(pathname: string) {
  const baseUrl = getBlogsApiBaseUrl();
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_BLOGS_API_URL is not configured.");
  }

  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${baseUrl}${normalizedPath}`;
}
