import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  /** Two-digit index shown before the label, e.g. "02". */
  index?: string;
  /** Short eyebrow label, e.g. "About". */
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  index,
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        centered && "items-center text-center",
        className
      )}
    >
      <span className="eyebrow">
        {index && <span className="text-brand">{index}</span>}
        <span aria-hidden className="h-px w-6 bg-border" />
        {label}
      </span>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-pretty text-base leading-relaxed text-muted-foreground md:text-lg",
            centered ? "max-w-2xl" : "max-w-3xl"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
