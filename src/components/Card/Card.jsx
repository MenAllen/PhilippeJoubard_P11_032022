import { Link } from "react-router-dom";
import "./Card.css"


/**
 * 
 * @param {object} { id, title, cover }
 * @returns 
 */

function Card ({id, title, cover}) {

  return (
    <Link to={`./logement/${id}`}>
      <figure>
        <img src={cover} alt="location" />
        <figcaption> {title} </figcaption>
      </figure>
    </Link>
  )
}

export default Card;