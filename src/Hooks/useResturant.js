import { FETCH_MENU_URL, NEW_TEST_URL } from "../Utils/Constants";
import { useState, useEffect } from "react";

const useResturant = (id) => {
  const [resturant, setResturant] = useState(null);

  async function ResturantDetails() {
    const data = await fetch(NEW_TEST_URL + id);
    const json = await data.json();
    setResturant(json.data);
  }

  useEffect(() => {
    ResturantDetails();
  }, []);

  return resturant;
};

export default useResturant;
