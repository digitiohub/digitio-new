"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { buildBlogsApiUrl, type BlogListResponse } from "@/lib/blog-api";
import { fallbackBlogListResponse } from "@/lib/fallback-blog";

type BlogState = {
  loading: boolean;
  error: string | null;
  data: BlogListResponse | null;
  usingFallback: boolean;
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
    data: null,
    usingFallback: false,
  });

  const page = readPositiveInt(searchParams.get("page"), 1);

  const query = useMemo(() => {
    const queryParams = new URLSearchParams();
    queryParams.set("page", String(page));
    return queryParams.toString();
  }, [page]);

  useEffect(() => {
    let cancelled = false;

    async function loadBlogs() {
      try {
        setState({ loading: true, error: null, data: null, usingFallback: false });

        const response = await fetch(`${buildBlogsApiUrl("/blogs")}?${query}`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch blogs (${response.status})`);
        }

        const payload = (await response.json()) as BlogListResponse;

        if (!cancelled) {
          setState({ loading: false, error: null, data: payload, usingFallback: false });
        }
      } catch {
        if (!cancelled) {
          setState({
            loading: false,
            error: null,
            data: fallbackBlogListResponse,
            usingFallback: true,
          });
        }
      }
    }

    loadBlogs();
    return () => {
      cancelled = true;
    };
  }, [query]);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold sm:text-4xl">Blogs</h1>
        <p className="mt-3 text-sm text-white/70 sm:text-base">
          Browse our latest insights and updates.
        </p>
      </div>

      {state.loading && <p className="text-white/70">Loading blogs...</p>}

      {!state.loading && state.error && (
        <p className="rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-red-200">
          {state.error}
        </p>
      )}

      {!state.loading && !state.error && state.data && (
        <>
          {state.data.items.length === 0 ? (
            <p className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/70">
              No blogs found.
            </p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {state.data.items.map((blog) => (
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
          )}

          <div className="mt-10 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
            <Link
              href={`/blogs?page=${Math.max(page - 1, 1)}`}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                state.data.pagination.has_prev
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "pointer-events-none border-white/10 text-white/35"
              }`}
            >
              Previous
            </Link>

            <p className="text-sm text-white/70">
              Page {state.data.pagination.page} of {state.data.pagination.total_pages}
            </p>

            <Link
              href={`/blogs?page=${Math.min(page + 1, state.data.pagination.total_pages)}`}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                state.data.pagination.has_next
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "pointer-events-none border-white/10 text-white/35"
              }`}
            >
              Next
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
