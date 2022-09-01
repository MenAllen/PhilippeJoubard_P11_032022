import { useState, useEffect } from "react";

export function useFetch(url) {
	const [locationList, setLocationList] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	
	useEffect(() => {
		if (!url) return;
  
		async function fetchData() {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setLocationList(data);
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
