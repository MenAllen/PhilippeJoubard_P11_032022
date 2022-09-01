import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner/Banner";
import Loader from "../components/Loader/Loader";
import Card from "../components/Card/Card";
import { useFetch } from "../utils/hooks";

const LocationContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	max-width: 1240px;
	background-color: #f6f6f6;
	margin: 40px 55px;
	padding: 20px 0;
	border-radius: 25px;
`;

/**
 *
 * @returns
 */
function Accueil() {
	const { locationList, isLoading, error } = useFetch("/data/location.json");

	if (error) {
		return <span>Oups il y a eu un problème</span>;
	}

	return (  
    <React.Fragment>
      <Banner page='Accueil' texte='Chez vous, partout et ailleurs'/>
      { isLoading ? (
        <Loader />
      ) : (
        <LocationContainer>
          {locationList.map((location) => (
            <Card key={location.id} id={location.id} title={location.title} cover={location.cover} />
          ))}
        </LocationContainer> ) }
    </React.Fragment>
	);
}

export default Accueil;
