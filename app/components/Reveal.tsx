"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay before the reveal transition starts (seconds). Use for staggering. */
  delay?: number;
  /** Vertical offset to animate from (px). */
  y?: number;
};

/**
 * Scroll-reveal wrapper. Fades + slides content in as it enters the viewport.
 *
 * Visibility is driven by a plain IntersectionObserver with a failsafe timeout,
 * so content can NEVER get permanently stuck hidden, even if the observer
 * doesn't fire (e.g. a background-loaded tab) the timeout reveals it. Reduced
 * motion shows content instantly, and a <noscript> fallback covers no-JS.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
    );
    observer.observe(el);

    // Failsafe: never leave content hidden if the observer never fires.
    const failsafe = window.setTimeout(() => setShown(true), 1400);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  const style: CSSProperties = {
    opacity: shown ? 1 : 0,
    transform: shown ? "none" : `translateY(${y}px)`,
    transitionDelay: shown ? `${delay}s` : "0s",
  };

  return (
    <div
      ref={ref}
      data-reveal=""
      className={cn(
        "motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)]",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
