import { CDN_URL } from "../utils/constants";

const Card = (props) => {
  const { resData } = props;
  const { name, avgRating, costForTwo, sla } = resData?.info;
  const cuisines = resData.info.cuisines;
  const cuisineString = cuisines.join(", ");
  const imgLink = CDN_URL;

  return (
    <div className="border border-gray-300 bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition min-h-100">
      <img
        className="w-full h-50 object-cover rounded-md"
        src={imgLink + resData.info.cloudinaryImageId}
        alt={name}
      />
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <h4 className="text-gray-600">{cuisineString}</h4>
      <h4 className="text-yellow-500 font-medium">{avgRating} ⭐</h4>
      <h4 className="text-gray-700">{costForTwo}</h4>
      <h4 className="text-green-500">{sla.deliveryTime} mins</h4>
    </div>
  );
};
export const withFlatDiscount = (Card) => {
  return (props) => {
    const { resData } = props;
    return (
      <div className="relative">
        {resData?.info?.aggregatedDiscountInfoV3 ? (
          <div className="absolute bottom-90 left-2 z-10 bg-opacity-50 bg-black text-white px-2 py-1 max-w-37 rounded-md overflow-hidden whitespace-nowrap truncate">
            <label className="">
              {resData?.info?.aggregatedDiscountInfoV3?.header +
                " " +
                resData?.info?.aggregatedDiscountInfoV3?.subHeader}
            </label>
          </div>
        ) : (
          <label className="hidden"></label>
        )}
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
