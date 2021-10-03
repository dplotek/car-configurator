import React, { useContext } from "react";
import { AppContext } from "../DataContext";
import "./StatsCard.scss";

const StatsCard = () => {
	const { carConfig } = useContext(AppContext);
	const { brand, logo } = carConfig.brand;
	const {
		engineCapacity,
		fuelType,
		power,
		fuelConsumption,
		to100,
		topSpeed,
		price,
	} = carConfig.engine;

	return (
		<div className="card__body">
			<div className="card__header">
				<h2>{brand}</h2>
				<img src={logo} alt="" />
			</div>
			<div className="card__stats">
				<div className="card__tile">
					<p>Cubic Capacity</p>
					<span>{engineCapacity} cc</span>
				</div>
				<div className="card__tile">
					<p>Fuel Type</p>
					<span>{fuelType}</span>
				</div>
				<div className="card__tile">
					<p>Power</p>
					<span>{power} hp</span>
				</div>
				<div className="card__tile">
					<p>Fuel Consumption</p>
					<span>{fuelConsumption}/100km</span>
				</div>
				<div className="card__tile">
					<p>0-100</p>
					<span>{to100} s</span>
				</div>
				<div className="card__tile">
					<p>Top speed</p>
					<span>{topSpeed} km/h</span>
				</div>
			</div>
			<div className="card__price">
				<p>Price</p>
				<span>{price} zł</span>
			</div>
		</div>
	);
};

export default StatsCard;
