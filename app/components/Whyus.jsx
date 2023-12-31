import Image from "next/image";
import training from "../assets/images/Training2.jpeg";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Whyus = () => {
  return (
    <div className="pt-16 xl:pt-36 max-w-[1100px] max-sm:px-6 sm:px-8 xl:px-0 mx-auto">
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="flex max-sm:flex-col w-full sm:h-[400px] xl:h-[500px] bg-sidebar"
      >
        <div className="w-full sm:w-[45%] h-[280px] sm:h-full relative">
          <Image src={training} layout="fill" objectFit="cover" />
        </div>
        <div className="bg-sidebar flex flex-col justify-center flex-1 py-10 xl:py-20">
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className="flex flex-col gap-6 max-xl:gap-3 xl:max-w-[75%] max-xl:px-7 mx-auto"
          >
            <div className="flex items-center gap-4">
              <h3 className="font-bold lg:capitalize max-xl:text-sm max-xl:font-medium font-urbanist text-theme tracking-tight">
                Future stars forged
              </h3>
              <div className="h-[0.5px] bg-theme flex-1" />
            </div>
            <h1 className="font-bold text-3xl max-xl:text-xl">
              The place to be for young Footballers
            </h1>
            <p className="text-secondary text-sm mt-3">
              We are a football academy based in the heart of Accra, Ghana. We
              have a tradition of developing promising footballers into
              respected professionals, celebrated for their skill and
              sportsmanship on the pitch.{" "}
            </p>
            <Link
              href="#"
              className="flex items-center gap-2 mt-4 max-w-[200px] justify-center text-white text-[13px]  py-3 px-9 bg-theme hover:bg-[#a62727] hover:text-white font-medium  transition duration-200 ease-in-out"
            >
              Learn More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
