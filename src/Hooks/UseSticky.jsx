import { useEffect, useRef, useState } from "react";

const useSticky = () => {
  const [isSticky, setIsSticky] = useState();
  const element = useRef(null);

  const handleScroll = () => {
    window.scrollY > element.current.getBoundingClientRect().bottom
      ? setIsSticky(true)
      : setIsSticky(false);
  };

  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut;
    return () => {
      let context = this,
        args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll));
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [debounce, handleScroll]);

  //   {isSticky && }

  return;
  {
    isSticky, element;
  }
};

export default useSticky;
