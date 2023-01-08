import { Html, Head, Main, NextScript } from 'next/document'
import * as React from 'react';
import Home from '.';

export default function Document() {
  return (
    <Html lang="en">
      {/* <Head /> */}
      <Home/>
      <body>
        <main>
        <Main />
        <NextScript /></main>
      </body>
    </Html>
  )
}
