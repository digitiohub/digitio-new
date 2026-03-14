"use client"

import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

export function Navbar() {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    // Hide navbar on scroll down, show on scroll up
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious()
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
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100"
        >
            <div className="flex items-center gap-2">
                {/* Placeholder Logo */}
                <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center">D</div>
                <span className="font-bold text-xl tracking-tight">DigitioHub</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
                <Link href="#" className="hover:text-blue-600 transition-colors">Services</Link>
                <Link href="#" className="hover:text-blue-600 transition-colors">Industries</Link>
                <Link href="#" className="hover:text-blue-600 transition-colors">Portfolio</Link>
                <Link href="#" className="hover:text-blue-600 transition-colors">Company</Link>
            </nav>

            <div className="flex items-center gap-4">
                <button className="hidden md:block px-6 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">
                    Contact Us
                </button>
            </div>
        </motion.header>
    )
}
