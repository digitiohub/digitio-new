"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const HERO_VIDEOS = ["/media/hero/hero1.webm", "/media/hero/hero2.webm", "/media/hero/hero3.webm", "/media/hero/hero4.webm"]

export function HeroSection() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length)
    }

    return (
        <section className="relative isolate min-h-screen overflow-hidden bg-[#04070d]">
            <AnimatePresence mode="sync">
                <motion.video
                    key={HERO_VIDEOS[currentVideoIndex]}
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    onLoadedMetadata={(event) => {
                        event.currentTarget.playbackRate = 2
                    }}
                    onEnded={handleVideoEnd}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 h-full w-full object-cover"
                    aria-hidden="true"
                >
                    <source src={HERO_VIDEOS[currentVideoIndex]} type="video/mp4" />
                </motion.video>
            </AnimatePresence>

            <div className="absolute inset-0 bg-[linear-gradient(96deg,rgba(4,8,16,0.93)_8%,rgba(4,8,16,0.7)_38%,rgba(4,8,16,0.24)_62%,rgba(4,8,16,0.68)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(72,130,255,0.2),transparent_36%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(4,8,16,0.84)_5%,transparent_45%)]" />

            <div className="relative z-10 container mx-auto flex min-h-screen items-end px-6 pb-16 pt-28 md:px-10 md:pb-24 lg:items-center">
                <div className="max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                        className="mb-5 inline-flex rounded-full border border-white/20 bg-black/35 px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-white/80 uppercase backdrop-blur-sm"
                    >
                        Digital Product Engineering
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="text-pretty font-bold leading-[1.05] tracking-tight text-white"
                        style={{ fontSize: "clamp(2rem, 5.8vw, 3.5rem)" }}
                    >
                        We build the systems
                        <br />
                        your next decade
                        <br />
                        runs on.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.72, ease: "easeOut", delay: 0.22 }}
                        className="mt-6 max-w-2xl text-sm leading-relaxed text-white/75 md:text-lg"
                    >
                        We secure and scale mission-critical products with strong architecture, data
                        engineering, and AI so teams move from strategy to reliable production with
                        confidence.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.72, ease: "easeOut", delay: 0.35 }}
                        className="mt-10 flex flex-wrap items-center gap-4"
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 rounded-full bg-[#2d79ff] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#4387ff] md:text-base"
                        >
                            Consult Our Strategy Team
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center rounded-full border border-white/25 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white/90 transition-colors hover:bg-black/35 md:text-base"
                        >
                            View Portfolio
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
