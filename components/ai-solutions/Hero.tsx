"use client"

import { TextAnimate } from "@/components/ui/text-animate"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

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
                poster="/media/ai-sols/ai-sols.jpg"
                onLoadedMetadata={(event) => {
                    event.currentTarget.playbackRate = 0.8
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full object-cover"
                aria-hidden="true"
            >
                <source src="/media/ai-sols/ai-sols.mp4" type="video/mp4" />
            </motion.video>

            {/* Content Overlays - Consistent with Services/Portfolio */}
            <div className="absolute inset-0 bg-[linear-gradient(96deg,rgba(4,8,16,0.93)_8%,rgba(4,8,16,0.7)_38%,rgba(4,8,16,0.24)_62%,rgba(4,8,16,0.68)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(72,130,255,0.2),transparent_36%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(4,8,16,0.84)_5%,transparent_45%)]" />

            <div className="relative z-10 container mx-auto flex min-h-screen items-end px-6 pb-20 pt-28 md:px-10 md:pb-24 lg:items-center">
                <div className="max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                        className="mb-5 inline-flex rounded-full border border-white/20 bg-black/35 px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-white/80 uppercase backdrop-blur-sm"
                    >
                        AI Solutions for Modern Growth
                    </motion.p>

                    <h1
                        className="text-pretty font-bold leading-[1.05] tracking-tight text-white mb-6"
                        style={{ fontSize: "clamp(2.2rem, 8vw, 5.2rem)" }}
                    >
                        <TextAnimate animation="slideUp" by="word" className="inline-block text-white">
                            AI Solutions
                        </TextAnimate>
                        <TextAnimate animation="slideUp" by="word" delay={0.1} className="inline-block text-zinc-400">
                            {" that scale "}
                        </TextAnimate>
                        <TextAnimate animation="slideUp" by="word" delay={0.2} className="inline-block text-white">
                            with your business.
                        </TextAnimate>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.72, ease: "easeOut", delay: 0.5 }}
                        className="mt-6 max-w-2xl text-sm leading-relaxed text-white/75 md:text-xl reveal"
                    >
                        We design and deploy practical AI systems across consulting, development, and integration so your
                        teams can automate workflows, improve decisions, and scale measurable outcomes.
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
                            Start Your AI Project
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center rounded-full border border-white/25 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white/90 transition-colors hover:bg-black/35 md:text-base"
                        >
                            View Service Stack
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
