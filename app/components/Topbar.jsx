"use client";

import {
  FacebookIcon,
  MailIcon,
  PhoneIcon,
  Sidebar,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";

const Topbar = () => {
  useEffect(() => {
    const topBar = document.getElementById("topbar");
    const sideBar = document.getElementById("sidebar");

    const handleScroll = () => {
      const shouldHideTopBar = window.scrollY > 50;

      console.log(window.scrollY);

      if (shouldHideTopBar === true) {
        sideBar.style.position = "fixed";
        sideBar.style.top = "0px";
      } else {
        sideBar.style.position = "relative";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="topbar"
      className="px-10 py-4 flex justify-between font-semibold z-20 bg-body w-full"
    >
      <div className="flex gap-10 text-xs">
        <Link href="#" className="flex gap-2 items-center ">
          <MailIcon className="h-5 w-5 text-theme" />
          contact@sianofc.com
        </Link>
        <Link href="#" className="flex gap-2 items-center">
          <PhoneIcon className="h-5 w-5 text-theme" />
          +233456789451
        </Link>
      </div>
      <div className="flex gap-7 text-xs text-theme">
        <Link href="#">
          <TwitterIcon className="w-5 h-5" />
        </Link>
        <Link href="#">
          <FacebookIcon className="w-5 h-5" />
        </Link>
        <Link href="#">
          <YoutubeIcon className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
