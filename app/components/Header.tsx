"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  FileText,
  User,
  FolderKanban,
  Code2,
  GraduationCap,
  Briefcase,
  Mail,
  Menu,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
] as const;

const socials = [
  { href: "https://github.com/YheChen", label: "GitHub", icon: Github },
  {
    href: "https://linkedin.com/in/yanzhenchen",
    label: "LinkedIn",
    icon: Linkedin,
  },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
          {/* Brand + desktop nav */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center"
              aria-label="Yanzhen Chen, home"
            >
              <span className="text-[0.95rem] font-semibold tracking-tight">
                Yanzhen Chen
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map(({ id, label }) => {
                const isActive = activeSection === id;
                return (
                  <Link
                    key={id}
                    href={`#${id}`}
                    className={cn(
                      "relative isolate rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navPill"
                        className="absolute inset-0 -z-10 rounded-full bg-accent"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <div className="hidden items-center gap-1 sm:flex">
              {socials.map(({ href, label, icon: Icon }) => (
                <Button key={label} variant="ghost" size="icon" asChild>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
            <Button
              variant="brand"
              size="sm"
              className="hidden sm:inline-flex"
              asChild
            >
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="md:hidden">
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.aside
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="fixed inset-y-0 left-0 z-50 flex w-[18rem] max-w-[82vw] flex-col border-r border-border bg-card p-6 shadow-soft-lg"
            >
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center"
                >
                  <span className="font-semibold tracking-tight">
                    Yanzhen Chen
                  </span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="mt-8 flex flex-col gap-1">
                {navItems.map(({ id, label, icon: Icon }) => (
                  <Link
                    key={id}
                    href={`#${id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    <Icon className="h-5 w-5 text-brand" />
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-4 pt-6">
                <Button variant="brand" className="w-full" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noreferrer">
                    <FileText className="h-4 w-4" />
                    Resume
                  </a>
                </Button>
                <div className="flex items-center gap-1">
                  {socials.map(({ href, label, icon: Icon }) => (
                    <Button key={label} variant="ghost" size="icon" asChild>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  © {new Date().getFullYear()} Yanzhen Chen
                </p>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
