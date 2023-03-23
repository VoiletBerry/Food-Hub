import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import UserContext from "../Context/UserContext";
import { IMG_CDN_URL } from "../Utils/Constants";

const ResturantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="w-56 h-80 p-2 m-2 shadow-md bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2 className="font-bold text-xl">{name}</h2>
      <h5>{cuisines?.join(", ")}</h5>
      <h4> {lastMileTravelString}</h4>
    </div>
  );
};

export default ResturantCard;
