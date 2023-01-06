import { FC, useEffect } from "react";
import VerticalBarSvg from "@/components/svg_components/VerticalBarSVG";
import useStore from "../../store/store";
import TestSVG from "./testSVG";
import js from "../../script/vertical-bar-animation.js"

const VerticalBar: FC<{ percentaule: string, index: number }> = function ({
  percentaule,
  index
}) {
  const hasFinishLoad = useStore((state) => state.hasLoadedScripts);
  let percentuale = Number(percentaule.split("%").at(-2));
  percentuale = -((percentuale / 100) * 380) * 1.12;
  percentuale = Number(percentuale.toFixed(0));
  // console.log(percentuale);

  useEffect(() => {
    // function startAnimation() {
    //   if (hasFinishLoad) {
    //     js(percentaule, String(index));
    //   }
    // }

    // startAnimation();
  }, [hasFinishLoad])

  return (
    <>
      {/* <div
        style={{ borderColor: `${color}` }}
        className={`grid grid-cols-1 grid-rows-6 border-2 w-8 h-48 rounded-full gap-y-[2px]`}
      >
        <div
          className="flex items-center justify-center rounded-t-full"
          style={{ backgroundColor: fill >= 6 ? `${color}` : undefined }}
        ></div>
        <div
          className="flex items-center justify-center"
          style={{ backgroundColor: fill >= 5 ? `${color}` : undefined }}
        ></div>
        <div
          style={{ backgroundColor: fill >= 4 ? `${color}` : undefined }}
          className="flex items-center justify-center"
        ></div>
        <div
          style={{ backgroundColor: fill >= 3 ? `${color}` : undefined }}
          className="flex items-center justify-center"
        ></div>
        <div
          style={{ backgroundColor: fill >= 2 ? `${color}` : undefined }}
          className="flex items-center justify-center"
        ></div>
        <div
          style={{ backgroundColor: fill >= 1 ? `${color}` : undefined }}
          className="rounded-b-full flex items-center justify-center"
        ></div>
      </div>
      <span className="absolute -right-[1.85rem] bottom-2/4 translate-y-2/4 rotate-90 text-white">
        Confidence
      </span> */}
      {/* {hasFinishLoad && <Script id={percentaule} src="/script/vertical-bar-animation.js" />} */}
      <TestSVG percentuale={String(percentuale)} />
    </>
  );
};

export default VerticalBar;
