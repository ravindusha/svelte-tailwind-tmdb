<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { genreList } from '../stores/genreList';
	const dipatch = createEventDispatcher();

	export let selectedGenres: number[];

	const handleGenreClick = (genreId: number) => {
		dipatch('genreClick', { genreId });
	};
</script>

<div class="w-full ">
	<div class="flex flex-wrap gap-4 justify-between">
		{#if $genreList}
			{#each $genreList as genre (genre.id)}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					on:click={() => handleGenreClick(genre.id)}
					class="bg-white py-3 px-4 rounded-full w-36 flex items-center justify-center cursor-pointer hover:text-pink border-solid hover:border-pink  border-2  {selectedGenres.includes(
						genre.id
					)
						? 'text-pink border-pink'
						: 'text-black border-black'}"
				>
					<h4 class="text-md font-bold whitespace-nowrap">{genre.name}</h4>
				</div>
			{/each}
		{/if}
	</div>
</div>
