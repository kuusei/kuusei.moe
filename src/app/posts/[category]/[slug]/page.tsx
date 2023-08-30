import { Pencil } from "lucide-react";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";

import { getAllPostNames, getPostFilePaths, getPostFrontmatter, getPostSlug, POSTS_PATH } from "@/lib/posts";
import { MdxComponents } from "@/components/mdx";

export async function generateStaticParams() {
  const posts = await getAllPostNames();
  const params = posts.map((post) => {
    const [category, slug] = getPostSlug(post);
    return {
      category,
      slug,
    };
  });
  return params;
}

async function getPost(category: string, slug: string) {
  const { code } = await bundleMDX({
    file: getPostFilePaths(category, slug),
    cwd: POSTS_PATH,
  });

  return code;
}

export default async function Page({ params }: { params: { category: string; slug: string } }) {
  const { category, slug } = params;
  const code = await getPost(category, slug);
  const frontmatter = await getPostFrontmatter(`posts/${category}/${slug}.mdx`);
  const MDX = getMDXComponent(code);

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 flex items-center text-center">
        <div className="text-2xl">{frontmatter.title}</div>
        {frontmatter.draft ? <Pencil size={12} className="ml-2" /> : ""}
      </h1>
      <div>
        {frontmatter.tags?.map((tag) => (
          <span
            key={tag}
            className="px-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="text-sm">{frontmatter.date}</span>
      <article className="markdown-body my-10 w-auto lg:max-w-[1000px]">
        <MDX components={MdxComponents} />
      </article>
    </div>
  );
}
