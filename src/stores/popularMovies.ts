import { writable } from 'svelte/store';
import type { Movie } from '../types/Movie';

export const popularMovies = writable<Movie[]>([]);
