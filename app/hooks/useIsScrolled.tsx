import { useEffect, useState } from "react";
import { useScrollDirection } from "./useScrollDetection";

export const useIsScrolledDown = function () {
  const [isScrolled, setIsScrolled] = useState(false);
  const isScroll = useScrollDirection();

  useEffect(() => {
    if (isScroll === "down" && !isScrolled) {
      setIsScrolled(true);
    }
  }, [isScroll, isScrolled]);

  return isScrolled;
};
