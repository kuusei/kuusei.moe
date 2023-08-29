import Link from "next/link";
import dayjs from "dayjs";

import { getAllPostNames, getPostFrontmatter, getPostSlug } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

async function getPosts() {
  const posts = await getAllPostNames();
  return posts;
}

async function Page() {
  const posts = await getPosts();
  const postFrontmatters = await Promise.all(posts.map((post) => getPostFrontmatter(post)));

  return (
    <section className="w-full">
      {posts.map((post, index: number) => {
        const [category, slug] = getPostSlug(post);
        const postFrontmatter = postFrontmatters[index];

        return (
          <section key={index} className="mx-auto mb-8 flex w-auto max-w-[650px] flex-col">
            <div className="flex items-center justify-between">
              <div>
                <Badge variant="outline">{category}</Badge>
                <Button variant="link">
                  <Link href={`/posts/${category}/${slug}`}>{postFrontmatter.title}</Link>
                </Button>
              </div>
              <div className="flex">
                <div>
                  {postFrontmatter.updatedOn && (
                    <TooltipProvider delayDuration={100} skipDelayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span>{dayjs(postFrontmatter.date).format("YYYY/MM/DD")}</span>
                        </TooltipTrigger>
                        <TooltipContent asChild>
                          <span className="text-sm text-muted-foreground">
                            update time: {postFrontmatter.updatedOn}
                          </span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              {postFrontmatter.tags?.map((tag) => (
                <span
                  key={tag}
                  className="pl-4 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        );
      })}
    </section>
  );
}

export default Page;
