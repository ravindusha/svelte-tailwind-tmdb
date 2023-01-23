import { get } from 'svelte/store';
import { configData } from '../stores/config';

export const generateBackdropImagePath = (backdropPath: string) => {
	const config = get(configData);
	if (config) {
		return config.images.base_url + config.images.backdrop_sizes[3] + backdropPath;
	} else {
		return '';
	}
};

export const generatePosterImagePath = (posterPath: string) => {
	const config = get(configData);
	if (config) {
		return config.images.base_url + config.images.poster_sizes[3] + posterPath;
	} else {
		return '';
	}
};
