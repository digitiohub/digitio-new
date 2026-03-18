"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export function PhilosophySection() {
    return (
        <section className="relative px-6 py-20 md:py-32 lg:py-0 lg:h-screen lg:min-h-[800px] overflow-hidden flex items-center">

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                    <div className="reveal">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 mb-6 block">Our DNA</span>
                        <h2 className="text-3xl md:text-4xl font-medium mb-10 leading-[1.1] text-zinc-400">
                            We don’t build features. 
                            <span className="block text-white mt-2">We build systems that last.</span>
                        </h2>
                        
                        <div className="space-y-8">
                            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-xl">
                                Our philosophy is simple: Long-term thinking from day one. 
                                We prioritize clean architecture over quick hacks and resilience over shortcuts.
                            </p>
                            
                            <ul className="grid grid-cols-1 gap-6">
                                {[
                                    "Built for global scale, from day zero",
                                    "Architecture that evolves with your business",
                                    "Obsessive focus on clean, maintainable code",
                                    "Security-first engineering mindset"
                                ].map((item, i) => (
                                    <motion.li 
                                        key={item} 
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4 text-zinc-300"
                                    >
                                        <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
                                            <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                        </div>
                                        <span className="text-lg font-medium">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-3xl" />
                        <div className="relative backdrop-blur-xl bg-white/3 border border-white/10 p-6 md:p-8 lg:p-10 rounded-[2.5rem] shadow-2xl reveal">
                            <h3 className="text-2xl md:text-3xl font-medium mb-10 text-white flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-blue-500" />
                                Engagement Models
                            </h3>
                            
                            <div className="space-y-4">
                                {[
                                    { t: "Dedicated Engineering Team", d: "Long-term partnership with specialized full-time resources." },
                                    { t: "Fixed-Scope Delivery", d: "Defined objective and timeline for high-stakes projects." },
                                    { t: "Platform Partnership", d: "Deep co-creation focused on category-defining success." },
                                    { t: "White-Label Execution", d: "Invisible engineering power for world-class agencies." }
                                ].map((model) => (
                                    <motion.div 
                                        key={model.t}
                                        whileHover={{ x: 10 }}
                                        className="group cursor-default"
                                    >
                                        <div className="flex items-start justify-between border-b border-white/5 pb-6 group-last:border-none">
                                            <div className="pr-4">
                                                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                                    {model.t}
                                                </h4>
                                                <p className="text-zinc-500 text-sm leading-relaxed max-w-[280px]">
                                                    {model.d}
                                                </p>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-zinc-700 group-hover:text-blue-500 transition-all transform group-hover:translate-x-1" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
