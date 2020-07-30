import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../components/styles/themes/default';
import { GlobalStyle } from 'components/styles/GlobalStyle';

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
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default PostStoreApp;
