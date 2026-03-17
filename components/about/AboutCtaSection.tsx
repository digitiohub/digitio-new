"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { revealUp } from "@/components/about/motion";

export function AboutCtaSection() {
  return (
    <section className="container mx-auto px-6 pt-12 pb-20 md:pt-16 md:pb-24">
      <motion.article
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={revealUp}
        className="rounded-[1.8rem] border border-white/14 bg-[#0d121c] px-8 py-10 md:px-12 md:py-14"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200/75">Partner With DigitioHub</p>
        <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
          Have an idea? Let&apos;s build it together.
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/64 md:text-lg">
          From discovery and strategy to launch and scale, we work with you end-to-end to turn ambitious ideas into dependable digital products.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 md:text-base"
          >
            Start Your Journey
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.article>
    </section>
  );
}
