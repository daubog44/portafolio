import { CardProp } from "./card";
import { TbBrandNextjs } from "react-icons/tb";
import {
  FaRust,
  // SiJest,
  // SiCypress,
  // SiTailwindcss,
  // SiPrisma,
  // SiRedux,
  // FaJava,
} from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiPython, SiMongodb, SiTypescript } from "react-icons/si";
import { DiJavascript1, DiNodejs, DiReact } from "react-icons/di";

const CardData: CardProp[] = [
  {
    background: "bg-[#F7E018]",
    description: "Javascript is the most popular programming lenguage.",
    link: "https://it.wikipedia.org/wiki/JavaScript",
    linkString: "Programming language",
    Technology: DiJavascript1,
    confidenceColor: "#F7E018",
    fillNumberConfidence: 6,
  },
  {
    background: "bg-white",
    description: "Typescript helps developer with type checking.",
    link: "https://www.typescriptlang.org/",
    linkString: "Programming language",
    Technology: SiTypescript,
    fillIcon: "#007ACD",
    confidenceColor: "#007ACD",
    fillNumberConfidence: 6,
  },
  {
    background: "bg-white",
    description: "Nextjs is the best react framework! This site uses it.",
    link: "https://nextjs.org/",
    linkString: "Full stack framework",
    Technology: TbBrandNextjs,
    fillIcon: "white",
    fillNumberConfidence: 5,
  },
  {
    background: "bg-white",
    description:
      "I currently learn rust for webasm and tauri framework. I love rust!",
    link: "https://www.rust-lang.org/it",
    linkString: "Programming language",
    Technology: FaRust,
    typeOfAnimation: "from-left",
    fillNumberConfidence: 2,
  },
  {
    background: "bg-[#ADDEC9]",
    description:
      "I have been using python for personal small projects, i'm going to keep learning it.",
    link: "https://www.python.org/",
    linkString: "Programming language",
    Technology: SiPython,
    typeOfAnimation: "from-left",
    confidenceColor: "#ADDEC9",
    fillNumberConfidence: 3,
  },
  {
    background: "bg-[#00ED64]",
    description:
      "MongoDB is a popular NoSql databse that i used when i was learning MERN Stack with mongoose library.",
    link: "https://www.mongodb.com/",
    linkString: "Database technology",
    Technology: SiMongodb,
    typeOfAnimation: "from-left",
    confidenceColor: "#00ED64",
    fillNumberConfidence: 6,
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
    confidenceColor: "#E535AB",
    fillNumberConfidence: 5,
  },
  {
    background: "bg-[#8BC500]",
    description: "NodeJs is the major js runtime for build incredible APIs.",
    link: "https://nodejs.org/en/",
    linkString: "Back-end technology",
    Technology: DiNodejs,
    typeOfAnimation: "from-right",
    confidenceColor: "#8BC500",
    fillNumberConfidence: 6,
  },
  {
    background: "bg-white",
    description:
      "Is the best front-end framework. I have intention to learn React Native that is used on mobile applications!",
    link: "https://en.reactjs.org/",
    linkString: "Front-end framework",
    Technology: DiReact,
    fillIcon: "#61DBFB",
    typeOfAnimation: "from-right",
    confidenceColor: "#61DBFB",
    fillNumberConfidence: 6,
  },
  //{
  //  background: "bg-white",
  //  description:
  //    "Jest is used for integration-test and unit-test on both in the front-end and in the back-end.",
  //  link: "https://jestjs.io/",
  //  linkString: "Testing Framework",
  //  fillIcon: "#C23E16",
  //  Technology: SiJest,
  //  confidenceColor: "#C23E16",
  //  fillNumberConfidence: 5,
  //},
  //{
  //  background: "bg-[#162332]",
  //  description:
  //    "Cypress is a end-to-end(e2e) testing framework, it is a powerful tool that i use.",
  //  link: "https://www.cypress.io/",
  //  linkString: "e2e Testing Framework",
  //  Technology: SiCypress,
  //  fillIcon: "white",
  //  fillNumberConfidence: 4,
  //},
  //{
  //  background: "bg-white",
  //  description:
  //    "Tailwind is the best choice for write css fast and cleary. This site uses it with framer-motion.",
  //  link: "https://tailwindcss.com/",
  //  linkString: "A Utility-first CSS Framework",
  //  Technology: SiTailwindcss,
  //  fillIcon: "#38BDF8",
  //  confidenceColor: "#38BDF8",
  //  fillNumberConfidence: 6,
  //},
  //{
  //  background: "bg-[#0C344B]",
  //  description:
  //    "Is the most popular and best ORM for databases, personally i use it a lot with PostgreSQL.",
  //  link: "https://www.prisma.io/",
  //  linkString: "Next-generation of ORM",
  //  Technology: SiPrisma,
  //  fillIcon: "white",
  //  typeOfAnimation: "from-left",
  //  fillNumberConfidence: 5,
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
  //  confidenceColor: "#7749BD",
  //  fillNumberConfidence: 5,
  //},
  //{
  //  background: "bg-[#476E7A]",
  //  description:
  //    "I currently learn java in my high school with algorithm exercises.",
  //  link: "https://www.java.com/en/",
  //  linkString: "Programming Lenguage",
  //  Technology: FaJava,
  //  fillIcon: "white",
  //  typeOfAnimation: "from-left",
  //  confidenceColor: "#476E7A",
  //  fillNumberConfidence: 2,
  //},
];

export default CardData;
