// components/Leadership.tsx
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
          <CardHeader>
            <CardTitle>VP External Relations</CardTitle>
            <CardDescription>
              CSSU, University of Toronto | May 2024 – April 2026
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
              <li>
                Secured $9,000+ in sponsorships from Google, Dayforce, and
                others
              </li>
              <li>
                Organized resume panels and increased event attendance by 30%
              </li>
              <li>
                Ran a career fair with 300+ student attendees and four companies
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
