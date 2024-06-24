import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RestaurantMenu.css";
import MenuItem from "./MenuItem";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
	const { id } = useParams();
	const [menuItems, setMenuItems] = useState([]);

	useEffect(() => {
		fetchRestaurantMenu();
	}, []);

	const fetchRestaurantMenu = async () => {
		const restaurantMenu = await fetch(
			`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
		);

		const json = await restaurantMenu.json();

		const menuData =
			json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

		menuData.splice(0, 2);
		menuData.splice(-2);

		console.log(menuData);

		setMenuItems(menuData);
	};

	if (menuItems.length === 0) return <Shimmer />;

	return (
		<div className="menu-container">
			<div className="menu-card">
				<h2>Restaurant Menu</h2>
				<div className="menu-items">
					{menuItems.map((item, index) => (
						<MenuItem key={index} props={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default RestaurantMenu;
