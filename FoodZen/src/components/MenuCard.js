import { CDN_URL } from "../utils/constants";
import { DEFAULT_IMG } from "../utils/constants";
const MenuCard = (props) => {
  const { menuData, section } = props;

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-gray-800">{section}</h1>
      {menuData.map((item) => {
        const { name, defaultPrice, imageId, id, price, ratings, description } =
          item?.card?.info;

        return (
          <div
            key={id}
            className="flex items-center justify-between p-4 border-double rounded-lg bg-gray-100 shadow-md hover:shadow-lg cursor-pointer transition-all"
          >
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
            <div className="w-24 h-24 overflow-hidden rounded-lg border">
              <img
                src={(CDN_URL + imageId)}
                alt={name}
                className="w-full h-full object-cover"
                onError={(e)=>{
                  e.target.oneerror=null;
                  e.target.src=DEFAULT_IMG;
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCard;
