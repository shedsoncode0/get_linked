import React from "react";

const Section8 = () => {
  return (
    <section className="w-full flex flex-col items-center  py-20">
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
          <div className="w-[200px] border-b-4 border-purple h-[150px]"></div>
          <div className="w-[200px] border-x-4 border-b-4 border-purple h-[150px]"></div>
          <div className="w-[200px] border-b-4 border-purple h-[150px]"></div>
          <div className="w-[200px] h-[150px]"></div>
          <div className="w-[200px] border-x-4 border-purple h-[150px]"></div>
          <div className="w-[200px] h-[150px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
