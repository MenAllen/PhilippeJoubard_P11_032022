import React from "react";
import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";
import { useFetch } from "../utils/hooks";
import Carrousel from "../components/Carrousel/Carrousel";
import Pitch from "../components/Pitch/Pitch";
import Dropdown from "../components/Dropdown/Dropdown";

const LogementContainer = styled.div`
	display: flex;
	flex-direction: row;
  justify-content: space-between;
  margin: 40px 55px;

	@media screen and (max-width: 780px) {
		flex-direction: column;
		margin: 10px 10px 40px 10px;;
  }
`;

/**
 * 
 * @returns Affichage détaillé d'un logement : carroussel, points forts (tags), avis
 */
function Logement() {
	const { userId } = useParams();
	const { locationList, isLoading, error } = useFetch("/data/location.json");

	if (error) {
		return <span>Oups il y a eu un problème</span>;
	}

	if (!isLoading) {

		const locationSelected = locationList.find(elt => elt.id === userId);

		if (locationSelected === undefined) {
			return <Navigate to="/*" />;
		}

		return (
			<React.Fragment>
				<Carrousel images={locationSelected.pictures} titre={locationSelected.title}/>
				<Pitch logement={locationSelected} />
				<LogementContainer>
					<Dropdown page="logement" titre="Description" contenu={locationSelected.description}/>
					<Dropdown page="logement" titre="Equipements" contenu={locationSelected.equipments}/>
				</LogementContainer>
			</React.Fragment>
		)
	}
}

export default Logement;