"use client";
import { FC } from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";

export interface CardProp {
  background: string;
  Technology: IconType;
  description: string;
  link: string;
  linkString: string;
}

const Card: FC<CardProp> = function ({
  background,
  Technology,
  link,
  linkString,
  description,
}) {
  if (typeof link !== "string") return <h1>error</h1>;
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ transform: "translateY(150px)" }}
      whileInView={{ transform: "translateY(0px)" }}
    >
      <Link
        target="_blank"
        href={link as unknown as string}
        className="lg:max-h-[194px] box-border flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div
          className={`md:h-[290px] lg:h-auto box-border bg-gradient-to-r ${background} w-full md:w-auto rounded-t-lg md:rounded-none md:rounded-l-lg overflow-hidden flex justify-center items-center p-4`}
        >
          <Technology className="h-40 w-40 inline-block" />
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal w-3/4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {linkString}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};
export default Card;
