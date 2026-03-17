"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/about";
import { revealUp, stagger } from "@/components/about/motion";

export function AboutAchievementsSection() {
  return (
    <section className="container mx-auto px-6 py-12 md:py-18">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
        <motion.h2 variants={revealUp} className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Achievements & Core Functionalities
        </motion.h2>

        <motion.div variants={stagger} className="mt-10 grid gap-4 md:grid-cols-2">
          {achievements.map((item) => (
            <motion.article key={item} variants={revealUp} className="rounded-2xl border border-white/12 bg-[#0c111a] px-5 py-4 md:px-6 md:py-5">
              <p className="text-sm leading-relaxed text-white/84 md:text-base">{item}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
