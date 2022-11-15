import reasons from "./data/whyus.json";
import "../../styles/index.scss";
import { motion } from "framer-motion";

export default function WhyUs() {
  return (
    <div className="whyusContainer" id="whyus">
      <span className="whyusTitle">
        Why <span className="whyusTitle_bold">Us?</span>
      </span>
      <div className="whyusContainer_desktop">
        {reasons.map((item) => (
          <motion.div>
            <div className="whyusCardDesktop">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="whyusCardDesktop_image"
              />
              <p className="whyusCardDesktop_title">{item.title}</p>
              <div className="item__overlay">
                <div className="item__body">
                  <span>
                    {item.description}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="whyusContainer_mobile">
        {reasons.map((item) => (
          <div className="whyusCardMobile">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="whyusCardMobile_image"
            />
            <div className="whyusTextContainer">
              <p className="whyusTextContainer_title">{item.title}</p>
              <p className="whyusTextContainer_description">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
