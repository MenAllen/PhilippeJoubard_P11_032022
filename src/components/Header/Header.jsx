import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "./Header.css"

function Header() {
	return (
		<header>			
			<nav className="header-nav">
				<Link to="/"><img className="logo" src={logo} alt="logo du site Kasa" /></Link>
				<div>
	        <NavLink to="/" aria-current="page">Accueil</NavLink>
  	      <NavLink to="/about" aria-current="page">A Propos</NavLink>
				</div>
      </nav>
		</header>
	);
}

export default Header;
