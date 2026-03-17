"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { RefreshCcw, Code, Grid, Database } from "lucide-react"
import { TextAnimate } from "@/components/ui/text-animate"

export function StatsSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const cardsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Keep original desktop animation; only disable it on smaller screens.
        if (typeof window === "undefined" || window.innerWidth < 768) return

        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".transform-card") as HTMLElement[]
            if (cards.length === 0) return

            // The first card is already at y: 0. The others start increasingly lower.
            cards.forEach((card, index) => {
                if (index > 0) {
                    gsap.set(card, { y: `${index * 100}%` })
                }
            })

            // Original ScrollTrigger animation with pinning.
            gsap.to(cards.slice(1), {
                // Animate only elements after the first one
                y: "0%", // bring them all to 0% offset
                ease: "power1.inOut",
                stagger: 0.1, // this stagger will make them animate sequentially
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top", // pin exactly at the top of the viewport
                    end: "+=150%", // duration of scroll/pin
                    pin: true,
                    scrub: 1,
                }
            })

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const cardsData = [
        {
            icon: RefreshCcw,
            title: "Strategic Technology Consulting",
            desc: "From architecture audits to digital transformation strategy, we help leaders align technology with business goals for measurable ROI.",
            btn: "View Consulting Services",
        },
        {
            icon: Code,
            title: "Digital Product Development & Engineering",
            desc: "As your digital product engineering company, we handle the full lifecycle of software development—from cloud-native applications to complex ERP systems.",
            btn: "View Product Engineering Services",
        },
        {
            icon: Grid,
            title: "AI, Data and Analytics Solutions",
            desc: "We integrate advanced AI, generative AI, and machine learning models to automate operations, predict trends, and personalize customer experiences at scale.",
            btn: "View Artificial Intelligence Services",
        },
        {
            icon: Database, // the icon in the screenshot is a database with lock
            title: "Cloud Operations and Cybersecurity",
            desc: "As your IT service company, we engineer cloud-native environments rooted in Zero Trust principles, ensuring your infrastructure is as scalable as it is impenetrable.",
            btn: "View Cybersecurity Services",
        },
    ]

    return (
        <>
            {/* Mobile / tablet layout: simple stacked cards, no GSAP, no pinning */}
            <section className="bg-zinc-50 relative z-10 w-full md:hidden pt-16 pb-12">
                <div className="container mx-auto px-6 mb-8">
                    <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 leading-tight">
                            <div className="flex flex-wrap justify-center items-center gap-x-[0.25em]">
                                <TextAnimate animation="slideLeft" by="character" as="span" className="inline-block whitespace-nowrap">Beyond Development.</TextAnimate>
                            </div>
                            <div className="flex flex-wrap justify-center items-center gap-x-[0.25em]">
                                <TextAnimate animation="slideLeft" by="character" as="span" className="inline-block whitespace-nowrap">We Deliver Transformation.</TextAnimate>
                            </div>
                        </h2>
                    </div>
                </div>

                <div className="container mx-auto px-6 space-y-6">
                    {cardsData.map((card, i) => (
                        <div
                            key={i}
                            className="relative w-full border border-gray-200 bg-white rounded-3xl flex flex-col px-6 py-8 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.35)]"
                        >
                            <div className="mb-8">
                                <card.icon className="w-8 h-8 text-blue-600 mb-5" />
                                <h3 className="text-lg font-bold text-slate-900 mb-4">{card.title}</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">{card.desc}</p>
                            </div>
                            <button className="px-5 py-3 rounded-full border border-gray-900 text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors w-full text-center">
                                {card.btn}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Desktop layout: GSAP/ScrollTrigger-driven transform cards (unchanged from original, just hidden on mobile) */}
            <section
                ref={sectionRef}
                className="bg-zinc-50 relative z-10 w-full overflow-hidden hidden md:flex h-screen flex-col pt-24 pb-8"
            >
                <div className="container mx-auto px-6 mb-12 shrink-0">
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <div className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                            <div className="flex flex-wrap justify-center items-center gap-x-[0.25em]">
                                <TextAnimate animation="slideLeft" by="character" as="span" className="inline-block whitespace-nowrap">Beyond Development.</TextAnimate>
                            </div>
                            <div className="flex flex-wrap justify-center items-center gap-x-[0.25em]">
                                <TextAnimate animation="slideLeft" by="character" as="span" className="inline-block whitespace-nowrap">We Deliver Transformation.</TextAnimate>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Container for the cards. We need it to be relative and large enough. */}
                <div className="container mx-auto px-6 grow relative" ref={cardsRef} style={{ perspective: "1000px" }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 h-full border-t border-gray-200">
                        {cardsData.map((card, i) => (
                            <div
                                key={i}
                                className="transform-card relative w-full h-full border-l first:border-l-0 border-gray-200 bg-zinc-50 flex flex-col px-6 py-10 shadow-[0_-10px_20px_-15px_rgba(0,0,0,0.1)]"
                            >
                                <div className="mb-12">
                                    <card.icon className="w-10 h-10 text-blue-600 mb-6" />
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 pr-4">{card.title}</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed min-h-25">{card.desc}</p>
                                </div>
                                <div className="mt-auto">
                                    <button className="px-5 py-3 rounded-full border border-gray-900 text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors w-full sm:w-auto text-center">
                                        {card.btn}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
