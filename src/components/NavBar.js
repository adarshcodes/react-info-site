import React from "react";
// adding CSS files
import "../style.css";
import logo from "../images/react-icon-small.png";
class LogoBox extends React.Component {
	render() {
		return (
			<div className="logoBox">
				<img src={logo} alt="logo" className="logo" />
				<h3 className="logo-heading">ReactFacts</h3>
			</div>
		);
	}
}

class NavText extends React.Component {
	render() {
		return <h4 className="navigation-text"> React Course - Project 1</h4>;
	}
}

class NavBar extends React.Component {
	render() {
		return (
			<div className="navbar">
				<LogoBox />
				<NavText />
			</div>
		);
	}
}

export default NavBar;
