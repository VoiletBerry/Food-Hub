import { useState, useEffect } from "react";

const useGetAllResturant = (setFilteredRestaurant) => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json.data?.cards[2]?.data?.data?.cards);
  }

  return allRestaurants;
};

export default useGetAllResturant;
