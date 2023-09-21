import React from "react";
import { motion as m } from "framer-motion";

// Image
import Vector from "../../../assets/images/vector.png";
import MainBoy from "../../../assets/images/main_boy.png";
import World from "../../../assets/images/world.png";
import { PrimaryButton } from "../../../components/buttons";
import { CountDown } from "../../../components";
import { AttentionSeeker } from "react-awesome-reveal";

const Section1 = () => {
  return (
    <section className="flex-1  border-b border-white/20 pl-28">
      <div className="flex flex-col items-end pr-14">
        <h1 className="font-montserrat text-[36px] italic font-bold text-white relative">
          Igniting a Revolution in HR Innovation
        </h1>
        <div className="w-[280px] sketch_clip_path">
          <img src={Vector} alt="vector" />
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-between items-center mt-10">
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
          <div className="lg:mt-20 mt-6 flex lg:justify-start justify-center">
            <CountDown />
          </div>
        </div>
        {/* Layout 2 */}
        <div className="relative flex-1 flex justify-end">
          

          <img src={MainBoy} alt="" srcset="" />
          
          <m.div
            initial={{ rotateZ: 2, scale: 1 }}
            animate={{ rotateZ: 0, scale: 0.98 }}
            transition={{
              ease: "easeInOut",
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute world_image top-0 left-10"
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
