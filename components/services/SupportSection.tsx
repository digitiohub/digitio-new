"use client";

export function SupportSection() {
    return (
        <section className="px-6 py-20 md:py-32 border-t border-white/10">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="reveal">
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
                            Continuous Growth
                        </span>
                        <h2 className="text-4xl font-medium mb-6">
                            Support & Maintenance
                        </h2>
                        <p className="text-zinc-400 leading-relaxed">
                            Ensuring performance, security, and scalability long
                            after the initial launch.
                        </p>
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                t: "Technical Support",
                                d: "24/7 monitoring and rapid response to ensure uptime and performance.",
                            },
                            {
                                t: "Security Management",
                                d: "Continuous audits, patch management, and proactive threat mitigation.",
                            },
                            {
                                t: "Feature Evolution",
                                d: "Regular updates to align with evolving market needs and technologies.",
                            },
                            {
                                t: "Scalability Optimization",
                                d: "Infrastructure adjustments to support growing user loads seamlessly.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-2xl border border-white/5 bg-white/2 reveal"
                            >
                                <h3 className="text-xl font-medium mb-3">
                                    {item.t}
                                </h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {item.d}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
