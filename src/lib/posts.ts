import glob from "fast-glob";
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

// Cache posts and frontMatters
const cache = new Map<string, any>();

// path
export const POSTS_PATH = path.join(process.cwd(), "posts");

export async function getAllPostNames() {
  const posts: string[] = cache.get("_") || (await glob(["posts/**/*.mdx"]));
  cache.set("_", posts);
  return posts;
}

export function getPostFilePaths(category: string, slug: string) {
  return path.resolve(POSTS_PATH, `${category}/${slug}.mdx`);
}

export function getPostSlug(post: string) {
  return post.replace(/^posts\/|\.mdx$/g, "").split("/");
}

export async function getPostFrontmatter(post: string): Promise<PostFrontmatter> {
  if (cache.has(post)) {
    return cache.get(post);
  }
  const rawMdx = await fs.readFile(path.resolve(process.cwd(), post), "utf8");
  const frontmatter = matter(rawMdx).data;
  cache.set(post, frontmatter);
  return frontmatter as PostFrontmatter;
}
