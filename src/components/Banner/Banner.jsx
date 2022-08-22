import accueil from "../../assets/accueil.jpg";

function Banner() {
	return (
		<div className="banner">
			<img src={accueil} alt="Banner d'accueil"></img>
		</div>
	);
}

export default Banner;