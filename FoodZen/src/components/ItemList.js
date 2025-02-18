import { CDN_URL, DEFAULT_IMG } from "../utils/constants";
const ItemList = ({ item }) => {
  const { name, price, defaultPrice, imageId, description, ratings } =
    item?.card?.info;
  return (
    <div className="flex items-center justify-between p-4 my-2 border-double border-b-1 border-gray-300 rounded-lg  shadow-md hover:shadow-lg cursor-pointer transition-all">
      <div className="flex flex-col w-3/4">
        <h1 className="text-lg font-bold text-gray-900">{name}</h1>
        <h2 className="text-md text-gray-700">
          ₹{(defaultPrice || price) / 100}
        </h2>
        <h3 className="text-sm text-green-600 font-medium">
          ⭐ {ratings?.aggregatedRating?.rating}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
      </div>
      <div className="w-2/12 flex flex-col justify-center items-center relative">
        <img
          src={CDN_URL + imageId}
          alt={name}
          className="w-full h-24 object-cover border rounded-lg mb-2"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = DEFAULT_IMG;
          }}
        />
        <button className="w-9/12 font-bold text-lg bg-white text-green-600 p-1 rounded-lg absolute top-17 border-black hover:bg-gray-100">
          Add
        </button>
      </div>
    </div>
  );
};
export default ItemList;
