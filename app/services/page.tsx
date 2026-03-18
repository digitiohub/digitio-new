"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Hero } from "@/components/services/Hero"
import { ServicesList } from "@/components/services/ServicesList"
import { DetailedServices } from "@/components/services/DetailedServices"
import { SupportSection } from "@/components/services/SupportSection"
import { ProcessSection } from "@/components/services/ProcessSection"
import { PhilosophySection } from "@/components/services/PhilosophySection"
import { PreFaqCtaSection } from "@/components/home/PreFaqCtaSection"

export default function ServicesPage() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        
        const ctx = gsap.context(() => {
            // Fade in sections on scroll
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

            // Divider animation
            gsap.utils.toArray<HTMLElement>(".divider").forEach((line) => {
                gsap.fromTo(line,
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        duration: 1.5,
                        ease: "power4.inOut",
                        scrollTrigger: {
                            trigger: line,
                            start: "top 90%",
                        }
                    }
                )
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <main ref={containerRef} className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
            <Hero />
            <ServicesList />
            <DetailedServices />
            <SupportSection />
            <ProcessSection />
            <PhilosophySection />
            <PreFaqCtaSection />
        </main>
    )
}
