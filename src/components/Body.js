import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
	const [searchText, setSearchText] = useState("");


	const [filteredRestaurant, setFilteredRestaurant] = useState([]);

	const [listOfRestaurant, setListOfRestaurant] = useState([]);

	useEffect(() => {
		fetchData();
	}, [searchText]);

	const fetchData = async () => {
		const restaurantData = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);

		const data = await restaurantData.json();

		setListOfRestaurant(
			data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);

		setFilteredRestaurant(
			data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	return listOfRestaurant.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter">
				<input
					className="search-box"
					type="text"
					value={searchText}
					onChange={(e) => {
						console.log(e.target, e);
						setSearchText(e.target.value);

						const filteredList = listOfRestaurant.filter((restautant) => {
							return restautant.info.name
								.toLocaleLowerCase()
								.includes(searchText.toLocaleLowerCase());
						});

						console.log(filteredList);

						setFilteredRestaurant(filteredList);
					}}
				/>
				<button
					className="search-button"
					onClick={() => {
						console.log(searchText);

						const filteredList = listOfRestaurant.filter((restautant) => {
							return restautant.info.name
								.toLocaleLowerCase()
								.includes(searchText.toLocaleLowerCase());
						});

						console.log(filteredList);

						setFilteredRestaurant(filteredList);
					}}
				>
					Search
				</button>
				<button
					className="fliter-btn"
					onClick={() => {
						console.log(listOfRestaurant);
						const filteredRestaurant = listOfRestaurant.filter((res) => {
							return res.info.avgRating >= 4.5;
						});

						setFilteredRestaurant(filteredRestaurant);
					}}
				>
					Top Rated Restaurants
				</button>
			</div>
			<div className="res-container">
				{filteredRestaurant.map((restaurant) => {
					return (
						<Link
							to={`/restaurant/${restaurant.info.id}`}
							key={restaurant.info.id}
						>
							<RestaurantCard resData={restaurant} />
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Body;
