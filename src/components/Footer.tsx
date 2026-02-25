import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer
            className="w-full py-6 px-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm" style={{ color: "#4A4A5A" }}>
                    © {new Date().getFullYear()} Touheed Naveed — Built with Next.js
                </p>
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/TouheedNaveed?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-200 hover:text-[#F2F2ED]"
                        style={{ color: "#4A4A5A" }}
                        aria-label="GitHub"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/touheednaveed/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-200 hover:text-[#F2F2ED]"
                        style={{ color: "#4A4A5A" }}
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
