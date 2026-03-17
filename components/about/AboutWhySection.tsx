"use client";

import { motion } from "framer-motion";
import { whyDigitioHub } from "@/data/about";
import { revealUp, stagger } from "@/components/about/motion";

export function AboutWhySection() {
  return (
    <section className="container mx-auto px-6 py-12 md:py-18">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <motion.div variants={revealUp} className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.17em] text-blue-200/75">Why DigitioHub</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">Built for long-term product growth.</h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
            We combine execution discipline with modern engineering to help teams ship faster without sacrificing reliability.
          </p>
        </motion.div>

        <motion.div variants={stagger} className="mt-10 grid gap-x-10 gap-y-5 md:grid-cols-2">
          {whyDigitioHub.map((item, index) => (
            <motion.article key={item} variants={revealUp} className="border-b border-white/12 pb-4">
              <div className="flex gap-3">
                <span className="pt-0.5 text-xs font-semibold text-blue-200/80">0{index + 1}</span>
                <p className="text-sm leading-relaxed text-white/86 md:text-base">{item}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
