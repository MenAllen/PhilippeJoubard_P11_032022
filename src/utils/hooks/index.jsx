import { useState, useEffect } from "react";

export function useFetch(url) {
	const [data, setData] = useState({});
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (!url) return;
    console.log(url);

		async function fetchData() {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setData(data);
				setLoading(false);
			} catch (err) {
				console.log(err);
				setError(true);
			} finally {
				setLoading(false);
			}
		}
		setLoading(true);
		fetchData();
	}, [url]);

	return { data, isLoading, error };
}
