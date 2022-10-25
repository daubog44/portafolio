import Section1 from "@/components/section-1";
import Section2 from "@/components/section-2";
import Cursor from "@/components/customCursor";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Home: NextPage = () => {
  const [animateComplete, setAnimateComplete] = useState(false);
  const [cursorType, setCursorType] = useState<"primary" | "secondary">(
    "primary"
  );

  return (
    <>
      <Cursor color={cursorType} />
      <Section1
        onAnimationEnd={() => {
          setAnimateComplete(true);
        }}
      />
      {animateComplete ? (
        <Section2
          handleHover={{
            whileBottomDivHover: () => {
              setCursorType("secondary");
            },
            whileBottomDivLeaveHover: () => {
              setCursorType("primary");
            },
          }}
        />
      ) : null}
    </>
  );
};

export default Home;
