"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const rotatingWords = ["fast UIs", "APIs", "experiences", "things that ship"];

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 2200);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background glowing orb — desktop only */}
            <div
                className="hidden lg:block absolute right-[8%] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none animate-orb-pulse"
                style={{
                    background:
                        "radial-gradient(circle, #8B3FE8 0%, #3B1FD4 40%, transparent 70%)",
                    filter: "blur(80px)",
                    opacity: 0.35,
                }}
            />

            {/* Secondary smaller orb */}
            <div
                className="hidden lg:block absolute right-[15%] top-1/3 w-[200px] h-[200px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, #E03FD8 0%, transparent 70%)",
                    filter: "blur(60px)",
                    opacity: 0.2,
                    animation: "orb-pulse 6s ease-in-out infinite reverse",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
                <div className="max-w-2xl">
                    {/* Pill label */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span
                            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest px-4 py-2 rounded-full mb-6"
                            style={{
                                border: "1px solid rgba(255,255,255,0.07)",
                                color: "#8A8A9A",
                            }}
                        >
                            <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ background: "#22c55e" }}
                            />
                            Available for work
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        className="font-display font-extrabold mb-4 leading-[1.05]"
                        style={{ fontSize: "clamp(48px, 6vw, 80px)", color: "#F2F2ED", letterSpacing: "-0.03em" }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
                    >
                        Hi, I&apos;m Touheed
                    </motion.h1>

                    {/* Rotating word line */}
                    <motion.div
                        className="font-display font-extrabold mb-6 leading-[1.05] flex items-baseline flex-wrap gap-3"
                        style={{ fontSize: "clamp(40px, 5.5vw, 72px)", color: "#F2F2ED", letterSpacing: "-0.03em" }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
                    >
                        <span>I build</span>
                        <span className="relative inline-block" style={{ minWidth: "260px" }}>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={wordIndex}
                                    className="absolute left-0"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 30%, #E03FD8 65%, #FF6B35 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    {rotatingWords[wordIndex]}
                                </motion.span>
                            </AnimatePresence>
                            {/* invisible spacer for the longest word */}
                            <span style={{ visibility: "hidden" }}>things that ship</span>
                        </span>
                    </motion.div>

                    {/* Sub-headline */}
                    <motion.p
                        className="text-xl mb-10 leading-relaxed max-w-lg"
                        style={{ color: "#8A8A9A" }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
                    >
                        Full-stack developer crafting pixel-perfect interfaces and
                        performant backend systems.
                    </motion.p>

                    {/* CTA Row */}
                    <motion.div
                        className="flex flex-wrap items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
                    >
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center font-semibold text-sm rounded-btn transition-all duration-200 hover:opacity-88 hover:-translate-y-px"
                            style={{
                                background:
                                    "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 30%, #E03FD8 65%, #FF6B35 100%)",
                                color: "#F2F2ED",
                                height: "48px",
                                padding: "0 28px",
                            }}
                        >
                            View My Work →
                        </Link>
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center justify-center font-semibold text-sm rounded-btn transition-all duration-200"
                            style={{
                                background: "transparent",
                                color: "#F2F2ED",
                                height: "48px",
                                padding: "0 28px",
                                border: "1px solid rgba(255,255,255,0.07)",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                                    "rgba(139,63,232,0.3)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                                    "rgba(255,255,255,0.07)";
                            }}
                        >
                            Download Resume ↓
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
