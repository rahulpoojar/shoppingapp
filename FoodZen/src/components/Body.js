import Card, { withFlatDiscount } from "./Card.js";
import Shimmer from "./Shimmer.js";
import { useState, useEffect, useContext } from "react";
import { RESTAURANTS_API } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] =
    useState(listOfRestaurants);
  const [searchText, setSearchText] = useState("");
  const CardWithFlatDiscount = withFlatDiscount(Card);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = RESTAURANTS_API;
    const response = await fetch(url);
    const json = await response.json();
    for (let i = 0; i < json.data.cards.length; i++) {
      const extractedData =
        json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (extractedData && extractedData.length === 8) {
        console.log(extractedData);
        setListOfRestaurants(extractedData);
        setFilteredRestaurant(extractedData);
      }
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1 className="text-center text-xl font-semibold text-red-600">
        Looks Like You Are Offline.Please Check Your Internet Connection
      </h1>
    );
  }

  const {setUserName , loggedInUser}=useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4">
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          className="p-2 border border-gray-300 rounded-md w-80 focus:ring-2 focus:ring-blue-400 outline-none"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          onClick={() => {
            if (searchText === "") {
              setFilteredRestaurant(listOfRestaurants);
            } else {
              const searchedRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(searchedRestaurant);
            }
          }}
        >
          Search
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.3,
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <input className="border p-2" onChange={(e)=>setUserName(e.target.value)} value={loggedInUser}></input>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
            className="block hover:scale-105 transition-transform"
          >
            {restaurant?.info?.aggregatedDiscountInfoV3 ? (
              <CardWithFlatDiscount resData={restaurant} />
            ) : (
              <Card resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
