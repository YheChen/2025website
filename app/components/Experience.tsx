import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as motion from "motion/react-client";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-[980px] py-8 md:py-12 scroll-mt-16"
    >
      <motion.div
        className="flex flex-col gap-6"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
          Experience
        </h2>
        <Card>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4">
            {/* IQBank Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/iqbank.webp"
                alt="IQBank Logo"
                width={64}
                height={64}
                className="rounded-md object-contain"
                draggable="false"
              />
            </div>
            {/* Card text content */}
            <div className="flex-grow">
              <CardHeader className="p-0 pb-2">
                <CardTitle>Software Engineer</CardTitle>
                <CardDescription>
                  IQBank | January 2026 - Present
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 pt-2">
                <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                  <li>
                    Developing and maintaining production-grade frontend
                    features for an exam preparation platform under the
                    supervision of Prof. Jack Sun, using React to support
                    question banks, practice flows, and discussions.
                  </li>
                  <li>
                    Implementing data-driven UI flows by integrating REST APIs
                    for question delivery, submissions, discussions, and study
                    analytics, with robust handling of asynchronous state,
                    loading, and error conditions.
                  </li>
                  <li>
                    Contributing to frontend architecture decisions including
                    component abstraction, state management patterns, and
                    reusable UI primitives, enabling rapid iteration while
                    maintaining long-term code quality and scalability.
                  </li>
                </ul>
              </CardContent>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4">
            {/* UofT Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/uoftcslogo.webp"
                alt="University of Toronto Logo"
                width={64}
                height={64}
                className="rounded-md object-contain"
                draggable="false"
              />
            </div>
            {/* Card text content */}
            <div className="flex-grow">
              <CardHeader className="p-0 pb-2">
                <CardTitle>Teaching Assistant</CardTitle>
                <CardDescription>
                  University of Toronto, Department of Computer Science |
                  January 2026 - Present
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 pt-2">
                <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                  <li>
                    CSC165H1: Mathematical Expression and Reasoning for Computer
                    Science - (Winter 2026)
                  </li>
                </ul>
              </CardContent>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4">
            {/* Career center Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/EngCareerCentre.webp"
                alt="Eng Career Centre Logo"
                width={64}
                height={64}
                className="rounded-md object-contain"
                draggable="false"
              />
            </div>
            {/* Card text content */}
            <div className="flex-grow">
              <CardHeader className="p-0 pb-2">
                <CardTitle>Educational Technology & UX Developer</CardTitle>
                <CardDescription>
                  University of Toronto, Faculty of Applied Science, Engineering
                  Career Centre | May 2025 - Present
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 pt-2">
                <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                  <li>
                    Developed digital learning platforms and UI/UX improvements
                    for the PEY Co-op Hub, used by 5,000+ engineering PEY
                    students, increasing content engagement by 25% through
                    enhanced navigation and accessibility.
                  </li>
                  <li>
                    Designed and implemented a structured process for Quercus
                    shell creation, reducing setup time by 70% and identifying
                    key inefficiencies in existing workflows.
                  </li>
                  <li>
                    Established a reliable backup system for 10+ preparatory and
                    co-op program shells, streamlining instructor workflows and
                    reducing content recovery time by 90% despite automation
                    limitations in Canvas.
                  </li>
                  <li>
                    Earned an 8-month extension beyond the initial 4-month term
                    in recognition of excellent performance.
                  </li>
                </ul>
              </CardContent>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4">
            {/* UTMIST Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/UTMIST_logo.webp"
                alt="UTMIST Logo"
                width={64}
                height={64}
                className="rounded-md object-contain"
                draggable="false"
              />
            </div>
            {/* Card text content */}
            <div className="flex-grow">
              <CardHeader className="p-0 pb-2">
                <CardTitle>Software Engineer</CardTitle>
                <CardDescription>
                  University of Toronto Machine Intelligence Team | May 2025 -
                  Present
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 pt-2">
                <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                  <li>
                    Built responsive UI components using React and Tailwind,
                    improving frontend usability and reducing bounce rate.
                  </li>
                  <li>
                    Optimized backend APIs with caching and async handlers,
                    reducing load time by 30% for 500+ monthly users.
                  </li>
                  <li>
                    Used GitHub Actions to build CI/CD pipelines for automated
                    testing, linting, and production deployment.
                  </li>
                  <li>
                    Wrote and maintained internal documentation for both
                    frontend components and backend API usage to ensure
                    long-term maintainability and team onboarding.
                  </li>
                </ul>
              </CardContent>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
