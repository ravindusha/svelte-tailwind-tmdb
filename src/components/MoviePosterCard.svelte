<script lang="ts">
	import { fade } from 'svelte/transition';
	import { configData } from '../stores/config';
	import type { Movie } from '../types/Movie';
	import { generateGenreList } from '../utilities/generateGenreList';
	import { generatePosterImagePath } from '../utilities/generateImagePaths';

	export let movie: Movie;
	let genres: string[] = [];
	let posterImage = '';

	$: if (movie && $configData) {
		posterImage = generatePosterImagePath(movie.poster_path);
		genres = generateGenreList(movie.genre_ids);
	}
</script>

<a href="/movie/{movie.id}">
	<div
		transition:fade
		class="relative flex flex-col items-center overflow-hidden w-52 gap-1 hover:opacity-80 cursor-pointer "
	>
		{#if movie.poster_path}
			<img src={posterImage} alt={movie.title} class="w-52 h-72 object-cover rounded-md" />
		{:else}
			<div class="w-52 h-72 bg-slate-900" />
		{/if}
		<h4 class="text-xs text-center text-white">{movie.title}</h4>
		<h4 class="text-xs text-center text-gray ">
			{genres.slice(0, 3).join(', ')}
		</h4>
		<div
			class="absolute right-0 top-0 w-12 h-9 gap-0 bg-yellow-300 flex flex-col items-center justify-center rounded-tr-md"
		>
			<h5 class="text-black font-extrabold text-xs">{movie.vote_average?.toFixed(1)}</h5>
			<h5 class="text-black text-xs">votes</h5>
		</div>
	</div>
</a>
