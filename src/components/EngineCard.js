import React from "react";
import "./EngineCard.scss";

const EngineCard = ({ capacity, fuel, fueltype, handler }) => {
	return (
		<div className="engine__card" onClick={handler}>
			<p>{fueltype} </p>
			<img src={fuel} alt={fueltype} />
			<h2>{capacity} cc</h2>
		</div>
	);
};

export default EngineCard;
