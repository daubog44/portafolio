import { TbBrandNextjs } from "react-icons/tb";
import {
  FaRust,
  // SiCypress,
  // SiTailwindcss,
  // SiPrisma,
  // SiRedux,
  // FaJava,
} from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import {
  SiMongodb,
  SiTypescript,
  SiExpress,
  SiGoland,
  SiJest,
  SiPrisma,
  SiHellofresh,
} from "react-icons/si";
import { type IconType } from "react-icons";

export interface CardProp {
  background: string;
  Technology: IconType;
  description: string;
  link: string;
  linkString: string;
  fillIcon?: string | "none";
  typeOfAnimation?: "from-bottom" | "from-left" | "from-right";
  percentuale: string;
}

const CardData: CardProp[] = [
  {
    background: "bg-[#0C344B]",
    description:
      "Is the most popular and best ORM for SQL databases, personally i use it a lot with PostgreSQL.",
    link: "https://www.prisma.io/",
    linkString: "ORM",
    Technology: SiPrisma,
    fillIcon: "white",
    percentuale: "75%",
  },
  {
    background: "bg-white",
    description: "Typescript helps developer with type checking.",
    link: "https://www.typescriptlang.org/",
    linkString: "Programming language",
    Technology: SiTypescript,
    fillIcon: "#007ACD",
    percentuale: "80%",
  },
  {
    background: "bg-white",
    description: "Nextjs is the best react meta framework! This site uses it.",
    link: "https://nextjs.org/",
    linkString: "Full stack framework",
    Technology: TbBrandNextjs,
    fillIcon: "white",
    percentuale: "90%",
  },
  {
    background: "bg-white",
    description:
      "I'm learning golang lenguage for make microservices backands with the help of technologies such as gRPC and rabbitMQ.",
    link: "https://go.dev/",
    linkString: "Programming language",
    Technology: SiGoland,
    typeOfAnimation: "from-left",
    fillIcon: "#00AED8",
    percentuale: "50%",
  },
  {
    background: "bg-white",
    description:
      "Jest is used for integration-test and unit-test on both in the front-end and in the back-end.",
    link: "https://jestjs.io/",
    linkString: "Testing Framework",
    fillIcon: "#C23E16",
    typeOfAnimation: "from-left",
    Technology: SiJest,
    percentuale: "75%",
  },
  // {
  //   background: "bg-[#ADDEC9]",
  //   description:
  //     "I have been using python for personal small projects, I'm going to keep learning it.",
  //   link: "https://www.python.org/",
  //   linkString: "Programming language",
  //   Technology: SiPython,
  //   typeOfAnimation: "from-left",
  //   percentuale: "65%",
  // },
  {
    background: "bg-[#00ED64]",
    description:
      "MongoDB is a popular NoSql databse that i used when i was learning MERN Stack.",
    link: "https://www.mongodb.com/",
    linkString: "Database technology",
    Technology: SiMongodb,
    typeOfAnimation: "from-left",
    percentuale: "80%",
  },
  {
    background: "bg-white",
    description:
      "Graphql is a new concept for development of APIs, i learn it with apollo-server/client",
    link: "https://graphql.org/",
    linkString: "Back-end technology",
    Technology: GrGraphQl,
    fillIcon: "#E535AB",
    typeOfAnimation: "from-right",
    percentuale: "85%",
  },
  {
    background: "bg-white",
    description:
      "express is one of the most used framework for build REST APIs with nodejs.",
    link: "https://expressjs.com/",
    linkString: "Back-end technology",
    Technology: SiExpress,
    typeOfAnimation: "from-right",
    percentuale: "100%",
  },
  //{
  //  background: "bg-[#162332]",
  //  description:
  //    "Cypress is a end-to-end(e2e) testing framework, it is a powerful tool that i use.",
  //  link: "https://www.cypress.io/",
  //  linkString: "e2e Testing Framework",
  //  Technology: SiCypress,
  //  fillIcon: "white",
  //  percentuale: 4,
  //},
  //{
  //  background: "bg-white",
  //  description:
  //    "Tailwind is the best choice for write css fast and cleary. This site uses it with framer-motion.",
  //  link: "https://tailwindcss.com/",
  //  linkString: "A Utility-first CSS Framework",
  //  Technology: SiTailwindcss,
  //  fillIcon: "#38BDF8",
  //  percentuale: 6,
  //},
  //{
  //  background: "bg-white",
  //  description:
  //    "Redux is the most popular library for state menagment for react! I use it with redux-toolkit and //rtk-query.",
  //  link: "https://redux.js.org/",
  //  linkString: "State Menagment Technology",
  //  Technology: SiRedux,
  //  fillIcon: "#7749BD",
  //  typeOfAnimation: "from-left",
  //  percentuale: 5,
  //},
];

export const addOne: CardProp = {
  background: "bg-[#F7E018]",
  description:
    "Fresh is part of a new kind of frameworks built with the Deno, it abuses ssr for blazing fast responses.",
  link: "https://fresh.deno.dev/",
  linkString: "Full stack framework",
  typeOfAnimation: "from-right",
  Technology: SiHellofresh,
  percentuale: "50%",
};

export default CardData;
