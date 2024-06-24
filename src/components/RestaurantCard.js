import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
	const { resData } = props;
	const { name, cloudinaryImageId, cuisines, costForTwo, avgRating } =
		resData?.info;
	const { deliveryTime } = resData?.info?.sla;

	return (
		<div className="res-card w-60 p-4 m-2 border rounded shadow-2xl">
			<h3 className="card-heading text-lg font-semibold">{name}</h3>
			<div className="res-logo mt-2">
				<img
					className="res-image w-full h-32 object-cover rounded"
					src={CDN_URL + cloudinaryImageId}
					alt="res-logo"
				/>
			</div>
			<h5 className="res-cuisine mt-2 text-sm text-gray-600">
				{cuisines.join(", ")}
			</h5>
			<h6 className="card-subheading mt-1 text-sm text-gray-500">
				<div className="flex justify-between items-center">
					<span>⭐ {avgRating}</span>
					<span>{costForTwo}</span>
				</div>
				<span>{deliveryTime} minutes</span>
			</h6>
		</div>
	);
};

export const serviceAbleRestaurant = (RestaurantCard) => {
	return (props) => {
		return (
			<div className="w-60 p-4 m-2 border rounded shadow-md">
				<label className="text-sm font-semibold text-green-500 mb-2 block">
					Serviceable
				</label>
				<RestaurantCard {...props} />
			</div>
		);
	};
};

export default RestaurantCard;
