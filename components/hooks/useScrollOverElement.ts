import { useState, useRef, useEffect } from 'react';

export const useScrollOverElement = () => {
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.pageYOffset > 1) {
        setIsOver(true);
        return;
      }

      setIsOver(false);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [setIsOver]);

  return {
    isOver,
  };
};
