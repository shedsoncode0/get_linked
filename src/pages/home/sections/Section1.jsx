import React from "react";
import { motion as m } from "framer-motion";

// Image
import Vector from "../../../assets/images/vector.png";
import MainBoy from "../../../assets/images/main_boy.png";
import World from "../../../assets/images/world.png";
import { PrimaryButton } from "../../../components/buttons";
import { CountDown } from "../../../components";
import { AttentionSeeker } from "react-awesome-reveal";

// Image
import Blob from "../../../assets/images/blob3.png";
import Blob2 from "../../../assets/images/blob2.png";
import StarDark from "../../../assets/star/star_dark.png";
import Star from "../../../assets/star/star.png";

const Section1 = () => {
  return (
    <section className="flex-1 z-50 relative border-b border-white/20 pl-28">
      {/* blob */}
      <div className="blurry absolute md:-top-3 left-48 w-[20rem] h-[17rem] md:w-[30rem] md:h-[50vh] rounded-full bg-[#903AFF77]"></div>
      {/*  */}
      <div className="flex flex-col items-end pr-14">
        <h1 className="font-montserrat text-[36px] z-30 italic font-bold text-white relative">
          Igniting a Revolution in HR Innovation
        </h1>
        <div className="w-[280px] z-40 sketch_clip_path">
          <img src={Vector} alt="vector" />
        </div>
        {/* blob */}
        <div className="blurry absolute top-10 -right-10 w-[20rem] h-[17rem] md:w-[30rem] md:h-[50vh]  rounded-full bg-[#903AFF77]"></div>
        {/*  */}
      </div>
      <div className="w-full relative flex lg:flex-row flex-col justify-between items-center mt-10">
        <img
          className="w-[26px] absolute left-36 top-0"
          src={Star}
          alt="star"
          srcset=""
        />
        <div className="flex-1">
          <div className="font-clashDisplay h-[98px] text-[80px] overflow-hidden  font-bold text-white">
            <m.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.5 }}
            >
              getlinked Tech
            </m.h1>
          </div>
          <div className="font-clashDisplay h-[98px] text-[80px] overflow-hidden  font-bold text-white">
            <m.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hackathon <span className="text-purple">1.0</span>
            </m.h1>
          </div>
          <p className="text- lg:text-left text-center font-medium font-montserrat text-white w-[522px]">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <div className="flex lg:justify-start justify-center">
            <div className="w-[172px] mt-10 primary_button transition-all ">
              <PrimaryButton />
            </div>
          </div>
          <div className="lg:mt-20 mt-6 flex lg:justify-start justify-center relative">
            <img
              className="w-[26px] absolute right-[300px] bottom-0"
              src={StarDark}
              alt=""
              srcset=""
            />
            <CountDown />
          </div>
        </div>
        {/* Layout 2 */}
        <div className="relative flex-1 flex justify-end">
          <img src={MainBoy} alt="" srcset="" />
          <img className="w-[26px] absolute left-0" src={StarDark} />

          <m.div
            initial={{ rotateZ: 2, scale: 1 }}
            animate={{ rotateZ: 0, scale: 0.98 }}
            transition={{
              ease: "easeInOut",
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute world_image z-30 top-0 left-10"
          >
            <AttentionSeeker effect="pulse">
              <img src={World} alt="" srcset="" />
            </AttentionSeeker>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
