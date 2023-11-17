"use client";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import {
  FreeMode,
  Navigation,
  Thumbs,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { images } from "@/data/gallery";

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="py-24 pt-0 pb-48 max-w-[1000px] mx-auto">
      <div className="flex items-center gap-4">
        <h2 className="font-bold text-xl font-urbanist">GALLERY</h2>
        <div className="bg-theme h-[0.5px] flex-1" />
        <Link
          href="#"
          className="flex items-center gap-2 justify-center text-white text-[13px]  py-3 px-9 bg-theme hover:bg-[#a62727] hover:text-white font-medium  transition duration-200 ease-in-out"
        >
          See all <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <Swiper
          className="mt-12 h-96 w-full"
          modules={[FreeMode, Navigation, Thumbs, EffectFade]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          loop={true}
          effect="fade"
          spaceBetween={10}
          navigation={true}
        >
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <div className="flex h-full w-full items-center justify-center overflow-hidden">
                <Image
                  src={image.image}
                  alt={image.alt}
                  className="object-cover block h-full w-full transition duration-500 ease-in-out hover:scale-[1.05] cursor-pointer"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper Thumnails */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          autoplay={true}
          freeMode={true}
          watchSlidesProgress={true}
          spaceBetween={12}
          slidesPerView={4}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="mt-3 thumbs h-32 w-full rounded-lg"
        >
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <button className="flex h-full w-full items-center justify-center">
                <Image
                  src={image.image}
                  alt={image.alt}
                  className="object-cover block h-full w-full"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
