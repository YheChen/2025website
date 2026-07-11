import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, PenLine } from "lucide-react";

import { Button } from "@/components/ui/button";
import AsciiArt from "../components/AsciiArt";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing and notes from Yanzhen Chen. Coming soon.",
};

export default function BlogPage() {
  return (
    <main className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-radial opacity-60" />
        <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full glow-brand opacity-40 blur-2xl" />
        <AsciiArt className="absolute left-1/2 top-10 -translate-x-1/2 text-base text-foreground/[0.06] sm:text-xl" />
      </div>

      <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card text-brand shadow-soft">
        <PenLine className="h-6 w-6" />
      </span>

      <span className="eyebrow mb-4">
        <span className="text-brand">Blog</span>
        <span aria-hidden className="h-px w-6 bg-border" />
        Work in progress
      </span>
      <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
        Coming soon.
      </h1>
      <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
        I&rsquo;m putting together a space for writing and notes on software,
        systems, and whatever I&rsquo;m building. Check back shortly.
      </p>
      <Button variant="brand" size="lg" asChild className="mt-8">
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>
      </Button>
    </main>
  );
}
