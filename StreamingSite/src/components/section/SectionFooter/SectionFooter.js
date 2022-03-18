import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SectionFooter.css";

import footerImg from "./SectionFooterImages/woods.png";

const SectionFooter = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init({
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: true,
      duration: 1000,
    });
  }, []);
  return (
    <React.Fragment>
      <img
        data-aos="fade-down"
        data-aos-anchor=".whiteMoon"
        data-aos-duration="1000"
        src={footerImg}
        alt="error"
        className="footerWoods"
      />
    </React.Fragment>
  );
};

export default SectionFooter;
