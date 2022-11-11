import reasons from "./data/whyus.json";
import "../../styles/index.scss";
import { motion } from "framer-motion";

export default function WhyUs() {
  return (
    <div className="whyusContainer">
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
                {/* <p className="whyusCardDesktop_title">{item.title}</p> */}
                <div className="item__body">
                  <span>
                    {item.description}{" "}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.95206 7.36936C3.01456 7.36936 2.20964 7.03792 1.53729 6.37504C0.874408 5.7027 0.542969 4.89777 0.542969 3.96027C0.542969 3.03224 0.874408 2.23679 1.53729 1.57391C2.20964 0.911029 3.01456 0.57959 3.95206 0.57959C4.86115 0.57959 5.65661 0.911029 6.33842 1.57391C7.02024 2.23679 7.36115 3.03224 7.36115 3.96027C7.36115 4.58527 7.20017 5.15819 6.8782 5.67902C6.5657 6.19039 6.15376 6.60232 5.6424 6.91482C5.13104 7.21785 4.56759 7.36936 3.95206 7.36936Z"
                        fill="#4B8EB0"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* <p className="whyusTextContainer_description">
                {item.description}
              </p> */}
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
