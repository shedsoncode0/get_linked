import { Link } from "react-router-dom/dist";

const ContainerOne = () => {
  return (
    <div className="font-montserrat mr-16 md:mr-0">
      <div className="mb-[39px] lg:mb-[74px]">
        <h1 className="text-white font-clashDisplay font-bold text-[20px] md:text-[30px] mb-1.5">
          get
          <span className="text-purple">linked</span>
        </h1>
        <p className="max-w-[412px] w-full text-xs leading-[172.4%]">
          Getlinked Tech Hackathon is a technology innovation program
          established by a group of organizations with the aim of showcasing
          young and talented individuals in the field of technology
        </p>
      </div>
      <div className="font-montserrat text-xs text-[#D434FE] font-bold">
        <Link to="" className="text-white font-normal">
          Terms of Use
        </Link>
        &nbsp;&nbsp;| &nbsp;&nbsp;
        <Link to="" className="text-white font-normal">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default ContainerOne;
