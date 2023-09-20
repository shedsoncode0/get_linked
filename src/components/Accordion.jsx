import React from "react";
import { useState } from "react";

const Accordion = ({ text, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="border-b border-purple py-2 mt-2">
      <div className="flex justify-between">
        <h1 className="text-white font-montserrat font-medium text-[14px]">
          {text}
        </h1>
        <button className=" focus:outline-none text-white" onClick={toggleAccordion}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 text-purple"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 text-purple"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="text-pink font-montserrat">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
