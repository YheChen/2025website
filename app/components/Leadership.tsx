import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-[980px] py-8 md:py-12">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
          Leadership Experience
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
              />
            </div>

            {/* Card text content */}
            <div className="flex-grow">
              <CardHeader className="p-0 pb-2">
                <CardTitle>VP External Relations</CardTitle>
                <CardDescription>
                  Computer Science Student Union, University of Toronto | May
                  2024 – April 2026
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 pt-2">
                <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                  <li>
                    Secured $9,000+ in sponsorships from Google, Dayforce, and
                    others
                  </li>
                  <li>
                    Organized resume panels and increased event attendance by
                    30%
                  </li>
                  <li>
                    Ran a career fair with 300+ student attendees and four
                    companies
                  </li>
                </ul>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
