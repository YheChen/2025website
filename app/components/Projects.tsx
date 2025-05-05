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
    title: "Indoor Outdoor Classifier",
    description:
      "A Flask web app that classifies indoor vs. outdoor images using a custom-trained CNN with interactive visualizations, achieving 85% validation accuracy.",
    tech: ["Pytorch", "Flask", "Matplotlib", "scikit-learn"],
    imgAlt: "Indoor Outdoor Classifier",
    imgSrc: "/projects/IndoorDetectorThumbnail.webp?height=200&width=350",
    github: "https://github.com/YheChen/IndoorDetector",
    demo: "https://github.com/YheChen/IndoorDetector",
  },
  {
    title: "GuessUp",
    description: "Mobile charades game with custom prompts",
    tech: ["React Native", "TypeScript"],
    imgAlt: "GuessUp",
    imgSrc: "/projects/GuessUpThumbnail.webp?height=200&width=350",
    github: "https://github.com/YheChen/GuessUp",
    demo: "https://github.com/YheChen/GuessUp",
  },
  {
    title: "TorontoGuessr",
    description: "Test your knowledge of downtown Toronto",
    tech: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
    imgAlt: "TorontoGuessr",
    imgSrc: "/projects/TorontoGuessrThumbnail.webp?height=200&width=350",
    github: "https://github.com/YheChen/TorontoGuessr",
    demo: "https://torontoguessr.vercel.app/",
  },
  {
    title: "CSSU Website",
    description: "Website representing over 5000 CS students at UofT",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    imgAlt: "CSSU Website",
    imgSrc: "/projects/CSSUSiteThumbnail.webp?height=200&width=350",
    github: "https://github.com/cssu/cssu.ca",
    demo: "https://www.cssu.ca",
  },
  {
    title: "UofT Purity Test",
    description: "Test your purity level as a UofT student",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    imgAlt: "UofTPurity",
    imgSrc: "/projects/UoftPurityThumbnail.webp?height=200&width=350",
    github: "https://github.com/YheChen/UofTPurity",
    demo: "https://uoft-purity-test.vercel.app/",
  },
  {
    title: "Gyroscopic Authenticator",
    description: "Phone tilt-based authentication system",
    tech: ["Next.js", "React Native", "Firebase"],
    imgAlt: "Gyroscopic Authenticator",
    imgSrc: "/projects/TiltAuthThumbnail.webp?height=200&width=350",
    github: "https://github.com/YheChen/UofTHacks12",
    demo: "https://github.com/YheChen/UofTHacks12",
  },
  {
    title: "Movie Review Platform",
    description: "Java-based movie review system with MongoDB",
    tech: ["Java", "JavaSwing", "MongoDB"],
    imgAlt: "Movie Review Platform",
    imgSrc: "/projects/IMDBRipOffThumbnail.webp?height=200&width=350",
    github: "https://github.com/YheChen/IMDBRipOff",
    demo: "https://github.com/YheChen/IMDBRipOff",
  },
  {
    title: "Player Profile Analyzer",
    description: "Game performance metrics analysis tool for League of Legends",
    tech: ["Next.js", "React.js", "TypeScript"],
    imgAlt: "Player Profile Analyzer",
    imgSrc: "/projects/OPGGThumbnail.webp?height=200&width=350",
    github: "https://github.com/YheChen/leagueplayertrackerv2",
    demo: "https://leagueplayertrackerv2.vercel.app/",
  },
  {
    title: "Health Record Summarizer",
    description: "AI-powered medical record analysis tool",
    tech: ["React.js", "Python"],
    imgAlt: "Health Record Summarizer",
    imgSrc: "/projects/MedEasyThumbnail.webp?height=200&width=350",
    github: "https://github.com/gr125/treehacks24",
    demo: "https://devpost.com/software/medeasy-zqmd9g",
  },
  {
    title: "Pokedex Web App",
    description: "React-based Pokemon database",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    imgAlt: "Pokedex Web App",
    imgSrc: "/projects/PokedexThumbnail.webp?height=200&width=350",
    github: "https://github.com/YheChen/pokedex",
    demo: "https://pokedex-yhechen.vercel.app/",
  },
  {
    title: "Exam Countdown Timer",
    description: "Exams and midterms are coming soooner than you think",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    imgAlt: "ExamCountdown",
    imgSrc: "/projects/ExamCountdownThumbnail.webp?height=200&width=350",
    github: "https://github.com/YheChen/ExamCountdown",
    demo: "https://examcount-down.vercel.app/",
  },
  {
    title: "Grade Calculator",
    description: "Calculator for course grades that supports multiple courses",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    imgAlt: "Grade Calculator",
    imgSrc: "/projects/GradeCalculatorThumbnail.webp?height=200&width=350",
    github: "https://github.com/YheChen/GradeCalculator",
    demo: "https://multi-grade-calculator.vercel.app/",
  },
  {
    title: "Graphing Calculator",
    description: "Online graphing calculator",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    imgAlt: "Todo List",
    imgSrc: "/projects/GraphingCalcThumbnail.webp?height=200&width=350",
    github: "https://github.com/YheChen/GraphingCalculator",
    demo: "https://yz-graphing-calculator-app.vercel.app/",
  },
  {
    title: "Guess Who Game",
    description: "Fun guessing game with friends",
    tech: ["Next.js", "JavaScript", "Tailwind"],
    imgAlt: "Guess Who Game",
    imgSrc: "/projects/GuessWhoThumbnail.webp?height=200&width=350",
    github: "https://github.com/YheChen/GuessWho",
    demo: "https://cssuguesswho.vercel.app",
  },
  {
    title: "Todo List",
    description: "Simple task management app",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    imgAlt: "Todo List",
    imgSrc: "/projects/TodoListThumbnail.webp?height=200&width=350",
    github: "https://github.com/YheChen/chentodo",
    demo: "https://chentodo.vercel.app/",
  },
];

function ensureHttps(url: string) {
  return url.startsWith("http") ? url : `https://${url}`;
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-[980px] py-8 md:py-12 scroll-mt-16"
    >
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
                <div className="aspect-video overflow-hidden rounded-md group">
                  <Image
                    src={project.imgSrc}
                    alt={project.imgAlt}
                    width={350}
                    height={200}
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:translate-y-1"
                    draggable="false"
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
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                  <a
                    href={ensureHttps(project.demo)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </a>
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
              View all on GitHub
              <Github className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
