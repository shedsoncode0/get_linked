import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const PrimaryButton = ({onClick, text = "Register" }) => {
  return (
    <button  className=" primary_button outline-none h-[53px] font-montserrat font-medium text-base text-white grid place-content-center w-full rounded-[4px] bg-gradient-to-r from-pink via-purple to-blue">
      {text}
    </button>
  );
};

export default PrimaryButton;
