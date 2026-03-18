"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function PortfolioCTA() {
    return (
        <section className="relative isolate overflow-hidden bg-black py-32 md:py-48 lg:py-56">
            {/* Background Image / Texture */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,121,255,0.1),transparent_70%)]" />
                <div className="absolute inset-0 bg-[#04070d]/60" />
                <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" 
                    alt="Neural network backdrop" 
                    className="h-full w-full object-cover opacity-10"
                />
            </div>

            <div className="container relative z-10 mx-auto px-6 text-center md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mx-auto max-w-4xl"
                >
                    <p className="mb-8 text-sm font-bold uppercase tracking-[0.3em] text-blue-500">
                        Ready to innovate?
                    </p>
                    
                    <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
                        Have a project in mind?
                        <br />
                        <span className="text-zinc-500">Let&apos;s build the future.</span>
                    </h2>
                    
                    <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
                        <Link
                            href="/contact"
                            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#2d79ff] px-10 py-5 text-lg font-bold text-white transition-all hover:bg-[#4387ff] active:scale-95"
                        >
                            <span>Start Your Journey</span>
                            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/services"
                            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-10 py-5 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95"
                        >
                            Explore Expertise
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Decorative gradients */}
            <div className="absolute -bottom-1/2 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 bg-blue-600/10 blur-[120px]" />
        </section>
    )
}
