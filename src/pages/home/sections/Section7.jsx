import React from "react";
import { AttentionSeeker, Fade, Slide } from "react-awesome-reveal";

// Images
import Arrow from "../../../assets/images/cup/arrow.png";
import Cup from "../../../assets/images/cup/cup.png";
import CloudUp from "../../../assets/images/cup/cloud_up.png";
import Sparkles from "../../../assets/images/cup/sparkles.png";
import Spark2 from "../../../assets/images/cup/spark2.png";
import CloudDown from "../../../assets/images/cup/cloud_down.png";
import BronzeMedal from "../../../assets/images/bronze_medal.png";
import SilverMedal from "../../../assets/images/silver_medal.png";
import GoldMedal from "../../../assets/images/gold_medal.png";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.05,
  speed: 500,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const Section7 = () => {
  return (
    <section className="flex py-20 items-center lg:flex-row flex-col">
      <div className="flex-1 flex justify-center items-center relative top-40">
        <div className="w-[548px] h-[483]  relative">
          <img src={Cup} alt="cup" className="hovering-img" srcset="" />
          {/*  */}
          <Slide direction="left" duration={400} className="absolute top-0">
            <AttentionSeeker effect="jello" duration={700} delay={300}>
              <div className="hovering-img top-0">
                <img src={Arrow} alt="" srcset="" />
              </div>
            </AttentionSeeker>
          </Slide>
          {/*  */}
          <Fade delay={400}>
            <AttentionSeeker
              className="absolute top-0 "
              effect="flash"
              duration={700}
              delay={200}
            >
              <div className="hovering-img top-0 ">
                <img src={Sparkles} alt="" srcset="" />
              </div>
            </AttentionSeeker>
          </Fade>
          <Fade delay={700}>
            <AttentionSeeker
              className="absolute top-0 "
              effect="flash"
              duration={700}
              delay={200}
            >
              <div className="hovering-img top-0 ">
                <img src={Spark2} alt="" srcset="" />
              </div>
            </AttentionSeeker>
          </Fade>
          {/*  */}
          <Slide className="absolute top-0 " duration={700}>
            <div className="hovering-img2">
              <img src={CloudUp} alt="cloud" srcset="" />
            </div>
          </Slide>
          <Slide direction="up" className="absolute top-0 " duration={700}>
            <div className="hovering-img3">
              <img src={CloudDown} alt="cloud" srcset="" />
            </div>
          </Slide>
        </div>
      </div>
      {/* Section 2 */}
      <div className="flex-1 flex-col w-full flex items-center">
        <div className=" flex flex-col ">
          <h1 className="font-bold text-white font-clashDisplay text-[32px]">
            Prizes and
            <br />
            <span className="text-purple">Rewards</span>
          </h1>{" "}
          <p className="max-w-[401px] font-montserrat text-white w-full mt-5">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
        {/* Cards container */}
        <div className="mt-20 flex items-end">
          {/* Card 1 */}
          <Tilt options={defaultOptions}>
            <div className="flex-col relative flex items-center w-full">
              <div className="w-[179px]  z-50">
                <img src={SilverMedal} alt="medal" />
              </div>
              <div className="flex-col pb-7 px-4 absolute top-[90px] flex justify-end items-center max-w-[212px] h-[276px] w-full border-[1px] border-purple rounded-lg bg-purple/10 backdrop-blur-md">
                <h1 className="font-montserrat text-white font-bold text-[40px]">
                  2st
                </h1>
                <p className="font-montserrat text-white font-semibold text-[24px]">
                  Runner
                </p>
                <h1 className="font-montserrat text-purple font-bold text-[32px]">
                  N200,000
                </h1>
              </div>
            </div>
          </Tilt>
          {/*  */}
          {/* Card 2 */}
          <Tilt options={defaultOptions}>
            <div className="flex-col relative flex items-center w-full">
              <div className="w-[296px]  z-50">
                <img src={GoldMedal} alt="" srcset="" />
              </div>
              <div className="flex-col pb-6 absolute top-40 flex justify-end items-center max-w-[212px] h-[347px] w-full border-[1px] border-blue rounded-lg bg-blue/10 backdrop-blur-md">
                <h1 className="font-montserrat text-white font-bold text-[40px]">
                  1st
                </h1>
                <p className="font-montserrat text-white font-semibold text-[24px]">
                  Runner
                </p>
                <h1 className="font-montserrat text-blue font-bold text-[32px]">
                  N400,000
                </h1>
              </div>
            </div>n  
          </Tilt>
          {/*  */}
          {/* Card 3 */}
          <Tilt options={defaultOptions}>
            <div className="flex-col relative flex items-center w-full">
              <div className="w-[179px]  z-50">
                <img src={BronzeMedal} alt="medal" />
              </div>
              <div className="flex-col pb-7 px-4 absolute top-[90px] flex justify-end items-center max-w-[212px] h-[276px] w-full border-[1px] border-purple rounded-lg bg-purple/10 backdrop-blur-md">
                <h1 className="font-montserrat text-white font-bold text-[40px]">
                  3st
                </h1>
                <p className="font-montserrat text-white font-semibold text-[24px]">
                  Runner
                </p>
                <h1 className="font-montserrat text-purple font-bold text-[32px]">
                  N150,000
                </h1>
              </div>
            </div>
          </Tilt>
          {/*  */}
          {/* Card 2 */}
        </div>
      </div>
    </section>
  );
};

export default Section7;
