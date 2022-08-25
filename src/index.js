import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Error from "./components/Error/Error"
import Accueil from "./pages/Accueil"
import Logements from "./pages/Logements"
import Apropos from "./pages/Apropos"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route exact path="/" element={<Accueil />} />
				<Route path="/logements" element={<Logements />} />
				<Route path="/about" element={<Apropos />} />
				<Route path="/*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
);
