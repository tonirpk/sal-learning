import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Moon.css";

import WhiteMoon from "./MoonImages/white-moon.png";

const Moon = () => {
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
        data-aos="MoonUp"
        data-aos-delay="500"
        data-aos-duration="2000"
        src={WhiteMoon}
        alt="error"
        className="whiteMoon"
      />
    </React.Fragment>
  );
};

export default Moon;
