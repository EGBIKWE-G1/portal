import { useState, useEffect } from "react";

const useOnScreen = (ref, rootMargin = "0px") => {
  const [isVisble, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin }
    );

    const currentElement = ref?.current;

    if (currentElement) {
      observer.observe(currentElement);
    }
    return () => {
      observer.unobserve(currentElement);
    };
  });
  return isVisble;
};

export default useOnScreen;
