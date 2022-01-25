// import logo from "./logo.svg";
// importing neccessary module
import React from "react";

// adding CSS files
import "./style.css";

// importing files
import NavBar from "./components/NavBar";
import Main from "./components/Main";

class App extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<Main />
			</div>
		);
	}
}

export default App;
