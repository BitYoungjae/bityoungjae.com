import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang='ko'>
        <Head>
          <link rel='shortcut icon' href='/favicon.png' type='image/png' />
          <link
            href='https://fonts.googleapis.com/css2?family=Jua&family=Noto+Sans+KR:wght@400;700&family=Montserrat:wght@900&display=swap'
            rel='stylesheet'
          />
          <script
            src='https://kit.fontawesome.com/ed29baba21.js'
            crossOrigin='anonymous'
            defer></script>
        </Head>
        <body>
          <div id='root'>
            <Main />
            <NextScript />
          </div>
        </body>
      </html>
    );
  }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
