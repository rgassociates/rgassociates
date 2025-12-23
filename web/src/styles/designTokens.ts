// Design System Tokens for RG Legal Solutions
// Professional Legal Firm Theme

export const colors = {
    // Primary Colors
    primary: {
        50: '#E8EBF0',
        100: '#C5CDD9',
        200: '#9EACC0',
        300: '#778BA7',
        400: '#5A7194',
        500: '#3D5881',
        600: '#375079',
        700: '#2F456E',
        800: '#273B64',
        900: '#1A2951',
        DEFAULT: '#051427', // Deep Navy Blue - Trust & Authority
    },

    // Secondary Colors
    secondary: {
        50: '#FDF8ED',
        100: '#FAEED2',
        200: '#F7E3B5',
        300: '#F4D897',
        400: '#F1CF80',
        500: '#EFC669',
        600: '#EDC061',
        700: '#EAB956',
        800: '#E7B14C',
        900: '#E2A43B',
        DEFAULT: '#D4A646', // Elegant Gold - Premium & Excellence
    },

    // Accent Colors
    accent: {
        light: '#2C5F8D',
        DEFAULT: '#1E3A5F', // Medium Blue - Depth
        dark: '#0F1D2F',
    },

    // Neutral Colors
    neutral: {
        50: '#FAFBFC',
        100: '#F8F9FA',
        200: '#E9ECEF',
        300: '#DEE2E6',
        400: '#CED4DA',
        500: '#ADB5BD',
        600: '#6C757D',
        700: '#495057',
        800: '#343A40',
        900: '#212529',
    },

    // Semantic Colors
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',

    // Text Colors
    text: {
        primary: '#2C3E50',
        secondary: '#64748B',
        tertiary: '#94A3B8',
        inverse: '#FFFFFF',
    },

    // Background Colors
    background: {
        primary: '#FFFFFF',
        secondary: '#F8F9FA',
        tertiary: '#F1F5F9',
        dark: '#051427',
    },
};

export const typography = {
    fonts: {
        serif: '"Playfair Display", "Merriweather", Georgia, serif',
        sans: '"Inter", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        accent: '"Montserrat", "Inter", sans-serif',
    },

    sizes: {
        // Desktop sizes
        h1: '3.75rem', // 60px
        h2: '2.625rem', // 42px
        h3: '1.875rem', // 30px
        h4: '1.5rem', // 24px
        h5: '1.25rem', // 20px
        h6: '1.125rem', // 18px
        body: '1.125rem', // 18px
        bodySmall: '1rem', // 16px
        caption: '0.875rem', // 14px

        // Mobile sizes
        mobile: {
            h1: '2.5rem', // 40px
            h2: '2rem', // 32px
            h3: '1.5rem', // 24px
            h4: '1.25rem', // 20px
            h5: '1.125rem', // 18px
            h6: '1rem', // 16px
            body: '1rem', // 16px
            bodySmall: '0.875rem', // 14px
            caption: '0.75rem', // 12px
        },
    },

    weights: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
    },

    lineHeights: {
        tight: 1.2,
        normal: 1.5,
        relaxed: 1.75,
        loose: 2,
    },
};

export const spacing = {
    0: '0',
    1: '0.25rem', // 4px
    2: '0.5rem', // 8px
    3: '0.75rem', // 12px
    4: '1rem', // 16px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    8: '2rem', // 32px
    10: '2.5rem', // 40px
    12: '3rem', // 48px
    16: '4rem', // 64px
    20: '5rem', // 80px
    24: '6rem', // 96px
    32: '8rem', // 128px

    // Section spacing
    section: {
        mobile: '4rem', // 64px
        tablet: '5rem', // 80px
        desktop: '7.5rem', // 120px
    },

    // Container
    container: {
        maxWidth: '80rem', // 1280px
        padding: '1.5rem', // 24px
    },
};

export const borderRadius = {
    none: '0',
    sm: '0.25rem', // 4px
    DEFAULT: '0.5rem', // 8px
    md: '0.75rem', // 12px
    lg: '1rem', // 16px
    xl: '1.5rem', // 24px
    '2xl': '2rem', // 32px
    full: '9999px',
};

export const shadows = {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    glow: '0 0 20px rgba(212, 166, 70, 0.3)',
    glowHover: '0 0 30px rgba(212, 166, 70, 0.5)',
};

export const motion = {
    // Duration
    duration: {
        fast: '0.15s',
        normal: '0.3s',
        slow: '0.6s',
        slower: '0.9s',
        slowest: '1.2s',
    },

    // Easing
    easing: {
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },

    // Stagger
    stagger: {
        children: 0.1,
        items: 0.05,
    },

    // Variants
    variants: {
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        fadeInUp: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
        },
        fadeInDown: {
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
        },
        fadeInLeft: {
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
        },
        fadeInRight: {
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 },
        },
        scaleIn: {
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
        },
    },
};

export const breakpoints = {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
};

export const zIndex = {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
};
