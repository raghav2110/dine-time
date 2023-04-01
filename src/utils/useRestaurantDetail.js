import { useEffect, useState } from "react";
import { MENU_CDN_URL } from "../constants";

const useRestaurantDetail = (resID) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
  });

  async function getRestaurantDetails() {
    const data = await fetch(MENU_CDN_URL + resID);
    const json = await data.json();
    setRestaurantMenu(json.data.cards);
  }

  return restaurantMenu;
};

export default useRestaurantDetail;
