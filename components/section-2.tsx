import { FC } from "react";

const Section2: FC<{
  handleHover?: {
    whileBottomDivHover: () => void;
    whileBottomDivLeaveHover: () => void;
  };
}> = ({ handleHover }) => {
  return (
    <section className="h-screen w-screen flex justify-center items-end bg-[#C62368]">
      <div
        onMouseEnter={handleHover?.whileBottomDivHover}
        onMouseLeave={handleHover?.whileBottomDivLeaveHover}
        className="w-screen h-2/6 self-end bg-cyan-400"
      ></div>
    </section>
  );
};

export default Section2;
