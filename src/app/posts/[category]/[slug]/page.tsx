import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";

import { getAllPostNames, getPostFilePaths, getPostSlug, POSTS_PATH } from "@/lib/posts";
import tagRenderer from "@/utils/tag-tenderer";

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

const components = {
  h1: tagRenderer("h1"),
  h2: tagRenderer("h2"),
  h3: tagRenderer("h3"),
  h4: tagRenderer("h4"),
  h5: tagRenderer("h5"),
  h6: tagRenderer("h6"),
  p: tagRenderer("p"),
  blockquote: tagRenderer("blockquote"),
  table: tagRenderer("table"),
  thead: tagRenderer("thead"),
  tbody: tagRenderer("tbody"),
  tr: tagRenderer("tr"),
  th: tagRenderer("th"),
  td: tagRenderer("td"),
  img: tagRenderer("img"),
  em: tagRenderer("em"),
  strong: tagRenderer("strong"),
  del: tagRenderer("del"),
};

export default async function Page({ params }: { params: { category: string; slug: string } }) {
  const { category, slug } = params;
  const code = await getPost(category, slug);
  const Component = getMDXComponent(code);

  return (
    <div>
      <article className="sticky top-0 z-40 mt-20 w-full border-b bg-background">
        PostId: {category} {slug}
        <Component components={components} />
      </article>
    </div>
  );
}
