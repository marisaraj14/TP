import { motion, Variants } from "framer-motion";
import "../../styles/index.scss";
import Layout from "../components/Layout";
import serviceList from "./data/services.json";

export default function Service() {
  const cardVariants: Variants = {
    offscreen: {
      y: 0,
      opacity: 0,
    },
    onscreen: {
      y: -5,
      opacity: 1,
    },
  };

  return (
    <div className="serviceContainer">
      <Layout>
        <span className="serviceName">
          Our <span className="serviceName_bold">Services</span>{" "}
        </span>
        <motion.aside
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariants}
          transition={{
            duration: 0.25,
            delay: 0.5,
          }}
        >
          <div className="serviceCardContainer">
            {serviceList.map((item) => (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="serviceCard">
                  {/* <div className="serviceCard"> */}
                  <p className="serviceCard_title">{item.title}</p>
                  <p className="serviceCard_description">{item.description}</p>
                  {/* </div> */}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.aside>
      </Layout>
    </div>
  );
}
