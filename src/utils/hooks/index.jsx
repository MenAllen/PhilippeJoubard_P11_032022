import { useState, useEffect } from "react";

export function useFetch(url) {
	const [locationList, setLocationList] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	console.log(url);
	
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
