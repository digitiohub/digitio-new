"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PortfolioHero } from "@/components/portfolio/PortfolioHero"
import { ProjectSection } from "@/components/portfolio/ProjectSection"
import { PortfolioCTA } from "@/components/portfolio/PortfolioCTA"
import projects from "@/data/projects.json"

export default function PortfolioPage() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        
        const ctx = gsap.context(() => {
            // Fade in and slide up sections on scroll
            gsap.utils.toArray<HTMLElement>(".reveal").forEach((elem) => {
                gsap.fromTo(elem,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: elem,
                            start: "top 85%",
                        }
                    }
                )
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <main ref={containerRef} className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
            <PortfolioHero />
            
            <div className="flex flex-col">
                {projects.map((project) => (
                    <ProjectSection key={project.id} project={project} />
                ))}
            </div>

            <PortfolioCTA />
        </main>
    )
}
