import { cn } from "@/utils/shadcn";

const Tag = ({ tags = [], className }: { tags: string[]; className?: string }) => {
  return (
    <div className="flex justify-end">
      {tags?.map((tag) => (
        <span
          key={tag}
          className={cn(
            "pl-4 text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
            className
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tag;
