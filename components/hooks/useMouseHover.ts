import { useState, useCallback } from 'react';

export const useMouseHover = () => {
  const [isHover, setHover] = useState(false);
  const hoverMouseEvent = useCallback(() => {
    setHover((hoverState) => !hoverState);
  }, [setHover]);

  return {
    isHover,
    hoverMouseEvent,
  };
};
