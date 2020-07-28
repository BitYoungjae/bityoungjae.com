import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../components/styles/themes/default';
import { GlobalStyle } from 'components/styles/GlobalStyle';

function PostStoreApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default PostStoreApp;
