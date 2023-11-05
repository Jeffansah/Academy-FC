import React from "react";
import players from "@/data/players";
import PlayerRack from "./PlayerRack";

const Players = () => {
  return (
    <div className="pt-6 max-w-[1000px] mx-auto">
      <div className="flex items-center gap-4">
        <h2 className="font-bold text-lg font-urbanist">
          MEET OUR FUTURE STARS
        </h2>
        <div className="bg-theme h-[0.5px] flex-1" />
      </div>
      <div className="grid grid-cols-4 gap-6 mt-14">
        {players.map((player, index) => (
          <div key={index}>
            <PlayerRack name={player.name} />
          </div>
        ))}
      </div>
      <p className="mt-16 text-secondary text-[11px] text-center">
        <span className="text-theme">Disclaimer:</span> Players' names are
        displayed on this page for player registration audit purposes completed.
        If you have concerns about you or your child's name being displayed,
        please use the contact form.
      </p>
    </div>
  );
};

export default Players;
