import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Feature = ({ picture, title, subtitle, description }) => {
  return (
    <div className="flex-1 h-[850px] flex flex-col">
      <div className="relative w-full h-[300px]">
        <Image
          src={picture}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div>
        <div className="bg-sidebar flex flex-col flex-1 py-16">
          <div className="flex flex-col gap-6 max-w-[80%] mx-auto">
            <div className="flex items-center gap-4">
              <h3 className="font-bold font-urbanist text-theme tracking-tight">
                {subtitle}
              </h3>
              <div className="h-[0.5px] bg-theme flex-1" />
            </div>
            <h1 className="font-bold text-3xl">{title}</h1>
            <p className="text-secondary text-sm mt-3">{description}</p>
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

export default Feature;
