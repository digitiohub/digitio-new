"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export interface ServiceType {
  id: string
  title: string
  description: string
  icon: string
  image: string
  features: string[]
}

export function ServiceCard({ service, index }: { service: ServiceType; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-[450px] sm:h-[480px] w-full"
    >
      <div className="h-full w-full relative flex flex-col rounded-[2rem] border border-white/10 bg-[#0a0a0a] overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-white/20 hover:-translate-y-2">
        
        {/* Background Image */}
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
          quality={90}
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#0a0a0a]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Dynamic Glow on Hover */}
        <div className="absolute inset-0 bg-radial-[at_50%_120%] from-blue-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full p-8 md:p-10">
          
          {/* Bottom Content Area */}
          <div className="mt-auto transition-transform duration-500 translate-y-4 group-hover:translate-y-0 w-full">
            <div className="min-h-[64px] sm:min-h-[72px] flex items-start mb-2 sm:mb-3">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-blue-50 transition-colors">
                {service.title}
              </h3>
            </div>
            
            <div className="h-[92px] sm:h-[104px]">
              <p className="text-white/60 leading-relaxed font-light text-sm md:text-base line-clamp-4">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
