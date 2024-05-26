const parent = React.createElement(
	"div",
	{ id: "parent" },
	React.createElement("div", { id: "child" }, [
		React.createElement("h1", {}, "I am h1 tag"),
		React.createElement("h2", {}, "I am h2 tag"),
	])
);

const heading = React.createElement(
	"h1",
	{ id: "heading" },
	"Hello world from React!!"
);
console.log(heading);
// console.log(ReactDOM);
const root = ReactDOM.createRoot(document.querySelector("#root"));

console.log(root);
console.log(root.render());

root.render(parent);
