import { FC, useEffect } from "react";
import useStore from "../../store";
import js from "../../scripts/vertical-bar-animation.js"
import VerticalBarSVG from "@/components/svg_components/VerticalBarSVG";

const VerticalBar: FC<{ percentaule: string, index: number }> = function ({
  percentaule,
  index
}) {
  const hasFinishLoad = useStore((state) => state.hasLoadedScripts);
  let percentuale = Number(percentaule.split("%").at(-2));
  percentuale = -((percentuale / 100) * 380) * 1.12;
  percentuale = Number(percentuale.toFixed(0));

  useEffect(() => {
    function startAnimation() {
      if (hasFinishLoad) {
        js(percentaule, String(index));
      }
    }

    const idSetTimeout = setTimeout(startAnimation, 10);

    return () => {
      clearTimeout(idSetTimeout);
    }
  }, [hasFinishLoad])

  return (
    <>{index === 0 &&
      <span className="absolute -right-[1.4rem] bottom-2/4 translate-y-2/4 rotate-90 text-white">
        Confidence
      </span>
    }
      <VerticalBarSVG index={String(index)} percentuale={String(percentuale)} />
    </>
  );
};

export default VerticalBar;
