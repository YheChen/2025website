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
      { label: "TypeScript" },
      { label: "JavaScript" },
      { label: "Java" },
      { label: "Ruby" },
      { label: "Go" },
      { label: "C" },
      { label: "SQL" },
      { label: "HTML" },
      { label: "CSS" },
      { label: "R" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { label: "React" },
      { label: "Next.js" },
      { label: "Node.js" },
      { label: "Express" },
      { label: "React Native" },
      { label: "Expo" },
      { label: "Vite" },
      { label: "AWS Lambda" },
      { label: "Tailwind CSS" },
      { label: "Ruby on Rails" },
    ],
  },
  {
    title: "Databases & Infrastructure",
    items: [
      { label: "PostgreSQL" },
      { label: "MySQL" },
      { label: "MongoDB" },
      { label: "Firebase" },
      { label: "Supabase" },
      { label: "Prisma" },
      { label: "Docker" },
      { label: "Nginx" },
    ],
  },
  {
    title: "Developer Tools & ML",
    items: [
      { label: "Git" },
      { label: "GitHub Actions" },
      { label: "PyTorch" },
      { label: "scikit-learn" },
      { label: "OpenCV" },
      { label: "Pandas" },
      { label: "NumPy" },
      { label: "Matplotlib" },
    ],
  },
];

/**
 * Explicit icon filenames (with extension) for labels whose derived name
 * doesn't match a file in /public/skills. Everything else resolves to
 * `<label-lowercased-no-spaces-or-dots>.webp`.
 */
const skillIconOverrides: Record<string, string> = {
  React: "reactjs.webp",
  "React Native": "reactnative.webp",
  "Tailwind CSS": "tailwind.webp",
  "scikit-learn": "scikitlearn.webp",
  Ruby: "ruby.svg",
  Go: "go.svg",
  Express: "express.svg",
  Expo: "expo.svg",
  Vite: "vite.svg",
  "AWS Lambda": "awslambda.svg",
  "Ruby on Rails": "rubyonrails.svg",
  PostgreSQL: "postgresql.svg",
  MySQL: "mysql.svg",
  Supabase: "supabase.svg",
  Prisma: "prisma.svg",
  Docker: "docker.svg",
  Nginx: "nginx.svg",
  "GitHub Actions": "githubactions.svg",
  OpenCV: "opencv.svg",
};

function logoFor(label: string): string {
  const fileName =
    skillIconOverrides[label] ||
    `${label.toLowerCase().replace(/\s|\./g, "")}.webp`;
  return `/skills/${fileName}`;
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
