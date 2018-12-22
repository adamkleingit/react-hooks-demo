import { useState, useEffect, useCallback } from "react";
import { throttle } from "lodash/fp";

export const useFlag = initialVal => {
  const [flag, setFlag] = useState(initialVal);
  const toggleFlag = useCallback(() => setFlag(value => !value), []);

  return [flag, toggleFlag];
};

export const useDetectScroll = ref => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = throttle(17, () => {
      setIsScrolled(
        window.scrollY > ref.current.clientHeight + ref.current.offsetTop
      );
    });
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return isScrolled;
};
