import React from "react";

import LazyLoad from "@/components/lazy-load";

export interface BilibiliProps {
  aid: string;
  bvid: string;
  cid: string;
}

export const Bilibili: React.FC<BilibiliProps> = (props) => {
  const { aid, bvid, cid } = props;

  return (
    <LazyLoad className="relative aspect-video w-full bg-zinc-500/10">
      <iframe
        className="absolute left-0 top-0 h-full w-full"
        src={`//player.bilibili.com/player.html?aid=${aid}&bvid=${bvid}&cid=${cid}&page=1&autoplay=0`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </LazyLoad>
  );
};

export default Bilibili;
