"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const impactCards = [
  {
    value: "20+",
    title: "Industries",
    description: "mastered with deep exposure to compliance-heavy, regulated, data-intensive sectors",
    image: "/media/impact/industry.webp",
  },
  {
    value: "2+",
    title: "Years of Experience",
    description: "as an enterprise technology consulting and digital engineering services firm",
    image: "/media/impact/exp.webp",
  },
  {
    value: "20+",
    title: "Technology Specialists",
    description: "designing and building AI-led, cloud-native systems at enterprise scale",
    image: "/media/impact/techspec.webp",
  },
  {
    value: "60+",
    title: "Solutions",
    description: "delivered across consulting, engineering, and large-scale digital transformation initiatives",
    image: "/media/impact/solutions.webp",
  },
  {
    value: "70+",
    title: "AI Models",
    description: "deployed and operationalized across production systems, workflows, and decision platforms",
    image: "/media/impact/ai.webp",
  },
];

export function ImpactMarqueeSection() {
  return (
    <section className="w-full bg-black py-8 md:py-12">
      <Marquee
        pauseOnHover
        draggable
        className="[--duration:45s] [--gap:14px] md:[--gap:16px] px-0"
      >
        {impactCards.map((card) => (
          <article
            key={card.title}
            className="h-105 w-[66vw] shrink-0 overflow-hidden rounded-3xl border border-white/15 bg-[#121212] sm:w-[56vw] md:h-130 md:w-[40vw] lg:w-[28vw]"
          >
            <div className="h-[43%] border-b border-white/10 p-5 md:p-7">
              <div className="flex items-start gap-3 md:gap-4">
                <p className="text-3xl font-semibold leading-none text-white md:text-5xl">{card.value}</p>
                <p className="pt-1 text-xs font-semibold uppercase tracking-wide text-zinc-100 md:text-base">
                  {card.title}
                </p>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-zinc-400 md:text-[15px]">{card.description}</p>
            </div>
            <div className="relative h-[57%]">
              <Image src={card.image} alt={card.title} fill className="object-cover" sizes="(max-width: 768px) 66vw, 28vw" />
            </div>
          </article>
        ))}
      </Marquee>
    </section>
  );
}
