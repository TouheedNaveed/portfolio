import type { Metadata } from "next";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
    title: "About — Touheed Naveed",
    description:
        "Full-stack developer with 2+ years of experience. Previously at Vvork Cloud Technologies, BezoNet, Huawei Technologies & Co., AGOC",
};

const experience = [
    {
        period: "2025–Present",
        company: "AGOC",
        role: "Web-Developer",
        bullets: [
            "Build responsive, scalable web applications using React.js, Tailwind CSS, JavaScript, and Node.js, creating reusable components and consistent UI systems.",
            "Integrate APIs, manage state and dynamic data, and optimize performance through best practices like code splitting and lazy loading.",
            "Work in Agile teams using Git workflows, ensuring cross-browser compatibility, accessibility, and high-quality user experiences.",
        ],
    },
    {
        period: "2024–2024",
        company: "BezoNet",
        role: "Front End Developer",
        bullets: [
            "Development of a highly interactive and responsive Landing page using HTML, CSS, JavaScript and Tailwind CSS.",
            "Development of a different projects using React.js, JavaScript and Tailwind CSS.",
        ],
    },
    {
        period: "2023–2024",
        company: "Huawei Technologies & Co.",
        role: "Implementation Manager Internship",
        bullets: [
            "Successful project delivery, team coordination, quality assurance and risk management.",
            "Ensured client satisfaction with documentation and reporting.",
        ],
    },
    {
        period: "2021–2021",
        company: "Vvork Cloud Technologies",
        role: "Front-End Web Developer",
        bullets: [
            "Build responsive and appealing web pages using HTML, CSS and JavaScript",
        ],
    },
];

const skills = [
    { name: "TypeScript", pct: 95 },
    { name: "React", pct: 90 },
    { name: "Next.js", pct: 88 },
    { name: "Node.js", pct: 85 },
    { name: "PostgreSQL", pct: 80 },
    { name: "Tailwind CSS", pct: 92 },
    { name: "Docker", pct: 75 },
    { name: "AWS", pct: 70 },
    { name: "GraphQL", pct: 82 },
    { name: "Figma", pct: 78 },
    { name: "Python", pct: 72 },
    { name: "Prisma", pct: 80 },
];

export default function AboutPage() {
    return (
        <div className="pt-16">
            {/* Page Hero */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <AnimateOnScroll>
                    <h1
                        className="font-display font-extrabold mb-6"
                        style={{
                            fontSize: "clamp(48px, 6vw, 80px)",
                            color: "#F2F2ED",
                            letterSpacing: "-0.03em",
                            lineHeight: 1.05,
                        }}
                    >
                        About
                    </h1>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.08}>
                    <p
                        className="max-w-xl leading-relaxed"
                        style={{ fontSize: "18px", color: "#8A8A9A" }}
                    >
                        Full-stack developer based in Pakistan, passionate about
                        building products that scale and delight.
                    </p>
                </AnimateOnScroll>
            </section>

            {/* Bio */}
            <section
                className="py-[80px]"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <AnimateOnScroll>
                                <p
                                    className="mb-6 leading-relaxed"
                                    style={{ fontSize: "18px", color: "#8A8A9A" }}
                                >
                                    I&apos;m a full-stack developer with 2+ years of experience
                                    building web applications for startups and established companies.
                                    I specialise in React, TypeScript, and Node.js, with a strong
                                    eye for design and user experience.
                                </p>
                            </AnimateOnScroll>
                            <AnimateOnScroll delay={0.08}>
                                <p
                                    className="mb-6 leading-relaxed"
                                    style={{ fontSize: "18px", color: "#8A8A9A" }}
                                >
                                    When I&apos;m not coding, you&apos;ll find me contributing to open
                                    source, writing technical articles, or exploring the local coffee
                                    scene.
                                </p>
                            </AnimateOnScroll>
                            <AnimateOnScroll delay={0.16}>
                                <p
                                    className="leading-relaxed"
                                    style={{ fontSize: "18px", color: "#8A8A9A" }}
                                >
                                    I believe great software comes from the intersection of
                                    engineering rigour and thoughtful design — and I bring both to
                                    every project I work on.
                                </p>
                            </AnimateOnScroll>
                        </div>

                        {/* Portrait */}
                        <AnimateOnScroll delay={0.24} className="flex justify-center lg:justify-end">
                            <div
                                className="relative rounded-[18px] p-[2px]"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 30%, #E03FD8 65%, #FF6B35 100%)",
                                    maxWidth: "400px",
                                    width: "100%",
                                }}
                            >
                                <div
                                    className="w-full rounded-[16px] overflow-hidden flex items-center justify-center"
                                    style={{ aspectRatio: "4/5", background: "#1C1C22" }}
                                >
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <div
                                            className="absolute inset-0 opacity-25"
                                            style={{
                                                background: "linear-gradient(135deg, #3B1FD4, #E03FD8)",
                                            }}
                                        />
                                        <div className="relative text-center">
                                            <div
                                                className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center font-display font-bold text-3xl"
                                                style={{
                                                    background: "rgba(255,255,255,0.12)",
                                                    color: "#F2F2ED",
                                                }}
                                            >
                                                TN
                                            </div>
                                            <p
                                                className="text-sm font-medium"
                                                style={{ color: "rgba(242,242,237,0.5)" }}
                                            >
                                                Touheed Naveed · Pakistan
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section
                className="py-[80px]"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <AnimateOnScroll>
                        <h2
                            className="font-display font-bold mb-16"
                            style={{
                                fontSize: "clamp(28px, 3vw, 40px)",
                                color: "#F2F2ED",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Experience
                        </h2>
                    </AnimateOnScroll>

                    <div className="relative">
                        {/* Vertical line */}
                        <div
                            className="absolute left-[80px] top-0 bottom-0 w-px hidden sm:block"
                            style={{ background: "rgba(255,255,255,0.07)" }}
                        />

                        <div className="flex flex-col gap-12">
                            {experience.map((exp, i) => (
                                <AnimateOnScroll key={exp.company} delay={0.08 * i}>
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        {/* Period */}
                                        <div
                                            className="sm:w-[120px] shrink-0 text-xs font-medium uppercase tracking-wider pt-1"
                                            style={{ color: "#4A4A5A", letterSpacing: "0.1em" }}
                                        >
                                            {exp.period}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h4
                                                className="font-sans font-semibold mb-1"
                                                style={{ fontSize: "20px", color: "#F2F2ED" }}
                                            >
                                                {exp.company}
                                            </h4>
                                            <p
                                                className="mb-4 font-medium"
                                                style={{
                                                    fontSize: "16px",
                                                    background:
                                                        "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 30%, #E03FD8 65%, #FF6B35 100%)",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent",
                                                    backgroundClip: "text",
                                                }}
                                            >
                                                {exp.role}
                                            </p>
                                            <ul className="flex flex-col gap-2">
                                                {exp.bullets.map((bullet) => (
                                                    <li
                                                        key={bullet}
                                                        className="text-sm leading-relaxed flex gap-3"
                                                        style={{ color: "#8A8A9A" }}
                                                    >
                                                        <span style={{ color: "#4A4A5A" }}>—</span>
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Grid */}
            <section
                className="py-[80px]"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <AnimateOnScroll>
                        <h2
                            className="font-display font-bold mb-12"
                            style={{
                                fontSize: "clamp(28px, 3vw, 40px)",
                                color: "#F2F2ED",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Skills
                        </h2>
                    </AnimateOnScroll>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {skills.map((skill, i) => (
                            <AnimateOnScroll key={skill.name} delay={0.04 * i}>
                                <div
                                    className="p-6 rounded-[12px]"
                                    style={{
                                        background: "#141418",
                                        border: "1px solid rgba(255,255,255,0.07)",
                                    }}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span
                                            className="font-sans font-semibold text-sm"
                                            style={{ color: "#F2F2ED" }}
                                        >
                                            {skill.name}
                                        </span>
                                        <span
                                            className="text-xs font-medium"
                                            style={{ color: "#4A4A5A" }}
                                        >
                                            {skill.pct}%
                                        </span>
                                    </div>
                                    {/* Bar track */}
                                    <div
                                        className="h-1 rounded-full overflow-hidden"
                                        style={{ background: "#1C1C22" }}
                                    >
                                        <div
                                            className="h-full rounded-full"
                                            style={{
                                                width: `${skill.pct}%`,
                                                background:
                                                    "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 30%, #E03FD8 65%, #FF6B35 100%)",
                                            }}
                                        />
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section
                className="py-[80px]"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <AnimateOnScroll>
                        <h2
                            className="font-display font-bold mb-10"
                            style={{
                                fontSize: "clamp(28px, 3vw, 40px)",
                                color: "#F2F2ED",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Education
                        </h2>
                    </AnimateOnScroll>

                    <AnimateOnScroll delay={0.08}>
                        <div
                            className="p-8 rounded-card"
                            style={{
                                background: "#141418",
                                border: "1px solid rgba(255,255,255,0.07)",
                            }}
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <div>
                                    <h3
                                        className="font-display font-bold mb-1"
                                        style={{ fontSize: "24px", color: "#F2F2ED" }}
                                    >
                                        University of Central Punjab
                                    </h3>
                                    <p style={{ fontSize: "16px", color: "#8A8A9A" }}>
                                        B.S. Computer Science
                                    </p>
                                </div>
                                <span
                                    className="text-xs font-medium uppercase tracking-widest"
                                    style={{ color: "#4A4A5A" }}
                                >
                                    2019–2023
                                </span>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </div>
    );
}
