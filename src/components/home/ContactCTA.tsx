import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

export default function ContactCTA() {
    return (
        <section
            className="py-[120px] text-center relative overflow-hidden"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
            {/* Gradient overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,31,212,0.12) 0%, rgba(224,63,216,0.06) 50%, transparent 100%)",
                }}
            />

            <div className="relative z-10 max-w-2xl mx-auto px-6">
                <AnimateOnScroll>
                    <h2
                        className="font-display font-bold mb-5"
                        style={{
                            fontSize: "clamp(32px, 4vw, 52px)",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.1,
                            background:
                                "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 30%, #E03FD8 65%, #FF6B35 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Let&apos;s work together
                    </h2>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.08}>
                    <p
                        className="mb-10 leading-relaxed"
                        style={{ fontSize: "18px", color: "#8A8A9A" }}
                    >
                        Have a project in mind or just want to chat? I&apos;m always open to
                        discussing new opportunities.
                    </p>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.16}>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center font-semibold text-sm rounded-btn mb-12 transition-all hover:opacity-88 hover:-translate-y-px"
                        style={{
                            background:
                                "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 30%, #E03FD8 65%, #FF6B35 100%)",
                            color: "#F2F2ED",
                            height: "56px",
                            padding: "0 40px",
                        }}
                    >
                        Get In Touch →
                    </Link>
                </AnimateOnScroll>

                {/* Social icons */}
                <AnimateOnScroll delay={0.24}>
                    <div className="flex items-center justify-center gap-8">
                        {socials.map(({ icon: Icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="transition-colors duration-200 hover:text-[#F2F2ED]"
                                style={{ color: "#4A4A5A" }}
                            >
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
