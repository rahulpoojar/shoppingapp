import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants.js";
const useRestaurantInfo = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuInfo, setMenuInfo] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const response = await data.json();
    const card = response?.data?.cards[2]?.card?.card;
    setResInfo(card);
    const totalCards =
      response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const categories = totalCards.filter((c) => {
      return (
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
    console.log(categories);
    setMenuInfo(categories);
    // for (let i = 0; i < totalCards.length; i++) {
    //   if (totalCards[i]?.card?.card?.itemCards) {
    //     const data = totalCards[i]?.card?.card?.itemCards;
    //     setMenuInfo(data);
    //     break;
    //   }
    // }
  };

  return [resInfo, menuInfo];
};

export default useRestaurantInfo;
