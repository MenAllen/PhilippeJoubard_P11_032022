import { useState,  useEffect } from "react"
import styled from 'styled-components'
import Banner from "../components/Banner/Banner"
import Card from "../components/Card/Card"

const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1240px;
  background-color: #F6F6F6;
  margin: 40px 100px;
  border-radius: 25px;
`

function Accueil () {
  const [locationData, setLocationData] = useState([]);
  const [error, setError] = useState(false);

//  useEffect(() => {
//    setDataLoading(true);
//    fetch("./public/data.json")
//         .then((response) => response.json())
//         .then(({ locationData }) => {
//          setLocationData(locationData)
//          console.log("useEffect")
//          setDataLoading(false)
//        })
//        .catch((error) => setError(true))
//  }, [])

  useEffect(() => {
    async function fetchLocation () {
//      setDataLoading(true);
      try {
        const response = await fetch('./data/location.json');
        const { locationData } = await response.json();
        setLocationData(locationData);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
//        setDataLoading(false);
      }
    }
    fetchLocation()
  }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
      <Banner />
      <LocationContainer>
        {locationData.map((location) => (
          <Card key={location.id} id={location.id} title={location.title} cover={location.cover} />
        ))}
      </LocationContainer>
    </div>
  )
}

export default Accueil;