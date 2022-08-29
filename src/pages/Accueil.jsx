import React from "react"
import styled from 'styled-components'
import Banner from "../components/Banner/Banner"
import { Loader } from "../utils/style/Atoms"
import Card from "../components/Card/Card"
import { useFetch } from "../utils/hooks"

const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1240px;
  background-color: #F6F6F6;
  margin: 40px 35px;
  padding: 20px 0;
  border-radius: 25px;
`

function Accueil () {

  const { data, isLoading, error } = useFetch("/data/location.json");

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <React.Fragment>
      <Banner />
      { isLoading ? (
        <Loader />
      ) : (
      <LocationContainer>
        {data.map((location) => (
          <Card key={location.id} id={location.id} title={location.title} cover={location.cover} />
        ))}
      </LocationContainer> ) }
    </React.Fragment>
  )
}

export default Accueil;