import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [btnName, setBtnName] = useState("Login");

	return (
		<header className="flex justify-between items-center bg-gray-100 p-4 shadow-md">
			<div className="w-32">
				<img src={LOGO_URL} alt="Logo" className="w-full" />
			</div>
			<nav>
				<ul className="flex space-x-6">
					<li>
						<Link
							className="text-gray-700 hover:text-gray-900 transition duration-200"
							to="/"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className="text-gray-700 hover:text-gray-900 transition duration-200"
							to="/about"
						>
							About Us
						</Link>
					</li>
					<li>
						<Link
							className="text-gray-700 hover:text-gray-900 transition duration-200"
							to="/contact"
						>
							Contact Us
						</Link>
					</li>
					<li>
						<Link
							className="text-gray-700 hover:text-gray-900 transition duration-200"
							to="/cart"
						>
							Cart
						</Link>
					</li>
				</ul>
			</nav>
			<button
				className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
				onClick={() => {
					setBtnName(btnName === "Login" ? "Logout" : "Login");
				}}
			>
				{btnName}
			</button>
		</header>
	);
};

export default Header;
