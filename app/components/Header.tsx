// components/Header.tsx
import Link from "next/link";
import { Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between items-center h-20 px-2 md:px-4 text-lg w-full max-w-7xl mx-auto">
        <div className="mr-4 hidden md:flex items-center space-x-6">
          <Link href="/" className="flex items-center">
            <span className="font-bold">Yanzhen Chen</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {["about", "projects", "skills", "education", "contact"].map(
              (id) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  className="transition-colors hover:text-foreground/80"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Link>
              )
            )}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <nav className="flex items-center justify-between md:hidden">
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold">Yanzhen Chen</span>
              </Link>
              <Button variant="ghost" size="icon">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/YheChen"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://linkedin.com/in/yanzhenchen"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="/resume.pdf" target="_blank" rel="noreferrer">
              <Button variant="ghost" className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <span>Resume</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
