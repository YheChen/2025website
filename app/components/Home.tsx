// components/Home.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { inView, animate } from "motion"; // <-- core utilities
import * as motion from "motion/react-client"; // <-- React component wrapper
import { useEffect, useRef } from "react";

export default function Home() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current || !textRef.current) return;

    inView(imageRef.current, (el) => {
      animate(el, { opacity: 1, scale: [0.8, 1] }, { duration: 0.6 });
      return () => animate(el, { opacity: 0, scale: 0.8 });
    });

    inView(textRef.current, (el) => {
      animate(el, { opacity: 1, y: [20, 0] }, { duration: 0.6 });
      return () => animate(el, { opacity: 0, y: 20 });
    });
  }, []);

  return (
    <section
      id="home"
      className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div ref={imageRef} style={{ opacity: 0 }}>
          <Image
            src="/YanzhenSquare.webp?height=250&width=250"
            alt="Yanzhen Chen"
            width={250}
            height={250}
            className="rounded-full border-4 border-muted"
            draggable="false"
          />
        </div>

        <div ref={textRef} style={{ opacity: 0 }}>
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
      </div>
      <motion.div
        className="mt-10 flex flex-col gap-4 min-[400px]:flex-row"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
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
      </motion.div>
    </section>
  );
}
