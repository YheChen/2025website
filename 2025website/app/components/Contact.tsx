// components/Contact.tsx
import Link from "next/link";
import { Mail, Github, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[980px] py-8 md:py-12">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl">
          Contact Me
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                Fill out the form and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    placeholder="Your name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Feel free to reach out through any of these channels.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>yzc.chen@mail.utoronto.ca</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <Link
                    href="https://github.com/YheChen"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    github.com/YheChen
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <Link
                    href="https://linkedin.com/in/yanzhenchen"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    linkedin.com/in/yanzhenchen
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <Link
                    href="https://yanzhenchen.ca"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    yanzhenchen.ca
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <span>(825)-747-1417</span>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-medium">Location</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Toronto, Ontario, Canada
                </p>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-medium">Availability</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Open to internship opportunities and project collaborations
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
