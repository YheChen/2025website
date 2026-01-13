// components/Education.tsx
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as motion from "motion/react-client";

export default function Education() {
  return (
    <section
      id="education"
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
          Education
        </h2>
        <Card>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4">
            {/* UofT Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/uoftlogo.webp"
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
                <CardTitle>
                  HBSc. Computer Science Major, Mathematics and Statistics
                  Minors with Co-op
                </CardTitle>
                <CardDescription>
                  University of Toronto — September 2023 - May 2027
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 pt-2">
                <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                  <li>CSC494: Computer Science Project: IQBank</li>
                  <li>
                    CSC490: Capstone Project: Machine Learning Engineering
                  </li>
                  <li>CSC485: Computational Linguistics</li>
                  <li>CSC413: Neural Networks and Deep Learning</li>
                  <li>CSC384: Intro to Artificial Intelligence</li>
                  <li>CSC373: Advanced Algorithms</li>
                  <li>CSC369: Operating Systems</li>
                  <li>CSC343: Introduction to Databases</li>
                  <li>CSC311: Intro to Machine Learning</li>
                  <li>CSC309: Programming on the Web</li>
                  <li>CSC263: Data Structures and Analysis</li>
                  <li>CSC258: Computer Organization</li>
                  <li>CSC209: Software Tools and Systems Programming</li>
                  <li>CSC207: Software Design</li>
                </ul>
              </CardContent>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
