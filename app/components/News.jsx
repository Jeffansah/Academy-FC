import { ArrowRight } from "lucide-react";
import news from "@/data/news";
import Image from "next/image";
import Link from "next/link";

const News = () => {
  return (
    <div className="pt-24 max-w-[1000px] mx-auto">
      <div className="flex items-center gap-4">
        <h2 className="font-bold text-lg font-urbanist">
          LATEST NEWS & VIDEOS
        </h2>
        <div className="bg-theme h-[0.5px] flex-1" />
        <Link
          href="#"
          className="flex items-center gap-2 justify-center text-white text-[13px]  py-3 px-9 bg-theme hover:bg-[#a62727] hover:text-white font-medium  transition duration-200 ease-in-out"
        >
          See all <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-8">
        {news.slice(0, 3).map((newsItem, i) => (
          <div key={i} className="flex flex-col gap-4 group cursor-pointer">
            <div className="aspect-w-16 aspect-h-9 max-w-[317.336px] overflow-hidden">
              <Image
                src={newsItem.picture}
                alt={newsItem.title}
                className="object-cover min-w-[250px] min-h-[250px] cursor-pointer transition duration-500 ease-in-out group-hover:scale-[1.15]"
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-col gap-2 max-w-[317px]">
              <h3 className="font-semibold text-base">{newsItem.title}</h3>
              <p className="text-xs text-secondary">{newsItem.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
