import { error } from '@sveltejs/kit';
import { TMDB } from '../../../../utilities/axiosConfig';

export const GET = async () => {
	try {
		const popularMovies = await TMDB.get('/movie/now_playing', { timeout: 2000 });
		const data = await popularMovies.data;

		return new Response(JSON.stringify(data.results), { status: 200 });
	} catch (err) {
		throw error(400, JSON.stringify(err));
	}
};
