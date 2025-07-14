import { motion } from 'framer-motion';

// Page load animations
export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const slideLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const slideRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

export const HeroAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

// Scroll animations using AOS
export const aosAnimations = {
  fade: {
    duration: 1000,
    once: true,
    offset: 100
  },
  fadeUp: {
    duration: 1000,
    once: true,
    offset: 100,
    y: 50
  },
  fadeLeft: {
    duration: 1000,
    once: true,
    offset: 100,
    x: -50
  },
  fadeRight: {
    duration: 1000,
    once: true,
    offset: 100,
    x: 50
  },
  zoom: {
    duration: 1000,
    once: true,
    offset: 100,
    scale: 0.9
  }
};
