import axios from 'axios';

export const TMDB = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	timeout: 1000,
	headers: {
		Authorization: `Bearer ${import.meta.env.VITE_TMDB_V4_ACCESS_TOKEN}`,
		'Content-Type': 'application/json'
	}
});
