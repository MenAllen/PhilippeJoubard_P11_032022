import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Accueil from "./pages/Accueil/index"
import Logements from "./pages/Logements/index"
import Apropos from "./pages/Apropos/index"
import Error from "./pages/Error/index"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route exact path="/" element={<Accueil />} />
				<Route path="/logements" element={<Logements />} />
				<Route path="/about" element={<Apropos />} />
				<Route path="/error" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
);
