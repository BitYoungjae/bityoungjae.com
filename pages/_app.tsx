import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/styles/GlobalStyle';
import { ThemeMode, themeList } from 'components/styles/themes';

type SetStateFunc<T> = Dispatch<SetStateAction<T>>;

export const SetThemeContext = createContext<SetStateFunc<ThemeMode>>(null);
export const ThemeKeyContext = createContext<ThemeMode>('dark');

function PostStoreApp({ Component, pageProps }) {
  const [themeKey, setThemeKey] = useState<ThemeMode>('dark');

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
      </Head>
      <GlobalStyle />
      <SetThemeContext.Provider value={setThemeKey}>
        <ThemeKeyContext.Provider value={themeKey}>
          <ThemeProvider theme={themeList[themeKey]}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ThemeKeyContext.Provider>
      </SetThemeContext.Provider>
    </>
  );
}

export default PostStoreApp;
