"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetDescription,
} from "@/components/ui/sheet";

export function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Hide navbar on scroll down, show on scroll up
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();

        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        if (previous && latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const navLinks = [
        {
            name: "Products",
            href: "/products",
            desc: "Explore our product suite",
        },
        {
            name: "AI Tech Solutions",
            href: "/ai-solutions",
            desc: "AI-first business solutions",
        },
        { name: "About Us", href: "/about", desc: "Who we are" },
        {
            name: "Services",
            href: "/services",
            desc: "Bespoke digital engineering",
        },
        {
            name: "Industry",
            href: "/#industries",
            desc: "Sectors we specialize in",
        },
        { name: "Portfolio", href: "/portfolio", desc: "Our latest work" },
        { name: "Contact", href: "/contact", desc: "Start a conversation" },
    ];

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-colors duration-300 ${
                isScrolled
                    ? "bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/10"
                    : "bg-transparent border-transparent"
            }`}
        >
            <div className="flex items-center gap-2">
                <Link href="/" className="inline-flex items-center">
                    <Image
                        src="/logos/logo_white.png"
                        alt="DigitioHub Logo"
                        width={150}
                        height={42}
                        className="object-contain"
                    />
                </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-white/70">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="hover:text-white transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            <div className="flex items-center gap-4">
                <Link
                    href="/contact"
                    className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-[#f84f39] text-white text-sm font-semibold hover:bg-[#ff614c] transition-colors shadow-lg shadow-[#f84f39]/20"
                >
                    Let&apos;s Connect
                </Link>

                <Sheet>
                    <SheetTrigger asChild>
                        <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
                            <Menu className="w-5 h-5" />
                        </button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="bg-[#0a0a0a] border-white/10 text-white w-full sm:max-w-md p-0 flex flex-col overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(248,79,57,0.08),transparent_50%)] pointer-events-none" />

                        <SheetHeader className="p-8 pb-4 text-left border-b border-white/5">
                            <SheetTitle className="text-white">
                                <Image
                                    src="/logos/logo_white.png"
                                    alt="DigitioHub Logo"
                                    width={120}
                                    height={32}
                                    className="object-contain"
                                />
                            </SheetTitle>
                            <SheetDescription className="text-white/40 text-xs mt-2 font-medium tracking-wide uppercase">
                                Engineering the Digital Future
                            </SheetDescription>
                        </SheetHeader>

                        <div className="flex-1 overflow-y-auto px-6 py-8">
                            <nav className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <SheetClose key={link.name} asChild>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
                                        >
                                            <div className="flex flex-col">
                                                <span className="text-xl font-bold tracking-tight text-white group-hover:translate-x-1 transition-transform">
                                                    {link.name}
                                                </span>
                                                <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors">
                                                    {link.desc}
                                                </span>
                                            </div>
                                            <ArrowRight className="w-5 h-5 ml-auto text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                                        </Link>
                                    </SheetClose>
                                ))}
                            </nav>

                            <div className="mt-12 px-2">
                                <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mb-6">
                                    Stay Connected
                                </p>
                                <div className="flex gap-4">
                                    {[Instagram, Linkedin, Twitter].map(
                                        (Social, i) => (
                                            <Link
                                                key={i}
                                                href="#"
                                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                                            >
                                                <Social className="w-5 h-5" />
                                            </Link>
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="p-8 pt-4 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a] to-transparent">
                            <SheetClose asChild>
                                <Link
                                    href="/contact"
                                    className="group w-full relative h-14 rounded-2xl bg-[#f84f39] text-white font-bold overflow-hidden shadow-2xl shadow-[#f84f39]/20 transition-transform active:scale-95"
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <span className="relative flex items-center justify-center gap-2">
                                        Let&apos;s Connect
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            </SheetClose>
                            <p className="text-center text-[10px] text-white/20 mt-6 font-medium">
                                &copy; 2026 DIGITIOHUB. ALL RIGHTS RESERVED.
                            </p>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </motion.header>
    );
}
