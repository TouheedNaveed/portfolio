"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

type Category = "All" | "Frontend" | "Full-Stack" | "Mobile App";
const filters: Category[] = ["All", "Frontend", "Full-Stack", "Mobile App"];

export default function ProjectsPage() {
    const [active, setActive] = useState<Category>("All");

    const filtered =
        active === "All"
            ? projects
            : projects.filter((p) => p.category === active);

    return (
        <div className="pt-16">
            {/* Page header */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <AnimateOnScroll>
                    <h1
                        className="font-display font-extrabold mb-4"
                        style={{
                            fontSize: "clamp(48px, 6vw, 80px)",
                            color: "#F2F2ED",
                            letterSpacing: "-0.03em",
                            lineHeight: 1.05,
                        }}
                    >
                        Work
                    </h1>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.08}>
                    <p style={{ fontSize: "18px", color: "#8A8A9A" }}>
                        {projects.length} projects across frontend, full-stack, and open
                        source.
                    </p>
                </AnimateOnScroll>
            </section>

            {/* Filter pills */}
            <section className="max-w-7xl mx-auto px-6 mb-12">
                <AnimateOnScroll>
                    <div className="flex flex-wrap gap-3">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActive(f)}
                                className="text-xs font-medium px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer"
                                style={
                                    active === f
                                        ? {
                                            background:
                                                "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 30%, #E03FD8 65%, #FF6B35 100%)",
                                            color: "#F2F2ED",
                                            border: "1px solid transparent",
                                            letterSpacing: "0.05em",
                                        }
                                        : {
                                            background: "#1C1C22",
                                            color: "#8A8A9A",
                                            border: "1px solid rgba(255,255,255,0.07)",
                                            letterSpacing: "0.05em",
                                        }
                                }
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </AnimateOnScroll>
            </section>

            {/* Projects grid */}
            <section
                className="max-w-7xl mx-auto px-6 pb-[120px]"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "48px" }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project, i) => (
                        <AnimateOnScroll key={project.slug} delay={0.06 * (i % 3)}>
                            <ProjectCard project={project} />
                        </AnimateOnScroll>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-24">
                        <p style={{ color: "#4A4A5A" }}>No projects in this category yet.</p>
                    </div>
                )}
            </section>
        </div>
    );
}
