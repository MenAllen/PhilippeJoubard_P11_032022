import "./Card.css"

function Card ({id, title, cover}) {

  return (
    <figure>
      <img src={cover} alt="location" />
      <figcaption> {title} {id} </figcaption>
    </figure>
  )
}

export default Card;