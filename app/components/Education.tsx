import Image from "next/image";

import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { coursework } from "./resume-data";

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading
        index="04"
        label="Education"
        title="Where I'm studying."
      />

      <Reveal delay={0.05} className="mt-12">
        <article className="overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row">
            <div className="flex-shrink-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-border bg-white p-2 shadow-soft">
                <Image
                  src="/uoftlogo.webp"
                  alt="University of Toronto logo"
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                  draggable={false}
                />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  HBSc. Computer Science Major, Mathematics &amp; Statistics
                  Minors, with Co-op
                </h3>
                <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Sep 2023 – Apr 2028
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-muted-foreground">
                University of Toronto
              </p>
              <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
                <span>
                  CS GPA: <span className="text-foreground">3.82</span>
                </span>
                <span aria-hidden className="text-border">
                  /
                </span>
                <span>
                  Cumulative GPA: <span className="text-foreground">3.33</span>
                </span>
              </p>

              <div className="mt-6 border-t border-border pt-5">
                <h4 className="eyebrow mb-4">Relevant coursework</h4>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-2 text-sm text-muted-foreground sm:grid-cols-2">
                  {coursework.map((course) => (
                    <li key={course} className="relative pl-5 text-pretty">
                      <span
                        aria-hidden
                        className="absolute left-0 top-[0.5em] h-1.5 w-1.5 rounded-full bg-brand/70"
                      />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
