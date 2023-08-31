"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const Progress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className="fixed inset-x-0 top-0 z-10 h-[5px] bg-foreground" style={{ scaleX }} />;
};

export default Progress;
