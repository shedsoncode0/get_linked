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
      <img src={Blob} className="absolute top-[1500px]" alt="" />
      <img src={Blob2} className="absolute right-0 top-[1900px]" alt="" />
      <Section3 />
      {/* Section 4 */}
      <img src={Blob} className="absolute top-[2700px]" alt="" />
      <img
        src={Blob}
        className="absolute -right-48 top-[2800px] rotate-180"
        alt=""
      />
      <Section4 />
      {/* Section 5 */}
      <Section5 />
      {/* Section 6 */}
      <Section6 />
      {/* Section 7 */}
      <img
        src={Blob3}
        className="absolute max-w-[1000px] left-14 top-[5200px]"
        alt=""
      />
      <img src={Blob2} className="absolute  top-[5600px] right-0" alt="" />
      <Section7 />
      <div className="w-full h-64"></div>
      {/* Section 8 */}
      <img
        src={Blob3}
        className="absolute -left-[500px] top-[6100px]"
        alt=""
      />
      <img src={Blob} className="absolute  top-[6500px] -right-20 rotate-180" alt="" />
      <Section8 />
      <div className="w-full h-64"></div>
      {/* Section 9 */}
      <Section9 />
    </div>
  );
};

export default Home;
