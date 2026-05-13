import path from "path";
import fs from "fs";
import matter from "gray-matter";
import type { BlogPost } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((file) => {
    const slug = file.replace(".mdx", "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      author: data.author || "JusBill Team",
      category: data.category || "General",
      readingTime: data.readingTime || "5 min read",
      tags: data.tags || [],
      coverImage: data.coverImage || undefined,
    } as BlogPost;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): {
  meta: BlogPost;
  content: string;
} | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      author: data.author || "JusBill Team",
      category: data.category || "General",
      readingTime: data.readingTime || "5 min read",
      tags: data.tags || [],
      coverImage: data.coverImage || undefined,
    },
    content,
  };
}
