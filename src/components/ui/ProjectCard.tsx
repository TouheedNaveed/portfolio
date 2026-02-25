import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
    size?: "normal" | "featured";
}

export default function ProjectCard({
    project,
    size = "normal",
}: ProjectCardProps) {
    return (
        <div
            className="card-hover rounded-card overflow-hidden flex flex-col h-full"
            style={{
                background: "#141418",
                border: "1px solid rgba(255,255,255,0.07)",
            }}
        >
            {/* Thumbnail */}
            <div
                className={`w-full ${size === "featured" ? "aspect-[21/9]" : "aspect-video"} relative overflow-hidden`}
            >
                {project.image ? (
                    /* Real screenshot */
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    /* Gradient fallback */
                    <>
                        <div
                            className="absolute inset-0 opacity-60"
                            style={{
                                background: `linear-gradient(135deg, ${project.category === "Full-Stack"
                                        ? "#3B1FD4, #8B3FE8"
                                        : project.category === "Frontend"
                                            ? "#8B3FE8, #E03FD8"
                                            : "#E03FD8, #FF6B35"
                                    })`,
                            }}
                        />
                        <div
                            className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                                backgroundSize: "40px 40px",
                            }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span
                                className="font-display font-bold text-white opacity-20 text-center px-4"
                                style={{ fontSize: size === "featured" ? "48px" : "28px" }}
                            >
                                {project.title}
                            </span>
                        </div>
                    </>
                )}

                {/* Subtle gradient overlay at bottom so text stays readable */}
                {project.image && (
                    <div
                        className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                        style={{
                            background: "linear-gradient(to top, rgba(20,20,24,0.7) 0%, transparent 100%)",
                        }}
                    />
                )}
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">
                {/* Tags */}
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

                {/* Title */}
                <h3
                    className="font-sans font-semibold mb-2"
                    style={{
                        fontSize: size === "featured" ? "24px" : "20px",
                        color: "#F2F2ED",
                        lineHeight: 1.2,
                    }}
                >
                    {project.title}
                </h3>

                {/* Description */}
                <p
                    className="text-sm mb-6 flex-1"
                    style={{
                        color: "#8A8A9A",
                        lineHeight: 1.75,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-6">
                    {project.liveUrl && project.liveUrl !== "/" && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold flex items-center gap-1.5 transition-opacity hover:opacity-80"
                            style={{
                                background:
                                    "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 30%, #E03FD8 65%, #FF6B35 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Live URL <ExternalLink size={12} style={{ color: "#8B3FE8" }} />
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium flex items-center gap-1 transition-colors hover:text-[#8A8A9A]"
                            style={{ color: "#4A4A5A" }}
                        >
                            GitHub <ExternalLink size={12} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
