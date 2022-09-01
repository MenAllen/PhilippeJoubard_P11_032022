import whitelogo from "../../assets/whitelogo.svg";
import "./Footer.css"

function Footer() {
	return (
		<footer>
			<img src={whitelogo} alt="logo blanc du site Kasa" />
			<p> © 2020 Kasa. All rights reserved</p>
		</footer>
	);
}

export default Footer;