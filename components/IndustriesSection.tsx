"use client"

import { motion } from "framer-motion"
import { Building2, Landmark, Truck, Stethoscope, Factory } from "lucide-react"

const industries = [
    { icon: Building2, name: "FinTech" },
    { icon: Landmark, name: "Public Sector" },
    { icon: Truck, name: "Logistics" },
    { icon: Stethoscope, name: "Healthcare" },
    { icon: Factory, name: "Manufacturing" },
]

export function IndustriesSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
                        Solving Complex Challenges Across Every Major Sector
                    </h2>
                    <p className="text-gray-600 text-lg">
                        We adapt proven technology patterns to the specific operational constraints of regulated, data-intensive industries.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {industries.map((ind, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="group cursor-pointer aspect-square bg-slate-50 rounded-3xl border border-gray-100 flex flex-col items-center justify-center gap-4 hover:border-blue-500 hover:shadow-lg hover:bg-white transition-colors"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-slate-700 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                                <ind.icon strokeWidth={1.5} size={32} />
                            </div>
                            <span className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                {ind.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
