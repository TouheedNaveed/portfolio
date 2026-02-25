"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

const navLinks = [
    { href: "/projects", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                style={{
                    background: scrolled
                        ? "rgba(12,12,14,0.95)"
                        : "rgba(12,12,14,0.85)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    borderBottom: scrolled
                        ? "1px solid rgba(255,255,255,0.07)"
                        : "1px solid transparent",
                }}
            >
                <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-[#F2F2ED] font-sans font-semibold text-base tracking-tight hover:opacity-80 transition-opacity"
                    >
                        Touheed Naveed
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium transition-colors duration-200"
                                style={{
                                    color:
                                        pathname === link.href ||
                                            pathname?.startsWith(link.href + "/")
                                            ? "#F2F2ED"
                                            : "#8A8A9A",
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="/resume.pdf"
                            download
                            className="text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200 hover:bg-white/5"
                            style={{
                                border: "1px solid rgba(139,63,232,0.3)",
                                background:
                                    "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 30%, #E03FD8 65%, #FF6B35 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden p-2 text-[#8A8A9A] hover:text-[#F2F2ED] transition-colors"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={20} />
                    </button>
                </nav>
            </header>

            {/* Mobile full-screen menu */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
                    style={{ background: "rgba(12,12,14,0.98)", backdropFilter: "blur(20px)" }}
                >
                    <button
                        className="absolute top-5 right-6 p-2 text-[#8A8A9A] hover:text-[#F2F2ED] transition-colors"
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>

                    <nav className="flex flex-col items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="font-display font-bold text-3xl transition-colors duration-200"
                                style={{
                                    color: pathname === link.href ? "#F2F2ED" : "#8A8A9A",
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="/resume.pdf"
                            download
                            className="mt-4 text-lg font-semibold px-8 py-3 rounded-full"
                            style={{
                                background:
                                    "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 30%, #E03FD8 65%, #FF6B35 100%)",
                                color: "#F2F2ED",
                            }}
                        >
                            Resume
                        </a>
                    </nav>
                </div>
            )}
        </>
    );
}
