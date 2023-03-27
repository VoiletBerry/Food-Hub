import { FETCH_MENU_URL } from "../Utils/Constants";
import { useState, useEffect } from "react";

const useResturant = (id) => {
  const [resturant, setResturant] = useState(null);

  async function ResturantDetails() {
    try {
      const data = await fetch(FETCH_MENU_URL + id);
      const json = await data.json();

      const nestedItemsCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
      const itemsCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

      const menuItemList =
        json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      const menu = menuItemList.map((item) => {
        if (
          item.card.card["@type"] === itemsCategory ||
          item.card.card["@type"] === nestedItemsCategory
        ) {
          return item.card.card;
        }
      });

      const resturantData = {
        info: json.data?.cards[0]?.card?.card?.info,
        menu: menu.filter((value) => value !== undefined),
      };

      setResturant(resturantData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    ResturantDetails();
  }, []);

  return resturant;
};

export default useResturant;
