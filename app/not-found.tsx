import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import AsciiArt from "./components/AsciiArt";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-grid mask-radial opacity-60" />
        <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full glow-brand opacity-40 blur-2xl" />
        <AsciiArt className="absolute left-1/2 top-10 -translate-x-1/2 text-base text-foreground/[0.06] sm:text-xl" />
      </div>

      <span className="eyebrow mb-6">
        <span className="text-brand">404</span>
        <span aria-hidden className="h-px w-6 bg-border" />
        Page not found
      </span>
      <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
        This page took a wrong turn.
      </h1>
      <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
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
