import type { MovieDetails } from '../../../types/MovieDetails';
import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	const fetchMovieDetails = async (): Promise<MovieDetails> => {
		const res = await fetch(`/api/movie/${params.movieId}`);
		const data = await res.json();
		return data;
	};

	return {
		movie: fetchMovieDetails()
	};
}) satisfies PageLoad;
