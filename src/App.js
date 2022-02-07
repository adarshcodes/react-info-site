// import logo from "./logo.svg";
// importing neccessary module
import React from "react";

// adding CSS files
import "./style.css";

// importing files
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
	const [theme, setTheme] = React.useState(false);

	function toggleDarkMode() {
		setTheme((prevMode) => !prevMode);
		console.log(theme);
	}

	return (
		<div>
			<NavBar darkMode={theme} toggleDarkMode={toggleDarkMode} />
			<Main darkMode={theme} toggleDarkMode={toggleDarkMode} />
		</div>
	);
}

export default App;
