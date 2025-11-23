import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as motion from "motion/react-client";

export default function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-[980px] py-8 md:py-12">
      <motion.div
        className="flex flex-col gap-6"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
          Leadership and Volunteer Experience
        </h2>
        <Card>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4">
            {/* CSSU Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/CSSULOGO.webp"
                alt="CSSU Logo"
                width={64}
                height={64}
                className="rounded-md object-contain"
                draggable="false"
              />
            </div>

            {/* Card text content */}
            <div className="flex-grow">
              <CardHeader className="p-0 pb-2">
                <CardTitle>Vice President of External Relations</CardTitle>
                <CardDescription>
                  Computer Science Student Union, Toronto, ON | May 2024 - Present
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 pt-2">
                <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                  <li>
                    Raised a total of $14,000 in sponsorships over two years by
                    securing collaborations with 9 companies.
                  </li>
                  <li>
                    Led a team of 3 associates to organize 8 professional
                    development events, including information sessions, resume
                    review panels, and networking mixers that connected over 700
                    students with industry representatives.
                  </li>
                  <li>
                    Hosted 2 annual career fairs with cumulative attendance of
                    over 1000 students, connecting them with employers for
                    recruitment opportunities.
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
                  The Fields Institute for Research in Mathematical Sciences |
                  September 2024 - April 2025
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
