import TitleAnimated from "../MySkillsSection/title";
import githubMascot from "../../public/images/githubMascot.png";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";

const Section3 = function () {
  const imageRef = useRef<null | any>(null);
  const onMouseEnter = useCallback(() => {
    if (imageRef.current) imageRef.current.style.transform = "rotate(35deg)";
  }, [imageRef]);

  const onMouseLeave = useCallback(() => {
    if (imageRef.current) imageRef.current.style.transform = "rotate(16deg)";
  }, [imageRef]);

  return (
    <>
      <section className="w-screen h-[25vh] relative flex flex-col justify-start items-center bg-indigo-500">
        <Link href="mailto:darius.bogdanadrian@gmail.com">
          <TitleAnimated title="Contact me" />
        </Link>
        <Link
          ref={imageRef}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          href="https://github.com/daubog44/portafolio"
          className="absolute -left-14 bottom-0 rotate-[16deg] transition"
        >
          <Image src={githubMascot} alt="Github" width={150} height={150} />
        </Link>
      </section>
    </>
  );
};

export default Section3;
