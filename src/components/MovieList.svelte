<script lang="ts">
	import { configData } from '../stores/config';
	import { filteredMoviePage, filteredMovies } from '../stores/filteredMovies';
	import { genreList } from '../stores/genreList';
	import { TMDB } from '../utilities/axiosConfig';
	import MovieCategories from './MovieCategories.svelte';
	import MoviePosterCard from './MoviePosterCard.svelte';

	let selectedGenres: number[] = [];

	const getMoviesFilteredByGenre = async (page: number) => {
		try {
			const movies = await TMDB.get(
				`/discover/movie?page=${page}${
					selectedGenres.length ? `&with_genres=${selectedGenres.join(',')}` : ''
				}`
			);
			if (page > 1) {
				filteredMovies.update((movieData) => [...movieData, ...movies.data.results]);
			} else {
				filteredMovies.set(movies.data.results);
			}
			filteredMoviePage.set(page);
		} catch (error) {
			console.error(error);
		}
	};

	$: if ($configData && $genreList) {
		getMoviesFilteredByGenre(1);
	}

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
