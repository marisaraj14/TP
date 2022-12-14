// import "../../styles/index.scss";
import Layout from "./Layout";
import fields from "./fields/data.json";

export default function Footer() {
  return (
    <div className="footer">
      <Layout>
        <div className="footer_linkContainer">
          <a href="#home" className="footer_linkText">
            Home
          </a>
          {fields.map((item) => (
            <a href={item.path} className="footer_linkText">
              {item.name}
            </a>
          ))}
          <a href="mailto:admin@techparsona.com" className="footer_linkText">
            Contact
          </a>
        </div>
      </Layout>
      <div className="subcontainer">
        <Layout>
          <div className="subcontainer_display">
            <svg
              width="12"
              height="18"
              viewBox="0 0 22 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10.5442"
                cy="16.7482"
                r="9.5"
                transform="rotate(-3.20959 10.5442 16.7482)"
                stroke="white"
              />
              <path
                d="M5.33195 16.56C5.33195 15.4267 5.55195 14.44 5.99195 13.6C6.44529 12.76 7.06529 12.12 7.85195 11.68C8.65195 11.2267 9.56529 11 10.592 11C11.952 11 13.0653 11.34 13.932 12.02C14.812 12.7 15.3586 13.6133 15.572 14.76H14.632C14.4586 13.8267 14.0053 13.0933 13.272 12.56C12.552 12.0267 11.6586 11.76 10.592 11.76C9.79195 11.76 9.06529 11.94 8.41195 12.3C7.75862 12.6467 7.23195 13.1867 6.83195 13.92C6.44529 14.64 6.25195 15.52 6.25195 16.56C6.25195 17.6133 6.44529 18.5 6.83195 19.22C7.23195 19.94 7.75862 20.48 8.41195 20.84C9.06529 21.2 9.79195 21.38 10.592 21.38C11.6586 21.38 12.552 21.1133 13.272 20.58C14.0053 20.0467 14.4586 19.3133 14.632 18.38H15.572C15.3586 19.5133 14.812 20.4267 13.932 21.12C13.052 21.8133 11.9386 22.16 10.592 22.16C9.56529 22.16 8.65195 21.9333 7.85195 21.48C7.06529 21.0267 6.44529 20.38 5.99195 19.54C5.55195 18.6867 5.33195 17.6933 5.33195 16.56Z"
                fill="white"
              />
            </svg>
            <p className="subcontainer_text">
              2022 TechParsona, All Rights Reserved.
            </p>
          </div>
        </Layout>
      </div>
    </div>
  );
}
