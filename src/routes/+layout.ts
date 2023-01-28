import type { Config } from '../types/Config';
import type { Genre } from '../types/Genre';
import type { LayoutLoad } from './$types';

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

	return {
		configuration: fetchConfiguration(),
		genres: fetchGenres()
	};
}) satisfies LayoutLoad;
