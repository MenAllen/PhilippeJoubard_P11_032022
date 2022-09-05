import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import { useFetch } from "../utils/hooks";

/* Définition du style du className LocationContainer */
const LocationContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	background-color: #f6f6f6;
	margin: 40px 55px;
	padding: 20px 0;
	border-radius: 25px;

  @media screen and (max-width: 780px) {
    margin: 20px 20px;
    padding: 0;
    background-color: #ffffff;
  }
`;

/**
 *
 * @returns Page d'accueil : bannière et cartes des 20 logements
 */
function Accueil() {
	const { locationList, isLoading, error } = useFetch("/data/location.json");

	if (error) {
		return <span>Oups il y a eu un problème</span>;
	}

	if (!isLoading) {
		return (
			<React.Fragment>
				<Banner page="Accueil" texte="Chez vous, partout et ailleurs" />
				<LocationContainer>
					{locationList.map((location) => (
						<Card key={location.id} id={location.id} title={location.title} cover={location.cover} />
					))}
				</LocationContainer>
			</React.Fragment>
		);
	}
}

export default Accueil;
