import { error } from '@sveltejs/kit';
import { TMDB } from '../../../../utilities/axiosConfig';
import type { RequestEvent } from './$types';

export const GET = async ({ params }: RequestEvent) => {
	try {
		const movie = await TMDB.get(
			`/movie/${params.movieId}?append_to_response=credits,videos,similar,reviews`,
			{
				timeout: 2000
			}
		);
		const data = await movie.data;

		return new Response(JSON.stringify(data), { status: 200 });
	} catch (err) {
		throw error(400, JSON.stringify(err));
	}
};
