"use client";

import { motion } from "framer-motion";
import { vision } from "@/data/about";
import { revealUp } from "@/components/about/motion";

export function AboutVisionSection() {
  return (
    <section className="container mx-auto px-6 py-12 md:py-18">
      <motion.article
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={revealUp}
        className="rounded-[1.8rem] border border-white/12 bg-[#0d121c] px-7 py-10 md:px-12 md:py-14"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200/75">Our Vision</p>
        <blockquote className="mt-6 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
          {vision.title}
        </blockquote>
        <p className="mt-7 max-w-3xl text-sm leading-relaxed text-white/68 md:text-lg">{vision.body}</p>
      </motion.article>
    </section>
  );
}
