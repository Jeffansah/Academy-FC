import React from "react";
import Social from "./Social";
import SponsorLogo from "./SponsorLogo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className=" max-w-[1000px] mx-auto pt-36">
      <Social />
      <SponsorLogo />
      <ContactForm />
    </div>
  );
};

export default Contact;
