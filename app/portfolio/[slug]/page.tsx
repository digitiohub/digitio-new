"use client"

import { use } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import projects from "@/data/projects.json"
import { notFound } from "next/navigation"

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const project = projects.find((p) => p.slug === slug)

    if (!project) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
            {/* Navigation - More integrated */}
            <nav className="absolute top-0 z-50 w-full bg-transparent">
                <div className="container mx-auto flex h-24 items-center justify-between px-6 md:px-10">
                    <Link 
                        href="/portfolio" 
                        className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white/60 transition-colors hover:text-white"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Portfolio
                    </Link>
                    <Link
                        href="/contact"
                        className="hidden rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md transition hover:bg-white/10 md:block"
                    >
                        Start a Project
                    </Link>
                </div>
            </nav>

            {/* Immersive Hero Section */}
            <section className="relative isolate min-h-[85vh] overflow-hidden flex items-end pb-20 md:pb-32">
                {/* Background Image with Overlays */}
                <div className="absolute inset-0 -z-10">
                    <Image 
                        src={project.thumbnail} 
                        alt="" 
                        fill
                        priority
                        className="object-cover opacity-40 transition-transform duration-1000 scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,8,16,0.6)_0%,rgba(4,8,16,0.95)_70%,#000_100%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(72,130,255,0.15),transparent_40%)]" />
                </div>

                <div className="container mx-auto px-6 md:px-10">
                    <div className="max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-500"
                        >
                            <span>{project.type}</span>
                            <span className="h-1 w-1 rounded-full bg-zinc-800" />
                            <span className="text-zinc-500">{project.year}</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                            className="text-pretty font-bold leading-[1.05] tracking-tight text-white"
                            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
                        >
                            {project.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
                            className="mt-10 max-w-3xl text-xl leading-relaxed text-zinc-300 md:text-3xl font-light"
                        >
                            {project.description}
                        </motion.p>
                        
                        {/* Tech Stack Pills */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mt-12 flex flex-wrap gap-2.5"
                        >
                            {project.techStack.map((tech) => (
                                <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-400 backdrop-blur-sm">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-24 md:py-40">
                <div className="container mx-auto px-6 md:px-10">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-24 lg:grid-cols-2">
                            {/* Problem & Solution */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500/80 mb-8">The Challenge</h3>
                                <p className="text-xl leading-relaxed text-zinc-200 md:text-2xl font-light">
                                    {project.problem}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.15 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500/80 mb-8">The Solution</h3>
                                <p className="text-xl leading-relaxed text-zinc-200 md:text-2xl font-light">
                                    {project.solution}
                                </p>
                            </motion.div>

                            {/* Impact Section - Spanning 2 columns */}
                            <div className="lg:col-span-2 pt-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="rounded-[3rem] border border-white/5 bg-linear-to-br from-zinc-900/60 to-black p-10 md:p-20 relative overflow-hidden group"
                                >
                                    {/* Subtle glow */}
                                    <div className="absolute -top-24 -right-24 h-64 w-64 bg-blue-600/10 blur-[80px] transition-opacity group-hover:opacity-100 opacity-50" />
                                    
                                    <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-16">Tangible Results</h3>
                                    <div className="grid gap-12 md:grid-cols-3">
                                        {project.impact.map((item, index) => (
                                            <div key={index} className="flex flex-col gap-6">
                                                <div className="h-px w-12 bg-blue-500/50" />
                                                <p className="text-xl font-medium text-white md:text-2xl leading-snug">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="border-t border-white/10 bg-zinc-950/20 py-32 md:py-48">
                <div className="container mx-auto px-6 text-center md:px-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-4xl"
                    >
                        <p className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-blue-500">
                            Results Matter
                        </p>
                        <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                            Ready for your own 
                            <br />
                            <span className="text-zinc-500">success story?</span>
                        </h2>
                        <div className="mt-16 flex justify-center">
                            <Link
                                href="/contact"
                                className="group flex items-center gap-3 rounded-full bg-[#2d79ff] px-10 py-5 text-lg font-bold text-white transition-all hover:bg-[#4387ff] active:scale-95"
                            >
                                <span>Let&apos;s Build Together</span>
                                <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
