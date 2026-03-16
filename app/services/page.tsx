"use client"

import React from "react"
import { motion } from "framer-motion"
import servicesData from "@/data/services.json"
import { ServiceCard, ServiceType } from "@/components/service-card"


// Ensures correct typings
const services: ServiceType[] = servicesData as ServiceType[]

export default function ServicesPage() {
  return (
    <>      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative overflow-hidden h-screen flex flex-col items-center justify-center pt-24 pb-16">
          <div className="container mx-auto px-4 md:px-6 relative z-10 w-full mt-10 md:mt-16">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-flex items-center rounded-full border border-blue-500/30 px-6 py-2 text-sm font-medium mb-10 bg-blue-500/10 text-blue-200 backdrop-blur-md shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]"
              >
                <span className="relative flex h-2.5 w-2.5 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                </span>
                Our Expertise
              </motion.div>
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.05] text-transparent bg-clip-text bg-linear-to-b from-white via-white/90 to-white/40"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              >
                Transforming Ideas into <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 drop-shadow-[0_0_40px_rgba(99,102,241,0.4)]">Digital Excellence</span>
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                We provide comprehensive, high-quality solutions tailored to elevate your business, drive tangible results, and establish your brand&apos;s digital presence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
              </motion.div>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] sm:w-[1200px] sm:h-[600px] bg-blue-600/15 rounded-[100%] blur-[120px] -z-10 pointer-events-none" />
          <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[140px] -z-10 pointer-events-none" />
          <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-[100px] -z-10 pointer-events-none" />
        </section>

        {/* Services Grid Section */}
        <section className="container mx-auto px-4 md:px-6 py-12 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>
        
        {/* Footer Call to Action */}
        <section className="relative py-24 md:py-32 overflow-hidden mt-10">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-blue-900/10 -z-10" />
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white">Ready to innovate?</h2>
            <p className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl mx-auto font-light">
              Let&apos;s collaborate to build something extraordinary. Discover how our digital services can propel your business forward.
            </p>
            <button className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-base font-bold text-black shadow-xl shadow-white/5 transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white">
              Start Your Project
            </button>
          </div>
        </section>
      </main>
    </>
  )
}
