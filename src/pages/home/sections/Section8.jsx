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
        <div className="bg-amber-200">
          <div className="flex">
            <div className="p-10 bg-slate-300"></div>
            <div className="p-10 bg-slate-300"></div>
            <div className="p-10 bg-slate-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
