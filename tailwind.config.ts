import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    base: "#0C0C0E",
                    surface: "#141418",
                    elevated: "#1C1C22",
                },
                text: {
                    primary: "#F2F2ED",
                    secondary: "#8A8A9A",
                    muted: "#4A4A5A",
                },
                accent: {
                    1: "#3B1FD4",
                    2: "#8B3FE8",
                    3: "#E03FD8",
                    4: "#FF6B35",
                },
                border: {
                    subtle: "rgba(255,255,255,0.07)",
                    glow: "rgba(139,63,232,0.3)",
                },
            },
            fontFamily: {
                sans: ["var(--font-plus-jakarta)", "sans-serif"],
                display: ["var(--font-poppins)", "sans-serif"],
            },
            spacing: {
                18: "72px",
                22: "88px",
                30: "120px",
            },
            borderRadius: {
                card: "16px",
                "card-inner": "12px",
                btn: "8px",
            },
            keyframes: {
                "marquee-left": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                "marquee-right": {
                    "0%": { transform: "translateX(-50%)" },
                    "100%": { transform: "translateX(0)" },
                },
                "orb-pulse": {
                    "0%, 100%": { transform: "scale(1)", opacity: "0.35" },
                    "50%": { transform: "scale(1.08)", opacity: "0.45" },
                },
                "fade-in-up": {
                    "0%": { opacity: "0", transform: "translateY(15px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                "marquee-left": "marquee-left 30s linear infinite",
                "marquee-right": "marquee-right 30s linear infinite",
                "orb-pulse": "orb-pulse 4s ease-in-out infinite",
                "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
            },
        },
    },
    plugins: [],
};

export default config;
