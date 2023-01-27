<script lang="ts">
	import type { Movie } from '../types/Movie';
	import { generateGenreList } from '../utilities/generateGenreList';
	import { generateBackdropImagePath } from '../utilities/generateImagePaths';
	import Slider from './Slider.svelte';
	export let movie: Movie;
	export let currentSlide: number;
	let genres: string[];

	let backdropImagePath: string;

	$: if (movie) {
		backdropImagePath = generateBackdropImagePath(movie.backdrop_path);
	}

	$: if (movie) {
		genres = generateGenreList(movie.genre_ids);
	}
</script>

<div class="w-full h-full relative">
	<div
		class=" relative left-0 top-0 w-full h-screen bg-gradient-to-r from-blue-900 to-black-500 -mt-20  bg-cover bg-no-repeat"
		style={movie && backdropImagePath ? `background-image: url(${backdropImagePath})` : ''}
	>
		<div class="w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.5)]" />
	</div>
	<div class="absolute left-0 top-0 w-full h-full xl:px-40 px-20 ">
		{#if movie}
			<div class="grid grid-cols-5 grid-rows-[1fr_50px] h-full">
				<div class="col-start-1 col-span-2 flex flex-col gap-5 justify-center h-full">
					<h4>
						{#if genres.length}
							{genres.join(' | ')}
						{/if}
					</h4>
					<h2 class="uppercase text-2xl font-bold font-serif">{movie.title}</h2>
					<p>
						{movie.overview}
					</p>
					<div class="flex gap-3 items-center mb-10">
						<span>Rating {movie.vote_average}</span>
						<span>Release Date {movie.release_date}</span>
						<span class="border px-1">16+</span>
					</div>
					<div class="flex gap-5">
						<button class="px-5 py-3 rounded-full bg-white text-pink font-bold text-sm w-36"
							>Watch now</button
						>
						<button class="px-5 py-3 rounded-full bg-pink text-white font-bold text-sm w-36"
							>Add to list</button
						>
					</div>
				</div>
				<div class="h-5 row-start-2 col-span-full flex items-center justify-center">
					<Slider {currentSlide} on:slideChange />
				</div>
			</div>
		{/if}
	</div>
</div>

<!-- 
<div
	class="w-full h-screen bg-gradient-to-r from-blue-900 to-black-500 -mt-20 pt-32 xl:px-40 px-20 bg-cover bg-no-repeat bg-center"
	style={movie?.title ? `background-image: url(${movie.title.image.url})` : ''}
>
	{#if movie}
		<div class="grid grid-cols-5 h-full">
			<div class="col-start-1 col-span-2 flex flex-col gap-5 justify-center">
				<h4>
					{#each movie.genres as genre, i}
						<span>{genre}</span>
						{#if i !== movie.genres.length - 1}
							<span> | </span>
						{/if}
					{/each}
				</h4>
				<h2 class="uppercase">{movie.title.title}</h2>
				<p>
					{movie.plotSummary.text}
				</p>
				<div class="flex gap-3 items-center mb-10">
					<span>IMDB {movie.ratings.rating}</span>
					<span>{movie.title.runningTimeInMinutes} minutes</span>
					<span class="border px-1">16+</span>
				</div>
				<div class="flex gap-5">
					<button class="px-5 py-3 rounded-full bg-white text-pink font-bold text-sm w-36"
						>Watch now</button
					>
					<button class="px-5 py-3 rounded-full bg-pink text-white font-bold text-sm w-36"
						>Add to list</button
					>
				</div>
			</div>
		</div>
	{/if}
</div> -->
