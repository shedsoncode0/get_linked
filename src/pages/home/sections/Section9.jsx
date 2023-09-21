import React from "react";

// Images
import Man from "../../../assets/images/man_standing_on_lock.png";
import Lock from "../../../assets/images/lock.png";
import Successfully from "../../../assets/images/green_check.png";
import { PrimaryButton } from "../../../components/buttons";

const Section9 = () => {
  return (
    <section className="flex items-center justify-center lg:flex-row flex-col">
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="max-w-[569px] w-full">
          <h1 className="text-white font-clashDisplay text-[32px] font-bold">
            Privacy Policy and
          </h1>
          <h1 className="text-purple font-clashDisplay text-[32px] font-bold ">
            Terms
          </h1>
          <p className="w-full max-w-[447px] mt-2 text-white/80 font-montserrat text-sm font-normal">
            Last updated on September 12, 2023
          </p>
          <p className="w-full max-w-[447px]  text-white font-montserrat text-sm font-normal mt-10">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
        </div>
        {/*  */}
        <div className="border-[1px] border-purple p-14 bg-white/5 rounded-[5px] max-w-[569px] w-full mt-20 ">
          <p className="max-w-[422px] w-full text-white/80 font-montserrat text-[14px]">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <h1 className="text-purple mt-5 font-montserrat text-[16px] font-bold">
            Licensing Policy
          </h1>
          <p className="max-w-[422px] w-full font-bold text-white font-montserrat text-[14px]">
            Here are terms of our Standard License:
          </p>
          <div className="mt-5">
            <div className="flex space-x-2">
              <div className="w-[17px] mt-2">
                <img src={Successfully} alt="successfully" />
              </div>
              <h1 className="text-white font-montserrat leading-7 text-sm font-normal ">
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </h1>
            </div>
            <div className="flex space-x-2 mt-3">
              <div className="w-[17px] mt-2">
                <img src={Successfully} alt="successfully" />
              </div>
              <h1 className="text-white font-montserrat leading-7 text-sm font-normal ">
                You are licensed to use the item available at any free source
                sites, for your project developement
              </h1>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="w-[172px]">

            <PrimaryButton text="Read More" />
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative flex items-center ">
          <div className="max-w-[530px] w-full z-0 absolute -top-48 left-5">
            <img src={Lock} alt="lock" />
          </div>
          <div className="max-w-[559px] w-full z-50">
            <img src={Man} alt="man" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section9;
