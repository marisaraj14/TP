// import "../../styles/index.scss";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import MainContent from "./MainContent";
import Service from "./Service";
import WhyUs from "./WhyUs";

export default function MainBlock() {
  return (
    <div>
      <NavBar />
      <Layout>
        <MainContent />
      </Layout>
      <Service />
      <Layout>
        <WhyUs />
      </Layout>
      <AboutUs/>
      <Layout>
        <ContactUs />
      </Layout>
      <Footer/>
    </div>
  );
}
