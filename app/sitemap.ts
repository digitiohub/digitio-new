import type { MetadataRoute } from "next";
import ogPages from "@/data/og-pages.json";
import projectsData from "@/data/projects.json";
import { buildBlogsApiUrl, type BlogListResponse } from "@/lib/blog-api";
import { getSiteMetadataBase } from "@/lib/metadata";

type Project = {
  slug: string;
};

type BlogSitemapItem = {
  slug: string;
  published_at: string | null;
};

export const dynamic = "force-dynamic";

function getStaticRoutes() {
  return [...new Set(ogPages.map((page) => page.route).filter((route) => !route.includes("[")))];
}

async function fetchPublishedBlogs(): Promise<BlogSitemapItem[]> {
  const blogs: BlogSitemapItem[] = [];

  try {
    let page = 1;
    let hasNext = true;

    while (hasNext) {
      const endpoint = new URL(buildBlogsApiUrl("/blogs"));
      endpoint.searchParams.set("page", String(page));
      endpoint.searchParams.set("limit", "50");

      const response = await fetch(endpoint.toString(), {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) break;

      const payload = (await response.json()) as BlogListResponse;
      blogs.push(
        ...payload.items.map((item) => ({
          slug: item.slug,
          published_at: item.published_at,
        })),
      );

      hasNext = payload.pagination.has_next;
      page += 1;
    }
  } catch {
    return [];
  }

  return blogs;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const metadataBase = getSiteMetadataBase();
  const now = new Date();
  const staticRoutes = getStaticRoutes();
  const projects = projectsData as Project[];
  const blogs = await fetchPublishedBlogs();

  const entries: MetadataRoute.Sitemap = [
    ...staticRoutes.map((route) => ({
      url: new URL(route, metadataBase).toString(),
      lastModified: now,
    })),
    ...projects.map((project) => ({
      url: new URL(`/portfolio/${project.slug}`, metadataBase).toString(),
      lastModified: now,
    })),
    ...blogs.map((blog) => ({
      url: new URL(`/blogs/${blog.slug}`, metadataBase).toString(),
      lastModified: blog.published_at ? new Date(blog.published_at) : now,
      changeFrequency: "daily" as const,
    })),
  ];

  const uniqueByUrl = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const entry of entries) {
    uniqueByUrl.set(entry.url, entry);
  }

  return [...uniqueByUrl.values()];
}
