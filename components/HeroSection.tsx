"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { TextAnimate } from "@/components/ui/text-animate"
import Image from "next/image"

export function HeroSection() {
    return (
        <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full bg-blue-700/10 blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-indigo-800/10 blur-[100px]" />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-10 min-h-screen flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center w-full pt-32 pb-20">
                    
                    {/* Left Side: Text Content */}
                    <div className="flex flex-col w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="mb-6"
                        >
                            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-white/50 border border-white/10 rounded-full px-4 py-1.5 w-fit">
                                Digital Product Engineering
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            className="text-white font-bold leading-[1.1] tracking-tight mb-8"
                            style={{ fontSize: "clamp(2.25rem, 5.5vw, 5rem)" }}
                        >
                            <div className="flex flex-wrap items-center">
                                <TextAnimate animation="slideLeft" by="character" as="span" className="inline-block whitespace-nowrap mr-[0.3em]">We build the systems</TextAnimate>
                            </div>
                            <div className="flex flex-wrap items-center">
                                <TextAnimate animation="slideLeft" by="character" as="span" className="inline-block whitespace-nowrap mr-[0.3em]">your</TextAnimate>
                                <TextAnimate animation="slideLeft" by="character" as="span" className="inline-block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400 whitespace-nowrap">next decade</TextAnimate>
                            </div>
                            <div className="flex flex-wrap items-center">
                                <TextAnimate animation="slideLeft" by="character" as="span" className="inline-block whitespace-nowrap">runs on.</TextAnimate>
                            </div>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                            className="text-white/50 text-sm md:text-lg leading-relaxed mb-10 max-w-2xl"
                        >
                            Secure, scalable digital infrastructure engineered to last—combining strong architecture, data systems, and AI so your organisation moves from strategy to production without compromise.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
                            className="flex flex-wrap items-center gap-4"
                        >
                            <button className="group flex items-center gap-2 bg-white text-black text-sm md:text-base font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-300">
                                Start a Project
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                            <button className="group flex items-center gap-2 text-white/60 text-sm md:text-base font-medium hover:text-white transition-colors duration-300">
                                View Our Work
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Side: Animated SVG */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ 
                            opacity: 1, 
                            scale: 1, 
                            x: 0,
                            y: [0, -20, 0] 
                        }}
                        transition={{ 
                            opacity: { duration: 1, ease: "easeOut", delay: 0.2 },
                            scale: { duration: 1, ease: "easeOut", delay: 0.2 },
                            x: { duration: 1, ease: "easeOut", delay: 0.2 },
                            y: { duration: 6, ease: "easeInOut", repeat: Infinity }
                        }}
                        className="relative flex justify-center items-center h-[300px] md:h-[500px]"
                    >
                        <div className="relative w-full h-full max-w-[600px]">
                            <Image 
                                src="/media/devops.svg" 
                                alt="DevOps Systems Illustration" 
                                fill
                                className="object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                                priority
                            />
                        </div>

                        {/* Additional ambient decorative elements around the SVG */}
                        <motion.div 
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -z-10 w-[120%] h-[120%] bg-blue-500/5 rounded-full blur-3xl"
                        />
                    </motion.div>

                </div>
            </div>
        </div>
    )
}
