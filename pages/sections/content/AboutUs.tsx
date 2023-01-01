import Layout from "../components/Layout";
// import "../../styles/index.scss";

export default function AboutUs() {
  return (
    <div className="aboutus" id="aboutus">
      <Layout>
      <span className="aboutus_title">
              About <span className="aboutus_bold">Us</span>
            </span>
        <div className="aboutus_container">
          <div>
            <p className="aboutus_para">
              TechParsona is created by seasoned experts with a track record of
              professional, academic, and technological achievements. We have
              more than 10 years of combined professional experience in the
              technology sector. We have vast experience developing and
              implementing IT solutions and have exposure to the worldwide
              working professional community.
            </p>
            <br />
            <p className="aboutus_para">
              We conduct our business with the rigour and philosophy of a global
              consulting firm while moving with the agility and inventiveness of
              a boutique consulting firm to offer you high-quality services at a
              special financial value.
            </p>
          </div>
          <div>
            <img src="/media/aboutus.png" alt="About us" className="aboutus_img"/>
          </div>
        </div>
        <p className="aboutus_headline">
          "We are trusted to complete your work effectively and expertly and
          that is the cornerstone of our business model."
        </p>
      </Layout>
    </div>
  );
}
