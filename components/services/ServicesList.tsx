"use client"

import { Plus } from "lucide-react"

const servicesList = [
    {
        id: "01",
        title: "Software Consulting",
        desc: "Strategic technical guidance to align your technology stack with business objectives for long-term scalability."
    },
    {
        id: "02",
        title: "Artificial Intelligence & Data Science",
        desc: "Custom ML models, NLP, and predictive analytics that turn raw data into actionable business intelligence."
    },
    {
        id: "03",
        title: "AI-Driven Business Solutions",
        desc: "Intelligent automation and agentic workflows designed to eliminate manual friction and optimize operations."
    },
    {
        id: "04",
        title: "Web & Custom Application Development",
        desc: "High-performance, production-grade systems built with modern architectures and clean, maintainable code."
    },
    {
        id: "05",
        title: "Mobility & Interface Design",
        desc: "Native and hybrid mobile experiences paired with intentional UX that prioritizes user engagement."
    },
    {
        id: "06",
        title: "Cloud & DevOps Services",
        desc: "Robust infrastructure management, CI/CD automation, and cloud native architectures for reliability."
    },
    {
        id: "07",
        title: "Blockchain Development",
        desc: "Secure, decentralized solutions focused on transparency, traceability, and architectural integrity."
    }
]

export function ServicesList() {
    return (
        <section className="px-6 py-20 md:py-32 border-t border-white/10">
            <div className="container mx-auto max-w-7xl">
                <div className="mb-16 reveal">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">Core Offerings</span>
                    <h2 className="text-3xl md:text-4xl font-medium">Strategic Engineering</h2>
                </div>

                <div className="flex flex-col">
                    {servicesList.map((service) => (
                        <div key={service.id} className="group relative border-b border-white/10 py-10 md:py-16 transition-colors hover:bg-white/2">
                            <div className="absolute top-0 left-0 h-px w-full origin-left scale-x-0 bg-blue-500 divider" />
                            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-20">
                                <span className="text-sm font-mono text-zinc-500 pt-1.5">{service.id}</span>
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-4xl font-medium mb-4 transition-transform duration-500 group-hover:translate-x-2">
                                        {service.title}
                                    </h3>
                                    <p className="max-w-xl text-zinc-400 text-lg leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                                <div className="md:pt-2">
                                    <div className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-black transition-all duration-300">
                                        <Plus className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
