import { useState } from "react";
import "./Dropdown.css";

/**
 *
 * @param {string} page
 * @param {string} titre
 * @param {string ou array} contenu
 * @returns Affichage d'un article déroulant
 */
function Dropdown({ page, titre, contenu }) {
	/* gestion de l'article déroulant au click par le state openState */
	let [openState, setOpenState] = useState(false);

	function changeState() {
		openState === false ? setOpenState(true) : setOpenState(false);
	}

	/* gestion de l'affichage du contenu suivant le type string ou non */
	return (
		<article className={page === "logement" ? "bloc-accueil" : "bloc-apropos"}>
			<summary className="titre" onClick={changeState}>
				{titre} <i className={openState === false ? "fa fa-chevron-up" : "fa fa-chevron-down"} />
			</summary>
			<div className={openState === false ? "contenu hidden" : "contenu"}>{typeof contenu === "string" ? <p>{contenu}</p> : contenu.map((elt, index) => <p key={index}>{elt}</p>)}</div>
		</article>
	);
}

export default Dropdown;
