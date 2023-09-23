import { useState } from "react";
import { PrimaryInput, PrimaryTextbox } from "../../../components/ui/Inputs";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bottom-shadow md:max-w-[617px] w-full md:bg-[#1c152e] lg:h-[611px] rounded-xl pt-[60px] md:pt-[75px] px-[46px] md:px-[92px] md:pb-12 lg:pb-0"
    >
      <h1 className="font-clashDisplay font-semibold text-purple text-xl">
        Questions or need assistance?
        <br />
        Let us know about it!
      </h1>
      <p className="w-[239px] mt-6 lg:hidden text-xs text-white font-montserrat">
        Email us below to any question related to our event
      </p>
      <div className="w-full mt-[33px]">
        <PrimaryInput
          type="text"
          id="first-name"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <PrimaryInput
          type="email"
          id="mail"
          placeholder="Mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />

        <PrimaryTextbox
          id="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="submit"
          className="primary_button w-[172px] mx-auto h-[53px] mt-[31px] font-montserrat font-medium text-base text-white grid place-content-center rounded-[4px] bg-gradient-to-r from-pink via-purple to-blue"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
