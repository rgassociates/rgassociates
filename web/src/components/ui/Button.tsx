"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg" | "xl";
    fullWidth?: boolean;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    pulse?: boolean;
    loading?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    icon,
    iconPosition = "right",
    pulse = false,
    loading = false,
    className = "",
    disabled,
    ...props
}: ButtonProps) {
    // Base styles
    const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    // Variant styles
    const variantStyles = {
        primary: "bg-[#D4A646] text-[#051427] hover:bg-[#E5B657] focus:ring-[#D4A646] shadow-md hover:shadow-lg",
        secondary: "bg-[#051427] text-white hover:bg-[#0A1A2F] focus:ring-[#051427] shadow-md hover:shadow-lg",
        outline: "border-2 border-[#051427] text-[#051427] hover:bg-[#051427] hover:text-white focus:ring-[#051427]",
        ghost: "text-[#051427] hover:bg-gray-100 focus:ring-gray-300",
        link: "text-[#D4A646] hover:text-[#C8A34E] underline-offset-4 hover:underline",
    };

    // Size styles
    const sizeStyles = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-xl",
    };

    // Width style
    const widthStyle = fullWidth ? "w-full" : "";

    // Combine all styles
    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`;

    // Pulse animation
    const pulseAnimation = pulse ? {
        scale: [1, 1.05, 1],
        transition: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut" as const,
        },
    } : undefined;

    return (
        <motion.button
            className={combinedStyles}
            whileHover={{
                scale: 1.08,
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                }
            }}
            whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 }
            }}
            animate={pulseAnimation}
            disabled={disabled || loading}
            {...props}
        >
            {loading && (
                <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            )}

            {!loading && icon && iconPosition === "left" && icon}

            {children}

            {!loading && icon && iconPosition === "right" && icon}
        </motion.button>
    );
}
