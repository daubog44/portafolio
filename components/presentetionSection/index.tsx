"use client";
import { motion } from "framer-motion";
import { FC, memo } from "react";
import { Typewriter } from "react-simple-typewriter";
import "../../styles/section-1-waves.css";
import WaveSVG from "../svg_components/WaveSVG";
import HomeSVG from "../svg_components/HomeSVG";
import { useMediaQuery } from "usehooks-ts";
import FireFliesEffect from "../Fireflies";

const Section1: FC<{ children: any; onAnimationEnd: () => void }> = function ({
  onAnimationEnd,
  children,
}) {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <section className="h-[90vh] w-screen lg:h-screen bg-[#001220] bg-cover">
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
          {children}
          <div className="h-full w-full px-12 py-24 flex justify-center items-center">
            <div className="lg:w-1/2 w-full">
              <div className="lg:block flex justify-between items-center text-6xl text-white mb-12">
                <div>
                  {matches ? (
                    <Typewriter
                      cursor={true}
                      words={["Hi, I am Dario", "I am a developer student"]}
                    />
                  ) : (
                    <div>Hi, I am Dario</div>
                  )}
                </div>
              </div>
              <div className="text-indigo-500 text-xl tracking-wider">
                I am Darius Bogdan, I am currently in high school. The world of
                code has always fascinated me. I started learning it since I was
                16 and I don't think I'll stop soon.
              </div>
            </div>
            <div className="w-1/2 hidden lg:block">
              <div className="h-full w-full">
                <HomeSVG />
              </div>
            </div>
          </div>
          <WaveSVG />
        </motion.div>
      </section>
    </>
  );
};

export default memo(Section1);
