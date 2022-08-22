import whitelogo from "../../assets/whitelogo.svg";
import "./Footer.css"

function Footer() {
	return (
		<div className="footer">
			<img src={whitelogo} alt="logo blanc du site Kasa"></img>
			<p> © 2020 Kasa. All rights reserved</p>
		</div>
	);
}

export default Footer;