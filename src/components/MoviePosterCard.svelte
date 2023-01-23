<script lang="ts">
	import type { Movie } from '../types/Movie';
	import { generateGenreList } from '../utilities/generateGenreList';
	import { generatePosterImagePath } from '../utilities/generateImagePaths';

	export let movie: Movie;

	$: posterImage = generatePosterImagePath(movie.poster_path);

	$: genres = generateGenreList(movie.genre_ids);
</script>

<div
	class="relative flex flex-col items-center overflow-hidden w-52 gap-1 rounded-md hover:opacity-80 cursor-pointer "
>
	<img src={posterImage} alt={movie.title} class="w-52 h-72 object-cover" />
	<h4 class="text-xs text-center text-white">{movie.title}</h4>
	<h4 class="text-xs text-center text-gray ">
		{genres.slice(0, 3).join(', ')}
	</h4>
	<div
		class="absolute right-0 top-0 w-12 h-9 gap-0 bg-yellow-300 flex flex-col items-center justify-center"
	>
		<h5 class="text-black font-extrabold text-xs">{movie.vote_average}</h5>
		<h5 class="text-black text-xs">votes</h5>
	</div>
</div>
