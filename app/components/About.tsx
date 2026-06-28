import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const paragraphs = [
  "I'm a Computer Science Major at the University of Toronto with minors in Mathematics and Statistics. I have a strong foundation in programming principles and a passion for building efficient, user-friendly applications.",
  "My academic journey combines mathematical rigor with practical software development skills. I'm particularly interested in data science, web development, and creating innovative solutions that solve real-world problems.",
  "Outside of academics, I'm actively involved in the Computer Science Student Union as Vice President of External Relations, where I secure sponsorships and organize events to enhance professional development opportunities for students.",
  "I'm currently seeking internship opportunities where I can apply my skills in software development, data analysis, and project management to contribute to meaningful projects.",
];

const highlights = [
  { label: "Education", value: "HBSc Computer Science — Math & Stats minors" },
  {
    label: "Focus",
    value: "Software development, machine learning, data science",
  },
  { label: "Status", value: "Open to internships & collaborations" },
];

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div>
          <SectionHeading
            index="01"
            label="About"
            title="Turning ideas into polished, real-world software."
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
            {paragraphs.map((text, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-pretty">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="lg:pt-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-7">
            <h3 className="eyebrow mb-5">At a glance</h3>
            <dl className="divide-y divide-border">
              {highlights.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0"
                >
                  <dt className="font-mono text-xs uppercase tracking-wider text-brand-strong">
                    {label}
                  </dt>
                  <dd className="text-pretty text-sm text-foreground/90">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
