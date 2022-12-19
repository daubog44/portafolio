"use client";
import { FC, useEffect } from "react";
import Card from "./card";
import TitleAnimated from "./title";
import CardData from "./technologiesData";

const Section2: FC<{
  handleHover?: {
    whileBottomDivHover: () => void;
    whileBottomDivLeaveHover: () => void;
  };
}> = function ({ handleHover }) {
  useEffect(() => {
    const cards = document.getElementById("cards") as HTMLElement;
    cards.onmousemove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);

        const borderCard = card.querySelector(".card-bord") as HTMLElement;
        borderCard.style.opacity = "1";
      }
    };
  }, []);

  return (
    <section className="w-screen overflow-x-hidden flex flex-col justify-end items-center bg-indigo-500">
      <TitleAnimated title="My Little Achivments" />

      <div
        className="mx-14 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 grid-rows-2 gap-6 relative -top-4 auto-rows-fr"
        id="cards"
      >
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
