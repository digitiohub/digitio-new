"use client"

import { useEffect, useRef } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const originalCaseStudies = [
    { id: 1, brand: "IIOLS", image: "/posters/iiols.png" },
    { id: 2, brand: "Cherries Peaches", image: "/posters/cherries.png" },
    { id: 3, brand: "GaavBazaar", image: "/posters/gaavbazaar.png" },
    { id: 4, brand: "Real Estate Picture", image: "/posters/real-estate-pictures.png" },
    { id: 5, brand: "Sajeev Krushi", image: "/posters/sajeev-krushi.png" },
    { id: 6, brand: "ProMeat", image: "/posters/promeat.png" },
]

// 3 copies = 18 items. 360 / 18 = 20 degrees difference
const caseStudies = [
    ...originalCaseStudies.map(c => ({ ...c, uid: c.id + "-1" })),
    ...originalCaseStudies.map(c => ({ ...c, uid: c.id + "-2" })),
    ...originalCaseStudies.map(c => ({ ...c, uid: c.id + "-3" })),
]

export function CaseStudiesSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const dragAreaRef = useRef<HTMLDivElement>(null)
    const wheelRef = useRef<HTMLDivElement>(null)

    const rotation = useRef(0)
    const velocity = useRef(0)
    const isDragging = useRef(false)
    const lastX = useRef(0)
    const lastTime = useRef(0)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let animationFrameId: number;

        const render = (time: number) => {
            lastTime.current = time;

            if (!isDragging.current) {
                // Apply friction
                velocity.current *= 0.95;
            }

            rotation.current += velocity.current;

            if (wheelRef.current) {
                wheelRef.current.style.transform = `rotate(${rotation.current}deg)`;
            }

            animationFrameId = requestAnimationFrame(render);
        }

        animationFrameId = requestAnimationFrame(render);

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".carousel-card");

            // Staggered entry from bottom up on first visibility
            gsap.from(cards, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%", // trigger when section is 40% into the viewport
                    once: true, // only animate once
                },
                y: 300,
                opacity: 0,
                duration: 1.2,
                stagger: 0.05, // stagger the start time of each card
                ease: "power3.out",
            });
        }, sectionRef)

        return () => {
            cancelAnimationFrame(animationFrameId);
            ctx.revert();
        }
    }, [])

    const handlePointerDown = (e: React.PointerEvent) => {
        isDragging.current = true
        lastX.current = e.clientX
        velocity.current = 0
        if (dragAreaRef.current) {
            dragAreaRef.current.style.cursor = 'grabbing'
        }
    }

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging.current) return
        const dx = e.clientX - lastX.current
        lastX.current = e.clientX

        // Update velocity based on pointer movement
        velocity.current = dx * 0.05
    }

    const handlePointerUp = () => {
        isDragging.current = false
        if (dragAreaRef.current) {
            dragAreaRef.current.style.cursor = 'grab'
        }
    }

    const handlePrev = () => {
        velocity.current = 1.5; // give it a spin manually to the right
    }

    const handleNext = () => {
        velocity.current = -1.5; // give it a spin manually to the left
    }

    return (
        <section ref={sectionRef} className="bg-[#0a0a0a] text-white flex flex-col pt-32 pb-16 overflow-hidden relative overflow-x-hidden">

            {/* Header Content & Nav Pills */}
            <div className="container mx-auto px-6 shrink-0 relative z-20 flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight max-w-2xl mb-12">
                    Innovation, Engineered by Appinventiv
                </h2>

                {/* Navigation Pills */}
                <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-3">
                    <button onClick={handlePrev} className="w-10 h-10 rounded-full border border-white/10 bg-[#161616] flex items-center justify-center hover:bg-white/10 transition-colors shrink-0">
                        <ArrowLeft className="w-4 h-4 text-gray-400" />
                    </button>
                    {originalCaseStudies.map((item, i) => (
                        <button key={i} className={`px-4 py-2 text-sm md:px-6 md:py-3 md:text-base rounded-full font-semibold transition-colors border ${i === 0 ? 'bg-white text-black border-white' : 'bg-[#161616] text-gray-300 border-white/10 hover:bg-white/10 hover:border-white/20'}`}>
                            {item.brand}
                        </button>
                    ))}
                    <button onClick={handleNext} className="w-10 h-10 rounded-full border border-white/10 bg-[#161616] flex items-center justify-center hover:bg-white/10 transition-colors shrink-0">
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                    </button>
                </div>
            </div>

            {/* Drag Area wrapper */}
            <div
                ref={dragAreaRef}
                className="relative w-screen h-280 -mx-[calc((100vw-100%)/2)] mt-10 shrink-0 cursor-grab active:cursor-grabbing touch-pan-y select-none z-10 hidden sm:block overflow-hidden"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                onPointerCancel={handlePointerUp}
            >
                {/* Drag Indicator */}
                <div className="absolute left-10 md:left-24 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-semibold tracking-widest text-gray-300 pointer-events-none z-50">
                    DRAG
                </div>

                {/* The Mathematical Circular Carousel */}
                <div className="relative w-full h-full pointer-events-none">
                    <div
                        ref={wheelRef}
                        className="absolute left-1/2"
                        style={{
                            top: "1200px", // Radius/pivot tuned to avoid clipping
                            width: 0, height: 0
                        }}
                    >
                        {caseStudies.map((item, i) => {
                            const angle = i * 20;
                            return (
                                <div
                                    key={item.uid}
                                    className={`carousel-card absolute rounded-[12px] overflow-hidden shadow-2xl`}
                                    style={{
                                        width: '340px',
                                        height: '420px',
                                        left: '50%',
                                        marginLeft: '-170px',
                                        top: 0,
                                        transformOrigin: "50% 0%",
                                        transform: `rotate(${angle}deg) translateY(-1200px)`,
                                    }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.brand}
                                        fill
                                        className="object-cover"
                                        sizes="420px"
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Mobile Fallback for Carousel (Math is weird on very small screens) */}
            <div className="flex sm:hidden overflow-x-auto gap-4 px-6 mt-12 pb-8 snap-x snap-mandatory hide-scrollbar">
                {originalCaseStudies.map((item, i) => (
                    <div
                        key={i}
                        className={`rounded-3xl shrink-0 snap-center relative overflow-hidden`}
                        style={{
                            minWidth: '85vw',
                            height: '450px',
                        }}
                    >
                        <Image
                            src={item.image}
                            alt={item.brand}
                            fill
                            className="object-cover"
                            sizes="85vw"
                        />
                    </div>
                ))}
            </div>

            {/* CTA Banner Area */}
            <div className="container mx-auto px-6 relative z-30 mt-8 md:mt-16">
                <div className="w-full rounded-[2rem] bg-linear-to-r from-[#000d33] via-[#002b80] to-[#001433] overflow-hidden relative flex flex-col lg:flex-row items-center justify-between p-8 md:p-14 border border-white/10 shadow-2xl">

                    {/* Decorative Background Elements (Glass Pillars forming a bar chart) */}
                    <div className="absolute right-0 bottom-0 top-0 w-full lg:w-1/2 overflow-hidden pointer-events-none flex items-end justify-end opacity-30 lg:opacity-60">
                        <div className="flex items-end h-[85%] -mb-2.5 gap-2 lg:gap-4 pr-10 md:pr-16 translate-x-12">
                            <div className="w-12 md:w-16 h-[30%] bg-linear-to-t from-blue-400/20 to-blue-300/40 backdrop-blur-md border border-white/30 rounded-t border-b-0 skew-x-[-15deg]"></div>
                            <div className="w-14 md:w-20 h-[50%] bg-linear-to-t from-blue-500/30 to-blue-400/50 backdrop-blur-md border border-white/30 rounded-t border-b-0 skew-x-[-15deg] z-10 -ml-8 lg:-ml-12"></div>
                            <div className="w-16 md:w-24 h-[70%] bg-linear-to-t from-blue-400/30 to-blue-200/60 backdrop-blur-xl border border-white/40 rounded-t border-b-0 skew-x-[-15deg] z-20 -ml-8 lg:-ml-12"></div>
                            <div className="w-20 md:w-32 h-full bg-linear-to-t from-blue-600/40 to-blue-100/70 backdrop-blur-2xl border border-white/50 rounded-t border-b-0 skew-x-[-15deg] z-30 -ml-8 lg:-ml-12 flex items-start justify-center pt-8 md:pt-12 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-white drop-shadow-lg skew-x-15 hidden md:block">
                                    <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* CTA Content */}
                    <div className="relative z-10 max-w-2xl text-left w-full flex flex-col items-start">
                        <h3 className="text-2xl md:text-3xl lg:text-[40px] font-normal mb-8 leading-tight tracking-tight w-full">
                            You&apos;ve seen how we helped <br className="hidden lg:block" />
                            <span className="font-bold">IIOLS, GaavBazaar,</span> and <span className="font-bold">ProMeat</span> <br className="hidden lg:block" />
                            reclaim their market edge.
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base mb-10 max-w-xl leading-relaxed font-light">
                            From 90% faster reporting to <span className="font-semibold text-white">4x operational improvements</span>, our engineering goes beyond code to deliver measurable ROI.
                        </p>
                        <button className="bg-white text-black px-8 py-4 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors shadow-xl w-full sm:w-auto text-center">
                            Consult our Experts for Growth Roadmap
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Scrollbar hiding styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </section>
    )
}
