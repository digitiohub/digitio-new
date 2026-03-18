"use client";

export function DetailedServices() {
    return (
        <section className="relative px-6 py-20 md:py-32 lg:py-0 lg:min-h-[600px] bg-zinc-950/50 flex items-center border-t border-white/10">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
                    <div className="reveal">
                        <h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight">
                            Artificial Intelligence &<br /> Data Science
                        </h2>
                        <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                            Beyond the hype. We build intelligent systems that
                            solve real operational constraints. Our focus is on
                            reliability, transparency, and measurable ROI.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Custom LLM Implementation",
                                "Predictive Analytics",
                                "Computer Vision Systems",
                                "Natural Language Processing",
                                "AI Agentic Workflows",
                                "Data Visualization",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 text-zinc-300"
                                >
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="reveal">
                        <h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight">
                            Web & Mobile
                            <br /> Development
                        </h2>
                        <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                            We craft flawless digital experiences across all
                            platforms. Precision engineering meets intentional
                            design to maximize user retention and engagement.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Native iOS & Android",
                                "Hybrid App Solutions",
                                "React & Next.js Systems",
                                "Custom UI/UX Frameworks",
                                "E-commerce Platforms",
                                "Progressive Web Apps",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 text-zinc-300"
                                >
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
