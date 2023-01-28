<script lang="ts">
	import type { Movie } from '../types/Movie';
	import MoviePosterCard from './MoviePosterCard.svelte';

	export let similarMovies: Movie[] = [];
</script>

<div class="py-5 mt-5 flex flex-col gap-5">
	<h2 class="text-xl">You may also like</h2>
	<div class="flex gap-5 flex-wrap pt-4">
		{#each similarMovies?.slice(0, 7) as similar (similar.id)}
			<MoviePosterCard movie={similar} />
		{/each}
	</div>
</div>
