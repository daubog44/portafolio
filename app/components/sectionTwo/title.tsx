import { motion } from "framer-motion";
import { FC, useCallback } from "react";

const TitleAnimated: FC<{ title: string }> = function ({ title }) {
  const handleMouseOver = useCallback((event: any) => {
    event.target.classList.add("animate-bouncing");
    window.setTimeout(() => {
      event.target.classList.remove("animate-bouncing");
    }, 800);
  }, []);

  const array = [];
  for (let i = 0; i < title.length; i++) {
    array.push(title[i]);
  }

  return (
    <motion.div
      className="mb-24 mt-28 text-3xl sm:text-4xl md:text-6xl font-bold font-Imbue text-shadow text-[#fdfdfe] flex"
      viewport={{ once: true }}
      initial={{ transform: "translateX(-100%)" }}
      whileInView={{ transform: "translateX(0%)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {array.map((el, i) => (
        <span key={i} className="inline-block" onMouseEnter={handleMouseOver}>
          {el === " " ? <pre> </pre> : el}
        </span>
      ))}
    </motion.div>
  );
};
export default TitleAnimated;
