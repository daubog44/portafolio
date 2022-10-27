"use client";
import "client-only";
import { motion } from "framer-motion";
import { FC } from "react";

const ScrollIndicator: FC<{ active?: boolean }> = ({ active = true }) => {
  const variants = {
    visible: { opacity: 0, transform: "translatey(425%)" },
    hidden: { opacity: 1, transform: "translateY(0%)" },
  };

  return (
    <>
      {active ? (
        <div className="flex justify-center absolute left-4 top-8 h-8 w-2 text-gray-300 rounded-full ring ring-zinc-300">
          <motion.div
            variants={variants}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            initial="hidden"
            animate="visible"
            className="h-[7px] w-[7px] rounded-full bg-zinc-300 mt-[1px]"
          ></motion.div>
        </div>
      ) : null}
    </>
  );
};

export default ScrollIndicator;
