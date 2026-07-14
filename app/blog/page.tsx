import type { Metadata } from "next";
import { ArrowUpRight, PenLine } from "lucide-react";

import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import PostCard from "../components/PostCard";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing and notes from Yanzhen Chen on software, systems, and the things I build.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <Section className="py-16 md:py-20">
      <SectionHeading
        label="Blog"
        title="Writing & notes."
        description="Thoughts on software, systems, and the things I build. Occasional deeper dives."
      />

      {posts.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {posts.map((post, index) => (
            <PostCard key={post.slug} post={post} delay={(index % 2) * 0.08} />
          ))}
        </div>
      ) : (
        <Reveal className="mt-12">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card px-6 py-16 text-center shadow-soft">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-brand">
              <PenLine className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-lg font-semibold">No posts yet</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                First post is coming soon. Check back shortly.
              </p>
            </div>
          </div>
        </Reveal>
      )}

      {/* Eats Toronto cross-link */}
      <Reveal delay={0.1} className="mt-12">
        <a
          href={siteConfig.eats}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-soft-lg"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-background text-2xl">
              🍜
            </span>
            <div>
              <h3 className="font-semibold tracking-tight text-foreground">
                Eats Toronto
              </h3>
              <p className="mt-0.5 text-pretty text-sm text-muted-foreground">
                My separate blog on restaurants and food around the city.
              </p>
            </div>
          </div>
          <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-brand" />
        </a>
      </Reveal>
    </Section>
  );
}
