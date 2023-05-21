import { useEffect, useState } from "react";

export default function useScrollTrigger(options = {}) {
  const { threshold } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const targetPosition = window.innerHeight + threshold;

      if (scrollPosition > targetPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isVisible;
}
