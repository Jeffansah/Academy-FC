import React from "react";

const PlayerRack = ({ name }) => {
  return (
    <div className="border-[0.5px] border-secondary text-secondary font-light text-sm px-3 whitespace-nowrap py-2 max-lg:w-[160px] sm:w-[200px] hvr-bounce-in shadow-lg">
      {name}
    </div>
  );
};

export default PlayerRack;
