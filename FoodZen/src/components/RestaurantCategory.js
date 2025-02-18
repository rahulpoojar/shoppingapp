import { useState } from "react";
import ItemList from "./ItemList.js";
const RestaurantCategory = (props) => {
  const { category, showItems, setShowIndex } = props;
  const { title, itemCards } = category?.card?.card;

  const handleClick=()=>{
      setShowIndex();
  }
  
  return (
    <div>
      <div className="flex flex-col w-full my-1 bg-white border-double rounded-lg shadow-lg p-4">
        <div
          className="flex justify-between p-3 border border-gray-400 shadow-lg rounded-md my-2 cursor-pointer"
          onClick={handleClick}
        >
          <h1 className="font-bold text-lg">
            {title} ({itemCards.length})
          </h1>
          <h1 className="font-bold text-lg">{showItems ? "▲" : "▼"}</h1>
        </div>
        {showItems && <hr className="m-2 text-gray-400"></hr>}
        {showItems &&
          itemCards.map((item) => {
            const { id } = item?.card?.info;
            return <ItemList key={id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default RestaurantCategory;
