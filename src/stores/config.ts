import { writable } from 'svelte/store';
import type { Config } from '../types/Config';

export const configData = writable<Config>();
