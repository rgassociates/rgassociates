"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BadgeProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "success" | "warning" | "info" | "outline";
    size?: "sm" | "md" | "lg";
    icon?: ReactNode;
    pulse?: boolean;
    className?: string;
}

export default function Badge({
    children,
    variant = "primary",
    size = "md",
    icon,
    pulse = false,
    className = "",
}: BadgeProps) {
    // Base styles
    const baseStyles = "inline-flex items-center gap-1.5 font-semibold rounded-full";

    // Variant styles
    const variantStyles = {
        primary: "bg-[#D4A646] text-[#051427]",
        secondary: "bg-[#051427] text-white",
        success: "bg-green-100 text-green-800 ring-1 ring-green-600/20",
        warning: "bg-amber-100 text-amber-800 ring-1 ring-amber-600/20",
        info: "bg-blue-100 text-blue-800 ring-1 ring-blue-600/20",
        outline: "bg-transparent text-[#051427] ring-2 ring-[#051427]",
    };

    // Size styles
    const sizeStyles = {
        sm: "px-2.5 py-1 text-xs",
        md: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base",
    };

    // Combine styles
    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
        <motion.span
            className={combinedStyles}
            animate={pulse ? {
                scale: [1, 1.1, 1],
                transition: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                },
            } : undefined}
            whileHover={{ scale: 1.05 }}
        >
            {icon && <span className="flex-shrink-0">{icon}</span>}
            {children}
        </motion.span>
    );
}
