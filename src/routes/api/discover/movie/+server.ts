import { error } from '@sveltejs/kit';
import { TMDB } from '../../../../utilities/axiosConfig';
import type { RequestEvent } from './$types';

export const GET = async ({ url }: RequestEvent) => {
	const page = url.searchParams.get('page') ?? '1';
	const with_genres = url.searchParams.get('with_genres') ?? '';

	try {
		const movies = await TMDB.get(
			`/discover/movie?page=${page}${with_genres ? `&with_genres=${with_genres}` : ''}`,
			{ timeout: 2000 }
		);
		const data = await movies.data;

		return new Response(JSON.stringify(data.results), { status: 200 });
	} catch (err) {
		throw error(400, JSON.stringify(err));
	}
};
