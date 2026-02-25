import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return { title: "Project Not Found" };
    return {
        title: `${project.title} — Touheed Naveed`,
        description: project.description,
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();

    const related = projects
        .filter((p) => p.slug !== project.slug && p.category === project.category)
        .slice(0, 2);

    return (
        <div className="pt-16">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Back link */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm mb-10 transition-colors hover:text-[#F2F2ED]"
                    style={{ color: "#4A4A5A" }}
                >
                    <ArrowLeft size={16} />
                    All Projects
                </Link>

                <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-16">
                    {/* Main content column */}
                    <div>
                        {/* Cover image */}
                        <AnimateOnScroll>
                            <div
                                className="w-full rounded-card overflow-hidden mb-10 relative"
                                style={{ aspectRatio: "21/9" }}
                            >
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: `linear-gradient(135deg, ${project.category === "Full-Stack"
                                            ? "#2a1590, #8B3FE8"
                                            : project.category === "Frontend"
                                                ? "#8B3FE8, #E03FD8"
                                                : "#E03FD8, #FF6B35"
                                            })`,
                                        opacity: 0.7,
                                    }}
                                />
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                                        backgroundSize: "50px 50px",
                                    }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span
                                        className="font-display font-bold text-white opacity-30 text-center px-4"
                                        style={{ fontSize: "56px" }}
                                    >
                                        {project.title}
                                    </span>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        {/* Title + tags */}
                        <AnimateOnScroll delay={0.08}>
                            <div className="mb-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium px-3 py-1 rounded-full"
                                            style={{
                                                background: "#1C1C22",
                                                color: "#8A8A9A",
                                                letterSpacing: "0.05em",
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h1
                                    className="font-display font-extrabold"
                                    style={{
                                        fontSize: "clamp(32px, 4vw, 52px)",
                                        color: "#F2F2ED",
                                        letterSpacing: "-0.02em",
                                        lineHeight: 1.1,
                                    }}
                                >
                                    {project.title}
                                </h1>
                            </div>
                        </AnimateOnScroll>

                        {/* Metadata strip */}
                        <AnimateOnScroll delay={0.16}>
                            <div
                                className="grid grid-cols-3 gap-6 mb-16 p-6 rounded-[12px]"
                                style={{
                                    background: "#141418",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                }}
                            >
                                {[
                                    { label: "Timeline", value: project.caseStudy.timeline },
                                    { label: "Role", value: project.caseStudy.role },
                                    { label: "Stack", value: project.caseStudy.stack },
                                ].map((meta, i) => (
                                    <div
                                        key={meta.label}
                                        className="text-center"
                                        style={{
                                            borderRight:
                                                i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                                        }}
                                    >
                                        <div
                                            className="text-xs font-medium uppercase tracking-widest mb-1"
                                            style={{ color: "#4A4A5A" }}
                                        >
                                            {meta.label}
                                        </div>
                                        <div
                                            className="text-sm font-semibold"
                                            style={{ color: "#F2F2ED" }}
                                        >
                                            {meta.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimateOnScroll>

                        {/* Case study body */}
                        <div className="max-w-[720px]">
                            <AnimateOnScroll>
                                <p
                                    className="mb-12 leading-relaxed"
                                    style={{ fontSize: "18px", color: "#8A8A9A" }}
                                >
                                    {project.caseStudy.overview}
                                </p>
                            </AnimateOnScroll>

                            <AnimateOnScroll delay={0.08}>
                                <h2
                                    className="font-display font-bold mb-4"
                                    style={{
                                        fontSize: "32px",
                                        color: "#F2F2ED",
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    The Problem
                                </h2>
                                <div className="mb-12">
                                    {project.caseStudy.problem.split("\n\n").map((para, i) => (
                                        <p
                                            key={i}
                                            className="mb-4 leading-relaxed"
                                            style={{ fontSize: "16px", color: "#8A8A9A" }}
                                        >
                                            {para}
                                        </p>
                                    ))}
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll delay={0.08}>
                                <h2
                                    className="font-display font-bold mb-4"
                                    style={{
                                        fontSize: "32px",
                                        color: "#F2F2ED",
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    The Solution
                                </h2>
                                <p
                                    className="mb-12 leading-relaxed"
                                    style={{ fontSize: "16px", color: "#8A8A9A" }}
                                    dangerouslySetInnerHTML={{
                                        __html: project.caseStudy.solution.replace(
                                            /`([^`]+)`/g,
                                            '<code style="background:#1C1C22;color:#E03FD8;padding:2px 8px;border-radius:4px;font-family:monospace;font-size:14px;">$1</code>'
                                        ),
                                    }}
                                />
                            </AnimateOnScroll>

                            {/* Key Features */}
                            <AnimateOnScroll>
                                <h2
                                    className="font-display font-bold mb-8"
                                    style={{
                                        fontSize: "32px",
                                        color: "#F2F2ED",
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    Key Features
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                                    {project.caseStudy.features.map((feature, i) => (
                                        <div
                                            key={feature.title}
                                            className="p-6 rounded-[12px]"
                                            style={{
                                                background: "#141418",
                                                border: "1px solid rgba(255,255,255,0.07)",
                                            }}
                                        >
                                            <div
                                                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-4"
                                                style={{
                                                    background:
                                                        "linear-gradient(135deg, #3B1FD4, #E03FD8)",
                                                    color: "#F2F2ED",
                                                }}
                                            >
                                                {i + 1}
                                            </div>
                                            <h4
                                                className="font-sans font-semibold mb-2"
                                                style={{ fontSize: "16px", color: "#F2F2ED" }}
                                            >
                                                {feature.title}
                                            </h4>
                                            <p
                                                className="text-sm leading-relaxed"
                                                style={{ color: "#8A8A9A" }}
                                            >
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </AnimateOnScroll>

                            {/* Mockup */}
                            <AnimateOnScroll delay={0.08}>
                                <div className="mb-16">
                                    <div
                                        className="w-full rounded-card-inner overflow-hidden"
                                        style={{
                                            aspectRatio: "16/9",
                                            background: "#141418",
                                            border: "1px solid rgba(255,255,255,0.07)",
                                        }}
                                    >
                                        <div
                                            className="w-full h-full flex items-center justify-center"
                                            style={{
                                                background:
                                                    "linear-gradient(135deg, #1C1C22 0%, #141418 100%)",
                                            }}
                                        >
                                            <span
                                                className="font-sans text-sm"
                                                style={{ color: "#4A4A5A" }}
                                            >
                                                Project Screenshot
                                            </span>
                                        </div>
                                    </div>
                                    <p
                                        className="mt-3 text-xs text-center"
                                        style={{ color: "#4A4A5A" }}
                                    >
                                        {project.title} — Application UI
                                    </p>
                                </div>
                            </AnimateOnScroll>

                            {/* Outcomes */}
                            <AnimateOnScroll>
                                <h2
                                    className="font-display font-bold mb-8"
                                    style={{
                                        fontSize: "32px",
                                        color: "#F2F2ED",
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    Outcome
                                </h2>
                                <div className="grid grid-cols-3 gap-8 mb-16">
                                    {project.caseStudy.outcomes.map((outcome) => (
                                        <div key={outcome.label} className="text-center">
                                            <div
                                                className="font-display font-extrabold mb-2"
                                                style={{
                                                    fontSize: "clamp(36px, 5vw, 52px)",
                                                    background:
                                                        "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 30%, #E03FD8 65%, #FF6B35 100%)",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent",
                                                    backgroundClip: "text",
                                                    lineHeight: 1.1,
                                                }}
                                            >
                                                {outcome.value}
                                            </div>
                                            <div
                                                className="text-sm font-medium"
                                                style={{ color: "#8A8A9A" }}
                                            >
                                                {outcome.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="hidden lg:block">
                        <div className="sticky top-24">
                            <div
                                className="rounded-[12px] p-6"
                                style={{
                                    background: "#141418",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                }}
                            >
                                <p
                                    className="text-xs font-medium uppercase tracking-widest mb-4"
                                    style={{ color: "#4A4A5A" }}
                                >
                                    Project Links
                                </p>
                                <div className="flex flex-col gap-3 mb-6">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between text-sm font-medium px-4 py-3 rounded-[8px] transition-all hover:border-[rgba(139,63,232,0.3)]"
                                            style={{
                                                color: "#F2F2ED",
                                                border: "1px solid rgba(255,255,255,0.07)",
                                            }}
                                        >
                                            Live Site <ExternalLink size={14} />
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between text-sm font-medium px-4 py-3 rounded-[8px] transition-all hover:border-[rgba(139,63,232,0.3)]"
                                            style={{
                                                color: "#F2F2ED",
                                                border: "1px solid rgba(255,255,255,0.07)",
                                            }}
                                        >
                                            GitHub <Github size={14} />
                                        </a>
                                    )}
                                </div>

                                {related.length > 0 && (
                                    <>
                                        <div
                                            className="mb-4"
                                            style={{
                                                borderTop: "1px solid rgba(255,255,255,0.07)",
                                                paddingTop: "24px",
                                            }}
                                        >
                                            <p
                                                className="text-xs font-medium uppercase tracking-widest mb-4"
                                                style={{ color: "#4A4A5A" }}
                                            >
                                                Related Projects
                                            </p>
                                            <div className="flex flex-col gap-3">
                                                {related.map((r) => (
                                                    <Link
                                                        key={r.slug}
                                                        href={`/projects/${r.slug}`}
                                                        className="group"
                                                    >
                                                        <div
                                                            className="text-sm font-semibold mb-0.5 transition-colors group-hover:text-[#F2F2ED]"
                                                            style={{ color: "#8A8A9A" }}
                                                        >
                                                            {r.title}
                                                        </div>
                                                        <div
                                                            className="text-xs"
                                                            style={{ color: "#4A4A5A" }}
                                                        >
                                                            {r.category}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
