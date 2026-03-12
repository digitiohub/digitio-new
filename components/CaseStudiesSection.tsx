"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

const caseStudies = [
    { id: 1, brand: "Americana", title: "Transforming regional food delivery with an AI-first approach." },
    { id: 2, brand: "Sonny's", title: "Reimagining BBQ digital experience for modern consumers." },
    { id: 3, brand: "Adidas", title: "Scaling global e-commerce with scalable microservices." },
    { id: 4, brand: "IKEA", title: "AR shopping experiences that bridge digital and physical retail." },
]

export function CaseStudiesSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            const container = scrollContainerRef.current
            if (!container) return

            // Horizontal scroll animation
            gsap.to(container, {
                x: () => -(container.scrollWidth - window.innerWidth + 48), // Padding allowance
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: () => `+=${container.scrollWidth}`,
                    invalidateOnRefresh: true,
                }
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="h-screen bg-[#0a0a0a] text-white flex flex-col justify-center overflow-hidden">
            <div className="container mx-auto px-6 mb-12 shrink-0">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight max-w-2xl">
                    Innovation, Engineered by Appinventiv
                </h2>
                <p className="text-gray-400 mt-4 text-lg">
                    You’ve seen how we helped Americana, Sonny’s, and Adidas reclaim their market edge.
                </p>
            </div>

            <div className="pl-6 w-full h-[60vh] flex items-center">
                <div ref={scrollContainerRef} className="flex gap-8 flex-nowrap h-full pb-8">
                    {caseStudies.map((item) => (
                        <div
                            key={item.id}
                            className="relative w-[80vw] md:w-[50vw] lg:w-[40vw] h-full shrink-0 rounded-3xl overflow-hidden group cursor-pointer"
                        >
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/40 transition-colors duration-500 z-10" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-20" />

                            <div className="absolute inset-0 flex items-center justify-center text-white/5 font-mono text-9xl font-bold z-0 pointer-events-none select-none">
                                {item.id}
                            </div>

                            <div className="absolute inset-0 p-10 flex flex-col justify-end z-30">
                                <span className="text-blue-400 font-semibold mb-2 uppercase tracking-wider text-sm">
                                    {item.brand}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-bold text-white max-w-md leading-tight group-hover:-translate-y-2 transition-transform duration-500">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
