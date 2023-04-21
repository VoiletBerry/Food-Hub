import { useDispatch } from "react-redux";
import { additem } from "../ReduxStore/cartSlice";
import { IMG_CDN_URL } from "../Utils/Constants";
import Shimmer from "./Shimmer";

const ResturantMenu = ({ resturantInfo }) => {
  return !resturantInfo ? (
    <Shimmer />
  ) : (
    <div>
      <h2> Area : {resturantInfo?.areaName}</h2>
      <h2> Name : {resturantInfo?.name}</h2>
      <h2> Rating : {resturantInfo?.avgRatingString} stars</h2>
      <img src={IMG_CDN_URL + resturantInfo?.cloudinaryImageId} />
    </div>
  );
};

export default ResturantMenu;
