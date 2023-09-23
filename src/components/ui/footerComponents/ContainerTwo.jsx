import { Link } from "react-router-dom/dist";
import { followUsSM } from "../../../_data";

const ContainerTwo = () => {
  const links = [
    { name: "overview", url: "" },
    { name: "timeline", url: "" },
    { name: "FAQs", url: "" },
    { name: "register", url: "" },
  ];

  return (
    <div className="w-fit flex flex-col gap-y-[11px] font-montserrat mt-8 md:mt-[13px]">
      <h3 className="text-sm text-[#D434FE] font-semibold leading-[172.4%]">
        Useful Links
      </h3>
      <div className="w-fit flex flex-col gap-y-[11px]">
        {links.map((link, index) => (
          <Link
            to={link.url}
            key={index}
            className="capitalize text-xs leading-[172.4%]"
          >
            {link.name}
          </Link>
        ))}

        {/* Follow us */}
        <div className="w-fit flex items-center gap-x-4">
          <span className="text-xs text-[#D434FE]">Follow us</span>
          {followUsSM.map((sm, index) => (
            <Link to={sm.url} key={index} className="">
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
  );
};

export default ContainerTwo;
