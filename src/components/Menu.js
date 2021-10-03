import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
import LinkedIcon from "../img/linkedin.svg";
import GithubIcon from "../img/github.svg";

const Menu = () => {
	const [isActive, setIsActive] = useState(false);

	const showMenu = () => setIsActive(!isActive);

	return (
		<>
			<div className="hamburger" onClick={showMenu}>
				<div></div>
				<div></div>
				<div></div>
			</div>
			{isActive ? (
				<div className="menu__wrapper">
					<div className="menu__container">
						<Link to="/">
							<p>Start from beginning</p>
						</Link>
						<a href="">
							<p>About this project</p>
						</a>
						<div className="menu__socials">
							<a
								href="https://www.linkedin.com/in/dawid-płotek-b54a32204/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={LinkedIcon} alt="linked-in" />
							</a>
							<a
								target="_blank"
								href="https://github.com/dplotek"
								rel="noreferrer"
							>
								<img src={GithubIcon} alt="github" />
							</a>
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
};

export default Menu;
