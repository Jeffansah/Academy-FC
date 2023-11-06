import { TwitterIcon } from "lucide-react";
import { FacebookIcon } from "lucide-react";
import { YoutubeIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Social = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-delay="400"
      className="flex gap-9 items-center justify-center w-full"
    >
      <p className="font-bold">Follow us</p>
      <div className="flex gap-6">
        <Link href="#">
          <TwitterIcon className="w-6 h-6 hover:text-theme cursor-pointer transition hover:scale-125 duration-200" />
        </Link>
        <Link href="#">
          <FacebookIcon className="w-6 h-6 hover:text-theme cursor-pointer transition hover:scale-125 duration-200" />
        </Link>
        <Link href="#">
          <YoutubeIcon className="w-6 h-6 hover:text-theme cursor-pointer transition hover:scale-125 duration-200" />
        </Link>
      </div>
      <Link
        href="#"
        className="flex items-center gap-2 max-w-[200px] justify-center text-white text-[13px]  py-3 px-9 bg-theme hover:bg-[#a62727] hover:text-white font-medium  transition duration-200 ease-in-out"
      >
        Get in touch <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
};

export default Social;
