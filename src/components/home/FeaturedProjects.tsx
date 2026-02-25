import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function FeaturedProjects() {
    const featured = projects[0]; // SaaS Dashboard — our featured project
    const secondary = [projects[1], projects[2]]; // E-Commerce API, Design System

    return (
        <section className="max-w-7xl mx-auto px-6 py-[120px]">
            {/* Section header */}
            <AnimateOnScroll>
                <div className="flex items-end justify-between mb-12">
                    <h2
                        className="font-display font-bold"
                        style={{
                            fontSize: "clamp(32px, 4vw, 52px)",
                            color: "#F2F2ED",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.1,
                        }}
                    >
                        Selected Work
                    </h2>
                    <Link
                        href="/projects"
                        className="text-sm font-medium transition-colors hover:text-[#F2F2ED] hidden sm:block"
                        style={{ color: "#8A8A9A" }}
                    >
                        View All →
                    </Link>
                </div>
            </AnimateOnScroll>

            {/* Featured (full-width) */}
            <AnimateOnScroll delay={0.08}>
                <div className="mb-6">
                    <ProjectCard project={featured} size="featured" />
                </div>
            </AnimateOnScroll>

            {/* Secondary 2-col */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {secondary.map((project, i) => (
                    <AnimateOnScroll key={project.slug} delay={0.08 * (i + 1)}>
                        <ProjectCard project={project} />
                    </AnimateOnScroll>
                ))}
            </div>

            {/* Mobile view all */}
            <AnimateOnScroll>
                <div className="mt-10 sm:hidden text-center">
                    <Link href="/projects" className="text-sm font-medium" style={{ color: "#8A8A9A" }}>
                        View All Projects →
                    </Link>
                </div>
            </AnimateOnScroll>
        </section>
    );
}
