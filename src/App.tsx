import MainBlock from "./pages/content/MainBlock";
import "./styles/index.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Tech Parsona - We provide the right Oracle solutions for you.
        </title>
        <meta
          name="description"
          content=" TechParsona is created by seasoned experts with a track record of
          professional, academic, and technological achievements."
        />
        ;
      </Helmet>
      <MainBlock />
    </HelmetProvider>
  );
}

export default App;
