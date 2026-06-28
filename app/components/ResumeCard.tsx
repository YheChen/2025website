import Image from "next/image";
import Reveal from "./Reveal";
import type { ResumeEntry } from "./resume-data";

type ResumeCardProps = ResumeEntry & {
  delay?: number;
  /** Render bullets in two columns (used for dense lists like coursework). */
  twoColumnBullets?: boolean;
};

export default function ResumeCard({
  logo,
  logoAlt,
  role,
  org,
  period,
  bullets,
  delay = 0,
  twoColumnBullets = false,
}: ResumeCardProps) {
  return (
    <Reveal delay={delay}>
      <article className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-soft-lg sm:p-6">
        {/* Brand accent rail revealed on hover */}
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-brand to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
          <div className="flex-shrink-0">
            <div className="h-14 w-14 overflow-hidden rounded-xl border border-border bg-white shadow-soft">
              <Image
                src={logo}
                alt={logoAlt}
                width={56}
                height={56}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {role}
              </h3>
              <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {period}
              </span>
            </div>
            <p className="mt-0.5 text-sm font-medium text-muted-foreground">
              {org}
            </p>

            {bullets.length > 0 && (
              <ul
                className={
                  "mt-4 gap-x-8 gap-y-2 text-sm leading-relaxed text-muted-foreground" +
                  (twoColumnBullets
                    ? " grid grid-cols-1 sm:grid-cols-2"
                    : " flex flex-col")
                }
              >
                {bullets.map((bullet, i) => (
                  <li key={i} className="relative pl-5 text-pretty">
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.5em] h-1.5 w-1.5 rounded-full bg-brand/70"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
