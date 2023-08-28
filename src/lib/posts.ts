import fs from "fs/promises";
import path from "path";
import glob from "fast-glob";
import matter from "gray-matter";

// Cache posts and frontMatters
const cache = new Map<string, PostFrontmatter>();
let cachePosts: string[] | null = null;

// path
export const POSTS_PATH = path.join(process.cwd(), "posts");

export async function getAllPostNames() {
  const posts: string[] = cachePosts || (await glob(["posts/**/*.mdx"]));
  cachePosts = posts;
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
    return cache.get(post)!;
  }
  const rawMdx = await fs.readFile(path.resolve(process.cwd(), post), "utf8");
  const frontmatter = matter(rawMdx).data as PostFrontmatter;
  cache.set(post, frontmatter);
  return frontmatter;
}
