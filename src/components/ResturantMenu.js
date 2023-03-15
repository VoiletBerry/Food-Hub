import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useResturant from "../Hooks/useResturant";
import { IMG_CDN_URL } from "../Utils/Constants";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
  const { id } = useParams();

  const resturant = useResturant(id);

  return !resturant ? (
    <Shimmer />
  ) : (
    <div>
      <h1> Resturant id : {id}</h1>
      <h2> Area : {resturant.name}</h2>
      <h2> Name : {resturant.city}</h2>
      <h2> Rating : {resturant.avgRating} stars</h2>
      <img src={IMG_CDN_URL + resturant.cloudinaryImageId} />

      <h1>Menu</h1>
      <ul>
        {Object.values(resturant?.menu?.items).map((item) => {
          return <li key={item.id}> {item.name} </li>;
        })}
      </ul>
    </div>
  );
};

export default ResturantMenu;
