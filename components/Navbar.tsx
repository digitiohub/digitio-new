"use client"

import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

export function Navbar() {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // Hide navbar on scroll down, show on scroll up
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious()
        
        if (latest > 50) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }

        if (previous && latest > previous && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-colors duration-300 ${
                isScrolled ? "bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent border-transparent"
            }`}
        >
            <div className="flex items-center gap-2">
                {/* Logo placeholder - using a sleek text or icon */}
                <div className="w-9 h-9 rounded-lg bg-white text-black flex items-center justify-center font-bold text-lg">
                    D
                </div>
                <span className="font-bold text-xl tracking-tight text-white hidden sm:block">DigitioHub</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-white/70">
                <Link href="#" className="hover:text-white transition-colors">Services</Link>
                <Link href="#" className="hover:text-white transition-colors">Industries</Link>
                <Link href="#" className="hover:text-white transition-colors">Portfolio</Link>
                <Link href="#" className="hover:text-white transition-colors">Company</Link>
            </nav>

            <div className="flex items-center gap-4">
                <button className="hidden md:block px-6 py-2.5 rounded-full bg-[#f84f39] text-white text-sm font-semibold hover:bg-[#ff614c] transition-colors shadow-lg shadow-[#f84f39]/20">
                    Let&apos;s Connect
                </button>
                {/* Mobile menu toggle placeholder */}
                <button className="md:hidden text-white p-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                </button>
            </div>
        </motion.header>
    )
}
