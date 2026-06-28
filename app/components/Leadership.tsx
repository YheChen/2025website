import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ResumeCard from "./ResumeCard";
import { leadership } from "./resume-data";

export default function Leadership() {
  return (
    <Section id="leadership">
      <SectionHeading
        index="06"
        label="Leadership"
        title="Leadership & volunteer experience."
        description="Roles where I've led teams, organized events, and given back to the community."
      />

      <div className="mt-12 flex flex-col gap-5">
        {leadership.map((entry, index) => (
          <ResumeCard
            key={entry.role + entry.org}
            {...entry}
            delay={index * 0.06}
          />
        ))}
      </div>
    </Section>
  );
}
