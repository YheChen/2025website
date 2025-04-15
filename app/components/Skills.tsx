// components/Skills.tsx
import {
  Globe,
  Database,
  Server,
  Smartphone,
  Code,
  BarChart,
  Layers,
  PenTool,
  Cloud,
  Terminal,
  GitBranch,
} from "lucide-react";

const skills = {
  languages: [
    { label: "Python", icon: "PY" },
    { label: "Java", icon: "JV" },
    { label: "C", icon: "C" },
    { label: "JavaScript", icon: "JS" },
    { label: "TypeScript", icon: "TS" },
    { label: "HTML/CSS", icon: <Globe className="h-8 w-8" /> },
    { label: "MySQL", icon: <Database className="h-8 w-8" /> },
    { label: "R", icon: "R" },
  ],
  frameworks: [
    { label: "Next.js", icon: "N" },
    { label: "Node.js", icon: <Server className="h-8 w-8" /> },
    { label: "Express", icon: "EX" },
    { label: "Expo", icon: <Smartphone className="h-8 w-8" /> },
    { label: "React Native", icon: <Smartphone className="h-8 w-8" /> },
    { label: "Tailwind", icon: "TW" },
    { label: "React.js", icon: <Code className="h-8 w-8" /> },
    { label: "Pandas", icon: <BarChart className="h-8 w-8" /> },
    { label: "NumPy", icon: "NP" },
    { label: "PyTorch", icon: "PT" },
    { label: "Java Swing", icon: <Layers className="h-8 w-8" /> },
  ],
  tools: [
    { label: "Vim", icon: <PenTool className="h-8 w-8" /> },
    { label: "MongoDB", icon: <Database className="h-8 w-8" /> },
    { label: "Firebase", icon: <Cloud className="h-8 w-8" /> },
    { label: "Google Colab", icon: "GC" },
    { label: "Jupyter", icon: <Terminal className="h-8 w-8" /> },
    { label: "SAS Studio", icon: "SAS" },
    { label: "Git", icon: <GitBranch className="h-8 w-8" /> },
    { label: "Markdown", icon: "MD" },
  ],
};

function SkillCategory({
  title,
  items,
}: {
  title: string;
  items: { label: string; icon: React.ReactNode | string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {items.map(({ label, icon }) => (
          <div className="flex flex-col items-center gap-2" key={label}>
            <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center text-2xl">
              {typeof icon === "string" ? <span>{icon}</span> : icon}
            </div>
            <span className="text-sm">{label}</span>
          </div>
        ))}
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
          Skills
        </h2>
        <SkillCategory title="Languages" items={skills.languages} />
        <SkillCategory
          title="Frameworks and Libraries"
          items={skills.frameworks}
        />
        <SkillCategory title="Developer Tools" items={skills.tools} />
      </div>
    </section>
  );
}
