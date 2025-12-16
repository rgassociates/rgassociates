"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
    children: ReactNode;
    variant?: "default" | "bordered" | "elevated" | "gradient" | "glass";
    padding?: "none" | "sm" | "md" | "lg" | "xl";
    hover?: boolean;
    glow?: boolean;
}

export default function Card({
    children,
    variant = "default",
    padding = "md",
    hover = true,
    glow = false,
    className = "",
    ...props
}: CardProps) {
    // Base styles
    const baseStyles = "rounded-xl transition-all duration-300";

    // Variant styles
    const variantStyles = {
        default: "bg-white shadow-md",
        bordered: "bg-white border-2 border-gray-200",
        elevated: "bg-white shadow-xl",
        gradient: "bg-gradient-to-br from-[#051427] to-[#0A1A2F] text-white shadow-lg",
        glass: "bg-white/80 backdrop-blur-md border border-white/20 shadow-lg",
    };

    // Padding styles
    const paddingStyles = {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
    };

    // Hover styles
    const hoverClass = hover ? "hover:shadow-2xl" : "";

    // Glow effect
    const glowClass = glow ? "hover:shadow-[0_0_30px_rgba(212,166,70,0.5)]" : "";

    // Combine all styles
    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverClass} ${glowClass} ${className}`;

    // Animation variants
    const hoverAnimation = hover ? {
        scale: 1.02,
        y: -4,
        transition: { duration: 0.3 }
    } : {};

    return (
        <motion.div
            className={combinedStyles}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={hoverAnimation}
            {...props}
        >
            {children}
        </motion.div>
    );
}
