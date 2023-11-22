import Image from "next/image";
import React from "react";

const PlayerCard = ({ picture, name, position }) => {
  return (
    <div className="flex-1 h-[400px] flex flex-col group relative cursor-pointer overflow-hidden">
      <Image
        layout="fill"
        src={picture}
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />
      <div className="absolute bottom-0 w-full h-full player-card-gradient z-50"></div>
      <div className="flex flex-col items-center text-white absolute bottom-0 w-full px-4 py-2 z-[100] transition-transform duration-500 ease-in-out transform translate-y-full group-hover:-translate-y-1/2">
        <h1 className="font-bold text-2xl">{name}</h1>
        <h3 className="font-medium text-sm">{position}</h3>
      </div>
    </div>
  );
};

export default PlayerCard;
