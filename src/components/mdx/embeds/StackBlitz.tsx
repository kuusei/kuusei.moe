import React from "react";

import LazyLoad from "@/components/lazy-load";

export interface StackBlitzProps {
  id?: string;
  height?: string | number;
}

const StackBlitz: React.FC<StackBlitzProps> = (props) => {
  const { id, height = 500 } = props;

  return (
    <LazyLoad className="relative w-full bg-zinc-500/10" style={{ height }}>
      <iframe
        className="absolute left-0 top-0 h-full w-full"
        src={`https://stackblitz.com/edit/${id}?embed=1}`}
        frameBorder="0"
      ></iframe>
    </LazyLoad>
  );
};

export default StackBlitz;
