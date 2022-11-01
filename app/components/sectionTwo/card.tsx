"use client";
import { FC } from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import VerticalBar from "./vertical-bar";

export interface CardProp {
  background: string;
  Technology: IconType;
  description: string;
  link: string;
  linkString: string;
  fillIcon?: string | "none";
  typeOfAnimation?: "from-bottom" | "from-left" | "from-right";
  confidenceColor?: string;
  fillNumberConfidence: number;
}

const Card: FC<CardProp> = function ({
  background,
  Technology,
  link,
  linkString,
  description,
  fillIcon = "black",
  typeOfAnimation = "from-bottom",
  confidenceColor = "#FFFF",
  fillNumberConfidence,
}) {
  if (typeof link !== "string") return <h1>error</h1>;
  return (
    <motion.div
      initial={{
        transform:
          (typeOfAnimation === "from-bottom" && "translateY(150px)") ||
          (typeOfAnimation === "from-left" && "translateX(-100%)") ||
          "translateX(100%)",
      }}
      viewport={{
        once: true,
        margin:
          typeOfAnimation !== "from-bottom" ? "0px 0px -100px 0px" : undefined,
      }}
      whileInView={{
        transform:
          (typeOfAnimation === "from-bottom" && "translateY(0px)") ||
          (typeOfAnimation === "from-left" && "translateX(0%)") ||
          "translateX(0%)",
      }}
    >
      <Link
        target="_blank"
        href={link as unknown as string}
        className="h-full md:h-auto lg:max-h-[194px] box-border flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div
          className={`md:h-[290px] lg:h-auto lg:w-24 box-border ${background} w-full md:w-auto rounded-t-lg md:rounded-none md:rounded-l-lg overflow-hidden flex justify-center items-center p-4`}
        >
          <Technology
            fill={fillIcon === "" ? undefined : fillIcon}
            className="h-40 w-40 inline-block"
          />
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal w-3/4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {linkString}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="p-4 md:flex md:flex-col hidden h-44">
          <VerticalBar color={confidenceColor} fill={fillNumberConfidence} />
        </div>
      </Link>
    </motion.div>
  );
};
export default Card;
