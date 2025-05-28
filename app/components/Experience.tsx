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
                <CardTitle>Full Stack Infrastructure Developer</CardTitle>
                <CardDescription>
                  University of Toronto Machine Intelligence Team | May 2025 –
                  Present
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 pt-2">
                <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                  <li>
                    Recently appointed to the Infrastructure team to contribute
                    to developing the UTMIST website and to design user
                    interfaces for the Computing Platform Team’s projects.
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
                  Career Centre | May 2025 – Present
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 pt-2">
                <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                  <li>
                    Appointed to a hybrid Educational Technology and UX
                    Assistant role to develop skills in digital learning
                    platforms, UX improvement, and data-driven content design.
                  </li>
                </ul>
              </CardContent>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4">
            {/* Fields Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/Fields.webp"
                alt="Fields Logo"
                width={64}
                height={64}
                className="rounded-md object-contain"
                draggable="false"
              />
            </div>
            {/* Card text content */}
            <div className="flex-grow">
              <CardHeader className="p-0 pb-2">
                <CardTitle>Workshop Facilitator</CardTitle>
                <CardDescription>
                  The Fields Institute For Research In Mathematical Sciences |
                  September 2024 – April 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 pt-2">
                <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                  <li>
                    The Fields Trip program gives schools across Ontario the
                    chance to bring students to the Department of Mathematics
                    for a 75-minute math workshop. These sessions introduce
                    students to mathematical concepts not typically covered in
                    the standard curriculum.
                  </li>
                  <li>
                    As a workshop facilitator, I prepare lesson plans ahead of
                    time and lead students through the chosen topic.
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
