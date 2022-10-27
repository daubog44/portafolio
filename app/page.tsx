"use client";
import "client-only";
import Section1 from "app/components/section-1";
import Section2 from "app/components/section-2";
import Cursor from "app/components/customCursor";
import { useState } from "react";

const Home = () => {
  const [animateComplete, setAnimateComplete] = useState(false);
  const [cursorType, setCursorType] = useState<"primary" | "secondary">(
    "primary"
  );

  return (
    <div className="App">
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
    </div>
  );
};

export default Home;
