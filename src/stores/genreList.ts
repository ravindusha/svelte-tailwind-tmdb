import { writable } from 'svelte/store';
import type { Genre } from '../types/Genre';

export const genreList = writable<Genre[]>();
