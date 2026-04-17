"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { buildBlogsApiUrl, type BlogListItem, type BlogListResponse } from "@/lib/blog-api";
import { fallbackBlogListResponse } from "@/lib/fallback-blog";

type BlogState = {
  loading: boolean;
  error: string | null;
  items: BlogListItem[];
  pagination: BlogListResponse["pagination"] | null;
  usingFallback: boolean;
  loadingMore: boolean;
};

function readPositiveInt(value: string | null, fallback: number) {
  const parsed = Number.parseInt(String(value ?? ""), 10);
  if (!Number.isFinite(parsed) || parsed < 1) return fallback;
  return parsed;
}

export default function BlogsListingPage() {
  const searchParams = useSearchParams();
  const [state, setState] = useState<BlogState>({
    loading: true,
    error: null,
    items: [],
    pagination: null,
    usingFallback: false,
    loadingMore: false,
  });

  const initialPage = readPositiveInt(searchParams.get("page"), 1);

  const query = useMemo(() => {
    const queryParams = new URLSearchParams();
    queryParams.set("page", String(initialPage));
    return queryParams.toString();
  }, [initialPage]);

  useEffect(() => {
    let cancelled = false;

    async function loadBlogs() {
      try {
        setState({
          loading: true,
          error: null,
          items: [],
          pagination: null,
          usingFallback: false,
          loadingMore: false,
        });

        const response = await fetch(`${buildBlogsApiUrl("/blogs")}?${query}`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch blogs (${response.status})`);
        }

        const payload = (await response.json()) as BlogListResponse;

        if (!cancelled) {
          setState({
            loading: false,
            error: null,
            items: payload.items,
            pagination: payload.pagination,
            usingFallback: false,
            loadingMore: false,
          });
        }
      } catch {
        if (!cancelled) {
          setState({
            loading: false,
            error: null,
            items: fallbackBlogListResponse.items,
            pagination: fallbackBlogListResponse.pagination,
            usingFallback: true,
            loadingMore: false,
          });
        }
      }
    }

    loadBlogs();
    return () => {
      cancelled = true;
    };
  }, [query]);

  async function handleLoadMore() {
    if (!state.pagination?.has_next || state.loadingMore) return;

    const nextPage = state.pagination.page + 1;

    try {
      setState((prev) => ({ ...prev, loadingMore: true }));

      const queryParams = new URLSearchParams();
      queryParams.set("page", String(nextPage));

      const response = await fetch(`${buildBlogsApiUrl("/blogs")}?${queryParams.toString()}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch more blogs (${response.status})`);
      }

      const payload = (await response.json()) as BlogListResponse;

      setState((prev) => ({
        ...prev,
        items: [...prev.items, ...payload.items],
        pagination: payload.pagination,
        loadingMore: false,
      }));
    } catch {
      setState((prev) => ({
        ...prev,
        loadingMore: false,
        error: "Could not load more blogs right now. Please try again.",
      }));
    }
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold sm:text-4xl">Blogs</h1>
        <p className="mt-3 text-sm text-white/70 sm:text-base">
          Browse our latest insights and updates.
        </p>
      </div>

      {state.loading && <p className="text-white/70">Loading blogs...</p>}

      {!state.loading && state.error && (
        <p className="mb-6 rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-red-200">
          {state.error}
        </p>
      )}

      {!state.loading && state.items.length > 0 && state.pagination && (
        <>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {state.items.map((blog) => (
              <article
                key={blog.slug}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
              >
                {blog.cover_image_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={blog.cover_image_url}
                    alt={blog.title}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-48 w-full bg-white/10" />
                )}

                <div className="space-y-3 p-5">
                  <p className="text-xs uppercase tracking-wider text-white/50">
                    {blog.published_at
                      ? new Date(blog.published_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })
                      : "Unpublished"}
                  </p>
                  <h2 className="line-clamp-2 text-lg font-semibold">{blog.title}</h2>
                  <p className="line-clamp-3 text-sm text-white/70">{blog.excerpt}</p>
                  <Link
                    href={`/blogs/view?slug=${encodeURIComponent(blog.slug)}`}
                    className="inline-flex rounded-full border border-cyan-300/60 px-4 py-2 text-xs font-semibold tracking-wide text-cyan-200 transition hover:bg-cyan-300/10"
                  >
                    Read article
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {state.pagination.has_next ? (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={handleLoadMore}
                disabled={state.loadingMore}
                className="rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {state.loadingMore ? "Loading..." : "Load more"}
              </button>
            </div>
          ) : null}
        </>
      )}

      {!state.loading && !state.error && state.items.length === 0 && (
        <p className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/70">
          No blogs found.
        </p>
      )}
    </section>
  );
}
