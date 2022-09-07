import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "./Header.css";

/**
 *
 * @returns Affichage du header inluant logo et menu de navigation
 */
function Header() {
	return (
		<header>
			<Link to="/">
				<img className="logo" src={logo} alt="logo du site Kasa" />
			</Link>
			<nav>
				<NavLink to="/">Accueil</NavLink>
				<NavLink to="/about">A Propos</NavLink>
			</nav>
		</header>
	);
}

export default Header;
