import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
	const { resData } = props;

	const { name, cloudinaryImageId, cuisines, costForTwo, avgRating } =
		resData?.info;
	const { deliveryTime } = resData?.info?.sla;
	return (
		<div className="res-card">
			<h3 className="card-heading">{name}</h3>

			<div className="res-logo">
				<img
					className="res-image"
					src={
						CDN_URL +
						cloudinaryImageId
					}
					alt="res-logo"
				/>
			</div>
			<h5 className="res-cuisine">{cuisines.join(", ")}</h5>
			<h6 className="card-subheading">
				<div>
					<img src="/Users/peeyushverma/Desktop/namaste-react/icons8-star-24.png" />
					{avgRating} {costForTwo}
				</div>
				<span>{deliveryTime}minutes</span>
			</h6>
		</div>
	);
};


export default RestaurantCard;