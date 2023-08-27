import Link from "next/link";

import { getAllPostNames, getPostFrontmatter, getPostSlug } from "@/lib/posts";

async function getPosts() {
  const posts = await getAllPostNames();
  return posts;
}

async function Page() {
  const posts = await getPosts();

  return (
    <section>
      {posts.map(async (post) => {
        const [category, slug] = getPostSlug(post);
        const postFrontmatter = await getPostFrontmatter(post);

        return (
          <div key={post}>
            <Link href={`/posts/${category}/${slug}`}>{postFrontmatter.title}</Link>
            <div>{postFrontmatter.date}</div>
            <div>
              {postFrontmatter.tags?.map((tag) => (
                <span key={tag} className="pr-4">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Page;
