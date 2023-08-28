import React from "react";
import clsx from "clsx";

const tagRenderer = (name: string) => {
  return ((props) => {
    const { className, ...rest } = props;
    return React.createElement(name, { ...rest, className: clsx(`mdx-${name}`, className) });
  }) satisfies React.FC<React.HTMLProps<HTMLElement>>;
};

export default tagRenderer;
