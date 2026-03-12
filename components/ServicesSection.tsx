"use client"

import { useEffect, useRef } from "react"
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
    Link
} from "lucide-react"

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
        <section ref={containerRef} className="py-24 bg-slate-50 border-t border-gray-100 relative">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
                        Deep Technical Expertise, <br className="hidden md:block" />
                        Supporting Modern Systems
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <a
                            key={i}
                            href={service.link}
                            className="service-card group block p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {service.desc}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
