"use client";
import { FC } from "react";
import Card from "./card";
import TitleAnimated from "./title";
import CardData from "./technologiesData";

const Section2: FC<{
  handleHover?: {
    whileBottomDivHover: () => void;
    whileBottomDivLeaveHover: () => void;
  };
}> = function ({ handleHover }) {
  return (
    <section className="w-screen flex flex-col justify-end items-center bg-indigo-500">
      <TitleAnimated title="My Little Achivments" />

      <div className="mx-14 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 grid-rows-2 md:gap-10 gap-6 relative -top-4 auto-rows-fr">
        {CardData.map((el, i) => (
          <Card {...el} key={i} />
        ))}
      </div>
      <div
        onMouseEnter={handleHover?.whileBottomDivHover}
        onMouseLeave={handleHover?.whileBottomDivLeaveHover}
        className="w-screen h-1/5 bg-cyan-400 z-50"
      ></div>
    </section>
  );
};

export default Section2;
