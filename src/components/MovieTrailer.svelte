<script lang="ts">
	export let videoKey: string;
</script>

<div class="py-5 mt-5 flex flex-col gap-5">
	<div class="w-full flex justify-center">
		<iframe
			width="853"
			height="505"
			src="https://www.youtube.com/embed/{videoKey}"
			title="trailer-video"
		/>
	</div>
</div>
