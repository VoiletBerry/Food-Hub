import ReactDOM from "react-dom/client";
import ResturantCard from "./ResturantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper";
import useOffline from "../Hooks/useOffine";
import UserContext from "../Context/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const isOffline = useOffline();

  if (!isOffline) {
    return <h1> You are Offline</h1>;
  }

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) {
    return null;
  }

  // if (filteredRestaurant.length === 0) {
  //   return <h1> No Resturants Found</h1>;
  // }

  const { user, setUser } = useContext(UserContext);

  return filteredRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className=" p-5 bg-pink-50 m-5">
        <input
          type="text"
          className="h-9 text-transparent text-center text-black"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="mx-2 p-2 bg-green-700 text-white rounded-md hover:bg-black "
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>

        <input
          type="text"
          className="h-9  text-center text-black"
          placeholder="Name"
          value={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />

        <input
          type="text"
          className="h-9 ml-5 text-center text-black"
          placeholder="Email"
          value={user.email}
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              to={"/resturant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <ResturantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
