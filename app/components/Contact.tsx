"use client";

import { type ComponentType } from "react";
import Link from "next/link";
import { Mail, Github, Linkedin, MapPin, CheckCircle2, Send } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type ContactLink = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const contactLinks: ContactLink[] = [
  {
    icon: Mail,
    label: "Email",
    value: "career@yanzhenchen.ca",
    href: "mailto:career@yanzhenchen.ca",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/YheChen",
    href: "https://github.com/YheChen",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yanzhenchen",
    href: "https://linkedin.com/in/yanzhenchen",
    external: true,
  },
  {
    icon: FaDiscord,
    label: "Discord",
    value: "@chen7",
  },
];

export default function Contact() {
  const [state, handleSubmit] = useForm("xgvaqqzk");

  return (
    <Section
      id="contact"
      className="relative isolate overflow-hidden border-t border-border/60"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-[-30%] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full glow-brand opacity-40 blur-2xl" />
      </div>

      <SectionHeading
        index="07"
        label="Contact"
        title="Let's build something together."
        description="Have an opportunity, a project, or just want to say hello? Drop me a message and I'll get back to you as soon as I can."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Form */}
        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
            {state.succeeded ? (
              <div className="flex h-full min-h-[20rem] flex-col items-center justify-center gap-4 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Message sent</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Thanks for reaching out — I&apos;ll be in touch soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-xs text-destructive"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-xs text-destructive"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell me a little about what you have in mind…"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-xs text-destructive"
                  />
                </div>

                <Button
                  type="submit"
                  variant="brand"
                  size="lg"
                  disabled={state.submitting}
                  className="w-full"
                >
                  {state.submitting ? (
                    "Sending…"
                  ) : (
                    <>
                      Send message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </Reveal>

        {/* Contact info */}
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <div>
              <h3 className="eyebrow mb-5">Reach me directly</h3>
              <ul className="flex flex-col gap-2">
                {contactLinks.map(({ icon: Icon, label, value, href, external }) => {
                  const content = (
                    <>
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors group-hover:border-brand/40 group-hover:text-brand">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex flex-col">
                        <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                          {label}
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {value}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <li key={label}>
                      {href ? (
                        <Link
                          href={href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noreferrer" : undefined}
                          className="group flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-accent"
                        >
                          {content}
                        </Link>
                      ) : (
                        <div className="group flex items-center gap-3 rounded-xl p-2">
                          {content}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-auto grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[0.7rem] uppercase tracking-wider text-brand-strong">
                  Location
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-foreground/90">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  Toronto, Ontario, Canada
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[0.7rem] uppercase tracking-wider text-brand-strong">
                  Availability
                </span>
                <span className="text-sm text-foreground/90">
                  Open to internships & project collaborations
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
