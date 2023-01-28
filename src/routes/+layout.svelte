<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.css';
	import Header from '../components/Header.svelte';
	import { configData } from '../stores/config';
	import { genreList } from '../stores/genreList';
	import { afterUpdate } from 'svelte';

	export let data: LayoutData;

	const { configuration, genres } = data;

	afterUpdate(() => {
		configData.set(configuration);
		genreList.set(genres);
	});
</script>

<div class="h-screen relative">
	<Header />
	<slot />
</div>
