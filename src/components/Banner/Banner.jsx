import bannerAccueil from "../../assets/accueil.jpg";
import bannerApropos from "../../assets/apropos.jpg";
import "./Banner.css";

/**
 *
 * @param {string} page : la page d'accueil ou a propos
 * @param {string} texte : le texte à afficher sur l'image
 * @returns affichage de l'image et du texte
 */

function Banner({ page, texte }) {
	return (
		<div className="banner">
			<img src={page === "Accueil" ? bannerAccueil : bannerApropos} className={page === "Apropos" ? "imgApropos" : "imgAccueil"} alt="bannière" />
			<h1>{texte}</h1>
		</div>
	);
}

export default Banner;
