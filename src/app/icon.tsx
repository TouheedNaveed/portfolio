import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "#0C0C0E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    // Simulate the gradient ring via a border trick using box-shadow
                    boxShadow: "0 0 0 2px #8B3FE8",
                }}
            >
                <span
                    style={{
                        fontSize: 13,
                        fontWeight: 800,
                        background:
                            "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 40%, #E03FD8 70%, #FF6B35 100%)",
                        backgroundClip: "text",
                        color: "transparent",
                        letterSpacing: "-0.5px",
                        lineHeight: 1,
                    }}
                >
                    TN
                </span>
            </div>
        ),
        { ...size }
    );
}
