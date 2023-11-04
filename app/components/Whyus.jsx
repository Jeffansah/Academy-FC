import Image from "next/image";
import training from "../assets/images/Training2.jpeg";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Whyus = () => {
  return (
    <div className="pt-6 max-w-[1000px] mx-auto">
      <div className="flex w-full h-[500px] bg-sidebar">
        <div className="w-[45%] h-full relative">
          <Image src={training} layout="fill" objectFit="cover" />
        </div>
        <div className="bg-sidebar flex flex-col flex-1 py-20">
          <div className="flex flex-col gap-6 max-w-[75%] mx-auto">
            <div className="flex items-center gap-4">
              <h3 className="font-bold font-urbanist text-theme tracking-tight">
                FUTURE STARS FORGED
              </h3>
              <div className="h-[0.5px] bg-theme flex-1" />
            </div>
            <h1 className="font-bold text-3xl">
              The place to be for young Footballers
            </h1>
            <p className="text-secondary text-sm mt-3">
              We are a football academy based in the heart of Accra, Ghana. We
              have a tradition of developing promising footballers into
              respected professionals, celebrated for their skill and
              sportsmanship on the pitch.{" "}
            </p>
            <Link
              href="#about"
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
