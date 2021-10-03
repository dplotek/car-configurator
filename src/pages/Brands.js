import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../DataContext";
import BrandCard from "../components/BrandCard";
import Menu from "../components/Menu";
import "./Brands.scss";

const Brands = () => {
	const { data, setCarConfing } = useContext(AppContext);

	const chooseBrand = index => {
		setCarConfing(prevState => ({
			...prevState,
			brand: data[index],
		}));
	};

	const brands = data.map(({ logo, brand, models }, index) => (
		<Link to="/models" key={index}>
			<BrandCard
				logo={logo}
				name={brand}
				handler={() => chooseBrand(index)}
				models={models}
			/>
		</Link>
	));

	return (
		<div className="brands__wrapper">
			<Menu />
			<h1>Choose brand</h1>
			<div className="brands__container">{brands}</div>

			<Link to="/">
				<button className="tetiary">Back</button>
			</Link>
		</div>
	);
};

export default Brands;
