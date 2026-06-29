import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { visibleProjects } from "./projects-data";

export default function Projects() {
  return (
    <Section
      id="projects"
      size="wide"
      className="border-y border-border/60 bg-muted/30"
    >
      <SectionHeading
        index="02"
        label="Projects"
        title="Things I've designed, built, and shipped."
        description="A selection of personal projects, hackathon builds, and tools, spanning web apps, machine learning, and developer utilities."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            delay={(index % 3) * 0.08}
          />
        ))}
      </div>

      <Reveal delay={0.1} className="mt-12 flex justify-center">
        <Button variant="outline" size="lg" asChild>
          <a href="https://github.com/YheChen" target="_blank" rel="noreferrer">
            View all on GitHub
            <Github className="h-4 w-4" />
          </a>
        </Button>
      </Reveal>
    </Section>
  );
}
