<script>
	export let slideCount = 5;
	export let currentSlide = 0;

	let slides = Array.from(Array(slideCount));
</script>

<div class="flex gap-5 flex-wrap">
	{#each slides as slide, i}
		<div class="w-3 h-3 rounded-full  {i === currentSlide ? 'bg-pink' : 'bg-white'}" />
	{/each}
</div>
