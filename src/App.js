import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Contact from "./components/Contact";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => (
	<div className="app">
		<Header />
		<Outlet />
	</div>
);

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/restaurant/:id",
				element: <RestaurantMenu />,
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
