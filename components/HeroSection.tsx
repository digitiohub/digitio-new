"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
    const springTransition = {
        type: "spring",
        damping: 30,
        stiffness: 100,
        mass: 1,
        bounce: 0,
    }

    const textVariants: any = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: springTransition },
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa] pt-20">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.15 } },
                        }}
                    >
                        <motion.div variants={textVariants} className="mb-6 flex justify-center">
                            <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm text-sm font-medium text-gray-600">
                                Top Digital Product Engineering Company
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={textVariants}
                            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]"
                        >
                            Engineering the <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                                Next Generation
                            </span>
                            <br /> of Digital Systems
                        </motion.h1>

                        <motion.p
                            variants={textVariants}
                            className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
                        >
                            DigitioHub engineers secure, scalable digital systems by combining strong architecture, data engineering, and AI capabilities, helping organizations move from strategy to reliable systems in production.
                        </motion.p>

                        <motion.div variants={textVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="h-14 px-8 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 group">
                                Consult Our Strategy Team
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="h-14 px-8 rounded-full bg-white border border-gray-200 text-slate-900 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                                Explore Our Work
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Abstract Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-30"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.2, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                    className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"
                />
            </div>
        </section>
    )
}
