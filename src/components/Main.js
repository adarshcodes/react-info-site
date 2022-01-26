import React from "react";
// adding CSS files
import "../style.css";

function Main() {
	return (
		<div className="main-section">
			<h1 className="heading-primary">Fun facts about React</h1>
			<ul className="main-list">
				<li className="main-item">Was first released in 2013</li>
				<li className="main-item">Was originally created by Jordan Walke</li>
				<li className="main-item">Has well over 100K stars on GitHub</li>
				<li className="main-item">Is maintained by Facebook</li>
				<li className="main-item">
					Powers thousands of enterprise apps, including mobile apps
				</li>
			</ul>
		</div>
	);
}

export default Main;
