import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner/Banner";
import Dropdown from "../components/Dropdown/Dropdown";

/* Définition du style du className AproposContainer */
const AproposContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
  margin: 0 55px 200px 55px;

	@media screen and (max-width: 780px) {
		margin: 0 0 150px 0;
	}
`;

/**
 *
 * @returns Pahe A propos: bannière et engagements de l'agence
 */
function Apropos() {
	const contenuFiabilite =
		"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
	const contenuRespect =
		"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
	const contenuService = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
	const contenuSecurite =
		"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

	return (
		<React.Fragment>
			<Banner page="Apropos" texte="" />
			<AproposContainer>
				<Dropdown page="apropos" titre="Fiabilité" contenu={contenuFiabilite} />
				<Dropdown page="apropos" titre="Respect" contenu={contenuRespect} />
				<Dropdown page="apropos" titre="Service" contenu={contenuService} />
				<Dropdown page="apropos" titre="Sécurité" contenu={contenuSecurite} />
			</AproposContainer>
		</React.Fragment>
	);
}

export default Apropos;
