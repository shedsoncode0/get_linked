import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home.css";
import "../../components/buttons/button.css";

// Sections
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="pt-2">
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
    </div>
  );
};

export default Home;
