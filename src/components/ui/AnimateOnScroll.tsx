"use client";

import { useRef, useEffect, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface AnimateOnScrollProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        },
    },
};

export default function AnimateOnScroll({
    children,
    delay = 0,
    className,
}: AnimateOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeUp}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
