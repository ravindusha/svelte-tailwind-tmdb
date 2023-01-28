<script lang="ts">
	import type { Movie } from '../types/Movie';
	import MoviePosterCard from './MoviePosterCard.svelte';

	export let nowPlayingMovies: Array<Movie> = [];
</script>

<div class="w-full xl:px-40 px-20 py-20">
	<h2 class="text-2xl">Now Playing</h2>
	<div class="flex gap-5 flex-wrap pt-4">
		{#each nowPlayingMovies?.splice(0, 7) as movie (movie.id)}
			<MoviePosterCard {movie} />
		{/each}
	</div>
</div>
