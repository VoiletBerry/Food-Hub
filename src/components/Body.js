import ResturantCard from "./ResturantCard";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper";
import useOffline from "../Hooks/useOffine";
import UserContext from "../Context/UserContext";
import useGetAllResturant from "../Hooks/useGetAllResturant";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const isOffline = useOffline();

  const allRestaurants = useGetAllResturant(setFilteredRestaurant);

  if (!isOffline) {
    return <h1> You are Offline</h1>;
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
      <div className=" bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 ">
        <input
          type="text"
          data-testid="serch_input"
          class="bg-gray-50 border ml-72 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-1/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          type="button"
          data-testid="search_btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurant(data);
          }}
          className="py-2.5 px-5 ml-3 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Search
        </button>

        {/* <input
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
        /> */}
      </div>
      <div
        className="flex flex-wrap gap-5 justify-center mt-5"
        data-testid="res-list"
      >
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
