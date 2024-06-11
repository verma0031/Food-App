import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RestaurantMenu.css";
import Shimmer from "./Shimmer";

const MenuItem = ({ item }) => {
	{
		if (item.length >= 5) {
			return (
				<div>
					{item.map((item, index) => {
						const { price, defaultPrice, finalPrice } = item?.card?.info;

						const displayPrice = price
							? price / 100
							: defaultPrice
								? defaultPrice / 100
								: finalPrice
									? finalPrice / 100
									: null;

						return (
							<div className="menu-item" key={index}>
								<img
									src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`}
									alt={item.title}
									className="menu-item-image"
								/>
								<div className="menu-item-details">
									<h3>{item.card.info.name}</h3>
									<p className="price">
										{displayPrice
											? `${displayPrice.toFixed(2)}`
											: "Price not available"}
									</p>
									<p className="rating">
										⭐ {item?.card?.info?.ratings?.aggregatedRating?.rating}
									</p>
									<p className="description">{item?.card?.info?.description}</p>
									<button className="add-button">ADD</button>
								</div>
							</div>
						);
					})}
				</div>
			);
		}
	}
};

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

		{
			menuData.splice(0, 2);
			menuData.splice(-2);
		}

		setMenuItems(menuData);
	};

	if (menuItems.length === 0) return <Shimmer />;

	return (
		<div className="menu-container">
			<div className="menu-card">
				<h2>Restaurant Menu</h2>
				<div>
					<div className="menu-title"></div>
					<div className="menu-items">
						{menuItems.map((item, index) => (
							<MenuItem
								key={index}
								item={item.card.card.itemCards || item.card.card.categories}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RestaurantMenu;

// || item.card.card.categories
