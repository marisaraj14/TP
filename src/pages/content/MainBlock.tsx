import { BrowserRouter } from "react-router-dom";
import "../../styles/index.scss";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import ContactUs from "./ContactUs";
import MainContent from "./MainContent";
import Service from "./Service";
import WhyUs from "./WhyUs";


export default function MainBlock() {
  return (
    <>
      <NavBar />
      <Layout>
        <MainContent />
      </Layout>
      <Service />
      <Layout>
        <WhyUs />
        <ContactUs />
      </Layout>
    </>
  );
}
