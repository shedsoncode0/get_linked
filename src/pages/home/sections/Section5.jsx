// Images
import Man from "../../../assets/images/man_thinking.png";
import Question3D from "../../../assets/images/Question3d.png";
import { useState } from "react";
import Accordion from "../../../components/Accordion";
import { AttentionSeeker, Zoom } from "react-awesome-reveal";

const Section5 = () => {
  return (
    <section className=" lg:flex py-14  px-10 block border-b border-white/20">
      <div className="flex-1 flex-col flex justify-center items-center">
        <div>
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
        </div>

        <div className="max-w-[427px] w-full mt-10 space-y-6">
          <Accordion
            text={"Can I work on a project I started before the hackathon?"}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel
            necessitatibus ea error ullam. Quis, nobis vel. Dignissimos
            repudiandae necessitatibus eveniet ipsa, cumque quisquam iure qui.
            Minima laboriosam aliquid nobis?"
          />
          <Accordion
            text={"What happens if I need help during the hackathon?"}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel
            necessitatibus ea error ullam. Quis, nobis vel. Dignissimos
            repudiandae necessitatibus eveniet ipsa, cumque quisquam iure qui.
            Minima laboriosam aliquid nobis?"
          />
          <Accordion
            text={"What happens if I don't have an idea for a project?"}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel
            necessitatibus ea error ullam. Quis, nobis vel. Dignissimos
            repudiandae necessitatibus eveniet ipsa, cumque quisquam iure qui.
            Minima laboriosam aliquid nobis?"
          />
          <Accordion
            text={"Can I join a team or do I have to come with one?"}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel
            necessitatibus ea error ullam. Quis, nobis vel. Dignissimos
            repudiandae necessitatibus eveniet ipsa, cumque quisquam iure qui.
            Minima laboriosam aliquid nobis?"
          />
          <Accordion
            text={"What happens after the hackathon ends"}
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
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative z-50 ">
          <img className="max-w-[741px] w-full" src={Man} alt="man" />

          <div className="hovering-img z-50 absolute top-0 ">
            <Zoom direction="up" duration={500}>
              <AttentionSeeker effect="shake">
                <img className="" src={Question3D} alt="question3d" />
              </AttentionSeeker>
            </Zoom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
