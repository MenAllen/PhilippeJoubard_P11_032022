import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "./Header.css"

function Header() {
	return (
		<div className="header">
			<img className="logo" src={logo} alt="logo du site Kasa" />
			<nav className="header-nav">
        <NavLink to="/" >Accueil</NavLink>
        <NavLink to="/about" >A propos</NavLink>
      </nav>
		</div>
	);
}

export default Header;
