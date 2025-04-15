// components/Education.tsx
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-[980px] py-8 md:py-12 scroll-mt-16"
    >
      <div className="flex flex-col gap-6">
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
              />
            </div>

            {/* Card text content */}
            <div className="flex-grow">
              <CardHeader className="p-0 pb-2">
                <CardTitle>
                  HBSc. Mathematics & Statistics Majors, CS Minor
                </CardTitle>
                <CardDescription>
                  University of Toronto — Expected Graduation: May 2026
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 pt-2">
                <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                  <li>Software Tools and Systems Programming</li>
                  <li>Software Design</li>
                  <li>Theory of Computation</li>
                  <li>Intro to Computer Science</li>
                  <li>Intro to Statistical Reasoning and Data Science</li>
                </ul>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
