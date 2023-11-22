import React from "react";
import Social from "./Social";
import SponsorLogo from "./SponsorLogo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className=" max-w-[1100px] mx-auto pt-16 xl:pt-36 max-sm:px-6 sm:px-8 xl:px-0">
      <Social />
      <SponsorLogo />
      <ContactForm />
    </div>
  );
};

export default Contact;
