const Shimmer = () => {
	const shimmerCards = Array.from({ length: 14 }).map((_, index) => (
		<div className="res-card" key={index}>
			<h3 className="card-heading"></h3>

			<div className="res-logo">
				<img className="res-image" />
			</div>
			<h5 className="res-cuisine"></h5>
			<h6 className="card-subheading">
				<div>
					<img />
				</div>
				<span></span>
			</h6>
		</div>
	));

	return <div className="shimmer-container">{shimmerCards}</div>;
};

export default Shimmer;
