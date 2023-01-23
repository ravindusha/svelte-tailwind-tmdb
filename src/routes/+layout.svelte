<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.css';
	import Header from '../components/Header.svelte';

	// export let data: LayoutData;
</script>

<div class="h-screen relative">
	<Header />
	<slot />
</div>
