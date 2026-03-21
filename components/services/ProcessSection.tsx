"use client"

const processSteps = [
    { id: "01", title: "Requirement Understanding", desc: "We deeply understand your business, goals, and constraints." },
    { id: "02", title: "Architecture & Planning", desc: "We architect scalable and maintainable solutions designed for the long term." },
    { id: "03", title: "Agile Development", desc: "We develop clean, production-ready systems using iterative feedback loops." },
    { id: "04", title: "Testing & Quality Assurance", desc: "Rigorous validation to ensure performance, security, and perfect execution." },
    { id: "05", title: "Deployment", desc: "Seamless transition to production with zero-downtime strategies." },
    { id: "06", title: "Training & Continuous Support", desc: "Long-term product evolution, monitoring, and proactive feature upgrades." }
]

export function ProcessSection() {
    return (
        <section className="relative px-6 py-20 md:py-32 lg:py-0 lg:h-screen lg:min-h-212.5 border-t border-zinc-200 bg-white flex items-center">
            <div className="container mx-auto max-w-7xl">
                <div className="max-w-3xl mb-24 reveal">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">Our Process</span>
                    <h2 className="text-4xl md:text-6xl font-medium leading-tight text-zinc-900">How we build the future.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {processSteps.map((step) => (
                        <div key={step.id} className="reveal group">
                            <div className="mb-6 flex items-baseline gap-4">
                                <span className="text-sm font-mono text-blue-500">{step.id}</span>
                                <div className="h-px flex-1 bg-zinc-200 group-hover:bg-blue-500/50 transition-colors" />
                            </div>
                            <h3 className="text-2xl font-medium mb-4 text-zinc-900">{step.title}</h3>
                            <p className="text-zinc-600 leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
