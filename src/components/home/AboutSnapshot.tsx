import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "20+", label: "Projects Shipped" },
    { value: "5", label: "Countries Worked In" },
];

export default function AboutSnapshot() {
    return (
        <section
            className="py-[120px]"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left: text + stats */}
                    <div>
                        <AnimateOnScroll>
                            <h2
                                className="font-display font-bold mb-6"
                                style={{
                                    fontSize: "clamp(32px, 4vw, 52px)",
                                    color: "#F2F2ED",
                                    letterSpacing: "-0.02em",
                                    lineHeight: 1.1,
                                }}
                            >
                                About Me
                            </h2>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={0.08}>
                            <p
                                className="mb-10 leading-relaxed"
                                style={{ fontSize: "18px", color: "#8A8A9A" }}
                            >
                                I&apos;m a full-stack developer with 2+ years of experience building
                                web applications for startups and established companies. I
                                specialise in React, TypeScript, and Node.js — with a strong eye
                                for design and user experience.
                            </p>
                        </AnimateOnScroll>

                        {/* Stats row */}
                        <AnimateOnScroll delay={0.16}>
                            <div className="flex flex-wrap gap-8">
                                {stats.map((stat) => (
                                    <div key={stat.label}>
                                        <div
                                            className="font-display font-bold mb-1"
                                            style={{
                                                fontSize: "52px",
                                                lineHeight: 1.1,
                                                background:
                                                    "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 30%, #E03FD8 65%, #FF6B35 100%)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                backgroundClip: "text",
                                            }}
                                        >
                                            {stat.value}
                                        </div>
                                        <div
                                            className="text-sm font-medium"
                                            style={{ color: "#8A8A9A" }}
                                        >
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* Right: portrait */}
                    <AnimateOnScroll delay={0.24} className="flex justify-center lg:justify-end">
                        <div
                            className="relative rounded-[18px] p-[2px]"
                            style={{
                                background:
                                    "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 30%, #E03FD8 65%, #FF6B35 100%)",
                                maxWidth: "360px",
                                width: "100%",
                            }}
                        >
                            <div
                                className="w-full rounded-[16px] overflow-hidden"
                                style={{ aspectRatio: "4/5", background: "#1C1C22" }}
                            >
                                {/* Photo placeholder grid */}
                                <div className="w-full h-full relative flex items-center justify-center">
                                    <div
                                        className="absolute inset-0 opacity-30"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, #3B1FD4 0%, #E03FD8 100%)",
                                        }}
                                    />
                                    <div
                                        className="absolute inset-0 opacity-10"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                                            backgroundSize: "32px 32px",
                                        }}
                                    />
                                    <div className="relative text-center">
                                        <div
                                            className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center font-display font-bold text-2xl"
                                            style={{ background: "rgba(255,255,255,0.15)", color: "#F2F2ED" }}
                                        >
                                            TN
                                        </div>
                                        <p className="text-sm font-medium" style={{ color: "rgba(242,242,237,0.5)" }}>
                                            Touheed Naveed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}
