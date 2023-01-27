<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Featured from '../components/Featured.svelte';
	import Footer from '../components/Footer.svelte';
	import MovieList from '../components/MovieList.svelte';
	import NewsLetter from '../components/NewsLetter.svelte';
	import NowPlaying from '../components/NowPlaying.svelte';
	import { configData } from '../stores/config';
	import { genreList } from '../stores/genreList';
	import { popularMovies } from '../stores/popularMovies';
	import { TMDB } from '../utilities/axiosConfig';

	let movieIndex = 0;

	let interval: NodeJS.Timer;

	const changeMovieIndex = () => {
		movieIndex++;
		if (movieIndex > 4) {
			movieIndex = 0;
		}
	};

	onMount(async () => {
		try {
			const config = await TMDB.get('/configuration', { timeout: 2000 });
			configData.set(config.data);

			const genres = await TMDB.get('/genre/movie/list');
			genreList.set(genres.data.genres);

			const res = await TMDB.get('/movie/popular');
			popularMovies.set(res.data.results);
		} catch (error) {
			console.error(error);
		}

		interval = setInterval(() => {
			changeMovieIndex();
		}, 10000);
	});

	const handleSlideChange = (event: CustomEvent) => {
		movieIndex = event.detail.index;
	};

	onDestroy(() => clearInterval(interval));
</script>

<Featured
	movie={$popularMovies[movieIndex]}
	currentSlide={movieIndex}
	on:slideChange={handleSlideChange}
/>
<NowPlaying />
<MovieList />
<NewsLetter />
<Footer />
