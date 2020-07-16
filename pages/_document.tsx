import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <link rel='stylesheet' href='/styles/normalize.css' />
          <link
            href='https://fonts.googleapis.com/css2?family=Jua&family=Noto+Sans+KR&family=Montserrat:wght@900&display=swap'
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
}
