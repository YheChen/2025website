import Image from "next/image";
import { Github, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ensureHttps, type Project } from "./projects-data";
import Reveal from "./Reveal";

type ProjectCardProps = {
  project: Project;
  delay?: number;
};

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  // The thumbnail links to the live demo when there is one, else the source.
  const previewHref = project.demo
    ? ensureHttps(project.demo)
    : project.github;
  const previewLabel = project.demo
    ? `${project.title}: open live demo`
    : `${project.title}: view source on GitHub`;

  return (
    <Reveal delay={delay} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-soft-lg">
        <a
          href={previewHref}
          target="_blank"
          rel="noreferrer"
          aria-label={previewLabel}
          className="relative block aspect-video overflow-hidden border-b border-border bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
        >
          <Image
            src={project.imgSrc}
            alt={project.imgAlt || project.title}
            width={350}
            height={200}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            draggable={false}
          />
        </a>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-base font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <Badge key={`${project.title}-${tech}`} variant="tech">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
            {project.demo && (
              <a
                href={ensureHttps(project.demo)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand-strong transition-colors hover:text-brand"
              >
                Live demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
