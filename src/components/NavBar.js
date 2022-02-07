import React from "react";
// adding CSS files
import "../style.css";
import logo from "../images/react-icon-small.png";

function NavBar(props) {
	return (
		<nav className={props.darkMode ? "dark navbar" : "navbar"}>
			<div className="logoBox">
				<img src={logo} alt="logo" className="logo" />
				<h3 className="logo-heading">ReactFacts</h3>
			</div>

			<div className="toggler">
				<p className="toggler--light">Light</p>
				<div className="toggler--slider" onClick={props.toggleDarkMode}>
					<div className="toggler--slider--circle"></div>
				</div>
				<p className="toggler--dark">Dark</p>
			</div>
		</nav>
	);
}

export default NavBar;
