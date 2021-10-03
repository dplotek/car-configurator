import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../DataContext";
import ModelCard from "../components/ModelCard";
import Menu from "../components/Menu";
import "./Models.scss";

const Models = () => {
	const { carConfig, setCarConfing } = useContext(AppContext);
	const dataModels = carConfig.brand.models;

	const chooseModel = index => {
		setCarConfing(prevState => ({
			...prevState,
			model: dataModels[index],
			engine: dataModels[index].engines[0],
		}));
	};

	const models = dataModels.map((model, index) => (
		<Link to="/configurator" key={model.id}>
			<ModelCard
				name={model.name}
				key={`model${model.name}`}
				image={model.img}
				brandInfo={carConfig.brand}
				engines={model.engines}
				handler={() => chooseModel(index)}
			/>
		</Link>
	));

	return (
		<div className="models__wrapper">
			<Menu />
			<h1>Choose model</h1>
			<div className="models__container">{models}</div>
			<Link to="/brands">
				<button>Back</button>
			</Link>
		</div>
	);
};

export default Models;
