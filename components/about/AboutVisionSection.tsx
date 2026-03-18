"use client";

import { motion } from "framer-motion";
import { Orbit, Sparkles, Target } from "lucide-react";
import { vision } from "@/data/about";
import { revealUp, stagger } from "@/components/about/motion";

const visionPillars = [
  {
    icon: Orbit,
    label: "Scalable Systems",
    description: "Architected to grow with product complexity and business demand.",
  },
  {
    icon: Sparkles,
    label: "Creative Intelligence",
    description: "Blending thoughtful design with modern AI-led execution.",
  },
  {
    icon: Target,
    label: "Measured Impact",
    description: "Focused on outcomes teams can actually feel in operations and growth.",
  },
];

export function AboutVisionSection() {
  return (
    <section className="container mx-auto px-6 py-12 md:py-18">
      <motion.article
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="relative overflow-hidden rounded-[1.8rem] border border-white/12 bg-[#0d121c] px-7 py-10 md:px-12 md:py-14"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_32%),radial-gradient(circle_at_82%_24%,rgba(59,130,246,0.14),transparent_28%)]" />

        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div variants={revealUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200/75">Our Vision</p>
            <blockquote className="mt-6 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              {vision.title}
            </blockquote>
            <p className="mt-7 max-w-3xl text-sm leading-relaxed text-white/68 md:text-lg">{vision.body}</p>
          </motion.div>

          <motion.div variants={revealUp} className="relative">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/3 p-6 md:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.18),transparent_45%)]" />
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/15" />
              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-sky-400/30 via-blue-500/20 to-cyan-300/10 blur-sm" />

              <div className="relative space-y-4">
                {visionPillars.map((pillar) => {
                  const Icon = pillar.icon;

                  return (
                    <div
                      key={pillar.label}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0b1018]/80 px-4 py-4 backdrop-blur-sm"
                    >
                      <div className="mt-0.5 rounded-xl border border-sky-300/20 bg-sky-300/10 p-2 text-sky-200">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white md:text-base">{pillar.label}</p>
                        <p className="mt-1 text-sm leading-relaxed text-white/62">{pillar.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.article>
    </section>
  );
}
