import Image from "next/image";
import logo from "../assets/images/newlogo.png";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";
import MobileSidebar from "./MobileSidebar";

const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className={`max-xl:w-full w-[15%] bg-sidebar max-xl:h-max  px-6 max-lg:py-3 lg:py-5 xl:py-0 xl:h-full`}
    >
      <div className="flex flex-col max-xl:hidden">
        <div className="flex justify-center py-4 border-b border-[#c72b2b]/20">
          <Link href="#home">
            <Image src={logo} alt="logo" width={90} />
          </Link>
        </div>
        <div></div>
        <Link
          href="#about"
          className="py-7 text-[13px] text-secondary border-b border-[#c72b2b]/20"
        >
          <p className="hover:text-theme">About</p>
        </Link>
        <Link
          href="#news"
          className="py-7 text-[13px] text-secondary border-b border-[#c72b2b]/20"
        >
          <p className="hover:text-theme">News</p>
        </Link>
        <Link
          href="#team"
          className="py-7 text-[13px] text-secondary border-b  border-[#c72b2b]/20"
        >
          <p className="hover:text-theme">Team</p>
        </Link>
        <Link
          href="#gallery"
          className="py-7 text-[13px] text-secondary border-b  border-[#c72b2b]/20"
        >
          <p className="hover:text-theme">Gallery</p>
        </Link>
        <Link
          href="#social"
          className="py-7 text-[13px] text-secondary border-b  border-[#c72b2b]/20"
        >
          <p className="hover:text-theme">Social Media</p>
        </Link>
        <Link
          href="#contact"
          className="py-7 text-[13px] text-secondary border-b  border-[#c72b2b]/20"
        >
          <p className="hover:text-theme">Contact</p>
        </Link>
        <div className="flex pt-14 gap-5">
          <Link href="#">
            <TwitterIcon className="w-4 h-4 hover:text-theme cursor-pointer transition hover:scale-125 duration-200" />
          </Link>
          <Link href="#">
            <FacebookIcon className="w-4 h-4 hover:text-theme cursor-pointer transition hover:scale-125 duration-200" />
          </Link>
          <Link href="#">
            <YoutubeIcon className="w-4 h-4 hover:text-theme cursor-pointer transition hover:scale-125 duration-200" />
          </Link>
        </div>
      </div>
      <MobileSidebar />
    </div>
  );
};

export default Sidebar;
