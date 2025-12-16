"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
    children: ReactNode;
    id?: string;
    background?: "white" | "gray" | "dark" | "gradient";
    padding?: "none" | "sm" | "md" | "lg" | "xl";
    containerSize?: "sm" | "md" | "lg" | "xl" | "full";
    className?: string;
}

export default function Section({
    children,
    id,
    background = "white",
    padding = "lg",
    containerSize = "xl",
    className = "",
}: SectionProps) {
    // Background styles
    const backgroundStyles = {
        white: "bg-white",
        gray: "bg-gray-50",
        dark: "bg-[#051427] text-white",
        gradient: "bg-gradient-to-br from-[#051427] via-[#0A1A2F] to-[#051427] text-white",
    };

    // Padding styles
    const paddingStyles = {
        none: "",
        sm: "py-12 sm:py-16",
        md: "py-16 sm:py-20",
        lg: "py-20 sm:py-24",
        xl: "py-24 sm:py-32",
    };

    return (
        <motion.section
            id={id}
            className={`relative ${backgroundStyles[background]} ${paddingStyles[padding]} ${className}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
        >
            <Container size={containerSize}>
                {children}
            </Container>
        </motion.section>
    );
}
