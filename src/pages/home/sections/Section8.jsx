import React from "react";

// Images
import Paybox from "../../../assets/images/partners/Paybox.png";
import Liberty1 from "../../../assets/images/partners/Liberty1.png";
import Liberty2 from "../../../assets/images/partners/Liberty2.png";
import Winwise from "../../../assets/images/partners/winwise.png";
import Wisper from "../../../assets/images/partners/wisper.png";
import Vuzual from "../../../assets/images/partners/vuzual_plus.png";

const Section8 = () => {
  return (
    <section className="w-full relative flex flex-col items-center  py-20">
      {/* blob */}
      <div className="blurry absolute top-[250px] -left-5 w-[20rem] h-[20rem] rounded-full bg-[#903AFF77]"></div>
      <div className="blurry absolute top-[600px] -right-5 w-[20rem] h-[20rem] rounded-full bg-[#903AFF77]"></div>
      {/*  */}
      <div className="w-full flex items-center space-y-4 flex-col">
        <h1 className="text-white font-clashDisplay text-[32px] font-bold">
          Partners and Sponsors
        </h1>
        <p className="w-full max-w-[447px] text-center text-white font-montserrat text-sm font-normal">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="border-[1px] border-purple rounded-[5px] w-full flex justify-center items-center max-w-[90%] h-[560px] mt-14">
        <div className="grid grid-cols-3 relative ">
          <div className="absolute flex justify-evenly  w-full top-[50%] translate-y-[-50%] p-2">
            <div className="p-5 rounded-full bg-darkBlue" />
            <div className="p-5 rounded-full bg-darkBlue" />
          </div>
          <div className="w-[300px] grid place-content-center border-b-4 border-purple h-[150px]">
            <img className="w-[120px]" src={Liberty1} alt="" />
          </div>
          <div className="w-[300px] grid place-content-center border-x-4 border-b-4 border-purple h-[150px]">
            <img className="w-[160px]" src={Liberty2} alt="" />
          </div>
          <div className="w-[300px] grid place-content-center border-b-4 border-purple h-[150px]">
            <img className="w-[131px]" src={Winwise} alt="" />
          </div>
          <div className="w-[300px] grid place-content-center h-[150px]">
            <img className="w-[147px]" src={Wisper} alt="" />
          </div>
          <div className="w-[300px] grid place-content-center border-x-4 border-purple h-[150px]">
            <img className="w-[204px]" src={Paybox} alt="" />
          </div>
          <div className="w-[300px] grid place-content-center h-[150px]">
            <img className="w-[231px]" src={Vuzual} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
