<script lang="ts">
	import { fade } from 'svelte/transition';
	import MovieDetailsOverview from '../../../components/MovieDetailsOverview.svelte';
	import MovieTrailer from '../../../components/MovieTrailer.svelte';
	import Reviews from '../../../components/Reviews.svelte';
	import SimilarMovies from '../../../components/SimilarMovies.svelte';
	import { configData } from '../../../stores/config';
	import { genreList } from '../../../stores/genreList';
	import type { Video } from '../../../types/Video';
	import { generatePosterImagePath } from '../../../utilities/generateImagePaths';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ movie } = data);

	let posterImagePath = '';
	let genres: string[] = [];
	let officialTrailer: Video | undefined;

	$: if (movie) {
		officialTrailer = movie.videos?.results.find(
			(v) => v.type === 'Trailer' && v.site === 'YouTube'
		);
	}

	$: if ($configData && movie) {
		posterImagePath = generatePosterImagePath(movie.poster_path);
	}
	$: if ($genreList && movie) {
		genres = movie.genres.map((g) => g.name);
	}
</script>

<div class="w-full border-t border-gray mt-8 xl:px-40 px-20 py-20" transition:fade>
	<MovieDetailsOverview {movie} {genres} {posterImagePath} />

	{#if officialTrailer}
		<MovieTrailer videoKey={officialTrailer.key} />
	{/if}
	{#if movie?.similar?.results.length}
		<SimilarMovies similarMovies={movie?.similar?.results} />
	{/if}
	{#if movie.reviews?.results.length}
		<Reviews reviews={movie.reviews.results} />
	{/if}
</div>

<style>
	li {
		@apply cursor-pointer;
	}
	li:hover {
		@apply opacity-80;
	}
</style>
