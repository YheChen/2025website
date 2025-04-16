"use client";
import Link from "next/link";
import { Github, Linkedin, FileText } from "lucide-react";
import {
  Home,
  FolderKanban,
  BookOpen,
  GraduationCap,
  Briefcase,
  Mail,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    { id: "about", icon: <Home className="w-5 h-5" /> },
    { id: "projects", icon: <FolderKanban className="w-5 h-5" /> },
    { id: "skills", icon: <BookOpen className="w-5 h-5" /> },
    { id: "education", icon: <GraduationCap className="w-5 h-5" /> },
    { id: "experience", icon: <Briefcase className="w-5 h-5" /> },
    { id: "contact", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Top Navbar */}
      <header
        className={`sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ${
          isMenuOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex justify-between items-center h-20 px-2 md:px-4 text-lg w-full max-w-7xl mx-auto">
          <div className="mr-4 hidden md:flex items-center space-x-6">
            <Link href="/" className="flex items-center">
              <span className="font-bold">Yanzhen Chen</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {items.map(({ id }) => (
                <Link
                  key={id}
                  href={`/${id}`}
                  className="transition-colors hover:text-foreground/80"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile */}
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <nav className="flex items-center justify-between md:hidden w-full">
                {/* Hamburger Menu on the left */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
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

                {/* Name */}
                <Link href="/" className="flex items-center space-x-2">
                  <span className="font-bold whitespace-nowrap text-[0.95rem] md:text-lg">
                    Yanzhen Chen
                  </span>
                </Link>
              </nav>
            </div>

            {/* Icons */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop with fade-in */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 w-64 h-full bg-background z-50 shadow-lg p-6 flex flex-col justify-between rounded-br-xl"
            >
              {/* Top: Close + Nav Links */}
              <div className="flex flex-col gap-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="self-end text-sm text-muted-foreground"
                >
                  Close ✕
                </button>

                {items.map(({ id, icon }) => (
                  <Link
                    key={id}
                    href={`/${id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-lg font-semibold rounded-md hover:bg-muted hover:text-foreground transition-colors"
                  >
                    {icon}
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </Link>
                ))}
              </div>

              {/* Bottom: Copyright */}
              <div className="px-4">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Yanzhen Chen
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
