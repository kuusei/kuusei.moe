import React from "react";

import LazyLoad from "@/components/lazy-load";

export interface CodePenProps {
  id?: string;
  height?: string | number;
}

const CodePen: React.FC<CodePenProps> = (props) => {
  const { id, height = 500 } = props;

  return (
    <LazyLoad className="relative w-full bg-zinc-500/10" style={{ height }}>
      <iframe
        className="absolute left-0 top-0 h-full w-full"
        src={`https://codepen.io/team/embed/${id}?default-tab=result&editable=true&theme-id=dark`}
        title={id}
      ></iframe>
    </LazyLoad>
  );
};

export default CodePen;
