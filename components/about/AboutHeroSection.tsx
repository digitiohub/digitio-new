"use client";

import { motion } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate";
import { aboutIntro, aboutStats } from "@/data/about";
import { revealUp, stagger } from "@/components/about/motion";

export function AboutHeroSection() {
  return (
    <section className="container mx-auto px-6 pt-28 pb-22 md:pt-34 md:pb-28">
      <motion.div initial="hidden" animate="show" variants={stagger} className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <motion.p
            variants={revealUp}
            className="inline-flex rounded-full border border-white/18 bg-white/4 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/78"
          >
            {aboutIntro.eyebrow}
          </motion.p>

          <div className="mt-8 max-w-4xl font-semibold leading-[1.02] tracking-tight text-white" style={{ fontSize: "clamp(1.5rem,6vw,3rem)" }}>
            <TextAnimate animation="slideLeft" by="word" as="h1">
              {aboutIntro.title}
            </TextAnimate>
          </div>

          <motion.p variants={revealUp} className="mt-9 max-w-2xl text-sm leading-relaxed text-white/72 md:text-lg text-justify">
            {aboutIntro.paragraphOne}
          </motion.p>
          <motion.p variants={revealUp} className="mt-5 max-w-2xl text-sm leading-relaxed text-white/64 text-justify md:text-base">
            {aboutIntro.paragraphTwo}
          </motion.p>
        </div>

        <motion.aside variants={revealUp} className="relative">
          <div className="rounded-[1.6rem] border border-white/12 bg-[#0d121c] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">Key Numbers</p>
            <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {aboutStats.map((item) => (
                <div key={item.label} className="flex items-end justify-between py-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/52">{item.label}</p>
                  <p className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{item.value}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              Trusted by startups and enterprise teams for high-quality, outcome-driven digital product execution.
            </p>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
}
