"use client";
import "client-only";
import PresentationSection from "@c/omponents/presentetionSection";
import SkillSection from "@c/omponents/MySkillsSection";
import ContactSection from "@c/omponents/ContactSection";
import Cursor from "@c/omponents/CustomCursor";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import "../styles/loading-animation.css";
import Sound from "@c/omponents/PlayMusic";
import useCardData from "hooks/useCardData";
import LoadLinks from "@c/omponents/LoadLinks";

const Home = () => {
  const links = ["https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js", "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/utils/Draggable.min.js", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin.min.js", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/ThrowPropsPlugin.min.js", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/DrawSVGPlugin.js?r=12", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/ModifiersPlugin-latest-beta.js"];

  const matches = useMediaQuery("(min-width: 1024px)");
  const [animateComplete, setAnimateComplete] = useState(false);
  const [cursorType, setCursorType] = useState<"primary" | "secondary">(
    "primary"
  );
  const [isClientReady, setIsClientReady] = useState(false);
  const cardData = useCardData();

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
          <PresentationSection
            onAnimationEnd={() => {
              setAnimateComplete(true);
            }}
          >
            <Sound />
          </PresentationSection>
          {animateComplete && (
            <>
              <SkillSection
                cardData={cardData}
                handleHover={{
                  whileBottomDivHover: () => {
                    setCursorType("secondary");
                  },
                  whileBottomDivLeaveHover: () => {
                    setCursorType("primary");
                  },
                }}
              />
              <ContactSection />
            </>
          )}
        </div>
      </>
    );
};

export default Home;
