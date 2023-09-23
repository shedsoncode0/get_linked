import React from "react";

// Images
import Man from "../assets/images/man_siting.png";
import { PrimaryButton } from "../components/buttons";

const Input = ({ placeholder, onChange, lable }) => {
  return (
    <div className="  flex gap-y-1 flex-col w-full">
      <label className="font-montserrat text-[14px] text-white" htmlFor="lable">
        {lable}
      </label>
      <input
        className="p-4 border border-white bg-white/5 rounded-[4px] font-montserrat text-[14px]"
        placeholder={placeholder}
        name="lable"
        type="text"
        onChange={onChange}
      />
    </div>
  );
};

const Register = () => {
  return (
    <div className="w-full  flex xl:flex-row flex-col px-10 py-20">
      <div className="flex-1 flex justify-center items-center">
        <div className="max-w-[717px]">
          <img src={Man} alt="" />
        </div>
      </div>
      <div className="flex-1 items-center ">
        <div className="xl:bg-white/5 rounded-xl bg-transparent backdrop-blur-lg  xl:p-20 p-5">
          <div className="">
            <h1 className="text-purple font-clashDisplay text-[32px] font-bold">
              Register
            </h1>
            <p className="text-white">Be part of this movement! </p>
          </div>

          <div className="mt-4">
            <form>
              <h1 className="text-white font-montserrat text-[24px] text[14px] mb-10">
                CREATE YOUR ACCOUNT
              </h1>
              <div className=" xl:grid-cols-2 grid-cols-1 xl:w-[90%] w-full grid gap-10">
                <Input
                  lable="Team's Name"
                  placeholder="Enter the name of your group"
                />
                <Input lable="Phone" placeholder="Enter your phone number" />
                <Input lable="Email" placeholder="Enter your email address" />
                <Input
                  lable="Project Topic"
                  placeholder="What is your group project topic"
                />
              </div>
              <p className="italic font-[12px] text-purple font-montserrat mt-6">
                Please review your registration details before submitting
              </p>
              <div className="flex gap-x-2 mt-6">
                <input type="checkbox" name="" id="" />
                <h3 className="text-white font-montserrat text-[12px]">
                  I agreed with the event terms and conditions and privacy
                  policy
                </h3>
              </div>

              <div className="mt-6">
                <PrimaryButton />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
