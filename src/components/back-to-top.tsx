"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronsUp } from "lucide-react";

const BackToTop = () => {
  const [y, setY] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setOpacity(1);
      setY(0);
    } else {
      setOpacity(0);
      setY(10);
    }
  });

  function backToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <motion.div
      style={{ y, opacity }}
      ref={ref}
      animate={{ y, opacity }}
      transition={{ duration: 0.5 }}
      className="group fixed bottom-8 right-8 z-50 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary p-2 text-background opacity-0 sm:bottom-16 sm:right-16"
      onClick={backToTop}
    >
      <ChevronsUp size={18} />
    </motion.div>
  );
};

export default BackToTop;
