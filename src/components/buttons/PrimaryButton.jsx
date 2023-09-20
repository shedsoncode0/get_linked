import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const PrimaryButton = ({ to, onClick, text = "Register" }) => {
  return (
    <Link className=" primary_button h-[53px] font-montserrat font-medium text-base text-white grid place-content-center w-full rounded-[4px] bg-gradient-to-r from-pink via-purple to-blue">
      {text}
    </Link>
  );
};

export default PrimaryButton;
