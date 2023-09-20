import React, { useEffect, useState } from "react";
import CanvasSpace from "./Canvas";

const CountDown = () => {
  const targetDate = new Date("2023-11-18T00:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(
    targetDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const remaining = targetDate - currentDate;

      if (remaining <= 0) {
        clearInterval(interval);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const hours = String(
    Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(
    Math.floor((timeRemaining % (1000 * 60)) / 1000)
  ).padStart(2, "0");

  return (
    <div className=" text-white w-[500px] font-unicaOne justify-start flex space-x-10">
      <CanvasSpace />
    </div>
  );
};

export default CountDown;
