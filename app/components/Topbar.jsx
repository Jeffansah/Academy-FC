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
      const shouldHideTopBar = window.scrollY > 0;
      if (shouldHideTopBar) {
        topBar.classList.add("hidden-topbar");
        sideBar.classList.add("move-sidebar");
      } else {
        topBar.classList.remove("hidden-topbar");
        sideBar.classList.remove("move-sidebar");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="topbar"
      className="px-10 py-5 flex justify-between font-semibold fixed z-20 bg-body w-full"
    >
      <div className="flex gap-10 text-xs">
        <Link href="#" className="flex gap-2 items-center ">
          <MailIcon className="h-5 w-5 text-theme" />
          contact@youngstars.com
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
