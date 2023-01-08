import { Html, Head, Main, NextScript } from "next/document";
import * as React from "react";
import Home from ".";

export default function Document() {
  return (
    <Html lang="en">
      <Head prefix="og: https://ogp.me/ns#">
        <link rel="icon" href="../public/media/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <title>
          Tech Parsona - We provide the right Oracle solutions for you.
        </title>
        <link type="stylesheet" href="../src/styles/index.scss" />
        <link rel="canonical" href="https://techparsona.com/" key="canonical" />
        <meta
          name="description"
          content="TechParsona is created by seasoned experts with a track record of
    professional, academic, and technological achievements."
        />
        <link
          rel="search"
          type="application/opensearchdescription+xml"
          title="Tech Parsona"
        />
        <meta
          property="og:title"
          content="Tech Parsona - We provide the right Oracle solutions for you."
        />
        <meta property="og:site_name" content="Tech Parsona"/>
        <meta
          property="og:description"
          content="TechParsona is created by seasoned experts with a track record of
          professional, academic, and technological achievements."
        />
        <meta property="og:image" itemProp="../public/media/logo.png" />
        <meta property="og:url" content="https://techparsona.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <Home />
      <body>
        <main>
          <Main />
          <NextScript />
        </main>
      </body>
    </Html>
  );
}
