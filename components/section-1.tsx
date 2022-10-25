import ScrollIndicator from "./scrollIndicator";
import { motion } from "framer-motion";
import { FC, useCallback, useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useScrollDirection } from "hooks/useScrollDetection";
import { useIsScrolledDown } from "hooks/useIsScrolled";

const Section1: FC<{ onAnimationEnd: () => void }> = ({ onAnimationEnd }) => {
  const [isScrollIndicatorShowing, setIsScrollIndicatorShowing] =
    useState(false);
  const isScrolledDown = useIsScrolledDown();

  useEffect(() => {
    if (isScrolledDown) {
      setIsScrollIndicatorShowing(false);
    }
  }, [isScrolledDown]);

  return (
    <section className="h-screen w-screen bg-[#001220] overflow-y-hidden">
      <motion.div
        className="block bg-center h-full w-full bg-no-repeat bg-cover bg-first-section-bg md:bg-first-section-bg-md lg:bg-first-section-bg-lg"
        initial={{ transform: "translateY(100%)" }}
        animate={{ transform: "translateY(0%)" }}
        transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
        onAnimationComplete={() => {
          onAnimationEnd();
        }}
      >
        <div className="h-full flex justify-center items-center flex-col">
          <div className="flex justify-center items-center relative -top-24 font-bold text-3xl text-rose-300 text-center flex-col font-gloria">
            <div className="rounded-full box-shadow-light-inset h-44 w-44"></div>
            <div className="block relative -top-28">
              <Typewriter
                cursor={true}
                onLoopDone={() =>
                  !isScrolledDown && setIsScrollIndicatorShowing(true)
                }
                words={["Hi, i' am Dario", "I am a developer student"]}
              />
            </div>
          </div>
          <ScrollIndicator active={isScrollIndicatorShowing} />
        </div>
      </motion.div>
    </section>
  );
};

export default Section1;
