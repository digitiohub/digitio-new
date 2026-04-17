import type { Metadata } from "next";
import { Suspense } from "react";
import BlogViewClient from "@/components/blogs/BlogViewClient";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return createPageMetadata("blogs", `/blogs/${slug}`);
}

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <Suspense
      fallback={
        <section className="mx-auto w-full max-w-4xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
          <p className="text-white/70">Loading article...</p>
        </section>
      }
    >
      <BlogViewClient slug={slug} />
    </Suspense>
  );
}
