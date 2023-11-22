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
import { useEffect, useState } from "react";

const Topbar = () => {
  useEffect(() => {
    const topBar = document.getElementById("topbar");
    const sideBar = document.getElementById("sidebar");
    const sections = document.getElementById("sections");
    const isLargeScreen = window.innerWidth > 1280;

    const handleScroll = () => {
      const shouldHideTopBar = window.scrollY > topBar.offsetHeight;

      if (shouldHideTopBar && isLargeScreen) {
        sideBar.style.position = "fixed";
        sideBar.style.top = "0px";
      } else if (shouldHideTopBar && !isLargeScreen) {
        sideBar.style.position = "fixed";
        sideBar.style.inset = "0";
        sideBar.style.zIndex = "1000";
        sections.style.marginTop = `${sideBar.offsetHeight}px`;
      } else {
        sideBar.style.position = "relative";
        sections.style.marginTop = 0;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="topbar"
      className="max-xl:px-6 px-10 py-4 flex justify-between font-semibold z-20 bg-body w-full"
    >
      <div className="flex gap-10 max-lg:gap-7 text-xs">
        <Link href="#" className="flex gap-2 items-center ">
          <MailIcon className="h-5 w-5 text-theme" />
          <p className="max-md:hidden">contact@sianofc.com</p>
        </Link>
        <Link href="#" className="flex gap-2 items-center">
          <PhoneIcon className="h-5 w-5 text-theme" />
          <p className="max-md:hidden">+233456789451</p>
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
