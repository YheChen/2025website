import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  /** Width of the inner content container. */
  size?: "default" | "wide";
  className?: string;
  /** Extra classes for the inner container. */
  innerClassName?: string;
  children: React.ReactNode;
};

/**
 * Standard page section: consistent vertical rhythm, scroll-margin for the
 * sticky navbar, and a centered content container. Keep the outer <section>
 * full-bleed so decorative backgrounds can extend edge to edge.
 */
export default function Section({
  id,
  size = "default",
  className,
  innerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-16 md:py-24", className)}
    >
      <div
        className={cn(
          "mx-auto w-full px-5 sm:px-6 lg:px-8",
          size === "wide" ? "max-w-6xl" : "max-w-5xl",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
