"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { buildBlogsApiUrl, type BlogDetail } from "@/lib/blog-api";

type BlogDetailState = {
  loading: boolean;
  error: string | null;
  blog: BlogDetail | null;
};

export default function BlogViewPage() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug")?.trim() || "";

  const [state, setState] = useState<BlogDetailState>({
    loading: true,
    error: null,
    blog: null,
  });

  useEffect(() => {
    let cancelled = false;

    async function loadBlog() {
      if (!slug) {
        setState({ loading: false, error: "Missing `slug` query param.", blog: null });
        return;
      }

      try {
        setState({ loading: true, error: null, blog: null });

        const endpoint = new URL(buildBlogsApiUrl("/blogs"));
        endpoint.searchParams.set("slug", slug);

        const response = await fetch(endpoint.toString(), { method: "GET" });

        if (!response.ok) {
          throw new Error(response.status === 404 ? "Blog not found." : `Failed to fetch blog (${response.status})`);
        }

        const payload = (await response.json()) as BlogDetail;

        if (!cancelled) {
          setState({ loading: false, error: null, blog: payload });
        }
      } catch (error) {
        if (!cancelled) {
          setState({
            loading: false,
            error: error instanceof Error ? error.message : "Failed to fetch blog.",
            blog: null,
          });
        }
      }
    }

    loadBlog();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/blogs?page=1"
        className="mb-8 inline-flex rounded-full border border-white/30 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
      >
        Back to blogs
      </Link>

      {state.loading && <p className="text-white/70">Loading article...</p>}

      {!state.loading && state.error && (
        <p className="rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-red-200">
          {state.error}
        </p>
      )}

      {!state.loading && !state.error && state.blog && (
        <article>
          {state.blog.cover_image_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={state.blog.cover_image_url}
              alt={state.blog.title}
              className="mb-8 h-64 w-full rounded-2xl object-cover sm:h-80"
            />
          ) : null}

          <p className="mb-2 text-xs uppercase tracking-wider text-white/50">
            {state.blog.published_at
              ? new Date(state.blog.published_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : "Unpublished"}
            {state.blog.author ? `  •  ${state.blog.author}` : ""}
          </p>

          <h1 className="mb-4 text-3xl font-semibold sm:text-4xl">{state.blog.title}</h1>

          {state.blog.excerpt ? (
            <p className="mb-8 text-base text-white/70 sm:text-lg">{state.blog.excerpt}</p>
          ) : null}

          <div
            className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-white/85 prose-a:text-cyan-300"
            dangerouslySetInnerHTML={{ __html: state.blog.content_html }}
          />
        </article>
      )}
    </section>
  );
}
