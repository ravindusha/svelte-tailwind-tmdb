<script lang="ts">
	import { configData } from '../stores/config';
	import { genreList } from '../stores/genreList';
	import { nowPlayingMovies } from '../stores/nowPlayingMovies';
	import { TMDB } from '../utilities/axiosConfig';
	import MoviePosterCard from './MoviePosterCard.svelte';

	const getNowPlayingMovies = async () => {
		try {
			const res = await TMDB.get('/movie/now_playing');
			nowPlayingMovies.set(res.data.results);
		} catch (error) {
			console.error(error);
		}
	};

	$: if ($configData && $genreList) {
		getNowPlayingMovies();
	}
</script>

<div class="w-full xl:px-40 px-20 py-20">
	<h2 class="text-2xl">Now Playing</h2>
	<div class="flex gap-5 flex-wrap pt-4">
		{#each $nowPlayingMovies.splice(0, 7) as movie (movie.id)}
			<MoviePosterCard {movie} />
		{/each}
	</div>
</div>
