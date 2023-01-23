<script lang="ts">
	import { configData } from '../stores/config';
	import { filteredMovies } from '../stores/filteredMovies';
	import { genreList } from '../stores/genreList';
	import { TMDB } from '../utilities/axiosConfig';
	import MovieCategories from './MovieCategories.svelte';
	import MoviePosterCard from './MoviePosterCard.svelte';

	let selectedGenres: number[] = [];

	const getMoviesFilteredByGenre = async () => {
		try {
			const movies = await TMDB.get(
				`/discover/movie${selectedGenres.length ? `?with_genres=${selectedGenres.join(',')}` : ''}`
			);
			filteredMovies.set(movies.data.results);
		} catch (error) {
			console.error(error);
		}
	};

	$: if ($configData && $genreList) {
		getMoviesFilteredByGenre();
	}

	$: if (selectedGenres) {
		getMoviesFilteredByGenre();
	}

	const handleGenreClick = (e: CustomEvent) => {
		const { genreId } = e.detail;
		if (selectedGenres.includes(genreId)) {
			selectedGenres = selectedGenres.filter((g) => g !== genreId);
		} else {
			selectedGenres = [...selectedGenres, genreId];
		}
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
</div>
