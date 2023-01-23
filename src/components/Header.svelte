<script lang="ts">
	import SearchIcon from '../assets/icons/SearchIcon.svelte';
	import NotificationIcon from '../assets/icons/NorificationIcon.svelte';
	import UserProfileIcon from '../assets/icons/UserProfileIcon.svelte';
	import Logo from '../assets/icons/Logo.svelte';
</script>

<nav class="relative flex justify-between xl:px-40 px-20 pt-12 w-full h-20 items-center z-10">
	<div class="scale-50">
		<Logo />
	</div>
	<div>
		<ul class="list-none flex xl:gap-10 gap-5">
			{#each ['Home', 'Movies', 'TV Series', 'Animated Movies', 'My List'] as link, i}
				<li class="cursor-pointer hover:opacity-80">{link}</li>
			{/each}
		</ul>
	</div>
	<div>
		<ul class="list-none flex xl:gap-5 gap-1">
			<li class="cursor-pointer hover:opacity-80"><SearchIcon /></li>
			<li class="cursor-pointer hover:opacity-80">
				<NotificationIcon />
			</li>
			<li class="cursor-pointer hover:opacity-80">
				<UserProfileIcon />
			</li>
		</ul>
	</div>
</nav>
