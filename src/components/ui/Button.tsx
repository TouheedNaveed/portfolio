import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
}

export default function Button({
    variant = "primary",
    size = "md",
    children,
    className = "",
    ...props
}: ButtonProps) {
    const heights = { sm: "36px", md: "48px", lg: "56px" };
    const paddings = { sm: "0 20px", md: "0 28px", lg: "0 36px" };
    const fontSizes = { sm: "13px", md: "14px", lg: "15px" };

    if (variant === "primary") {
        return (
            <button
                className={`inline-flex items-center justify-center font-semibold rounded-btn transition-all duration-200 cursor-pointer ${className}`}
                style={{
                    background:
                        "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 30%, #E03FD8 65%, #FF6B35 100%)",
                    color: "#F2F2ED",
                    height: heights[size],
                    padding: paddings[size],
                    fontSize: fontSizes[size],
                    border: "none",
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.opacity = "0.88";
                    (e.currentTarget as HTMLButtonElement).style.transform =
                        "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                    (e.currentTarget as HTMLButtonElement).style.transform =
                        "translateY(0)";
                }}
                {...props}
            >
                {children}
            </button>
        );
    }

    return (
        <button
            className={`inline-flex items-center justify-center font-semibold rounded-btn transition-all duration-200 cursor-pointer ${className}`}
            style={{
                background: "transparent",
                color: "#F2F2ED",
                height: heights[size],
                padding: paddings[size],
                fontSize: fontSizes[size],
                border: "1px solid rgba(255,255,255,0.07)",
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(139,63,232,0.3)";
                (e.currentTarget as HTMLButtonElement).style.transform =
                    "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
            }}
            {...props}
        >
            {children}
        </button>
    );
}
