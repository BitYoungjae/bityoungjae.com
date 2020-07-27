import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../components/styles/theme';

function PostStoreApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default PostStoreApp;
