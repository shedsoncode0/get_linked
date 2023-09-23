import { ContainerOne, ContainerTwo } from "./footerComponents";
import PhoneIcon from "../../assets/icons/phone-icon.png";
import LocationIcon from "../../assets/icons/location-icon.png";
import StarOne from "../../assets/icons/star1.png";
import StarTwo from "../../assets/icons/star2.png";
import StarThree from "../../assets/icons/star3.png";
import StarFour from "../../assets/icons/star4.png";
import { useId } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Footer = () => {
  const id = useId();
  const [useWidth, setUseWidth] = useState(null);
  window.addEventListener("resize", () => {
    return setUseWidth(document.getElementById(id).clientWidth);
  });

  useEffect(() => {
    let footerWidth = document.getElementById(id).clientWidth;
    setUseWidth(footerWidth);

    return console.log(useWidth);
  }, [id, useWidth]);

  const contactInfo = [
    {
      icon: PhoneIcon,
      name: "Phone icon",
      details: "+234 6707653444",
      width: "12",
      height: "12",
    },
    {
      icon: LocationIcon,
      name: "Location icon",
      details: "27,Alara Street Yaba 100012 Lagos State",
      width: "13",
      height: "15",
    },
  ];

  let newFooterWidth = useWidth === null ? 1 : useWidth;
  const stars = [
    { icon: StarOne, x: (22 / newFooterWidth) * 100, y: "107" },
    { icon: StarTwo, x: (658 / newFooterWidth) * 100, y: "300" },
    { icon: StarThree, x: (984 / newFooterWidth) * 100, y: "99" },
    { icon: StarFour, x: (1295 / newFooterWidth) * 100, y: "235" },
  ];

  return (
    <footer
      id={id}
      className="relative w-full lg:h-[393px] bg-[#100B20] text-white pt-[70px] pb-[50px] md:pb-[40px] lg:pb-0"
    >
      {/* Star icons */}
      {stars.map((star, index) => (
        <img
          key={index}
          src={star.icon}
          alt="star icon"
          width="15"
          height="15"
          style={{
            position: "absolute",
            top: star.y + "px",
            left: star.x + "%",
          }}
        />
      ))}
      {/* End */}

      <div className="max-w-[1086px] w-[68%] md:w-[70%] lg:w-[85%] xl:w-full mx-auto flex flex-col md:flex-row flex-wrap md:justify-between md:gap-y-12">
        {/* Container One */}
        <ContainerOne />

        {/* Container Two */}
        <ContainerTwo />

        {/* Container Three */}
        <div className="w-fit flex flex-col gap-y-[19px] font-montserrat mt-[61px] md:mt-[13px]">
          <h3 className="text-sm text-[#D434FE] font-semibold">Contact Us</h3>
          {contactInfo.map((info, index) => (
            <div key={index} className="w-fit flex items-center gap-x-4">
              <img
                src={info.icon}
                alt={info.name}
                width={info.width}
                height={info.height}
              />
              <span
                className={`text-xs ${
                  index === 1
                    ? "w-[89px] md:w-[169px] lg:w-[89px] leading-[172.4%]"
                    : ""
                }`}
              >
                {info.details}
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs font-montserrat mt-[60px] md:mt-[53px] text-center">
        All rights reserved. © getlinked Ltd.
      </p>
    </footer>
  );
};

export default Footer;
