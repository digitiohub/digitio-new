"use client"

import { TextAnimate } from "@/components/ui/text-animate"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative isolate min-h-screen overflow-hidden bg-black text-white">
            {/* Video Background */}
            <motion.video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/media/services/services.jpg"
                onLoadedMetadata={(event) => {
                    event.currentTarget.playbackRate = 0.8
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full object-cover"
                aria-hidden="true"
            >
                <source src="/media/services/services.webm" type="video/webm" />
                <source src="/media/services/services.mp4" type="video/mp4" />
            </motion.video>

            {/* Content Overlays - Synced with Home Hero style */}
            <div className="absolute inset-0 bg-[linear-gradient(96deg,rgba(4,8,16,0.93)_8%,rgba(4,8,16,0.7)_38%,rgba(4,8,16,0.24)_62%,rgba(4,8,16,0.68)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(72,130,255,0.2),transparent_36%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(4,8,16,0.84)_5%,transparent_45%)]" />
            
            <div className="relative z-10 container mx-auto flex min-h-screen items-end px-6 pb-16 pt-28 md:px-10 md:pb-24 lg:items-center">
                <div className="max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                        className="mb-5 inline-flex rounded-full border border-white/20 bg-black/35 px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-white/80 uppercase backdrop-blur-sm"
                    >
                        Strategic Engineering Services
                    </motion.p>

                    <h1 
                        className="text-pretty font-bold leading-[1.05] tracking-tight text-white mb-6"
                        style={{ fontSize: "clamp(2rem, 8vw, 5rem)" }}
                    >
                        <TextAnimate animation="slideUp" by="word" className="inline-block text-white">
                            Services
                        </TextAnimate>
                        <TextAnimate animation="slideUp" by="word" delay={0.1} className="inline-block text-zinc-400">
                            {" that build "}
                        </TextAnimate>
                        <TextAnimate animation="slideUp" by="word" delay={0.2} className="inline-block text-white">
                            systems,
                        </TextAnimate>
                        <br />
                        <span className="text-zinc-400">
                            <TextAnimate animation="slideUp" by="word" delay={0.3} className="inline-block">
                                {"not just "}
                            </TextAnimate>
                            <TextAnimate animation="slideUp" by="word" delay={0.4} className="inline-block text-white">
                                software.
                            </TextAnimate>
                        </span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.72, ease: "easeOut", delay: 0.5 }}
                        className="mt-6 max-w-2xl text-sm leading-relaxed text-white/75 md:text-lg reveal text-justify"
                    >
                        We design, engineer, and scale digital products that your next decade runs on. 
                        Engineered with precision. Delivered with excellence.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.72, ease: "easeOut", delay: 0.6 }}
                        className="mt-10 flex flex-wrap items-center gap-4"
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-[#2d79ff] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#4387ff] md:text-base"
                        >
                            Start a Project
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
