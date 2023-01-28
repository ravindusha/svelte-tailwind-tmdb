<script lang="ts">
	import { fade } from 'svelte/transition';
	import BookmarkIcon from '../../../assets/icons/BookmarkIcon.svelte';
	import DownloadIcon from '../../../assets/icons/DownloadIcon.svelte';
	import ShareIcon from '../../../assets/icons/ShareIcon.svelte';
	import MoviePosterCard from '../../../components/MoviePosterCard.svelte';
	import type { Video } from '../../../types/Video';
	import { generatePosterImagePath } from '../../../utilities/generateImagePaths';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ movie } = data);

	let posterImagePath = '';
	let genres: string[] = [];
	let officialTrailer: Video | undefined;

	$: if (movie) {
		posterImagePath = generatePosterImagePath(movie.poster_path);
		genres = movie.genres.map((g) => g.name);

		officialTrailer = movie.videos?.results.find(
			(v) => v.type === 'Trailer' && v.site === 'YouTube'
		);
	}
</script>

<div class="w-full border-t border-gray mt-8 xl:px-40 px-20 py-20" transition:fade>
	<div class="flex gap-20 w-full">
		<div class="basis-1/3">
			<img src={posterImagePath} alt="movie-poster" class="w-80" />
		</div>
		<div class="flex flex-col gap-5 basis-2/3">
			<div class="flex flex-col gap-1">
				<h1 class="text-2xl">{movie.title}</h1>
				<h1 class="text-xl text-gray">{movie.tagline}</h1>
			</div>
			<h3 class="text-lg">{genres.join(' | ')}</h3>
			<h3 class="text-lg">{movie.vote_average.toFixed(1)} / 10</h3>
			<h3 class="text-lg">{movie.runtime} minutes</h3>
			<h3 class="text-lg">{movie.release_date}</h3>
			<div class="flex gap-3">
				<h3 class="text-lg">{movie.spoken_languages?.[0].english_name}</h3>
				<h3 class="text-lg">{movie.production_countries?.[0].iso_3166_1}</h3>
			</div>
			<div class="flex gap-1">
				<h3 class="text-lg whitespace-nowrap">Actors :</h3>
				<p class="text-lg text-gray">
					{movie?.credits?.cast
						.map((c) => c.name)
						.slice(0, 15)
						.join(', ')}
				</p>
			</div>
			<ul class="flex gap-8 items-center">
				<li>
					<BookmarkIcon />
				</li>
				<li>
					<DownloadIcon />
				</li>
				<li>
					<ShareIcon />
				</li>
				<li>
					<button class="px-5 py-2 border border-gray rounded-md  text-sm">Watch Trailer</button>
				</li>
			</ul>
		</div>
	</div>
	<div class="py-5 mt-5 flex flex-col gap-5">
		<h2 class="text-xl">Description</h2>
		<p class="text-md text-gray">{movie.overview}</p>
	</div>
	{#if officialTrailer}
		<div class="py-5 mt-5 flex flex-col gap-5">
			<div class="w-full flex justify-center">
				<iframe
					width="853"
					height="505"
					src="https://www.youtube.com/embed/{officialTrailer.key}"
					title="trailer-video"
				/>
			</div>
		</div>
	{/if}
	{#if movie?.similar?.results}
		<div class="py-5 mt-5 flex flex-col gap-5">
			<h2 class="text-xl">You may also like</h2>
			<div class="flex gap-5 flex-wrap pt-4">
				{#each movie?.similar?.results?.slice(0, 7) as similar (similar.id)}
					<MoviePosterCard movie={similar} />
				{/each}
			</div>
		</div>
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
