"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Building2, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import { aboutHighlights, aboutIntro, aboutStats } from "@/data/about";
import { revealUp, stagger } from "@/components/about/motion";

const statIcons = [TrendingUp, Users, ShieldCheck, Building2];

function KeyNumbersActive() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % aboutStats.length);
    }, 1400);
    return () => clearInterval(timer);
  }, []);

  const stat = aboutStats[activeIndex];
  const Icon = statIcons[activeIndex % statIcons.length];

  return (
    <>
      <div className="relative h-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col justify-center gap-4"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-300/10 text-sky-300">
              <Icon className="h-6 w-6" />
            </span>
            <div>
              <p className="text-5xl font-bold tracking-tight text-white md:text-6xl">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.1em] text-white/50">{stat.label}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex gap-2">
        {aboutStats.map((s, index) => (
          <span
            key={s.label}
            className={`h-[3px] rounded-full transition-all duration-300 ${index === activeIndex ? "w-6 bg-sky-400" : "w-2.5 bg-white/18"}`}
          />
        ))}
      </div>
    </>
  );
}

function AboutHighlights() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % aboutHighlights.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-9 max-w-xl">
      <div className="relative min-h-16 border-l-2 border-sky-400 pl-5">
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-base font-medium leading-relaxed text-white/85 md:text-lg"
          >
            {aboutHighlights[active]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex gap-2 pl-5">
        {aboutHighlights.map((item, index) => (
          <span
            key={item}
            className={`h-[3px] rounded-full transition-all duration-300 ${index === active ? "w-5 bg-sky-400" : "w-2 bg-white/18"}`}
          />
        ))}
      </div>
    </div>
  );
}

const PIN_DURATION_PX = 40;

export function AboutHeroSection() {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const stickyContentRef = useRef<HTMLDivElement>(null);
  const [spacerHeight, setSpacerHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    function measure() {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      if (stickyContentRef.current && isDesktop) {
        setSpacerHeight(stickyContentRef.current.offsetHeight + PIN_DURATION_PX);
      } else {
        setSpacerHeight(null);
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const cardMouseX = useMotionValue(0);
  const cardMouseY = useMotionValue(0);
  const cardSpotlight = useMotionTemplate`radial-gradient(420px circle at ${cardMouseX}px ${cardMouseY}px, rgba(56,189,248,0.18), rgba(168,85,247,0.12) 40%, transparent 70%)`;

  function handleCardMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    cardMouseX.set(event.clientX - rect.left);
    cardMouseY.set(event.clientY - rect.top);
  }

  const bgMouseX = useMotionValue(0);
  const bgMouseY = useMotionValue(0);
  const bgSpotlight = useMotionTemplate`radial-gradient(700px circle at ${bgMouseX}px ${bgMouseY}px, rgba(56,189,248,0.09), rgba(168,85,247,0.07) 40%, transparent 72%)`;

  function handleSectionMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    bgMouseX.set(event.clientX - rect.left);
    bgMouseY.set(event.clientY - rect.top);
  }

  return (
    <div ref={scrollAreaRef} className="relative" style={{ height: spacerHeight ? `${spacerHeight}px` : "auto" }}>
      <div
        ref={stickyContentRef}
        className="group/hero flex items-center overflow-hidden pt-28 pb-14 md:pt-25 md:pb-16 lg:sticky lg:top-0"
        onMouseMove={handleSectionMouseMove}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/hero:opacity-100"
          style={{ background: bgSpotlight }}
        />

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="container relative mx-auto grid gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
        >
          <div>
            <motion.p
              variants={revealUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/4 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/78"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.9)]" />
              {aboutIntro.eyebrow}
            </motion.p>

            <div className="mt-8 max-w-4xl font-semibold leading-[1.02] tracking-tight text-white" style={{ fontSize: "clamp(1.5rem,6vw,3rem)" }}>
              <TextAnimate animation="slideLeft" by="word" as="h1">
                {aboutIntro.title}
              </TextAnimate>
            </div>

            <motion.p variants={revealUp} className="mt-7 max-w-xl text-sm leading-relaxed text-white/62 md:text-base">
              {aboutIntro.intro}
            </motion.p>

            <motion.div variants={revealUp}>
              <AboutHighlights />
            </motion.div>
          </div>

          <motion.aside variants={revealUp} className="relative">
            <div
              className="group relative overflow-hidden rounded-[1.8rem] border border-white/12 bg-[#0d121c] p-6 transition-colors duration-300 hover:border-white/20 md:p-8"
              onMouseMove={handleCardMouseMove}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(56,189,248,0.16),transparent_32%),radial-gradient(circle_at_88%_22%,rgba(59,130,246,0.16),transparent_34%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: cardSpotlight }}
              />

              <div className="relative flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">Key Numbers</p>
                <span className="flex h-7 w-7 items-center justify-center rounded-[10px] border border-sky-300/20 bg-sky-300/8 text-sky-300 transition-transform duration-300 group-hover:rotate-12">
                  <TrendingUp className="h-3.5 w-3.5" />
                </span>
              </div>

              <div className="relative mt-6">
                <KeyNumbersActive />
              </div>

              <p className="relative mt-6 border-t border-white/10 pt-5 text-sm leading-relaxed text-white/55">
                Trusted by startups, businesses, agencies, and enterprise teams for dependable, outcome-driven digital product execution.
              </p>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </div>
  );
}
