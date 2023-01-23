import { get } from 'svelte/store';
import { genreList } from '../stores/genreList';

export const generateGenreList = (genreIds: number[]) => {
	const genres = get(genreList);
	if (genres) {
		return genres.filter((g) => genreIds.includes(g.id)).map((g) => g.name);
	} else {
		return [];
	}
};
