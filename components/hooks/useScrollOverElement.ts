import { useState, useRef, useEffect } from 'react';

export const useScrollOverElement = () => {
  const [isOver, setIsOver] = useState(false);
  const targetElementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const targetElement = targetElementRef.current;
    const elementHeight = targetElement.clientHeight;

    const scrollHandler = () => {
      if (window.pageYOffset > elementHeight) {
        setIsOver(true);
        return;
      }

      setIsOver(false);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [targetElementRef.current, setIsOver]);

  return {
    isOver,
    targetElementRef,
  };
};
