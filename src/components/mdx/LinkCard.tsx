import React from "react";
import Image from "next/image";
import { LinkIcon } from "lucide-react";

import { Button } from "../ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";

export interface LinkCardProps {
  url: string;
  title: string;
  description: string;
  symbol?: string;
  image?: string;
}

const LinkCard: React.FC<LinkCardProps> = (props) => {
  const { url, title, description, image, symbol = "" } = props;

  return (
    <>
      <HoverCard openDelay={100} closeDelay={0}>
        <HoverCardTrigger asChild>
          <Button variant="link" className="px-1 py-0">
            <a href={url} target="_blank" rel="noreferrer">
              {symbol + title}
            </a>
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-auto">
          <div className="flex justify-between space-x-4">
            {image && <Image src={image} alt={title} width={100} height={100} />}
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">{title}</h4>
              <p className="max-w-xs text-sm">{description}</p>
              <div className="flex items-center pt-2">
                <LinkIcon className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">
                  <a href={url} target="_blank" rel="noreferrer">
                    {url}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </>
  );
};

export default LinkCard;
