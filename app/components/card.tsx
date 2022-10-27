"use client";
import { FC, useState } from "react";
import Link from "next/link";
import type { IconType } from "react-icons";

export interface CardProp {
  background: string;
  Technology: IconType;
  description: string;
  link?: string;
  linkString?: string;
  haveLink?: boolean;
}

const Card: FC<CardProp> = function ({
  background,
  Technology,
  link,
  linkString,
  description,
  haveLink = true,
}) {
  const [isHover, setIsShown] = useState(false);

  return (
    <div
      className="perspective-1500px h-40 w-40 relative group"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div
        className={`bg-gradient-to-r ${background} ease-in transition duration-800 z-30 absolute top-0 left-0 w-full h-full overflow-hidden shadow-lg pointer-events-none lg:group-hover:rotate-y-back rounded-md p-2 flex justify-center items-center backfaceVisibilityhidden-hidden`}
      >
        <Technology className="w-2/4 h-2/4" />
      </div>
      <div
        className={`bg-gradient-to-r ${background} ease-in transition duration-80 z-20 absolute top-0 left-0 w-full h-full overflow-hidden shadow-lg pointer-events-none lg:group-hover:rotate-y-0 rotate-y rounded-md p-2 text-center text-neutral-900`}
      >
        {haveLink && isHover ? (
          <div className="pointer-events-auto text-lg border-b-2 border-zinc-500 w-full h-8 font-bold border-b-rounded font-sans">
            <Link
              replace
              href={link as string}
              className="font-crimson text-xl"
              target="_blank"
            >
              {linkString}
            </Link>
          </div>
        ) : null}
        {description}
      </div>
    </div>
  );
};
export default Card;
