<script lang="ts">
	import BookmarkIcon from '../assets/icons/BookmarkIcon.svelte';
	import DownloadIcon from '../assets/icons/DownloadIcon.svelte';
	import ShareIcon from '../assets/icons/ShareIcon.svelte';
	import type { MovieDetails } from '../types/MovieDetails';

	export let movie: MovieDetails;
	export let posterImagePath: string;
	export let genres: string[] = [];
</script>

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
