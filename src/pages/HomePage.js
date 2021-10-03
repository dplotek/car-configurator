import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import LinkedInIcon from "../img/linkedin.svg";
import GitHubIcon from "../img/github.svg";
import homepagePhoto from "../img/Homepage.png";

const HomePage = () => {
	return (
		<div className="wrapper">
			<div className="wrapper__text">
				<h1>Configure your dream car</h1>
				<p>
					Choose your dream car from sixteen different models and customize to
					your preferences. To meet your expectations, we have prepared cars of
					four brands in four segment versions fuel-powered or hybrid.
				</p>
				<Link to="/brands">
					<button className="primary">Start</button>
				</Link>
				<Link to="/">
					<button className="secondary">About this project</button>
				</Link>
			</div>
			<div className="wrapper__img">
				<img src={homepagePhoto} alt="3-cars" />
			</div>

			<footer>
				<div className="social__container">
					<a
						href="https://www.linkedin.com/in/dawid-płotek-b54a32204/"
						target="_blank"
						rel="noreferrer"
					>
						<img src={LinkedInIcon} alt="linkedin" />
					</a>
					<a target="_blank" href="https://github.com/dplotek" rel="noreferrer">
						<img src={GitHubIcon} alt="github" />
					</a>
				</div>
			</footer>
		</div>
	);
};

export default HomePage;
