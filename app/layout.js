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
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 50,
      duration: 1500,
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <html lang="en">
      <title>Siano FC</title>
      <body className={inter.className}>
        <div className="h-screen flex flex-col">
          <Topbar id={"topbar"} />
          <div className="flex flex-grow">
            <Sidebar />
            {children}
            <Toaster />
          </div>
        </div>
      </body>
    </html>
  );
}
