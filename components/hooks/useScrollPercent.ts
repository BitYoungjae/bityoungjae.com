import { useState, useEffect, useCallback } from 'react';
import { throttling } from './lib/throttling';

interface useScrollObserverProps {
  container?: HTMLElement;
  throttlingTime?: number;
}

export const useScrollPercent = (
  { container, throttlingTime }: useScrollObserverProps = {
    throttlingTime: 50,
  },
) => {
  const [scrollPercent, setPercent] = useState(0);

  const scrollHandler = useCallback(
    throttling(() => {
      const percent = getScrollPercent(container);
      setPercent(percent);
    }, throttlingTime),
    [throttlingTime, container, setPercent],
  );

  useEffect(() => {
    const targetContainer = container ?? document;
    targetContainer.addEventListener('scroll', scrollHandler);
    return () => {
      targetContainer.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return { scrollPercent };
};

const getScrollPercent = (container?: HTMLElement) => {
  const rootElement = document.documentElement;

  let scrollHeight: number = rootElement.scrollHeight;
  let innerHeight: number = window.innerHeight;
  let scrollOffset: number = window.pageYOffset;

  if (container) {
    scrollHeight = container.scrollHeight;
    innerHeight = container.clientHeight;
    scrollOffset = container.scrollTop;
  }

  const percent = scrollOffset / (scrollHeight - innerHeight);

  return Math.round(percent * 100);
};
