import Image from "next/image";

import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Skill = { label: string; short?: string };

const skillCategories: { title: string; items: Skill[] }[] = [
  {
    title: "Languages",
    items: [
      { label: "Python" },
      { label: "Java" },
      { label: "C" },
      { label: "JavaScript" },
      { label: "TypeScript" },
      { label: "HTML" },
      { label: "CSS" },
      { label: "SQL" },
      { label: "R" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { label: "Next.js" },
      { label: "Node.js" },
      { label: "Tailwind" },
      { label: "React.js" },
      { label: "React Native", short: "React Native" },
      { label: "Pandas" },
      { label: "NumPy" },
      { label: "Matplotlib" },
      { label: "Scikitlearn", short: "scikit-learn" },
      { label: "PyTorch" },
      { label: "Flask" },
    ],
  },
  {
    title: "Developer Tools",
    items: [
      { label: "MongoDB" },
      { label: "Firebase" },
      { label: "Colab" },
      { label: "Jupyter" },
      { label: "SAS Studio", short: "SAS" },
      { label: "Figma" },
      { label: "Markdown" },
    ],
  },
];

const skillImageMap: Record<string, string> = {
  "React Native": "reactnative",
  "Google Colab": "googlecolab",
  "Java Swing": "javaswing",
  "SAS Studio": "sas",
};

function logoFor(label: string): string {
  const fileName =
    skillImageMap[label] || label.toLowerCase().replace(/\s|\./g, "");
  return `/skills/${fileName}.webp`;
}

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="03"
        label="Skills"
        title="Tools and technologies I work with."
        description="The languages, frameworks, and tools I reach for when building and shipping software."
      />

      <div className="mt-12 space-y-6">
        {skillCategories.map((category, index) => (
          <Reveal key={category.title} delay={index * 0.08}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-7">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="eyebrow">{category.title}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {category.items.length.toString().padStart(2, "0")}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {category.items.map(({ label, short }) => (
                  <div
                    key={label}
                    className="group flex items-center gap-2.5 rounded-xl border border-border bg-background px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-soft"
                  >
                    <span className="flex h-7 w-7 items-center justify-center">
                      <Image
                        src={logoFor(label)}
                        alt={label}
                        width={24}
                        height={24}
                        className="h-6 w-6 object-contain"
                        draggable={false}
                      />
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {short || label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
