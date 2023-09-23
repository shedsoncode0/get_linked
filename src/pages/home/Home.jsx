import React from "react";
import "./home.css";
import "../../components/buttons/button.css";

// Sections
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import { useEffect } from "react";
import Section7 from "./sections/Section7";
import Section8 from "./sections/Section8";
import Section9 from "./sections/Section9";
import { Footer } from "../../components";

// Images
import Blob from "../../assets/images/blob4.png";
import Blob2 from "../../assets/images/blob5.png";
import Blob3 from "../../assets/images/blob6.png";

const Home = () => {
  return (
    <div className="pt-2 relative ">
      <Section1 />
      {/* Section 2 */}
      <Section2 />
      {/* Section 3 */}
      <Section3 />
      {/* Section 4 */}
      <Section4 />
      {/* Section 5 */}
      <Section5 />
      {/* Section 6 */}
      <Section6 />
      {/* Section 7 */}
      <Section7 />
      <div className="w-full h-64"></div>
      {/* Section 8 */}
      <Section8 />
      <div className="w-full h-64"></div>
      {/* Section 9 */}
      <Section9 />
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
