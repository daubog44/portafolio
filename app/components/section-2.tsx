"use client";
import { FC } from "react";
import "client-only";
import Card, { CardProp } from "./card";
import {
  DiJavascript1,
  SiTypescript,
  TbBrandNextjs,
  FaRust,
  SiPython,
  SiMongodb,
  GrGraphQl,
  DiNodejs,
  DiReact,
} from "react-icons/all";
import { motion } from "framer-motion";

const CardData: CardProp[] = [
  {
    background: "from-[#F7E018] to-[#F7E018]",
    description: "Javascript is the most popular programming lenguage.",
    link: "https://it.wikipedia.org/wiki/JavaScript",
    linkString: "Programming lenguage",
    Technology: DiJavascript1,
  },
  {
    background: "from-[#2D79C7] to-[#2D79C7]",
    description: "Typescript help developer with type checking.",
    link: "https://www.typescriptlang.org/",
    linkString: "Programming lenguage",
    Technology: SiTypescript,
  },
  {
    background: "from-white to-white",
    description: "Nextjs is the best react framework! this site uses it.",
    link: "https://nextjs.org/",
    linkString: "Full stack framework",
    Technology: TbBrandNextjs,
  },
  {
    background: "from-white to-white",
    description:
      "I currently learn rust for webasm and tauri framework. I love rust!",
    link: "https://www.rust-lang.org/it",
    linkString: "Programming lenguage",
    Technology: FaRust,
  },
  {
    background: "from-[#ADDEC9] to-[#ADDEC9]",
    description:
      "I have been using python for personal small projects, I'm going to keep learning it.",
    link: "https://www.python.org/",
    linkString: "Programming lenguage",
    Technology: SiPython,
  },
  {
    background: "from-[#00ED64] to-[#00ED64]",
    description:
      "MongoDB is a popular NoSql databse that i used when i was learning MERN Stack",
    link: "https://www.mongodb.com/",
    linkString: "Database technology",
    Technology: SiMongodb,
  },
  {
    background: "from-[#E535AB] to-[#E535AB]",
    description:
      "Graphql is a new concept for development of APIs, i learn it with apollo-server/client",
    link: "https://graphql.org/",
    linkString: "Back-end technology",
    Technology: GrGraphQl,
  },
  {
    background: "from-[#8BC500] to-[#8BC500]",
    description:
      "NodeJs is the major js runtime for build incredible APIs. I use it with different back-end framework like express.",
    link: "https://nodejs.org/en/",
    linkString: "Back-end technology",
    Technology: DiNodejs,
  },
  {
    background: "from-[#43D8F2] to-[#43D8F2]",
    description:
      "Is the best front-end framework. I have intention to learn React Native that is used on mobile applications!",
    link: "https://en.reactjs.org/",
    linkString: "Front-end framework",
    Technology: DiReact,
  },
];
const Section2: FC<{
  handleHover?: {
    whileBottomDivHover: () => void;
    whileBottomDivLeaveHover: () => void;
  };
}> = ({ handleHover }) => {
  return (
    <section className="w-screen flex flex-col justify-end items-center bg-indigo-500">
      <motion.h2
        viewport={{ once: true }}
        initial={{ transform: "translateY(150px)" }}
        whileInView={{ transform: "translateY(0px)" }}
        className="mb-24 text-4xl font-bold hover:skew-x-[-24deg] transition duration-100 mt-28 font-Imbue text-shadow text-[#fdfdfe]"
      >
        My Little Acquaintance
      </motion.h2>
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
