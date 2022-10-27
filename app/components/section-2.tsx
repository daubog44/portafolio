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
  BsQuestionLg,
} from "react-icons/all";

const CardData: CardProp[] = [
  {
    background: "from-[#F7E018] to-[#F7E018]",
    description: "Javascript is the most popular programming lenguage.",
    link: "https://it.wikipedia.org/wiki/JavaScript",
    linkString: "Visit Wiki Page",
    Technology: DiJavascript1,
  },
  {
    background: "from-[#2D79C7] to-[#2D79C7]",
    description: "Typescript help developer with type checking.",
    link: "https://www.typescriptlang.org/",
    linkString: "Official site",
    Technology: SiTypescript,
  },
  {
    background: "from-white to-white",
    description: "Nextjs is the best react framework! this site uses it.",
    link: "https://nextjs.org/",
    linkString: "Official Site",
    Technology: TbBrandNextjs,
  },
  {
    background: "from-white to-white",
    description:
      "I currently learn rust for webasm and tauri framework. I love rust!",
    link: "https://www.rust-lang.org/it",
    linkString: "Official Site",
    Technology: FaRust,
  },
  {
    background: "from-[#ADDEC9] to-[#ADDEC9]",
    description:
      "I have been using python for personal small projects, I'm going to keep learning it.",
    link: "https://www.python.org/",
    linkString: "Official Site",
    Technology: SiPython,
  },
  {
    background: "from-[#00ED64] to-[#00ED64]",
    description:
      "MongoDB is a popular NoSql databse that i used when i was learning MERN Stack",
    link: "https://www.mongodb.com/",
    linkString: "Official Site",
    Technology: SiMongodb,
  },
  {
    background: "from-[#E535AB] to-[#E535AB]",
    description:
      "Graphql is a new concept for development of APIs, i learn it with apollo-server/client",
    link: "https://graphql.org/",
    linkString: "Official Site",
    Technology: GrGraphQl,
  },
  {
    description:
      "I learning every day for my improvement, i learn also a little bit of c++ and java from my high school",
    background: "from-white to-white",
    haveLink: false,
    Technology: BsQuestionLg,
  },
];
const Section2: FC<{
  handleHover?: {
    whileBottomDivHover: () => void;
    whileBottomDivLeaveHover: () => void;
  };
}> = ({ handleHover }) => {
  return (
    <section className="md:h-fit lg:h-screen w-screen flex flex-col justify-end items-center bg-[#C62368]">
      <h2 className="mb-24 text-4xl font-bold hover:skew-x-[-24deg] transition duration-100 mt-28">
        My Little Acquaintance
      </h2>
      <div className="mx-14 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 grid-rows-2 md:gap-10 gap-6 relative -top-4 auto-rows-fr">
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
