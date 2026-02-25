const skills = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Figma",
    "AWS",
    "Docker",
    "GraphQL",
    "Prisma",
    "Python",
];

function SkillPill({ label }: { label: string }) {
    return (
        <span
            className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap mx-2"
            style={{
                background: "#1C1C22",
                color: "#8A8A9A",
                border: "1px solid rgba(255,255,255,0.05)",
                letterSpacing: "0.05em",
            }}
        >
            {label}
        </span>
    );
}

export default function MarqueeStrip() {
    // Double for seamless loop
    const doubled = [...skills, ...skills, ...skills, ...skills];

    return (
        <div
            className="w-full py-5 overflow-hidden"
            style={{
                background: "#141418",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
        >
            {/* Row 1 — left */}
            <div className="marquee-container mb-3">
                <div className="marquee-track-left">
                    {doubled.map((skill, i) => (
                        <SkillPill key={`l-${i}`} label={skill} />
                    ))}
                </div>
            </div>

            {/* Row 2 — right */}
            <div className="marquee-container">
                <div className="marquee-track-right">
                    {[...doubled].reverse().map((skill, i) => (
                        <SkillPill key={`r-${i}`} label={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
}
