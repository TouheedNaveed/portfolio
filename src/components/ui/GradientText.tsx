import React, { ReactNode } from "react";

interface GradientTextProps {
    children: ReactNode;
    className?: string;
    as?: React.ElementType;
}

export default function GradientText({
    children,
    className = "",
    as: Tag = "span",
}: GradientTextProps) {
    return (
        <Tag
            className={className}
            style={{
                background:
                    "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 30%, #E03FD8 65%, #FF6B35 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
            }}
        >
            {children}
        </Tag>
    );
}
