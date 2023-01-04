import Head from "next/head";
import MainBlock from "./sections/content/MainBlock";
// import "../index.css"

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="./media/logo.png" />
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
        <meta property="og:title" content="Tech Parsona - We provide the right Oracle solutions for you." />
        <meta
          property="og:description"
          content="TechParsona is created by seasoned experts with a track record of
          professional, academic, and technological achievements."
        />
        <meta property="og:url" content="https://techparsona.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <main>
        <MainBlock />
      </main>
    </>
  );
}
