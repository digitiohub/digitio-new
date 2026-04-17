import { Suspense } from "react";
import BlogViewClient from "./BlogViewClient";

export default function BlogViewPage() {
  return (
    <Suspense
      fallback={
        <section className="mx-auto w-full max-w-4xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
          <p className="text-white/70">Loading article...</p>
        </section>
      }
    >
      <BlogViewClient />
    </Suspense>
  );
}
