import type { Metadata } from "next";
import { Suspense } from "react";
import { createPageMetadata } from "@/lib/metadata";
import BlogsListingClient from "./BlogsListingClient";

export const metadata: Metadata = createPageMetadata("blogs");

export default function BlogsPage() {
  return (
    <Suspense
      fallback={
        <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
          <p className="text-white/70">Loading blogs...</p>
        </section>
      }
    >
      <BlogsListingClient />
    </Suspense>
  );
}
