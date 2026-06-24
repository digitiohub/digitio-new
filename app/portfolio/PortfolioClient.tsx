"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { ProjectSection } from "@/components/portfolio/ProjectSection";
import { PortfolioCTA } from "@/components/portfolio/PortfolioCTA";
import type { PortfolioProject } from "@/lib/sectors";

interface SectorCardData {
    slug: string;
    title: string;
    summary: string;
    subtags: string[];
    caseStudyCount: number;
    relatedProductCount: number;
}

interface PortfolioClientProps {
    sectors: SectorCardData[];
    projects: PortfolioProject[];
}

const sectionIntroMotion = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 82,
            damping: 18,
            mass: 0.95,
            bounce: 0,
        },
    },
};

const sectionGridMotion = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.06,
        },
    },
};

const cardMotion = {
    hidden: { opacity: 0, y: 42 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 78,
            damping: 17,
            mass: 0.95,
            bounce: 0,
        },
    },
};

const sectorStyles: Record<
    string,
    {
        accent: string;
        glow: string;
        chip: string;
        icon: string;
    }
> = {
    "travel-hospitality": {
        accent: "from-amber-500/18 via-orange-500/10 to-transparent",
        glow: "group-hover:shadow-[0_30px_80px_-40px_rgba(251,146,60,0.45)]",
        chip: "text-amber-200 border-amber-400/20 bg-amber-500/10",
        icon: "text-amber-300 border-amber-400/20 bg-amber-500/10",
    },
    "automotive-mobility": {
        accent: "from-blue-500/18 via-cyan-500/10 to-transparent",
        glow: "group-hover:shadow-[0_30px_80px_-40px_rgba(59,130,246,0.45)]",
        chip: "text-sky-200 border-sky-400/20 bg-sky-500/10",
        icon: "text-sky-300 border-sky-400/20 bg-sky-500/10",
    },
    "healthcare-wellness": {
        accent: "from-emerald-500/18 via-teal-500/10 to-transparent",
        glow: "group-hover:shadow-[0_30px_80px_-40px_rgba(16,185,129,0.45)]",
        chip: "text-emerald-200 border-emerald-400/20 bg-emerald-500/10",
        icon: "text-emerald-300 border-emerald-400/20 bg-emerald-500/10",
    },
    "education-community": {
        accent: "from-violet-500/18 via-fuchsia-500/10 to-transparent",
        glow: "group-hover:shadow-[0_30px_80px_-40px_rgba(139,92,246,0.45)]",
        chip: "text-violet-200 border-violet-400/20 bg-violet-500/10",
        icon: "text-violet-300 border-violet-400/20 bg-violet-500/10",
    },
    "commerce-consumer": {
        accent: "from-rose-500/18 via-pink-500/10 to-transparent",
        glow: "group-hover:shadow-[0_30px_80px_-40px_rgba(244,63,94,0.45)]",
        chip: "text-rose-200 border-rose-400/20 bg-rose-500/10",
        icon: "text-rose-300 border-rose-400/20 bg-rose-500/10",
    },
    "industrial-infrastructure": {
        accent: "from-slate-400/18 via-zinc-500/10 to-transparent",
        glow: "group-hover:shadow-[0_30px_80px_-40px_rgba(148,163,184,0.4)]",
        chip: "text-slate-200 border-slate-400/20 bg-slate-500/10",
        icon: "text-slate-300 border-slate-400/20 bg-slate-500/10",
    },
    "sustainability-agri": {
        accent: "from-lime-500/18 via-green-500/10 to-transparent",
        glow: "group-hover:shadow-[0_30px_80px_-40px_rgba(132,204,22,0.45)]",
        chip: "text-lime-200 border-lime-400/20 bg-lime-500/10",
        icon: "text-lime-300 border-lime-400/20 bg-lime-500/10",
    },
    "saas-internal-systems": {
        accent: "from-indigo-500/18 via-blue-500/10 to-transparent",
        glow: "group-hover:shadow-[0_30px_80px_-40px_rgba(99,102,241,0.45)]",
        chip: "text-indigo-200 border-indigo-400/20 bg-indigo-500/10",
        icon: "text-indigo-300 border-indigo-400/20 bg-indigo-500/10",
    },
    "app-development": {
        accent: "from-cyan-500/18 via-emerald-500/10 to-transparent",
        glow: "group-hover:shadow-[0_30px_80px_-40px_rgba(34,211,238,0.42)]",
        chip: "text-cyan-200 border-cyan-400/20 bg-cyan-500/10",
        icon: "text-cyan-300 border-cyan-400/20 bg-cyan-500/10",
    },
    "creative-marketing-corporate": {
        accent: "from-pink-500/18 via-fuchsia-500/10 to-transparent",
        glow: "group-hover:shadow-[0_30px_80px_-40px_rgba(236,72,153,0.45)]",
        chip: "text-fuchsia-200 border-fuchsia-400/20 bg-fuchsia-500/10",
        icon: "text-fuchsia-300 border-fuchsia-400/20 bg-fuchsia-500/10",
    },
    "finance-advisory": {
        accent: "from-cyan-500/18 via-sky-500/10 to-transparent",
        glow: "group-hover:shadow-[0_30px_80px_-40px_rgba(6,182,212,0.45)]",
        chip: "text-cyan-200 border-cyan-400/20 bg-cyan-500/10",
        icon: "text-cyan-300 border-cyan-400/20 bg-cyan-500/10",
    },
    "events-exhibitions": {
        accent: "from-orange-500/18 via-red-500/10 to-transparent",
        glow: "group-hover:shadow-[0_30px_80px_-40px_rgba(249,115,22,0.45)]",
        chip: "text-orange-200 border-orange-400/20 bg-orange-500/10",
        icon: "text-orange-300 border-orange-400/20 bg-orange-500/10",
    },
    "real-estate-property": {
        accent: "from-teal-500/18 via-emerald-500/10 to-transparent",
        glow: "group-hover:shadow-[0_30px_80px_-40px_rgba(20,184,166,0.45)]",
        chip: "text-teal-200 border-teal-400/20 bg-teal-500/10",
        icon: "text-teal-300 border-teal-400/20 bg-teal-500/10",
    },
};

export default function PortfolioClient({
    sectors,
    projects,
}: PortfolioClientProps) {
    return (
        <main className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-blue-500/30 selection:text-blue-200">
            <PortfolioHero />

            <section
                id="sector-grid"
                className="border-t border-white/10 bg-black py-20 md:py-24"
            >
                <div className="container mx-auto px-6 md:px-10">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={sectionIntroMotion}
                        style={{ willChange: "transform, opacity" }}
                        className="mb-12 max-w-3xl"
                    >
                        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-400">
                            Sector Hub
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                            Industry-specific proof without fragmenting the portfolio.
                        </h2>
                        <p className="mt-5 text-sm leading-relaxed text-white/65 md:text-base">
                            We grouped existing case studies into sharper market-facing sectors, so visitors can find relevance faster without losing access to full project detail.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.12 }}
                        variants={sectionGridMotion}
                        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
                    >
                        {sectors.map((sector) => {
                            const style = sectorStyles[sector.slug] || {
                                accent: "from-blue-500/18 via-violet-500/10 to-transparent",
                                glow: "group-hover:shadow-[0_30px_80px_-40px_rgba(59,130,246,0.45)]",
                                chip: "text-blue-200 border-blue-400/20 bg-blue-500/10",
                                icon: "text-blue-300 border-blue-400/20 bg-blue-500/10",
                            };

                            return (
                                <motion.div
                                    key={sector.slug}
                                    variants={cardMotion}
                                    className="h-full"
                                    style={{
                                        willChange: "transform, opacity",
                                        transform: "translate3d(0,0,0)",
                                    }}
                                >
                                    <Link
                                        href={`/portfolio/sectors/${sector.slug}`}
                                        className={`group relative flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-white/8 bg-white/3 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/5 ${style.glow}`}
                                    >
                                        <div
                                            className={`absolute inset-0 bg-linear-to-br ${style.accent} opacity-80`}
                                        />
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]" />
                                        <div className="relative flex items-start justify-between gap-4">
                                            <div>
                                                <p
                                                    className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${style.chip}`}
                                                >
                                                    {sector.caseStudyCount} case studies
                                                </p>
                                                <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                                                    {sector.title}
                                                </h3>
                                            </div>
                                            <div
                                                className={`rounded-full border p-2 ${style.icon}`}
                                            >
                                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>

                                        <p className="relative mt-5 text-sm leading-relaxed text-white/72">
                                            {sector.summary}
                                        </p>

                                        <div className="relative mt-6 flex flex-wrap gap-2">
                                            {sector.subtags.slice(0, 4).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-medium text-white/82 backdrop-blur-sm"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <ProjectSection
                        key={project.id}
                        project={project}
                        index={index}
                    />
                ))}
            </div>

            <PortfolioCTA />
        </main>
    );
}
