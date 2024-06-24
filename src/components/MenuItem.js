import React, { useState, useEffect } from "react";
import "./RestaurantMenu.css";

const MenuItem = ({ props }) => {
	const { itemCards, categories, title } = props?.card?.card || {};
	const [isCollapsed, setIsCollapsed] = useState(true);

	const toggleCollapse = () => {
		setIsCollapsed(!isCollapsed);
	};

	const foodItems =
		itemCards ||
		(categories ? categories.flatMap((category) => category.itemCards) : []);

	return (
		<div>
			<div className="menu-title" onClick={toggleCollapse}>
				{title}
			</div>
			{!isCollapsed && (
				<div className="menu-content">
					{categories &&
						categories.map((category, catIndex) => (
							<div key={catIndex}>
								<h3>{category.title}</h3>
								<div>
									{category.itemCards.map((item, index) => {
										const { price, defaultPrice, finalPrice } =
											item?.card?.info;

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
														⭐{" "}
														{
															item?.card?.info?.ratings?.aggregatedRating
																?.rating
														}
													</p>
													<p className="description">
														{item?.card?.info?.description}
													</p>
													<button className="add-button">ADD</button>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						))}
					{!categories && foodItems.length >= 1 && (
						<div>
							{foodItems.map((item, index) => {
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
											<p className="description">
												{item?.card?.info?.description}
											</p>
											<button className="add-button">ADD</button>
										</div>
									</div>
								);
							})}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default MenuItem;
