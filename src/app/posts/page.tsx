import Link from "next/link";

import { getAllPostNames, getPostFrontmatter, getPostSlug } from "@/lib/posts";

async function getPosts() {
  const posts = await getAllPostNames();
  return posts;
}

async function Page() {
  const posts = await getPosts();
  const postFrontmatters = await Promise.all(posts.map((post) => getPostFrontmatter(post)));

  return (
    <section>
      {posts.map((post, index) => {
        const [category, slug] = getPostSlug(post);

        return (
          <div key={index}>
            <Link href={`/posts/${category}/${slug}`}>{postFrontmatters[index]?.title}</Link>
            <div>{postFrontmatters[index]?.date}</div>
            <div>
              {postFrontmatters[index]?.tags?.map((tag) => (
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
