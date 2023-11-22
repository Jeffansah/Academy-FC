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
    <div className="py-20 pb-28 lg:pb-40 xl:pt-0 xl:pb-48 max-w-[1100px] mx-auto max-sm:px-6 sm:px-8 xl:px-0">
      <div
        className="flex items-center gap-4 "
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h2 className="font-bold text-xl font-urbanist max-lg:text-lg">
          GALLERY
        </h2>
        <div className="bg-theme h-[0.5px] flex-1" />
        <Link
          href="#"
          className="max-lg:hidden flex items-center gap-2 justify-center text-white text-[13px]  py-3 px-9 bg-theme hover:bg-[#a62727] hover:text-white font-medium  transition duration-200 ease-in-out"
        >
          See all <ArrowRight className="w-5 h-5" />
        </Link>
        <Link
          href="#"
          className="lg:hidden flex items-center gap-2 justify-center text-theme text-[13px]"
        >
          See all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <Swiper
          className="max-lg:mt-10 mt-12 h-96 w-full"
          modules={[FreeMode, Navigation, Thumbs, EffectFade, Autoplay]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          loop={true}
          effect="fade"
          spaceBetween={10}
          navigation={true}
          autoplay={{
            delay: 5000,
          }}
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
          className="mt-3 thumbs h-32 w-full"
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 4,
            },
          }}
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
