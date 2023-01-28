import { error } from '@sveltejs/kit';
import { TMDB } from '../../../../../utilities/axiosConfig';
import type { RequestEvent } from './$types';

export const GET = async ({ params }: RequestEvent) => {
	try {
		const reviews = await TMDB.get(`/movie/${params.movieId}/reviews`, { timeout: 2000 });
		const data = await reviews.data;

		return new Response(JSON.stringify(data.results), { status: 200 });
	} catch (err) {
		throw error(400, JSON.stringify(err));
	}
};
