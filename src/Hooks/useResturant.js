import { FETCH_MENU_URL } from "../Utils/Constants";
import { useState, useEffect } from "react";

const useResturant = (id) => {
  const [resturant, setResturant] = useState(null);

  async function ResturantDetails() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    console.log(json);
    setResturant(json.data);
  }

  useEffect(() => {
    ResturantDetails();
  }, []);

  return resturant;
};

export default useResturant;
