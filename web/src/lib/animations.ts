/**
 * Reusable Framer Motion animation variants and utilities
 * 
 * These animations follow design principles:
 * - Smooth & Natural (easing curves, not linear)
 * - Performance First (transform/opacity only)
 * - Consistent timing across site
 * - Accessible (respects prefers-reduced-motion)
 */

// Custom easing curve for smooth animations
export const customEase = [0.22, 1, 0.36, 1]; // Cubic bezier

/**
 * Fade in from bottom with slide up
 * Perfect for: Text, headings, paragraphs
 */
export const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: customEase }
};

/**
 * Fade in with scale
 * Perfect for: Cards, images, containers
 */
export const fadeInScale = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
};

/**
 * Fade in from left
 * Perfect for: Side elements, alternating content
 */
export const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: customEase }
};

/**
 * Fade in from right
 * Perfect for: Side elements, alternating content
 */
export const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: customEase }
};

/**
 * Stagger container for child animations
 * Perfect for: Lists, grids, sequential reveals
 */
export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

/**
 * Stagger item (use with staggerContainer)
 */
export const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
};

/**
 * Smooth hover effect with spring physics
 * Perfect for: Buttons, cards, interactive elements
 */
export const smoothHover = {
    scale: 1.03,
    y: -4,
    transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
    }
};

/**
 * Premium button hover with shadow
 * Perfect for: Primary CTAs, important buttons
 */
export const buttonHover = {
    scale: 1.05,
    boxShadow: "0 10px 30px rgba(212, 166, 70, 0.3)",
    transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
    }
};

/**
 * Button tap/press effect
 * Perfect for: All clickable buttons
 */
export const buttonTap = {
    scale: 0.98,
    transition: { duration: 0.1 }
};

/**
 * Scroll reveal animation
 * Use with whileInView prop
 */
export const scrollReveal = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: customEase }
};

/**
 * Floating animation (continuous)
 * Perfect for: Background elements, decorative items
 */
export const floating = {
    y: [0, -20, 0],
    transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

/**
 * Pulse animation (continuous)
 * Perfect for: Attention-grabbing elements, badges
 */
export const pulse = {
    scale: [1, 1.05, 1],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

/**
 * Icon rotation on hover
 * Perfect for: Icons, arrows, interactive symbols
 */
export const iconRotate = {
    rotate: [0, -10, 10, -10, 0],
    transition: { duration: 0.5 }
};

/**
 * Check if user prefers reduced motion
 * Returns true if animations should be disabled
 */
export const prefersReducedMotion = (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get animation props with reduced motion support
 * Returns empty object if user prefers reduced motion
 */
export const getAnimationProps = (animationVariant: any) => {
    if (prefersReducedMotion()) {
        return { initial: {}, animate: {}, transition: { duration: 0.01 } };
    }
    return animationVariant;
};

/**
 * Responsive animation helper
 * Reduces animations on mobile for performance
 */
export const getResponsiveAnimation = (
    desktopAnimation: any,
    mobileAnimation?: any
) => {
    if (typeof window === 'undefined') return desktopAnimation;

    const isMobile = window.innerWidth < 768;

    if (isMobile && mobileAnimation) {
        return mobileAnimation;
    }

    if (isMobile) {
        // Simplified animation for mobile
        return {
            ...desktopAnimation,
            transition: { ...desktopAnimation.transition, duration: 0.3 }
        };
    }

    return desktopAnimation;
};
