<script lang="ts">
	import SearchIcon from '../assets/icons/SearchIcon.svelte';
	import NotificationIcon from '../assets/icons/NorificationIcon.svelte';
	import UserProfileIcon from '../assets/icons/UserProfileIcon.svelte';
	import Logo from '../assets/icons/Logo.svelte';

	const links = [
		{ title: 'Home', link: '/' },
		{ title: 'Movies', link: '/' },
		{ title: 'TV Series', link: '/' },
		{ title: 'Animated Movies', link: '/' },
		{ title: 'My List', link: '/' }
	];
</script>

<nav class="relative flex justify-between xl:px-40 px-20 pt-12 w-full h-20 items-center z-10">
	<div class="scale-50">
		<a href="/">
			<Logo />
		</a>
	</div>
	<div>
		<ul class="list-none flex xl:gap-10 gap-5">
			{#each links as link, i}
				<li class="cursor-pointer hover:opacity-80">
					<a href={link.link}>{link.title}</a>
				</li>
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
