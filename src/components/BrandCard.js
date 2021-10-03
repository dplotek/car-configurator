import React from "react";
import "./BrandCard.scss";

const BrandCard = ({ logo, name, handler, models }) => {
	const availableModels = models.map(model => (
		<li key={model.name}>{model.name}</li>
	));

	const prices = models.map(model => model.engines.map(engine => engine.price));
	const parsetPrice = prices.map(price => parseInt(price));
	const lowestPrice = Math.min(...parsetPrice);

	return (
		<div className="brand" onClick={handler} key={name}>
			<div className="brand__header">
				<h2>{name}</h2>
				<img src={logo} alt={`${name}-logo`} />
			</div>
			<div className="brand__body">
				<div className="brand__pricing">
					<p>Prices start from</p>
					<span>{lowestPrice}</span>
				</div>
				<strong>Available models:</strong>
				<ul>{availableModels}</ul>
			</div>
		</div>
	);
};

export default BrandCard;
