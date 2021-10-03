import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.scss";
import image from "../img/Homepage.png";

const ErrorPage = () => {
	return (
		<div className="error__wrapper">
			<img src={image} alt="cars" />
			<div className="error__container">
				<h1>404</h1>
				<h2>something went wrong, please start from the beginning</h2>
				<Link to="/">
					<button>Start</button>
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
