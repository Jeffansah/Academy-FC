"use client";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";

import "swiper/css";

import { ArrowRight } from "lucide-react";
import news from "@/data/news";
import Image from "next/image";
import Link from "next/link";
import Gallery from "./Gallery";

const News = () => {
  return (
    <div className="pt-24 max-w-[1100px] mx-auto max-sm:px-6 sm:px-8 xl:px-0">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex items-center gap-4"
      >
        <h2 className="font-bold text-xl max-lg:text-lg font-urbanist">
          LATEST NEWS & VIDEOS
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
      <Swiper
        className="mt-10"
        modules={[Pagination]}
        pagination={{
          type: "bullets",
          clickable: true,
        }}
        spaceBetween={30}
        slidesPerView={3}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
      >
        {news.map((newsItem, i) => (
          <SwiperSlide key={i}>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col gap-4 group cursor-pointer"
            >
              <div className="aspect-w-16 aspect-h-9 max-w-[500px] overflow-hidden">
                <Image
                  src={newsItem.picture}
                  alt={newsItem.title}
                  className="object-cover object-center min-w-[500px] h-[250px] cursor-pointer transition duration-500 ease-in-out group-hover:scale-[1.15]"
                  width={500}
                />
              </div>
              <div className="flex flex-col gap-2 max-w-[317px]">
                <h3 className="font-semibold text-base">{newsItem.title}</h3>
                <p className="text-xs max-xl:text-sm text-secondary">
                  {newsItem.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
