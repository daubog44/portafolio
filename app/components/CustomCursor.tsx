//@ts-nocheck
"use client";
import { FC } from "react";
import AnimatedCursor from "react-animated-cursor";

const Cursor: FC<> = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={24}
        color={"112, 26, 117"}
        outerAlpha={0.2}
        hasBlendMode={true}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
  );
};

export default Cursor;
