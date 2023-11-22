import Image from "next/image";
import hero from "../assets/images/hero.webp";
import company from "../assets/images/NXGNAcademyHoriz.png";
import player from "../assets/images/soccer-player.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <>
      {" "}
      <div
        id="hero"
        className="max-xl:hidden w-full xl:min-h-full xl:max-h-full xl:relative bg-contain bg-center"
      >
        <Image
          layout="fill"
          src={player}
          alt="hero"
          priority
          objectFit="center"
        />
        <div className="absolute inset-0 w-full h-full z-10 bg-black/60"></div>
        <div className="flex flex-col gap-6 lg:absolute z-30 lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-[70%]">
          <h4
            data-aos="fade-up"
            className="text-[18px] font-light text-center tracking-widest"
          >
            WELCOME TO SIANO FC ACADEMY
          </h4>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex justify-center items-center gap-5"
          >
            <h2 className="text-theme text-[13px] font-semibold">
              IN PATNERSHIP WITH
            </h2>
            <Image src={company} width={146} height={35} />
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="250"
            className="font-black min-w-[900px] text-6xl font-urbanist text-center mt-4"
          >
            YOUR FOOTBALL JOURNEY{" "}
            <span className="text-theme">BEGINS HERE</span>
          </h1>
          <div className="mt-4 flex gap-10 justify-center">
            <button
              data-aos="fade-right"
              data-aos-delay="600"
              className="flex items-center gap-2 justify-center bg-theme text-white text-[13px] font-medium py-3 px-6 w-[200px] hover:bg-[#a62727] transition duration-200 ease-in-out"
            >
              Join Today <ArrowRight className="w-5 h-5" />
            </button>

            <button
              data-aos="fade-left"
              data-aos-delay="600"
              className="flex items-center gap-2 justify-center text-white text-[13px] border border-white py-4 px-6 bg-transparent hover:bg-white hover:text-black/90 font-medium w-[200px] transition duration-200 ease-in-out"
            >
              Explore More <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent h-[70px] z-50"></div>
      </div>
      <div className="h-[85vh] xl:hidden relative">
        <div className="absolute inset-0 w-full h-full z-10 bg-black/60"></div>
        <Image
          className="w-full h-full"
          layout="fill"
          src={player}
          alt="hero"
          priority
          objectFit="cover"
          objectPosition="center"
        />
        <div className="flex flex-col gap-6 lg:gap-6 xl:gap-4 absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] mx-auto px-5 max-md:max-w-[350px] md:min-w-[700px] lg:min-w-[800px]">
          <h4
            data-aos="fade-up"
            className="text-[15px] lg:text-xl font-light text-center tracking-widest max-md:whitespace-normal"
          >
            WELCOME TO SIANO FC ACADEMY
          </h4>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex justify-center items-center gap-5"
          >
            <h2 className="text-theme lg:text-lg text-[13px] font-semibold">
              IN PATNERSHIP WITH
            </h2>
            <Image src={company} width={100} />
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="250"
            className="font-black text-[50px]  md:text-7xl  leading-[3rem] font-urbanist text-center mt-4"
          >
            YOUR JOURNEY <span className="text-theme">BEGINS HERE</span>
          </h1>
          <div className="mt-10 flex gap-5 justify-center">
            <button
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-offset={-200}
              className="flex items-center gap-2 justify-center bg-theme text-white text-[13px] font-medium py-3 w-[200px] lg:text-lg lg:py-6 lg:w-[250px] hover:bg-[#a62727] transition duration-200 ease-in-out"
            >
              Join Today <ArrowRight className="w-5 h-5" />
            </button>

            <button
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-offset={-200}
              className="flex items-center gap-2 justify-center text-white text-[13px] border border-white py-4 lg:text-lg  lg:py-6 lg:w-[250px] bg-transparent hover:bg-white hover:text-black/90 font-medium w-[200px] transition duration-200 ease-in-out"
            >
              Explore More <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-[-1%] w-full bg-gradient-to-t from-black to-transparent h-[70px] z-50"></div>
      </div>
    </>
  );
};

export default Hero;
