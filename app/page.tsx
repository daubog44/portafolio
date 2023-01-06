"use client";
import "client-only";
import Section1 from "@/components/presentetionSection/section-1";
import Section2 from "@/components/MySkillsSection/skillSection";
import Section3 from "@/components/ContactSection/section-3";
import LoadLinks from "@/components/loadLinks";
import Cursor from "components/customCursor";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import Sound from "components/playMusic";
import "../styles/loading-animation.css";

const Home = () => {
  const links = ["https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"];

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
        <LoadLinks links={links} />
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
