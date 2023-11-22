"use client";

import {
  AlignRight,
  X,
  TwitterIcon,
  FacebookIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/images/newlogo.png";
import { useState } from "react";

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden ${
        open ? "z-[1000] fixed inset-0 scrollbar-hide" : ""
      }`}
    >
      <div className="xl:hidden flex justify-between items-center">
        <Link href="#home">
          <Image
            src={logo}
            alt="logo"
            width={90}
            className="w-[40px] lg:w-[50px]"
          />
        </Link>

        <AlignRight
          onClick={() => setOpen(true)}
          className={`hamburger w-9 h-9 lg:w-12 lg:h-12 text-white cursor-pointer ${
            open ? "hidden" : ""
          }`}
        />
      </div>
      {open && (
        <div className="overflow-hidden">
          <div className="flex-1 bg-black fixed top-0 left-0 h-screen w-screen">
            <div className="h-max py-4 bg-sidebar px-5 flex justify-between items-center">
              <Link href="#home">
                <Image
                  src={logo}
                  alt="logo"
                  width={90}
                  className="w-[40px] lg:w-[50px]"
                />
              </Link>
              <X
                onClick={() => setOpen(false)}
                className={`x-mark w-9 h-9 lg:w-12 lg:h-12 text-white cursor-pointer ${
                  !open ? "hidden" : ""
                }`}
              />
            </div>
            <div className="flex flex-col text-[14px] lg:text-lg text-white px-5">
              <Link
                onClick={() => setOpen(false)}
                href="#about"
                className="py-7 border-b border-[#c72b2b]/20"
              >
                <p className="hover:text-theme">About</p>
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href="#news"
                className="py-7 border-b border-[#c72b2b]/20"
              >
                <p className="hover:text-theme">News</p>
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href="#team"
                className="py-7 border-b  border-[#c72b2b]/20"
              >
                <p className="hover:text-theme">Team</p>
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href="#gallery"
                className="py-7 border-b  border-[#c72b2b]/20"
              >
                <p className="hover:text-theme">Gallery</p>
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href="#contact"
                className="py-7 border-b  border-[#c72b2b]/20"
              >
                <p className="hover:text-theme">Contact</p>
              </Link>
              <div className="flex pt-14 gap-5">
                <Link href="#">
                  <TwitterIcon className="w-5 h-5 lg:w-7 lg:h-7 hover:text-theme cursor-pointer transition hover:scale-125 duration-200" />
                </Link>
                <Link href="#">
                  <FacebookIcon className="w-5 h-5 lg:w-7 lg:h-7 hover:text-theme cursor-pointer transition hover:scale-125 duration-200" />
                </Link>
                <Link href="#">
                  <YoutubeIcon className="w-5 h-5 lg:w-7 lg:h-7 hover:text-theme cursor-pointer transition hover:scale-125 duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
