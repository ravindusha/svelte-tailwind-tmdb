import { error } from '@sveltejs/kit';
import { TMDB } from '../../../../../utilities/axiosConfig';

export const GET = async () => {
	try {
		const genres = await TMDB.get('/genre/movie/list', { timeout: 2000 });
		const data = await genres.data;

		return new Response(JSON.stringify(data.genres), { status: 200 });
	} catch (err) {
		throw error(400, JSON.stringify(err));
	}
};
