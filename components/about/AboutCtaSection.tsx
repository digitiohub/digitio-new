"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles, Zap } from "lucide-react";
import { revealUp, stagger } from "@/components/about/motion";

const ctaPoints = ["Strategy to launch support", "Product, AI, and automation expertise", "Execution shaped around your goals"];

export function AboutCtaSection() {
  return (
    <section className="container mx-auto px-6 pt-12 pb-20 md:pt-16 md:pb-24">
      <motion.article
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="relative overflow-hidden rounded-[1.8rem] border border-white/14 bg-[#0d121c] px-8 py-10 md:px-12 md:py-14"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.14),transparent_28%),radial-gradient(circle_at_85%_30%,rgba(59,130,246,0.18),transparent_32%)]" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <motion.div variants={revealUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200/75">Partner With DigitioHub</p>
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              Have an idea? Let&apos;s build it together.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/64 md:text-lg">
              From discovery and strategy to launch and scale, we work with you end-to-end to turn ambitious ideas into dependable digital products.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {ctaPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 text-sky-200" />
                  <span className="text-sm text-white/76">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 md:text-base"
              >
                Start Your Journey
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={revealUp} className="relative min-h-[320px]">
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/16 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="absolute left-1/2 top-1/2 h-[12rem] w-[12rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/20" />

            <div className="absolute left-[14%] top-[14%] flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1018]/85 px-4 py-3 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-sky-200" />
              <div>
                <p className="text-sm font-semibold text-white">Product Discovery</p>
                <p className="text-xs text-white/52">Shape the roadmap clearly</p>
              </div>
            </div>

            <div className="absolute bottom-[14%] right-[10%] flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1018]/85 px-4 py-3 backdrop-blur-sm">
              <Zap className="h-4 w-4 text-blue-200" />
              <div>
                <p className="text-sm font-semibold text-white">Launch Momentum</p>
                <p className="text-xs text-white/52">Move from idea to execution</p>
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-sky-200/20 bg-gradient-to-br from-sky-400/22 via-blue-500/18 to-cyan-300/10 text-center shadow-[0_0_80px_rgba(56,189,248,0.18)]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">Build</p>
                <p className="mt-2 text-xl font-semibold tracking-tight text-white">Together</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.article>
    </section>
  );
}
