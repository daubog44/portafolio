"use client";
import ScrollIndicator from "./scrollIndicator";
import { motion } from "framer-motion";
import { FC, memo, useCallback, useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useIsScrolledDown } from "app/hooks/useIsScrolled";
import "../../customCss/section-1-waves.css";
import WaveSVG from "../svg/WaveSVG";
import HomeSVG from "../svg/HomeSVG";
import { useMediaQuery } from "usehooks-ts";
import FireFliesEffect from "../fireflies";

const Section1: FC<{ onAnimationEnd: () => void }> = function ({
  onAnimationEnd,
}) {
  const matches = useMediaQuery("(min-width: 768px)");
  const [isScrollIndicatorShowing, setIsScrollIndicatorShowing] =
    useState(false);
  const [clearTimeout, setClearTimeout] = useState(false);
  const isScrolledDown = useIsScrolledDown();

  useEffect(() => {
    if (isScrolledDown) {
      setIsScrollIndicatorShowing(false);
    }
  }, [isScrolledDown]);

  const onLoopDone = useCallback(() => {
    if (clearTimeout || isScrolledDown) {
      return;
    }
    window.setTimeout(() => {
      setIsScrollIndicatorShowing(true);
      setClearTimeout(true);
    }, 4000);
  }, [clearTimeout, isScrolledDown]);

  return (
    <>
      <section className="h-[90vh] lg:h-screen w-screen bg-[#001220] overflow-y-hidden bg-cover">
        <FireFliesEffect />
        <motion.div
          className="block bg-center h-full w-full bg-no-repeat bg-cover"
          initial={{ transform: "translateY(100%)" }}
          animate={{ transform: "translateY(0%)" }}
          transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
          onAnimationComplete={() => {
            onAnimationEnd();
          }}
        >
          <div className="h-full w-full px-12 py-24 flex justify-center items-center">
            <div className="lg:w-1/2 w-full">
              <div className="lg:block flex justify-between items-center text-6xl text-white mb-12">
                <div>
                  {matches ? (
                    <Typewriter
                      cursor={true}
                      onLoopDone={onLoopDone}
                      words={["Hi, I am Dario", "I am a developer student"]}
                    />
                  ) : (
                    <div>Hi, I am Dario</div>
                  )}
                </div>
              </div>
              <div className="text-indigo-500 text-xl">
                I am currently a student in high school. Learning to code is
                everything I am spending my time on.
              </div>
            </div>
            <div className="w-1/2 hidden lg:block">
              <div className="h-full w-full">
                <HomeSVG />
              </div>
            </div>
            {matches && <ScrollIndicator active={isScrollIndicatorShowing} />}
          </div>
          <WaveSVG />
        </motion.div>
      </section>
    </>
  );
};

export default memo(Section1);
