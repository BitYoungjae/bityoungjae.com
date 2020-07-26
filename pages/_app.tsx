import React, { useState, useCallback } from 'react';
import { useMedia } from 'components/hooks/useMedia';

const defaultSiteContext: {
  isMenuOpen: boolean;
  isTabletOrMobile: boolean;
  isDesktop: boolean;
  toggleMenu: () => void;
} = {
  isMenuOpen: false,
  toggleMenu: null,
  isTabletOrMobile: false,
  isDesktop: false,
};

export const SiteContext = React.createContext(defaultSiteContext);

function PostStoreApp({ Component, pageProps }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { isTabletOrMobile, isDesktop } = useMedia();
  const toggleMenu = useCallback(() => setMenuOpen((isOpen) => !isOpen), [
    setMenuOpen,
  ]);

  return (
    <SiteContext.Provider
      value={{
        isMenuOpen,
        isTabletOrMobile,
        isDesktop,
        toggleMenu,
      }}>
      <Component {...pageProps} />
    </SiteContext.Provider>
  );
}

export default PostStoreApp;
