import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { formatDate, type PostMeta } from "@/lib/blog";
import Reveal from "./Reveal";

type PostCardProps = {
  post: PostMeta;
  delay?: number;
};

export default function PostCard({ post, delay = 0 }: PostCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-soft-lg">
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTime}</span>
          </div>

          <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand">
            {post.title}
          </h3>
          <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
            {post.description}
          </p>

          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="tech">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-strong">
            Read post
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </article>
      </Link>
    </Reveal>
  );
}
