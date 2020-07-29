import { useState, useCallback, useEffect, useRef } from 'react';

export const useMouseHover = () => {
  const [isHover, setHover] = useState(false);
  const hoverMouseEvent = useCallback(() => {
    setHover(true);
  }, [setHover]);

  const leaveMouseEvent = useCallback(() => {
    setHover(false);
  }, [setHover]);

  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const containerDOM = containerRef.current;
    const mouseHandler = ({ target }) => {
      if (target === containerDOM) leaveMouseEvent();
    };

    containerDOM.addEventListener('mouseover', mouseHandler);

    return () => containerDOM.removeEventListener('mouseover', mouseHandler);
  }, [containerRef, leaveMouseEvent]);

  return {
    isHover,
    hoverMouseEvent,
    leaveMouseEvent,
    containerRef,
  };
};
