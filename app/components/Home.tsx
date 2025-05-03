// components/Home.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <Image
          src="/YanzhenSquare.webp?height=250&width=250"
          alt="Yanzhen Chen"
          width={250}
          height={250}
          className="rounded-full border-4 border-muted"
        />
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Yanzhen Chen
        </h1>
        <h2 className="text-xl text-muted-foreground sm:text-2xl">
          Computer Science, Mathematics, Statistics Student
        </h2>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          University of Toronto student passionate about software development,
          machine learning, and creating innovative solutions.
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-4 min-[400px]:flex-row">
        <Link href="#contact">
          <Button>
            Contact Me
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
        <Link href="#projects">
          <Button variant="outline">
            View Projects
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
