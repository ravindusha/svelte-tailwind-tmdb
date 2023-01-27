import type { Config } from '../types/Config';
import type { Genre } from '../types/Genre';
import type { Movie } from '../types/Movie';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const fetchConfiguration = async (): Promise<Config> => {
		const res = await fetch('/api/configuration');
		const data = await res.json();
		return data;
	};
	const fetchGenres = async (): Promise<Genre[]> => {
		const res = await fetch('/api/genre/movie/list');
		const data = await res.json();
		return data;
	};
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
		configuration: fetchConfiguration(),
		genres: fetchGenres(),
		popularMovies: fetchPopularMovies(),
		nowPlaying: fetchNowPlaying()
	};
}) satisfies PageLoad;
