import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeShiki from "@shikijs/rehype";

import { Badge } from "@/components/ui/badge";
import { getAllSlugs, getPostBySlug, formatDate } from "@/lib/blog";
import { mdxComponents } from "../mdx-components";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto w-full max-w-2xl px-5 py-16 sm:px-6 md:py-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        All posts
      </Link>

      <header className="mt-8 border-b border-border pb-8">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        {post.description && (
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {post.description}
          </p>
        )}
        {post.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="tech">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </header>

      <div className="prose mt-10 max-w-none prose-headings:scroll-mt-24 prose-pre:rounded-xl prose-pre:border prose-pre:border-border prose-pre:text-[0.85em] prose-img:rounded-xl prose-img:border prose-img:border-border">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                rehypeSlug,
                [rehypeShiki, { theme: "github-dark-dimmed" }],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
