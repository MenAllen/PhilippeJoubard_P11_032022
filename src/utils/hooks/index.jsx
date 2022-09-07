import { useState, useEffect } from "react";

/**
 *
 * @param {string} url du fichier json des tables de logements
 * @returns locationList Table des logements
 * 					isLoading boolean d'indication de chargement en cours ou terminé
 * 					error boolean d'indication d'erreur de lecture des données
 */
export function useFetch(url) {
	const [locationList, setLocationList] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (!url) return;

		async function fetchData() {
			try {
				const response = await fetch(url);
				const { locationData } = await response.json();
				setLocationList(locationData);
				setLoading(false);
			} catch (err) {
				console.log(err);
				setError(true);
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, [url]);

	return { locationList, isLoading, error };
}
