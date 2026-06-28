import { cn } from "@/lib/utils";

/** "YC" rendered as plain-ASCII block letters — used as faint branding. */
export const YC_ASCII = `##    ##    ######
 ##  ##    ##
  ####     ##
   ##      ##
   ##      ##
   ##       ######`;

type AsciiArtProps = {
  art?: string;
  className?: string;
};

/**
 * Decorative ASCII artwork. Purely presentational — hidden from assistive tech
 * and non-interactive.
 */
export default function AsciiArt({ art = YC_ASCII, className }: AsciiArtProps) {
  return (
    <pre
      aria-hidden="true"
      className={cn(
        "pointer-events-none select-none whitespace-pre font-mono leading-none",
        className
      )}
    >
      {art}
    </pre>
  );
}
