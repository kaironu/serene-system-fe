// Design System - Colors, Typography, Spacing
export const DESIGN_SYSTEM = {
  colors: {
    bg: {
      primary: "var(--bg-primary)",
      secondary: "var(--bg-secondary)",
      tertiary: "var(--bg-tertiary)",
    },
    text: {
      primary: "var(--text-primary)",
      secondary: "var(--text-secondary)",
      tertiary: "var(--text-tertiary)",
      light: "var(--text-light)",
    },
    accent: {
      gold: "var(--accent-gold)",
      brick: "var(--accent-brick)",
      jade: "var(--accent-jade)",
      black: "var(--accent-black)",
    },
    semantic: {
      success: "var(--success)",
      warning: "var(--warning)",
      error: "var(--error)",
      border: "var(--border)",
    },
  },
  typography: {
    heading: "font-serif font-normal tracking-tight",
    body: "font-sans text-base leading-relaxed",
    caption: "font-sans text-sm text-neutral-tertiary",
    label: "font-sans text-sm font-semibold uppercase tracking-wide",
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
    "2xl": "3rem",
    "3xl": "4rem",
  },
  shadows: {
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
    xl: "var(--shadow-xl)",
  },
  animations: {
    duration: {
      fast: 200,
      base: 300,
      slow: 500,
      slower: 800,
    },
    easing: {
      easeOut: [0.4, 0, 0.2, 1],
      easeInOut: [0.4, 0, 0.2, 1],
    },
  },
};

// Framer Motion variants
export const MOTION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, margin: "0px 0px -100px 0px" },
  },
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  },
  slideInRight: {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  },
  hoverLift: {
    whileHover: { y: -4, boxShadow: "var(--shadow-lg)" },
    transition: { duration: 0.3 },
  },
  hoverScale: {
    whileHover: { scale: 1.02 },
    transition: { duration: 0.3 },
  },
};
