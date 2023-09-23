//Images
import GirlOnChair from "../../../assets/images/girlOnChair.png";
import Blob from "../../../assets/images/blob4.png";

const Section3 = () => {
  return (
    <section className=" lg:flex relative px-10 py- items-center block border-b border-white/20">
       {/* blob */}
       <div className="blurry absolute left-48 w-[20rem] h-[20rem] rounded-full bg-[#903AFF77]"></div>
       <div className="blurry absolute top-[300px] -right-48 w-[20rem] h-[20rem] rounded-full bg-[#903AFF77]"></div>
      {/*  */}
      <div className="flex-1 flex justify-center items-center">
        <div className="z-50">
          <h1 className="font-clashDisplay text-center lg:text-left font-bold sm:text-[32px] text-[22px] text-white">
            Rules and
          </h1>
          <div>
            <h1 className="font-clashDisplay text-center lg:text-left font-bold sm:text-[32px] text-[22px] text-purple">
              Guidelines
            </h1>
            <p className="max-w-[535px] w-full text-center lg:text-left font-montserrat text-[14px] font-medium text-white">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div>
          <img className="w-[664px]" src={GirlOnChair} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section3;
