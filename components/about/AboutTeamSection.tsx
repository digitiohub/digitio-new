"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { teamMembers } from "@/data/team";
import { revealUp, stagger } from "@/components/about/motion";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function AboutTeamSection() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section className="container mx-auto px-6 py-12 md:py-18">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
        <motion.h2 variants={revealUp} className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Our Team
        </motion.h2>
        <motion.p variants={revealUp} className="mt-4 max-w-2xl text-sm leading-relaxed text-white/64 md:text-base">
          A cross-functional leadership and delivery team focused on building dependable, future-ready digital products.
        </motion.p>

        <motion.div variants={stagger} className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member) => {
            const shouldShowImage = Boolean(member.image) && !failedImages[member.name];

            return (
            <motion.article
              key={member.name}
              variants={revealUp}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-[1.5rem] border border-white/12 bg-[#0d121c]"
            >
              <div className="relative h-80 w-full bg-[#121b2a] md:h-96">
                {shouldShowImage ? (
                  <Image
                    src={member.image!}
                    alt={`${member.name} profile`}
                    fill
                    unoptimized
                    className="object-cover object-top"
                    sizes="(min-width: 1280px) 28vw, (min-width: 768px) 45vw, 100vw"
                    onError={() =>
                      setFailedImages((prev) => ({
                        ...prev,
                        [member.name]: true,
                      }))
                    }
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(150deg,#1e3a8a,#1f2937)] text-[4rem] font-semibold tracking-wide text-white/95">
                    {getInitials(member.name)}
                  </div>
                )}
              </div>
              <div className="p-6 md:p-7">
                <h3 className="text-2xl font-semibold tracking-tight text-white">{member.name}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200/78">{member.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/74 md:text-base">{member.bio}</p>
              </div>
            </motion.article>
          )})}
        </motion.div>
      </motion.div>
    </section>
  );
}
