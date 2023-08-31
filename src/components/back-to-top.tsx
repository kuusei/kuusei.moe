"use client";

import { useRef } from "react";
import { ChevronsUp } from "lucide-react";

// import { animated, useTransition } from "@react-spring/web";
// import { animationFrameScheduler, distinctUntilChanged, fromEvent, map, startWith, throttleTime } from "rxjs";

// import { ArrowUp } from "@/components/icons";

const BackToTop = () => {
  const ref = useRef<HTMLDivElement>(null);

  // const transitions = useTransition(visible, {
  //   from: { opacity: 0, y: 100 },
  //   enter: { opacity: 1, y: 0 },
  //   leave: { opacity: 0, y: 100 },
  //   config: { tension: 280, friction: 20 },
  // });

  // useEffect(() => {
  //   const sub = fromEvent(window, "scroll")
  //     .pipe(
  //       throttleTime(0, animationFrameScheduler),
  //       startWith(null),
  //       map(() => window.scrollY > 500),
  //       distinctUntilChanged()
  //     )
  //     .subscribe((bool) => {
  //       setVisible(bool);
  //     });
  //   return () => sub.unsubscribe();
  // }, []);

  function backToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      ref={ref}
      className="group fixed bottom-8 right-8 z-50 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary p-2 text-background sm:bottom-16 sm:right-16"
      onClick={backToTop}
    >
      <ChevronsUp
        size={18}
        className="duration-1000 ease-linear animate-bounce zoom-out-50 transition-all group-hover:translate-y-[-2px]"
      />
      {/* <ArrowUp className="text-xl text-white" aria-hidden /> */}
    </div>
  );
};

export default BackToTop;
