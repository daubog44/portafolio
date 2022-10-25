//@ts-nocheck
import { FC } from "react";
import dynamic from "next/dynamic";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const Cursor: FC<{ color: "primary" | "secondary" }> = ({ color }) => {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={24}
        color={color === "primary" ? "34, 211, 238" : "193, 11, 111"}
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
