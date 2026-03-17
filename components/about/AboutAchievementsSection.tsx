"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { achievements } from "@/data/about";
import { revealUp, stagger } from "@/components/about/motion";

export function AboutAchievementsSection() {
  return (
    <section className="container mx-auto px-6 py-12 md:py-18">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
        <motion.div variants={revealUp} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200/75">Achievements</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Delivery milestones backed by real execution.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/66 md:text-base">
              We build across sectors, product stages, and engagement models with a focus on dependable systems,
              faster launches, and long-term technical clarity.
            </p>
          </div>
        </motion.div>

        <motion.div variants={stagger} className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item, index) => (
            <motion.article
              key={item}
              variants={revealUp}
              className="group relative overflow-hidden rounded-[1.6rem] border border-white/12 bg-[#0c111a] px-5 py-5 transition-colors hover:border-blue-300/25 md:px-6 md:py-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_36%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex items-start justify-between gap-4">
                <span className="inline-flex rounded-full border border-white/10 bg-white/4 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-white/58">
                  0{index + 1}
                </span>
                <ArrowUpRight className="h-4 w-4 text-white/28 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-200/80" />
              </div>

              <div className="relative mt-6 flex items-start gap-3">
                <div className="mt-0.5 shrink-0 self-start rounded-xl border border-emerald-300/16 bg-emerald-300/8 p-2 text-emerald-200">
                  <BadgeCheck className="h-4 w-4" />
                </div>
                <p className="text-sm leading-relaxed text-white/84 md:text-base">{item}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
