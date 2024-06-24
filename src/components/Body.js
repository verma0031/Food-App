import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { serviceAbleRestaurant } from "./RestaurantCard";

const Body = () => {
	const [searchText, setSearchText] = useState("");
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);
	const [listOfRestaurant, setListOfRestaurant] = useState([]);

	const RestaurantCardService = serviceAbleRestaurant(RestaurantCard);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const restaurantData = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.9462395&lng=80.7787163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);

		const data = await restaurantData.json();

		setListOfRestaurant(
			data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);

		setFilteredRestaurant(
			data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	if (listOfRestaurant.length === 0) return <Shimmer />;

	return (
		<div className="p-4">
			<div className="flex items-center justify-center mb-6 space-x-4">
				<input
					className="border border-gray-300 p-2 rounded w-full max-w-md"
					type="text"
					placeholder="Search restaurants"
					value={searchText}
					onChange={(e) => {
						setSearchText(e.target.value);

						const filteredList = listOfRestaurant.filter((restaurant) => {
							return restaurant.info.name
								.toLowerCase()
								.includes(e.target.value.toLowerCase());
						});

						setFilteredRestaurant(filteredList);
					}}
				/>
				<button
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
					onClick={() => {
						const filteredList = listOfRestaurant.filter((restaurant) => {
							return restaurant.info.name
								.toLowerCase()
								.includes(searchText.toLowerCase());
						});

						setFilteredRestaurant(filteredList);
					}}
				>
					Search
				</button>
				<button
					className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
					onClick={() => {
						const filteredRestaurant = listOfRestaurant.filter((res) => {
							return res.info.avgRating >= 4.5;
						});

						setFilteredRestaurant(filteredRestaurant);
					}}
				>
					Top Rated
				</button>
			</div>
			<div className="flex flex-wrap justify-center">
				{filteredRestaurant.map((restaurant) => {
					return (
						<Link
							className="m-4"
							to={`/restaurant/${restaurant.info.id}`}
							key={restaurant.info.id}
						>
							{restaurant.info.sla.serviceability ? (
								<RestaurantCardService resData={restaurant} />
							) : (
								<RestaurantCard resData={restaurant} />
							)}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Body;
