"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { TextAnimate } from "@/components/ui/text-animate"

const industries = [
    {
        name: "Healthcare",
        description:
            "We build secure patient experiences, clinical workflows, and data systems that improve outcomes while meeting strict compliance requirements.",
        image: "/media/sectors/healthcare.webp",
    },
    {
        name: "Finance",
        description:
            "We deliver secure financial products with robust analytics, compliance-first architecture, and seamless user journeys across channels.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Banking",
        description:
            "Our banking platforms modernize onboarding, lending, and servicing with automation, fraud controls, and real-time operational visibility.",
        image: "/media/sectors/banking.webp",
    },
    {
        name: "Restaurant",
        description:
            "We craft restaurant and food-service systems that streamline ordering, delivery operations, loyalty, and kitchen workflows at scale.",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "eCommerce",
        description:
            "From discovery to checkout, we build commerce experiences powered by personalization, inventory intelligence, and growth-focused experimentation.",
        image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "EV",
        description:
            "We support EV businesses with connected mobility platforms, charging management systems, and analytics-driven fleet operations.",
        image: "/media/sectors/ev.webp",
    },
    {
        name: "SaaS",
        description:
            "Our SaaS engineering approach focuses on product velocity, multitenant reliability, and usage analytics that improve retention and expansion.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Travel",
        description:
            "We design travel products with intelligent search, itinerary workflows, and personalized experiences that reduce friction across the journey.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Entertainment",
        description:
            "We power entertainment platforms with scalable content delivery, immersive user experiences, and audience engagement features.",
        image: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "On-Demand",
        description:
            "Our on-demand solutions optimize dispatch, fulfillment, and real-time tracking for fast, dependable service experiences.",
        image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Logistics",
        description:
            "Our logistics solutions combine real-time visibility, fleet intelligence, and workflow automation to optimize deliveries and reduce delays.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Education",
        description:
            "We build modern edtech products for institutions and learners, from digital classrooms to assessment, engagement, and insights.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Real Estate",
        description:
            "We create property-tech platforms with immersive discovery, lead management, and transaction-ready experiences for brokers and developers.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Aviation",
        description:
            "Our aviation solutions improve planning, operations, and passenger touchpoints with dependable, real-time digital infrastructure.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Agriculture",
        description:
            "We enable data-led agriculture with smart monitoring, farm operations platforms, and digital supply-chain coordination.",
        image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Telecom",
        description:
            "We help telecom teams modernize customer journeys, service operations, and network intelligence with scalable digital systems.",
        image: "https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Oil and Gas",
        description:
            "Our software supports field operations, safety workflows, and asset intelligence for better reliability and decision-making.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Automotive",
        description:
            "We design connected automotive platforms for dealers, fleets, and mobility providers with strong user experience and data capabilities.",
        image: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Insurance",
        description:
            "We transform insurance journeys with digital onboarding, claims automation, underwriting support, and policyholder self-service.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Manufacturing",
        description:
            "We connect production, quality, and supply-chain systems to unlock smarter operations through analytics, automation, and dependable integrations.",
        image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600&q=80",
    },
]

export function IndustriesSection() {
    const [activeIndex, setActiveIndex] = useState(0)
    const itemRefs = useRef<Array<HTMLDivElement | null>>([])

    useEffect(() => {
        let frameId = 0

        const updateActive = () => {
            frameId = window.requestAnimationFrame(() => {
                const viewportTarget = window.innerHeight * 0.44
                if (window.innerWidth < 1024) return
                let nextIndex = 0
                let closestDistance = Number.POSITIVE_INFINITY

                itemRefs.current.forEach((el, index) => {
                    if (!el) return
                    const rect = el.getBoundingClientRect()
                    const midpoint = rect.top + rect.height / 2
                    const distance = Math.abs(midpoint - viewportTarget)

                    if (distance < closestDistance) {
                        closestDistance = distance
                        nextIndex = index
                    }
                })

                setActiveIndex((current) => (current === nextIndex ? current : nextIndex))
            })
        }

        updateActive()
        window.addEventListener("scroll", updateActive, { passive: true })
        window.addEventListener("resize", updateActive)

        return () => {
            if (frameId) {
                window.cancelAnimationFrame(frameId)
            }
            window.removeEventListener("scroll", updateActive)
            window.removeEventListener("resize", updateActive)
        }
    }, [])

    return (
        <section id="industries" className="py-24 bg-black text-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
                        {/* Desktop version */}
                        <div className="hidden md:block">
                            <div className="flex flex-wrap justify-center items-center">
                                <TextAnimate animation="slideLeft" by="character" as="span" className="inline-block whitespace-nowrap mr-[0.25em]">Solving Complex Challenges</TextAnimate>
                            </div>
                            <div className="flex flex-wrap justify-center items-center">
                                <TextAnimate animation="slideLeft" by="character" as="span" className="inline-block whitespace-nowrap">
                                    Across Every Major Sector
                                </TextAnimate>
                            </div>
                        </div>
                        {/* Mobile version */}
                        <div className="block md:hidden">
                            <div className="flex flex-wrap justify-center items-center gap-x-[0.25em]">
                                <TextAnimate animation="slideLeft" by="character" as="span" className="inline-block whitespace-nowrap">Solving Complex</TextAnimate>
                                <TextAnimate animation="slideLeft" by="character" as="span" className="inline-block whitespace-nowrap">Challenges</TextAnimate>
                            </div>
                            <div className="flex flex-wrap justify-center items-center gap-x-[0.25em]">
                                <TextAnimate animation="slideLeft" by="character" as="span" className="inline-block whitespace-nowrap">Across Every Major Sector</TextAnimate>
                            </div>
                        </div>
                    </h2>
                    <p className="text-white/70 text-lg">
                        We adapt proven technology patterns to the specific operational constraints of regulated, data-intensive industries.
                    </p>
                </div>

                <div className="hidden lg:grid lg:grid-cols-[1fr_minmax(280px,420px)_1fr] gap-10 items-start">
                    <div className="sticky top-28">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={industries[activeIndex].name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-2xl shadow-black/30 aspect-4/3"
                            >
                                <Image
                                    src={industries[activeIndex].image}
                                    alt={industries[activeIndex].name}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div>
                        {industries.map((industry, i) => (
                            <div
                                key={industry.name}
                                ref={(el) => {
                                    itemRefs.current[i] = el
                                }}
                                className="min-h-[16vh] flex items-center"
                            >
                                <motion.h3
                                    animate={{
                                        opacity: activeIndex === i ? 1 : 0.26,
                                        scale: activeIndex === i ? 1 : 0.98,
                                    }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className={`text-4xl font-semibold tracking-tight ${activeIndex === i ? "text-white" : "text-white/35"}`}
                                >
                                    {industry.name}
                                </motion.h3>
                            </div>
                        ))}
                    </div>

                    <div className="sticky top-28 pt-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${industries[activeIndex].name}-desc`}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="space-y-8"
                            >
                                <p className="text-xl leading-relaxed text-white/85">
                                    {industries[activeIndex].description}
                                </p>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center rounded-full border border-white px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-white hover:text-black"
                                >
                                    Know More
                                </a>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <div className="lg:hidden space-y-6">
                    <div className="relative">
                        <select
                            aria-label="Select industry"
                            className="w-full appearance-none rounded-3xl border border-white/25 bg-white/8 px-6 py-5 text-lg font-semibold text-white outline-none transition focus:border-white"
                            value={activeIndex}
                            onChange={(e) => setActiveIndex(Number(e.target.value))}
                        >
                            {industries.map((industry, i) => (
                                <option key={industry.name} value={i} className="text-black">
                                    {industry.name}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-6 top-1/2 size-6 -translate-y-1/2 text-white/80" />
                    </div>

                    <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 aspect-4/3">
                        <Image src={industries[activeIndex].image} alt={industries[activeIndex].name} fill className="object-cover" />
                    </div>

                    <p className="text-md leading-relaxed text-white/90 text-justify">
                        {industries[activeIndex].description}
                    </p>
                </div>
            </div>
        </section>
    )
}
