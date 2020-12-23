import { useState, useEffect } from "react";
import axios from "axios";

const useGitapi = () => {
	const [apiData, setApiData] = useState([]);
	useEffect(() => {
		const fetchData = () => {
			axios({
				method: "get",
				url: `https://api.github.com/users/${process.env.REACT_APP_USER}/repos`,
				auth: {
					username: process.env.REACT_APP_USER,
					password: process.env.REACT_APP_TOKEN,
				},
			})
				.then((response) => setApiData(response.data))
				.catch((err) => console.log(err));
		};
		fetchData();
	}, []);

	return { apiData };
};

export { useGitapi as default };
