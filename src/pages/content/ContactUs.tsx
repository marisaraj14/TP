import { motion } from "framer-motion";
import "../../styles/index.scss";

export default function ContactUs() {
  return (
    <div className="contactusContainer">
      <img
        src="/media/callady.png"
        alt="Call Us"
        className="contactusContainer_image"
      />
      <div>
        <span className="contactUsTitle">
          If you believe {" "}
          <span className="contactUsTitle_bold">we’re right for you.</span>
        </span>
        <div>
        <span className="contactUsEmail">
          Write to us at{" "}
         <span><a href="mailto:admin@techparsona.com">admin@techparsona.com</a></span> 
        </span></div>
        <motion.div  whileHover={{ scaleY: 1.05}}  whileTap={{ scale: 0.9 }} className="contactusButton">
          <a href="mailto:admin@techparsona.com" className="contactusButton_main">
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
}
