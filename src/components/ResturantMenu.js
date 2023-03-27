import { useDispatch } from "react-redux";
import { additem } from "../ReduxStore/cartSlice";
import { IMG_CDN_URL } from "../Utils/Constants";
import Shimmer from "./Shimmer";

const ResturantMenu = ({ resturantInfo }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(additem("honda"));
  };

  return !resturantInfo ? (
    <Shimmer />
  ) : (
    <div>
      <h2> Area : {resturantInfo?.areaName}</h2>
      <h2> Name : {resturantInfo?.name}</h2>
      <h2> Rating : {resturantInfo?.avgRatingString} stars</h2>
      <img src={IMG_CDN_URL + resturantInfo?.cloudinaryImageId} />
      {/*
      <h1>Menu</h1>
      <button className="p-2 m-5 bg-green-100" onClick={() => handleOnClick()}>
        Add Item
      </button> */}
    </div>
  );
};

export default ResturantMenu;
