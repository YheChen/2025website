import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Code,
  Server,
  Database,
  Terminal,
  Cloud,
  BarChart,
  FileText,
  Globe,
  GitBranch,
  Smartphone,
  Layers,
  PenTool,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4 md:px-6">
          <div className="mr-4 hidden md:flex items-center space-x-6">
            <Link href="/" className="flex items-center">
              <span className="font-bold">Yanzhen Chen</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="#about"
                className="transition-colors hover:text-foreground/80"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="transition-colors hover:text-foreground/80"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="transition-colors hover:text-foreground/80"
              >
                Skills
              </Link>
              <Link
                href="#education"
                className="transition-colors hover:text-foreground/80"
              >
                Education
              </Link>
              <Link
                href="#contact"
                className="transition-colors hover:text-foreground/80"
              >
                Contact
              </Link>
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
      <main className="container py-6 md:py-12">
        <section
          id="hero"
          className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20"
        >
          <div className="flex flex-col items-center gap-4 text-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Yanzhen Chen"
              width={150}
              height={150}
              className="rounded-full border-4 border-muted"
            />
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Yanzhen Chen
            </h1>
            <h2 className="text-xl text-muted-foreground sm:text-2xl">
              Mathematics & Statistics Student
            </h2>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              University of Toronto student passionate about software
              development, data science, and creating innovative solutions.
            </p>
          </div>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Link href="#contact">
              <Button>
                Contact Me
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#projects">
              <Button variant="outline">
                View Projects
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-[980px] py-8 md:py-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl">
              About Me
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <p className="text-muted-foreground">
                  I'm a Mathematics and Statistics student at the University of
                  Toronto with a minor in Computer Science. I have a strong
                  foundation in programming principles and a passion for
                  building efficient, user-friendly applications.
                </p>
                <p className="text-muted-foreground">
                  My academic journey combines mathematical rigor with practical
                  software development skills. I'm particularly interested in
                  data science, web development, and creating innovative
                  solutions that solve real-world problems.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-muted-foreground">
                  Outside of academics, I'm actively involved in the Computer
                  Science Student Union as Vice President of External Relations,
                  where I secure sponsorships and organize events to enhance
                  professional development opportunities for students.
                </p>
                <p className="text-muted-foreground">
                  I'm currently seeking internship opportunities where I can
                  apply my skills in software development, data analysis, and
                  project management to contribute to meaningful projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-[980px] py-8 md:py-12">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl">
              Projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>CSSU Website</CardTitle>
                  <CardDescription>
                    Computer Science Student Union Website
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="CSSU Website"
                      width={350}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>Next.js</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Tailwind</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                    <Link href="#" target="_blank" rel="noreferrer">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Gyroscopic Authenticator</CardTitle>
                  <CardDescription>
                    Phone tilt-based authentication system
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="Gyroscopic Authenticator"
                      width={350}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>Next.js</Badge>
                    <Badge>React Native</Badge>
                    <Badge>Firebase</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                    <Link href="#" target="_blank" rel="noreferrer">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Movie Review Platform</CardTitle>
                  <CardDescription>
                    Java-based review system with MongoDB
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="Movie Review Platform"
                      width={350}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>Java</Badge>
                    <Badge>JavaSwing</Badge>
                    <Badge>MongoDB</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                    <Link href="#" target="_blank" rel="noreferrer">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Player Profile Analyzer</CardTitle>
                  <CardDescription>
                    Game performance metrics analysis tool
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="Player Profile Analyzer"
                      width={350}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>Next.js</Badge>
                    <Badge>React.js</Badge>
                    <Badge>TypeScript</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                    <Link href="#" target="_blank" rel="noreferrer">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Health Record Summarizer</CardTitle>
                  <CardDescription>
                    AI-powered medical record analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="Health Record Summarizer"
                      width={350}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>React.js</Badge>
                    <Badge>Python</Badge>
                    <Badge>Code Llama</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                    <Link href="#" target="_blank" rel="noreferrer">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Link
                href="https://github.com/YheChen"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline">
                  View More on GitHub
                  <Github className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-[980px] py-8 md:py-12">
          <div className="flex flex-col gap-10">
            <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl text-center">
              Skills
            </h2>

            {/* Languages Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-center">Languages</h3>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl flex items-center justify-center">
                      PY
                    </span>
                  </div>
                  <span className="text-sm">Python</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl flex items-center justify-center">
                      JV
                    </span>
                  </div>
                  <span className="text-sm">Java</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl flex items-center justify-center">
                      C
                    </span>
                  </div>
                  <span className="text-sm">C</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl flex items-center justify-center">
                      JS
                    </span>
                  </div>
                  <span className="text-sm">JavaScript</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl flex items-center justify-center">
                      TS
                    </span>
                  </div>
                  <span className="text-sm">TypeScript</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <Globe className="h-8 w-8 flex items-center justify-center" />
                  </div>
                  <span className="text-sm">HTML/CSS</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <Database className="h-8 w-8 flex items-center justify-center" />
                  </div>
                  <span className="text-sm">MySQL</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl flex items-center justify-center">
                      R
                    </span>
                  </div>
                  <span className="text-sm">R</span>
                </div>
              </div>
            </div>

            {/* Frameworks and Libraries Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-center">
                Frameworks and Libraries
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl flex items-center justify-center">
                      N
                    </span>
                  </div>
                  <span className="text-sm">Next.js</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <Server className="h-8 w-8 flex items-center justify-center" />
                  </div>
                  <span className="text-sm">Node.js</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl flex items-center justify-center">
                      EX
                    </span>
                  </div>
                  <span className="text-sm">Express</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <Smartphone className="h-8 w-8 flex items-center justify-center" />
                  </div>
                  <span className="text-sm">Expo</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <Smartphone className="h-8 w-8 flex items-center justify-center" />
                  </div>
                  <span className="text-sm">React Native</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl flex items-center justify-center">
                      TW
                    </span>
                  </div>
                  <span className="text-sm">Tailwind</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <Code className="h-8 w-8 flex items-center justify-center" />
                  </div>
                  <span className="text-sm">React.js</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <BarChart className="h-8 w-8 flex items-center justify-center" />
                  </div>
                  <span className="text-sm">Pandas</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl flex items-center justify-center">
                      NP
                    </span>
                  </div>
                  <span className="text-sm">NumPy</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl flex items-center justify-center">
                      PT
                    </span>
                  </div>
                  <span className="text-sm">PyTorch</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <Layers className="h-8 w-8 flex items-center justify-center" />
                  </div>
                  <span className="text-sm">Java Swing</span>
                </div>
              </div>
            </div>

            {/* Tools Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-center">
                Developer Tools
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <PenTool className="h-8 w-8 flex items-center justify-center" />
                  </div>
                  <span className="text-sm">Vim</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <Database className="h-8 w-8 flex items-center justify-center" />
                  </div>
                  <span className="text-sm">MongoDB</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <Cloud className="h-8 w-8 flex items-center justify-center" />
                  </div>
                  <span className="text-sm">Firebase</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl flex items-center justify-center">
                      GC
                    </span>
                  </div>
                  <span className="text-sm">Google Colab</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <Terminal className="h-8 w-8 flex items-center justify-center" />
                  </div>
                  <span className="text-sm">Jupyter</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl flex items-center justify-center">
                      SAS
                    </span>
                  </div>
                  <span className="text-sm">SAS Studio</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <GitBranch className="h-8 w-8 flex items-center justify-center" />
                  </div>
                  <span className="text-sm">Git</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl flex items-center justify-center">
                      MD
                    </span>
                  </div>
                  <span className="text-sm">Markdown</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="mx-auto max-w-[980px] py-8 md:py-12">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl">
              Education
            </h2>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex flex-col gap-1">
                    <CardTitle>
                      HBSc. Mathematics Major and Statistics Major, Computer
                      Science Minor
                    </CardTitle>
                    <CardDescription>
                      University of Toronto | Expected Graduation: May 2026
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mt-4">
                    <h4 className="font-medium">Relevant Coursework:</h4>
                    <ul className="mt-2 grid gap-1 text-sm text-muted-foreground">
                      <li>• Software Tools and Systems Programming</li>
                      <li>• Software Design</li>
                      <li>• Theory of Computation</li>
                      <li>• Intro to Computer Science</li>
                      <li>• Intro to Statistical Reasoning and Data Science</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="leadership"
          className="mx-auto max-w-[980px] py-8 md:py-12"
        >
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl">
              Leadership Experience
            </h2>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex flex-col gap-1">
                    <CardTitle>Vice President of External Relations</CardTitle>
                    <CardDescription>
                      Computer Science Student Union | May 2024 - April 2026
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="mt-2 grid gap-2 text-sm text-muted-foreground">
                    <li>
                      • Secured $9,000 in sponsorships by establishing
                      collaborations with Google, Dayforce, Manulife and SOTI.
                    </li>
                    <li>
                      • Enhanced professional development opportunities and
                      increased union event attendance by 30% through organizing
                      information sessions and resume review panels.
                    </li>
                    <li>
                      • Successfully organized a career fair featuring four
                      companies with 300 student attendees, facilitating
                      valuable networking and recruitment opportunities.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

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
                    Fill out the form and I'll get back to you as soon as
                    possible.
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
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
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
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
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
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
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
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-muted-foreground"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
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
                      Open to internship opportunities and project
                      collaborations
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex justify-center items-center">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            © {new Date().getFullYear()} Yanzhen Chen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
