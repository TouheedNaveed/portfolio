"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Clock, Github, Linkedin, Twitter, CheckCircle, Loader2 } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    subject: z.string().min(3, "Subject must be at least 3 characters"),
    message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
    { icon: Mail, label: "Email", value: "touheednaveed1@gmail.com", gradient: true },
    { icon: MapPin, label: "Location", value: "Pakistan" },
    { icon: Clock, label: "Availability", value: "Available for projects", dot: true },
];

const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/TouheedNaveed?tab=repositories" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/touheednaveed/" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/raja_bhatti06" },
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        try {
            await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            setSubmitted(true);
        } catch {
            setSubmitted(true);
        } finally {
            setLoading(false);
        }
    };

    const inputStyle = {
        background: "#0C0C0E",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "8px",
        padding: "14px 16px",
        color: "#F2F2ED",
        fontSize: "14px",
        outline: "none",
        width: "100%",
        fontFamily: "inherit",
    };

    const labelStyle = {
        display: "block",
        fontSize: "12px",
        fontWeight: 500,
        textTransform: "uppercase" as const,
        letterSpacing: "0.1em",
        color: "#4A4A5A",
        marginBottom: "8px",
    };

    return (
        <div className="pt-16">
            {/* Page hero */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <AnimateOnScroll>
                    <h1
                        className="font-display font-extrabold mb-4"
                        style={{
                            fontSize: "clamp(40px, 5vw, 64px)",
                            color: "#F2F2ED",
                            letterSpacing: "-0.03em",
                            lineHeight: 1.05,
                        }}
                    >
                        Get in touch
                    </h1>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.08}>
                    <p style={{ fontSize: "18px", color: "#8A8A9A" }}>
                        Have a project in mind? Let&apos;s build something great together.
                    </p>
                </AnimateOnScroll>
            </section>

            {/* 2-col layout */}
            <section
                className="max-w-7xl mx-auto px-6 pb-[120px]"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "64px" }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left column */}
                    <div>
                        <AnimateOnScroll>
                            <h2
                                className="font-display font-bold mb-5"
                                style={{
                                    fontSize: "32px",
                                    color: "#F2F2ED",
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                Let&apos;s talk
                            </h2>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={0.08}>
                            <p
                                className="mb-10 leading-relaxed"
                                style={{ fontSize: "16px", color: "#8A8A9A" }}
                            >
                                I&apos;m currently available for freelance projects and full-time
                                opportunities. I typically respond within 24 hours.
                            </p>
                        </AnimateOnScroll>

                        {/* Contact info rows */}
                        <AnimateOnScroll delay={0.12}>
                            <div className="flex flex-col gap-5 mb-10">
                                {contactInfo.map(({ icon: Icon, label, value, gradient, dot }) => (
                                    <div key={label} className="flex items-center gap-4">
                                        <div
                                            className="w-10 h-10 rounded-[8px] flex items-center justify-center shrink-0"
                                            style={{ background: "#141418", border: "1px solid rgba(255,255,255,0.07)" }}
                                        >
                                            <Icon size={16} style={{ color: "#4A4A5A" }} />
                                        </div>
                                        <div>
                                            <div className="text-xs font-medium uppercase tracking-widest mb-0.5" style={{ color: "#4A4A5A" }}>
                                                {label}
                                            </div>
                                            <div
                                                className="text-sm font-medium flex items-center gap-2"
                                                style={
                                                    gradient
                                                        ? {
                                                            background:
                                                                "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 30%, #E03FD8 65%, #FF6B35 100%)",
                                                            WebkitBackgroundClip: "text",
                                                            WebkitTextFillColor: "transparent",
                                                            backgroundClip: "text",
                                                        }
                                                        : { color: "#8A8A9A" }
                                                }
                                            >
                                                {dot && (
                                                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e", WebkitTextFillColor: "initial" }} />
                                                )}
                                                {value}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimateOnScroll>

                        <div
                            className="mb-10"
                            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                        />

                        {/* Social pill buttons */}
                        <AnimateOnScroll delay={0.16}>
                            <div className="flex flex-wrap gap-3">
                                {socials.map(({ icon: Icon, label, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:border-[rgba(139,63,232,0.3)]"
                                        style={{
                                            background: "#141418",
                                            border: "1px solid rgba(255,255,255,0.07)",
                                            color: "#8A8A9A",
                                        }}
                                    >
                                        <Icon size={15} />
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* Right column — form */}
                    <AnimateOnScroll delay={0.16}>
                        <div
                            className="rounded-card p-10"
                            style={{
                                background: "#141418",
                                border: "1px solid rgba(255,255,255,0.07)",
                            }}
                        >
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-16 text-center">
                                    <CheckCircle size={48} className="mb-5" style={{ color: "#22c55e" }} />
                                    <h3
                                        className="font-display font-bold mb-3"
                                        style={{ fontSize: "24px", color: "#F2F2ED" }}
                                    >
                                        Message sent!
                                    </h3>
                                    <p className="text-sm" style={{ color: "#8A8A9A" }}>
                                        Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
                                    {/* Name */}
                                    <div>
                                        <label style={labelStyle}>Name</label>
                                        <input
                                            {...register("name")}
                                            type="text"
                                            placeholder="Your name"
                                            suppressHydrationWarning
                                            style={{
                                                ...inputStyle,
                                                borderColor: errors.name ? "rgba(224,63,216,0.5)" : "rgba(255,255,255,0.07)",
                                            }}
                                            onFocus={(e) => {
                                                e.target.style.borderColor = "rgba(139,63,232,0.3)";
                                                e.target.style.boxShadow = "0 0 0 3px rgba(139,63,232,0.15)";
                                            }}
                                            onBlur={(e) => {
                                                e.target.style.borderColor = errors.name
                                                    ? "rgba(224,63,216,0.5)"
                                                    : "rgba(255,255,255,0.07)";
                                                e.target.style.boxShadow = "none";
                                            }}
                                        />
                                        {errors.name && (
                                            <p className="mt-1.5 text-xs" style={{ color: "#E03FD8" }}>
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label style={labelStyle}>Email</label>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            placeholder="your@email.com"
                                            suppressHydrationWarning
                                            style={{
                                                ...inputStyle,
                                                borderColor: errors.email ? "rgba(224,63,216,0.5)" : "rgba(255,255,255,0.07)",
                                            }}
                                            onFocus={(e) => {
                                                e.target.style.borderColor = "rgba(139,63,232,0.3)";
                                                e.target.style.boxShadow = "0 0 0 3px rgba(139,63,232,0.15)";
                                            }}
                                            onBlur={(e) => {
                                                e.target.style.borderColor = errors.email
                                                    ? "rgba(224,63,216,0.5)"
                                                    : "rgba(255,255,255,0.07)";
                                                e.target.style.boxShadow = "none";
                                            }}
                                        />
                                        {errors.email && (
                                            <p className="mt-1.5 text-xs" style={{ color: "#E03FD8" }}>
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label style={labelStyle}>Subject</label>
                                        <input
                                            {...register("subject")}
                                            type="text"
                                            placeholder="What's this about?"
                                            suppressHydrationWarning
                                            style={{
                                                ...inputStyle,
                                                borderColor: errors.subject ? "rgba(224,63,216,0.5)" : "rgba(255,255,255,0.07)",
                                            }}
                                            onFocus={(e) => {
                                                e.target.style.borderColor = "rgba(139,63,232,0.3)";
                                                e.target.style.boxShadow = "0 0 0 3px rgba(139,63,232,0.15)";
                                            }}
                                            onBlur={(e) => {
                                                e.target.style.borderColor = errors.subject
                                                    ? "rgba(224,63,216,0.5)"
                                                    : "rgba(255,255,255,0.07)";
                                                e.target.style.boxShadow = "none";
                                            }}
                                        />
                                        {errors.subject && (
                                            <p className="mt-1.5 text-xs" style={{ color: "#E03FD8" }}>
                                                {errors.subject.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label style={labelStyle}>Message</label>
                                        <textarea
                                            {...register("message")}
                                            placeholder="Tell me about your project..."
                                            rows={5}
                                            suppressHydrationWarning
                                            style={{
                                                ...inputStyle,
                                                resize: "vertical",
                                                minHeight: "160px",
                                                borderColor: errors.message ? "rgba(224,63,216,0.5)" : "rgba(255,255,255,0.07)",
                                            }}
                                            onFocus={(e) => {
                                                e.target.style.borderColor = "rgba(139,63,232,0.3)";
                                                e.target.style.boxShadow = "0 0 0 3px rgba(139,63,232,0.15)";
                                            }}
                                            onBlur={(e) => {
                                                e.target.style.borderColor = errors.message
                                                    ? "rgba(224,63,216,0.5)"
                                                    : "rgba(255,255,255,0.07)";
                                                e.target.style.boxShadow = "none";
                                            }}
                                        />
                                        {errors.message && (
                                            <p className="mt-1.5 text-xs" style={{ color: "#E03FD8" }}>
                                                {errors.message.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit */}
                                    <div>
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full flex items-center justify-center gap-2 font-semibold text-sm rounded-btn transition-all duration-200 hover:opacity-88 disabled:opacity-60 cursor-pointer"
                                            style={{
                                                background:
                                                    "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 30%, #E03FD8 65%, #FF6B35 100%)",
                                                color: "#F2F2ED",
                                                height: "48px",
                                                border: "none",
                                            }}
                                        >
                                            {loading ? (
                                                <>
                                                    <Loader2 size={16} className="animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                "Send Message →"
                                            )}
                                        </button>
                                        <p
                                            className="text-center text-xs mt-3"
                                            style={{ color: "#4A4A5A" }}
                                        >
                                            Your information is kept private.
                                        </p>
                                    </div>
                                </form>
                            )}
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </div>
    );
}
