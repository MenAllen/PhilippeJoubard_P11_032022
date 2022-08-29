import { useState } from "react";
import previousIcon from "../../assets/previous.svg"
import nextIcon from "../../assets/next.svg"
import "./Carrousel.css";

/**
 * 
 * @param {Array} pictures
 * @param {String} title
 * @returns 
 */

function Carrousel ({ pictures, title }) {
	let [id, setId] = useState(0);
	function next () { (id === pictures.length - 1) ? setId(0) : setId(id+1); }
	function previous () { (id === 0) ? setId(pictures.length-1) : setId(id-1); }

	return (
		<div className="carrousel">
			<img src={previousIcon} className="previous" onClick={previous} alt="précédente" />
			<img src={pictures[id]} className="picture" alt={title} />
			<p>{id+1}/{pictures.length}</p>
			<img src={nextIcon} className="next" onClick={next} alt="suivante" />
		</div>
	)
}

export default Carrousel;
