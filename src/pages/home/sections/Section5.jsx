import React from "react";
import { Zoom } from "react-reveal";

// Images
import Man from "../../../assets/images/man_thinking.png";
import Question3D from "../../../assets/images/Question3d.png";
import { useState } from "react";
import Accordion from "../../../components/Accordion";

const Section5 = () => {
  return (
    <section className=" lg:flex py-14 lg:pl-28 lg:px-0 px-10 block border-b border-white/20">
      <div className="flex-1 flex-col flex">
        
          <h1 className="font-clashDisplay text-center lg:text-left font-bold sm:text-[32px] text-[22px] text-white">
            Frequently Ask
          </h1>
          {/* <Slide bottom> */}
          <h1 className="font-clashDisplay text-center lg:text-left font-bold sm:text-[32px] text-[22px] text-purple">
            Question
          </h1>
          <p className="font-montserrat font-medium text-[14px] max-w-[400px] w-full text-white mt-5">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>

          <div className="max-w-[427px] w-full mt-10">
            <Accordion
              text={"Can I work on a project I started before the hackathon?"}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel
            necessitatibus ea error ullam. Quis, nobis vel. Dignissimos
            repudiandae necessitatibus eveniet ipsa, cumque quisquam iure qui.
            Minima laboriosam aliquid nobis?"
            />
            <Accordion
              text={"Can I work on a project I started before the hackathon?"}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel
            necessitatibus ea error ullam. Quis, nobis vel. Dignissimos
            repudiandae necessitatibus eveniet ipsa, cumque quisquam iure qui.
            Minima laboriosam aliquid nobis?"
            />
            <Accordion
              text={"Can I work on a project I started before the hackathon?"}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel
            necessitatibus ea error ullam. Quis, nobis vel. Dignissimos
            repudiandae necessitatibus eveniet ipsa, cumque quisquam iure qui.
            Minima laboriosam aliquid nobis?"
            />
            <Accordion
              text={"Can I work on a project I started before the hackathon?"}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel
            necessitatibus ea error ullam. Quis, nobis vel. Dignissimos
            repudiandae necessitatibus eveniet ipsa, cumque quisquam iure qui.
            Minima laboriosam aliquid nobis?"
            />
            <Accordion
              text={"Can I work on a project I started before the hackathon?"}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel
            necessitatibus ea error ullam. Quis, nobis vel. Dignissimos
            repudiandae necessitatibus eveniet ipsa, cumque quisquam iure qui.
            Minima laboriosam aliquid nobis?"
            />
          
          {/* </Slide> */}
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative">
          <img src={Man} alt="man" />
          <div className="hovering-img absolute top-0 ">
            <Zoom>
              <img className="" src={Question3D} alt="question3d" />
            </Zoom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
