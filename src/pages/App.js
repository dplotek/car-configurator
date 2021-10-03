import React, { useEffect, useContext } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContext } from "../DataContext";
import axios from "axios";

import Models from "./Models";
import HomePage from "./HomePage";
import Brands from "./Brands";
import Configurator from "./Configurator";
import ErrorPage from "./ErrorPage";

const App = () => {
	const { data, carConfig, setData } = useContext(AppContext);

	useEffect(() => {
		axios
			.get("https://vps.franciszekpawlak.pl:17500/pandora")
			.then(res => setData(res.data.data))
			.catch(err => console.log(err));
	}, []);

	return (
		<Router basename={process.env.PUBLIC_URL}>
			<div className="container">
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/brands" component={data !== "" ? Brands : ErrorPage} />
					<Route
						path="/models"
						component={carConfig.brand !== "" ? Models : ErrorPage}
					/>
					<Route
						path="/configurator"
						component={carConfig.model !== "" ? Configurator : ErrorPage}
					/>
					<Route component={ErrorPage} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
