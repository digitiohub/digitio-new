"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
    Bot,
    Sparkles,
    Workflow,
    BrainCircuit,
    ScanEye,
    Cloud,
    BarChart4,
    ShieldCheck,
    Network,
    Glasses,
    Link,
    ChevronDown,
    ChevronUp,
} from "lucide-react"
import { TextAnimate } from "@/components/ui/text-animate"

const services = [
    { icon: Bot, title: "Artificial Intelligence", desc: "AI only creates value when it fits into how an organization actually works. We help enterprises apply intelligence in ways that improve decisions, reduce manual effort, and support operations at scale.", link: "#" },
    { icon: Sparkles, title: "Generative AI", desc: "Gen AI is most useful when it becomes part of everyday work. We integrate it into internal knowledge systems, customer interactions, and operational tools.", link: "#" },
    { icon: Workflow, title: "Agentic AI", desc: "We work with organizations exploring autonomous systems, helping them introduce AI agents that can take action across processes while remaining transparent.", link: "#" },
    { icon: BrainCircuit, title: "Machine Learning", desc: "ML in enterprise environments is less about experimentation and more about reliability. We develop models that adapt over time.", link: "#" },
    { icon: ScanEye, title: "Computer Vision", desc: "In environments where speed and accuracy matter, vision-based systems can remove friction. We apply computer vision to automate inspection.", link: "#" },
    { icon: Cloud, title: "Cloud", desc: "Cloud modernization is not a lift-and-shift exercise. We help enterprises rethink how applications and infrastructure are structured.", link: "#" },
    { icon: BarChart4, title: "Data Science and Analytics", desc: "Data only becomes useful when teams can rely on it. We design data foundations that support analytics and insight across functions.", link: "#" },
    { icon: ShieldCheck, title: "Cybersecurity", desc: "Security is treated as a design constraint, not a checklist item. Our systems account for governance, compliance, and risk.", link: "#" },
    { icon: Network, title: "IoT", desc: "Connected devices generate value only when their data is usable. We help organizations bring physical systems into their digital landscape.", link: "#" },
    { icon: Glasses, title: "AR/VR", desc: "Immersive technologies work best when they solve specific problems. We use AR and VR to support training, simulation, and remote collaboration.", link: "#" },
    { icon: Link, title: "Blockchain", desc: "Distributed systems are useful where trust must be shared. We apply blockchain selectively, focusing on traceability and data integrity.", link: "#" },
]

export function ServicesSection() {
    const containerRef = useRef<HTMLElement>(null)
    const [openIndex, setOpenIndex] = useState(1)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            gsap.fromTo(".service-card",
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="relative border-t border-white/10 bg-black py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="mx-auto mb-10 max-w-4xl md:mx-0 md:mb-16">
                    <h2 className="mb-6 text-center text-3xl font-semibold tracking-tight text-white md:text-left md:text-5xl md:font-medium md:leading-tight">
                        {/* Desktop version: Keeps original line breaks */}
                        <div className="hidden md:block">
                            <div className="flex flex-wrap items-center">
                                <TextAnimate animation="slideLeft" by="character" as="span" className="inline-block whitespace-nowrap mr-[0.3em]">Deep Technical Expertise,</TextAnimate>
                            </div>
                            <div className="flex flex-wrap items-center">
                                <TextAnimate animation="slideLeft" by="character" as="span" className="inline-block whitespace-nowrap">
                                    Supporting Modern Systems
                                </TextAnimate>
                            </div>
                        </div>
                        {/* Mobile version: Breaks after "Supporting" */}
                        <div className="block md:hidden">
                            <div className="flex flex-wrap justify-center items-center">
                                <TextAnimate animation="slideLeft" by="character" as="span" className="inline-block whitespace-nowrap">Deep Technical Expertise,</TextAnimate>
                            </div>
                            <div className="mt-2 flex flex-wrap justify-center items-center">
                                <TextAnimate animation="slideLeft" by="character" as="span" className="inline-block whitespace-nowrap">
                                    Supporting Modern Systems
                                </TextAnimate>
                            </div>
                        </div>
                    </h2>
                </div>

                <div className="hidden grid-cols-1 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {services.map((service, i) => (
                        <a
                            key={i}
                            href={service.link}
                            className="service-card group flex min-h-56.25 flex-col rounded-2xl border border-white/15 bg-black p-7 transition-colors duration-300 hover:border-white/35"
                        >
                            <div className="min-h-33">
                                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-white/5 text-blue-500">
                                    <service.icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">
                                    <span className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-blue-500 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                                        {service.title}
                                    </span>
                                </h3>
                            </div>
                            <p className="text-sm leading-relaxed text-zinc-400">
                                {service.desc}
                            </p>
                        </a>
                    ))}
                </div>

                <div className="md:hidden">
                    {services.map((service, i) => {
                        const isOpen = openIndex === i
                        return (
                            <div key={i} className="border-b border-white/15 py-5">
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-between gap-3 text-left"
                                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                                >
                                    <div className="flex items-center gap-4">
                                        <service.icon className="h-5 w-5 text-blue-500" />
                                        <h3 className="text-md font-semibold leading-tight text-white">{service.title}</h3>
                                    </div>
                                    {isOpen ? (
                                        <ChevronUp className="h-5 w-5 shrink-0 text-zinc-200" />
                                    ) : (
                                        <ChevronDown className="h-5 w-5 shrink-0 text-zinc-200" />
                                    )}
                                </button>

                                {isOpen && (
                                    <div className="pt-4">
                                        <p className="text-sm leading-relaxed text-zinc-400">{service.desc}</p>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
