"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { buildBlogsApiUrl, type BlogDetail } from "@/lib/blog-api";
import { fallbackBlogDetail } from "@/lib/fallback-blog";

type BlogDetailState = {
  loading: boolean;
  error: string | null;
  blog: BlogDetail | null;
  usingFallback: boolean;
};

export default function BlogViewClient() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug")?.trim() || "";
  const [state, setState] = useState<BlogDetailState>({
    loading: true,
    error: null,
    blog: null,
    usingFallback: false,
  });

  useEffect(() => {
    let cancelled = false;

    async function loadBlog() {
      if (!slug) {
        setState({ loading: false, error: "Missing `slug` query param.", blog: null, usingFallback: false });
        return;
      }

      try {
        setState({ loading: true, error: null, blog: null, usingFallback: false });

        const endpoint = new URL(buildBlogsApiUrl("/blogs"));
        endpoint.searchParams.set("slug", slug);

        const response = await fetch(endpoint.toString(), { method: "GET" });

        if (!response.ok) {
          throw new Error(response.status === 404 ? "Blog not found." : `Failed to fetch blog (${response.status})`);
        }

        const payload = (await response.json()) as BlogDetail;

        if (!cancelled) {
          setState({ loading: false, error: null, blog: payload, usingFallback: false });
        }
      } catch {
        if (!cancelled) {
          setState({
            loading: false,
            error: null,
            blog: { ...fallbackBlogDetail, slug: slug || fallbackBlogDetail.slug },
            usingFallback: true,
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
    <section className="mx-auto w-full max-w-4xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
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

          <h1 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
            {state.blog.title}
          </h1>

          <div
            className="max-w-none text-white/85 leading-8 [&_h1]:mt-10 [&_h1]:mb-5 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:leading-tight [&_h1]:text-white [&_h2]:mt-9 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-white [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:leading-tight [&_h3]:text-white [&_p]:my-5 [&_p]:text-lg [&_p]:leading-8 [&_p]:text-white/85 [&_ul]:my-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_li]:text-lg [&_li]:leading-8 [&_li]:text-white/85 [&_strong]:font-semibold [&_strong]:text-white [&_a]:font-medium [&_a]:text-cyan-300 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-cyan-200"
            dangerouslySetInnerHTML={{ __html: state.blog.content_html }}
          />
        </article>
      )}
    </section>
  );
}
