<script lang="ts">
	import { afterUpdate, onDestroy, onMount } from 'svelte';
	import Featured from '../components/Featured.svelte';
	import Footer from '../components/Footer.svelte';
	import MovieList from '../components/MovieList.svelte';
	import NewsLetter from '../components/NewsLetter.svelte';
	import NowPlaying from '../components/NowPlaying.svelte';
	import { configData } from '../stores/config';
	import { genreList } from '../stores/genreList';
	import type { PageData } from './$types';

	export let data: PageData;

	const { configuration, genres, popularMovies, nowPlaying } = data;

	let movieIndex = 0;

	let interval: NodeJS.Timer;

	const changeMovieIndex = () => {
		movieIndex++;
		if (movieIndex > 4) {
			movieIndex = 0;
		}
	};

	onMount(() => {
		interval = setInterval(() => {
			changeMovieIndex();
		}, 10000);
	});

	afterUpdate(() => {
		configData.set(configuration);
		genreList.set(genres);
	});

	const handleSlideChange = (event: CustomEvent) => {
		movieIndex = event.detail.index;
	};

	onDestroy(() => clearInterval(interval));
</script>

<div>
	<Featured
		movie={popularMovies[movieIndex]}
		currentSlide={movieIndex}
		on:slideChange={handleSlideChange}
	/>
	<NowPlaying nowPlayingMovies={nowPlaying} />
	<MovieList />
	<NewsLetter />
	<Footer />
</div>
