import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const footerNav = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com/YheChen", label: "GitHub", icon: Github },
  {
    href: "https://linkedin.com/in/yanzhenchen",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "mailto:career@yanzhenchen.ca", label: "Email", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-muted/20">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center">
              <span className="font-semibold tracking-tight">Yanzhen Chen</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Computer Science, Mathematics &amp; Statistics student at the
              University of Toronto — building software, machine learning, and
              thoughtful products.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="eyebrow">Navigate</span>
            {footerNav.map(({ id, label }) => (
              <Link
                key={id}
                href={`#${id}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="eyebrow">Connect</span>
            <div className="flex items-center gap-2">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Yanzhen Chen. All rights reserved.
          </p>
          <div data-webring="ca" data-member="yanzhen-chen"></div>
          <p className="font-mono text-xs text-muted-foreground">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
