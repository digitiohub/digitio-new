"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProjectSectionProps {
    project: {
        id: string
        title: string
        year: string
        type: string
        slug: string
        thumbnail: string
        description?: string
        overview?: string
    }
    index: number
}

export function ProjectSection({ project, index }: ProjectSectionProps) {
    const isEven = index % 2 === 0
    return (
        <section className="group relative border-t border-white/10 bg-black py-16 transition-colors hover:bg-zinc-900/40 md:py-20 lg:py-24">
            <div className="container mx-auto px-6 md:px-10">
                <Link href={`/portfolio/${project.slug}`} className="block">
                    <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
                        {/* Content */}
                        <div className={cn(
                            "order-2",
                            isEven ? "lg:order-1" : "lg:order-2"
                        )}>
                            <motion.div
                                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className={cn(
                                    "flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500/80 mb-6",
                                    !isEven && "lg:justify-end"
                                )}
                            >
                                <span>{project.type}</span>
                                <span className="h-1 w-1 rounded-full bg-zinc-800" />
                                <span className="text-zinc-500">{project.year}</span>
                            </motion.div>

                            <motion.h2 
                                className={cn(
                                    "text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl",
                                    !isEven && "lg:text-right"
                                )}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                            >
                                {project.title}
                            </motion.h2>
                            
                            <motion.p 
                                className={cn(
                                    "mt-6 text-base leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-200 md:text-lg",
                                    !isEven && "lg:text-right"
                                )}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            >
                                {project.overview || project.description}
                            </motion.p>

                            <motion.div 
                                className={cn(
                                    "mt-10 flex items-center gap-2 text-sm font-bold text-white transition-all group-hover:gap-4",
                                    !isEven && "lg:flex-row-reverse lg:justify-start"
                                )}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
                            >
                                <span className="uppercase tracking-widest text-[11px]">Explore Case Study</span>
                                <ArrowRight className={cn(
                                    "h-4 w-4 text-blue-500",
                                    !isEven && "rotate-180 lg:rotate-0"
                                )} />
                                <div className="h-px w-0 bg-blue-500/50 transition-all duration-500 group-hover:w-16" />
                            </motion.div>
                        </div>

                        {/* Image Showcase */}
                        <motion.div 
                            className={cn(
                                "relative order-1 overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50",
                                isEven ? "lg:order-2" : "lg:order-1"
                            )}
                            style={{ aspectRatio: '1.97 / 1' }}
                            initial={{ opacity: 0, scale: 0.95, x: isEven ? 20 : -20 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <Image 
                                src={project.thumbnail} 
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </motion.div>
                    </div>
                </Link>
            </div>
        </section>
    )
}
