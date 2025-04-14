// components/Projects.tsx
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "CSSU Website",
    description: "Computer Science Student Union Website",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    imgAlt: "CSSU Website",
    imgSrc: "/placeholder.svg?height=200&width=350",
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "Gyroscopic Authenticator",
    description: "Phone tilt-based authentication system",
    tech: ["Next.js", "React Native", "Firebase"],
    imgAlt: "Gyroscopic Authenticator",
    imgSrc: "/placeholder.svg?height=200&width=350",
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "Movie Review Platform",
    description: "Java-based review system with MongoDB",
    tech: ["Java", "JavaSwing", "MongoDB"],
    imgAlt: "Movie Review Platform",
    imgSrc: "/placeholder.svg?height=200&width=350",
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "Player Profile Analyzer",
    description: "Game performance metrics analysis tool",
    tech: ["Next.js", "React.js", "TypeScript"],
    imgAlt: "Player Profile Analyzer",
    imgSrc: "/placeholder.svg?height=200&width=350",
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "Health Record Summarizer",
    description: "AI-powered medical record analysis",
    tech: ["React.js", "Python", "Code Llama"],
    imgAlt: "Health Record Summarizer",
    imgSrc: "/placeholder.svg?height=200&width=350",
    github: "https://github.com",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[980px] py-8 md:py-12">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video overflow-hidden rounded-md">
                  <Image
                    src={project.imgSrc}
                    alt={project.imgAlt}
                    width={350}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <Badge key={idx}>{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex gap-2">
                  <Link href={project.github} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </Link>
                  <Link href={project.demo} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="https://github.com/YheChen"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="outline">
              View More on GitHub
              <Github className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
