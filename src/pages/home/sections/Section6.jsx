import React from "react";


const LeftToRight = ({ title, date, content1, content2, number }) => {
  return (
    <div className="flex justify-between max-w-screen-xl w-full space-x-24">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className=" w-full text-right text-purple font-bold text-2xl">
          {title}
        </h1>
        <div className="font-normal text-right text-sm">
          <h1>{content1}</h1>
          <h1>{content2}</h1>
        </div>
      </div>
      <div className="relative flex bg-purple justify-center items-center">
        <div className="h-[150px] w-1 bg-purple" />
        <div className="w-14 h-14 font-bold font-montserrat text-[24px] border-8 border-darkBlue rounded-full bg-purple absolute grid place-content-center">
          {number}
        </div>
      </div>
      <div className="flex-1 flex items-center">
        <h1 className=" text-purple font-bold text-2xl">{date}</h1>
      </div>
    </div>
  );
};
const RightToLeft = ({ title, date, content1, content2, number, title2 }) => {
  return (
    <div className="flex justify-between  max-w-screen-xl w-full space-x-24">
      <div className="flex-1 flex items-center justify-end text-r">
        <h1 className="text-purple font-bold text-2xl">{date}</h1>
      </div>

      <div className="relative flex bg-purple justify-center items-center">
        <div className="h-[150px] w-1 bg-purple" />
        <div className="w-14 font-bold h-14 font-montserrat text-[24px] border-8 border-darkBlue rounded-full bg-purple absolute grid place-content-center">
          {number}
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div>
          <h1 className=" w-full text-left text-purple font-bold text-2xl">
            {title}
          </h1>
          {/* <h1 className=" w-full text-left text-purple font-bold text-2xl">
            {title2}
          </h1> */}
        </div>
        <div className="font-normal text-left text-sm">
          <h1>{content1}</h1>
          <h1>{content2}</h1>
        </div>
      </div>
    </div>
  );
};

const Section6 = () => {
  return (
    <section className="flex flex-col items-center justify-center py-14  px-10">
      <div className="text-center text-white w-full flex flex-col items-center">
        <h1 className="font-clashDisplay font-bold text-4xl">Timeline</h1>
        <p className="text-center">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
        {/* Desktop */}
        <div className="w-full mt-20 flex max-w-6xl flex-col items-center font-montserrat">
          {/* 1 */}
          <LeftToRight
            title="Hackathon Announcement"
            content1="The getlinked tech hackathon 1.0 is formally announced"
            content2=" to the general public and teams begin to get ready to register"
            number="1"
            date="November 18, 2023"
          />
          {/* 2 */}
          <RightToLeft
            title="Teams Registration begins"
            content1="Interested teams can now show their interest in the"
            content2="getlinked tech hackathon 1.0 2023 by proceeding to register"
            number="2"
            date="November 18, 2023"
          />
          {/* 3 */}
          <LeftToRight
            title="Teams Registration ends"
            content1="Interested Participants are no longer Allowed to"
            content2=" register"
            number="3"
            date="November 18, 2023"
          />
          {/* 4 */}
          <RightToLeft
            title="Announcement of the accepted teams and ideas"
            content1="All teams whom idea has been accepted into getlinked tech"
            content2="hackathon 1.0 2023 are formally announced"
            number="4"
            date="November 18, 2023"
          />
          {/* 5 */}
          <LeftToRight
            title="Getlinked Hackathon 1.0 Offically Begins"
            content1="Accepted teams can now proceed to build their"
            content2=" ground breaking skill driven solutions"
            number="5"
            date="November 18, 2023"
          />
          {/* 6 */}
          <div className="flex justify-between  max-w-screen-xl w-full space-x-24">
            <div className="flex-1 flex items-center justify-end text-r">
              <h1 className="text-purple font-bold text-2xl">
                November 18, 2023
              </h1>
            </div>

            <div className="relative flex  justify-center items-center">
              <div className="h-[70px] w-1 bg-purple relative -top-4" />
              <div className="w-14 h-14 font-montserrat text-[24px] border-8 border-darkBlue rounded-full bg-purple absolute grid place-content-center">
                6
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center relative">
              <div>
                <h1 className=" w-full text-left text-purple font-bold text-2xl">
                  Demo Day
                </h1>
              </div>
              <div className="font-normal text-left text-sm relative -bottom-9">
                <h1>
                  Teams get the opportunity to pitch their projects to judges.
                </h1>
                <h1>The winner of the hackathon will also be announced on</h1>
                <h1>this day</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Desktop end */}
      </div>
    </section>
  );
};

export default Section6;
