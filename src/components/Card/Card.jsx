import { Link } from "react-router-dom";
import "./Card.css";

/**
 *
 * @param {string} id du logement
 * @param {string} titre
 * @param {string} photo de couverture
 * @returns Affichage de la carte du logement
 */
function Card({ id, title, cover }) {
	return (
		<Link to={`./logement/${id}`}>
			<figure>
				<img src={cover} alt="location" />
				<figcaption> {title} </figcaption>
			</figure>
		</Link>
	);
}

export default Card;
