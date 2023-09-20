import React from "react";
import { Zoom } from "react-reveal";

// Images
import TheBigIdea from "../../../assets/images/the_big_idea.png";

const Section2 = () => {
  return (
    <section className="flex-1 py-14 lg:pl-28 lg:px-0 px-10 lg:flex block border-b border-white/20">
      <div className="flex-1 flex justify-center">
        <div className="dd w-[490px] h-[477px]">
          <img src={TheBigIdea} alt="" srcset="" />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center ">
        <h1 className="font-clashDisplay font-bold text-center sm:text-[32px] text-[22px] text-white">
          Introduction to getlinked{" "}
        </h1>
        <Zoom right>
          <h1 className="font-clashDisplay text-center lg:text-left font-bold sm:text-[32px] text-[22px] text-purple">
            tech Hackathon 1.0
          </h1>
          <p className="max-w-[535px] w-full text-center lg:text-left font-montserrat text-[14px] font-medium text-white">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </Zoom>
      </div>
    </section>
  );
};

export default Section2;
