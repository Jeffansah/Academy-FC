import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="max-w-[1000px] mx-auto mt-16 py-12 border-t-[0.5px] border-white/25 flex justify-between items-center text-xs text-secondary font-light">
      <p className="opacity-100">Copyright© {year} Siano Football Club </p>
      <div className="flex opacity-100">
        <p className="hover:text-white cursor-pointer">Privacy Policy&nbsp;</p>|
        <p className="hover:text-white cursor-pointer">
          &nbsp;Terms & Conditions
        </p>
      </div>
    </div>
  );
};

export default Footer;
