import { Link } from "react-router-dom";
import { followUsSM } from "../../_data";
import ContactForm from "./components/ContactForm";
import "./contact.css";

const Contact = () => {
  return (
    <div className="relative w-full pb-12 md:pb-0">
      <div className="blurry absolute md:-top-3 -left-14 md:-left-32 w-[20rem] h-[17rem] md:w-[30rem] md:h-[50vh] rounded-full bg-[#903AFF77]"></div>
      <div className="md:w-[78%] mx-auto lg:h-[85.1vh] mt-[3%] md:mt-[8%] lg:mt-[3%] flex flex-col-reverse lg:flex-row items-start justify-between">
        <div className="w-full mt-14">
          <h3 className="hidden lg:block font-clashDisplay font-semibold text-[32px] text-purple">
            Get in touch
          </h3>
          <p className="hidden lg:block w-[96px] mt-4 font-montserrat text-white text-base">
            Contact Information
          </p>
          <p className="hidden lg:block w-[119px] mt-[17px] font-montserrat text-white text-base">
            27,Alara Street Yaba 100012 Lagos State
          </p>
          <p className="hidden lg:block w-[171px] mt-[21px] font-montserrat text-white text-base">
            Call Us : 07067981819
          </p>
          <p className="hidden lg:block w-[272px] mt-[22px] font-montserrat text-white text-base">
            we are open from Monday-Friday 08:00am - 05:00pm
          </p>

          {/* Share on */}
          <div className="w-full mt-6 lg:mt-[35px] text-center lg:text-left flex lg:block flex-col items-center">
            <p className="font-montserrat text-base text-purple">Share on</p>
            <div className="w-fit flex items-center gap-x-[19px] mt-[14px]">
              {followUsSM.map((sm, index) => (
                <Link to="" key={index}>
                  <img
                    src={sm.icon}
                    alt={sm.name}
                    width={sm.width}
                    height={sm.height}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
      <div className="hidden md:block blurry absolute -bottom-2 -right-24 w-[30rem] h-[50vh] rounded-full bg-[#903AFF66]"></div>
    </div>
  );
};

export default Contact;
