"use client";

import React, { CSSProperties, ReactElement, ReactNode, useLayoutEffect, useRef, useState } from "react";

export interface LazyLoadProps {
  children: ReactElement;
  className?: string;
  style?: CSSProperties;
  offsetScale?: number;
  height?: number;
  placeholder?: ReactNode;
}

const LazyLoad: React.FC<LazyLoadProps> = (props) => {
  const { children, className, style, height, offsetScale = 1.5, placeholder } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const calculateOffset = () => {
    const viewportHeight = window.innerHeight;
    return viewportHeight * offsetScale;
  };

  useLayoutEffect(() => {
    const offset = calculateOffset();
    const dom = containerRef.current;
    if (!dom) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      {
        rootMargin: `${offset}px 0px ${offset}px 0px`,
      }
    );
    observer.observe(dom);
    return () => observer.disconnect();
  });

  return (
    <div ref={containerRef} className={className} style={style}>
      {visible ? children : placeholder ?? <div style={{ height: height }} />}
    </div>
  );
};

export default LazyLoad;
