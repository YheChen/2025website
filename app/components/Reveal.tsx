"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

type RevealProps = {
  /** Delay before the animation starts (seconds). Use for staggering. */
  delay?: number;
  /** Vertical offset to animate from (px). */
  y?: number;
  /** Only animate the first time it enters the viewport. */
  once?: boolean;
} & HTMLMotionProps<"div">;

/**
 * Scroll-reveal wrapper. Fades + slides content into view as it enters the
 * viewport. Animation is fully disabled when the user prefers reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 16,
  once = true,
  transition,
  ...props
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <motion.div {...props}>{children}</motion.div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
        ...transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
