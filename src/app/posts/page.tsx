import Link from "next/link";
import dayjs from "dayjs";
import { Pencil } from "lucide-react";

import { getPosts } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Tag from "@/components/ui-custom/tag";

async function Page() {
  const posts = await getPosts();

  return (
    <section className="w-full">
      {posts.map((post, index: number) => {
        const { category, slug } = post;
        return (
          (!post.draft || process.env.NODE_ENV !== "production") && (
            <section key={index} className="mx-auto mb-8 flex w-auto max-w-[650px] flex-col">
              <div className="flex items-center justify-between">
                <div>
                  <Badge variant="outline">{category}</Badge>
                  <Button variant="link">
                    <Link href={`/posts/${category}/${slug}`}>{post.title}</Link>
                    {post.draft ? <Pencil size={12} className="ml-2" /> : ""}
                  </Button>
                </div>
                <div className="flex">
                  <div>
                    {post.updatedOn && (
                      <TooltipProvider delayDuration={100} skipDelayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span>{dayjs(post.date).format("YYYY/MM/DD")}</span>
                          </TooltipTrigger>
                          <TooltipContent asChild>
                            <span className="text-sm text-muted-foreground">update time: {post.updatedOn}</span>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                </div>
              </div>
              {post.tags && <Tag tags={post.tags} />}
            </section>
          )
        );
      })}
    </section>
  );
}

export default Page;
