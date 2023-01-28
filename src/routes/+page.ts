import type { Movie } from '../types/Movie';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const fetchPopularMovies = async (): Promise<Movie[]> => {
		const res = await fetch('/api/movie/popular');
		const data = await res.json();
		return data;
	};
	const fetchNowPlaying = async (): Promise<Movie[]> => {
		const res = await fetch('/api/movie/nowPlaying');
		const data = await res.json();
		return data;
	};

	return {
		popularMovies: fetchPopularMovies(),
		nowPlaying: fetchNowPlaying()
	};
}) satisfies PageLoad;
