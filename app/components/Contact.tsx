"use client";
import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as motion from "motion/react-client";
import { useEffect, useRef } from "react";
import { inView, animate } from "motion";
import { FaDiscord } from "react-icons/fa";

export default function Contact() {
  const [state, handleSubmit] = useForm("xgvaqqzk");
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
      id="contact"
      className="mx-auto max-w-[980px] py-8 md:py-12 scroll-mt-16"
    >
      <div className="flex flex-col gap-6">
        <motion.h2
          className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Send a message</CardTitle>
              <CardDescription>
                Fill in the form and I'll get back to you as soon as I am
                available.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {state.succeeded ? (
                <p className="text-green-600 text-sm">
                  Thanks for your message!
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
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
                      name="email"
                      required
                      placeholder="Your email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
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
                      name="message"
                      required
                      placeholder="Your message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <Button type="submit" disabled={state.submitting}>
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
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
                  <Link
                    href="mailto:career@yanzhenchen.ca"
                    className="hover:underline"
                  >
                    career@yanzhenchen.ca
                  </Link>
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
                  <FaDiscord className="h-5 w-5 text-muted-foreground" />
                  <span>@chen7</span>
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
        </motion.div>
      </div>
    </section>
  );
}
