"use client"

import { TextAnimate } from "@/components/ui/text-animate"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function ProductHero() {
    return (
        <section className="relative isolate min-h-screen overflow-hidden bg-black text-white">
            {/* Video Background */}
            <motion.video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/media/hero/hero1.jpg"
                onLoadedMetadata={(event) => {
                    event.currentTarget.playbackRate = 0.8
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full object-cover"
                aria-hidden="true"
            >
                <source src="/media/hero/hero1.webm" type="video/webm" />
                <source src="/media/hero/hero1.mp4" type="video/mp4" />
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
                        Proprietary Products Ecosystem
                    </motion.p>

                    <h1 
                        className="text-pretty font-bold leading-[1.05] tracking-tight text-white mb-6"
                        style={{ fontSize: "clamp(2.2rem, 8vw, 5.2rem)" }}
                    >
                        <TextAnimate animation="slideUp" by="word" className="inline-block text-white">
                            Products that build your next decade.
                        </TextAnimate>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.72, ease: "easeOut", delay: 0.5 }}
                        className="mt-6 max-w-2xl text-sm leading-relaxed text-white/75 md:text-xl reveal"
                    >
                        We engineer digital assets that transform internal operations, automate intelligence, and drive sustainable growth for modern enterprises.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.72, ease: "easeOut", delay: 0.6 }}
                        className="mt-12"
                    >
                        <button 
                            onClick={() => document.getElementById('products-grid')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform group-hover:scale-110">
                                <ArrowDown className="h-5 w-5 animate-bounce" />
                            </div>
                            <span className="text-sm font-semibold uppercase tracking-widest">Explore Ecosystem</span>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
