import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "./buttons";
import { AttentionSeeker } from "react-awesome-reveal";

const links = [
  {
    name: "Timeline",
    href: "/home",
  },
  {
    name: "Overview",
    href: "/home",
  },
  {
    name: "FAQs",
    href: "/home",
  },
  {
    name: "Contacts",
    href: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="w-full z-50 py-7 pt-10 px-28 border-b border-white/20 flex items-center">
      <AttentionSeeker effect="pulse">
        <h1 className="text-white font-clashDisplay font-bold text-[36px]">
          get
          <span className="text-purple">linked</span>
        </h1>
      </AttentionSeeker>

      <div className="flex-1 flex items-center justify-end  space-x-20">
        <div className="gap-1 flex lg:hidden flex-col">
          <div className="w-[26px] h-[4px] bg-white rounded-full" />
          <div className="w-[26px] h-[4px] bg-white rounded-full" />
          <div className="w-[26px] h-[4px] bg-white rounded-full" />
        </div>
        <div className="space-x-10 lg:block hidden">
          {links.map((item, index) => (
            <Link to={item.href} className="text-white " key={index}>
              {item.name}
            </Link>
          ))}
        </div>
        <Link
          to="/register"
          className="w-[172px] primary_button transition-all lg:block hidden"
        >
          <PrimaryButton />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
