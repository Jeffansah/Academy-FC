import React from "react";
import players from "@/data/players";
import PlayerRack from "./PlayerRack";

const Players = () => {
  return (
    <div className="max-w-[1000px] mx-auto">
      <div
        data-aos="fade-in"
        data-aos-delay="400"
        className="flex items-center gap-4"
      >
        <h2 className="font-bold text-lg font-urbanist">
          MEET OUR FUTURE STARS
        </h2>
        <div className="bg-theme h-[0.5px] flex-1" />
      </div>
      <p
        data-aos="fade-up"
        data-aos-delay="300"
        className="mt-14 mb-2 text-lg font-semibold text-theme"
      >
        Goalkeepers
      </p>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="grid grid-cols-4 gap-6"
      >
        {players[0].map((player, index) => (
          <div key={index}>
            <PlayerRack name={player.name} />
          </div>
        ))}
      </div>
      <p
        data-aos="fade-up"
        data-aos-delay="600"
        className="mt-8 mb-2 text-lg font-semibold text-theme"
      >
        Defenders
      </p>
      <div
        data-aos="fade-up"
        data-aos-delay="700"
        className="grid grid-cols-4 gap-6"
      >
        {players[1].map((player, index) => (
          <div key={index}>
            <PlayerRack name={player.name} />
          </div>
        ))}
      </div>
      <p
        data-aos="fade-up"
        data-aos-delay="900"
        className="mt-8 mb-2 text-lg font-semibold text-theme"
      >
        Midfielders
      </p>
      <div
        data-aos="fade-up"
        data-aos-delay="1000"
        className="grid grid-cols-4 gap-6"
      >
        {players[2].map((player, index) => (
          <div key={index}>
            <PlayerRack name={player.name} />
          </div>
        ))}
      </div>
      <p
        data-aos="fade-up"
        data-aos-delay="1000"
        className="mt-8 mb-2 text-lg font-semibold text-theme"
      >
        Forwards
      </p>
      <div
        data-aos="fade-up"
        data-aos-delay="1100"
        className="grid grid-cols-4 gap-6"
      >
        {players[3].map((player, index) => (
          <div key={index}>
            <PlayerRack name={player.name} />
          </div>
        ))}
      </div>
      <p
        data-aos="fade-up"
        data-aos-delay="1150"
        className="mt-8 mb-48 text-secondary text-[11px] text-center"
      >
        <span className="text-theme">Disclaimer:</span> Players' names are
        displayed on this page for player registration audit purposes completed.
        If you have concerns about you or your child's name being displayed,
        please use the contact form.
      </p>
    </div>
  );
};

export default Players;
