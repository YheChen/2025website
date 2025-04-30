// components/Skills.tsx
import Image from "next/image";

const skills = {
  languages: [
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
  frameworks: [
    { label: "Next.js" },
    { label: "Node.js" },
    { label: "Tailwind" },
    { label: "React.js" },
    { label: "React Native", short: "Native" },
    { label: "Pandas" },
    { label: "NumPy" },
    { label: "Matplotlib" },
    { label: "Scikitlearn" },
    // { label: "PyTorch" },
    // { label: "TensorFlow" },
    // { label: "Flask" },
  ],
  tools: [
    { label: "MongoDB" },
    { label: "Firebase" },
    { label: "Colab" },
    { label: "Jupyter" },
    { label: "SAS Studio", short: "SAS" },
    { label: "Figma" },
    { label: "Markdown" },
  ],
};

function SkillCategory({
  title,
  items,
}: {
  title: string;
  items: { label: string; short?: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <div className="flex flex-wrap justify-center gap-5">
        {items.map(({ label, short }) => {
          const skillImageMap: Record<string, string> = {
            "React Native": "reactnative",
            "Google Colab": "googlecolab",
            "Java Swing": "javaswing",
            "SAS Studio": "sas",
          };

          const fileName =
            skillImageMap[label] || label.toLowerCase().replace(/\s|\./g, "");

          const logoSrc = `/skills/${fileName}.webp`;
          return (
            <div
              className="flex flex-col items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-2 w-20 hover:scale-125 transition-transform duration-300 ease-in-out"
              key={label}
            >
              <div className="bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <Image
                  src={logoSrc}
                  alt={label}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-center">{short || label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-[980px] py-8 md:py-12 scroll-mt-16"
    >
      <div className="flex flex-col gap-10">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl text-center">
          Skills and Technologies
        </h2>
        <SkillCategory title="Languages" items={skills.languages} />
        <SkillCategory
          title="Frameworks & Libraries"
          items={skills.frameworks}
        />
        <SkillCategory title="Developer Tools" items={skills.tools} />
      </div>
    </section>
  );
}
