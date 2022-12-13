import { FC } from "react";

const VerticalBar: FC<{ color: string; fill: number }> = function ({
  color,
  fill,
}) {
  return (
    <>
      <div
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
      </span>
    </>
  );
};

export default VerticalBar;
