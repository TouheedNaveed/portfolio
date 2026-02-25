"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
    const [visible, setVisible] = useState(true);
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        // Show every time the page loads / refreshes
        const exitTimer = setTimeout(() => setExiting(true), 2200);
        const removeTimer = setTimeout(() => setVisible(false), 2900);

        return () => {
            clearTimeout(exitTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!visible) return null;

    return (
        <AnimatePresence>
            {!exiting && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: "-100%" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
                    style={{ background: "#0C0C0E" }}
                >
                    {/* Ambient orbs */}
                    <div
                        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(139,63,232,0.18) 0%, transparent 70%)",
                            filter: "blur(60px)",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-60%, -60%)",
                        }}
                    />
                    <div
                        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(224,63,216,0.12) 0%, transparent 70%)",
                            filter: "blur(80px)",
                            bottom: "20%",
                            right: "20%",
                        }}
                    />

                    {/* Center content */}
                    <div className="relative flex flex-col items-center gap-10">
                        {/* Spinning gradient ring */}
                        <motion.div
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            className="relative"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                                className="w-20 h-20 rounded-full"
                                style={{
                                    background:
                                        "conic-gradient(from 0deg, #3B1FD4, #8B3FE8, #E03FD8, #FF6B35, #3B1FD4)",
                                    padding: "2px",
                                }}
                            >
                                <div
                                    className="w-full h-full rounded-full flex items-center justify-center"
                                    style={{ background: "#0C0C0E" }}
                                >
                                    <span
                                        className="font-display font-extrabold text-xl"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 30%, #E03FD8 65%, #FF6B35 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                        }}
                                    >
                                        TN
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Name */}
                        <motion.div
                            className="flex flex-col items-center gap-2"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        >
                            <h1
                                className="font-display font-extrabold tracking-tight"
                                style={{
                                    fontSize: "clamp(28px, 4vw, 40px)",
                                    letterSpacing: "-0.03em",
                                    background:
                                        "linear-gradient(135deg, #3B1FD4 0%, #8B3FE8 30%, #E03FD8 65%, #FF6B35 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Touheed Naveed
                            </h1>
                            <p
                                className="text-sm font-medium tracking-widest uppercase"
                                style={{ color: "#4A4A5A", letterSpacing: "0.2em" }}
                            >
                                Full-Stack Developer
                            </p>
                        </motion.div>

                        {/* Loading bar */}
                        <motion.div
                            className="w-48 h-px overflow-hidden rounded-full"
                            style={{ background: "rgba(255,255,255,0.07)" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.div
                                className="h-full rounded-full"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #3B1FD4, #8B3FE8, #E03FD8, #FF6B35)",
                                }}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
