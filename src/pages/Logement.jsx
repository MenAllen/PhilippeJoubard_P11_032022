import { useParams, Navigate } from "react-router-dom";
import { useFetch } from "../utils/hooks";
import Carrousel from "../components/Carrousel/Carrousel";
import Pitch from "../components/Pitch/Pitch";
import Dropdown from "../components/Dropdown/Dropdown";

function Logement() {
	const { userId } = useParams();
	console.log(userId);
	const { data, isLoading, error } = useFetch("/data/location.json");

	console.log(isLoading, error);

	if (error) {
		return <span>Oups il y a eu un problème</span>;
	}

	if (!isLoading) {
		const logementSelected = data.find((elt) => elt.id === userId);

		if (logementSelected === undefined) {
			return <Navigate to="/*" />;
		}

		console.log(logementSelected);

		return (
			<>
				<Carrousel id={logementSelected.id} pictures={logementSelected.pictures} title={logementSelected.title}/>
				<Pitch />
				<Dropdown />
			</>
		);
	}
}

export default Logement;
