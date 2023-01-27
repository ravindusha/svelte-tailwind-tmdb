<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let slideCount = 5;
	export let currentSlide = 0;

	let slides = Array.from(Array(slideCount));

	const dispatch = createEventDispatcher();

	const onSliderClick = (i: number) => {
		dispatch('slideChange', { index: i });
	};
</script>

<div class="flex gap-5 flex-wrap">
	{#each slides as slide, i}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => onSliderClick(i)}
			class="w-3 h-3 rounded-full  {i === currentSlide
				? 'bg-pink'
				: 'bg-white'} hover:cursor-pointer"
		/>
	{/each}
</div>
