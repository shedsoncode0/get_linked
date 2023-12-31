import React from "react";
import { Zoom } from "react-awesome-reveal";

// Images
import Image from "../../../assets/images/two_people.png";
import { PrimaryButton } from "../../../components/buttons";

const keyAttributes = [
  {
    attributes: "Innovation and Creativity: ",
    key: "Evaluate the uniqueness and creativity of thesolution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
  },
  {
    attributes: "Functionality: ",
    key: "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
  },
  {
    attributes: "Impact and Relevance: ",
    key: "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
  },
  {
    attributes: "Technical Complexity:",
    key: "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
  },
  {
    attributes: "Adherence to Hackathon Rules:",
    key: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
  },
];

const Section4 = () => {
  return (
    <section className="flex-1 relative py-36  px-10 lg:flex block border-b border-white/20">
      {/* blob */}
      <div className="blurry absolute top-[500px] left-10 w-[20rem] h-[20rem] rounded-full bg-[#903AFF77]"></div>
      <div className="blurry absolute top-[700px] -right-10 w-[20rem] h-[20rem] rounded-full bg-[#903AFF77]"></div>
      {/*  */}
      <div className="flex-1 z-50 flex justify-center items-end">
        {/* <div className=""> */}
        <img className="w-[710px]" src={Image} alt="" srcset="" />
        {/* </div> */}
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="font-clashDisplay font-bold lg:text-left text-center sm:text-[32px] text-[22px] text-white">
          Judging Criteria{" "}
        </h1>
        {/* <Zoom right> */}
        <h1 className="font-clashDisplay text-center lg:text-left font-bold sm:text-[32px] text-[22px] text-purple">
          Key attributes
        </h1>
        <div className="max-w-[535px]  w-full text-center lg:text-left font-montserrat text-[14px] font-medium text-white space-y-3">
          <Zoom direction="right" duration={600} cascade>
            {keyAttributes.map((item, index) => (
              <div key={index}>
                <h1 className="text-pink text-[14px] font-semibold">
                  {item.attributes}
                  <span className="font-medium text-white">{item.key}</span>
                </h1>
              </div>
            ))}
          </Zoom>
          <div className="pt-20">
            <div className="w-[172px]">
              <PrimaryButton text="Read more" />
            </div>
          </div>
        </div>
        {/* </Zoom> */}
      </div>
    </section>
  );
};

export default Section4;
