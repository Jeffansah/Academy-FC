import Image from "next/image";
import cta from "../assets/images/hero.webp";
import { ArrowDown } from "lucide-react";

const CTA = () => {
  return (
    <div className=" max-w-[1000px] mx-auto h-[500px] relative">
      <Image
        src={cta}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="filter contrast-[.95]"
      />
      <div className="absolute inset-0 w-full h-full z-10 bg-black/40"></div>
      <div className="absolute bottom-0 w-full h-[40%] z-20 bg-gradient-to-t from-red-600/40 to-transparent"></div>
      <div
        className="flex flex-col gap-6 absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ transform: "translate(-50%, -40%)" }}
      >
        <h1 className="font-black min-w-[900px] text-5xl font-urbanist text-center">
          Seize the Moment - Join us today and realise your footballing dreams!
        </h1>
        <div className="mt-4 flex gap-10 justify-center">
          <button className="flex items-center gap-2 justify-center text-white text-[13px] border border-white py-4 px-6 bg-transparent hover:bg-white hover:text-black/90 font-medium w-[200px] transition duration-200 ease-in-out">
            Get started now <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
