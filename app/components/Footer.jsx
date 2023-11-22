import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="max-w-[1100px] mx-auto mt-16 max-sm:mt-10 py-12 max-sm:py-6 max-sm:pb-10 border-t-[0.5px] border-white/25 flex justify-between items-center text-xs text-secondary font-light pt-16 xl:pt-36 max-sm:px-6 sm:px-8 xl:px-0 max-sm:flex-wrap max-sm:justify-center max-sm:gap-y-3">
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
