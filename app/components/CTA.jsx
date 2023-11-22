import Image from "next/image";
import cta from "../assets/images/hero.webp";
import { ArrowDown } from "lucide-react";

const CTA = () => {
  return (
    <div className="xl:max-w-[1100px] max-sm:w-full h-max relative max-sm:px-6 sm:px-8 xl:px-0 mx-auto">
      <Image
        src={cta}
        objectFit="cover"
        objectPosition="center"
        className="filter contrast-[.95] w-full lg:h-[580px]  max-sm:h-[300px] sm:[h-450px] max-sm:object-cover max-sm:object-center"
      />
      <div className="absolute inset-0 w-full h-full z-10 bg-black/40 max-sm:bg-black/60"></div>
      <div className="absolute max-xl:hidden bottom-0 w-full h-[40%] z-20 bg-gradient-to-t from-red-600/40 to-transparent"></div>
      <div
        className="flex flex-col gap-6 absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ transform: "translate(-50%, -40%)" }}
      >
        <h1
          data-aos="fade-in"
          data-aos-delay="400"
          className="font-black max-sm:text-2xl sm:text-4xl max-sm:min-w-[300px] min-w-[600px] lg:min-w-[900px] lg:text-5xl font-urbanist text-center"
        >
          Seize the Moment - Join us today and realise your footballing dreams!
        </h1>
        <div className="mt-4 flex gap-10 justify-center">
          <button
            data-aos="fade-in"
            data-aos-delay="700"
            className="flex items-center gap-2 justify-center text-white text-[13px] border border-white py-4 px-6 max-sm:py-3 max-sm:px-4 max-xl:text-sm bg-transparent hover:bg-white hover:text-black/90 font-medium w-[200px] max-sm:w-max transition duration-200 ease-in-out"
          >
            Get started now <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
