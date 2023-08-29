import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";

import { getAllPostNames, getPostFilePaths, getPostSlug, POSTS_PATH } from "@/lib/posts";
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
  const Component = getMDXComponent(code);

  return (
    <div>
      <article className="markdown-body mb-20 mt-10 max-w-[750px]">
        PostId: {category} {slug}
        <Component components={MdxComponents} />
      </article>
    </div>
  );
}
