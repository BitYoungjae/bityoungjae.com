import { useMediaQuery } from 'react-responsive';

export const useMedia = () => {
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1224px)',
  });
  const isDesktop = !isTabletOrMobile;

  return { isTabletOrMobile, isDesktop };
};
