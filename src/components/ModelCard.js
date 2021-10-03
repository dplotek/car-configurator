import React from "react";
import "./ModelCard.scss";

const ModelCard = ({ name, handler, brandInfo, image, engines }, index) => {
	const availableEngines = engines.map(engine => (
		<li key={`${brandInfo.brand}${engine.power}`}>
			{engine.engineCapacity}
			<span> {engine.fuelType}</span>
		</li>
	));

	const prices = engines.map(engine => engine.price);
	const patsetPrice = prices.map(price => parseInt(price));
	const lowestPrice = Math.min(...patsetPrice);

	return (
		<div className="model__card" onClick={handler} key={name}>
			<div className="modelcard__header">
				<h2>{name}</h2>
				<img src={brandInfo.logo} alt={`logo-${brandInfo.brand}`} />
			</div>
			<img src={image} alt={name} />
			<div className="modelcard__body">
				<div className="pricing__container">
					<p>Prices start from</p>
					<span>{lowestPrice}</span>
				</div>
				<strong>Dostępne silniki</strong>
				<ul>{availableEngines}</ul>
			</div>
		</div>
	);
};

export default ModelCard;
