import { motion } from "framer-motion";
// import "../../styles/index.scss";

export default function MainContent() {
  return (
    <div className="mainContent_container" id="home">
      <img src="/media/deskman.png" className="deskman" alt="Man on a desk" />
      <motion.p animate={{ y: -10 }} transition={{ duration: 0.7 }}>
        <span className="maintitle">
          We provide the {" "}<br/>
          <motion.span
            whileHover={{
              scale: 1.15,
              backgroundColor: "#FEDE65",
              color:"#4B8EB0"
            }}
            className="maintitle_highlight"
            transition={{ scale: { type: "spring", stiffness: 500 } }}
          >
            right Oracle Solutions
          </motion.span>
          <br/> {" "} for you
          <span className="maintitle_dot">.</span>
        </span>
      </motion.p>
    </div>
  );
}
