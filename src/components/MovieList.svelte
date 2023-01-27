<script lang="ts">
	import { browser } from '$app/environment';
	import { filteredMoviePage, filteredMovies } from '../stores/filteredMovies';
	import type { Movie } from '../types/Movie';
	import MovieCategories from './MovieCategories.svelte';
	import MoviePosterCard from './MoviePosterCard.svelte';

	let selectedGenres: number[] = [];

	const getMoviesFilteredByGenre = async (page: number) => {
		if (browser) {
			try {
				const res = await fetch(
					`/api/discover/movie?page=${page}${
						selectedGenres.length ? `&with_genres=${selectedGenres.join(',')}` : ''
					}`
				);
				const movies: Movie[] = await res.json();
				if (page > 1) {
					filteredMovies.update((movieData) => {
						const newMovies = movies.filter((m) => !movieData.map((m) => m.id).includes(m.id));
						return [...movieData, ...newMovies];
					});
				} else {
					filteredMovies.set(movies);
				}
				filteredMoviePage.set(page);
			} catch (error) {
				console.error(error);
			}
		}
	};

	$: if (selectedGenres) {
		getMoviesFilteredByGenre(1);
	}

	const handleGenreClick = (e: CustomEvent) => {
		const { genreId } = e.detail;
		if (selectedGenres.includes(genreId)) {
			selectedGenres = selectedGenres.filter((g) => g !== genreId);
		} else {
			selectedGenres = [...selectedGenres, genreId];
		}
	};

	const loadMoreMovies = () => {
		getMoviesFilteredByGenre($filteredMoviePage + 1);
	};
</script>

<div class="w-full xl:px-40 px-20 py-20 flex flex-col gap-5">
	<h2 class="text-2xl">Movies</h2>
	<MovieCategories on:genreClick={handleGenreClick} {selectedGenres} />
	<div class="flex flex-wrap gap-5">
		{#each $filteredMovies as movie (movie.id)}
			<MoviePosterCard {movie} />
		{/each}
	</div>
	<div class="w-full flex items-center justify-center mt-3">
		<button class="px-3 py-2 border rounded-md text-gray" on:click={loadMoreMovies}
			>Load more...</button
		>
	</div>
</div>
