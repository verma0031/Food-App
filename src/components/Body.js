import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
	const [listOfRestaurant, setListOfRestaurant] = useState(resList);

	return (
		<div className="body">
			<div className="filter">
				<button
					className="fliter-btn"
					onClick={() => {
						const filteredList = resList.filter((res) => {
							return res.info.avgRating >= 4.5;
						});

						setListOfRestaurant(filteredList);
					}}
				>
					Top Rated Restaurants
				</button>
			</div>
			<div className="res-container">
				{listOfRestaurant.map((restaurant) => {
					return (
						<RestaurantCard key={restaurant.info.id} resData={restaurant} />
					);
				})}
			</div>
		</div>
	);
};

export default Body;
