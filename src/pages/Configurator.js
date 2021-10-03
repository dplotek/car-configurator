import React, { useContext } from "react";
import EngineCard from "../components/EngineCard";
import { AppContext } from "../DataContext";
import "./Configurator.scss";

import StatsCard from "../components/StatsCard";
import Menu from "../components/Menu";

import petrol from "../img/petrol-icon.svg";
import diesel from "../img/diesel-icon.svg";
import electric from "../img/electric-icon.svg";

const Configurator = () => {
	const { carConfig, setCarConfing } = useContext(AppContext);
	const dataEngines = carConfig.model.engines;
	const fuelIcons = {
		Petrol: petrol,
		Diesel: diesel,
		Hybrid: electric,
	};

	const setEngine = index => {
		setCarConfing(prevState => ({
			...prevState,
			engine: dataEngines[index],
		}));
	};

	const engines = dataEngines.map((engine, index) => (
		<EngineCard
			key={engine.power}
			capacity={engine.engineCapacity}
			fuel={fuelIcons[engine.fuelType]}
			fueltype={engine.fuelType}
			handler={() => setEngine(index)}
		/>
	));

	return (
		<div className="configurator__wrapper">
			<Menu />
			<div className="configurator__body">
				<div className="left__side">
					<h1>Configurate your car</h1>
					<img src={carConfig.model.img} alt={carConfig.model.name} />
					<div className="engine__container">
						<div className="back">
							<div className="triangle"></div>
						</div>
						{engines}
					</div>
				</div>
				<div className="board">
					<StatsCard />
				</div>
			</div>
		</div>
	);
};

export default Configurator;
