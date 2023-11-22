import React from "react";
import logo from "../assets/images/NXGNlogo.webp";
import Image from "next/image";

const SponsorLogo = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-delay="500"
      className="max-sm:mt-10 mt-12 py-8 border-t-[0.5px] border-b-[0.5px] border-secondary flex justify-center items-center relative"
    >
      <Image src={logo} width={100} height={100} />
      <div
        className="h-[100px] w-[100px] absolute bg-black/60 hover:bg-black/40 transtion duration-200 ease-in-out cursor-pointer z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
};

export default SponsorLogo;
