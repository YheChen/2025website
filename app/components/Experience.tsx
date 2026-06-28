import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ResumeCard from "./ResumeCard";
import { experience } from "./resume-data";

export default function Experience() {
  return (
    <Section
      id="experience"
      className="border-y border-border/60 bg-muted/30"
    >
      <SectionHeading
        index="05"
        label="Experience"
        title="Where I've worked."
      />

      <div className="mt-12 flex flex-col gap-5">
        {experience.map((entry, index) => (
          <ResumeCard key={entry.role + entry.org} {...entry} delay={index * 0.06} />
        ))}
      </div>
    </Section>
  );
}
