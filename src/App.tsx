import MainBlock from "./pages/content/MainBlock";
import "./styles/index.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>
          Tech Parsona - We provide the right Oracle solutions for you.
        </title>
        <meta
          name="description"
          content="TechParsona is created by seasoned experts with a track record of
          professional, academic, and technological achievements."
        />
        ;
      </Helmet>
      <MainBlock />
    </HelmetProvider>
  );
}

export default App;
