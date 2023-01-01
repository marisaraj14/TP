import Head from "next/head"
import MainBlock from "./sections/content/MainBlock";
// import "../index.css"

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="media/textlogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <title>
          Tech Parsona - We provide the right Oracle solutions for you.
        </title>
        <link type="stylesheet" href="../src/styles/index.scss" />
        <meta
          name="description"
          content="TechParsona is created by seasoned experts with a track record of
    professional, academic, and technological achievements."
        />
      </Head>
      <main>
       <MainBlock/>
      </main>
    </>
  );
}
