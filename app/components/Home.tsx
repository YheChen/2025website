import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import AsciiArt from "./AsciiArt";
import Reveal from "./Reveal";

const facts = ["Computer Science", "Mathematics", "Statistics"];

export default function Home() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden scroll-mt-24"
    >
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />
        <div className="absolute left-1/2 top-[-12%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full glow-brand opacity-60 blur-2xl" />
        <AsciiArt className="absolute right-4 top-24 hidden text-[0.7rem] leading-[0.9] text-foreground/[0.05] sm:block lg:right-16 lg:text-base" />
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-5 py-24 text-center sm:px-6 md:py-32 lg:py-36">
        <div className="flex flex-col items-center gap-6">
          {/* Avatar */}
          <Reveal delay={0} className="relative">
            <div className="absolute -inset-3 rounded-full glow-brand opacity-50 blur-xl" />
            <div className="relative rounded-full bg-gradient-to-br from-brand/60 via-border to-transparent p-[2px] shadow-soft-lg">
              <Image
                src="/YanzhenSquare.webp"
                alt="Yanzhen Chen"
                width={144}
                height={144}
                priority
                className="h-32 w-32 rounded-full border-4 border-background object-cover sm:h-36 sm:w-36"
                draggable={false}
              />
            </div>
          </Reveal>

          {/* Status pill */}
          <Reveal delay={0.08}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to internship opportunities
            </span>
          </Reveal>

          {/* Heading */}
          <Reveal delay={0.16}>
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-gradient">Yanzhen Chen</span>
            </h1>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground sm:text-base">
              Computer Science · Mathematics · Statistics @ UofT
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              University of Toronto student passionate about software
              development, system design, and creating innovative solutions that
              solve real-world problems.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.36} className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button variant="brand" size="lg" asChild>
              <Link href="#contact">
                Contact me
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#projects">View projects</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </Reveal>

          {/* Meta row */}
          <Reveal
            delay={0.44}
            className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-xs text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              Toronto, ON
            </span>
            {facts.map((fact) => (
              <span key={fact} className="inline-flex items-center gap-3">
                <span aria-hidden className="text-border">
                  /
                </span>
                {fact}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
