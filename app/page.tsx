"use client";
import "client-only";
import Section1 from "components/sectionOne/section-1";
import Section2 from "components/sectionTwo/section-2";
import Section3 from "components/sectionThree/section-3";
import Cursor from "components/customCursor";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import Sound from "components/playMusic";
import "../styles/loading-animation.css";

const Home = () => {
  const matches = useMediaQuery("(min-width: 1200px)");
  const [animateComplete, setAnimateComplete] = useState(false);
  const [cursorType, setCursorType] = useState<"primary" | "secondary">(
    "primary"
  );
  const [isClientReady, setIsClientReady] = useState(false);

  useEffect(() => {
    if (window) setIsClientReady(true);
  }, []);

  if (!isClientReady)
    return (
      <div className="h-screen w-screen bg-[#001220] text-6xl text-white flex justify-center items-center">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );

  if (isClientReady)
    return (
      <>
        <div className="App">
          {matches && <Cursor color={cursorType} />}
          <Section1
            onAnimationEnd={() => {
              setAnimateComplete(true);
            }}
          >
            <Sound />
          </Section1>
          {animateComplete ? (
            <>
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
              <Section3 />
            </>
          ) : null}
        </div>
      </>
    );
};

export default Home;
