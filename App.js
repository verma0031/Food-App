import React from "react";
import ReactDOM from "react-dom/client";

const title =(
	<h1 id="heading" className="head">
		Namste React using JSX
	</h1>
);

const Heading = () => (
	<div className="container">
        {title}
		<h1 id="heading" className="functional">
			This is functional component heading
		</h1>
	</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>);
