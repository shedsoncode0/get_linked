import React from "react";
import { Zoom } from "react-awesome-reveal";

// Images
import TheBigIdea from "../../../assets/images/the_big_idea.png";
import Star from "../../../assets/star/star_pink.png";
import StarPurple from "../../../assets/star/star_purple.png";

const Section2 = () => {
  return (
    <section className="flex-1 py-36 px-10 lg:flex block border-b border-white/20">
      <div className="flex-1 relative z-30 flex justify-center">
        <div className="dd relative w-[490px] h-[477px]">
          <img
            className="w-[21px] absolute top-[30%] left-0"
            src={Star}
            alt=""
            srcset=""
          />
          <img src={TheBigIdea} alt="" srcset="" />
        </div>
      </div>
      <div className="flex-1 relative flex flex-col justify-center items-center ">
        <div className=" relative">
          <img
            className="w-[30px] absolute top-[10%] right-0"
            src={Star}
            alt=""
            srcset=""
          />

          <Zoom direction="right" duration={500} className="relative">
            <h1 className="font-clashDisplay relative font-bold text-center sm:text-[32px] text-[22px] text-white">
              Introduction to getlinked{" "}
            </h1>
            <h1 className="font-clashDisplay text-left lg:text-center font-bold sm:text-[32px] text-[22px] text-purple">
              tech Hackathon 1.0
            </h1>
            <p className="max-w-[535px] relative w-full text-center lg:text-left font-montserrat text-[14px] font-medium text-white">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default Section2;
