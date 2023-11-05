import Image from "next/image";
import logo from "../assets/images/SianoFC.png";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div id="sidebar" className={` w-[15%] bg-sidebar h-full px-5 `}>
      <div className="flex flex-col ">
        <div className="flex justify-center pb-4 border-b border-[#c72b2b]/20">
          <Link href="#home">
            <Image src={logo} alt="logo" width={130} height={130} />
          </Link>
        </div>
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
          href="#blog"
          className="py-7 text-[13px] text-secondary border-b  border-[#c72b2b]/20"
        >
          <p className="hover:text-theme">Blog</p>
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
    </div>
  );
};

export default Sidebar;
