import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO date string, e.g. "2026-07-11". */
  date: string;
  tags: string[];
  draft: boolean;
  readingTime: string;
};

export type Post = PostMeta & { content: string };

function readPostFile(fileName: string): Post {
  const slug = fileName.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    description: typeof data.description === "string" ? data.description : "",
    date: typeof data.date === "string" ? data.date : "1970-01-01",
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft: data.draft === true,
    readingTime: readingTime(content).text,
    content,
  };
}

/** True in production builds — used to hide drafts from the live site. */
const isProd = process.env.NODE_ENV === "production";

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => {
      // Strip the heavy content field from the list view.
      const { content: _content, ...meta } = readPostFile(file);
      void _content;
      return meta;
    })
    .filter((post) => !isProd || !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const mdx = path.join(BLOG_DIR, `${slug}.mdx`);
  const md = path.join(BLOG_DIR, `${slug}.md`);
  const file = fs.existsSync(mdx) ? `${slug}.mdx` : fs.existsSync(md) ? `${slug}.md` : null;
  if (!file) return null;

  const post = readPostFile(file);
  if (isProd && post.draft) return null;
  return post;
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
