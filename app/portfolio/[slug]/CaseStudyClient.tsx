"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Project {
    id: string;
    title: string;
    tagline?: string;
    year: string;
    type: string;
    slug: string;
    thumbnail: string;
    description?: string;
    overview?: string;
    industry?: string;
    brandOwner?: string;
    websiteLink?: string;
    techStack: string[];
    item?: string[];
    impact?: string[];
    challenges?: string[];
    goals?: string[];
    solution_categories?: {
        title: string;
        items: string[];
    }[];
    features?: string[];
    results?: string[];
}

export default function CaseStudyClient({ project }: { project: Project }) {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
            {/* Immersive Hero Section */}
            <section className="relative isolate min-h-screen overflow-hidden flex items-end pb-20 md:pb-32">
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
                            <span className="text-zinc-500">
                                {project.year}
                            </span>
                        </motion.div>

                        {project.tagline && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.05 }}
                                className="mb-4 text-sm font-medium text-zinc-400"
                            >
                                {project.tagline}
                            </motion.p>
                        )}

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: 0.1,
                            }}
                            className="text-pretty font-bold leading-[1.05] tracking-tight text-white mb-10"
                            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
                        >
                            {project.title}
                        </motion.h1>

                        {/* Project Metadata Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="grid grid-cols-2 gap-8 border-y border-white/10 py-10 md:grid-cols-4"
                        >
                            {project.brandOwner && (
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                                        Client
                                    </p>
                                    <p className="mt-2 text-sm font-medium text-white">
                                        {project.brandOwner}
                                    </p>
                                </div>
                            )}
                            {project.industry && (
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                                        Industry
                                    </p>
                                    <p className="mt-2 text-sm font-medium text-white">
                                        {project.industry}
                                    </p>
                                </div>
                            )}
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                                    Services
                                </p>
                                <p className="mt-2 text-sm font-medium text-white">
                                    {project.type}
                                </p>
                            </div>
                            {project.websiteLink && (
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                                        Live Site
                                    </p>
                                    <a
                                        href={project.websiteLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 flex items-center gap-1 text-sm font-medium text-blue-500 hover:underline"
                                    >
                                        Visit Website{" "}
                                        <ArrowUpRight className="h-3 w-3" />
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            {(project.overview || project.description) && (
                <section className="py-24 border-b border-white/5">
                    <div className="container mx-auto px-6 md:px-10">
                        <div className="mx-auto max-w-4xl">
                            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-10">
                                Overview
                            </h2>
                            <p className="text-2xl md:text-4xl font-light leading-snug text-zinc-200">
                                {project.overview || project.description}
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {/* Challenges & Goals */}
            {(project.challenges || project.goals) && (
                <section className="py-24 md:py-32">
                    <div className="container mx-auto px-6 md:px-10">
                        <div className="grid gap-20 lg:grid-cols-2">
                            {project.challenges && (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-10">
                                        Client Challenges
                                    </h3>
                                    <div className="space-y-6">
                                        {project.challenges.map(
                                            (challenge, i) => (
                                                <div
                                                    key={i}
                                                    className="flex gap-4"
                                                >
                                                    <div className="mt-2.5 h-1.5 w-1.5 rounded-full bg-blue-500/50 shrink-0" />
                                                    <p className="text-lg text-zinc-300">
                                                        {challenge}
                                                    </p>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </motion.div>
                            )}

                            {project.goals && (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-10">
                                        Goals & Requirements
                                    </h3>
                                    <div className="space-y-6">
                                        {project.goals.map((goal, i) => (
                                            <div key={i} className="flex gap-4">
                                                <div className="mt-2.5 h-1.5 w-1.5 rounded-full bg-green-500/50 shrink-0" />
                                                <p className="text-lg text-zinc-300">
                                                    {goal}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* Detailed Solution */}
            {project.solution_categories && (
                <section className="py-24 md:py-32 bg-zinc-950/30">
                    <div className="container mx-auto px-6 md:px-10">
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-20 text-center">
                            Our Solution
                        </h2>
                        <div className="grid gap-8 md:grid-cols-2">
                            {project.solution_categories.map((cat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: idx * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    className="p-10 rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-sm"
                                >
                                    <h4 className="text-xl font-bold text-white mb-6 underline underline-offset-8 decoration-blue-500/50">
                                        {cat.title}
                                    </h4>
                                    <ul className="space-y-4">
                                        {cat.items.map((item, i) => (
                                            <li
                                                key={i}
                                                className="text-zinc-400 text-base leading-relaxed flex gap-3"
                                            >
                                                <span className="text-blue-500/50">
                                                    /
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Features & Results */}
            <section className="py-24 md:py-40">
                <div className="container mx-auto px-6 md:px-10">
                    <div className="grid gap-24">
                        {/* Key Features */}
                        {project.features && (
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-12">
                                    Key Features Delivered
                                </h3>
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {project.features.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/5"
                                        >
                                            <div className="h-2 w-2 rounded-full bg-blue-500" />
                                            <p className="text-sm font-medium text-zinc-200">
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Impact / Results Section */}
                        {(() => {
                            const items = project.results || project.impact;
                            if (!items) return null;
                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="rounded-[3rem] border border-white/5 bg-linear-to-br from-zinc-900/60 to-black p-10 md:p-20 relative overflow-hidden group"
                                >
                                    {/* Subtle glow */}
                                    <div className="absolute -top-24 -right-24 h-64 w-64 bg-blue-600/10 blur-[80px] transition-opacity group-hover:opacity-100 opacity-50" />

                                    <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-16">
                                        Results & Impact
                                    </h3>
                                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                                        {items.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col gap-6"
                                            >
                                                <div className="h-px w-12 bg-blue-500/50" />
                                                <p className="text-xl font-medium text-white md:text-2xl leading-snug">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })()}
                    </div>
                </div>
            </section>

            {/* Closing CTA - High Impact */}
            <section className="relative isolate overflow-hidden py-16 md:py-24">
                {/* Background Decor */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-[#04070d]/40 backdrop-blur-[2px]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                    <div className="absolute -bottom-1/2 left-1/2 h-125 w-200 -translate-x-1/2 bg-blue-600/10 blur-[100px]" />
                </div>

                <div className="container relative z-10 mx-auto px-6 text-center md:px-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-4xl rounded-[3rem] border border-white/5 bg-white/2 p-10 md:p-16 backdrop-blur-3xl"
                    >
                        <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500">
                            The Next Big Move
                        </p>
                        <h2 className="mb-10 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                            Ready for your own
                            <br />
                            <span className="bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent italic">
                                Success Story?
                            </span>
                        </h2>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/contact"
                                className="group relative flex h-14 items-center gap-3 overflow-hidden rounded-full bg-[#2d79ff] px-8 text-base font-bold text-white transition-all hover:bg-[#4387ff] active:scale-95 shadow-[0_0_40px_-10px_rgba(45,121,255,0.4)]"
                            >
                                <span>Start Your Journey</span>
                                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>

                            <Link
                                href="/portfolio"
                                className="group flex h-14 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95"
                            >
                                <span>View All Projects</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
