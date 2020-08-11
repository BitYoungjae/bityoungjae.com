import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/styles/GlobalStyle';
import { Provider, useSelector } from 'react-redux';
import store from 'modules';
import { getTheme } from 'modules/themeContext/selector';

function PostStoreApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
      </Head>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeWrapper>
          <Component {...pageProps} />
        </ThemeWrapper>
      </Provider>
    </>
  );
}

const ThemeWrapper = ({ children }) => {
  const theme = useSelector(getTheme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default PostStoreApp;
