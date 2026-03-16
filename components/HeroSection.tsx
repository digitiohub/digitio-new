"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"

export function HeroSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)

    // Track scroll within the hero section (sticky scroll region)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    })

    // Smooth spring for the scroll progress
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.5 })

    // Video container: starts as a 16:9 block bottom-right with gaps, grows to full screen
    const videoWidth = useTransform(smoothProgress, [0, 1], ["45vw", "100vw"])
    const videoHeight = useTransform(smoothProgress, [0, 1], ["calc(45vw * 9/16)", "100vh"])
    const videoRight = useTransform(smoothProgress, [0, 0.6], ["40px", "0px"])
    const videoBottom = useTransform(smoothProgress, [0, 0.6], ["40px", "0px"])
    const videoBorderRadius = useTransform(smoothProgress, [0, 0.8], ["24px", "0px"])
    const videoScale = useTransform(smoothProgress, [0, 1], [1, 1.05])

    // Text fades out as video takes over
    const textOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0])
    const textY = useTransform(smoothProgress, [0, 0.5], [0, -50])

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {})
        }
    }, [])

    return (
        <div className="relative">
            {/* Sticky scroll container */}
            <div
                ref={sectionRef}
                className="relative hidden md:block"
                style={{ height: "200vh" }}
            >
                {/* Sticky viewport */}
                <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0a0a0a]">

                    {/* ── Text content layer ── */}
                    <motion.div
                        style={{ opacity: textOpacity, y: textY }}
                        className="absolute inset-0 z-10 flex flex-col justify-between px-10 py-10 pointer-events-none"
                    >
                        {/* Headline — top area */}
                        <div className="pt-24 max-w-[55%]">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="mb-4"
                            >
                                <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-white/50 border border-white/10 rounded-full px-4 py-1.5">
                                    Digital Product Engineering
                                </span>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                className="text-white font-bold leading-[1.02] tracking-tight"
                                style={{ fontSize: "clamp(3rem, 5.5vw, 5.5rem)" }}
                            >
                                We build systems<br />
                                your next decade<br />
                                <span className="text-white/30">runs on.</span>
                            </motion.h1>
                        </div>

                        {/* Bottom-left: descriptor + CTA */}
                        <div className="max-w-[42%] pb-10">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                                className="text-white/50 text-base md:text-lg leading-relaxed mb-8"
                            >
                                Secure, scalable digital infrastructure engineered to last—combining strong architecture, data systems, and AI so your organisation moves from strategy to production without compromise.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
                                className="flex items-center gap-4 pointer-events-auto"
                            >
                                <button className="group flex items-center gap-2 bg-white text-black text-sm font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-all duration-300">
                                    Start a Project
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </button>
                                <button className="group flex items-center gap-2 text-white/60 text-sm font-medium hover:text-white transition-colors duration-300">
                                    View Our Work
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* ── Video card — anchored bottom-right, zooms to fill ── */}
                    <motion.div
                        className="absolute z-20 overflow-hidden"
                        style={{
                            width: videoWidth,
                            height: videoHeight,
                            borderRadius: videoBorderRadius,
                            right: videoRight,
                            bottom: videoBottom,
                        }}
                    >
                        <motion.video
                            ref={videoRef}
                            src="/media/digitiohub.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                            style={{ scale: videoScale }}
                        />
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Ambient background glow */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/3 left-1/4 w-[40vw] h-[40vw] rounded-full bg-blue-700/5 blur-[120px]" />
                        <div className="absolute bottom-0 right-1/3 w-[30vw] h-[30vw] rounded-full bg-indigo-800/5 blur-[100px]" />
                    </div>
                </div>
            </div>

            {/* ── Mobile hero (static, no scroll magic) ── */}
            <section className="md:hidden min-h-screen bg-[#0a0a0a] flex flex-col px-6 pt-28 pb-8 gap-10">
                {/* Headline */}
                <div>
                    <span className="inline-flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-white/40 border border-white/10 rounded-full px-3 py-1 mb-5 w-fit">
                        Digital Product Engineering
                    </span>
                    <h1 className="text-white font-bold leading-[1.08] tracking-tight text-4xl">
                        We build systems<br />
                        your next decade<br />
                        <span className="text-white/30">runs on.</span>
                    </h1>
                    <p className="text-white/45 text-sm leading-relaxed mt-5">
                        Secure, scalable digital infrastructure engineered from strategy to production—without compromise.
                    </p>
                    <div className="flex items-center gap-4 mt-7">
                        <button className="flex items-center gap-2 bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full">
                            Start a Project <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <button className="flex items-center gap-2 text-white/55 text-sm font-medium">
                            Our Work <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>

                {/* Video */}
                <div className="rounded-2xl overflow-hidden w-full aspect-video shrink-0">
                    <video
                        src="/media/digitiohub.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
        </div>
    )
}
