import React, { useContext } from "react";

import { IMG_CDN_URL } from "../Utils/Constants";

const ResturantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  slaString,
  costForTwoString,
}) => {
  const buttonStyle = {
    backgroundColor:
      avgRating == "--"
        ? "#fff"
        : parseFloat(avgRating) < 4.0
        ? "#db7c38"
        : "#48c479",
    color: isNaN(avgRating) ? "#535665" : "#fff",
  };

  return (
    <div className="relative w-2/3 p-2.5 mb-2.5 mt-2.5 hover:shadow">
      <div className="relative w-full">
        <div className="absolute z-[2] text-gray-light text-[25px] text-right cursor-pointer rounded-[10rem] w-[99%] "></div>
        <img
          className="w-full mob:w-[30px]"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
        />
      </div>
      <div className="">
        <h6 className="text-base font-bold w-full tracking-normal h-[52px]">
          {name}
        </h6>
        <p className="text-gray-dark text-xs w-full overflow-hidden h-[52px]">
          {cuisines.join(", ")}
        </p>
        <div className="flex mt-4 justify-between items-center text-xs pb-2.5 text-gray-details font-semibold mob:flex-col mob:items-start">
          <div
            className="flex items-center h-5 w-11 gap-1 py-0 px-1"
            style={buttonStyle}
          >
            <span>{avgRating}</span>
          </div>
          <div>•</div>
          <div>{slaString}</div>
          <div>•</div>
          <div className="w-1/3">{costForTwoString}</div>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
