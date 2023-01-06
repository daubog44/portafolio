import { FC } from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import VerticalBar from "./vertical-bar";
import VerticalBarSVG from "../svg_components/VerticalBarSVG";
import VerticalSVG1 from "./svgs/VerticalSVG1";
import VerticalSVG2 from "./svgs/VerticalSVG2";
import VerticalSVG3 from "./svgs/VerticalSVG3";
import VerticalSVG4 from "./svgs/VerticalSVG4";
import VerticalSVG5 from "./svgs/VerticalSVG5";
import VerticalSVG6 from "./svgs/VerticalSVG6";

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

const Card: FC<CardProp & { index: number }> = function ({
  background,
  Technology,
  link,
  linkString,
  description,
  fillIcon = "black",
  typeOfAnimation = "from-bottom",
  index,
  percentuale,
}) {

  const svgCalc = (idx: string) => {
    switch (idx) {
      case "0":
        return <VerticalSVG1 index={idx} />
      case "1":
        return <VerticalSVG2 index={idx} />
      case "2":
        return <VerticalSVG3 index={idx} />
      case "3":
        return <VerticalSVG4 index={idx} />
      case "4":
        return <VerticalSVG5 index={idx} />
      case "5":
        return <VerticalSVG6 index={idx} />
      default:
        return <div>Error</div>
    }
  }


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
        className="card relative h-full md:h-auto lg:max-h-[194px] box-border flex flex-col items-center bg-[rgba(255,255,255,0.1)] rounded-lg shadow-md md:flex-row before:absolute before:left-0 before:top-0 before:content-[''] before:rounded-[inherit] before:h-full before:w-full before:bg-radial-gradient before:opacity-0 before:transition before:z-[3] before:hover:opacity-100 before:duration-500"
      >
        <div className="z-[2] h-[calc(100%-2px)] w-[calc(100%-2px)] m-[1px] relative box-border flex flex-col items-center bg-white rounded-lg shadow-md md:flex-row dark:bg-gray-800">
          <div
            className={`md:h-[290px] lg:h-auto lg:w-24 box-border ${background} w-full md:w-auto rounded-t-lg md:rounded-none md:rounded-l-lg overflow-hidden flex justify-center items-center p-4`}
          >
            <Technology
              fill={fillIcon === "" ? undefined : fillIcon}
              className="h-40 w-40 inline-block"
            />
          </div>
          <div className="flex flex-col justify-between px-4 leading-normal w-3/4 md:pt-0 pt-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {linkString}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
          </div>
          <div className="pr-4 md:flex md:flex-col h-44">
            {
              svgCalc(String(index))
            }
          </div>
        </div>

        <div
          className="card-bord transition duration-500 bg-radial-gradient-border absolute left-0 top-0 content-[''] rounded-[inherit] h-full w-full z-[1]"
          style={{ opacity: 0 }}
        >
          {/*Card Border*/}
        </div>
      </Link>
    </motion.div>
  );
};
export default Card;
