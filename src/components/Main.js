import React from "react";
// adding CSS files
import "../style.css";

function Main(props) {
	return (
		<div className={props.darkMode ? "dark main-section" : "main-section"}>
			<h1
				className={
					props.darkMode ? "text-dark heading-primary" : "heading-primary"
				}
			>
				Fun facts about React
			</h1>
			<ul>
				<li className={props.darkMode ? "main-item text-dark" : "main-item"}>
					Was first released in 2013
				</li>
				<li className={props.darkMode ? "main-item text-dark" : "main-item"}>
					Was originally created by Jordan Walke
				</li>
				<li className={props.darkMode ? "main-item text-dark" : "main-item"}>
					Has well over 100K stars on GitHub
				</li>
				<li className={props.darkMode ? "main-item text-dark" : "main-item"}>
					Is maintained by Facebook
				</li>
				<li className={props.darkMode ? "main-item text-dark" : "main-item"}>
					Powers thousands of enterprise apps, including mobile apps
				</li>
			</ul>
		</div>
	);
}

export default Main;
