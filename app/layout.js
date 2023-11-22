"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 50,
      duration: 1500,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <html lang="en">
      <title>Siano FC</title>
      <body className={inter.className}>
        <div className="xl:h-screen xl:flex flex-col max-xl:overflow-x-hidden">
          <Topbar id={"topbar"} />
          <div className="xl:flex flex-grow">
            <Sidebar />
            {children}
            <Toaster />
          </div>
        </div>
      </body>
    </html>
  );
}
