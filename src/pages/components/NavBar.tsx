import { motion } from "framer-motion";
import "../../styles/index.scss";
import fields from "./fields/data.json";
import Layout from "./Layout";

export default function NavBar() {
  return (
    <div className="navContainer">
      <Layout>
        <motion.p
          animate={{ y: 10 }}
          transition={{ type: "spring", duration: 0.7 }}
        >
          <div className="navContainer__flex">
            <span className="logoText">
              Tech <span className="logoText__color">Parsona</span>
            </span>
            <img
              src="/media/svg/navBarIcon.svg"
              alt="links"
              className="linkContainer"
            />
            <div className="navBarContainer">
              {fields.map((item) => (
                <motion.button whileHover={{ scale: 1.1,  }} animate={{color:"#4B8EB0"}}>
                  <a className="fields" href={item.path}>
                    {item.name}
                  </a>
                </motion.button>
              ))}
              <motion.button whileHover={{ scale: 1.1 }}>
                <a href="mailto:admin@techparsona.com" className="navButton">
                  Contact
                </a>
              </motion.button>
            </div>
          </div>
        </motion.p>
      </Layout>
    </div>
  );
}
