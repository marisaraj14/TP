import { motion } from "framer-motion";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../../styles/index.scss";
import fields from "./fields/data.json";
import Layout from "./Layout";

export default function NavBar() {
  const [modal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      {modal && (
        <div className="modalContainer">
          <img
            src="/media/closeicon.png"
            className="modalContainer_close"
            alt="close icon"
            onClick={() => setOpenModal(false)}
          />
          <div className="modalContainer_sub">
            {fields.map((item) => (
              <a
                href={item.path}
                onClick={() => setOpenModal(false)}
                className="modalContainer_title"
              >
                {item.name}
              </a>
            ))}
            <a
              href="mailto:admin@techparsona.com"
              className="modalContainer_button"
              onClick={() => setOpenModal(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
      <div className="navContainer">
        <Layout>
          <motion.p
            animate={{ y: 10 }}
            transition={{ type: "spring", duration: 0.7 }}
          >
            <div className="navContainer__flex">
              <div className="navContainer__flexbox ">
                <img
                  src="./media/textlogo.png"
                  alt="Logo"
                  className="navContainer__image"
                />

                <img
                  src="./media/logotext_2.png"
                  alt="Logo"
                  className="navContainer__imagetext"
                />
              </div>
              {/* <span className="logoText">
              Tech <span className="logoText__color">Parsona</span>
            </span> */}
              <img
                src="/media/svg/navBarIcon.svg"
                alt="links"
                className="linkContainer"
                onClick={() => setOpenModal(!modal)}
              />
              <div className="navBarContainer">
                {fields.map((item) => (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    animate={{ color: "#4B8EB0" }}
                  >
                    <AnchorLink className="fields" href={item.path}>
                      {item.name}
                    </AnchorLink>
                  </motion.button>
                ))}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="navButtonContainer"
                >
                  <a href="mailto:admin@techparsona.com" className="navButton">
                    Contact
                  </a>
                </motion.button>
              </div>
            </div>
          </motion.p>
        </Layout>
      </div>
    </>
  );
}
